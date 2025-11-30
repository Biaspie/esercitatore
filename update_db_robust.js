const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'quiz.db');
const JSON_PATH = path.join(__dirname, 'questions.json');

const db = new sqlite3.Database(DB_PATH);

try {
    const data = fs.readFileSync(JSON_PATH, 'utf8');
    const questions = JSON.parse(data);

    db.serialize(() => {
        db.run("BEGIN TRANSACTION");
        db.run("DELETE FROM questions");
        db.run("DELETE FROM sqlite_sequence WHERE name='questions'");

        const stmt = db.prepare("INSERT INTO questions (id, category, question, options, answer) VALUES (?, ?, ?, ?, ?)");

        let completed = 0;
        let errors = 0;

        questions.forEach((q) => {
            stmt.run(q.id, q.category, q.question, JSON.stringify(q.options), q.answer, function (err) {
                if (err) {
                    console.error(`Error inserting ID ${q.id}:`, err.message);
                    errors++;
                }
                completed++;
                if (completed === questions.length) {
                    finalize();
                }
            });
        });

        function finalize() {
            stmt.finalize();
            db.run("COMMIT", (err) => {
                if (err) console.error("Commit error:", err);
                else console.log(`Finished. Total: ${questions.length}, Errors: ${errors}`);
                db.close();
            });
        }
    });

} catch (e) {
    console.error("Error:", e);
}
