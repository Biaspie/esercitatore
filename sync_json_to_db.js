const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'quiz.db');
const jsonPath = path.join(__dirname, 'questions.json');

if (!fs.existsSync(jsonPath)) {
    console.error("questions.json not found!");
    process.exit(1);
}

const db = new sqlite3.Database(dbPath);
const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

console.log(`Read ${questions.length} questions from JSON.`);

db.serialize(() => {
    const stmt = db.prepare("INSERT OR IGNORE INTO questions (id, category, question, options, answer) VALUES (?, ?, ?, ?, ?)");

    let insertedCount = 0;

    questions.forEach(q => {
        // Ensure options are stringified if they are arrays
        const optionsStr = typeof q.options === 'string' ? q.options : JSON.stringify(q.options);

        stmt.run(q.id, q.category, q.question, optionsStr, q.answer, function (err) {
            if (err) {
                console.error(`Error inserting question ID ${q.id}:`, err);
            } else if (this.changes > 0) {
                insertedCount++;
            }
        });
    });

    stmt.finalize(() => {
        console.log(`Sync complete. Inserted ${insertedCount} new questions.`);
        db.close();
    });
});
