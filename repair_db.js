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

        const stmt = db.prepare("UPDATE questions SET correct = ? WHERE id = ?");

        let updated = 0;
        let errors = 0;

        questions.forEach(q => {
            if (!q.options || !q.answer) {
                console.log(`Skipping ID ${q.id}: Missing options or answer`);
                return;
            }

            // Find index
            // Note: options might be strings, need to match exactly
            const index = q.options.findIndex(opt => opt === q.answer);

            if (index !== -1) {
                stmt.run(index, q.id);
                updated++;
            } else {
                // Try fuzzy match or trimming
                const indexTrim = q.options.findIndex(opt => opt.trim() === q.answer.trim());
                if (indexTrim !== -1) {
                    stmt.run(indexTrim, q.id);
                    updated++;
                } else {
                    console.error(`[ERROR] ID ${q.id}: Answer "${q.answer}" not found in options: ${JSON.stringify(q.options)}`);
                    errors++;
                }
            }
        });

        stmt.finalize();

        db.run("COMMIT", (err) => {
            if (err) console.error("Commit error:", err);
            else console.log(`Database repaired. Updated: ${updated}, Errors: ${errors}`);
            db.close();
        });
    });

} catch (e) {
    console.error("Error:", e);
}
