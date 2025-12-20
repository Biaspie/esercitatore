import { UserData } from './user-data.js';
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- SimpleC Mock Compiler Engine ---
class SimpleC {
    constructor(outputCallback, inputCallback) {
        this.outputCallback = outputCallback; // Function to handle print output
        this.inputCallback = inputCallback;   // Function to request input
        this.variables = {};
    }

    // Transpiles simplified C code to JavaScript for execution
    transpile(cCode) {
        let jsCode = cCode;

        // 0. Remove Comments (Crucial to prevent regex matching inside comments)
        jsCode = jsCode.replace(/\/\*[\s\S]*?\*\//g, ''); // Block comments
        jsCode = jsCode.replace(/\/\/.*$/gm, '');         // Line comments

        // 1. Remove standard includes
        jsCode = jsCode.replace(/#include\s+<.*?>/g, '');

        // 2. Handle main function wrapper
        // Allow for int main(), void main(), int main(void) with flexible whitespace
        // FIX: Preserve code BEFORE main (globals) and unwrap main
        const mainRegex = /(?:int|void)\s+main\s*\(\s*(?:void)?\s*\)\s*\{/;
        const mainMatch = jsCode.match(mainRegex);
        if (mainMatch) {
            const preMain = jsCode.substring(0, mainMatch.index);
            const body = jsCode.substring(mainMatch.index + mainMatch[0].length);
            // Replace the last closing brace with empty string (unwrap main)
            jsCode = preMain + "\n" + body.replace(/\}\s*$/, '');
        }

        // 3. printf -> await this.print
        jsCode = jsCode.replace(/\bprintf\b/g, 'await this.print');

        // 4. scanf -> await this.scan
        jsCode = jsCode.replace(/scanf\s*\(\s*"%d"\s*,\s*&(\w+)\s*\)\s*;/g, '$1 = parseInt(await this.scan());');
        jsCode = jsCode.replace(/scanf\s*\(\s*"%f"\s*,\s*&(\w+)\s*\)\s*;/g, '$1 = parseFloat(await this.scan());');
        jsCode = jsCode.replace(/scanf\s*\(\s*"%s"\s*,\s*&(\w+)\s*\)\s*;/g, '$1 = await this.scan();');

        // 5. Variable Declarations
        // 5a. Arrays: int arr[] = {1,2}; -> let arr = [1,2];
        jsCode = jsCode.replace(/\b(?:const\s+)?(?:unsigned\s+)?(int|float|double|char|long)\s+(\w+)\[\]\s*=\s*\{([^}]+)\};/g, 'let $2 = [$3];');

        // 5b. Standard types: int x; -> let x; | float y = 1.0; -> let y = 1.0;
        // Handles const, unsigned, and pointers (*ptr)
        jsCode = jsCode.replace(/\b(?:const\s+)?(?:unsigned\s+)?(?:int|float|double|char|long)(?:\s*\*+)?\s+/g, 'let ');

        // 6. Return 0 -> return
        jsCode = jsCode.replace(/return\s+0\s*;/g, 'return;');

        // Wrap in async IIFE
        return `(async () => { 
            try {
                ${jsCode}
            } catch(e) {
                this.error(e);
            }
        })()`;
    }

    async print(...args) {
        let output = "";

        if (typeof args[0] === 'string' && args[0].includes('%')) {
            let format = args[0];
            let argIndex = 1;
            /* 
               Improvement: Regex to capture format specifiers like %.2f, %05d 
               Matches: % followed by optional digits/dots, ending in d, s, or f
            */
            output = format.replace(/%[\d\.]*[dsf]/g, (match) => {
                let val = args[argIndex++];
                // Basic formatting support
                if (val !== undefined) {
                    if (match.endsWith('f') && typeof val === 'number' && match.includes('.')) {
                        // Extract precision if strictly %.Nf
                        const precision = match.match(/\.(\d+)f/);
                        if (precision) return val.toFixed(parseInt(precision[1]));
                    }
                    return val;
                }
                return match;
            });
            output = output.replace(/\\n/g, '<br>');
        } else {
            if (typeof args[0] === 'string') {
                output = args[0].replace(/\\n/g, '<br>');
            } else {
                output = args.join(' ');
            }
        }

        this.outputCallback(output);
    }

    async scan() {
        return await this.inputCallback();
    }

    error(e) {
        this.outputCallback(`<span class="text-danger">Runtime Error: ${e.message}</span>`);
        throw e;
    }

    async run(cCode) {
        const jsSource = this.transpile(cCode);
        console.log("Transpiled JS:", jsSource);
        try {
            const func = eval(jsSource);
            await func;
        } catch (e) {
            this.outputCallback(`<span class="text-danger">Syntax/Compiler Error: ${e.message}</span>`);
        }
    }
}

// --- Exercises Data ---
const EXERCISES = [
    {
        id: 1,
        title: "Hello World",
        desc: "Benvenuto nel mondo della programmazione C. Il primo passo è sempre salutare il mondo.",
        goal: "Usa la funzione <code>printf</code> per stampare la frase <code>Hello World</code> (segue nuova riga con \\n).",
        template: `#include <stdio.h>

int main() {
    // Scrivi il tuo codice qui
    
    return 0;
}`,
        check: (output) => output.includes("Hello World"),
        expectedDesc: "Stampa 'Hello World'"
    },
    {
        id: 2,
        title: "Le Variabili",
        desc: "Le variabili sono contenitori per i dati. In C, devi dichiarare il tipo della variabile (es. <code>int</code> per interi).",
        goal: "Dichiara una variabile intera chiamata <code>x</code>, assegnale il valore <code>10</code> e stampalo usando <code>printf(\"%d\", x);</code>.",
        template: `#include <stdio.h>

int main() {
    int x;
    // Assegna 10 a x
    
    // Stampa x
    
    return 0;
}`,
        check: (output) => output.includes("10"),
        expectedDesc: "Stampa '10'"
    },
    {
        id: 3,
        title: "Input Utente",
        desc: "Per rendere i programmi interattivi, usiamo <code>scanf</code> per leggere l'input dalla tastiera.",
        goal: "Dichiara una variabile <code>num</code>, leggi un numero dall'utente con <code>scanf(\"%d\", &num);</code> e poi ristampalo.",
        template: `#include <stdio.h>

int main() {
    int num;
    printf("Inserisci un numero: ");
    
    // Leggi input
    
    // Stampa il numero letto
    
    return 0;
}`,
        // inputSequence ignored in standard run, using manualCheck for validation
        manualCheck: async (runner) => {
            let out = "";
            runner.outputCallback = (t) => out += t;
            runner.inputCallback = async () => '42';
            await runner.run(runner.lastCode);
            return out.includes("42");
        },
        expectedDesc: "Legge e ristampa un numero"
    },
    {
        id: 4,
        title: "La Somma",
        desc: "L'informatica è calcolo. Sommiamo due variabili.",
        goal: "Dichiara due variabili <code>a = 5</code> e <code>b = 7</code>. Calcola la somma in una variabile <code>sum</code> e stampala.",
        template: `#include <stdio.h>

int main() {
    int a = 5;
    int b = 7;
    int sum;
    
    // Calcola somma
    
    // Stampa sum
    
    return 0;
}`,
        check: (output) => output.includes("12"),
        expectedDesc: "Stampa '12'"
    },
    {
        id: 5,
        title: "Condizioni (If/Else)",
        desc: "I programmi prendono decisioni usando <code>if</code>.",
        goal: "Leggi un numero. Se è maggiore di 10, stampa <code>Maggiore</code>, altrimenti stampa <code>Minore</code>.",
        template: `#include <stdio.h>

int main() {
    int val;
    printf("Inserisci numero: ");
    scanf("%d", &val);
    
    // Scrivi qui la condizione if/else
    
    return 0;
}`,
        manualCheck: async (runner) => {
            let out1 = "";
            runner.outputCallback = (t) => out1 += t;
            runner.inputCallback = async () => '15';
            await runner.run(runner.lastCode);
            if (!out1.includes("Maggiore")) return false;

            let out2 = "";
            runner.outputCallback = (t) => out2 += t;
            runner.inputCallback = async () => '5';
            await runner.run(runner.lastCode);
            if (!out2.includes("Minore")) return false;

            return true;
        }
    },
    {
        id: 6,
        title: "Pari o Dispari",
        desc: "L'operatore modulo <code>%</code> ci dà il resto della divisione.",
        goal: "Leggi un numero. Se è pari (resto divisione per 2 è 0) stampa <code>Pari</code>, altrimenti <code>Dispari</code>.",
        template: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    
    // Verifica pari o dispari
    
    return 0;
}`,
        manualCheck: async (runner) => {
            let out1 = "";
            runner.outputCallback = (t) => out1 += t;
            runner.inputCallback = async () => '4';
            await runner.run(runner.lastCode);

            let out2 = "";
            runner.outputCallback = (t) => out2 += t;
            runner.inputCallback = async () => '7';
            await runner.run(runner.lastCode);

            return out1.includes("Pari") && out2.includes("Dispari");
        }
    },
    {
        id: 7,
        title: "Ciclo For (Loop)",
        desc: "Ripetere le cose è noioso per l'uomo, facile per il computer.",
        goal: "Usa un ciclo <code>for</code> per stampare i numeri da 1 a 5 (inclusi), uno per riga.",
        template: `#include <stdio.h>

int main() {
    int i;
    // Scrivi il ciclo for
    
    return 0;
}`,
        check: (output) => {
            return output.includes("1") && output.includes("2") && output.includes("3") && output.includes("4") && output.includes("5");
        }
    },
    {
        id: 8,
        title: "Ciclo While",
        desc: "Il ciclo <code>while</code> continua finché la condizione è vera.",
        goal: "Usa <code>while</code> per stampare un conto alla rovescia da 5 a 1.",
        template: `#include <stdio.h>

int main() {
    int i = 5;
    // Usa while
    
    return 0;
}`,
        check: (output) => output.includes("5") && output.includes("1") && output.indexOf("5") < output.indexOf("1")
    },
    {
        id: 9,
        title: "Array (Vettori)",
        desc: "Un array è una lista di variabili dello stesso tipo.",
        goal: "Dichiara un array <code>arr</code> di 3 interi con valori 10, 20, 30. Stampa il secondo elemento (indice 1).",
        template: `#include <stdio.h>

int main() {
    // Dichiara array
    int arr[] = {10, 20, 30};
    
    // Stampa il secondo elemento
    
    return 0;
}`,
        check: (output) => output.includes("20")
    },
    {
        id: 10,
        title: "La Challenge Finale",
        desc: "Mettiamo tutto insieme: Input, Cicli e Somma.",
        goal: "Leggi un numero N dall'utente. Calcola la somma di tutti i numeri da 1 a N e stampala.",
        template: `#include <stdio.h>

int main() {
    int N, i, sum = 0;
    scanf("%d", &N);
    
    // Calcola somma da 1 a N
    
    // Stampa sum
    
    return 0;
}`,
        manualCheck: async (runner) => {
            let out1 = "";
            runner.outputCallback = (t) => out1 += t;
            runner.inputCallback = async () => '5';
            await runner.run(runner.lastCode);
            if (!out1.includes("15")) return false;

            return true;
        }
    },
    // --- Levels 11-20 (Expansion) ---
    {
        id: 11,
        title: "Numeri Decimali",
        desc: "Non esistono solo interi. I numeri con la virgola in C si chiamano <code>float</code> o <code>double</code>.",
        goal: "Dichiara un <code>float</code> chiamato <code>pigreco</code> con valore <code>3.14</code> e stampalo.",
        template: `#include <stdio.h>

int main() {
    // Dichiara float
    
    // Stampa pigreco
    
    return 0;
}`,
        check: (output) => output.includes("3.14"),
        expectedDesc: "Stampa 3.14"
    },
    {
        id: 12,
        title: "Media Aritmetica",
        desc: "Calcoliamo la media di due numeri. Attenzione: dividere due interi dà un intero!",
        goal: "Dichiara due float <code>a = 5.0</code> e <code>b = 2.0</code>. Calcola la media (somma diviso 2) e stampala.",
        template: `#include <stdio.h>

int main() {
    float a = 5.0;
    float b = 2.0;
    float media;
    
    // Calcola media
    
    // Stampa
    
    return 0;
}`,
        check: (output) => output.includes("3.5") || output.includes("3,5")
    },
    {
        id: 13,
        title: "Il Massimo",
        desc: "L'algoritmo per trovare il massimo è fondamentale.",
        goal: "Leggi due numeri interi dall'utente. Usa <code>if</code> per stampare solo il più grande dei due.",
        template: `#include <stdio.h>

int main() {
    int a, b;
    printf("Inserisci due numeri: ");
    scanf("%d", &a);
    scanf("%d", &b);
    
    // Stampa il maggiore
    
    return 0;
}`,
        manualCheck: async (runner) => {
            let out1 = "";
            let inputs = ['10', '20'];
            let idx = 0;
            const originalInput = runner.inputCallback;
            runner.outputCallback = (t) => out1 += t;
            // Mock sequential input
            runner.inputCallback = async () => inputs[idx++] || '0';

            await runner.run(runner.lastCode);
            if (!out1.includes("20")) return false;

            idx = 0;
            inputs = ['99', '5'];
            let out2 = "";
            runner.outputCallback = (t) => out2 += t;
            await runner.run(runner.lastCode);
            if (!out2.includes("99")) return false;

            return true;
        }
    },
    {
        id: 14,
        title: "Conto alla Rovescia",
        desc: "Usiamo il ciclo for andando all'indietro.",
        goal: "Stampa i numeri da 10 a 0 (compreso) usando un ciclo for decrementale (<code>i--</code>).",
        template: `#include <stdio.h>

int main() {
    int i;
    // Ciclo da 10 a 0
    
    return 0;
}`,
        check: (output) => output.includes("10") && output.includes("0") && output.indexOf("10") < output.indexOf("0")
    },
    {
        id: 15,
        title: "Tabellina del 2",
        desc: "I cicli sono perfetti per le tabelline.",
        goal: "Stampa i primi 10 multipli di 2 (2, 4, 6... 20).",
        template: `#include <stdio.h>

int main() {
    int i;
    // Stampa tabellina
    
    return 0;
}`,
        check: (output) => output.includes("2") && output.includes("4") && output.includes("20")
    },
    {
        id: 16,
        title: "Trova il numero",
        desc: "Ricerca lineare: scorri un array per vedere se esiste un numero.",
        goal: "Dato l'array preimpostato, controlla se contiene il numero 7. Se c'è, stampa <code>Trovato</code>.",
        template: `#include <stdio.h>

int main() {
    int numeri[] = {1, 3, 5, 7, 9};
    int i;
    int target = 7;
    
    // Cerca target nell'array
    
    return 0;
}`,
        check: (output) => output.includes("Trovato")
    },
    {
        id: 17,
        title: "Fattoriale",
        desc: "Il fattoriale di N (N!) è il prodotto 1*2*3...*N.",
        goal: "Calcola il fattoriale di 5 (che è 120) usando un ciclo e stampalo.",
        template: `#include <stdio.h>

int main() {
    int n = 5;
    int fact = 1;
    int i;
    
    // Calcola fattoriale
    
    // Stampa result
    
    return 0;
}`,
        check: (output) => output.includes("120")
    },
    {
        id: 18,
        title: "Stringhe Semplici",
        desc: "In C le stringhe sono array di caratteri (char[]).",
        goal: "Dichiara una stringa <code>char nome[] = \"Mario\";</code> e stampala con <code>printf(\"%s\", nome);</code>.",
        template: `#include <stdio.h>

int main() {
    // Dichiara stringa
    
    // Stampa stringa
    
    return 0;
}`,
        check: (output) => output.includes("Mario")
    },
    {
        id: 19,
        title: "Accesso Sicuro",
        desc: "Un semplice sistema di login numerico.",
        goal: "Leggi un numero (Password). Se è <code>1234</code> stampa <code>Accesso Consentito</code>, altrimenti <code>Accesso Negato</code>.",
        template: `#include <stdio.h>

int main() {
    int pass;
    printf("Inserisci PIN: ");
    scanf("%d", &pass);
    
    // Verifica PIN
    
    return 0;
}`,
        manualCheck: async (runner) => {
            let out1 = "";
            runner.outputCallback = (t) => out1 += t;
            runner.inputCallback = async () => '1234';
            await runner.run(runner.lastCode);
            if (!out1.includes("Consentito")) return false;

            let out2 = "";
            runner.outputCallback = (t) => out2 += t;
            runner.inputCallback = async () => '0000';
            await runner.run(runner.lastCode);
            if (!out2.includes("Negato")) return false;

            return true;
        }
    },
    {
        id: 20,
        title: "Bubble Sort (Mini)",
        desc: "Ordiniamo 3 numeri. È la base degli algoritmi di ordinamento.",
        goal: "Hai un array <code>{5, 1, 3}</code>. Scrivi codice per scambiare i valori finché non sono in ordine <code>1, 3, 5</code> e stampali.",
        template: `#include <stdio.h>

int main() {
    int arr[] = {5, 1, 3};
    // Ordina l'array (puoi usare if e variabili temporanee)
    
    // Stampa array ordinato
    
    return 0;
}`,
        check: (output) => {
            const nums = output.match(/\d+/g);
            if (!nums || nums.length < 3) return false;
            // Simplified check: strict 1,3,5 sequence or ordered appearance
            return nums.join(',').includes("1,3,5") || (output.indexOf("1") < output.indexOf("3") && output.indexOf("3") < output.indexOf("5"));
        }
    }
];

// --- Application Logic ---
let currentLevel = 1;
let maxUnlockedLevel = 1;
const editor = document.getElementById('code-editor');
const outputDiv = document.getElementById('console-output');
const inputArea = document.getElementById('input-area');
const inputField = document.getElementById('console-input');

let inputResolver = null;

function appendOutput(html) {
    const line = document.createElement('div');
    line.innerHTML = html;
    outputDiv.appendChild(line);
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

async function requestInput() {
    inputArea.classList.remove('hidden');
    inputField.focus();
    return new Promise((resolve) => {
        inputResolver = resolve;
    });
}

async function init() {
    // 1. LocalStorage
    const savedLevel = localStorage.getItem('lab_level');
    if (savedLevel) {
        maxUnlockedLevel = parseInt(savedLevel);
    }

    // 2. Cloud Sync
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                const data = await UserData.getUserData();
                if (data && data.labLevel) {
                    if (data.labLevel > maxUnlockedLevel) {
                        maxUnlockedLevel = data.labLevel;
                        localStorage.setItem('lab_level', maxUnlockedLevel);
                    } else if (maxUnlockedLevel > data.labLevel) {
                        UserData.updateLabLevel(maxUnlockedLevel);
                    }
                }
            } catch (e) {
                console.error("Sync error:", e);
            }
        }

        currentLevel = maxUnlockedLevel > 20 ? 20 : maxUnlockedLevel;
        renderLevelList();
        loadLevel(currentLevel);
    });

    currentLevel = maxUnlockedLevel > 20 ? 20 : maxUnlockedLevel;
    renderLevelList();
    loadLevel(currentLevel);

    document.getElementById('run-btn').addEventListener('click', runCode);
    document.getElementById('reset-btn').addEventListener('click', () => loadLevel(currentLevel));
    document.getElementById('next-level-btn').addEventListener('click', nextLevel);

    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = inputField.value;
            inputField.value = '';
            inputArea.classList.add('hidden');
            appendOutput(`<span class="text-secondary">> ${val}</span>`);
            if (inputResolver) {
                inputResolver(val);
                inputResolver = null;
            }
        }
    });

    // Bug Report Logic
    const reportModal = document.getElementById('report-modal');
    document.getElementById('report-btn').addEventListener('click', () => {
        reportModal.classList.remove('hidden');
        setTimeout(() => reportModal.classList.remove('opacity-0'), 10);
    });

    document.getElementById('cancel-report-btn').addEventListener('click', () => {
        reportModal.classList.add('opacity-0');
        setTimeout(() => reportModal.classList.add('hidden'), 300);
    });

    document.getElementById('submit-report-btn').addEventListener('click', async () => {
        const reason = document.getElementById('report-reason').value;
        if (!reason.trim()) return alert("Inserisci una descrizione.");

        const ex = EXERCISES.find(e => e.id === currentLevel);
        const code = editor.value;

        try {
            const success = await UserData.submitReport({
                type: 'lab',
                questionId: `LAB-${currentLevel}`, // Pseudo-ID
                question: ex.title, // Title instead of question text
                comment: reason,
                codeContext: code,
                username: auth.currentUser ? (auth.currentUser.displayName || 'User') : 'Anonymous'
            });

            if (success) {
                alert("Segnalazione inviata! Grazie.");
                document.getElementById('report-reason').value = '';
                reportModal.classList.add('opacity-0');
                setTimeout(() => reportModal.classList.add('hidden'), 300);
            } else {
                alert("Errore nell'invio.");
            }
        } catch (e) {
            console.error("Report error:", e);
            alert("Errore imprevisto.");
        }
    });

    // Mobile Sidebar Logic
    const sidebar = document.getElementById('level-sidebar');
    const overlay = document.getElementById('mobile-overlay');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');

    function toggleSidebar() {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (isClosed) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        } else {
            sidebar.classList.add('-translate-x-full');
            setTimeout(() => overlay.classList.add('hidden'), 300); // Wait for transition
        }
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleSidebar);
    }
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', toggleSidebar);
    }
    if (overlay) {
        overlay.addEventListener('click', toggleSidebar);
    }
}

function renderLevelList() {
    const list = document.getElementById('level-list');
    list.innerHTML = '';

    EXERCISES.forEach(ex => {
        const btn = document.createElement('button');
        const isLocked = ex.id > maxUnlockedLevel;
        const isActive = ex.id === currentLevel;

        btn.className = `w-full text-left p-3 rounded flex items-center justify-between border ${isActive ? 'bg-primary/20 border-primary text-white' :
            isLocked ? 'bg-transparent border-transparent text-white/30 cursor-not-allowed' :
                'bg-surface-dark border-white/5 text-white/70 hover:bg-white/5'
            }`;

        btn.innerHTML = `
            <span class="font-mono text-xs">LVL ${ex.id.toString().padStart(2, '0')}</span>
            ${isLocked ? '<span class="material-symbols-outlined text-xs">lock</span>' : ''}
        `;

        if (!isLocked) {
            btn.onclick = () => {
                loadLevel(ex.id);
                // Close sidebar on mobile if open
                const sidebar = document.getElementById('level-sidebar');
                const overlay = document.getElementById('mobile-overlay');
                if (sidebar && !sidebar.classList.contains('-translate-x-full') && window.innerWidth < 768) {
                    sidebar.classList.add('-translate-x-full');
                    if (overlay) overlay.classList.add('hidden');
                }
            };
        }

        list.appendChild(btn);
    });
}

function loadLevel(id) {
    currentLevel = id;
    const ex = EXERCISES.find(e => e.id === id);

    document.getElementById('current-level-display').textContent = id;
    document.getElementById('mission-title').textContent = ex.title;
    document.getElementById('mission-desc').innerHTML = ex.desc;
    document.getElementById('mission-goal').innerHTML = ex.goal;
    editor.value = ex.template;
    outputDiv.innerHTML = '<div class="text-white/20 italic">Pronto. Premi Esegui.</div>';

    renderLevelList();
}

async function runCode() {
    const code = editor.value;
    const ex = EXERCISES.find(e => e.id === currentLevel);

    outputDiv.innerHTML = '';
    appendOutput('<span class="text-secondary">--- Compilazione avviata ---</span>');

    const runner = new SimpleC(appendOutput, requestInput);
    runner.lastCode = code;

    try {
        await runner.run(code);

        let success = false;

        if (ex.manualCheck) {
            const silentRunner = new SimpleC(() => { }, () => { });
            silentRunner.lastCode = code;
            success = await ex.manualCheck(silentRunner);
        } else if (ex.check) {
            const currentOutput = outputDiv.innerText;
            success = ex.check(currentOutput);
        }

        if (success) {
            setTimeout(() => {
                const modal = document.getElementById('success-modal');
                modal.classList.remove('hidden');
                setTimeout(() => modal.classList.remove('opacity-0'), 10);
            }, 500);

            if (currentLevel === maxUnlockedLevel && currentLevel < 20) {
                maxUnlockedLevel++;
                localStorage.setItem('lab_level', maxUnlockedLevel);
                if (auth.currentUser) {
                    UserData.updateLabLevel(maxUnlockedLevel);
                }
            }
        } else {
            appendOutput('<br><span class="text-danger border-t border-danger pt-1 block">Risultato errato. Riprova. Controlla l\'obiettivo.</span>');
        }

    } catch (e) {
        // Checked
    }
}

function nextLevel() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        if (currentLevel < 20) {
            loadLevel(currentLevel + 1);
        } else {
            alert("Complimenti! Hai completato tutti i 20 livelli del corso base!");
        }
    }, 300);
}

// Start
init();
