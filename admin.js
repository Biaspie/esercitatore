import { UserData } from './user-data.js';
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
    onAuthStateChanged(auth, async (user) => {
        if (!user) {
            window.location.href = 'index.html';
            return;
        }

        // Verify Admin Role
        const userData = await UserData.getUserData();
        if (!userData || userData.role !== 'admin') {
            // Fallback check for "admin" username (legacy)
            if (localStorage.getItem('quizUser') !== 'admin') {
                alert("Accesso negato.");
                window.location.href = 'home.html';
                return;
            }
        }

        // Load Dashboard Data
        loadAdminDashboard();
    });
});

async function loadAdminDashboard() {
    // Load Stats
    const globalStats = await UserData.getGlobalStats();
    renderStatsCharts(globalStats);

    // Load Users
    const users = await UserData.getAllUsers();
    renderUserTable(users);
}

function renderStatsCharts(stats) {
    console.log("Rendering stats:", stats); // Debug log

    if (!stats || stats.length === 0) {
        console.warn("No stats data available.");
        // Optional: Show a message on the canvas or container
        return;
    }

    // Sort by date
    stats.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Prepare data
    const labels = stats.map(s => {
        const d = new Date(s.date);
        return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' });
    });
    const accessesData = stats.map(s => s.accesses || 0);
    const quizzesData = stats.map(s => s.quizzes || 0);

    // Accesses Chart
    const ctxAccesses = document.getElementById('accessesChart').getContext('2d');

    // Destroy existing chart if any (to prevent duplicates on reload)
    if (window.accessesChartInstance) window.accessesChartInstance.destroy();

    window.accessesChartInstance = new Chart(ctxAccesses, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Accessi Giornalieri',
                data: accessesData,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: {
                        color: '#94a3b8',
                        stepSize: 1,
                        precision: 0
                    }
                },
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
            },
            plugins: { legend: { display: false } }
        }
    });

    // Quizzes Chart
    const ctxQuizzes = document.getElementById('quizzesChart').getContext('2d');

    if (window.quizzesChartInstance) window.quizzesChartInstance.destroy();

    window.quizzesChartInstance = new Chart(ctxQuizzes, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quiz Completati',
                data: quizzesData,
                backgroundColor: '#10b981',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: {
                        color: '#94a3b8',
                        stepSize: 1,
                        precision: 0
                    }
                },
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function renderUserTable(users) {
    const tbody = document.getElementById('users-table-body');
    tbody.innerHTML = '';

    users.forEach(user => {
        const tr = document.createElement('tr');
        const isAdmin = user.role === 'admin';

        tr.innerHTML = `
            <td style="padding: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1);">${user.username || 'N/A'}</td>
            <td style="padding: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); color: var(--text-muted);">${user.email}</td>
            <td style="padding: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                <span style="padding: 0.2rem 0.6rem; border-radius: 4px; background: ${isAdmin ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255,255,255,0.1)'}; color: ${isAdmin ? '#FFD700' : 'white'}; font-size: 0.8rem;">
                    ${user.role || 'user'}
                </span>
            </td>
            <td style="padding: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); text-align: right;">
                ${!isAdmin ? `
                    <button class="btn-promote" data-uid="${user.id}" style="background: #3b82f6; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem; margin-right: 0.5rem;">Promuovi Admin</button>
                    <button class="btn-delete" data-uid="${user.id}" style="background: #ef4444; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">Elimina</button>
                ` : ''}
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Add Event Listeners
    // Promote
    document.querySelectorAll('.btn-promote').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const uid = e.target.dataset.uid;
            if (confirm("Sei sicuro di voler promuovere questo utente ad Admin?")) {
                const success = await UserData.updateUserRole(uid, 'admin');
                if (success) {
                    alert("Utente promosso con successo!");
                    loadAdminDashboard(); // Reload
                } else {
                    alert("Errore durante l'aggiornamento.");
                }
            }
        });
    });

    // Delete
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const uid = e.target.dataset.uid;
            if (confirm("Sei sicuro di voler ELIMINARE questo utente? L'azione è irreversibile.")) {
                const success = await UserData.deleteUser(uid);
                if (success) {
                    alert("Utente eliminato con successo!");
                    loadAdminDashboard(); // Reload
                } else {
                    alert("Errore durante l'eliminazione.");
                }
            }
        });
    });
}
