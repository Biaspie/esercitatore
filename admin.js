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

    // Load Reports
    const reports = await UserData.getReports();
    renderReports(reports);

    // Tab Logic
    const tabUsers = document.getElementById('tab-users');
    const tabReports = document.getElementById('tab-reports');
    const viewUsers = document.getElementById('users-view');
    const viewReports = document.getElementById('reports-view');

    if (tabUsers && tabReports) {
        tabUsers.addEventListener('click', () => {
            tabUsers.classList.add('border-primary', 'text-white');
            tabUsers.classList.remove('border-transparent', 'text-[#9292c9]');
            tabReports.classList.remove('border-primary', 'text-white');
            tabReports.classList.add('border-transparent', 'text-[#9292c9]');

            viewUsers.classList.remove('hidden');
            viewReports.classList.add('hidden');
        });

        tabReports.addEventListener('click', () => {
            tabReports.classList.add('border-primary', 'text-white');
            tabReports.classList.remove('border-transparent', 'text-[#9292c9]');
            tabUsers.classList.remove('border-primary', 'text-white');
            tabUsers.classList.add('border-transparent', 'text-[#9292c9]');

            viewUsers.classList.add('hidden');
            viewReports.classList.remove('hidden');
        });
    }
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

    const currentUserId = auth.currentUser ? auth.currentUser.uid : null;

    users.forEach(user => {
        const tr = document.createElement('tr');
        // Mobile: Flex column, Desktop: Table row
        tr.className = "flex flex-col md:table-row bg-white/5 md:bg-transparent mb-4 md:mb-0 rounded md:rounded-none border border-white/10 md:border-none p-4 md:p-0";

        const isAdmin = user.role === 'admin';
        const isCurrentUser = user.id === currentUserId;
        const isApproved = user.isApproved !== false;

        tr.innerHTML = `
            <td class="p-2 md:p-4 border-b border-white/5 md:border-b-white/10 flex justify-between md:table-cell items-center">
                <span class="md:hidden text-xs text-white/50 uppercase font-bold">User</span>
                <span>${user.username || 'N/A'}</span>
            </td>
            <td class="p-2 md:p-4 border-b border-white/5 md:border-b-white/10 flex justify-between md:table-cell items-center">
                <span class="md:hidden text-xs text-white/50 uppercase font-bold">Email</span>
                <span class="text-white/70 text-xs md:text-sm break-all">${user.email}</span>
            </td>
            <td class="p-2 md:p-4 border-b border-white/5 md:border-b-white/10 flex justify-between md:table-cell items-center">
                <span class="md:hidden text-xs text-white/50 uppercase font-bold">Role</span>
                <span style="padding: 0.2rem 0.6rem; border-radius: 4px; background: ${isAdmin ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255,255,255,0.1)'}; color: ${isAdmin ? '#FFD700' : 'white'}; font-size: 0.8rem;">
                    ${user.role || 'user'}
                </span>
            </td>
            <td class="p-2 md:p-4 border-b border-white/5 md:border-b-white/10 flex justify-between md:table-cell items-center">
                <span class="md:hidden text-xs text-white/50 uppercase font-bold">Status</span>
                <span style="padding: 0.2rem 0.6rem; border-radius: 4px; background: ${isApproved ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}; color: ${isApproved ? '#10b981' : '#ef4444'}; font-size: 0.8rem;">
                    ${isApproved ? 'Active' : 'Pending'}
                </span>
            </td>
            <td class="p-2 md:p-4 flex flex-wrap gap-2 justify-end md:table-cell md:text-right mt-2 md:mt-0">
                 ${!isCurrentUser ? `
                    ${!isApproved ? `
                        <button class="btn-approve grow md:grow-0 text-center" data-uid="${user.id}" style="background: #10b981; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">APPROVA</button>
                    ` : `
                        <button class="btn-revoke grow md:grow-0 text-center" data-uid="${user.id}" style="background: #6b7280; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">Blocca</button>
                    `}
                    ${!isAdmin ? `
                        <button class="btn-promote grow md:grow-0 text-center" data-uid="${user.id}" style="background: #3b82f6; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">Promuovi</button>
                    ` : `
                        <button class="btn-demote grow md:grow-0 text-center" data-uid="${user.id}" style="background: #f59e0b; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">Rimuovi</button>
                    `}
                    <button class="btn-delete grow md:grow-0 text-center" data-uid="${user.id}" style="background: #ef4444; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">Elimina</button>
                ` : '<span style="color: var(--text-muted); font-size: 0.8rem;">(Tu)</span>'}
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

    // Approve
    document.querySelectorAll('.btn-approve').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const uid = e.target.dataset.uid;
            if (confirm("Attivare questo account? L'utente potrà accedere.")) {
                const success = await UserData.toggleUserApproval(uid, true);
                if (success) {
                    alert("Account attivato!");
                    loadAdminDashboard();
                } else alert("Errore.");
            }
        });
    });

    // Revoke
    document.querySelectorAll('.btn-revoke').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const uid = e.target.dataset.uid;
            if (confirm("Bloccare questo account? L'utente NON potrà più accedere.")) {
                const success = await UserData.toggleUserApproval(uid, false);
                if (success) {
                    alert("Account bloccato.");
                    loadAdminDashboard();
                } else alert("Errore.");
            }
        });
    });

    // Demote
    document.querySelectorAll('.btn-demote').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const uid = e.target.dataset.uid;
            if (confirm("Sei sicuro di voler rimuovere i privilegi di Admin da questo utente?")) {
                const success = await UserData.updateUserRole(uid, 'user');
                if (success) {
                    alert("Privilegi rimossi con successo!");
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

function renderReports(reports) {
    const container = document.getElementById('reports-list');
    container.innerHTML = '';

    if (!reports || reports.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 1rem;">Nessuna segnalazione presente.</div>';
        return;
    }

    reports.forEach(report => {
        const item = document.createElement('div');
        item.style.background = 'rgba(0, 0, 0, 0.2)';
        item.style.border = '1px solid rgba(255, 255, 255, 0.05)';
        item.style.borderRadius = '12px';
        item.style.padding = '1rem';
        item.style.marginBottom = '1rem';
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'flex-start';

        const date = new Date(report.timestamp).toLocaleDateString('it-IT');

        item.innerHTML = `
            <div>
                <div style="color: #f59e0b; font-weight: 600; margin-bottom: 0.5rem;">Domanda ID: ${report.questionId}</div>
                <div style="margin-bottom: 0.5rem; font-size: 0.9rem;">"${report.question}"</div>
                <div style="color: var(--text-muted); font-size: 0.9rem;">
                    <strong>Segnalazione:</strong> ${report.comment}
                </div>
                <div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">
                    Da: ${report.username || 'Anonimo'} • ${date}
                </div>
            </div>
            <button class="btn-resolve" data-rid="${report.id}" style="background: #10b981; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem; white-space: nowrap; margin-left: 1rem;">
                Risolvi
            </button>
        `;

        container.appendChild(item);
    });

    // Resolve (Delete) Report
    document.querySelectorAll('.btn-resolve').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const rid = e.target.dataset.rid;
            if (confirm("Segnare come risolta (eliminare) questa segnalazione?")) {
                const success = await UserData.deleteReport(rid);
                if (success) {
                    // Remove from DOM immediately for better UX
                    e.target.closest('div').remove();
                    // Or reload
                    // loadAdminDashboard();
                } else {
                    alert("Errore durante l'eliminazione.");
                }
            }
        });
    });
}
