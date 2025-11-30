const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'quiz.db');
const outputPath = path.join(__dirname, 'questions.json');

const db = new sqlite3.Database(dbPath);

console.log("Exporting database to JSON...");

db.all("SELECT * FROM questions", (err, rows) => {
    if (err) {
        console.error("Error reading from database:", err);
        process.exit(1);
    }

    // Parse options JSON string back to array for each question
    const questions = rows.map(row => {
        try {
            return {
                ...row,
                options: JSON.parse(row.options)
            };
        } catch (e) {
            console.error(`Error parsing options for question ID ${row.id}:`, e);
            return row;
        }
    });

    fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2));
    console.log(`Successfully exported ${questions.length} questions to ${outputPath}`);

    db.close();
});
