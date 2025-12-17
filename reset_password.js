
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Check for serviceAccountKey.json
const serviceAccountPath = path.join(__dirname, 'serviceAccountKey.json');
if (!fs.existsSync(serviceAccountPath)) {
    console.error("ERRORE: File 'serviceAccountKey.json' non trovato nella cartella corrente.");
    console.error("Scaricalo dalla Firebase Console: Project Settings > Service Accounts > Generate New Private Key.");
    process.exit(1);
}

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("--- RESET PASSWORD UTENTE (ADMIN) ---");

rl.question('Inserisci Username o Email dell\'utente: ', (identifier) => {
    let email = identifier.trim();
    // Helper: auto-append domain if simple username provided
    if (!email.includes('@')) {
        email = email + '@portafoglio.app';
        console.log(`(Interpretato come: ${email})`);
    }

    // Verify user exists first
    admin.auth().getUserByEmail(email)
        .then((userRecord) => {
            console.log(`Utente trovato: ${userRecord.uid} (${userRecord.email})`);

            rl.question('Inserisci la NUOVA Password (min 6 caratteri): ', (newPassword) => {
                if (newPassword.length < 6) {
                    console.error("Errore: La password deve avere almeno 6 caratteri.");
                    process.exit(1);
                }

                admin.auth().updateUser(userRecord.uid, {
                    password: newPassword
                })
                    .then((userRecord) => {
                        console.log(`\nSUCCESSO! La password per l'utente ${userRecord.email} è stata aggiornata.`);
                        process.exit(0);
                    })
                    .catch((error) => {
                        console.error('Errore durante l\'aggiornamento:', error);
                        process.exit(1);
                    });
            });
        })
        .catch((error) => {
            console.error('Errore nel trovare l\'utente (o utente inesistente):', error.message);
            process.exit(1);
        });
});
