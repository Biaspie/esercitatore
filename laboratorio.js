import { UserData } from './user-data.js';

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

        // 1. Remove standard includes (we don't need them in JS mok)
        jsCode = jsCode.replace(/#include\s+<.*?>/g, '');

        // 2. Handle main function wrapper
        // We want the content of main() to execute. 
        // Simple regex to extract content inside main() { ... }
        const mainMatch = jsCode.match(/int\s+main\s*\(\s*(void)?\s*\)\s*\{([\s\S]*)\}/);
        if (mainMatch && mainMatch[2]) {
            jsCode = mainMatch[2];
        }

        // 3. printf("text", ...args) -> print("text", ...args)
        // We'll map printf to a custom function 'localPrint'
        // Handle format specifiers vaguely: printf("%d", x) -> localPrint(x)
        // This is tricky. Let's do a basic replacing strategy.

        // Replace 'printf' with 'await this.print'
        jsCode = jsCode.replace(/\bprintf\b/g, 'await this.print');

        // 4. scanf("%d", &x) -> x = await this.scan();
        // Regex to find scanf matches
        // scanf("%d", &x); -> x = parseInt(await this.scan());
        jsCode = jsCode.replace(/scanf\s*\(\s*"%d"\s*,\s*&(\w+)\s*\)\s*;/g, '$1 = parseInt(await this.scan());');
        jsCode = jsCode.replace(/scanf\s*\(\s*"%f"\s*,\s*&(\w+)\s*\)\s*;/g, '$1 = parseFloat(await this.scan());');
        jsCode = jsCode.replace(/scanf\s*\(\s*"%s"\s*,\s*&(\w+)\s*\)\s*;/g, '$1 = await this.scan();');

        // 5. Types: int x = 5; -> let x = 5;
        jsCode = jsCode.replace(/\b(int|float|double|char|long)\s+/g, 'let ');

        // 6. Return 0; -> return; (or just remove it)
        jsCode = jsCode.replace(/return\s+0\s*;/g, 'return;');

        // Wrap in an async function to allow await logic for input
        return `(async () => { 
            try {
                ${jsCode}
            } catch(e) {
                this.error(e);
            }
        })()`;
    }

    async print(...args) {
        // Handle C-style format strings vaguely: 
        // If first arg is string with %, we try to format.
        // For this simple lab, we might just join args or handle basic substitution.
        let output = "";

        if (typeof args[0] === 'string' && args[0].includes('%')) {
            let format = args[0];
            let argIndex = 1;
            // Naive replacement for %d, %s, %f
            output = format.replace(/%[dsf]/g, (match) => {
                let val = args[argIndex++];
                return val !== undefined ? val : match;
            });
            // Handle newline
            output = output.replace(/\\n/g, '<br>');
        } else {
            // Check for explicit \n in simple strings
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
        throw e; // Stop execution
    }

    async run(cCode) {
        const jsSource = this.transpile(cCode);
        console.log("Transpiled JS:", jsSource); // Debug
        try {
            // Create a function with 'this' bound to the Compiler instance
            const func = eval(jsSource);
            // It's an IIFE that returns a promise
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
        check: (output, inputs) => output.includes("Hello World"),
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
        inputSequence: ['42'],
        check: (output) => output.includes("42"),
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
        inputSequence: ['15', '5'],
        // We will run verify logic specially for inputs
        manualCheck: async (runner) => {
            // Test 1
            let out1 = "";
            runner.outputCallback = (t) => out1 += t;
            runner.inputCallback = async () => '15';
            await runner.run(runner.lastCode);
            if (!out1.includes("Maggiore")) return false;

            // Test 2
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
            runner.outputCallback = (t) => out2 += t; // Reset output capture
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
            // Flexible check logic
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
            // Test with 5 (sum 15)
            let out1 = "";
            runner.outputCallback = (t) => out1 += t;
            runner.inputCallback = async () => '5';
            await runner.run(runner.lastCode);
            if (!out1.includes("15")) return false;

            return true;
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

// Input Promise Resolver
let inputResolver = null;

function appendOutput(html) {
    const line = document.createElement('div');
    line.innerHTML = html;
    outputDiv.appendChild(line);
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Request Input function for Compiler
async function requestInput() {
    inputArea.classList.remove('hidden');
    inputField.focus();

    return new Promise((resolve) => {
        inputResolver = resolve;
    });
}

// Initial State
// Initial State
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

async function init() {
    // 1. Try Loading from LocalStorage first (instant)
    const savedLevel = localStorage.getItem('lab_level');
    if (savedLevel) {
        maxUnlockedLevel = parseInt(savedLevel);
    }

    // 2. Try Loading from Cloud (if logged in)
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                const data = await UserData.getUserData();
                if (data && data.labLevel) {
                    // Sync: Take the highest
                    if (data.labLevel > maxUnlockedLevel) {
                        maxUnlockedLevel = data.labLevel;
                        localStorage.setItem('lab_level', maxUnlockedLevel);
                    } else if (maxUnlockedLevel > data.labLevel) {
                        // Local is ahead? Sync to cloud
                        UserData.updateLabLevel(maxUnlockedLevel);
                    }
                }
            } catch (e) {
                console.error("Sync error:", e);
            }
        }

        // Ensure constraints
        currentLevel = maxUnlockedLevel > 10 ? 10 : maxUnlockedLevel;
        renderLevelList();
        loadLevel(currentLevel);
    });

    // Initial render (might be updated after auth)
    currentLevel = maxUnlockedLevel > 10 ? 10 : maxUnlockedLevel;
    renderLevelList();
    loadLevel(currentLevel);

    // Event Listeners
    document.getElementById('run-btn').addEventListener('click', runCode);
    document.getElementById('reset-btn').addEventListener('click', () => loadLevel(currentLevel));
    document.getElementById('next-level-btn').addEventListener('click', nextLevel);

    // Input handling
    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = inputField.value;
            inputField.value = '';
            inputArea.classList.add('hidden');
            appendOutput(`<span class="text-secondary">> ${val}</span>`); // Echo input
            if (inputResolver) {
                inputResolver(val);
                inputResolver = null;
            }
        }
    });
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
            btn.onclick = () => loadLevel(ex.id);
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

    // Load template into editor
    // Only verify if we are not resetting, maybe keep implementation? 
    // For now simple reset
    editor.value = ex.template;

    // Clear console
    outputDiv.innerHTML = '<div class="text-white/20 italic">Pronto. Premi Esegui.</div>';

    renderLevelList();
}

