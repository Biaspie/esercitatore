import { collection, addDoc, query, orderBy, limit, getDocs, where, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db } from "./firebase-config.js";

const LEADERBOARD_COLLECTION = 'leaderboard';

const SCORES_COLLECTION = 'scores';

// Expose functions globally
window.Leaderboard = {
    /**
     * Save a high score for a specific mode
     */
    saveScore: async (name, score, mode) => {
        try {
            if (!mode) {
                console.warn("No mode specified for saveScore");
                return false;
            }

            await addDoc(collection(db, SCORES_COLLECTION), {
                username: name,
                score: Number(score),
                mode: mode, // 'survival' or 'speed'
                timestamp: new Date().toISOString()
            });
            return true;
        } catch (e) {
            console.error("Error saving score:", e);
            throw e;
        }
    },

    /**
     * Get leaderboard data based on mode
     * @param {string} mode - 'total', 'survival', 'speed'
     */
    getLeaderboard: async (mode = 'total') => {
        try {
            const scores = [];

            if (mode === 'total') {
                // query 'users' collection by EXP (Total Score)
                const q = query(collection(db, 'users'), orderBy("exp", "desc"), limit(10));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    // Filter out admin
                    if (data.username && data.username.toLowerCase() !== 'admin') {
                        scores.push({
                            name: data.username,
                            score: data.exp || 0,
                            level: data.level || 1,
                            type: 'exp'
                        });
                    }
                });
            } else {
                // query 'scores' collection by score, filtered by mode
                // Note: Firestore requires a composite index for where() + orderBy().
                // If index is missing, we might need to fetch and filter/sort client side temporarily 
                // or just orderBy score and filter client side if volume is low.
                // For now, let's try strict query. If it fails due to index, we'll need to create it.
                // Actually, let's just get the top scores and filter by mode client side if needed 
                // OR simpler: just query all scores for the mode.

                // Firestore requires an index for: collection("scores").where("mode", "==", mode).orderBy("score", "desc")
                // To avoid blocking on index creation, we will fetch top 50 global scores and filter, 
                // OR we can just fetch the collection "scores" without ordering if it's small? 
                // No, let's try the proper query. If it fails, I'll catch and fallback or alert.

                // WAIT: If I can't create index immediately, I should probably just fetch all scores 
                // that match the mode (hopefully list isn't huge yet) and sort client side.
                // But `orderBy` is better.

                // Let's assume user can create index or we use client-side sort for now to be safe.
                // Client-side sort is safer for an immediate fix without index delays.

                const q = query(collection(db, SCORES_COLLECTION), where("mode", "==", mode));
                // We fetch all for that mode and sort top 10 client side to avoid index requirement block
                const querySnapshot = await getDocs(q);

                const allScores = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    // Filter out admin
                    if (data.username && data.username.toLowerCase() !== 'admin') {
                        allScores.push(data);
                    }
                });

                // Sort and Limit
                allScores.sort((a, b) => b.score - a.score);
                const top10 = allScores.slice(0, 10);

                top10.forEach(s => {
                    scores.push({
                        name: s.username,
                        score: s.score,
                        type: 'score'
                    });
                });
            }

            return scores;
        } catch (e) {
            console.error("Error getting leaderboard: ", e);
            // alert("Errore nel caricamento della classifica: " + e.message);
            return [];
        }
    }
};

console.log("Leaderboard module loaded");
