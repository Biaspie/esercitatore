const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, 'quiz.db');
const db = new sqlite3.Database(DB_PATH);

db.serialize(() => {
    db.run("DELETE FROM questions");

    const stmt = db.prepare("INSERT INTO questions (id, category, question, options, answer) VALUES (?, ?, ?, ?, ?)");

    const q = {
        id: 1,
        category: "Test",
        question: "Test Question",
        options: JSON.stringify(["A", "B"]),
        answer: "A"
    };

    stmt.run(q.id, q.category, q.question, q.options, q.answer, (err) => {
        if (err) {
            console.error("Insert Error:", err);
        } else {
            console.log("Insert Success");
        }
    });

    stmt.finalize();
    db.close();
});
