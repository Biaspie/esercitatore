import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, collection, addDoc, query, orderBy, limit, getDocs, increment, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-lite.js";
import { db, auth } from "./firebase-config.js";

const COLLECTION_NAME = "users";

export const UserData = {
    async getUserData() {
        const user = auth.currentUser;
        if (!user) return null;

        const docRef = doc(db, COLLECTION_NAME, user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
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
                errors: []
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
    }
};
