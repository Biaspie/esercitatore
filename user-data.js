import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, collection, addDoc, query, orderBy, limit, getDocs, increment, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db, auth } from "./firebase-config.js";

const COLLECTION_NAME = "users";

export const UserData = {
    async getUserData() {
        const user = auth.currentUser;
        if (!user) return null;

        const docRef = doc(db, COLLECTION_NAME, user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            // Auto-fix inconsistent level/exp
            return await this.verifyAndFixLevel(user.uid, data);
        } else {
            return { favorites: [], errors: [] };
        }
    },

    async toggleFavorite(questionId) {
        const user = auth.currentUser;
        if (!user) return false;

        const docRef = doc(db, COLLECTION_NAME, user.uid);
        const docSnap = await getDoc(docRef);

        let favorites = [];
        if (docSnap.exists()) {
            favorites = docSnap.data().favorites || [];
        }

        const isFavorite = favorites.includes(questionId);

        try {
            if (isFavorite) {
                await updateDoc(docRef, {
                    favorites: arrayRemove(questionId)
                });
                return false; // Now not favorite
            } else {
                // Create doc if not exists, or update
                await setDoc(docRef, {
                    favorites: arrayUnion(questionId)
                }, { merge: true });
                return true; // Now favorite
            }
        } catch (e) {
            console.error("Error toggling favorite:", e);
            return isFavorite; // Return original state on error
        }
    },

    async logError(questionId) {
        const user = auth.currentUser;
        if (!user) return;

        const docRef = doc(db, COLLECTION_NAME, user.uid);

        try {
            await setDoc(docRef, {
                errors: arrayUnion(questionId)
            }, { merge: true });
        } catch (e) {
            console.error("Error logging error:", e);
        }
    },

    async removeError(questionId) {
        const user = auth.currentUser;
        if (!user) return;

        const docRef = doc(db, COLLECTION_NAME, user.uid);

        try {
            await updateDoc(docRef, {
                errors: arrayRemove(questionId)
            });
        } catch (e) {
            console.error("Error removing error:", e);
        }
    },

    async saveQuizResult(quizData) {
        const user = auth.currentUser;
        if (!user) return false;

        // Subcollection: users/{uid}/history
        const historyCollection = collection(db, COLLECTION_NAME, user.uid, "history");

        try {
            await addDoc(historyCollection, {
                ...quizData,
                timestamp: Date.now()
            });

            // Record global stat
            this.recordQuizCompletion();

            // EXP is now awarded incrementally during the quiz (in quiz.js)
            // so we don't add it here to avoid double counting.

            return true;
        } catch (e) {
            console.error("Error saving quiz result:", e);
            return false;
        }
    },

    async getRecentHistory(limitCount = 3) {
        const user = auth.currentUser;
        if (!user) return [];

        const historyCollection = collection(db, COLLECTION_NAME, user.uid, "history");
        const q = query(historyCollection, orderBy("timestamp", "desc"), limit(limitCount));

        try {
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (e) {
            console.error("Error fetching history:", e);
            return [];
        }
    },

    async getHistoryDetail(historyId) {
        const user = auth.currentUser;
        if (!user) return null;

        const docRef = doc(db, COLLECTION_NAME, user.uid, "history", historyId);

        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            }
            return null;
        } catch (e) {
            console.error("Error fetching history detail:", e);
            return null;
        }
    },

    async getRecentQuestionIds(limitCount = 10) {
        const user = auth.currentUser;
        if (!user) return [];

        const historyCollection = collection(db, COLLECTION_NAME, user.uid, "history");
        const q = query(historyCollection, orderBy("timestamp", "desc"), limit(limitCount));

        try {
            const querySnapshot = await getDocs(q);
            const recentIds = new Set();
            querySnapshot.docs.forEach(doc => {
                const data = doc.data();
                if (data.questions && Array.isArray(data.questions)) {
                    data.questions.forEach(q => {
                        if (q.id) recentIds.add(q.id);
                    });
                }
            });
            return Array.from(recentIds);
        } catch (e) {
            console.error("Error fetching recent question IDs:", e);
            return [];
        }
    },

    async getAllHistory() {
        const user = auth.currentUser;
        if (!user) return [];

        const historyCollection = collection(db, COLLECTION_NAME, user.uid, "history");
        const q = query(historyCollection, orderBy("timestamp", "desc")); // No limit

        try {
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (e) {
            console.error("Error fetching all history:", e);
            return [];
        }
    },

    // --- Admin & Stats Functions ---

    async createUserDocument(uid, email, username) {
        const docRef = doc(db, COLLECTION_NAME, uid);
        try {
            await setDoc(docRef, {
                username: username,
                email: email,
                role: 'user', // Default role
                createdAt: Date.now(),
                favorites: [],
                errors: [],
                exp: 0,
                level: 1
            }, { merge: true });
        } catch (e) {
            console.error("Error creating user doc:", e);
        }
    },

    async updateUserProfile(uid, data) {
        const docRef = doc(db, COLLECTION_NAME, uid);
        try {
            await setDoc(docRef, data, { merge: true });
            return true;
        } catch (e) {
            console.error("Error updating user profile:", e);
            return false;
        }
    },

    async recordLogin() {
        const date = new Date().toISOString().split('T')[0];
        const statsRef = doc(db, "stats", date);
        try {
            await setDoc(statsRef, {
                accesses: increment(1)
            }, { merge: true });
        } catch (e) {
            console.error("Error recording login:", e);
        }
    },

    async recordQuizCompletion() {
        const date = new Date().toISOString().split('T')[0];
        const statsRef = doc(db, "stats", date);
        try {
            await setDoc(statsRef, {
                quizzes: increment(1)
            }, { merge: true });
        } catch (e) {
            console.error("Error recording quiz completion:", e);
        }
    },

    async getAllUsers() {
        // Note: In a real app, this should be paginated and secured via rules/Admin SDK.
        // Here we assume client has permission (e.g., is admin)
        const usersCol = collection(db, COLLECTION_NAME);
        try {
            const snapshot = await getDocs(usersCol);
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (e) {
            console.error("Error getting all users:", e);
            return [];
        }
    },

    async updateUserRole(uid, newRole) {
        const docRef = doc(db, COLLECTION_NAME, uid);
        try {
            await updateDoc(docRef, { role: newRole });
            return true;
        } catch (e) {
            console.error("Error updating user role:", e);
            return false;
        }
    },

    async deleteUser(uid) {
        const docRef = doc(db, COLLECTION_NAME, uid);
        try {
            await deleteDoc(docRef);
            return true;
        } catch (e) {
            console.error("Error deleting user:", e);
            return false;
        }
    },

    async getGlobalStats() {
        const statsCol = collection(db, "stats");
        try {
            const snapshot = await getDocs(statsCol);
            return snapshot.docs.map(doc => ({ date: doc.id, ...doc.data() }));
        } catch (e) {
            console.error("Error getting global stats:", e);
            return [];
        }
    },

    // --- Reports Functions ---

    async submitReport(reportData) {
        const reportsCol = collection(db, "reports");
        try {
            await addDoc(reportsCol, {
                ...reportData,
                timestamp: Date.now(),
                status: 'open'
            });
            return true;
        } catch (e) {
            console.error("Error submitting report:", e);
            return false;
        }
    },

    async getReports() {
        const reportsCol = collection(db, "reports");
        const q = query(reportsCol, orderBy("timestamp", "desc"));
        try {
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (e) {
            console.error("Error getting reports:", e);
            return [];
        }
    },

    async deleteReport(reportId) {
        const docRef = doc(db, "reports", reportId);
        try {
            await deleteDoc(docRef);
            return true;
        } catch (e) {
            console.error("Error deleting report:", e);
            return false;
        }
    },

    // --- EXP & Level System ---

    async addExp(amount) {
        const user = auth.currentUser;
        if (!user) return null;

        const docRef = doc(db, COLLECTION_NAME, user.uid);

        try {
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) return null;

            const data = docSnap.data();
            let currentExp = data.exp || 0;
            let currentLevel = data.level || 1;

            let newExp = currentExp + amount;
            let newLevel = currentLevel;

            // Level Thresholds (Simple exponential-ish curve or fixed steps)
            // Level 1: 0-99 (100)
            // Level 2: 100-249 (150)
            // Level 3: 250-449 (200)
            // Level 4: 450-699 (250)
            // Level 5: 700-999 (300)
            // Level 6: 1000-1349 (350)
            // Level 7: 1350-1749 (400)
            // Level 8: 1750-2199 (450)
            // Level 9: 2200-2699 (500)
            // Level 10: 2700+ (Max)

            const getLevelThreshold = (lvl) => {
                if (lvl >= 10) return Infinity;
                // Base 100, +50 increment per level
                // L1->L2: 100
                // L2->L3: 100 + 150 = 250
                // L3->L4: 250 + 200 = 450
                // Formula: Threshold = PreviousThreshold + (100 + (lvl-1)*50)

                // Let's use a pre-calculated array for simplicity and performance
                const thresholds = [0, 200, 500, 900, 1400, 2000, 2700, 3500, 4400, 5400];
                return thresholds[lvl] || Infinity;
            };

            let leveledUp = false;

            // Check for level up
            // While loop in case they gain enough EXP to skip a level (unlikely with +10 but possible with bonuses)
            while (newLevel < 10 && newExp >= getLevelThreshold(newLevel)) {
                newLevel++;
                leveledUp = true;
            }

            await updateDoc(docRef, {
                exp: newExp,
                level: newLevel
            });

            return {
                newExp,
                newLevel,
                leveledUp,
                nextLevelThreshold: getLevelThreshold(newLevel)
            };

        } catch (e) {
            console.error("Error adding EXP:", e);
            return null;
        }
    },

    getLevelThresholds() {
        return [0, 200, 500, 900, 1400, 2000, 2700, 3500, 4400, 5400];
    },

    async verifyAndFixLevel(uid, data) {
        const currentExp = data.exp || 0;
        const currentLevel = data.level || 1;

        const thresholds = this.getLevelThresholds();
        let correctLevel = 1;

        // Calculate correct level based on EXP
        // Thresholds: [0, 200, 500...]
        // If exp is 250, it's >= 200 (index 1), so Level is 2 (index + 1)
        for (let i = thresholds.length - 1; i >= 0; i--) {
            if (currentExp >= thresholds[i]) {
                correctLevel = i + 1;
                break;
            }
        }

        // Cap at 10
        if (correctLevel > 10) correctLevel = 10;

        if (correctLevel !== currentLevel) {
            console.log(`Fixing User Level: Was ${currentLevel}, Should be ${correctLevel} (EXP: ${currentExp})`);

            const docRef = doc(db, COLLECTION_NAME, uid);
            try {
                await updateDoc(docRef, {
                    level: correctLevel
                });
                return { ...data, level: correctLevel };
            } catch (e) {
                console.error("Error fixing user level:", e);
                return data;
            }
        }

        return data;
    }
};
