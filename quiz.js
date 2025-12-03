document.addEventListener('DOMContentLoaded', async () => {
    const quizScreen = document.getElementById('quiz-screen');
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

    // Speed Mode Variables
    let isSpeedMode = false;
    let timerInterval;
    let timeLeft = 10;
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

    // Initialize Quiz
    startQuiz(subjectParam, countParam, difficultyParam);

    async function startQuiz(subject, countSetting, difficulty) {
        initAudio(); // Initialize Audio Context on user interaction

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

            if (subject === 'speed') {
                isSpeedMode = true;
                timerContainer.classList.remove('hidden');
                liveScoreContainer.classList.remove('hidden');
                // Speed Mode: 50 random questions from ALL categories
                filteredQuestions = allQuestions;
                // Shuffle immediately to get random selection
                filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5).slice(0, 50);
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
                        catQuestions.sort(() => Math.random() - 0.5);

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
                    // Shuffle first then slice
                    filteredQuestions.sort(() => Math.random() - 0.5);
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

        questionText.textContent = question.question;
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
        if (currentQuestionIndex > 0) {
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
        } else {
            playSound('wrong');
            triggerHaptic('wrong');
            if (isSpeedMode) {
                const diff = currentQuestions[currentQuestionIndex].difficulty || 1;
                score -= (5 * diff);
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

    function showResults() {
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
        const saveScoreContainer = document.getElementById('save-score-container');
        const playerNameInput = document.getElementById('player-name');
        const saveScoreBtn = document.getElementById('save-score-btn');

        if (isSpeedMode && saveScoreContainer) {
            saveScoreContainer.classList.remove('hidden');

            saveScoreBtn.onclick = async () => {
                const name = playerNameInput.value.trim();
                if (!name) {
                    alert("Inserisci un nome!");
                    return;
                }

                if (window.Leaderboard) {
                    saveScoreBtn.disabled = true;
                    saveScoreBtn.textContent = "Salvataggio...";

                    const success = await window.Leaderboard.saveScore(name, score);

                    if (success) {
                        alert("Punteggio salvato!");
                        window.location.href = "index.html"; // Go to home
                    } else {
                        alert("Errore nel salvataggio. Riprova.");
                        saveScoreBtn.disabled = false;
                        saveScoreBtn.textContent = "Salva";
                    }
                } else {
                    alert("Modulo classifica non caricato.");
                }
            };
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
        window.location.href = 'index.html';
    });

    homeResultBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
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
        timeLeft = 10;
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
});
