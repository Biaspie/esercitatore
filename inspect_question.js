const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, 'quiz.db');
const db = new sqlite3.Database(DB_PATH);

const fs = require('fs');
const logStream = fs.createWriteStream('inspect_log.txt', { flags: 'w' });

function log(msg) {
    console.log(msg);
    logStream.write((typeof msg === 'object' ? JSON.stringify(msg, null, 2) : msg) + '\n');
}

db.get("SELECT * FROM questions WHERE id = 1", [], (err, row) => {
    if (err) {
        log(err);
        return;
    }
    log("ID: " + row.id);
    log("Question: " + row.question);
    log("Options (Raw): " + row.options);
    log("Correct Index: " + row.correct);
    try {
        const parsed = JSON.parse(row.options);
        log("Options (Parsed): " + JSON.stringify(parsed));
        log("Selected Correct Option: " + parsed[row.correct]);
    } catch (e) {
        log("Parse error: " + e);
    }
    logStream.end();
});

db.close();
