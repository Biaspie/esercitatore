document.addEventListener('DOMContentLoaded', () => {
    // Selectors
    const modalStart = document.getElementById('start-screen');
    const modalLeaderboard = document.getElementById('leaderboard-screen');

    // Buttons
    const subjectButtons = document.querySelectorAll('.subject-btn');
    const startBtn = document.getElementById('start-btn');
    const closeStartBtn = document.getElementById('close-modal-btn');
    const closeRankBtn = document.getElementById('back-from-leaderboard-btn');
    const leaderboardBtn = document.getElementById('leaderboard-btn');
    const navRankBtn = document.getElementById('nav-rank-btn');

    // Settings Inputs
    const questionCountSelect = document.getElementById('question-count');
    const difficultySelect = document.getElementById('difficulty-select');
    const subjectTitle = document.getElementById('subject-title');

    // Check Protocol
    if (window.location.protocol === 'file:') {
        alert("ATTENZIONE: Devi usare il server locale (http://localhost:3000)");
    }

    // --- PWA Logic ---
    let deferredPrompt;
    const installBtn = document.getElementById('install-app-btn');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (installBtn) {
            installBtn.classList.remove('hidden');
            installBtn.style.display = 'flex'; // Ensure flex layout

            installBtn.addEventListener('click', () => {
                installBtn.style.display = 'none';
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    deferredPrompt = null;
                });
            });
        }
    });

    // --- State ---
    let currentCategory = "ps";
    const subjectMap = {
        'ps': 'Legislazione P.S.',
        'costituzionale': 'Dir. Costituzionale',
        'penale': 'Diritto Penale',
        'procedura_penale': 'Procedura Penale',
        'normativa': 'Normativa Disc.',
        'informatica': 'Informatica',
        'amministrativo': 'Dir. Amministrativo',
        'civile': 'Diritto Civile',
        'all': 'Tutti gli Argomenti',
        'speed': 'Speed Mode ⚡'
    };

    // --- Modal Functions ---
    function openModal(modal) {
        modal.classList.remove('hidden');
        // Slight delay to allow display:block to apply before opacity transition
        requestAnimationFrame(() => {
            modal.classList.remove('opacity-0');
            const card = modal.querySelector('div'); // The inner card
            if (card) {
                card.classList.remove('scale-95');
                card.classList.add('scale-100');
            }
        });
    }

    function closeModal(modal) {
        modal.classList.add('opacity-0');
        const card = modal.querySelector('div');
        if (card) {
            card.classList.remove('scale-100');
            card.classList.add('scale-95');
        }
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300); // Match transition duration
    }

    // --- Event Listeners ---

    // Selectors
    const subjectFilterContainer = document.getElementById('subject-filter-container');
    const subjectChecklist = document.getElementById('subject-checklist');

    // Subject Selection
    subjectButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Prevent bubbling if inside another clickable
            e.stopPropagation();

            const subject = btn.getAttribute('data-subject');

            if (subject === 'survival') {
                // Survival Mode: Direct Launch
                window.location.href = `quiz.html?mode=survival&subject=all`;
                return;
            }

            // Open Mission Briefing (Start Modal)
            currentCategory = subject;
            const displayTitle = subjectMap[subject] || "Unknown Subject";
            if (subjectTitle) subjectTitle.textContent = displayTitle;

            // Handle "All Subjects" Filtering UI
            if (subject === 'all') {
                if (subjectFilterContainer) {
                    subjectFilterContainer.classList.remove('hidden');
                    // Populate Checklist if empty
                    if (subjectChecklist.children.length === 0) {
                        const filterableSubjects = Object.keys(subjectMap).filter(k => k !== 'all' && k !== 'speed');
                        filterableSubjects.forEach(key => {
                            const label = document.createElement('label');
                            label.className = "flex items-center gap-2 text-sm text-white/80 cursor-pointer hover:text-white";
                            label.innerHTML = `
                                <input type="checkbox" value="${key}" checked class="form-checkbox h-4 w-4 text-primary bg-background-dark border-white/20 rounded focus:ring-0 focus:ring-offset-0">
                                <span>${subjectMap[key]}</span>
                            `;
                            subjectChecklist.appendChild(label);
                        });
                    }
                }
            } else {
                if (subjectFilterContainer) subjectFilterContainer.classList.add('hidden');
            }

            openModal(modalStart);
        });
    });

    // Start Quiz
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            const count = questionCountSelect.value;
            const difficulty = difficultySelect.value;
            let url = `quiz.html?subject=${currentCategory}&count=${count}&difficulty=${difficulty}`;

            // Add exclusions if "All" is selected
            if (currentCategory === 'all' && subjectChecklist) {
                const checkboxes = subjectChecklist.querySelectorAll('input[type="checkbox"]');
                const excluded = [];
                checkboxes.forEach(cb => {
                    if (!cb.checked) excluded.push(cb.value);
                });
                if (excluded.length > 0) {
                    url += `&exclude=${excluded.join(',')}`;
                }
            }

            window.location.href = url;
        });
    }

    // Close Modals
    if (closeStartBtn) {
        closeStartBtn.addEventListener('click', () => closeModal(modalStart));
    }

    // Close on background click
    [modalStart, modalLeaderboard].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal(modal);
            });
        }
    });

    // --- Leaderboard ---
    const leaderboardScreen = document.getElementById('leaderboard-screen');
    const leaderboardBody = document.getElementById('leaderboard-body');
    const leaderboardTabs = document.querySelectorAll('.leaderboard-tab');

    // Tab Logic
    leaderboardTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const mode = tab.getAttribute('data-tab');
            openLeaderboard(mode);
        });
    });

    async function openLeaderboard(mode = 'total') {
        openModal(leaderboardScreen);

        // Update Tabs UI
        leaderboardTabs.forEach(t => {
            if (t.getAttribute('data-tab') === mode) {
                t.className = "flex-1 py-3 text-xs font-bold uppercase tracking-wider text-yellow-500 border-b-2 border-yellow-500 bg-yellow-500/10 transition-colors leaderboard-tab";
            } else {
                t.className = "flex-1 py-3 text-xs font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors leaderboard-tab";
            }
        });

        // Loading
        leaderboardBody.innerHTML = '<tr><td colspan="3" class="p-4 text-center text-white/50 italic">Loading...</td></tr>';

        if (window.Leaderboard) {
            const scores = await window.Leaderboard.getLeaderboard(mode);
            renderLeaderboard(scores, mode);
        } else {
            leaderboardBody.innerHTML = '<tr><td colspan="3" class="p-4 text-center text-danger">Error loading module</td></tr>';
        }
    }

    // Open Buttons (Default to Total)
    const handleLeaderboardOpen = () => openLeaderboard('total');

    if (leaderboardBtn) leaderboardBtn.addEventListener('click', handleLeaderboardOpen);
    if (navRankBtn) navRankBtn.addEventListener('click', handleLeaderboardOpen);

    if (closeRankBtn) {
        closeRankBtn.addEventListener('click', () => closeModal(modalLeaderboard));
    }

    function renderLeaderboard(scores, mode) {
        leaderboardBody.innerHTML = '';

        if (scores.length === 0) {
            leaderboardBody.innerHTML = '<tr><td colspan="3" class="p-4 text-center text-white/30 italic">Nessun punteggio ancora.</td></tr>';
            return;
        }

        scores.forEach((entry, index) => {
            const row = document.createElement('tr');
            row.className = 'border-b border-white/5 hover:bg-white/5 transition-colors';

            let rankDisplay = `<span class="font-mono text-white/50">#${index + 1}</span>`;
            if (index === 0) rankDisplay = '🥇';
            if (index === 1) rankDisplay = '🥈';
            if (index === 2) rankDisplay = '🥉';

            let scoreSuffix = "";
            if (mode === 'total') scoreSuffix = " XP";
            if (mode === 'speed') scoreSuffix = " Pts";

            // Level Badge only for Total (XP)
            let levelBadge = "";
            if (entry.level) {
                levelBadge = `<span class="text-[10px] text-yellow-500 ml-1 font-mono uppercase">Lvl ${entry.level}</span>`;
            }

            row.innerHTML = `
                <td class="p-3">${rankDisplay}</td>
                <td class="p-3 font-bold text-white">
                    ${entry.name} 
                    ${levelBadge}
                </td>
                <td class="p-3 text-right font-mono text-primary font-bold">${entry.score}${scoreSuffix}</td>
            `;
            leaderboardBody.appendChild(row);
        });
    }
    // --- Deep Dive Logic ---
    const deepDiveBtn = document.getElementById('deep-dive-btn');
    const deepDiveModal = document.getElementById('deep-dive-modal');
    const closeDeepDiveBtn = document.getElementById('close-deep-dive-btn');
    const deepDiveList = document.getElementById('deep-dive-list');
    let deepDiveData = null;

    if (deepDiveBtn) {
        deepDiveBtn.addEventListener('click', async () => {
            openModal(deepDiveModal);

            // Load Data if not loaded
            if (!deepDiveData) {
                const { DeepDive } = await import('./deep-dive.js');
                deepDiveData = await DeepDive.loadQuestions();
                const subjects = DeepDive.getSubjects(deepDiveData);
                renderDeepDiveSubjects(subjects, deepDiveData, DeepDive);
            }
        });
    }

    if (closeDeepDiveBtn) {
        closeDeepDiveBtn.addEventListener('click', () => closeModal(deepDiveModal));
    }

    // Close Deep Dive on background click
    if (deepDiveModal) {
        deepDiveModal.addEventListener('click', (e) => {
            if (e.target === deepDiveModal) closeModal(deepDiveModal);
        });
    }

    function renderDeepDiveSubjects(subjects, questions, module) {
        deepDiveList.innerHTML = '';
        if (subjects.length === 0) {
            deepDiveList.innerHTML = '<p class="text-center text-white/50">Nessun approfondimento disponibile.</p>';
            return;
        }

        subjects.forEach(subject => {
            const count = module.getQuestionsBySubject(questions, subject).length;
            const btn = document.createElement('button');
            btn.className = 'deep-dive-category-btn group';
            btn.innerHTML = `
                <span>${subject}</span>
                <span class="count-badge">${count} Q</span>
            `;
            btn.addEventListener('click', () => {
                // Launch Quiz in Deep Dive Mode
                // We pass the subject name. The Quiz will use DeepDive module to fetch.
                window.location.href = `quiz.html?mode=deep-dive&subject=${encodeURIComponent(subject)}`;
            });
            deepDiveList.appendChild(btn);
        });
    }
});
