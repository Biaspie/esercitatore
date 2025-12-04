// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-lite.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7FoiwaOrKPb1-tMN7uQsfsqi_lV4XOr0",
    authDomain: "start-in-test-mode-185eb.firebaseapp.com",
    projectId: "start-in-test-mode-185eb",
    storageBucket: "start-in-test-mode-185eb.firebasestorage.app",
    messagingSenderId: "673555785846",
    appId: "1:673555785846:web:00d7a5179dc067e4611757",
    measurementId: "G-HQMRKNNRJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
