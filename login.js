import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase-config.js";

document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const toggleAuth = document.getElementById('toggle-auth');
    const authSubtitle = document.getElementById('auth-subtitle');
    const toggleText = document.getElementById('toggle-text');
    const submitBtn = authForm.querySelector('button[type="submit"]');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Change placeholder to Username
    usernameInput.placeholder = "Username";
    usernameInput.type = "text";
    document.querySelector('label[for="username"]').textContent = "Username";

    let isLogin = true;

    // Check Protocol
    if (window.location.protocol === 'file:') {
        alert("ATTENZIONE: Stai aprendo il file direttamente. Devi usare il server locale!\n\nVai su: http://localhost:3000");
    }

    toggleAuth.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;

        if (isLogin) {
            document.title = "Accedi - Esercitatore corso 9 VIT";
            document.querySelector('h1').textContent = "Benvenuto";
            authSubtitle.textContent = "Accedi per salvare i tuoi progressi";
            submitBtn.textContent = "Accedi";
            toggleText.innerHTML = 'Non hai un account? <a href="#" id="toggle-auth" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">Registrati</a>';
        } else {
            document.title = "Registrati - Esercitatore corso 9 VIT";
            document.querySelector('h1').textContent = "Crea Account";
            authSubtitle.textContent = "Registrati per iniziare a salvare i tuoi punteggi";
            submitBtn.textContent = "Registrati";
            toggleText.innerHTML = 'Hai già un account? <a href="#" id="toggle-auth" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">Accedi</a>';
        }

        // Re-attach event listener to new element
        document.getElementById('toggle-auth').addEventListener('click', (e) => {
            // Trigger the original toggle logic
            toggleAuth.click();
        });
    });

    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim().replace(/\s/g, ''); // Remove spaces
        const password = passwordInput.value;

        // Check for 'admin' in username
        if (!isLogin && username.toLowerCase().includes('admin')) {
            alert("Il nome utente non può contenere la parola 'admin'.");
            return;
        }

        // Create a fake email for Firebase
        const email = `${username}@quizapp.com`;

        try {
            submitBtn.disabled = true;
            submitBtn.textContent = "Caricamento...";

            let userCredential;

            if (isLogin) {
                // Login
                userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Store user info for legacy compatibility
                localStorage.setItem('quizUser', username);
                window.location.href = 'home.html';
            } else {
                // Register
                userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                alert("Registrazione completata! Ora verrai reindirizzato.");
                localStorage.setItem('quizUser', username);
                window.location.href = 'home.html';
            }

        } catch (error) {
            console.error("Auth error:", error);
            let errorMessage = "Errore durante l'operazione.";

            // Map Firebase errors to Italian
            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessage = "Username non valido (usa solo lettere e numeri).";
                    break;
                case 'auth/user-disabled':
                    errorMessage = "Questo utente è stato disabilitato.";
                    break;
                case 'auth/user-not-found':
                    errorMessage = "Utente non trovato. Controlla lo username o registrati.";
                    break;
                case 'auth/wrong-password':
                    errorMessage = "Password errata.";
                    break;
                case 'auth/email-already-in-use':
                    errorMessage = "Questo username è già in uso.";
                    break;
                case 'auth/weak-password':
                    errorMessage = "La password è troppo debole (minimo 6 caratteri).";
                    break;
                case 'auth/network-request-failed':
                    errorMessage = "Errore di connessione. Controlla la tua rete.";
                    break;
                case 'auth/configuration-not-found':
                case 'auth/operation-not-allowed':
                    errorMessage = "ERRORE CONFIGURAZIONE: Devi attivare 'Email/Password' nella Console di Firebase (Authentication > Sign-in method).";
                    break;
                default:
                    errorMessage = error.message;
            }

            alert(errorMessage);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = isLogin ? "Accedi" : "Registrati";
        }
    });
});
