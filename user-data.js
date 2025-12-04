import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, collection, addDoc, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-lite.js";
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
    }
};
