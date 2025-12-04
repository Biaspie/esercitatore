import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase-config.js";

document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const toggleAuth = document.getElementById('toggle-auth');
    const authSubtitle = document.getElementById('auth-subtitle');
    const toggleText = document.getElementById('toggle-text');
    const submitBtn = authForm.querySelector('button[type="submit"]');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordGroup = document.getElementById('confirm-password-group');
    const passwordGroup = document.getElementById('password-group');
    const forgotPasswordLink = document.getElementById('forgot-password');

    // Change placeholder to Username
    usernameInput.placeholder = "Username";
    usernameInput.type = "text";
    document.querySelector('label[for="username"]').textContent = "Username";

    let authMode = 'login'; // 'login', 'register', 'reset'

    // Check Protocol
    if (window.location.protocol === 'file:') {
        alert("ATTENZIONE: Stai aprendo il file direttamente. Devi usare il server locale!\n\nVai su: http://localhost:3000");
    }

    function updateUI() {
        if (authMode === 'login') {
            document.title = "Accedi - Esercitatore corso 9 VIT";
            document.querySelector('h1').textContent = "Benvenuto";
            authSubtitle.textContent = "Accedi per salvare i tuoi progressi";
            submitBtn.textContent = "Accedi";
            toggleText.innerHTML = 'Non hai un account? <a href="#" id="toggle-auth" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">Registrati</a>';

            confirmPasswordGroup.classList.add('hidden');
            passwordGroup.classList.remove('hidden');
            forgotPasswordLink.classList.remove('hidden');

            passwordInput.required = true;
            confirmPasswordInput.required = false;
        } else if (authMode === 'register') {
            document.title = "Registrati - Esercitatore corso 9 VIT";
            document.querySelector('h1').textContent = "Crea Account";
            authSubtitle.textContent = "Registrati per iniziare a salvare i tuoi punteggi";
            submitBtn.textContent = "Registrati";
            toggleText.innerHTML = 'Hai già un account? <a href="#" id="toggle-auth" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">Accedi</a>';

            confirmPasswordGroup.classList.remove('hidden');
            passwordGroup.classList.remove('hidden');
            forgotPasswordLink.classList.add('hidden');

            passwordInput.required = true;
            confirmPasswordInput.required = true;
        } else if (authMode === 'reset') {
            document.title = "Reset Password - Esercitatore corso 9 VIT";
            document.querySelector('h1').textContent = "Reset Password";
            authSubtitle.textContent = "Inserisci il tuo username per resettare la password";
            submitBtn.textContent = "Invia Email di Reset";
            toggleText.innerHTML = '<a href="#" id="back-to-login" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">Torna al Login</a>';

            confirmPasswordGroup.classList.add('hidden');
            passwordGroup.classList.add('hidden');
            forgotPasswordLink.classList.add('hidden');

            passwordInput.required = false;
            confirmPasswordInput.required = false;
        }

        // Re-attach event listeners for dynamic links
        const newToggleAuth = document.getElementById('toggle-auth');
        if (newToggleAuth) {
            newToggleAuth.addEventListener('click', (e) => {
                e.preventDefault();
                authMode = authMode === 'login' ? 'register' : 'login';
                updateUI();
            });
        }

        const backToLogin = document.getElementById('back-to-login');
        if (backToLogin) {
            backToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                authMode = 'login';
                updateUI();
            });
        }
    }

    toggleAuth.addEventListener('click', (e) => {
        e.preventDefault();
        authMode = 'register';
        updateUI();
    });

    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        authMode = 'reset';
        updateUI();
    });

    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim().replace(/\s/g, ''); // Remove spaces
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Check for 'admin' in username
        if (authMode === 'register' && username.toLowerCase().includes('admin')) {
            alert("Il nome utente non può contenere la parola 'admin'.");
            return;
        }

        // Create a fake email for Firebase
        const email = `${username}@quizapp.com`;

        try {
            submitBtn.disabled = true;
            submitBtn.textContent = "Caricamento...";

            if (authMode === 'login') {
                // Login
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Store user info for legacy compatibility
                localStorage.setItem('quizUser', username);
                window.location.href = 'home.html';
            } else if (authMode === 'register') {
                // Register
                if (password !== confirmPassword) {
                    alert("Le password non coincidono!");
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Registrati";
                    return;
                }

                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                alert("Registrazione completata! Ora verrai reindirizzato.");
                localStorage.setItem('quizUser', username);
                window.location.href = 'home.html';
            } else if (authMode === 'reset') {
                // Reset Password
                // Note: This sends an email to the fake address. Since it's fake, user won't receive it.
                // But we simulate the flow.
                await sendPasswordResetEmail(auth, email);
                alert(`Email di reset inviata a ${email} (Simulazione: Contatta l'amministratore se non hai accesso a questa email).`);
                authMode = 'login';
                updateUI();
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
            if (authMode === 'login') submitBtn.textContent = "Accedi";
            else if (authMode === 'register') submitBtn.textContent = "Registrati";
            else submitBtn.textContent = "Invia Email di Reset";
        }
    });
});
