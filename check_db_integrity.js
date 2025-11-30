const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, 'quiz.db');
const db = new sqlite3.Database(DB_PATH);

const fs = require('fs');
const logStream = fs.createWriteStream('report.log', { flags: 'w' });

function log(msg) {
    console.log(msg);
    logStream.write(msg + '\n');
}

db.all("SELECT * FROM questions", [], (err, rows) => {
    if (err) {
        log("Error reading DB:" + err);
        return;
    }

    log(`Checking ${rows.length} questions...`);
    let errors = 0;
    let warnings = 0;

    rows.forEach(row => {
        try {
            const options = JSON.parse(row.options);
            const correctIndex = row.correct;

            // Check 1: Valid Index
            if (correctIndex < 0 || correctIndex >= options.length) {
                log(`[ERROR] ID ${row.id}: Invalid correct index ${correctIndex}. Options length: ${options.length}`);
                errors++;
            }

            // Check 2: Empty Question
            if (!row.question || row.question.trim() === "") {
                log(`[WARN] ID ${row.id}: Empty question text.`);
                warnings++;
            }

            // Check 3: Duplicate Options
            const uniqueOptions = new Set(options);
            if (uniqueOptions.size !== options.length) {
                log(`[WARN] ID ${row.id}: Duplicate options found.`);
                warnings++;
            }

            // Check 4: Suspicious "correct" answer
            if (!options[correctIndex] || options[correctIndex].trim() === "") {
                log(`[ERROR] ID ${row.id}: Correct answer is empty/null.`);
                errors++;
            }

        } catch (e) {
            log(`[CRITICAL] ID ${row.id}: JSON parse error for options.` + e);
            errors++;
        }
    });

    log("---------------------------------------------------");
    log(`Verification Complete.`);
    log(`Total Questions: ${rows.length}`);
    log(`Errors (Invalid Index/Empty Correct): ${errors}`);
    log(`Warnings (Duplicates/Empty Text): ${warnings}`);
    logStream.end();
});

db.close();
