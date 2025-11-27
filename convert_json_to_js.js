const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'questions.json');
const jsPath = path.join(__dirname, 'questions.js');

try {
    const data = fs.readFileSync(questionsPath, 'utf8');
    const questions = JSON.parse(data);

    const jsContent = `const allQuestions = ${JSON.stringify(questions, null, 2)};`;

    fs.writeFileSync(jsPath, jsContent, 'utf8');
    console.log(`Successfully converted questions.json to questions.js (${questions.length} questions)`);
} catch (err) {
    console.error('Error converting file:', err);
    process.exit(1);
}
