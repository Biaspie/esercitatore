import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase-config.js";
import { UserData } from "./user-data.js";

document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const toggleAuth = document.getElementById('toggle-auth'); // Now a button
    const authSubtitle = document.getElementById('auth-subtitle');
    const toggleText = document.getElementById('toggle-text'); // The <p> info text
    const submitBtn = authForm.querySelector('button[type="submit"]');
    const submitBtnTextSpan = submitBtn.querySelector('span.relative.z-10'); // The text span inside the retro button
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordGroup = document.getElementById('confirm-password-group');
    const passwordGroup = document.getElementById('password-group');
    const forgotPasswordLink = document.getElementById('forgot-password');

    let authMode = 'login'; // 'login', 'register', 'reset'

    // Check Protocol
    if (window.location.protocol === 'file:') {
        alert("ATTENZIONE: Stai aprendo il file direttamente. Devi usare il server locale!\n\nVai su: http://localhost:3000");
    }

    function updateUI() {
        // Reset classes
        confirmPasswordGroup.classList.add('hidden');
        passwordGroup.classList.remove('hidden');
        forgotPasswordLink.classList.remove('hidden');
        
        // Reset Input requirements
        passwordInput.required = true;
        confirmPasswordInput.required = false;

        const setSubmitText = (text) => {
            if (submitBtnTextSpan) submitBtnTextSpan.textContent = text;
            else submitBtn.textContent = text; // Fallback
        };

        const setToggleBtn = (icon, text) => {
             toggleAuth.innerHTML = `<span class="material-symbols-outlined text-[16px]">${icon}</span>${text}`;
        };

        if (authMode === 'login') {
            document.title = "Accedi - Quiz Quest";
            document.querySelector('h1').textContent = "Benvenuto";
            authSubtitle.textContent = "Accedi per salvare i tuoi progressi";
            setSubmitText("Accedi");
            
            // Toggle Button -> "Create Account"
            setToggleBtn('person_add', 'Crea Nuovo Account');
            if(toggleText) toggleText.textContent = "Non hai un account?";
            
            // Visibility
            confirmPasswordGroup.classList.add('hidden');
            passwordGroup.classList.remove('hidden');
            forgotPasswordLink.classList.remove('hidden');

        } else if (authMode === 'register') {
            document.title = "Registrati - Quiz Quest";
            document.querySelector('h1').textContent = "Crea Account";
            authSubtitle.textContent = "Registrati per iniziare a salvare i tuoi punteggi";
            setSubmitText("Registrati");

            // Toggle Button -> "Back to Login"
            setToggleBtn('login', 'Accedi al Gioco');
            if(toggleText) toggleText.textContent = "Hai già un account?";

            // Visibility
            confirmPasswordGroup.classList.remove('hidden');
            passwordGroup.classList.remove('hidden');
            forgotPasswordLink.classList.add('hidden');
            
            confirmPasswordInput.required = true;

        } else if (authMode === 'reset') {
            document.title = "Reset Password - Quiz Quest";
            document.querySelector('h1').textContent = "Reset Password";
            authSubtitle.textContent = "Inserisci il tuo username per resettare";
            setSubmitText("Invia Reset");

            // Toggle Button -> "Back to Login"
            setToggleBtn('arrow_back', 'Torna al Login');
            if(toggleText) toggleText.textContent = "";

            // Visibility
            confirmPasswordGroup.classList.add('hidden');
            passwordGroup.classList.add('hidden');
            forgotPasswordLink.classList.add('hidden');
            
            passwordInput.required = false;
        }
    }

    // Event Listeners (Attached ONCE)
    toggleAuth.addEventListener('click', (e) => {
        e.preventDefault();
        // Cycle logic: Login <-> Register. If Reset -> Login.
        if (authMode === 'reset') {
            authMode = 'login';
        } else {
            authMode = authMode === 'login' ? 'register' : 'login';
        }
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
        if (authMode === 'register' && username.toLowerCase().includes('admin') && username.toLowerCase() !== 'admin') {
            alert("Il nome utente non può contenere la parola 'admin'.");
            return;
        }

        // Create a fake email for Firebase
        const email = `${username}@quizapp.com`;

        try {
            submitBtn.disabled = true;
            if (submitBtnTextSpan) submitBtnTextSpan.textContent = "Caricamento...";
            
            if (authMode === 'login') {
                // Login
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Record Login Stat
                await UserData.recordLogin();

                // Sync username to Firestore
                await UserData.updateUserProfile(user.uid, { username: username, email: email });

                // Force Admin Role if username is 'admin'
                if (username === 'admin') {
                    await UserData.updateUserRole(user.uid, 'admin');
                }

                localStorage.setItem('quizUser', username);
                window.location.href = 'home.html';

            } else if (authMode === 'register') {
                // Register
                if (password !== confirmPassword) {
                    alert("Le password non coincidono!");
                    submitBtn.disabled = false;
                    updateUI(); // Reset text
                    return;
                }

                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                await UserData.createUserDocument(user.uid, email, username);

                if (username === 'admin') {
                    await UserData.updateUserRole(user.uid, 'admin');
                }

                await UserData.recordLogin();

                alert("Registrazione completata! Ora verrai reindirizzato.");
                localStorage.setItem('quizUser', username);
                window.location.href = 'home.html';

            } else if (authMode === 'reset') {
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
                case 'auth/invalid-email': errorMessage = "Username non valido (usa solo lettere e numeri)."; break;
                case 'auth/user-disabled': errorMessage = "Questo utente è stato disabilitato."; break;
                case 'auth/user-not-found': errorMessage = "Utente non trovato. Controlla lo username o registrati."; break;
                case 'auth/wrong-password': errorMessage = "Password errata."; break;
                case 'auth/email-already-in-use': errorMessage = "Questo username è già in uso."; break;
                case 'auth/weak-password': errorMessage = "La password è troppo debole (minimo 6 caratteri)."; break;
                case 'auth/network-request-failed': errorMessage = "Errore di connessione. Controlla la tua rete."; break;
                default: errorMessage = error.message;
            }

            alert(errorMessage);
        } finally {
            submitBtn.disabled = false;
            // Restore button text based on mode
            updateUI();
        }
    });

    // Initial UI Setup
    updateUI();
});

