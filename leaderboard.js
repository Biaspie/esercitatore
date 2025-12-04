import { collection, addDoc, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-lite.js";
import { db } from "./firebase-config.js";

const LEADERBOARD_COLLECTION = 'leaderboard';

// Expose functions globally
window.Leaderboard = {
    saveScore: async (name, score) => {
        try {
            console.log("Attempting to save score...", { name, score });

            // Create a timeout promise (15 seconds)
            const timeout = new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Timeout connection (15s)")), 15000)
            );

            const docRef = await Promise.race([
                addDoc(collection(db, LEADERBOARD_COLLECTION), {
                    name: name,
                    score: score,
                    date: new Date().toISOString()
                }),
                timeout
            ]);

            console.log("Document written with ID: ", docRef.id);
            return true;
        } catch (e) {
            console.error("Error adding document: ", e);
            alert("Errore: " + e.message + "\n\nControlla la Console (F12) per dettagli.");
            return false;
        }
    },

    getLeaderboard: async () => {
        try {
            const q = query(collection(db, LEADERBOARD_COLLECTION), orderBy("score", "desc"), limit(10));
            const querySnapshot = await getDocs(q);
            const scores = [];
            querySnapshot.forEach((doc) => {
                scores.push(doc.data());
            });
            return scores;
        } catch (e) {
            console.error("Error getting documents: ", e);
            return [];
        }
    }
};

console.log("Leaderboard module loaded");
