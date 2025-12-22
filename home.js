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
        // Skip Deep Dive button (has its own handler)
        if (btn.id === 'deep-dive-btn') return;

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
            // Enhanced visual style: Card layout
            btn.className = 'w-full text-left bg-[#1a1a2e] hover:bg-[#252540] border border-white/10 hover:border-retro-purple rounded-xl p-4 transition-all group flex items-center justify-between shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] mb-2';

            btn.innerHTML = `
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-lg bg-retro-purple/10 border border-retro-purple/20 flex items-center justify-center text-retro-purple group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined">folder_open</span>
                    </div>
                    <div>
                         <h4 class="font-bold text-white text-sm uppercase tracking-wide group-hover:text-retro-purple transition-colors line-clamp-1">${subject}</h4>
                         <div class="flex items-center gap-2 mt-1">
                            <span class="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/5">${count} Quesiti</span>
                         </div>
                    </div>
                </div>
                <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-retro-purple group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-[18px] text-white/30 group-hover:text-white">play_arrow</span>
                </div>
            `;

            btn.addEventListener('click', () => {
                showDeepDiveSettings(subject, module, questions);
            });
            deepDiveList.appendChild(btn);
        });
    }

    // --- Deep Dive Settings Logic ---
    const ddSettingsPanel = document.getElementById('deep-dive-settings');
    const ddBackBtn = document.getElementById('deep-dive-back-btn');
    const ddSubjectTitle = document.getElementById('deep-dive-selected-subject');
    const ddCountSelect = document.getElementById('deep-dive-count-select');
    const ddManualToggle = document.getElementById('deep-dive-manual-toggle');
    const ddQuestionList = document.getElementById('deep-dive-question-list');
    const ddStartBtn = document.getElementById('deep-dive-start-confirm-btn');

    let currentDDSubject = null;
    let currentDDModule = null;
    let currentDDData = null;

    if (ddBackBtn) {
        ddBackBtn.addEventListener('click', () => {
            ddSettingsPanel.classList.add('hidden');
            deepDiveList.classList.remove('hidden');
        });
    }

    if (ddManualToggle) {
        ddManualToggle.addEventListener('click', () => {
            const isHidden = ddQuestionList.classList.contains('hidden');
            if (isHidden) {
                ddQuestionList.classList.remove('hidden');
                ddManualToggle.textContent = "NASCONDI LISTA";
                renderManualList();
            } else {
                ddQuestionList.classList.add('hidden');
                ddManualToggle.textContent = "MOSTRA LISTA";
            }
        });
    }

    if (ddStartBtn) {
        ddStartBtn.addEventListener('click', () => {
            const count = ddCountSelect.value;
            let url = `quiz.html?mode=deep-dive&subject=${encodeURIComponent(currentDDSubject)}&count=${count}`;

            // Check manual selection
            if (!ddQuestionList.classList.contains('hidden')) {
                const checkedBoxes = ddQuestionList.querySelectorAll('input[type="checkbox"]:checked');
                if (checkedBoxes.length > 0) {
                    const ids = Array.from(checkedBoxes).map(cb => cb.value).join(',');
                    url += `&ids=${encodeURIComponent(ids)}`;
                }
            }
            window.location.href = url;
        });
    }

    function showDeepDiveSettings(subject, module, questions) {
        currentDDSubject = subject;
        currentDDModule = module;
        currentDDData = questions;

        deepDiveList.classList.add('hidden');
        ddSettingsPanel.classList.remove('hidden');
        ddSubjectTitle.textContent = subject;

        // Reset state
        ddCountSelect.value = "10";
        ddQuestionList.classList.add('hidden');
        ddManualToggle.textContent = "MOSTRA LISTA";
        ddQuestionList.innerHTML = ''; // Lazy clear
    }

    function renderManualList() {
        if (!currentDDSubject || !currentDDModule || ddQuestionList.children.length > 0) return;

        const questions = currentDDModule.getQuestionsBySubject(currentDDData, currentDDSubject);

        questions.forEach(q => {
            const div = document.createElement('div');
            div.className = "flex items-start gap-2 p-2 rounded hover:bg-white/5";
            div.innerHTML = `
                <input type="checkbox" value="${q.id}" class="mt-1 rounded bg-black/40 border-white/20 text-retro-purple focus:ring-retro-purple">
                <p class="text-xs text-white/80 line-clamp-2 cursor-pointer select-none flex-1">${q.question}</p>
             `;
            div.querySelector('p').addEventListener('click', () => div.querySelector('input').click());
            ddQuestionList.appendChild(div);
        });
    }
});
