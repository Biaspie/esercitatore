const fs = require('fs');

try {
    const rawData = fs.readFileSync('questions.json', 'utf8');
    const questions = JSON.parse(rawData);

    console.log(`Original count: ${questions.length}`);

    const uniqueQuestions = [];
    const seen = new Set();

    questions.forEach(q => {
        // Normalize question text to catch slight variations if needed, 
        // but for now strict equality on the question string is likely enough 
        // given the previous check found exact matches.
        const qText = q.question.trim();

        if (!seen.has(qText)) {
            seen.add(qText);
            uniqueQuestions.push(q);
        }
    });

    console.log(`New count: ${uniqueQuestions.length}`);
    console.log(`Removed ${questions.length - uniqueQuestions.length} duplicates.`);

    fs.writeFileSync('questions.json', JSON.stringify(uniqueQuestions, null, 4), 'utf8');
    console.log('questions.json updated successfully.');

} catch (error) {
    console.error('Error processing file:', error);
}
