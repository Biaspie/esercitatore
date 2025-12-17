import { UserData } from './user-data.js';
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', async () => {
    const quizScreen = document.getElementById('quiz-screen');

    // Offline Indicator Removed per user request

    const resultScreen = document.getElementById('result-screen');

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionNumberDisplay = document.getElementById('question-number');
    const progressBar = document.getElementById('progress-bar');
    const feedbackDisplay = document.getElementById('feedback');
    const scoreDisplay = document.getElementById('score');
    const totalQuestionsDisplay = document.getElementById('total-questions');
    const resultMessage = document.getElementById('result-message');

    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const homeBtn = document.getElementById('home-btn');
    const homeResultBtn = document.getElementById('home-result-btn');
    const restartBtn = document.getElementById('restart-btn');

    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let userData = { favorites: [], errors: [] };

    // Speed Mode Variables
    let isSpeedMode = false;
    let timerInterval;
    let timeLeft = 20;
    let autoAdvanceTimeout;
    const timerContainer = document.getElementById('timer-container');
    const timerSeconds = document.getElementById('timer-seconds');
    const liveScoreContainer = document.getElementById('live-score-container');
    const liveScoreDisplay = document.getElementById('live-score');

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

    function playSound(type) {
        if (!audioContext) return;

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        if (type === 'correct') {
            // Ding sound (Sine wave, high pitch)
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.5);
        } else if (type === 'wrong') {
            // Buzz sound (Sawtooth wave, low pitch)
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
            oscillator.frequency.linearRampToValueAtTime(100, audioContext.currentTime + 0.3);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.3);
        }
    }

    function triggerHaptic(type) {
        if (!navigator.vibrate) return;

        if (type === 'correct') {
            navigator.vibrate(50); // Short tap
        } else if (type === 'wrong') {
            navigator.vibrate([100, 50, 100]); // Double tap
        }
    }

    // Check Protocol
    if (window.location.protocol === 'file:') {
        alert("ATTENZIONE: Stai aprendo il file direttamente. Devi usare il server locale!\n\nVai su: http://localhost:3000");
    }

    // Mapping subject params to DB categories
    const categoryMap = {
        "ps": "Legislazione di Pubblica Sicurezza",
        "costituzionale": "Diritto Costituzionale",
        "penale": "Diritto Penale",
        "procedura_penale": "Procedura Penale",
        "normativa": "Normativa Disciplinare",
        "informatica": "Informatica",
        "amministrativo": "Diritto Amministrativo",
        "civile": "Diritto Civile"
    };

    // Parse URL Parameters
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject') || 'ps';
    const countParam = urlParams.get('count') || '20';
    const difficultyParam = urlParams.get('difficulty') || 'mixed';
    const modeParam = urlParams.get('mode'); // 'favorites', 'errors', 'history'
    const historyIdParam = urlParams.get('id');

    // Initialize Quiz
    // Wait for Auth to be ready to ensure UserData works
    onAuthStateChanged(auth, (user) => {
        startQuiz(subjectParam, countParam, difficultyParam, modeParam, historyIdParam);
    });

    async function startQuiz(subject, countSetting, difficulty, mode, historyId) {
        initAudio(); // Initialize Audio Context on user interaction

        userData = { favorites: [], errors: [] };
        let recentQuestionIds = [];

        if (auth.currentUser) {
            try {
                userData = await UserData.getUserData();
                // Initialize EXP UI
                updateExpUI(userData.exp || 0, userData.level || 1);

                // Fetch recent questions to avoid repetition
                if (mode !== 'history' && mode !== 'favorites' && mode !== 'errors') {
                    recentQuestionIds = await UserData.getRecentQuestionIds(10); // Check last 10 quizzes
                }
            } catch (e) {
                console.warn("Failed to load user data:", e);
            }
        }

        try {
            // Fetch all questions from the static JSON file
            const response = await fetch('questions.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let allQuestions = await response.json();

            // Normalize questions (handle Object options vs Array options)
            allQuestions = allQuestions.map(q => {
                if (Array.isArray(q.options)) {
                    return q;
                } else {
                    // Convert Object options to Array options and update Answer to be the text
                    // Assumes options are like { "A": "Text", "B": "Text" } and answer is "A"
                    const optionsArray = Object.values(q.options);
                    const answerKey = q.answer;
                    const answerText = q.options[answerKey];

                    return {
                        ...q,
                        options: optionsArray,
                        answer: answerText
                    };
                }
            });

            // Filter by category
            let filteredQuestions = [];

            if (mode === 'history' && historyId) {
                // Load specific history test
                try {
                    const historyTest = await UserData.getHistoryDetail(historyId);
                    if (historyTest) {
                        filteredQuestions = historyTest.questions; // These already have userAnswer, isCorrect, etc.
                        // Disable shuffling for history review to keep original order? Or maybe it's already saved in order.
                        // The saved questions array should be used as is.
                        currentQuestions = filteredQuestions;
                        // Set review mode flag if needed, or just rely on userAnswer being present
                    } else {
                        alert("Test non trovato.");
                        window.location.href = 'home.html';
                        return;
                    }
                } catch (e) {
                    console.error("Error loading history:", e);
                    alert("Errore nel caricamento della cronologia.");
                    window.location.href = 'home.html';
                    return;
                }
            } else if (mode === 'favorites') {
                if (!userData.favorites || userData.favorites.length === 0) {
                    alert("Non hai ancora aggiunto domande ai preferiti!");
                    window.location.href = 'home.html';
                    return;
                }
                filteredQuestions = allQuestions.filter(q => userData.favorites.includes(q.id));
            } else if (mode === 'errors') {
                if (!userData.errors || userData.errors.length === 0) {
                    alert("Non hai errori salvati! Ottimo lavoro!");
                    window.location.href = 'home.html';
                    return;
                }
                filteredQuestions = allQuestions.filter(q => userData.errors.includes(q.id));
            } else if (subject === 'speed') {
                isSpeedMode = true;
                timerContainer.classList.remove('hidden');
                liveScoreContainer.classList.remove('hidden');
                // Speed Mode: 50 random questions from ALL categories
                filteredQuestions = allQuestions;
                // Shuffle immediately to get random selection
                // Fisher-Yates Shuffle
                for (let i = filteredQuestions.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
                }
                filteredQuestions = filteredQuestions.slice(0, 30);
            } else if (subject === 'all') {
                // Stratified Sampling for "All Subjects"
                const categories = Object.values(categoryMap);
                const limit = parseInt(countSetting) || 20;

                // If limit is 'all', just use all questions (randomized later)
                if (countSetting === 'all') {
                    filteredQuestions = allQuestions;
                } else {
                    // Calculate questions per category
                    const baseCount = Math.floor(limit / categories.length);
                    let remainder = limit % categories.length;

                    categories.forEach(catPrefix => {
                        // Get all questions for this category (using prefix match)
                        let catQuestions = allQuestions.filter(q => q.category.startsWith(catPrefix));

                        // Filter by difficulty if specified
                        if (difficulty !== 'mixed') {
                            catQuestions = catQuestions.filter(q => q.difficulty == difficulty);
                        }

                        // Shuffle them
                        // Fisher-Yates Shuffle
                        for (let i = catQuestions.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [catQuestions[i], catQuestions[j]] = [catQuestions[j], catQuestions[i]];
                        }

                        // Determine count for this category
                        let count = baseCount;
                        if (remainder > 0) {
                            count++;
                            remainder--;
                        }

                        // Add to list
                        filteredQuestions = filteredQuestions.concat(catQuestions.slice(0, count));
                    });
                }
            } else {
                // Specific Subject
                const categoryPrefix = categoryMap[subject];
                if (categoryPrefix) {
                    // Use startsWith for sub-categories
                    filteredQuestions = allQuestions.filter(q => q.category.startsWith(categoryPrefix));
                } else {
                    // Fallback if subject not found (shouldn't happen)
                    filteredQuestions = allQuestions;
                }

                // Filter by difficulty if specified
                if (difficulty !== 'mixed') {
                    filteredQuestions = filteredQuestions.filter(q => q.difficulty == difficulty);
                }

                // Limit for specific subject
                let limit = parseInt(countSetting);
                if (!isNaN(limit) && countSetting !== 'all' && limit > 0) {

                    // SPLIT: Unseen vs Seen
                    let unseenQuestions = filteredQuestions.filter(q => !recentQuestionIds.includes(q.id));
                    let seenQuestions = filteredQuestions.filter(q => recentQuestionIds.includes(q.id));

                    // Shuffle separately
                    // Fisher-Yates Shuffle for Unseen
                    for (let i = unseenQuestions.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [unseenQuestions[i], unseenQuestions[j]] = [unseenQuestions[j], unseenQuestions[i]];
                    }

                    // Fisher-Yates Shuffle for Seen
                    for (let i = seenQuestions.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [seenQuestions[i], seenQuestions[j]] = [seenQuestions[j], seenQuestions[i]];
                    }

                    // Combine: Unseen first, then Seen (as fallback)
                    filteredQuestions = unseenQuestions.concat(seenQuestions);

                    // Finally slice
                    filteredQuestions = filteredQuestions.slice(0, limit);
                }
            }

            currentQuestions = filteredQuestions.map(q => ({
                ...q,
                userAnswer: null,
                shuffledOptions: null
            }));

            currentQuestionIndex = 0;
            score = 0;

            showScreen(quizScreen);
            renderQuestionNav();
            loadQuestion();

        } catch (error) {
            console.error("Error fetching questions:", error);
            alert(`Errore nel caricamento delle domande: ${error.message}\n\nAssicurati che il file questions.json esista e che tu stia usando un server locale (http://localhost...).`);
        }
    }

    function renderQuestionNav() {
        const navContainer = document.getElementById('question-nav');
        navContainer.innerHTML = '';

        currentQuestions.forEach((_, index) => {
            const btn = document.createElement('button');
            btn.classList.add('nav-btn');
            btn.textContent = index + 1;
            btn.addEventListener('click', () => {
                if (isSpeedMode) return; // Disable direct navigation in Speed Mode
                currentQuestionIndex = index;
                loadQuestion();
            });
            navContainer.appendChild(btn);
        });
    }

    function updateQuestionNav() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach((btn, index) => {
            btn.classList.remove('active', 'correct', 'wrong');
            if (index === currentQuestionIndex) {
                btn.classList.add('active');
            }

            const question = currentQuestions[index];
            if (question.userAnswer) {
                if (question.userAnswer === question.answer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });
    }

    function loadQuestion() {
        clearTimeout(autoAdvanceTimeout);
        const question = currentQuestions[currentQuestionIndex];

        updateQuestionNav();

        // Trigger Animation
        questionText.classList.remove('slide-in');
        void questionText.offsetWidth; // Force reflow
        questionText.classList.add('slide-in');

        // questionText.textContent = question.question;
        questionText.innerHTML = '';
        const textNode = document.createTextNode(question.question);
        questionText.appendChild(textNode);

        // Add Favorite Star
        const starSpan = document.createElement('span');
        starSpan.style.cursor = 'pointer';
        starSpan.style.marginLeft = '10px';
        starSpan.style.fontSize = '1.5rem';
        starSpan.style.verticalAlign = 'middle';

        const isFav = userData.favorites && userData.favorites.includes(question.id);
        starSpan.textContent = isFav ? '★' : '☆';
        starSpan.style.color = isFav ? '#FFD700' : 'var(--text-muted)';

        starSpan.addEventListener('click', async (e) => {
            e.stopPropagation();
            if (!auth.currentUser) {
                alert("Devi essere loggato per salvare i preferiti.");
                return;
            }

            try {
                await UserData.toggleFavorite(question.id);
                // Update local state
                if (userData.favorites.includes(question.id)) {
                    userData.favorites = userData.favorites.filter(id => id !== question.id);
                    starSpan.textContent = '☆';
                    starSpan.style.color = 'var(--text-muted)';
                } else {
                    userData.favorites.push(question.id);
                    starSpan.textContent = '★';
                    starSpan.style.color = '#FFD700';
                }
            } catch (err) {
                console.error("Error toggling favorite:", err);
            }
        });
        questionText.appendChild(starSpan);
        questionNumberDisplay.textContent = `Domanda ${currentQuestionIndex + 1}/${currentQuestions.length}`;

        const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;

        // Difficulty Indicator
        const difficultyBadge = document.getElementById('difficulty-badge');
        const difficultyStars = document.getElementById('difficulty-stars');

        if (question.difficulty) {
            difficultyBadge.classList.remove('hidden');
            // Remove old classes
            difficultyBadge.classList.remove('diff-1', 'diff-2', 'diff-3');

            let stars = '';
            let diffClass = '';

            if (question.difficulty == 1) {
                stars = '★☆☆';
                diffClass = 'diff-1';
            } else if (question.difficulty == 2) {
                stars = '★★☆';
                diffClass = 'diff-2';
            } else if (question.difficulty == 3) {
                stars = '★★★';
                diffClass = 'diff-3';
            }

            difficultyStars.textContent = stars;
            difficultyBadge.classList.add(diffClass);
        } else {
            difficultyBadge.classList.add('hidden');
        }

        optionsContainer.innerHTML = '';
        feedbackDisplay.textContent = '';
        feedbackDisplay.classList.remove('visible'); // Hide feedback initially

        // Previous Button Logic
        if (currentQuestionIndex > 0 && !isSpeedMode) {
            prevBtn.classList.remove('hidden');
        } else {
            prevBtn.classList.add('hidden');
        }

        if (question.userAnswer) {
            nextBtn.classList.remove('hidden');
            nextBtn.textContent = (currentQuestionIndex === currentQuestions.length - 1) ? "Risultati" : "Avanti";
        } else {
            nextBtn.classList.add('hidden');
        }

        if (!question.shuffledOptions) {
            question.shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
        }

        question.shuffledOptions.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.textContent = option;
            button.style.animationDelay = `${index * 0.1}s`; // Staggered animation
            button.classList.add('slide-in');

            if (question.userAnswer) {
                button.disabled = true;
                if (option === question.answer) {
                    button.classList.add('correct');
                }
                if (option === question.userAnswer && question.userAnswer !== question.answer) {
                    button.classList.add('wrong');
                }
            } else {
                button.addEventListener('click', () => selectOption(button, option, question.answer));
            }

            optionsContainer.appendChild(button);
        });

        if (question.userAnswer) {
            feedbackDisplay.classList.add('visible');
            if (question.userAnswer === question.answer) {
                feedbackDisplay.textContent = "Corretto!";
                feedbackDisplay.style.color = "#10b981";
            } else {
                feedbackDisplay.textContent = `Sbagliato! La risposta corretta era: ${question.answer}`;
                feedbackDisplay.style.color = "#ef4444";
            }
        }

        if (!question.userAnswer) {
            startTimer();
        } else {
            stopTimer();
        }
    }

    function selectOption(selectedButton, selectedOption, correctAnswer) {
        stopTimer();

        currentQuestions[currentQuestionIndex].userAnswer = selectedOption;
        const isCorrect = selectedOption === correctAnswer;
        currentQuestions[currentQuestionIndex].isCorrect = isCorrect;

        if (isCorrect) {
            playSound('correct');
            triggerHaptic('correct');
            if (isSpeedMode) {
                const diff = currentQuestions[currentQuestionIndex].difficulty || 1;
                score += (10 * diff);
            } else {
                score++;
            }

            // Remove from errors if present (Auto-cleanup)
            if (auth.currentUser && userData.errors.includes(currentQuestions[currentQuestionIndex].id)) {
                UserData.removeError(currentQuestions[currentQuestionIndex].id);
                userData.errors = userData.errors.filter(id => id !== currentQuestions[currentQuestionIndex].id);
            }

            // Award EXP
            if (auth.currentUser) {
                const difficulty = currentQuestions[currentQuestionIndex].difficulty || 1;
                let expAmount = 2; // Default / Easy
                if (difficulty == 2) expAmount = 5; // Medium
                if (difficulty == 3) expAmount = 7; // Hard

                UserData.addExp(expAmount).then(result => {
                    if (result) {
                        updateExpUI(result.newExp, result.newLevel);
                        if (result.leveledUp) {
                            showLevelUpNotification(result.newLevel);
                        }
                    }
                });
            }
        } else {
            playSound('wrong');
            triggerHaptic('wrong');
            if (isSpeedMode) {
                const diff = currentQuestions[currentQuestionIndex].difficulty || 1;
                score -= (5 * diff);
            }

            // Log Error
            if (auth.currentUser && !userData.errors.includes(currentQuestions[currentQuestionIndex].id)) {
                UserData.logError(currentQuestions[currentQuestionIndex].id);
                userData.errors.push(currentQuestions[currentQuestionIndex].id);
            }
        }

        if (isSpeedMode) {
            liveScoreDisplay.textContent = score;
        }

        updateQuestionNav();
        loadQuestion();
    }

    function nextQuestion() {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            showResults();
        }
    }

    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    }

    async function showResults() {
        showScreen(resultScreen);
        scoreDisplay.textContent = score;
        totalQuestionsDisplay.textContent = currentQuestions.length;

        const percentage = (score / currentQuestions.length) * 100;
        if (percentage >= 90) {
            resultMessage.textContent = "Eccellente! Sei un esperto!";
        } else if (percentage >= 70) {
            resultMessage.textContent = "Ottimo lavoro! Conosci bene la materia.";
        } else if (percentage >= 50) {
            resultMessage.textContent = "Buono, ma puoi migliorare.";
        } else {
            resultMessage.textContent = "Devi studiare di più!";
        }

        // Show Save Score Form if Speed Mode
        // Save Quiz Result to History (if not review mode)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('mode') !== 'history') {
            const quizData = {
                subject: urlParams.get('subject') || 'Misto',
                score: score,
                totalQuestions: currentQuestions.length,
                questions: currentQuestions.map(q => ({
                    id: q.id,
                    question: q.question,
                    options: q.options,
                    answer: q.answer,
                    userAnswer: q.userAnswer,
                    isCorrect: q.isCorrect,
                    difficulty: q.difficulty
                }))
            };

            try {
                console.log("Saving quiz result...", quizData);
                const saved = await UserData.saveQuizResult(quizData);
                if (saved) {
                    console.log("Quiz result saved successfully.");
                } else {
                    console.error("Failed to save quiz result.");
                }
            } catch (e) {
                console.error("Error calling saveQuizResult:", e);
            }
        }

        // Auto-Save Score if Speed Mode
        if (isSpeedMode) {
            const savedUser = localStorage.getItem('quizUser');

            if (savedUser && window.Leaderboard) {
                // Show saving status
                resultMessage.textContent += " Salvataggio punteggio in corso...";

                // Auto-save
                window.Leaderboard.saveScore(savedUser, score).then(success => {
                    if (success) {
                        alert(`Partita conclusa! Punteggio salvato per ${savedUser}: ${score}`);
                        window.location.href = "home.html";
                    } else {
                        alert("Errore nel salvataggio del punteggio.");
                    }
                });
            } else {
                // Fallback if something is wrong (no user or no leaderboard)
                console.warn("Auto-save failed: No user or Leaderboard module missing.");
            }
        }

        // Generate Summary
        const summaryContainer = document.getElementById('summary-container');
        summaryContainer.innerHTML = '';

        currentQuestions.forEach((q, index) => {
            const isCorrect = q.userAnswer === q.answer;
            const item = document.createElement('div');
            item.classList.add('summary-item', isCorrect ? 'correct' : 'wrong');

            item.innerHTML = `
                <span class="summary-status">${isCorrect ? 'Corretto' : 'Sbagliato'}</span>
                <span class="summary-text">
                    <strong>${index + 1}.</strong> ${q.question.substring(0, 60)}...
                </span>
            `;

            item.addEventListener('click', () => {
                currentQuestionIndex = index;
                showScreen(quizScreen);
                loadQuestion();
            });

            summaryContainer.appendChild(item);
        });
    }

    function showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }

    const reviewBtn = document.getElementById('review-btn');

    if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
            currentQuestionIndex = 0;
            showScreen(quizScreen);
            loadQuestion();
        });
    }

    // Event Listeners
    nextBtn.addEventListener('click', nextQuestion);
    prevBtn.addEventListener('click', prevQuestion);

    homeBtn.addEventListener('click', () => {
        if (confirm("Sei sicuro di voler uscire? I progressi andranno persi.")) {
            window.location.href = 'home.html';
        }
    });

    homeResultBtn.addEventListener('click', () => {
        window.location.href = 'home.html';
    });

    restartBtn.addEventListener('click', () => {
        window.location.reload();
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        // Only active if quiz screen is visible
        if (!quizScreen.classList.contains('active')) return;

        if (e.key === 'ArrowRight') {
            nextQuestion();
        } else if (e.key === 'ArrowLeft') {
            prevQuestion();
        } else if (e.key === 'Enter') {
            // Only proceed if the user has answered the current question
            if (currentQuestions[currentQuestionIndex].userAnswer) {
                nextQuestion();
            }
        } else {
            // Check for number keys 1-4
            const num = parseInt(e.key);
            if (!isNaN(num) && num >= 1 && num <= 4) {
                const options = optionsContainer.querySelectorAll('.option-btn');
                if (options[num - 1] && !options[num - 1].disabled) {
                    options[num - 1].click();
                }
            }
        }
    });

    // Speed Mode Timer Functions
    function startTimer() {
        if (!isSpeedMode) return;

        clearInterval(timerInterval);
        timeLeft = 20;
        timerSeconds.textContent = timeLeft;
        timerContainer.classList.remove('warning', 'danger');

        timerInterval = setInterval(() => {
            timeLeft--;
            timerSeconds.textContent = timeLeft;

            if (timeLeft <= 5) {
                timerContainer.classList.add('warning');
            }
            if (timeLeft <= 3) {
                timerContainer.classList.add('danger');
            }

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                handleTimeout();
            }
        }, 1000);
    }

    function stopTimer() {
        if (!isSpeedMode) return;
        clearInterval(timerInterval);
    }

    function handleTimeout() {
        // Treat as wrong answer
        const currentQ = currentQuestions[currentQuestionIndex];

        // Disable all options
        const options = optionsContainer.querySelectorAll('.option-btn');
        options.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === currentQ.answer) {
                btn.classList.add('correct');
            }
        });

        // Show feedback
        feedbackDisplay.textContent = "Tempo Scaduto! ⏳";
        feedbackDisplay.className = 'feedback incorrect';

        playSound('wrong');
        triggerHaptic('wrong');

        // Calculate Score (Penalty)
        const difficulty = currentQ.difficulty || 1;
        const penalty = 5 * difficulty;
        score -= penalty;
        scoreDisplay.textContent = score;
        if (isSpeedMode) {
            liveScoreDisplay.textContent = score;
        }

        // Log Error on Timeout
        if (auth.currentUser && !userData.errors.includes(currentQ.id)) {
            UserData.logError(currentQ.id);
            userData.errors.push(currentQ.id);
        }

        // Mark as answered (incorrectly)
        currentQ.userAnswer = "TIMEOUT";
        currentQ.isCorrect = false;

        // Show Next Button
        nextBtn.classList.remove('hidden');

        // Auto-advance after short delay? Or wait for user?
        // User request says "si passa alla successiva", implying auto-advance.
        autoAdvanceTimeout = setTimeout(() => {
            nextQuestion();
        }, 2000);
    }

    // Report Button Logic
    const reportBtn = document.getElementById('report-btn');
    if (reportBtn) {
        reportBtn.addEventListener('click', async () => {
            const currentQ = currentQuestions[currentQuestionIndex];
            const comment = prompt("Descrivi l'errore trovato in questa domanda:");

            if (comment && comment.trim() !== "") {
                try {
                    const reportData = {
                        questionId: currentQ.id || 'unknown',
                        question: currentQ.question,
                        comment: comment.trim(),
                        userId: auth.currentUser ? auth.currentUser.uid : 'anonymous',
                        username: auth.currentUser ? (auth.currentUser.displayName || 'Utente') : 'Anonimo'
                    };

                    const success = await UserData.submitReport(reportData);

                    if (success) {
                        alert("Segnalazione inviata con successo! Grazie per il tuo contributo.");
                    } else {
                        alert("Errore nell'invio della segnalazione.");
                    }
                } catch (e) {
                    console.error("Error submitting report:", e);
                    alert("Errore durante l'invio.");
                }
            }
        });
    }

    // EXP UI Functions
    function updateExpUI(exp, level) {
        const userLevelDisplay = document.getElementById('user-level');
        const expFill = document.getElementById('exp-fill');
        const expText = document.getElementById('exp-text');

        if (!userLevelDisplay || !expFill || !expText) return;

        userLevelDisplay.textContent = level;

        const thresholds = UserData.getLevelThresholds();
        const currentLevelThreshold = thresholds[level - 1] || 0; // Start of current level
        const nextLevelThreshold = thresholds[level] || (currentLevelThreshold + 500); // End of current level (approx)

        const expInLevel = exp - currentLevelThreshold;
        const levelRange = nextLevelThreshold - currentLevelThreshold;

        let percentage = (expInLevel / levelRange) * 100;
        percentage = Math.max(0, Math.min(100, percentage)); // Clamp 0-100

        expFill.style.width = `${percentage}%`;
        expText.textContent = `${Math.floor(expInLevel)} / ${levelRange}`;
    }

    function showLevelUpNotification(newLevel) {
        const notif = document.createElement('div');
        notif.textContent = `LEVEL UP! ${newLevel}`;
        notif.style.position = 'fixed';
        notif.style.top = '50%';
        notif.style.left = '50%';
        notif.style.transform = 'translate(-50%, -50%) scale(0)';
        notif.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
        notif.style.color = '#000';
        notif.style.padding = '20px 40px';
        notif.style.borderRadius = '20px';
        notif.style.fontSize = '2rem';
        notif.style.fontWeight = '800';
        notif.style.zIndex = '1000';
        notif.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        notif.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

        document.body.appendChild(notif);

        // Animate in
        requestAnimationFrame(() => {
            notif.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        playSound('correct'); // Or a special level up sound

        // Remove after 2s
        setTimeout(() => {
            notif.style.transform = 'translate(-50%, -50%) scale(0)';
            setTimeout(() => {
                notif.remove();
            }, 500);
        }, 2000);
    }

});
