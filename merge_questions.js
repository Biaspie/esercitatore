const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\raffy\\OneDrive\\Desktop\\Programmazione\\test';
const generatedDir = path.join(baseDir, 'Fonti', 'generated_questions');
const questionsPath = path.join(baseDir, 'questions.json');

function mergeQuestions() {
    let allQuestions = [];

    // Load existing questions
    if (fs.existsSync(questionsPath)) {
        try {
            const data = fs.readFileSync(questionsPath, 'utf8');
            allQuestions = JSON.parse(data);
            console.log(`Loaded ${allQuestions.length} existing questions.`);
        } catch (err) {
            console.error('Error reading existing questions:', err);
            allQuestions = [];
        }
    }

    // Load generated batch files
    if (fs.existsSync(generatedDir)) {
        const files = fs.readdirSync(generatedDir);
        let newCount = 0;

        files.forEach(file => {
            if (file.endsWith('.json')) {
                const filePath = path.join(generatedDir, file);
                try {
                    const data = fs.readFileSync(filePath, 'utf8');
                    const batchQuestions = JSON.parse(data);
                    allQuestions = allQuestions.concat(batchQuestions);
                    newCount += batchQuestions.length;
                    console.log(`Loaded ${batchQuestions.length} questions from ${file}`);
                } catch (err) {
                    console.error(`Error reading ${file}:`, err);
                }
            }
        });

        console.log(`Added ${newCount} new questions.`);
    } else {
        console.error('Generated questions directory not found!');
    }

    // Sort by ID
    allQuestions.sort((a, b) => a.id - b.id);

    // Save merged file
    try {
        fs.writeFileSync(questionsPath, JSON.stringify(allQuestions, null, 2), 'utf8');
        console.log(`Successfully saved ${allQuestions.length} questions to questions.json`);
    } catch (err) {
        console.error('Error writing questions.json:', err);
    }
}

mergeQuestions();
