document.addEventListener('DOMContentLoaded', () => {
    const subjectSelectionScreen = document.getElementById('subject-selection-screen');
    const startScreen = document.getElementById('start-screen');
    const subjectButtons = document.querySelectorAll('.subject-btn');
    const startBtn = document.getElementById('start-btn');
    const questionCountSelect = document.getElementById('question-count');
    const subjectTitle = document.getElementById('subject-title');
    const appTitle = document.getElementById('app-title');
    const backToSubjectsBtn = document.getElementById('back-to-subjects-btn');

    // Check Protocol
    if (window.location.protocol === 'file:') {
        alert("ATTENZIONE: Stai aprendo il file direttamente. Devi usare il server locale!\n\nVai su: http://localhost:3000");
    }

    let currentCategory = "ps";

    const subjectMap = {
        'ps': 'Legislazione di Pubblica Sicurezza',
        'costituzionale': 'Diritto Costituzionale',
        'penale': 'Diritto Penale',
        'procedura_penale': 'Procedura Penale',
        'normativa': 'Normativa Disciplinare',
        'informatica': 'Informatica',
        'amministrativo': 'Diritto Amministrativo',
        'civile': 'Diritto Civile',
        'all': 'Tutti gli Argomenti',
        'speed': 'Speed Mode ⚡'
    };

    // Initialize: Show Subject Selection
    showScreen(subjectSelectionScreen);

    // Event Listeners for Subject Selection
    subjectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const subject = btn.getAttribute('data-subject');
            if (subject === 'speed') {
                // Speed Mode: Direct start with fixed settings
                window.location.href = `quiz.html?subject=speed&count=50&difficulty=mixed`;
            } else {
                selectSubject(subject);
            }
        });
    });

    function selectSubject(subject) {
        currentCategory = subject;
        const title = subjectMap[subject] || "Quiz";

        subjectTitle.textContent = `Quiz ${title}`;
        appTitle.textContent = title;

        showScreen(startScreen);
    }

    function showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }

    // Start Quiz - Navigate to quiz.html
    startBtn.addEventListener('click', () => {
        const count = questionCountSelect.value;
        const difficulty = document.getElementById('difficulty-select').value;
        // Redirect to quiz page with parameters
        window.location.href = `quiz.html?subject=${currentCategory}&count=${count}&difficulty=${difficulty}`;
    });

    if (backToSubjectsBtn) {
        backToSubjectsBtn.addEventListener('click', () => {
            showScreen(subjectSelectionScreen);
        });
    }

    // Leaderboard Logic
    const leaderboardBtn = document.getElementById('leaderboard-btn');
    const leaderboardScreen = document.getElementById('leaderboard-screen');
    const backFromLeaderboardBtn = document.getElementById('back-from-leaderboard-btn');
    const leaderboardBody = document.getElementById('leaderboard-body');

    if (leaderboardBtn) {
        leaderboardBtn.addEventListener('click', async () => {
            showScreen(leaderboardScreen);
            leaderboardBody.innerHTML = '<tr><td colspan="3">Caricamento...</td></tr>';

            if (window.Leaderboard) {
                const scores = await window.Leaderboard.getLeaderboard();
                renderLeaderboard(scores);
            } else {
                leaderboardBody.innerHTML = '<tr><td colspan="3">Errore caricamento modulo</td></tr>';
            }
        });
    }

    if (backFromLeaderboardBtn) {
        backFromLeaderboardBtn.addEventListener('click', () => {
            showScreen(subjectSelectionScreen);
        });
    }

    function renderLeaderboard(scores) {
        leaderboardBody.innerHTML = '';
        if (scores.length === 0) {
            leaderboardBody.innerHTML = '<tr><td colspan="3">Nessun punteggio ancora!</td></tr>';
            return;
        }

        scores.forEach((entry, index) => {
            const row = document.createElement('tr');
            let medal = '';
            if (index === 0) medal = '🥇 ';
            if (index === 1) medal = '🥈 ';
            if (index === 2) medal = '🥉 ';

            row.innerHTML = `
                <td>${medal}${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.score}</td>
            `;
            leaderboardBody.appendChild(row);
        });
    }
});
