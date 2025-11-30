const fs = require('fs');

try {
    const data = fs.readFileSync('questions.json', 'utf8');
    const questions = JSON.parse(data);

    let hasAnswer = 0;
    questions.forEach(q => {
        if (q.answer) hasAnswer++;
    });
    console.log(`Total: ${questions.length}`);
    console.log(`With 'answer': ${hasAnswer}`);
} catch (e) {
    console.error(e);
}
