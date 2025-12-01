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

    // Check Protocol
    if (window.location.protocol === 'file:') {
        alert("ATTENZIONE: Stai aprendo il file direttamente. Devi usare il server locale!\n\nVai su: http://localhost:3000");
    }

    // Mapping subject params to DB categories
    const categoryMap = {
        "ps": "Legislazione PS",
        "costituzionale": "Diritto Costituzionale",
        "penale": "Diritto Penale",
        "procedura": "Procedura Penale",
        "normativa": "Normativa Disciplinare",
        "informatica": "Informatica"
    };

    // Parse URL Parameters
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject') || 'ps';
    const countParam = urlParams.get('count') || '20';

    // Initialize Quiz
    startQuiz(subjectParam, countParam);

    async function startQuiz(subject, countSetting) {
        try {
            // Fetch all questions from the static JSON file
            const response = await fetch('questions.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let allQuestions = await response.json();

            // Filter by category
            let filteredQuestions = allQuestions;
            if (subject && subject !== 'all') {
                const categoryName = categoryMap[subject];
                if (categoryName) {
                    filteredQuestions = allQuestions.filter(q => q.category === categoryName);
                }
            }

            if (filteredQuestions.length === 0) {
                alert("Nessuna domanda trovata per questa categoria.");
                return;
            }

            // Shuffle questions
            filteredQuestions.sort(() => Math.random() - 0.5);

            // Limit number of questions
            let limit = parseInt(countSetting);
            if (!isNaN(limit) && countSetting !== 'all' && limit > 0) {
                filteredQuestions = filteredQuestions.slice(0, limit);
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
            alert("Errore nel caricamento delle domande. Assicurati che il file questions.json esista.");
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
    }

    function selectOption(selectedButton, selectedOption, correctAnswer) {
        currentQuestions[currentQuestionIndex].userAnswer = selectedOption;
        if (selectedOption === correctAnswer) {
            score++;
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
        if (confirm("Sei sicuro di voler tornare alla home? I progressi andranno persi.")) {
            window.location.href = 'index.html';
        }
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
});
