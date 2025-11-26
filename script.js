document.addEventListener('DOMContentLoaded', () => {
    const subjectSelectionScreen = document.getElementById('subject-selection-screen');
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');

    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const backToSubjectsBtn = document.getElementById('back-to-subjects-btn');
    const subjectButtons = document.querySelectorAll('.subject-btn');

    const appTitle = document.getElementById('app-title');
    const subjectTitle = document.getElementById('subject-title');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionNumberDisplay = document.getElementById('question-number');
    const progressBar = document.getElementById('progress-bar');
    const feedbackDisplay = document.getElementById('feedback');
    const scoreDisplay = document.getElementById('score');
    const resultMessage = document.getElementById('result-message');

    // Categorized Questions
    const questionsData = {
        "ps": [
            {
                "id": 1,
                "question": "Chi è l'Autorità nazionale di pubblica sicurezza?",
                "options": ["Il Prefetto", "Il Questore", "Il Ministro dell'Interno", "Il Presidente del Consiglio"],
                "answer": "Il Ministro dell'Interno"
            },
            {
                "id": 2,
                "question": "Chi è l'Autorità provinciale di pubblica sicurezza con attribuzioni politico-amministrative?",
                "options": ["Il Sindaco", "Il Questore", "Il Prefetto", "Il Presidente della Provincia"],
                "answer": "Il Prefetto"
            },
            {
                "id": 3,
                "question": "Chi è l'Autorità provinciale di pubblica sicurezza con attribuzioni tecnico-operative?",
                "options": ["Il Prefetto", "Il Comandante dei Carabinieri", "Il Questore", "Il Sindaco"],
                "answer": "Il Questore"
            },
            {
                "id": 4,
                "question": "Chi è l'Autorità locale di pubblica sicurezza nei comuni privi di Commissariato?",
                "options": ["Il Comandante della Polizia Locale", "Il Sindaco", "Il Maresciallo dei Carabinieri", "Il Segretario Comunale"],
                "answer": "Il Sindaco"
            },
            {
                "id": 5,
                "question": "Cosa significa l'acronimo T.U.L.P.S.?",
                "options": ["Testo Unico Leggi Pubblica Sicurezza", "Testo Unico Leggi Polizia Stato", "Testo Unico Libertà Pubblica Sicurezza", "Testo Unico Leggi Private Sicurezza"],
                "answer": "Testo Unico Leggi Pubblica Sicurezza"
            },
            {
                "id": 6,
                "question": "Qual è il compito principale dell'Autorità di P.S. secondo l'art. 1 T.U.L.P.S.?",
                "options": ["Arrestare i criminali", "Vegliare al mantenimento dell'ordine pubblico", "Emettere sentenze", "Gestire le carceri"],
                "answer": "Vegliare al mantenimento dell'ordine pubblico"
            },
            {
                "id": 7,
                "question": "Qual è la funzione principale della Polizia di Sicurezza?",
                "options": ["Repressiva", "Giudiziaria", "Preventiva", "Investigativa"],
                "answer": "Preventiva"
            },
            {
                "id": 8,
                "question": "Qual è la funzione principale della Polizia Giudiziaria?",
                "options": ["Preventiva", "Repressiva", "Amministrativa", "Politica"],
                "answer": "Repressiva"
            },
            {
                "id": 9,
                "question": "Come viene definito l'ordine pubblico?",
                "options": ["L'assenza di rumore", "Il complesso dei beni giuridici fondamentali e degli interessi pubblici primari", "Il rispetto del codice della strada", "La pulizia delle strade"],
                "answer": "Il complesso dei beni giuridici fondamentali e degli interessi pubblici primari"
            },
            {
                "id": 10,
                "question": "Chi presiede il Comitato Provinciale per l'Ordine e la Sicurezza Pubblica?",
                "options": ["Il Questore", "Il Sindaco", "Il Prefetto", "Il Procuratore della Repubblica"],
                "answer": "Il Prefetto"
            },
            {
                "id": 11,
                "question": "Chi ha la direzione tecnica dei servizi di ordine e sicurezza pubblica?",
                "options": ["Il Prefetto", "Il Questore", "Il Ministro dell'Interno", "Il Sindaco"],
                "answer": "Il Questore"
            },
            {
                "id": 12,
                "question": "Con quale atto il Questore dispone le modalità operative dei servizi di ordine pubblico?",
                "options": ["Decreto legge", "Ordinanza di servizio", "Circolare", "Sentenza"],
                "answer": "Ordinanza di servizio"
            },
            {
                "id": 13,
                "question": "Quando il Sindaco assume le funzioni di Autorità locale di P.S.?",
                "options": ["Sempre", "Mai", "Quando manca il Commissariato di P.S.", "Solo la domenica"],
                "answer": "Quando manca il Commissariato di P.S."
            },
            {
                "id": 14,
                "question": "Quale compito spetta agli Ufficiali di P.S.?",
                "options": ["Emanare provvedimenti amministrativi", "Dirigere i servizi di ordine pubblico e vigilare", "Giudicare i reati", "Fare le leggi"],
                "answer": "Dirigere i servizi di ordine pubblico e vigilare"
            },
            {
                "id": 15,
                "question": "Quale compito spetta agli Agenti di P.S.?",
                "options": ["Compiti esecutivi", "Direzione tecnica", "Emanazione ordinanze", "Coordinamento interforze"],
                "answer": "Compiti esecutivi"
            },
            {
                "id": 16,
                "question": "Cosa prevede l'art. 4 del T.U.L.P.S.?",
                "options": ["L'arresto in flagranza", "La facoltà di ordinare rilievi segnaletici", "Il divieto di riunione", "La chiusura dei bar"],
                "answer": "La facoltà di ordinare rilievi segnaletici"
            },
            {
                "id": 17,
                "question": "A chi possono essere ordinati i rilievi segnaletici ex art. 4 T.U.L.P.S.?",
                "options": ["A tutti i cittadini", "Alle persone pericolose, sospette o che non possono provare la loro identità", "Solo agli stranieri", "Solo ai pregiudicati"],
                "answer": "Alle persone pericolose, sospette o che non possono provare la loro identità"
            },
            {
                "id": 18,
                "question": "Cosa disciplina l'art. 15 del T.U.L.P.S.?",
                "options": ["L'arresto", "L'invito a comparire davanti all'Autorità di P.S.", "La perquisizione", "Il sequestro"],
                "answer": "L'invito a comparire davanti all'Autorità di P.S."
            },
            {
                "id": 19,
                "question": "Quale reato si configura per l'inosservanza dei provvedimenti dell'Autorità (art. 650 c.p.)?",
                "options": ["Resistenza a pubblico ufficiale", "Inosservanza dei provvedimenti dell'Autorità", "Oltraggio", "Violenza privata"],
                "answer": "Inosservanza dei provvedimenti dell'Autorità"
            },
            {
                "id": 20,
                "question": "Quali sono i caratteri dei provvedimenti di polizia?",
                "options": ["Autoritatività ed esecutorietà", "Consensualità e libertà", "Segretezza e immunità", "Flessibilità e informalità"],
                "answer": "Autoritatività ed esecutorietà"
            },
            {
                "id": 21,
                "question": "Cosa sono gli ordini di polizia?",
                "options": ["Provvedimenti espansivi", "Provvedimenti restrittivi che impongono comandi o divieti", "Consigli", "Suggerimenti"],
                "answer": "Provvedimenti restrittivi che impongono comandi o divieti"
            },
            {
                "id": 22,
                "question": "Chi può emanare ordinanze di necessità e urgenza ex art. 2 T.U.L.P.S.?",
                "options": ["Il Questore", "Il Prefetto", "Il Sindaco", "Il Comandante dei Vigili"],
                "answer": "Il Prefetto"
            },
            {
                "id": 23,
                "question": "Qual è la funzione delle autorizzazioni di polizia?",
                "options": ["Creare un nuovo diritto", "Rimuovere un limite all'esercizio di un diritto preesistente", "Punire un reato", "Imporre una tassa"],
                "answer": "Rimuovere un limite all'esercizio di un diritto preesistente"
            },
            {
                "id": 24,
                "question": "Cos'è una licenza di polizia?",
                "options": ["Un atto formale esplicito che permette l'esercizio di un'attività", "Un divieto", "Una sanzione", "Un contratto"],
                "answer": "Un atto formale esplicito che permette l'esercizio di un'attività"
            },
            {
                "id": 25,
                "question": "Cosa significa SCIA?",
                "options": ["Segnalazione Certificata di Inizio Attività", "Società Commerciale Italiana Autorizzata", "Sistema Controllo Interno Aziendale", "Servizio Centrale Investigativo Antimafia"],
                "answer": "Segnalazione Certificata di Inizio Attività"
            },
            {
                "id": 26,
                "question": "Cosa prevede l'art. 100 del T.U.L.P.S.?",
                "options": ["Il rilascio del passaporto", "La sospensione della licenza di un esercizio pubblico", "Il divieto di sosta", "L'arresto obbligatorio"],
                "answer": "La sospensione della licenza di un esercizio pubblico"
            },
            {
                "id": 27,
                "question": "Chi ha il potere di sospendere la licenza ex art. 100 T.U.L.P.S.?",
                "options": ["Il Sindaco", "Il Prefetto", "Il Questore", "Il Giudice di Pace"],
                "answer": "Il Questore"
            },
            {
                "id": 28,
                "question": "Quando può essere revocata la licenza ai sensi dell'art. 100 T.U.L.P.S.?",
                "options": ["Alla prima violazione", "Qualora si ripetano i fatti che hanno determinato la sospensione", "Mai", "A discrezione del cliente"],
                "answer": "Qualora si ripetano i fatti che hanno determinato la sospensione"
            },
            {
                "id": 29,
                "question": "Quanto tempo prima deve essere dato il preavviso per una riunione in luogo pubblico?",
                "options": ["24 ore", "3 giorni", "1 settimana", "1 mese"],
                "answer": "3 giorni"
            },
            {
                "id": 30,
                "question": "A chi va inviato il preavviso di riunione in luogo pubblico?",
                "options": ["Al Sindaco", "Al Prefetto", "Al Questore", "Al Parroco"],
                "answer": "Al Questore"
            },
            {
                "id": 31,
                "question": "Per quale tipo di riunione è obbligatorio il preavviso?",
                "options": ["Riunione privata", "Riunione in luogo aperto al pubblico", "Riunione in luogo pubblico", "Tutte le riunioni"],
                "answer": "Riunione in luogo pubblico"
            },
            {
                "id": 32,
                "question": "È richiesto il preavviso per una riunione in luogo aperto al pubblico (es. cinema)?",
                "options": ["Sì, sempre", "No", "Solo se ci sono politici", "Solo se a pagamento"],
                "answer": "No"
            },
            {
                "id": 33,
                "question": "Quando può essere sciolta una riunione (art. 20 T.U.L.P.S.)?",
                "options": ["Se piove", "Se ci sono grida sediziose o pericolo per l'ordine pubblico", "Se dura troppo", "Se non piace al Sindaco"],
                "answer": "Se ci sono grida sediziose o pericolo per l'ordine pubblico"
            },
            {
                "id": 34,
                "question": "Chi può ordinare lo scioglimento di una riunione?",
                "options": ["Qualsiasi cittadino", "I Funzionari di P.S. (indossando la fascia tricolore)", "Il Sindaco", "I Vigili del Fuoco"],
                "answer": "I Funzionari di P.S. (indossando la fascia tricolore)"
            },
            {
                "id": 35,
                "question": "Quale norma disciplina il fermo per identificazione?",
                "options": ["Art. 11 Legge 191/78", "Art. 100 T.U.L.P.S.", "Art. 41 T.U.L.P.S.", "Codice della Strada"],
                "answer": "Art. 11 Legge 191/78"
            },
            {
                "id": 36,
                "question": "Qual è la durata massima del fermo per identificazione?",
                "options": ["12 ore", "24 ore", "48 ore", "72 ore"],
                "answer": "24 ore"
            },
            {
                "id": 37,
                "question": "A chi deve essere data immediata notizia del fermo per identificazione?",
                "options": ["Al Questore", "Al Sindaco", "Al Procuratore della Repubblica", "Ai parenti"],
                "answer": "Al Procuratore della Repubblica"
            },
            {
                "id": 38,
                "question": "Cosa devono fare i gestori di strutture ricettive (art. 109 T.U.L.P.S.)?",
                "options": ["Offrire la colazione", "Comunicare le generalità degli alloggiati all'Autorità di P.S.", "Chiudere a mezzanotte", "Non accettare stranieri"],
                "answer": "Comunicare le generalità degli alloggiati all'Autorità di P.S."
            },
            {
                "id": 39,
                "question": "Entro quanto tempo devono essere comunicate le generalità degli alloggiati?",
                "options": ["12 ore", "24 ore", "48 ore", "1 settimana"],
                "answer": "24 ore"
            },
            {
                "id": 40,
                "question": "Cos'è il DASPO?",
                "options": ["Divieto di Accesso alle Manifestazioni Sportive", "Divieto di Assunzione Sostanze Psicotrope", "Dipartimento Analisi Statistiche Polizia", "Direzione Amministrativa Sicurezza Pubblica"],
                "answer": "Divieto di Accesso alle Manifestazioni Sportive"
            },
            {
                "id": 41,
                "question": "Chi emette il provvedimento di DASPO?",
                "options": ["Il Prefetto", "Il Giudice Sportivo", "Il Questore", "L'arbitro"],
                "answer": "Il Questore"
            },
            {
                "id": 42,
                "question": "Qual è la durata tipica del DASPO?",
                "options": ["1 mese", "Da 1 a 5 anni", "10 anni", "A vita"],
                "answer": "Da 1 a 5 anni"
            },
            {
                "id": 43,
                "question": "Chi ha la facoltà di vietare la detenzione di armi (art. 39 T.U.L.P.S.)?",
                "options": ["Il Questore", "Il Prefetto", "Il Sindaco", "Il Maresciallo"],
                "answer": "Il Prefetto"
            },
            {
                "id": 44,
                "question": "Chi rilascia la licenza di porto d'armi per difesa personale (armi corte)?",
                "options": ["Il Questore", "Il Prefetto", "Il Ministro della Difesa", "Il Sindaco"],
                "answer": "Il Prefetto"
            },
            {
                "id": 45,
                "question": "Chi rilascia la licenza di porto di fucile per uso caccia?",
                "options": ["Il Prefetto", "Il Questore", "La Regione", "La Provincia"],
                "answer": "Il Questore"
            },
            {
                "id": 46,
                "question": "Qual è la durata della licenza di porto d'armi per difesa personale?",
                "options": ["1 anno", "3 anni", "5 anni", "Illimitata"],
                "answer": "1 anno"
            },
            {
                "id": 47,
                "question": "Cosa consente l'art. 41 T.U.L.P.S.?",
                "options": ["L'arresto preventivo", "La perquisizione locale per la ricerca di armi", "L'intercettazione telefonica", "Il pedinamento"],
                "answer": "La perquisizione locale per la ricerca di armi"
            },
            {
                "id": 48,
                "question": "Quando si applicano le misure di prevenzione?",
                "options": ["Dopo la condanna definitiva", "Ante delictum (prima del reato) sulla base della pericolosità sociale", "Solo in caso di flagranza", "Mai"],
                "answer": "Ante delictum (prima del reato) sulla base della pericolosità sociale"
            },
            {
                "id": 49,
                "question": "Chi emette il foglio di via obbligatorio?",
                "options": ["Il Prefetto", "Il Sindaco", "Il Questore", "Il Giudice"],
                "answer": "Il Questore"
            },
            {
                "id": 50,
                "question": "Chi applica la misura della sorveglianza speciale?",
                "options": ["Il Questore", "Il Prefetto", "Il Tribunale (Autorità Giudiziaria)", "Il Ministro"],
                "answer": "Il Tribunale (Autorità Giudiziaria)"
            },
            {
                "id": 51,
                "question": "Chi emette l'avviso orale?",
                "options": ["Il Questore", "Il Prefetto", "Il Sindaco", "Il Giudice"],
                "answer": "Il Questore"
            },
            {
                "id": 52,
                "question": "Chi emette l'ammonimento per atti persecutori (stalking)?",
                "options": ["Il Giudice", "Il Questore", "Il Prefetto", "L'avvocato"],
                "answer": "Il Questore"
            },
            {
                "id": 53,
                "question": "Chi emette il decreto di espulsione amministrativa dello straniero?",
                "options": ["Il Questore", "Il Prefetto", "Il Sindaco", "Il Console"],
                "answer": "Il Prefetto"
            },
            {
                "id": 54,
                "question": "Chi dispone il trattenimento dello straniero nei CPR?",
                "options": ["Il Prefetto", "Il Questore", "Il Giudice", "La Polizia"],
                "answer": "Il Questore"
            },
            {
                "id": 55,
                "question": "Chi rilascia il passaporto?",
                "options": ["Il Prefetto", "Il Sindaco", "Il Questore", "Il Ministero degli Esteri direttamente"],
                "answer": "Il Questore"
            }
        ],
        "costituzionale": [
            {
                "id": 101,
                "question": "Qual è la caratteristica principale della Costituzione italiana?",
                "options": ["Flessibile", "Rigida", "Breve", "Ottriata"],
                "answer": "Rigida"
            },
            {
                "id": 102,
                "question": "Quando è entrata in vigore la Costituzione italiana?",
                "options": ["2 giugno 1946", "1 gennaio 1948", "25 aprile 1945", "1 maggio 1947"],
                "answer": "1 gennaio 1948"
            },
            {
                "id": 103,
                "question": "Da quanti articoli è composta la Costituzione italiana?",
                "options": ["100", "139", "150", "120"],
                "answer": "139"
            },
            {
                "id": 104,
                "question": "Chi è il Capo dello Stato in Italia?",
                "options": ["Il Presidente del Consiglio", "Il Presidente della Repubblica", "Il Presidente del Senato", "Il Re"],
                "answer": "Il Presidente della Repubblica"
            },
            {
                "id": 105,
                "question": "Quale organo detiene il potere legislativo?",
                "options": ["Il Governo", "Il Parlamento", "La Magistratura", "Il Presidente della Repubblica"],
                "answer": "Il Parlamento"
            }
        ],
        "penale": [
            {
                "id": 201,
                "question": "Cosa sancisce il principio di legalità (art. 25 Cost.)?",
                "options": ["La legge è uguale per tutti", "Nessuno può essere punito se non in forza di una legge entrata in vigore prima del fatto commesso", "L'ignoranza della legge non scusa", "La pena deve essere rieducativa"],
                "answer": "Nessuno può essere punito se non in forza di una legge entrata in vigore prima del fatto commesso"
            },
            {
                "id": 202,
                "question": "Qual è la differenza tra delitti e contravvenzioni?",
                "options": ["La gravità del fatto", "La specie delle pene comminate", "Il soggetto che li commette", "Il luogo del reato"],
                "answer": "La specie delle pene comminate"
            },
            {
                "id": 203,
                "question": "Cos'è il dolo?",
                "options": ["La negligenza", "La previsione e volontà dell'evento dannoso", "L'imprudenza", "La preterintenzione"],
                "answer": "La previsione e volontà dell'evento dannoso"
            },
            {
                "id": 204,
                "question": "Quando si ha la colpa?",
                "options": ["Quando l'evento è voluto", "Quando l'evento non è voluto ma si verifica per negligenza, imprudenza o imperizia", "Quando l'evento va oltre l'intenzione", "Quando c'è la volontà di uccidere"],
                "answer": "Quando l'evento non è voluto ma si verifica per negligenza, imprudenza o imperizia"
            },
            {
                "id": 205,
                "question": "Qual è la funzione della pena secondo la Costituzione?",
                "options": ["Vendicativa", "Espiatoria", "Rieducativa", "Eliminativa"],
                "answer": "Rieducativa"
            }
        ],
        "procedura": [
            {
                "id": 301,
                "question": "Chi dirige le indagini preliminari?",
                "options": ["Il GIP", "Il Pubblico Ministero", "La Polizia Giudiziaria", "L'avvocato difensore"],
                "answer": "Il Pubblico Ministero"
            },
            {
                "id": 302,
                "question": "Qual è il ruolo della Polizia Giudiziaria?",
                "options": ["Emettere sentenze", "Prendere notizia dei reati e svolgere le indagini", "Difendere l'imputato", "Decidere sulla libertà personale"],
                "answer": "Prendere notizia dei reati e svolgere le indagini"
            },
            {
                "id": 303,
                "question": "Cos'è il sistema accusatorio?",
                "options": ["Un sistema dove il giudice raccoglie le prove", "Un sistema basato sulla parità tra accusa e difesa davanti a un giudice terzo", "Un sistema segreto", "Un sistema senza avvocati"],
                "answer": "Un sistema basato sulla parità tra accusa e difesa davanti a un giudice terzo"
            },
            {
                "id": 304,
                "question": "Quando si chiudono le indagini preliminari?",
                "options": ["Dopo 1 mese", "Quando il PM esercita l'azione penale o chiede l'archiviazione", "Quando viene arrestato l'indagato", "Mai"],
                "answer": "Quando il PM esercita l'azione penale o chiede l'archiviazione"
            },
            {
                "id": 305,
                "question": "Chi è il GIP?",
                "options": ["Giudice per le Indagini Preliminari", "Giudice Istruttore Penale", "Guardia Interprovinciale Polizia", "Gruppo Investigativo Pubblico"],
                "answer": "Giudice per le Indagini Preliminari"
            }
        ]
    };

    let currentCategory = "ps";
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    const QUESTIONS_PER_ROUND = 20;

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

    function startQuiz() {
        let categoryQuestions = [];

        if (currentCategory === "all") {
            // Combine all questions
            Object.values(questionsData).forEach(questions => {
                categoryQuestions = categoryQuestions.concat(questions);
            });
        } else {
            // Select random questions from the current category
            categoryQuestions = questionsData[currentCategory];
        }

        // If we have fewer questions than QUESTIONS_PER_ROUND, use all of them
        const count = Math.min(QUESTIONS_PER_ROUND, categoryQuestions.length);

        currentQuestions = getRandomQuestions(categoryQuestions, count);
        currentQuestionIndex = 0;
        score = 0;

        showScreen(quizScreen);
        loadQuestion();
    }
    function getRandomQuestions(questions, count) {
        // Shuffle array using Fisher-Yates algorithm
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

    function loadQuestion() {
        const question = currentQuestions[currentQuestionIndex];

        // Update UI
        questionText.textContent = question.question;
        questionNumberDisplay.textContent = `Domanda ${currentQuestionIndex + 1}/${currentQuestions.length}`;

        // Update progress bar
        const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;

        // Clear previous options
        optionsContainer.innerHTML = '';
        feedbackDisplay.textContent = '';
        nextBtn.classList.add('hidden');

        // Create option buttons
        // Shuffle options for extra randomness
        const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.textContent = option;
            button.addEventListener('click', () => selectOption(button, option, question.answer));
            optionsContainer.appendChild(button);
        });
    }

    function selectOption(selectedButton, selectedOption, correctAnswer) {
        // Disable all buttons
        const buttons = optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.disabled = true);

        if (selectedOption === correctAnswer) {
            selectedButton.classList.add('correct');
            score++;
            feedbackDisplay.textContent = "Corretto!";
            feedbackDisplay.style.color = "#10b981";
        } else {
            selectedButton.classList.add('wrong');
            feedbackDisplay.textContent = "Sbagliato!";
            feedbackDisplay.style.color = "#ef4444";

            // Highlight correct answer
            buttons.forEach(btn => {
                if (btn.textContent === correctAnswer) {
                    btn.classList.add('correct');
                }
            });
        }

        nextBtn.classList.remove('hidden');
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        showScreen(resultScreen);
        scoreDisplay.textContent = score;

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
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', () => {
        // Restart with same subject
        startQuiz();
    });
    backToSubjectsBtn.addEventListener('click', () => {
        showScreen(subjectSelectionScreen);
    });
});
