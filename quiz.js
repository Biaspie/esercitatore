document.addEventListener('DOMContentLoaded', () => {
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
    let questionsData = {
        "ps": [],
        "costituzionale": [],
        "penale": [],
        "procedura": [],
        "normativa": []
    };

    // Parse URL Parameters
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject') || 'ps';
    const countParam = urlParams.get('count') || '20';

    // Load questions
    if (typeof allQuestions !== 'undefined') {
        allQuestions.forEach(q => {
            if (q.category === "Legislazione PS") {
                questionsData["ps"].push(q);
            } else if (q.category === "Diritto Costituzionale") {
                questionsData["costituzionale"].push(q);
            } else if (q.category === "Diritto Penale") {
                questionsData["penale"].push(q);
            } else if (q.category === "Procedura Penale") {
                questionsData["procedura"].push(q);
            } else if (q.category === "Normativa Disciplinare") {
                questionsData["normativa"].push(q);
            } else {
                questionsData["ps"].push(q);
            }
        });
        initQuiz(subjectParam, countParam);
    } else {
        console.error("Error: allQuestions not defined.");
        alert("Errore: Impossibile caricare le domande.");
    }

    function initQuiz(subject, countSetting) {
        let categoryQuestions = [];

        if (subject === "all") {
            Object.values(questionsData).forEach(questions => {
                categoryQuestions = categoryQuestions.concat(questions);
            });
        } else {
            categoryQuestions = questionsData[subject] || [];
        }

        if (categoryQuestions.length === 0) {
            alert("Nessuna domanda trovata per questa categoria.");
            return;
        }

        let count = categoryQuestions.length;
        if (countSetting !== 'all') {
            count = Math.min(parseInt(countSetting), categoryQuestions.length);
        }

        // Shuffle and select questions
        currentQuestions = getRandomQuestions(categoryQuestions, count).map(q => ({
            ...q,
            userAnswer: null,
            shuffledOptions: null // Initialize shuffled options
        }));

        currentQuestionIndex = 0;
        score = 0;

        showScreen(quizScreen);
        renderQuestionNav();
        loadQuestion();
    }

    function getRandomQuestions(questions, count) {
        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, count);
    }

    function showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
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
            btn.classList.remove('active');
            if (index === currentQuestionIndex) {
                btn.classList.add('active');
            }

            if (currentQuestions[index].userAnswer) {
                btn.classList.add('answered');
            }
        });
    }

    function loadQuestion() {
        const question = currentQuestions[currentQuestionIndex];

        updateQuestionNav();

        questionText.textContent = question.question;
        questionNumberDisplay.textContent = `Domanda ${currentQuestionIndex + 1}/${currentQuestions.length}`;

        const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;

        optionsContainer.innerHTML = '';
        feedbackDisplay.textContent = '';

        prevBtn.classList.toggle('hidden', currentQuestionIndex === 0);

        if (question.userAnswer) {
            nextBtn.classList.remove('hidden');
            nextBtn.textContent = (currentQuestionIndex === currentQuestions.length - 1) ? "Risultati" : "Avanti";
        } else {
            nextBtn.classList.add('hidden');
        }

        if (!question.shuffledOptions) {
            question.shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
        }

        question.shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.textContent = option;

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
        updateQuestionNav(); // Update nav to show answered status
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
        // Reload page to restart with same settings
        window.location.reload();
    });
});
