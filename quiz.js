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

    const prevBtn = document.getElementById('prev-btn');
    const muteBtn = document.getElementById('mute-btn');

    // Sound Manager
    class SoundManager {
        constructor() {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            this.muted = localStorage.getItem('quizMuted') === 'true';
            this.updateMuteIcon();
        }

        toggleMute() {
            this.muted = !this.muted;
            localStorage.setItem('quizMuted', this.muted);
            this.updateMuteIcon();
        }

        updateMuteIcon() {
            muteBtn.textContent = this.muted ? '🔇' : '🔊';
        }

        playTone(frequency, type, duration) {
            if (this.muted) return;
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);
            gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start();
            osc.stop(this.audioCtx.currentTime + duration);
        }

        playCorrect() {
            this.playTone(600, 'sine', 0.1);
            setTimeout(() => this.playTone(800, 'sine', 0.2), 100);
        }

        playWrong() {
            this.playTone(300, 'sawtooth', 0.2);
            setTimeout(() => this.playTone(200, 'sawtooth', 0.2), 150);
        }
    }

    const soundManager = new SoundManager();

    muteBtn.addEventListener('click', () => {
        soundManager.toggleMute();
    });

    // ... (rest of the code)

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

        // Navigation Buttons Logic
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
            soundManager.playCorrect();
        } else {
            soundManager.playWrong();
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
        }
        else if (e.key === 'ArrowLeft') {
            prevQuestion();
        }
        else if (e.key === 'Enter') {
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
