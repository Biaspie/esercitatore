const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, 'questions.json');

if (!fs.existsSync(OUTPUT_FILE)) {
    console.error("questions.json not found!");
    process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));
let modifiedCount = 0;

const enhancedQuestions = questions.map(q => {
    if (q.category === 'Informatica') {
        const isTrue = q.answer === 'Vero';

        // New verbose options
        const correctOption = isTrue
            ? "Il risultato dell'espressione è VERO"
            : "Il risultato dell'espressione è FALSO";

        const wrongOption1 = isTrue
            ? "Il risultato dell'espressione è FALSO"
            : "Il risultato dell'espressione è VERO";

        const distractors = [
            "L'espressione non è computabile con i valori assegnati",
            "Errore di sintassi nell'operatore logico"
        ];

        // Combine and shuffle
        const newOptions = [correctOption, wrongOption1, ...distractors];

        // Simple shuffle
        newOptions.sort(() => Math.random() - 0.5);

        modifiedCount++;
        return {
            ...q,
            options: newOptions,
            answer: correctOption
        };
    }
    return q;
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(enhancedQuestions, null, 2));
console.log(`Enhanced ${modifiedCount} Informatica questions.`);
