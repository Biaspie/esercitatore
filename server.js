const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.'))); // Serve static files from current dir

// File to store reports
const REPORTS_FILE = path.join(__dirname, 'reports.json');

// Ensure reports file exists
if (!fs.existsSync(REPORTS_FILE)) {
    fs.writeFileSync(REPORTS_FILE, JSON.stringify([]));
}

// API Routes

const crypto = require('crypto');

// File to store users
const USERS_FILE = path.join(__dirname, 'users.json');

// Ensure users file exists
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}

// Helper to hash password
function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

// API Routes

// Register User
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username e password richiesti' });
    }

    fs.readFile(USERS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading users file:", err);
            return res.status(500).json({ error: 'Errore server' });
        }

        try {
            const users = JSON.parse(data);

            if (users.find(u => u.username === username)) {
                return res.status(400).json({ error: 'Username già esistente' });
            }

            const newUser = {
                id: Date.now().toString(),
                username,
                password: hashPassword(password),
                createdAt: new Date().toISOString()
            };

            users.push(newUser);

            fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), (err) => {
                if (err) {
                    console.error("Error writing users file:", err);
                    return res.status(500).json({ error: 'Errore nel salvataggio' });
                }
                res.json({ success: true, message: 'Registrazione avvenuta con successo' });
            });
        } catch (parseError) {
            console.error("Error parsing users JSON:", parseError);
            return res.status(500).json({ error: 'Errore interno del server (Database corrotto)' });
        }
    });
});

// Login User
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username e password richiesti' });
    }

    fs.readFile(USERS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading users file:", err);
            return res.status(500).json({ error: 'Errore server' });
        }

        try {
            const users = JSON.parse(data);
            const user = users.find(u => u.username === username && u.password === hashPassword(password));

            if (user) {
                res.json({ success: true, username: user.username, message: 'Login effettuato' });
            } else {
                res.status(401).json({ error: 'Credenziali non valide' });
            }
        } catch (parseError) {
            console.error("Error parsing users JSON:", parseError);
            return res.status(500).json({ error: 'Errore interno del server (Database corrotto)' });
        }
    });
});

// Get all reports (Admin only - simplified protection)
app.get('/api/reports', (req, res) => {
    // In a real app, check session/token here. 
    // For this local tool, we'll rely on the admin page password check (client-side) 
    // or a simple header if we wanted to be stricter.
    fs.readFile(REPORTS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read reports' });
        }
        res.json(JSON.parse(data));
    });
});

// Submit a report
app.post('/api/reports', (req, res) => {
    const { question, questionId, comment } = req.body;

    if (!question || !comment) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const newReport = {
        id: Date.now().toString(),
        questionId: questionId || 'unknown',
        question: question,
        comment: comment,
        timestamp: new Date().toISOString(),
        status: 'open'
    };

    fs.readFile(REPORTS_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read reports' });
        }

        const reports = JSON.parse(data);
        reports.push(newReport);

        fs.writeFile(REPORTS_FILE, JSON.stringify(reports, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save report' });
            }
            res.json({ success: true, message: 'Report submitted' });
        });
    });
});

// Delete a report
app.delete('/api/reports/:id', (req, res) => {
    const reportId = req.params.id;

    fs.readFile(REPORTS_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read reports' });
        }

        let reports = JSON.parse(data);
        const initialLength = reports.length;
        reports = reports.filter(r => r.id !== reportId);

        if (reports.length === initialLength) {
            return res.status(404).json({ error: 'Report not found' });
        }

        fs.writeFile(REPORTS_FILE, JSON.stringify(reports, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save reports' });
            }
            res.json({ success: true, message: 'Report deleted' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
