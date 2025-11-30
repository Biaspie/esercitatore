const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, 'Fonti', 'generated_questions');
const OUTPUT_FILE = path.join(__dirname, 'questions.json');

try {
    const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.json'));
    console.log(`Found ${files.length} batch files.`);

    let allQuestions = [];
    let idCounter = 1;

    files.forEach(file => {
        const filePath = path.join(SOURCE_DIR, file);
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const questions = JSON.parse(content);

            if (Array.isArray(questions)) {
                questions.forEach(q => {
                    // Ensure required fields
                    if (q.question && q.options && q.answer) {
                        q.id = idCounter++;
                        allQuestions.push(q);
                    }
                });
            }
        } catch (e) {
            console.error(`Error reading ${file}:`, e.message);
        }
    });

    console.log(`Total questions collected: ${allQuestions.length}`);

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allQuestions, null, 2));
    console.log(`Successfully wrote to ${OUTPUT_FILE}`);

} catch (e) {
    console.error("Error:", e);
}
