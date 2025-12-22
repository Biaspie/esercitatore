import { UserData } from './user-data.js';
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', async () => {
    // Selectors
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');

    // HUD Elements
    const subjectLabel = document.getElementById('subject-label');
    const difficultyBadge = document.getElementById('difficulty-badge'); // NEW
    const questionCounter = document.getElementById('question-counter'); // 1-1 style
    const livesContainer = document.getElementById('lives-container');
    const timerDisplay = document.getElementById('timer-display');
    const timerBar = document.getElementById('timer-bar');
    const timerContainerUI = document.getElementById('timer-container-ui'); // NEW
    const scoreDisplay = document.getElementById('score-display');
    const favoriteBtn = document.getElementById('favorite-btn'); // NEW

    // Content Elements
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const reportBtn = document.getElementById('report-btn');

    // Nav Buttons
    const homeBtn = document.getElementById('home-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn'); // NEW
    const helpBtn = document.getElementById('help-btn'); // NEW

    // Explanation Modal Elements
    const explanationModal = document.getElementById('explanation-modal');
    const closeExplanationBtn = document.getElementById('close-explanation-btn');
    const closeExplanationBtn2 = document.getElementById('close-explanation-btn-2');
    const explanationCorrectAnswer = document.getElementById('explanation-correct-answer');
    const explanationText = document.getElementById('explanation-text');

    // Result Elements
    const finalScore = document.getElementById('final-score');
    const finalScoreFraction = document.getElementById('final-score-fraction');
    const accuracyDisplay = document.getElementById('accuracy-display');
    const xpEarnedDisplay = document.getElementById('xp-earned-display');
    const starsContainer = document.getElementById('stars-container');
    const restartBtn = document.getElementById('restart-btn');
    const homeResultBtn = document.getElementById('home-result-btn');
    const saveScoreContainer = document.getElementById('save-score-container');
    const saveScoreBtn = document.getElementById('save-score-btn');
    const playerNameInput = document.getElementById('player-name');

    // Audio Context
    let audioContext = null;

    function initAudio() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    }

    // Unlock Audio on First Interaction
    document.addEventListener('click', initAudio, { once: true });
    document.addEventListener('touchstart', initAudio, { once: true });

    function playSound(type) {
        if (!audioContext) return;
        if (audioContext.state === 'suspended') audioContext.resume(); // Double check

        try {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            if (type === 'correct') {
                oscillator.type = 'square'; // 8-bit style
                oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.1);
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 0.3);

                // Haptic Correction
                if (navigator.vibrate) navigator.vibrate(50);
            } else if (type === 'wrong') {
                oscillator.type = 'sawtooth';
                oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
                oscillator.frequency.linearRampToValueAtTime(80, audioContext.currentTime + 0.3);
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 0.3);

                // Haptic Wrong (Double pulse)
                if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
            }
        } catch (e) {
            console.warn("Audio/Haptic Error:", e);
        }
    }

    // State
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let mistakes = 0;
    let userData = { favorites: [], errors: [] };

    // Timer State
    let timerInterval;
    let timeLeft = 20; // Default
    let isSpeedMode = false;
    let isSurvivalMode = false;

    // Params
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject') || 'ps';

    // Initialize
    onAuthStateChanged(auth, (user) => {
        startQuiz();
    });

    async function startQuiz() {
        initAudio();
        // Load Data
        if (auth.currentUser) {
            try {
                userData = await UserData.getUserData();
            } catch (e) {
                console.warn("Failed user data load", e);
            }
        }

        // Fetch Questions
        try {
            const response = await fetch('questions.json');
            let allQuestions = await response.json();

            // Normalize questions
            allQuestions = allQuestions.map(q => {
                if (Array.isArray(q.options)) return q;
                const optionsArray = Object.values(q.options);
                const answerKey = q.answer;
                const answerText = q.options[answerKey];
                return { ...q, options: optionsArray, answer: answerText };
            });

            // Filter
            const countParam = urlParams.get('count') || '20';
            const difficultyParam = urlParams.get('difficulty') || 'mixed';
            const modeParam = urlParams.get('mode');
            const excludeParam = urlParams.get('exclude'); // Comma separated

            let filteredQuestions = [];

            // Category Map for filtering
            const categoryPrefixMap = {
                "ps": "Legislazione di Pubblica Sicurezza",
                "costituzionale": "Diritto Costituzionale",
                "penale": "Diritto Penale",
                "procedura_penale": "Procedura Penale",
                "normativa": "Normativa Disciplinare",
                "informatica": "Informatica",
                "amministrativo": "Diritto Amministrativo",
                "civile": "Diritto Civile"
            };

            if (modeParam === 'favorites') {
                filteredQuestions = allQuestions.filter(q => userData.favorites.includes(q.id));
            } else if (modeParam === 'errors') {
                filteredQuestions = allQuestions.filter(q => userData.errors.includes(q.id));
            } else if (modeParam === 'survival') {
                isSurvivalMode = true;
                // Survival: All questions, infinite loop handled in nextBtn, 3 hearts
                filteredQuestions = allQuestions.sort(() => 0.5 - Math.random());
            } else if (subjectParam === 'speed') {
                isSpeedMode = true;
                // Speed: 50 questions, fast timer, NO hearts
                filteredQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 50);
            } else if (subjectParam === 'all') {
                // Handle Exclusions
                if (excludeParam) {
                    const excludedKeys = excludeParam.split(',');
                    const excludedPrefixes = excludedKeys.map(k => categoryPrefixMap[k]).filter(Boolean);

                    filteredQuestions = allQuestions.filter(q => {
                        // Return true if q.category does NOT start with any excluded prefix
                        return !excludedPrefixes.some(prefix => q.category.startsWith(prefix));
                    });
                } else {
                    filteredQuestions = allQuestions;
                }

                filteredQuestions = filteredQuestions.sort(() => 0.5 - Math.random()).slice(0, parseInt(countParam) || 20);
            } else {
                // Specific Subject
                const prefix = categoryPrefixMap[subjectParam];
                if (prefix) {
                    filteredQuestions = allQuestions.filter(q => q.category.startsWith(prefix));
                } else {
                    filteredQuestions = allQuestions;
                }

                if (difficultyParam !== 'mixed') {
                    filteredQuestions = filteredQuestions.filter(q => q.difficulty == difficultyParam);
                }

                // Shuffle & Limit
                filteredQuestions = filteredQuestions.sort(() => 0.5 - Math.random()).slice(0, parseInt(countParam) || 20);
            }

            if (filteredQuestions.length === 0) {
                alert("Nessuna domanda trovata per questi criteri.");
                window.location.href = 'home.html';
                return;
            }

            currentQuestions = filteredQuestions.map(q => ({ ...q, userAnswer: null }));
            currentQuestionIndex = 0;
            score = 0;

            // Refill Lives
            renderLives();

            // Update Subject Label
            if (isSurvivalMode) {
                if (subjectLabel) subjectLabel.textContent = "SURVIVAL MODE";
                if (timerContainerUI) timerContainerUI.classList.remove('hidden');
            } else if (isSpeedMode) {
                if (subjectLabel) subjectLabel.textContent = "SPEED MODE";
                if (timerContainerUI) timerContainerUI.classList.remove('hidden');
            } else {
                if (subjectLabel) subjectLabel.textContent = subjectParam.toUpperCase();
                // Hide Timer in Normal Mode
                if (timerContainerUI) timerContainerUI.classList.add('hidden');
            }

            loadQuestion();

        } catch (e) {
            console.error("Init Error", e);
            alert("Errore caricamento quiz.");
        }
    }

    function renderLives() {
        livesContainer.innerHTML = '';
        if (!isSurvivalMode) return; // ONLY SHOW HEARTS IN SURVIVAL MODE

        const maxLives = 3;
        for (let i = 0; i < maxLives; i++) {
            const heart = document.createElement('span');
            heart.className = "material-symbols-outlined text-red-500 text-[20px]";
            heart.textContent = "favorite";
            livesContainer.appendChild(heart);
        }
        mistakes = 0;
    }

    function updateLivesVisual() {
        if (!isSurvivalMode) return;

        const hearts = livesContainer.children;
        if (mistakes <= hearts.length) {
            const lostIndex = Math.max(0, hearts.length - mistakes);
            if (hearts[lostIndex]) {
                hearts[lostIndex].textContent = "heart_broken";
                hearts[lostIndex].classList.add("text-white/30");
                hearts[lostIndex].classList.remove("text-red-500");
            }
        }
    }

    function updateFavoriteBtn(questionId) {
        if (!favoriteBtn) return;

        const isFav = userData.favorites.includes(questionId);
        if (isFav) {
            favoriteBtn.classList.remove('text-white/20');
            favoriteBtn.classList.add('text-retro-yellow', 'drop-shadow-[0_0_5px_rgba(255,255,0,0.5)]');
        } else {
            favoriteBtn.classList.add('text-white/20');
            favoriteBtn.classList.remove('text-retro-yellow', 'drop-shadow-[0_0_5px_rgba(255,255,0,0.5)]');
        }
    }

    function loadQuestion() {
        clearInterval(timerInterval);
        const question = currentQuestions[currentQuestionIndex];

        // Difficulty Badge
        if (difficultyBadge) {
            difficultyBadge.classList.remove('hidden', 'bg-green-500/20', 'text-green-400', 'bg-yellow-500/20', 'text-yellow-400', 'bg-red-500/20', 'text-red-400', 'bg-gray-700', 'text-gray-300');

            const diff = question.difficulty || 1;
            let diffText = "EASY";
            let diffClasses = ['bg-green-500/20', 'text-green-400'];

            if (diff == 2) {
                diffText = "NORMAL";
                diffClasses = ['bg-yellow-500/20', 'text-yellow-400'];
            } else if (diff >= 3) {
                diffText = "HARD";
                diffClasses = ['bg-red-500/20', 'text-red-400'];
            }

            difficultyBadge.textContent = diffText;
            difficultyBadge.classList.add(...diffClasses);
            difficultyBadge.classList.remove('hidden');
        }

        // Counter
        questionCounter.textContent = `${currentQuestionIndex + 1}-${currentQuestions.length}`;

        // Update Favorite Status
        if (typeof updateFavoriteBtn === 'function') updateFavoriteBtn(question.id);

        // Text
        questionText.textContent = question.question;

        // Options
        optionsContainer.innerHTML = '';

        // Shuffle Options if not user answer
        if (!question.shuffledOptions) {
            question.shuffledOptions = [...question.options].sort(() => 0.5 - Math.random());
        }

        question.shuffledOptions.forEach((opt, idx) => {
            const btn = document.createElement('button');
            const letter = String.fromCharCode(65 + idx);

            // Base Class
            btn.className = "group relative w-full bg-[#232348] hover:bg-[#2a2a55] border-2 border-[#434375] active:border-primary active:bg-primary/20 rounded-lg p-1 transition-all duration-100 active:scale-[0.98]";

            // Check state
            let innerBg = "bg-[#1e1e3f]";
            let letterColor = "text-[#9292c9]";
            let letterBorder = "border-[#323267]";

            if (question.userAnswer) {
                btn.disabled = true;
                if (opt === question.answer) {
                    btn.classList.add("border-retro-green");
                    innerBg = "bg-retro-green/20";
                    letterColor = "text-retro-green";
                    letterBorder = "border-retro-green";
                } else if (opt === question.userAnswer) {
                    btn.classList.add("border-retro-red");
                    innerBg = "bg-retro-red/20";
                    letterColor = "text-retro-red";
                    letterBorder = "border-retro-red";
                }
            } else {
                btn.addEventListener('click', () => selectAnswer(opt, question.answer));
            }

            btn.innerHTML = `
                <div class="flex items-center min-h-[3.5rem] py-2 px-4 rounded ${innerBg} group-hover:bg-[#25254d] transition-colors">
                    <span class="flex items-center justify-center w-8 h-8 rounded bg-[#101022] ${letterColor} font-bold font-mono mr-4 border ${letterBorder} group-hover:text-white group-hover:border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_var(--primary-color)] transition-all flex-shrink-0">${letter}</span>
                    <span class="text-white text-lg font-bold tracking-wide break-words w-full text-left leading-tight">${opt}</span>
                </div>
            `;
            optionsContainer.appendChild(btn);
        });

        // Navigation Buttons Management
        // Next Btn
        if (question.userAnswer) {
            nextBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.add('hidden');
            // Only start timer if Speed or Survival
            if (isSpeedMode || isSurvivalMode) {
                startTimer();
            }
        }

        // Prev Btn
        if (isSpeedMode || isSurvivalMode) {
            prevBtn.classList.add('hidden'); // No going back in survival/speed
        } else {
            prevBtn.classList.remove('hidden');
            prevBtn.disabled = (currentQuestionIndex === 0);
        }

        // Help/Explanation Btn Management
        if (helpBtn) {
            if (question.userAnswer) {
                helpBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                helpBtn.classList.add('animate-pulse'); // Hint to user
                // Remove pulse after 2s
                setTimeout(() => helpBtn.classList.remove('animate-pulse'), 2000);
            } else {
                helpBtn.classList.add('opacity-50', 'cursor-not-allowed');
            }
        }
    }

    function startTimer() {
        timeLeft = 20;
        if (isSpeedMode) timeLeft = 10;
        if (isSurvivalMode) timeLeft = 20; // Explicitly set 20s for Survival

        timerDisplay.textContent = timeLeft + "s";
        timerBar.style.width = "100%";

        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = Math.max(0, timeLeft) + "s";

            // Bar calculation
            const maxTime = (isSpeedMode) ? 10 : 20;
            const pct = (timeLeft / maxTime) * 100;
            timerBar.style.width = `${pct}%`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                selectAnswer(null, currentQuestions[currentQuestionIndex].answer); // Timeout
            }
        }, 1000);
    }

    // Keyboard Controls
    document.addEventListener('keydown', (e) => {
        // Only if quiz is active and not showing results
        if (!quizScreen.classList.contains('hidden') && resultScreen.classList.contains('hidden')) {
            const key = e.key.toUpperCase();

            // Map A, B, C, D to options
            const optionsMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };

            if (optionsMap.hasOwnProperty(key)) {
                const index = optionsMap[key];
                const buttons = optionsContainer.querySelectorAll('button');
                if (buttons[index] && !buttons[index].disabled) {
                    buttons[index].click();
                }
            }

            // Enter or ArrowRight for Next
            if ((e.key === 'Enter' || e.key === 'ArrowRight') && !nextBtn.classList.contains('hidden')) {
                nextBtn.click();
            }

            // ArrowLeft for Prev
            if (e.key === 'ArrowLeft' && !prevBtn.classList.contains('hidden') && !prevBtn.disabled) {
                prevBtn.click();
            }

            // 'H' for Help/Explanation
            if ((e.key === 'h' || e.key === 'H') && helpBtn && !helpBtn.classList.contains('opacity-50')) {
                helpBtn.click();
            }
        }
    });

    function selectAnswer(selected, correct) {
        clearInterval(timerInterval);
        const q = currentQuestions[currentQuestionIndex];
        q.userAnswer = selected || "TIMEOUT";
        q.isCorrect = (selected === correct);

        if (q.isCorrect) {
            score += 100;
            // Bonus points for speed in special modes
            if (isSpeedMode || isSurvivalMode) score += (Math.max(0, timeLeft) * 10);
            playSound('correct');
        } else {
            if (isSurvivalMode) {
                mistakes++;
                updateLivesVisual();
            }
            playSound('wrong');

            // Survival Mode Game Over Check
            if (isSurvivalMode && mistakes >= 3) {
                // Game Over
                setTimeout(() => {
                    alert("GAME OVER! Hai finito le vite.");
                    showResults();
                }, 500);
                return; // Stop processing
            }

            if (auth.currentUser) UserData.logError(q.id);
        }

        scoreDisplay.textContent = score.toString().padStart(5, '0');
        loadQuestion();
    }

    // Listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion();
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            // End of list reached
            if (isSurvivalMode) {
                // Survival Mode: Infinite Loop - Add more questions!
                const moreQuestions = currentQuestions.map(q => ({ ...q, userAnswer: null, shuffledOptions: null })).sort(() => 0.5 - Math.random());
                currentQuestions = currentQuestions.concat(moreQuestions);
                currentQuestionIndex++;
                loadQuestion();
            } else {
                // Speed Mode (50 Qs) or Normal Mode -> End
                showResults();
            }
        }
    });

    if (favoriteBtn) {
        let isToggling = false; // Lock flag

        favoriteBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            if (isToggling) return; // Debounce
            isToggling = true;

            const q = currentQuestions[currentQuestionIndex];
            if (!auth.currentUser) {
                alert("Devi essere loggato per salvare i preferiti.");
                isToggling = false;
                return;
            }

            try {
                // Optimistic UI Update
                const wasFav = userData.favorites.includes(q.id);
                if (wasFav) {
                    userData.favorites = userData.favorites.filter(id => id !== q.id);
                } else {
                    userData.favorites.push(q.id);
                }
                updateFavoriteBtn(q.id);

                // Backend Sync
                await UserData.toggleFavorite(q.id);
            } catch (err) {
                console.error("Favorite toggle error:", err);
                // Revert UI on error (optional but good practice)
                const isNowFav = userData.favorites.includes(q.id);
                if (isNowFav) userData.favorites = userData.favorites.filter(id => id !== q.id);
                else userData.favorites.push(q.id);
                updateFavoriteBtn(q.id);
            } finally {
                // Unlock after a short delay to prevent rage-clicking
                setTimeout(() => {
                    isToggling = false;
                }, 300);
            }
        });
    }

    if (helpBtn) {
        helpBtn.addEventListener('click', () => {
            const q = currentQuestions[currentQuestionIndex];
            // Only allowed if answered
            if (!q.userAnswer) return;

            // Populate Modal
            explanationCorrectAnswer.textContent = q.answer;
            explanationText.textContent = q.explanation || "Nessuna spiegazione tattica disponibile nel database per questa domanda.";

            // Show Modal
            explanationModal.classList.remove('hidden');
        });
    }

    // Close Modal Logic
    const closeExp = () => explanationModal.classList.add('hidden');
    if (closeExplanationBtn) closeExplanationBtn.addEventListener('click', closeExp);
    if (closeExplanationBtn2) closeExplanationBtn2.addEventListener('click', closeExp);
    if (explanationModal) {
        explanationModal.addEventListener('click', (e) => {
            if (e.target === explanationModal) closeExp();
        });
    }

    // --- REPORT LOGIC ---
    const reportModal = document.getElementById('report-modal');
    const closeReportBtn = document.getElementById('close-report-btn');
    const cancelReportBtn = document.getElementById('cancel-report-btn');
    const submitReportBtn = document.getElementById('submit-report-btn');
    const reportComment = document.getElementById('report-comment');

    if (reportBtn) {
        reportBtn.addEventListener('click', () => {
            if (!auth.currentUser) {
                alert("Devi essere loggato per segnalare.");
                return;
            }
            reportComment.value = ""; // Clear
            reportModal.classList.remove('hidden');
        });
    }

    const closeReport = () => reportModal.classList.add('hidden');
    if (closeReportBtn) closeReportBtn.addEventListener('click', closeReport);
    if (cancelReportBtn) cancelReportBtn.addEventListener('click', closeReport);
    if (reportModal) {
        reportModal.addEventListener('click', (e) => {
            if (e.target === reportModal) closeReport();
        });
    }

    if (submitReportBtn) {
        submitReportBtn.addEventListener('click', async () => {
            const comment = reportComment.value.trim();
            if (!comment) {
                alert("Inserisci un commento per la segnalazione.");
                return;
            }

            const q = currentQuestions[currentQuestionIndex];
            const loadBtnText = submitReportBtn.innerHTML;
            submitReportBtn.innerHTML = "Inviando...";
            submitReportBtn.disabled = true;

            try {
                // Get username safely
                let username = "Anonimo";
                if (auth.currentUser) {
                    try {
                        const uData = await UserData.getUserData();
                        if (uData && uData.username) username = uData.username;
                    } catch (e) { }
                }

                await UserData.submitReport({
                    questionId: q.id,
                    question: q.question,
                    comment: comment,
                    userId: auth.currentUser.uid,
                    username: username
                });

                alert("Segnalazione inviata con successo! Grazie.");
                closeReport();
            } catch (e) {
                console.error("Report Error:", e);
                alert("Errore nell'invio della segnalazione.");
            } finally {
                submitReportBtn.innerHTML = loadBtnText;
                submitReportBtn.disabled = false;
            }
        });
    }

    function showResults() {
        quizScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');

        finalScore.textContent = score;

        let fractionText = `${score / (currentQuestions.length * 100) * 100 | 0}%`;
        if (isSurvivalMode) fractionText = `${currentQuestionIndex + 1} Domande`;
        if (isSpeedMode) fractionText = `${score} Pti`;

        finalScoreFraction.textContent = fractionText;

        const correctCount = currentQuestions.filter(q => q.isCorrect).length;
        const totalAnswered = currentQuestionIndex + 1;
        const accuracy = Math.round((correctCount / totalAnswered) * 100) || 0;
        accuracyDisplay.textContent = `${accuracy}%`;

        // XP Calculation
        // Base: Diff 1 = 5XP, Diff 2 = 10XP, Diff 3 = 15XP
        const xp = currentQuestions.reduce((acc, q) => {
            if (!q.isCorrect) return acc;
            const diff = q.difficulty || 1;
            return acc + (diff * 5); // 5, 10, 15
        }, 0);

        xpEarnedDisplay.textContent = `+${xp}`;
        if (auth.currentUser) UserData.addExp(xp);

        // Stars
        starsContainer.innerHTML = '';
        const stars = accuracy >= 90 ? 3 : (accuracy >= 60 ? 2 : (accuracy >= 30 ? 1 : 0));
        for (let i = 0; i < 3; i++) {
            const star = document.createElement('span');
            star.className = `material-symbols-outlined text-3xl drop-shadow-md ${i < stars ? 'text-retro-yellow' : 'text-white/20'}`;
            star.textContent = "star";
            starsContainer.appendChild(star);
        }

        // Save Score Logic
        if (isSpeedMode || isSurvivalMode) {
            const mode = isSurvivalMode ? 'survival' : (isSpeedMode ? 'speed' : 'normal');

            if (auth.currentUser) {
                // Auto Importante: Auto-save for logged users
                const feedbackEl = document.createElement('p');
                feedbackEl.className = "text-lg font-retro text-retro-yellow text-center mt-2 animate-pulse";
                feedbackEl.textContent = "UPLOADING TO HQ...";
                saveScoreContainer.parentNode.insertBefore(feedbackEl, saveScoreContainer);

                // Get name
                const username = userData.username || "Operative";

                if (window.Leaderboard) {
                    window.Leaderboard.saveScore(username, score, mode).then(() => {
                        feedbackEl.textContent = "SCORE RECORDED!";
                        feedbackEl.classList.remove("text-retro-yellow", "animate-pulse");
                        feedbackEl.classList.add("text-retro-green");
                    }).catch(err => {
                        console.error("Auto-save failed", err);
                        feedbackEl.textContent = "UPLOAD FAILED";
                        feedbackEl.classList.remove("text-retro-yellow");
                        feedbackEl.classList.add("text-retro-red");
                    });
                }
            } else {
                // Guest: Manual Input
                saveScoreContainer.classList.remove('hidden');
                saveScoreBtn.onclick = async () => {
                    const name = playerNameInput.value || "UNK";
                    if (window.Leaderboard) {
                        await window.Leaderboard.saveScore(name, score, mode);
                        alert("Punteggio salvato in classifica!");
                        window.location.href = 'home.html';
                    }
                };
            }
        }
    }

    homeBtn.addEventListener('click', () => window.location.href = 'home.html');
    homeResultBtn.addEventListener('click', () => window.location.href = 'home.html');
    restartBtn.addEventListener('click', () => window.location.reload());
});
