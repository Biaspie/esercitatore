import { UserData } from './user-data.js';
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { Theme } from './theme.js';

document.addEventListener('DOMContentLoaded', () => {

    // Theme Selector Logic
    const themeBtns = document.querySelectorAll('.theme-btn');
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            Theme.setTheme(theme);
            if (auth.currentUser) {
                UserData.updateUserTheme(theme);
            }

            // Visual feedback
            themeBtns.forEach(b => b.classList.remove('ring-2', 'ring-white'));
            btn.classList.add('ring-2', 'ring-white');
        });
    });

    // Check current theme to highlight button
    const currentTheme = localStorage.getItem('quizTheme') || 'blue';
    const activeBtn = document.querySelector(`.theme-btn[data-theme="${currentTheme}"]`);
    if (activeBtn) activeBtn.classList.add('ring-2', 'ring-white');

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            loadStats();
        } else {
            alert("Devi essere loggato per vedere le statistiche.");
            window.location.href = 'index.html';
        }
    });
});

async function loadStats() {
    try {
        const history = await UserData.getAllHistory();

        if (history.length === 0) {
            // Handle empty state
            document.getElementById('total-tests').textContent = "0";
            return;
        }

        // Calculate Summary Stats
        const totalTests = history.length;
        let totalQuestions = 0;
        let totalCorrect = 0;
        let totalScorePercentage = 0;

        // For Activity Chart
        const activityMap = {}; // "YYYY-MM-DD": count

        history.forEach(test => {
            totalQuestions += test.totalQuestions;

            // Calculate correct answers from score (assuming score is number of correct answers)
            // Note: In speed mode score can be different, but for general stats we might need exact correct count.
            // If score is just points, we might need to iterate questions if available.
            // Let's assume for now score ~= correct answers for standard modes, 
            // but for speed mode it might be higher.
            // Better approach: Iterate questions if available to count true correct answers.

            let testCorrect = 0;
            if (test.questions && Array.isArray(test.questions)) {
                testCorrect = test.questions.filter(q => q.isCorrect).length;
            } else {
                // Fallback if questions not saved (legacy?)
                testCorrect = test.score;
            }
            totalCorrect += testCorrect;

            totalScorePercentage += (test.score / test.totalQuestions);

            // Activity
            const date = new Date(test.timestamp).toISOString().split('T')[0];
            activityMap[date] = (activityMap[date] || 0) + test.totalQuestions;
        });

        const avgScore = Math.round((totalScorePercentage / totalTests) * 100);
        const totalWrong = totalQuestions - totalCorrect;

        // Update DOM
        document.getElementById('total-tests').textContent = totalTests;
        document.getElementById('total-questions').textContent = totalQuestions;
        document.getElementById('average-score').textContent = `${avgScore}%`;

        // Render Charts
        renderAccuracyChart(totalCorrect, totalWrong);
        renderActivityChart(activityMap);

    } catch (error) {
        console.error("Error loading stats:", error);
    }
}

function renderAccuracyChart(correct, wrong) {
    const ctx = document.getElementById('accuracyChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Corrette', 'Errate'],
            datasets: [{
                data: [correct, wrong],
                backgroundColor: ['#00ff00', '#ff0000'], // Retro Green, Retro Red
                borderWidth: 2,
                borderColor: '#101022', // Background dark color for separation
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#9292c9', // Text muted color
                        font: { family: '"VT323", monospace', size: 14 }
                    }
                }
            }
        }
    });
}

function renderActivityChart(activityMap) {
    // Generate last 7 days labels
    const labels = [];
    const data = [];

    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        const labelStr = d.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' });

        labels.push(labelStr);
        data.push(activityMap[dateStr] || 0);
    }

    const ctx = document.getElementById('activityChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Domande Svolte',
                data: data,
                backgroundColor: '#1313ec', // ID Primary
                borderRadius: 2,
                borderWidth: 1,
                borderColor: '#323267'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(50, 50, 103, 0.3)' },
                    ticks: {
                        color: '#9292c9',
                        font: { family: '"VT323", monospace' }
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#9292c9',
                        font: { family: '"VT323", monospace' }
                    }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#18182f',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#323267',
                    borderWidth: 1,
                    titleFont: { family: '"VT323", monospace' },
                    bodyFont: { family: '"VT323", monospace' }
                }
            }
        }
    });
}
