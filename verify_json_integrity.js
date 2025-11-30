const fs = require('fs');

try {
    const data = fs.readFileSync('questions.json', 'utf8');
    const questions = JSON.parse(data);

    let errors = 0;
    let duplicates = 0;
    let empty = 0;

    questions.forEach(q => {
        if (!q.options.includes(q.answer)) {
            console.log(`[ERROR] ID ${q.id}: Answer "${q.answer}" not found in options.`);
            errors++;
        }

        if (!q.answer || q.answer.trim() === "") {
            console.log(`[ERROR] ID ${q.id}: Empty answer.`);
            empty++;
        }

        const unique = new Set(q.options);
        if (unique.size !== q.options.length) {
            console.log(`[WARN] ID ${q.id}: Duplicate options: ${JSON.stringify(q.options)}`);
            duplicates++;
        }
    });

    console.log(`Total Questions: ${questions.length}`);
    console.log(`Integrity Errors: ${errors}`);
    console.log(`Empty Answers: ${empty}`);
    console.log(`Duplicate Options: ${duplicates}`);

} catch (e) {
    console.error(e);
}
