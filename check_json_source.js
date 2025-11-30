const fs = require('fs');

try {
    const data = fs.readFileSync('questions.json', 'utf8');
    const questions = JSON.parse(data);
    console.log("Total questions in JSON:", questions.length);
    console.log("First question:", JSON.stringify(questions[0], null, 2));

    let missingCorrect = 0;
    questions.forEach(q => {
        if (q.correct === undefined || q.correct === null) {
            missingCorrect++;
        }
    });
    console.log("Questions missing 'correct' field:", missingCorrect);
} catch (e) {
    console.error("Error reading JSON:", e);
}
