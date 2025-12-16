// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const auth = getAuth(app);

// Enable Offline Persistence
enableIndexedDbPersistence(db).catch((err) => {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled in one tab at a a time.
        console.warn("Persistence failed: multiple tabs open");
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the features required to enable persistence
        console.warn("Persistence not supported");
    }
});

export { app, db, auth };
