const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'Fonti', 'generated_questions');
const outputFile = path.join(__dirname, 'questions.json');

if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    process.exit(1);
}

let allQuestions = [];
let idCounter = 1;

fs.readdirSync(sourceDir).forEach(file => {
    if (file.endsWith('.json')) {
        const filePath = path.join(sourceDir, file);
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const questions = JSON.parse(content);

            if (Array.isArray(questions)) {
                questions.forEach(q => {
                    // Normalize category if needed (optional)
                    // Ensure unique ID
                    q.id = idCounter++;
                    allQuestions.push(q);
                });
            }
        } catch (err) {
            console.error(`Error reading ${file}:`, err.message);
        }
    }
});

fs.writeFileSync(outputFile, JSON.stringify(allQuestions, null, 2));
console.log(`Successfully imported ${allQuestions.length} questions to ${outputFile}`);
