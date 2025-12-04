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
