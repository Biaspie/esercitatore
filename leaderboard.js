import { collection, addDoc, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-lite.js";
import { db } from "./firebase-config.js";

const LEADERBOARD_COLLECTION = 'leaderboard';

// Expose functions globally
window.Leaderboard = {
    saveScore: async (name, score) => {
        // Deprecated: Scores are now tracked via UserData EXP
        console.warn("Leaderboard.saveScore is deprecated. Use UserData.addExp instead.");
        return true;
    },

    getLeaderboard: async () => {
        try {
            // Query 'users' collection directly, ordered by EXP
            const q = query(collection(db, 'users'), orderBy("exp", "desc"), limit(10));
            const querySnapshot = await getDocs(q);
            const scores = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                // Only include users who have a username (registered)
                if (data.username) {
                    scores.push({
                        name: data.username,
                        score: data.exp || 0, // Display EXP as score
                        level: data.level || 1
                    });
                }
            });
            return scores;
        } catch (e) {
            console.error("Error getting leaderboard: ", e);
            return [];
        }
    }
};

console.log("Leaderboard module loaded");