async function runCode() {
    const code = editor.value;
    const ex = EXERCISES.find(e => e.id === currentLevel);

    outputDiv.innerHTML = ''; // Clear previous run
    appendOutput('<span class="text-secondary">--- Compilazione avviata ---</span>');

    const runner = new SimpleC(appendOutput, requestInput);
    runner.lastCode = code; // Store for manual checks that re-run

    try {
        await runner.run(code);

        // Validation Phase
        let success = false;

        // Logic 1: Manual Check function (for multiple runs/inputs)
        if (ex.manualCheck) {
            // Note: we pass a fresh runner or reuse? 
            // The manualCheck often runs multiple times.
            // We create a silent runner for validation to not spam UI
            const silentRunner = new SimpleC(() => { }, () => { }); // No-op output by default overridden in check
            silentRunner.lastCode = code;
            success = await ex.manualCheck(silentRunner);
        }
        // Logic 2: Output check (simple string match on current run)
        else if (ex.check) {
            const currentOutput = outputDiv.innerText;
            success = ex.check(currentOutput);
        }

        if (success) {
            setTimeout(() => {
                const modal = document.getElementById('success-modal');
                modal.classList.remove('hidden');
                setTimeout(() => modal.classList.remove('opacity-0'), 10);
            }, 500);

            // Save progress
            if (currentLevel === maxUnlockedLevel && currentLevel < 10) {
                maxUnlockedLevel++;
                localStorage.setItem('lab_level', maxUnlockedLevel);

                // Sync to Cloud
                if (auth.currentUser) {
                    UserData.updateLabLevel(maxUnlockedLevel);
                }
            }
        } else {
            appendOutput('<br><span class="text-danger border-t border-danger pt-1 block">Risultato errato. Riprova. Controlla l\'obiettivo.</span>');
        }

    } catch (e) {
        // Errors handled in run
    }
}

function nextLevel() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        if (currentLevel < 10) {
            loadLevel(currentLevel + 1);
        } else {
            alert("Hai completato tutto il laboratorio! Sei un Hacker!");
        }
    }, 300);
}

// Start
init();
