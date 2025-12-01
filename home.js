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
        'ps': 'Legislazione P.S.',
        'costituzionale': 'Diritto Costituzionale',
        'penale': 'Diritto Penale',
        'procedura_penale': 'Procedura Penale',
        'normativa': 'Normativa Disciplinare',
        'informatica': 'Informatica',
        'all': 'Tutti gli Argomenti'
    };

    // Custom Distribution Elements
    const customDistributionContainer = document.getElementById('custom-distribution');
    const distributionInputsContainer = document.getElementById('distribution-inputs');
    const currentTotalDisplay = document.getElementById('current-total');
    const targetTotalDisplay = document.getElementById('target-total');

    // Initialize: Show Subject Selection
    showScreen(subjectSelectionScreen);

    // Event Listeners for Subject Selection
    subjectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const subject = btn.getAttribute('data-subject');
            selectSubject(subject);
        });
    });

    function selectSubject(subject) {
        currentCategory = subject;
        const title = subjectMap[subject] || "Quiz";

        subjectTitle.textContent = `Quiz ${title}`;
        appTitle.textContent = title;

        // Handle Custom Distribution UI
        if (subject === 'all') {
            customDistributionContainer.style.display = 'block';
            renderDistributionInputs();
        } else {
            customDistributionContainer.style.display = 'none';
        }

        showScreen(startScreen);
    }

    function renderDistributionInputs() {
        distributionInputsContainer.innerHTML = '';
        const subjects = Object.keys(subjectMap).filter(k => k !== 'all');
        const totalQuestions = parseInt(questionCountSelect.value) || 20;

        // Calculate even distribution
        const baseCount = Math.floor(totalQuestions / subjects.length);
        let remainder = totalQuestions % subjects.length;

        subjects.forEach(key => {
            let count = baseCount;
            if (remainder > 0) {
                count++;
                remainder--;
            }

            const div = document.createElement('div');
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.alignItems = 'center';
            div.style.background = 'rgba(255,255,255,0.05)';
            div.style.padding = '0.5rem';
            div.style.borderRadius = '8px';

            div.innerHTML = `
                <label style="font-size: 0.9rem; color: var(--text-muted); flex: 1;">${subjectMap[key]}</label>
                <input type="number" class="dist-input" data-subject="${key}" value="${count}" min="0" max="${totalQuestions}" 
                    style="width: 60px; padding: 0.3rem; border-radius: 6px; border: 1px solid var(--border-color); background: rgba(0,0,0,0.3); color: white; text-align: center;">
            `;
            distributionInputsContainer.appendChild(div);
        });

        // Add listeners to inputs
        const inputs = distributionInputsContainer.querySelectorAll('.dist-input');
        inputs.forEach(input => {
            input.addEventListener('input', updateCurrentTotal);
        });

        updateCurrentTotal();
    }

    function updateCurrentTotal() {
        const inputs = distributionInputsContainer.querySelectorAll('.dist-input');
        let total = 0;
        inputs.forEach(input => {
            total += parseInt(input.value) || 0;
        });

        const target = parseInt(questionCountSelect.value) || 0;
        currentTotalDisplay.textContent = total;
        targetTotalDisplay.textContent = target;

        if (total === target) {
            currentTotalDisplay.style.color = 'var(--success-color)';
            startBtn.disabled = false;
            startBtn.style.opacity = '1';
        } else {
            currentTotalDisplay.style.color = 'var(--error-color)';
            startBtn.disabled = true;
            startBtn.style.opacity = '0.5';
        }
    }

    // Update inputs when question count changes
    questionCountSelect.addEventListener('change', () => {
        if (currentCategory === 'all') {
            renderDistributionInputs();
        }
    });

    function showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }

    // Start Quiz - Navigate to quiz.html
    startBtn.addEventListener('click', () => {
        const count = questionCountSelect.value;
        let url = `quiz.html?subject=${currentCategory}&count=${count}`;

        // Append custom distribution if applicable
        if (currentCategory === 'all') {
            const inputs = distributionInputsContainer.querySelectorAll('.dist-input');
            const distribution = [];
            inputs.forEach(input => {
                const sub = input.getAttribute('data-subject');
                const val = input.value;
                if (parseInt(val) > 0) {
                    distribution.push(`${sub}:${val}`);
                }
            });
            url += `&distribution=${distribution.join(',')}`;
        }

        window.location.href = url;
    });

    if (backToSubjectsBtn) {
        backToSubjectsBtn.addEventListener('click', () => {
            showScreen(subjectSelectionScreen);
        });
    }
});
