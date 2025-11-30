require('dotenv').config();
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'quiz.db');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname))); // Serve static files (frontend)

// Connect to SQLite
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// API Routes
app.get('/api/questions', (req, res) => {
    const { subject, count } = req.query;
    let query = "SELECT * FROM questions";
    let params = [];

    // Map subject param to category name
    const categoryMap = {
        "ps": "Legislazione PS",
        "costituzionale": "Diritto Costituzionale",
        "penale": "Diritto Penale",
        "procedura_penale": "Procedura Penale",
        "normativa": "Normativa Disciplinare",
        "informatica": "Informatica"
    };

    if (subject && subject !== 'all') {
        const categoryName = categoryMap[subject];
        if (categoryName) {
            query += " WHERE category = ?";
            params.push(categoryName);
        }
    }

    query += " ORDER BY RANDOM()";

    let limit = parseInt(count);
    if (!isNaN(limit) && count !== 'all' && limit > 0) {
        query += " LIMIT ?";
        params.push(limit);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
            return;
        }

        // Parse options JSON string back to array
        const questions = rows.map(row => ({
            ...row,
            options: JSON.parse(row.options)
        }));

        res.json(questions);
    });
});

// Fallback for SPA
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
