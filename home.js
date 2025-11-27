document.addEventListener('DOMContentLoaded', () => {
    const subjectSelectionScreen = document.getElementById('subject-selection-screen');
    const startScreen = document.getElementById('start-screen');
    const subjectButtons = document.querySelectorAll('.subject-btn');
    const startBtn = document.getElementById('start-btn');
    const questionCountSelect = document.getElementById('question-count');
    const subjectTitle = document.getElementById('subject-title');
    const appTitle = document.getElementById('app-title');
    const backToSubjectsBtn = document.getElementById('back-to-subjects-btn');

    let currentCategory = "ps";

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

        let title = "Legislazione P.S.";
        if (subject === "costituzionale") title = "Diritto Costituzionale";
        else if (subject === "penale") title = "Diritto Penale";
        else if (subject === "procedura") title = "Procedura Penale";
        else if (subject === "all") title = "Tutti gli Argomenti";

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
        // Redirect to quiz page with parameters
        window.location.href = `quiz.html?subject=${currentCategory}&count=${count}`;
    });

    if (backToSubjectsBtn) {
        backToSubjectsBtn.addEventListener('click', () => {
            showScreen(subjectSelectionScreen);
        });
    }
});
