const allQuestions = [
  {
    "id": 1,
    "question": "Chi è l'Autorità nazionale di pubblica sicurezza?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Ministro dell'Interno",
      "Il Presidente del Consiglio"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 2,
    "question": "Chi è l'Autorità provinciale di pubblica sicurezza con attribuzioni politico-amministrative?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "Il Presidente della Provincia"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 3,
    "question": "Chi è l'Autorità provinciale di pubblica sicurezza con attribuzioni tecnico-operative?",
    "options": [
      "Il Prefetto",
      "Il Comandante dei Carabinieri",
      "Il Questore",
      "Il Sindaco"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 4,
    "question": "Chi è l'Autorità locale di pubblica sicurezza nei comuni privi di Commissariato?",
    "options": [
      "Il Comandante della Polizia Locale",
      "Il Sindaco",
      "Il Maresciallo dei Carabinieri",
      "Il Segretario Comunale"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 5,
    "question": "Cosa significa l'acronimo T.U.L.P.S.?",
    "options": [
      "Testo Unico Leggi Pubblica Sicurezza",
      "Testo Unico Leggi Polizia Stato",
      "Testo Unico Libertà Pubblica Sicurezza",
      "Testo Unico Leggi Private Sicurezza"
    ],
    "answer": "Testo Unico Leggi Pubblica Sicurezza"
  },
  {
    "id": 6,
    "question": "Qual è il compito principale dell'Autorità di P.S. secondo l'art. 1 T.U.L.P.S.?",
    "options": [
      "Arrestare i criminali",
      "Vegliare al mantenimento dell'ordine pubblico",
      "Emettere sentenze",
      "Gestire le carceri"
    ],
    "answer": "Vegliare al mantenimento dell'ordine pubblico"
  },
  {
    "id": 7,
    "question": "Qual è la funzione principale della Polizia di Sicurezza?",
    "options": [
      "Repressiva",
      "Giudiziaria",
      "Preventiva",
      "Investigativa"
    ],
    "answer": "Preventiva"
  },
  {
    "id": 8,
    "question": "Qual è la funzione principale della Polizia Giudiziaria?",
    "options": [
      "Preventiva",
      "Repressiva",
      "Amministrativa",
      "Politica"
    ],
    "answer": "Repressiva"
  },
  {
    "id": 9,
    "question": "Come viene definito l'ordine pubblico?",
    "options": [
      "L'assenza di rumore",
      "Il complesso dei beni giuridici fondamentali e degli interessi pubblici primari",
      "Il rispetto del codice della strada",
      "La pulizia delle strade"
    ],
    "answer": "Il complesso dei beni giuridici fondamentali e degli interessi pubblici primari"
  },
  {
    "id": 10,
    "question": "Chi presiede il Comitato Provinciale per l'Ordine e la Sicurezza Pubblica?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "Il Procuratore della Repubblica"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 11,
    "question": "Chi ha la direzione tecnica dei servizi di ordine e sicurezza pubblica?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Ministro dell'Interno",
      "Il Sindaco"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 12,
    "question": "Con quale atto il Questore dispone le modalità operative dei servizi di ordine pubblico?",
    "options": [
      "Decreto legge",
      "Ordinanza di servizio",
      "Circolare",
      "Sentenza"
    ],
    "answer": "Ordinanza di servizio"
  },
  {
    "id": 13,
    "question": "Quando il Sindaco assume le funzioni di Autorità locale di P.S.?",
    "options": [
      "Sempre",
      "Mai",
      "Quando manca il Commissariato di P.S.",
      "Solo la domenica"
    ],
    "answer": "Quando manca il Commissariato di P.S."
  },
  {
    "id": 14,
    "question": "Quale compito spetta agli Ufficiali di P.S.?",
    "options": [
      "Emanare provvedimenti amministrativi",
      "Dirigere i servizi di ordine pubblico e vigilare",
      "Giudicare i reati",
      "Fare le leggi"
    ],
    "answer": "Dirigere i servizi di ordine pubblico e vigilare"
  },
  {
    "id": 15,
    "question": "Quale compito spetta agli Agenti di P.S.?",
    "options": [
      "Compiti esecutivi",
      "Direzione tecnica",
      "Emanazione ordinanze",
      "Coordinamento interforze"
    ],
    "answer": "Compiti esecutivi"
  },
  {
    "id": 16,
    "question": "Cosa prevede l'art. 4 del T.U.L.P.S.?",
    "options": [
      "L'arresto in flagranza",
      "La facoltà di ordinare rilievi segnaletici",
      "Il divieto di riunione",
      "La chiusura dei bar"
    ],
    "answer": "La facoltà di ordinare rilievi segnaletici"
  },
  {
    "id": 17,
    "question": "A chi possono essere ordinati i rilievi segnaletici ex art. 4 T.U.L.P.S.?",
    "options": [
      "A tutti i cittadini",
      "Alle persone pericolose, sospette o che non possono provare la loro identità",
      "Solo agli stranieri",
      "Solo ai pregiudicati"
    ],
    "answer": "Alle persone pericolose, sospette o che non possono provare la loro identità"
  },
  {
    "id": 18,
    "question": "Cosa disciplina l'art. 15 del T.U.L.P.S.?",
    "options": [
      "L'arresto",
      "L'invito a comparire davanti all'Autorità di P.S.",
      "La perquisizione",
      "Il sequestro"
    ],
    "answer": "L'invito a comparire davanti all'Autorità di P.S."
  },
  {
    "id": 19,
    "question": "Quale reato si configura per l'inosservanza dei provvedimenti dell'Autorità (art. 650 c.p.)?",
    "options": [
      "Resistenza a pubblico ufficiale",
      "Inosservanza dei provvedimenti dell'Autorità",
      "Oltraggio",
      "Violenza privata"
    ],
    "answer": "Inosservanza dei provvedimenti dell'Autorità"
  },
  {
    "id": 20,
    "question": "Quali sono i caratteri dei provvedimenti di polizia?",
    "options": [
      "Autoritatività ed esecutorietà",
      "Consensualità e libertà",
      "Segretezza e immunità",
      "Flessibilità e informalità"
    ],
    "answer": "Autoritatività ed esecutorietà"
  },
  {
    "id": 21,
    "question": "Cosa sono gli ordini di polizia?",
    "options": [
      "Provvedimenti espansivi",
      "Provvedimenti restrittivi che impongono comandi o divieti",
      "Consigli",
      "Suggerimenti"
    ],
    "answer": "Provvedimenti restrittivi che impongono comandi o divieti"
  },
  {
    "id": 22,
    "question": "Chi può emanare ordinanze di necessità e urgenza ex art. 2 T.U.L.P.S.?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Comandante dei Vigili"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 23,
    "question": "Qual è la funzione delle autorizzazioni di polizia?",
    "options": [
      "Creare un nuovo diritto",
      "Rimuovere un limite all'esercizio di un diritto preesistente",
      "Punire un reato",
      "Imporre una tassa"
    ],
    "answer": "Rimuovere un limite all'esercizio di un diritto preesistente"
  },
  {
    "id": 24,
    "question": "Cos'è una licenza di polizia?",
    "options": [
      "Un atto formale esplicito che permette l'esercizio di un'attività",
      "Un divieto",
      "Una sanzione",
      "Un contratto"
    ],
    "answer": "Un atto formale esplicito che permette l'esercizio di un'attività"
  },
  {
    "id": 25,
    "question": "Cosa significa SCIA?",
    "options": [
      "Segnalazione Certificata di Inizio Attività",
      "Società Commerciale Italiana Autorizzata",
      "Sistema Controllo Interno Aziendale",
      "Servizio Centrale Investigativo Antimafia"
    ],
    "answer": "Segnalazione Certificata di Inizio Attività"
  },
  {
    "id": 26,
    "question": "Cosa prevede l'art. 100 del T.U.L.P.S.?",
    "options": [
      "Il rilascio del passaporto",
      "La sospensione della licenza di un esercizio pubblico",
      "Il divieto di sosta",
      "L'arresto obbligatorio"
    ],
    "answer": "La sospensione della licenza di un esercizio pubblico"
  },
  {
    "id": 27,
    "question": "Chi ha il potere di sospendere la licenza ex art. 100 T.U.L.P.S.?",
    "options": [
      "Il Sindaco",
      "Il Prefetto",
      "Il Questore",
      "Il Giudice di Pace"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 28,
    "question": "Quando può essere revocata la licenza ai sensi dell'art. 100 T.U.L.P.S.?",
    "options": [
      "Alla prima violazione",
      "Qualora si ripetano i fatti che hanno determinato la sospensione",
      "Mai",
      "A discrezione del cliente"
    ],
    "answer": "Qualora si ripetano i fatti che hanno determinato la sospensione"
  },
  {
    "id": 29,
    "question": "Quanto tempo prima deve essere dato il preavviso per una riunione in luogo pubblico?",
    "options": [
      "24 ore",
      "3 giorni",
      "1 settimana",
      "1 mese"
    ],
    "answer": "3 giorni"
  },
  {
    "id": 30,
    "question": "A chi va inviato il preavviso di riunione in luogo pubblico?",
    "options": [
      "Al Sindaco",
      "Al Prefetto",
      "Al Questore",
      "Al Parroco"
    ],
    "answer": "Al Questore"
  },
  {
    "id": 31,
    "question": "Per quale tipo di riunione è obbligatorio il preavviso?",
    "options": [
      "Riunione privata",
      "Riunione in luogo aperto al pubblico",
      "Riunione in luogo pubblico",
      "Tutte le riunioni"
    ],
    "answer": "Riunione in luogo pubblico"
  },
  {
    "id": 32,
    "question": "È richiesto il preavviso per una riunione in luogo aperto al pubblico (es. cinema)?",
    "options": [
      "Sì, sempre",
      "No",
      "Solo se ci sono politici",
      "Solo se a pagamento"
    ],
    "answer": "No"
  },
  {
    "id": 33,
    "question": "Quando può essere sciolta una riunione (art. 20 T.U.L.P.S.)?",
    "options": [
      "Se piove",
      "Se ci sono grida sediziose o pericolo per l'ordine pubblico",
      "Se dura troppo",
      "Se non piace al Sindaco"
    ],
    "answer": "Se ci sono grida sediziose o pericolo per l'ordine pubblico"
  },
  {
    "id": 34,
    "question": "Chi può ordinare lo scioglimento di una riunione?",
    "options": [
      "Qualsiasi cittadino",
      "I Funzionari di P.S. (indossando la fascia tricolore)",
      "Il Sindaco",
      "I Vigili del Fuoco"
    ],
    "answer": "I Funzionari di P.S. (indossando la fascia tricolore)"
  },
  {
    "id": 35,
    "question": "Quale norma disciplina il fermo per identificazione?",
    "options": [
      "Art. 11 Legge 191/78",
      "Art. 100 T.U.L.P.S.",
      "Art. 41 T.U.L.P.S.",
      "Codice della Strada"
    ],
    "answer": "Art. 11 Legge 191/78"
  },
  {
    "id": 36,
    "question": "Qual è la durata massima del fermo per identificazione?",
    "options": [
      "12 ore",
      "24 ore",
      "48 ore",
      "72 ore"
    ],
    "answer": "24 ore"
  },
  {
    "id": 37,
    "question": "A chi deve essere data immediata notizia del fermo per identificazione?",
    "options": [
      "Al Questore",
      "Al Sindaco",
      "Al Procuratore della Repubblica",
      "Ai parenti"
    ],
    "answer": "Al Procuratore della Repubblica"
  },
  {
    "id": 38,
    "question": "Cosa devono fare i gestori di strutture ricettive (art. 109 T.U.L.P.S.)?",
    "options": [
      "Offrire la colazione",
      "Comunicare le generalità degli alloggiati all'Autorità di P.S.",
      "Chiudere a mezzanotte",
      "Non accettare stranieri"
    ],
    "answer": "Comunicare le generalità degli alloggiati all'Autorità di P.S."
  },
  {
    "id": 39,
    "question": "Entro quanto tempo devono essere comunicate le generalità degli alloggiati?",
    "options": [
      "12 ore",
      "24 ore",
      "48 ore",
      "1 settimana"
    ],
    "answer": "24 ore"
  },
  {
    "id": 40,
    "question": "Cos'è il DASPO?",
    "options": [
      "Divieto di Accesso alle Manifestazioni Sportive",
      "Divieto di Assunzione Sostanze Psicotrope",
      "Dipartimento Analisi Statistiche Polizia",
      "Direzione Amministrativa Sicurezza Pubblica"
    ],
    "answer": "Divieto di Accesso alle Manifestazioni Sportive"
  },
  {
    "id": 41,
    "question": "Chi emette il provvedimento di DASPO?",
    "options": [
      "Il Prefetto",
      "Il Giudice Sportivo",
      "Il Questore",
      "L'arbitro"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 42,
    "question": "Qual è la durata tipica del DASPO?",
    "options": [
      "1 mese",
      "Da 1 a 5 anni",
      "10 anni",
      "A vita"
    ],
    "answer": "Da 1 a 5 anni"
  },
  {
    "id": 43,
    "question": "Chi ha la facoltà di vietare la detenzione di armi (art. 39 T.U.L.P.S.)?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Maresciallo"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 44,
    "question": "Chi rilascia la licenza di porto d'armi per difesa personale (armi corte)?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Ministro della Difesa",
      "Il Sindaco"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 45,
    "question": "Chi rilascia la licenza di porto di fucile per uso caccia?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "La Regione",
      "La Provincia"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 46,
    "question": "Qual è la durata della licenza di porto d'armi per difesa personale?",
    "options": [
      "1 anno",
      "3 anni",
      "5 anni",
      "Illimitata"
    ],
    "answer": "1 anno"
  },
  {
    "id": 47,
    "question": "Cosa consente l'art. 41 T.U.L.P.S.?",
    "options": [
      "L'arresto preventivo",
      "La perquisizione locale per la ricerca di armi",
      "L'intercettazione telefonica",
      "Il pedinamento"
    ],
    "answer": "La perquisizione locale per la ricerca di armi"
  },
  {
    "id": 48,
    "question": "Quando si applicano le misure di prevenzione?",
    "options": [
      "Dopo la condanna definitiva",
      "Ante delictum (prima del reato) sulla base della pericolosità sociale",
      "Solo in caso di flagranza",
      "Mai"
    ],
    "answer": "Ante delictum (prima del reato) sulla base della pericolosità sociale"
  },
  {
    "id": 49,
    "question": "Chi emette il foglio di via obbligatorio?",
    "options": [
      "Il Prefetto",
      "Il Sindaco",
      "Il Questore",
      "Il Giudice"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 50,
    "question": "Chi applica la misura della sorveglianza speciale?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Tribunale (Autorità Giudiziaria)",
      "Il Ministro"
    ],
    "answer": "Il Tribunale (Autorità Giudiziaria)"
  },
  {
    "id": 51,
    "question": "Chi emette l'avviso orale?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Giudice"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 52,
    "question": "Chi emette l'ammonimento per atti persecutori (stalking)?",
    "options": [
      "Il Giudice",
      "Il Questore",
      "Il Prefetto",
      "L'avvocato"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 53,
    "question": "Chi emette il decreto di espulsione amministrativa dello straniero?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Console"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 54,
    "question": "Chi dispone il trattenimento dello straniero nei CPR?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Giudice",
      "La Polizia"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 55,
    "question": "Chi rilascia il passaporto?",
    "options": [
      "Il Prefetto",
      "Il Sindaco",
      "Il Questore",
      "Il Ministero degli Esteri direttamente"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1001,
    "category": "Legislazione PS",
    "question": "Qual è il fine specifico perseguito dall'Autorità di Pubblica Sicurezza?",
    "options": [
      "La repressione dei reati",
      "Il mantenimento dell'ordine e della sicurezza pubblica",
      "La gestione amministrativa dei comuni",
      "Il controllo fiscale"
    ],
    "answer": "Il mantenimento dell'ordine e della sicurezza pubblica"
  },
  {
    "id": 1001,
    "category": "Legislazione PS",
    "question": "Qual è il fine specifico perseguito dall'Autorità di Pubblica Sicurezza?",
    "options": [
      "La repressione dei reati",
      "Il mantenimento dell'ordine e della sicurezza pubblica",
      "La gestione amministrativa dei comuni",
      "Il controllo fiscale"
    ],
    "answer": "Il mantenimento dell'ordine e della sicurezza pubblica"
  },
  {
    "id": 1001,
    "category": "Legislazione PS",
    "question": "Qual è il fine specifico perseguito dall'Autorità di Pubblica Sicurezza?",
    "options": [
      "La repressione dei reati",
      "Il mantenimento dell'ordine e della sicurezza pubblica",
      "La gestione amministrativa dei comuni",
      "Il controllo fiscale"
    ],
    "answer": "Il mantenimento dell'ordine e della sicurezza pubblica"
  },
  {
    "id": 1002,
    "category": "Legislazione PS",
    "question": "Chi è l'Autorità Nazionale di Pubblica Sicurezza?",
    "options": [
      "Il Presidente della Repubblica",
      "Il Presidente del Consiglio",
      "Il Ministro dell'Interno",
      "Il Capo della Polizia"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1002,
    "category": "Legislazione PS",
    "question": "Chi è l'Autorità Nazionale di Pubblica Sicurezza?",
    "options": [
      "Il Presidente della Repubblica",
      "Il Presidente del Consiglio",
      "Il Ministro dell'Interno",
      "Il Capo della Polizia"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1002,
    "category": "Legislazione PS",
    "question": "Chi è l'Autorità Nazionale di Pubblica Sicurezza?",
    "options": [
      "Il Presidente della Repubblica",
      "Il Presidente del Consiglio",
      "Il Ministro dell'Interno",
      "Il Capo della Polizia"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1003,
    "category": "Legislazione PS",
    "question": "Quale autorità ha la responsabilità generale dell'ordine e della sicurezza pubblica nella provincia?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Presidente della Provincia"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1003,
    "category": "Legislazione PS",
    "question": "Quale autorità ha la responsabilità generale dell'ordine e della sicurezza pubblica nella provincia?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Presidente della Provincia"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1003,
    "category": "Legislazione PS",
    "question": "Quale autorità ha la responsabilità generale dell'ordine e della sicurezza pubblica nella provincia?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Presidente della Provincia"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1004,
    "category": "Legislazione PS",
    "question": "Chi ha la direzione tecnica dei servizi di ordine e sicurezza pubblica in provincia?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Comandante dei Carabinieri",
      "Il Sindaco"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1004,
    "category": "Legislazione PS",
    "question": "Chi ha la direzione tecnica dei servizi di ordine e sicurezza pubblica in provincia?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Comandante dei Carabinieri",
      "Il Sindaco"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1004,
    "category": "Legislazione PS",
    "question": "Chi ha la direzione tecnica dei servizi di ordine e sicurezza pubblica in provincia?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Comandante dei Carabinieri",
      "Il Sindaco"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1005,
    "category": "Legislazione PS",
    "question": "Chi esercita le attribuzioni di Autorità locale di P.S. nei comuni privi di Commissariato?",
    "options": [
      "Il Comandante della Polizia Locale",
      "Il Sindaco",
      "Il Segretario Comunale",
      "Il Maresciallo dei Carabinieri"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1005,
    "category": "Legislazione PS",
    "question": "Chi esercita le attribuzioni di Autorità locale di P.S. nei comuni privi di Commissariato?",
    "options": [
      "Il Comandante della Polizia Locale",
      "Il Sindaco",
      "Il Segretario Comunale",
      "Il Maresciallo dei Carabinieri"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1005,
    "category": "Legislazione PS",
    "question": "Chi esercita le attribuzioni di Autorità locale di P.S. nei comuni privi di Commissariato?",
    "options": [
      "Il Comandante della Polizia Locale",
      "Il Sindaco",
      "Il Segretario Comunale",
      "Il Maresciallo dei Carabinieri"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1006,
    "category": "Legislazione PS",
    "question": "Qual è la differenza principale tra Ufficiali e Agenti di P.S.?",
    "options": [
      "Gli Ufficiali possono emanare provvedimenti, gli Agenti no",
      "Gli Ufficiali dirigono i servizi, gli Agenti svolgono compiti esecutivi",
      "Gli Agenti possono arrestare, gli Ufficiali no",
      "Non c'è differenza"
    ],
    "answer": "Gli Ufficiali dirigono i servizi, gli Agenti svolgono compiti esecutivi"
  },
  {
    "id": 1006,
    "category": "Legislazione PS",
    "question": "Qual è la differenza principale tra Ufficiali e Agenti di P.S.?",
    "options": [
      "Gli Ufficiali possono emanare provvedimenti, gli Agenti no",
      "Gli Ufficiali dirigono i servizi, gli Agenti svolgono compiti esecutivi",
      "Gli Agenti possono arrestare, gli Ufficiali no",
      "Non c'è differenza"
    ],
    "answer": "Gli Ufficiali dirigono i servizi, gli Agenti svolgono compiti esecutivi"
  },
  {
    "id": 1006,
    "category": "Legislazione PS",
    "question": "Qual è la differenza principale tra Ufficiali e Agenti di P.S.?",
    "options": [
      "Gli Ufficiali possono emanare provvedimenti, gli Agenti no",
      "Gli Ufficiali dirigono i servizi, gli Agenti svolgono compiti esecutivi",
      "Gli Agenti possono arrestare, gli Ufficiali no",
      "Non c'è differenza"
    ],
    "answer": "Gli Ufficiali dirigono i servizi, gli Agenti svolgono compiti esecutivi"
  },
  {
    "id": 1007,
    "category": "Legislazione PS",
    "question": "Cosa caratterizza i provvedimenti di polizia?",
    "options": [
      "La consensualità",
      "L'autoritatività e l'esecutorietà",
      "La forma libera",
      "L'assenza di motivazione"
    ],
    "answer": "L'autoritatività e l'esecutorietà"
  },
  {
    "id": 1007,
    "category": "Legislazione PS",
    "question": "Cosa caratterizza i provvedimenti di polizia?",
    "options": [
      "La consensualità",
      "L'autoritatività e l'esecutorietà",
      "La forma libera",
      "L'assenza di motivazione"
    ],
    "answer": "L'autoritatività e l'esecutorietà"
  },
  {
    "id": 1007,
    "category": "Legislazione PS",
    "question": "Cosa caratterizza i provvedimenti di polizia?",
    "options": [
      "La consensualità",
      "L'autoritatività e l'esecutorietà",
      "La forma libera",
      "L'assenza di motivazione"
    ],
    "answer": "L'autoritatività e l'esecutorietà"
  },
  {
    "id": 1008,
    "category": "Legislazione PS",
    "question": "Qual è il termine per il preavviso di una riunione in luogo pubblico al Questore?",
    "options": [
      "24 ore",
      "3 giorni",
      "5 giorni",
      "1 settimana"
    ],
    "answer": "3 giorni"
  },
  {
    "id": 1008,
    "category": "Legislazione PS",
    "question": "Qual è il termine per il preavviso di una riunione in luogo pubblico al Questore?",
    "options": [
      "24 ore",
      "3 giorni",
      "5 giorni",
      "1 settimana"
    ],
    "answer": "3 giorni"
  },
  {
    "id": 1008,
    "category": "Legislazione PS",
    "question": "Qual è il termine per il preavviso di una riunione in luogo pubblico al Questore?",
    "options": [
      "24 ore",
      "3 giorni",
      "5 giorni",
      "1 settimana"
    ],
    "answer": "3 giorni"
  },
  {
    "id": 1009,
    "category": "Legislazione PS",
    "question": "Quando può essere sciolta una riunione pubblica?",
    "options": [
      "Se non è autorizzata",
      "Se avvengono manifestazioni sediziose o pericolo per l'ordine pubblico",
      "Se piove",
      "Se dura oltre le 2 ore"
    ],
    "answer": "Se avvengono manifestazioni sediziose o pericolo per l'ordine pubblico"
  },
  {
    "id": 1009,
    "category": "Legislazione PS",
    "question": "Quando può essere sciolta una riunione pubblica?",
    "options": [
      "Se non è autorizzata",
      "Se avvengono manifestazioni sediziose o pericolo per l'ordine pubblico",
      "Se piove",
      "Se dura oltre le 2 ore"
    ],
    "answer": "Se avvengono manifestazioni sediziose o pericolo per l'ordine pubblico"
  },
  {
    "id": 1009,
    "category": "Legislazione PS",
    "question": "Quando può essere sciolta una riunione pubblica?",
    "options": [
      "Se non è autorizzata",
      "Se avvengono manifestazioni sediziose o pericolo per l'ordine pubblico",
      "Se piove",
      "Se dura oltre le 2 ore"
    ],
    "answer": "Se avvengono manifestazioni sediziose o pericolo per l'ordine pubblico"
  },
  {
    "id": 1010,
    "category": "Legislazione PS",
    "question": "Chi può emanare ordinanze di necessità e urgenza ex art. 2 T.U.L.P.S.?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministro dell'Interno"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1010,
    "category": "Legislazione PS",
    "question": "Chi può emanare ordinanze di necessità e urgenza ex art. 2 T.U.L.P.S.?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministro dell'Interno"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1010,
    "category": "Legislazione PS",
    "question": "Chi può emanare ordinanze di necessità e urgenza ex art. 2 T.U.L.P.S.?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministro dell'Interno"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1011,
    "category": "Legislazione PS",
    "question": "Cosa sono le autorizzazioni di polizia?",
    "options": [
      "Provvedimenti che creano nuovi diritti",
      "Provvedimenti che rimuovono un limite all'esercizio di un diritto preesistente",
      "Sanzioni amministrative",
      "Ordini di comparizione"
    ],
    "answer": "Provvedimenti che rimuovono un limite all'esercizio di un diritto preesistente"
  },
  {
    "id": 1011,
    "category": "Legislazione PS",
    "question": "Cosa sono le autorizzazioni di polizia?",
    "options": [
      "Provvedimenti che creano nuovi diritti",
      "Provvedimenti che rimuovono un limite all'esercizio di un diritto preesistente",
      "Sanzioni amministrative",
      "Ordini di comparizione"
    ],
    "answer": "Provvedimenti che rimuovono un limite all'esercizio di un diritto preesistente"
  },
  {
    "id": 1011,
    "category": "Legislazione PS",
    "question": "Cosa sono le autorizzazioni di polizia?",
    "options": [
      "Provvedimenti che creano nuovi diritti",
      "Provvedimenti che rimuovono un limite all'esercizio di un diritto preesistente",
      "Sanzioni amministrative",
      "Ordini di comparizione"
    ],
    "answer": "Provvedimenti che rimuovono un limite all'esercizio di un diritto preesistente"
  },
  {
    "id": 1012,
    "category": "Legislazione PS",
    "question": "Qual è la durata massima del fermo per identificazione ex art. 11 L. 191/78?",
    "options": [
      "12 ore",
      "24 ore",
      "48 ore",
      "72 ore"
    ],
    "answer": "24 ore"
  },
  {
    "id": 1012,
    "category": "Legislazione PS",
    "question": "Qual è la durata massima del fermo per identificazione ex art. 11 L. 191/78?",
    "options": [
      "12 ore",
      "24 ore",
      "48 ore",
      "72 ore"
    ],
    "answer": "24 ore"
  },
  {
    "id": 1012,
    "category": "Legislazione PS",
    "question": "Qual è la durata massima del fermo per identificazione ex art. 11 L. 191/78?",
    "options": [
      "12 ore",
      "24 ore",
      "48 ore",
      "72 ore"
    ],
    "answer": "24 ore"
  },
  {
    "id": 1013,
    "category": "Legislazione PS",
    "question": "A chi deve essere data notizia dell'accompagnamento per identificazione?",
    "options": [
      "Al Prefetto",
      "Al Questore",
      "Al Procuratore della Repubblica",
      "Al Sindaco"
    ],
    "answer": "Al Procuratore della Repubblica"
  },
  {
    "id": 1013,
    "category": "Legislazione PS",
    "question": "A chi deve essere data notizia dell'accompagnamento per identificazione?",
    "options": [
      "Al Prefetto",
      "Al Questore",
      "Al Procuratore della Repubblica",
      "Al Sindaco"
    ],
    "answer": "Al Procuratore della Repubblica"
  },
  {
    "id": 1013,
    "category": "Legislazione PS",
    "question": "A chi deve essere data notizia dell'accompagnamento per identificazione?",
    "options": [
      "Al Prefetto",
      "Al Questore",
      "Al Procuratore della Repubblica",
      "Al Sindaco"
    ],
    "answer": "Al Procuratore della Repubblica"
  },
  {
    "id": 1014,
    "category": "Legislazione PS",
    "question": "Cosa prevede l'art. 4 T.U.L.P.S. riguardo ai rilievi segnaletici?",
    "options": [
      "Possono essere effettuati su chiunque",
      "Possono essere ordinati a persone pericolose, sospette o che non provano la loro identità",
      "Sono vietati",
      "Richiedono sempre l'autorizzazione del giudice"
    ],
    "answer": "Possono essere ordinati a persone pericolose, sospette o che non provano la loro identità"
  },
  {
    "id": 1014,
    "category": "Legislazione PS",
    "question": "Cosa prevede l'art. 4 T.U.L.P.S. riguardo ai rilievi segnaletici?",
    "options": [
      "Possono essere effettuati su chiunque",
      "Possono essere ordinati a persone pericolose, sospette o che non provano la loro identità",
      "Sono vietati",
      "Richiedono sempre l'autorizzazione del giudice"
    ],
    "answer": "Possono essere ordinati a persone pericolose, sospette o che non provano la loro identità"
  },
  {
    "id": 1014,
    "category": "Legislazione PS",
    "question": "Cosa prevede l'art. 4 T.U.L.P.S. riguardo ai rilievi segnaletici?",
    "options": [
      "Possono essere effettuati su chiunque",
      "Possono essere ordinati a persone pericolose, sospette o che non provano la loro identità",
      "Sono vietati",
      "Richiedono sempre l'autorizzazione del giudice"
    ],
    "answer": "Possono essere ordinati a persone pericolose, sospette o che non provano la loro identità"
  },
  {
    "id": 1015,
    "category": "Legislazione PS",
    "question": "Cosa disciplina l'art. 15 T.U.L.P.S.?",
    "options": [
      "L'arresto",
      "L'invito a comparire davanti all'Autorità di P.S.",
      "La perquisizione",
      "Il sequestro"
    ],
    "answer": "L'invito a comparire davanti all'Autorità di P.S."
  },
  {
    "id": 1015,
    "category": "Legislazione PS",
    "question": "Cosa disciplina l'art. 15 T.U.L.P.S.?",
    "options": [
      "L'arresto",
      "L'invito a comparire davanti all'Autorità di P.S.",
      "La perquisizione",
      "Il sequestro"
    ],
    "answer": "L'invito a comparire davanti all'Autorità di P.S."
  },
  {
    "id": 1015,
    "category": "Legislazione PS",
    "question": "Cosa disciplina l'art. 15 T.U.L.P.S.?",
    "options": [
      "L'arresto",
      "L'invito a comparire davanti all'Autorità di P.S.",
      "La perquisizione",
      "Il sequestro"
    ],
    "answer": "L'invito a comparire davanti all'Autorità di P.S."
  },
  {
    "id": 1016,
    "category": "Legislazione PS",
    "question": "Quale reato si configura per l'inosservanza dell'invito a comparire per ragioni di sicurezza pubblica?",
    "options": [
      "Resistenza a pubblico ufficiale",
      "Art. 650 c.p. (Inosservanza dei provvedimenti dell'Autorità)",
      "Oltraggio",
      "Violenza privata"
    ],
    "answer": "Art. 650 c.p. (Inosservanza dei provvedimenti dell'Autorità)"
  },
  {
    "id": 1016,
    "category": "Legislazione PS",
    "question": "Quale reato si configura per l'inosservanza dell'invito a comparire per ragioni di sicurezza pubblica?",
    "options": [
      "Resistenza a pubblico ufficiale",
      "Art. 650 c.p. (Inosservanza dei provvedimenti dell'Autorità)",
      "Oltraggio",
      "Violenza privata"
    ],
    "answer": "Art. 650 c.p. (Inosservanza dei provvedimenti dell'Autorità)"
  },
  {
    "id": 1016,
    "category": "Legislazione PS",
    "question": "Quale reato si configura per l'inosservanza dell'invito a comparire per ragioni di sicurezza pubblica?",
    "options": [
      "Resistenza a pubblico ufficiale",
      "Art. 650 c.p. (Inosservanza dei provvedimenti dell'Autorità)",
      "Oltraggio",
      "Violenza privata"
    ],
    "answer": "Art. 650 c.p. (Inosservanza dei provvedimenti dell'Autorità)"
  },
  {
    "id": 1017,
    "category": "Legislazione PS",
    "question": "Chi ha il potere di sospendere la licenza di un esercizio pubblico ex art. 100 T.U.L.P.S.?",
    "options": [
      "Il Sindaco",
      "Il Prefetto",
      "Il Questore",
      "Il Giudice di Pace"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1017,
    "category": "Legislazione PS",
    "question": "Chi ha il potere di sospendere la licenza di un esercizio pubblico ex art. 100 T.U.L.P.S.?",
    "options": [
      "Il Sindaco",
      "Il Prefetto",
      "Il Questore",
      "Il Giudice di Pace"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1017,
    "category": "Legislazione PS",
    "question": "Chi ha il potere di sospendere la licenza di un esercizio pubblico ex art. 100 T.U.L.P.S.?",
    "options": [
      "Il Sindaco",
      "Il Prefetto",
      "Il Questore",
      "Il Giudice di Pace"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1018,
    "category": "Legislazione PS",
    "question": "Qual è il presupposto per la sospensione della licenza ex art. 100 T.U.L.P.S.?",
    "options": [
      "Mancato pagamento delle tasse",
      "Tumulti, gravi disordini o pericolo per l'ordine pubblico",
      "Rumori molesti",
      "Mancata esposizione dei prezzi"
    ],
    "answer": "Tumulti, gravi disordini o pericolo per l'ordine pubblico"
  },
  {
    "id": 1018,
    "category": "Legislazione PS",
    "question": "Qual è il presupposto per la sospensione della licenza ex art. 100 T.U.L.P.S.?",
    "options": [
      "Mancato pagamento delle tasse",
      "Tumulti, gravi disordini o pericolo per l'ordine pubblico",
      "Rumori molesti",
      "Mancata esposizione dei prezzi"
    ],
    "answer": "Tumulti, gravi disordini o pericolo per l'ordine pubblico"
  },
  {
    "id": 1018,
    "category": "Legislazione PS",
    "question": "Qual è il presupposto per la sospensione della licenza ex art. 100 T.U.L.P.S.?",
    "options": [
      "Mancato pagamento delle tasse",
      "Tumulti, gravi disordini o pericolo per l'ordine pubblico",
      "Rumori molesti",
      "Mancata esposizione dei prezzi"
    ],
    "answer": "Tumulti, gravi disordini o pericolo per l'ordine pubblico"
  },
  {
    "id": 1019,
    "category": "Legislazione PS",
    "question": "Cosa si intende per 'ordine pubblico'?",
    "options": [
      "L'assenza di traffico",
      "Il complesso dei beni giuridici fondamentali e degli interessi pubblici primari",
      "La pulizia delle strade",
      "Il rispetto degli orari di apertura dei negozi"
    ],
    "answer": "Il complesso dei beni giuridici fondamentali e degli interessi pubblici primari"
  },
  {
    "id": 1019,
    "category": "Legislazione PS",
    "question": "Cosa si intende per 'ordine pubblico'?",
    "options": [
      "L'assenza di traffico",
      "Il complesso dei beni giuridici fondamentali e degli interessi pubblici primari",
      "La pulizia delle strade",
      "Il rispetto degli orari di apertura dei negozi"
    ],
    "answer": "Il complesso dei beni giuridici fondamentali e degli interessi pubblici primari"
  },
  {
    "id": 1019,
    "category": "Legislazione PS",
    "question": "Cosa si intende per 'ordine pubblico'?",
    "options": [
      "L'assenza di traffico",
      "Il complesso dei beni giuridici fondamentali e degli interessi pubblici primari",
      "La pulizia delle strade",
      "Il rispetto degli orari di apertura dei negozi"
    ],
    "answer": "Il complesso dei beni giuridici fondamentali e degli interessi pubblici primari"
  },
  {
    "id": 1020,
    "category": "Legislazione PS",
    "question": "Chi presiede il Comitato Provinciale per l'Ordine e la Sicurezza Pubblica?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "Il Procuratore"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1020,
    "category": "Legislazione PS",
    "question": "Chi presiede il Comitato Provinciale per l'Ordine e la Sicurezza Pubblica?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "Il Procuratore"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1020,
    "category": "Legislazione PS",
    "question": "Chi presiede il Comitato Provinciale per l'Ordine e la Sicurezza Pubblica?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "Il Procuratore"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1021,
    "category": "Legislazione PS",
    "question": "Con quale atto il Questore dispone le modalità operative dei servizi di ordine pubblico?",
    "options": [
      "Decreto",
      "Ordinanza di servizio",
      "Circolare",
      "Legge"
    ],
    "answer": "Ordinanza di servizio"
  },
  {
    "id": 1021,
    "category": "Legislazione PS",
    "question": "Con quale atto il Questore dispone le modalità operative dei servizi di ordine pubblico?",
    "options": [
      "Decreto",
      "Ordinanza di servizio",
      "Circolare",
      "Legge"
    ],
    "answer": "Ordinanza di servizio"
  },
  {
    "id": 1021,
    "category": "Legislazione PS",
    "question": "Con quale atto il Questore dispone le modalità operative dei servizi di ordine pubblico?",
    "options": [
      "Decreto",
      "Ordinanza di servizio",
      "Circolare",
      "Legge"
    ],
    "answer": "Ordinanza di servizio"
  },
  {
    "id": 1022,
    "category": "Legislazione PS",
    "question": "Qual è la funzione principale della Polizia di Sicurezza?",
    "options": [
      "Repressiva",
      "Preventiva",
      "Giudiziaria",
      "Investigativa"
    ],
    "answer": "Preventiva"
  },
  {
    "id": 1022,
    "category": "Legislazione PS",
    "question": "Qual è la funzione principale della Polizia di Sicurezza?",
    "options": [
      "Repressiva",
      "Preventiva",
      "Giudiziaria",
      "Investigativa"
    ],
    "answer": "Preventiva"
  },
  {
    "id": 1022,
    "category": "Legislazione PS",
    "question": "Qual è la funzione principale della Polizia di Sicurezza?",
    "options": [
      "Repressiva",
      "Preventiva",
      "Giudiziaria",
      "Investigativa"
    ],
    "answer": "Preventiva"
  },
  {
    "id": 1023,
    "category": "Legislazione PS",
    "question": "Qual è la funzione principale della Polizia Giudiziaria?",
    "options": [
      "Preventiva",
      "Repressiva",
      "Amministrativa",
      "Sociale"
    ],
    "answer": "Repressiva"
  },
  {
    "id": 1023,
    "category": "Legislazione PS",
    "question": "Qual è la funzione principale della Polizia Giudiziaria?",
    "options": [
      "Preventiva",
      "Repressiva",
      "Amministrativa",
      "Sociale"
    ],
    "answer": "Repressiva"
  },
  {
    "id": 1023,
    "category": "Legislazione PS",
    "question": "Qual è la funzione principale della Polizia Giudiziaria?",
    "options": [
      "Preventiva",
      "Repressiva",
      "Amministrativa",
      "Sociale"
    ],
    "answer": "Repressiva"
  },
  {
    "id": 1024,
    "category": "Legislazione PS",
    "question": "Chi rilascia il passaporto?",
    "options": [
      "Il Prefetto",
      "Il Sindaco",
      "Il Questore",
      "Il Ministero degli Esteri"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1024,
    "category": "Legislazione PS",
    "question": "Chi rilascia il passaporto?",
    "options": [
      "Il Prefetto",
      "Il Sindaco",
      "Il Questore",
      "Il Ministero degli Esteri"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1024,
    "category": "Legislazione PS",
    "question": "Chi rilascia il passaporto?",
    "options": [
      "Il Prefetto",
      "Il Sindaco",
      "Il Questore",
      "Il Ministero degli Esteri"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1025,
    "category": "Legislazione PS",
    "question": "Chi rilascia il porto d'armi per difesa personale (armi corte)?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministro della Difesa"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1025,
    "category": "Legislazione PS",
    "question": "Chi rilascia il porto d'armi per difesa personale (armi corte)?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministro della Difesa"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1025,
    "category": "Legislazione PS",
    "question": "Chi rilascia il porto d'armi per difesa personale (armi corte)?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministro della Difesa"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1026,
    "category": "Legislazione PS",
    "question": "Chi rilascia il porto di fucile per uso caccia?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "La Regione",
      "La Provincia"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1026,
    "category": "Legislazione PS",
    "question": "Chi rilascia il porto di fucile per uso caccia?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "La Regione",
      "La Provincia"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1026,
    "category": "Legislazione PS",
    "question": "Chi rilascia il porto di fucile per uso caccia?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "La Regione",
      "La Provincia"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1027,
    "category": "Legislazione PS",
    "question": "Cosa significa SCIA?",
    "options": [
      "Segnalazione Certificata di Inizio Attività",
      "Società Commerciale Italiana Autorizzata",
      "Sistema Controllo Interno Aziendale",
      "Servizio Centrale Investigativo Antimafia"
    ],
    "answer": "Segnalazione Certificata di Inizio Attività"
  },
  {
    "id": 1027,
    "category": "Legislazione PS",
    "question": "Cosa significa SCIA?",
    "options": [
      "Segnalazione Certificata di Inizio Attività",
      "Società Commerciale Italiana Autorizzata",
      "Sistema Controllo Interno Aziendale",
      "Servizio Centrale Investigativo Antimafia"
    ],
    "answer": "Segnalazione Certificata di Inizio Attività"
  },
  {
    "id": 1027,
    "category": "Legislazione PS",
    "question": "Cosa significa SCIA?",
    "options": [
      "Segnalazione Certificata di Inizio Attività",
      "Società Commerciale Italiana Autorizzata",
      "Sistema Controllo Interno Aziendale",
      "Servizio Centrale Investigativo Antimafia"
    ],
    "answer": "Segnalazione Certificata di Inizio Attività"
  },
  {
    "id": 1028,
    "category": "Legislazione PS",
    "question": "Entro quanto tempo i gestori di strutture ricettive devono comunicare le generalità degli alloggiati?",
    "options": [
      "12 ore",
      "24 ore",
      "48 ore",
      "Subito"
    ],
    "answer": "24 ore"
  },
  {
    "id": 1028,
    "category": "Legislazione PS",
    "question": "Entro quanto tempo i gestori di strutture ricettive devono comunicare le generalità degli alloggiati?",
    "options": [
      "12 ore",
      "24 ore",
      "48 ore",
      "Subito"
    ],
    "answer": "24 ore"
  },
  {
    "id": 1028,
    "category": "Legislazione PS",
    "question": "Entro quanto tempo i gestori di strutture ricettive devono comunicare le generalità degli alloggiati?",
    "options": [
      "12 ore",
      "24 ore",
      "48 ore",
      "Subito"
    ],
    "answer": "24 ore"
  },
  {
    "id": 1029,
    "category": "Legislazione PS",
    "question": "Quale articolo della Costituzione tutela la libertà di riunione?",
    "options": [
      "Art. 13",
      "Art. 17",
      "Art. 21",
      "Art. 41"
    ],
    "answer": "Art. 17"
  },
  {
    "id": 1029,
    "category": "Legislazione PS",
    "question": "Quale articolo della Costituzione tutela la libertà di riunione?",
    "options": [
      "Art. 13",
      "Art. 17",
      "Art. 21",
      "Art. 41"
    ],
    "answer": "Art. 17"
  },
  {
    "id": 1029,
    "category": "Legislazione PS",
    "question": "Quale articolo della Costituzione tutela la libertà di riunione?",
    "options": [
      "Art. 13",
      "Art. 17",
      "Art. 21",
      "Art. 41"
    ],
    "answer": "Art. 17"
  },
  {
    "id": 1030,
    "category": "Legislazione PS",
    "question": "È richiesto il preavviso per una riunione in luogo aperto al pubblico (es. cinema)?",
    "options": [
      "Sì",
      "No",
      "Solo se politica",
      "Solo se a pagamento"
    ],
    "answer": "No"
  },
  {
    "id": 1030,
    "category": "Legislazione PS",
    "question": "È richiesto il preavviso per una riunione in luogo aperto al pubblico (es. cinema)?",
    "options": [
      "Sì",
      "No",
      "Solo se politica",
      "Solo se a pagamento"
    ],
    "answer": "No"
  },
  {
    "id": 1030,
    "category": "Legislazione PS",
    "question": "È richiesto il preavviso per una riunione in luogo aperto al pubblico (es. cinema)?",
    "options": [
      "Sì",
      "No",
      "Solo se politica",
      "Solo se a pagamento"
    ],
    "answer": "No"
  },
  {
    "id": 1031,
    "category": "Legislazione PS",
    "question": "Chi può ordinare lo scioglimento di una riunione?",
    "options": [
      "I Funzionari di P.S. con fascia tricolore",
      "Il Sindaco",
      "Qualsiasi cittadino",
      "I Vigili del Fuoco"
    ],
    "answer": "I Funzionari di P.S. con fascia tricolore"
  },
  {
    "id": 1031,
    "category": "Legislazione PS",
    "question": "Chi può ordinare lo scioglimento di una riunione?",
    "options": [
      "I Funzionari di P.S. con fascia tricolore",
      "Il Sindaco",
      "Qualsiasi cittadino",
      "I Vigili del Fuoco"
    ],
    "answer": "I Funzionari di P.S. con fascia tricolore"
  },
  {
    "id": 1031,
    "category": "Legislazione PS",
    "question": "Chi può ordinare lo scioglimento di una riunione?",
    "options": [
      "I Funzionari di P.S. con fascia tricolore",
      "Il Sindaco",
      "Qualsiasi cittadino",
      "I Vigili del Fuoco"
    ],
    "answer": "I Funzionari di P.S. con fascia tricolore"
  },
  {
    "id": 1032,
    "category": "Legislazione PS",
    "question": "Quale articolo del T.U.L.P.S. disciplina la perquisizione locale per la ricerca di armi?",
    "options": [
      "Art. 1",
      "Art. 41",
      "Art. 100",
      "Art. 15"
    ],
    "answer": "Art. 41"
  },
  {
    "id": 1032,
    "category": "Legislazione PS",
    "question": "Quale articolo del T.U.L.P.S. disciplina la perquisizione locale per la ricerca di armi?",
    "options": [
      "Art. 1",
      "Art. 41",
      "Art. 100",
      "Art. 15"
    ],
    "answer": "Art. 41"
  },
  {
    "id": 1032,
    "category": "Legislazione PS",
    "question": "Quale articolo del T.U.L.P.S. disciplina la perquisizione locale per la ricerca di armi?",
    "options": [
      "Art. 1",
      "Art. 41",
      "Art. 100",
      "Art. 15"
    ],
    "answer": "Art. 41"
  },
  {
    "id": 1033,
    "category": "Legislazione PS",
    "question": "Chi emette il provvedimento di DASPO?",
    "options": [
      "Il Prefetto",
      "Il Giudice",
      "Il Questore",
      "L'arbitro"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1033,
    "category": "Legislazione PS",
    "question": "Chi emette il provvedimento di DASPO?",
    "options": [
      "Il Prefetto",
      "Il Giudice",
      "Il Questore",
      "L'arbitro"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1033,
    "category": "Legislazione PS",
    "question": "Chi emette il provvedimento di DASPO?",
    "options": [
      "Il Prefetto",
      "Il Giudice",
      "Il Questore",
      "L'arbitro"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1034,
    "category": "Legislazione PS",
    "question": "Chi emette il foglio di via obbligatorio?",
    "options": [
      "Il Prefetto",
      "Il Sindaco",
      "Il Questore",
      "Il Giudice"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1034,
    "category": "Legislazione PS",
    "question": "Chi emette il foglio di via obbligatorio?",
    "options": [
      "Il Prefetto",
      "Il Sindaco",
      "Il Questore",
      "Il Giudice"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1034,
    "category": "Legislazione PS",
    "question": "Chi emette il foglio di via obbligatorio?",
    "options": [
      "Il Prefetto",
      "Il Sindaco",
      "Il Questore",
      "Il Giudice"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1035,
    "category": "Legislazione PS",
    "question": "Chi emette l'avviso orale?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Giudice"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1035,
    "category": "Legislazione PS",
    "question": "Chi emette l'avviso orale?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Giudice"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1035,
    "category": "Legislazione PS",
    "question": "Chi emette l'avviso orale?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Giudice"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1036,
    "category": "Legislazione PS",
    "question": "Chi applica la misura della sorveglianza speciale?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Tribunale (Autorità Giudiziaria)",
      "Il Ministro"
    ],
    "answer": "Il Tribunale (Autorità Giudiziaria)"
  },
  {
    "id": 1036,
    "category": "Legislazione PS",
    "question": "Chi applica la misura della sorveglianza speciale?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Tribunale (Autorità Giudiziaria)",
      "Il Ministro"
    ],
    "answer": "Il Tribunale (Autorità Giudiziaria)"
  },
  {
    "id": 1036,
    "category": "Legislazione PS",
    "question": "Chi applica la misura della sorveglianza speciale?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Tribunale (Autorità Giudiziaria)",
      "Il Ministro"
    ],
    "answer": "Il Tribunale (Autorità Giudiziaria)"
  },
  {
    "id": 1037,
    "category": "Legislazione PS",
    "question": "Qual è la durata tipica di una licenza di polizia (se non diversamente specificato)?",
    "options": [
      "1 anno",
      "3 anni",
      "5 anni",
      "Illimitata"
    ],
    "answer": "3 anni"
  },
  {
    "id": 1037,
    "category": "Legislazione PS",
    "question": "Qual è la durata tipica di una licenza di polizia (se non diversamente specificato)?",
    "options": [
      "1 anno",
      "3 anni",
      "5 anni",
      "Illimitata"
    ],
    "answer": "3 anni"
  },
  {
    "id": 1037,
    "category": "Legislazione PS",
    "question": "Qual è la durata tipica di una licenza di polizia (se non diversamente specificato)?",
    "options": [
      "1 anno",
      "3 anni",
      "5 anni",
      "Illimitata"
    ],
    "answer": "3 anni"
  },
  {
    "id": 1038,
    "category": "Legislazione PS",
    "question": "Cosa sono le 'ordinanze extra ordinem'?",
    "options": [
      "Ordinanze ordinarie",
      "Ordinanze di necessità e urgenza",
      "Circolari interne",
      "Sentenze"
    ],
    "answer": "Ordinanze di necessità e urgenza"
  },
  {
    "id": 1038,
    "category": "Legislazione PS",
    "question": "Cosa sono le 'ordinanze extra ordinem'?",
    "options": [
      "Ordinanze ordinarie",
      "Ordinanze di necessità e urgenza",
      "Circolari interne",
      "Sentenze"
    ],
    "answer": "Ordinanze di necessità e urgenza"
  },
  {
    "id": 1038,
    "category": "Legislazione PS",
    "question": "Cosa sono le 'ordinanze extra ordinem'?",
    "options": [
      "Ordinanze ordinarie",
      "Ordinanze di necessità e urgenza",
      "Circolari interne",
      "Sentenze"
    ],
    "answer": "Ordinanze di necessità e urgenza"
  },
  {
    "id": 1039,
    "category": "Legislazione PS",
    "question": "Chi può vietare la detenzione di armi ex art. 39 T.U.L.P.S.?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Maresciallo"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1039,
    "category": "Legislazione PS",
    "question": "Chi può vietare la detenzione di armi ex art. 39 T.U.L.P.S.?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Maresciallo"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1039,
    "category": "Legislazione PS",
    "question": "Chi può vietare la detenzione di armi ex art. 39 T.U.L.P.S.?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Maresciallo"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1040,
    "category": "Legislazione PS",
    "question": "Quale autorità dispone l'espulsione amministrativa dello straniero?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Giudice di Pace"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1040,
    "category": "Legislazione PS",
    "question": "Quale autorità dispone l'espulsione amministrativa dello straniero?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Giudice di Pace"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1040,
    "category": "Legislazione PS",
    "question": "Quale autorità dispone l'espulsione amministrativa dello straniero?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Giudice di Pace"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1041,
    "category": "Legislazione PS",
    "question": "Chi dispone il trattenimento dello straniero nei CPR?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Giudice",
      "La Polizia"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1041,
    "category": "Legislazione PS",
    "question": "Chi dispone il trattenimento dello straniero nei CPR?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Giudice",
      "La Polizia"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1041,
    "category": "Legislazione PS",
    "question": "Chi dispone il trattenimento dello straniero nei CPR?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Giudice",
      "La Polizia"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1042,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il Sindaco quale Autorità locale di P.S.?",
    "options": [
      "Dirigere le indagini",
      "Informare tempestivamente Prefetto e Questore su fatti rilevanti per l'ordine pubblico",
      "Arrestare i colpevoli",
      "Emettere sentenze"
    ],
    "answer": "Informare tempestivamente Prefetto e Questore su fatti rilevanti per l'ordine pubblico"
  },
  {
    "id": 1042,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il Sindaco quale Autorità locale di P.S.?",
    "options": [
      "Dirigere le indagini",
      "Informare tempestivamente Prefetto e Questore su fatti rilevanti per l'ordine pubblico",
      "Arrestare i colpevoli",
      "Emettere sentenze"
    ],
    "answer": "Informare tempestivamente Prefetto e Questore su fatti rilevanti per l'ordine pubblico"
  },
  {
    "id": 1042,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il Sindaco quale Autorità locale di P.S.?",
    "options": [
      "Dirigere le indagini",
      "Informare tempestivamente Prefetto e Questore su fatti rilevanti per l'ordine pubblico",
      "Arrestare i colpevoli",
      "Emettere sentenze"
    ],
    "answer": "Informare tempestivamente Prefetto e Questore su fatti rilevanti per l'ordine pubblico"
  },
  {
    "id": 1043,
    "category": "Legislazione PS",
    "question": "Qual è l'organo di coordinamento delle Forze di Polizia a livello provinciale?",
    "options": [
      "Il Consiglio Comunale",
      "Il Comitato Provinciale per l'Ordine e la Sicurezza Pubblica",
      "La Giunta Regionale",
      "Il Tribunale"
    ],
    "answer": "Il Comitato Provinciale per l'Ordine e la Sicurezza Pubblica"
  },
  {
    "id": 1043,
    "category": "Legislazione PS",
    "question": "Qual è l'organo di coordinamento delle Forze di Polizia a livello provinciale?",
    "options": [
      "Il Consiglio Comunale",
      "Il Comitato Provinciale per l'Ordine e la Sicurezza Pubblica",
      "La Giunta Regionale",
      "Il Tribunale"
    ],
    "answer": "Il Comitato Provinciale per l'Ordine e la Sicurezza Pubblica"
  },
  {
    "id": 1043,
    "category": "Legislazione PS",
    "question": "Qual è l'organo di coordinamento delle Forze di Polizia a livello provinciale?",
    "options": [
      "Il Consiglio Comunale",
      "Il Comitato Provinciale per l'Ordine e la Sicurezza Pubblica",
      "La Giunta Regionale",
      "Il Tribunale"
    ],
    "answer": "Il Comitato Provinciale per l'Ordine e la Sicurezza Pubblica"
  },
  {
    "id": 1044,
    "category": "Legislazione PS",
    "question": "Chi ha l'alta direzione dei servizi di ordine e sicurezza pubblica a livello nazionale?",
    "options": [
      "Il Presidente della Repubblica",
      "Il Ministro dell'Interno",
      "Il Capo della Polizia",
      "Il Presidente del Consiglio"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1044,
    "category": "Legislazione PS",
    "question": "Chi ha l'alta direzione dei servizi di ordine e sicurezza pubblica a livello nazionale?",
    "options": [
      "Il Presidente della Repubblica",
      "Il Ministro dell'Interno",
      "Il Capo della Polizia",
      "Il Presidente del Consiglio"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1044,
    "category": "Legislazione PS",
    "question": "Chi ha l'alta direzione dei servizi di ordine e sicurezza pubblica a livello nazionale?",
    "options": [
      "Il Presidente della Repubblica",
      "Il Ministro dell'Interno",
      "Il Capo della Polizia",
      "Il Presidente del Consiglio"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1045,
    "category": "Legislazione PS",
    "question": "Qual è il compito principale della Polizia di Stato secondo la L. 121/81?",
    "options": [
      "Difendere i confini",
      "Servire le istituzioni democratiche e i cittadini",
      "Gestire le carceri",
      "Riscuotere le tasse"
    ],
    "answer": "Servire le istituzioni democratiche e i cittadini"
  },
  {
    "id": 1045,
    "category": "Legislazione PS",
    "question": "Qual è il compito principale della Polizia di Stato secondo la L. 121/81?",
    "options": [
      "Difendere i confini",
      "Servire le istituzioni democratiche e i cittadini",
      "Gestire le carceri",
      "Riscuotere le tasse"
    ],
    "answer": "Servire le istituzioni democratiche e i cittadini"
  },
  {
    "id": 1045,
    "category": "Legislazione PS",
    "question": "Qual è il compito principale della Polizia di Stato secondo la L. 121/81?",
    "options": [
      "Difendere i confini",
      "Servire le istituzioni democratiche e i cittadini",
      "Gestire le carceri",
      "Riscuotere le tasse"
    ],
    "answer": "Servire le istituzioni democratiche e i cittadini"
  },
  {
    "id": 1046,
    "category": "Legislazione PS",
    "question": "Cosa si intende per 'esecutorietà' del provvedimento di polizia?",
    "options": [
      "Che deve essere firmato",
      "Che può essere attuato coattivamente anche contro la volontà dell'interessato",
      "Che è facoltativo",
      "Che scade dopo un anno"
    ],
    "answer": "Che può essere attuato coattivamente anche contro la volontà dell'interessato"
  },
  {
    "id": 1046,
    "category": "Legislazione PS",
    "question": "Cosa si intende per 'esecutorietà' del provvedimento di polizia?",
    "options": [
      "Che deve essere firmato",
      "Che può essere attuato coattivamente anche contro la volontà dell'interessato",
      "Che è facoltativo",
      "Che scade dopo un anno"
    ],
    "answer": "Che può essere attuato coattivamente anche contro la volontà dell'interessato"
  },
  {
    "id": 1046,
    "category": "Legislazione PS",
    "question": "Cosa si intende per 'esecutorietà' del provvedimento di polizia?",
    "options": [
      "Che deve essere firmato",
      "Che può essere attuato coattivamente anche contro la volontà dell'interessato",
      "Che è facoltativo",
      "Che scade dopo un anno"
    ],
    "answer": "Che può essere attuato coattivamente anche contro la volontà dell'interessato"
  },
  {
    "id": 1047,
    "category": "Legislazione PS",
    "question": "Quale autorità può sciogliere un consiglio comunale per infiltrazioni mafiose?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Presidente della Repubblica su proposta del Ministro dell'Interno",
      "Il Presidente della Regione"
    ],
    "answer": "Il Presidente della Repubblica su proposta del Ministro dell'Interno"
  },
  {
    "id": 1047,
    "category": "Legislazione PS",
    "question": "Quale autorità può sciogliere un consiglio comunale per infiltrazioni mafiose?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Presidente della Repubblica su proposta del Ministro dell'Interno",
      "Il Presidente della Regione"
    ],
    "answer": "Il Presidente della Repubblica su proposta del Ministro dell'Interno"
  },
  {
    "id": 1047,
    "category": "Legislazione PS",
    "question": "Quale autorità può sciogliere un consiglio comunale per infiltrazioni mafiose?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Presidente della Repubblica su proposta del Ministro dell'Interno",
      "Il Presidente della Regione"
    ],
    "answer": "Il Presidente della Repubblica su proposta del Ministro dell'Interno"
  },
  {
    "id": 1048,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la vendita di oggetti preziosi?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Camera di Commercio"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1048,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la vendita di oggetti preziosi?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Camera di Commercio"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1048,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la vendita di oggetti preziosi?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Camera di Commercio"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1049,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per istituti di vigilanza privata?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1049,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per istituti di vigilanza privata?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1049,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per istituti di vigilanza privata?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1050,
    "category": "Legislazione PS",
    "question": "Cosa comporta la revoca di una licenza di polizia?",
    "options": [
      "La sospensione temporanea",
      "La perdita definitiva del titolo autorizzatorio",
      "Una multa",
      "Un richiamo verbale"
    ],
    "answer": "La perdita definitiva del titolo autorizzatorio"
  },
  {
    "id": 1050,
    "category": "Legislazione PS",
    "question": "Cosa comporta la revoca di una licenza di polizia?",
    "options": [
      "La sospensione temporanea",
      "La perdita definitiva del titolo autorizzatorio",
      "Una multa",
      "Un richiamo verbale"
    ],
    "answer": "La perdita definitiva del titolo autorizzatorio"
  },
  {
    "id": 1050,
    "category": "Legislazione PS",
    "question": "Cosa comporta la revoca di una licenza di polizia?",
    "options": [
      "La sospensione temporanea",
      "La perdita definitiva del titolo autorizzatorio",
      "Una multa",
      "Un richiamo verbale"
    ],
    "answer": "La perdita definitiva del titolo autorizzatorio"
  },
  {
    "id": 1051,
    "category": "Legislazione PS",
    "question": "Quali sono le armi da guerra?",
    "options": [
      "Quelle destinate al moderno impiego bellico",
      "Le pistole calibro 9x21",
      "I fucili da caccia",
      "I coltelli a scatto"
    ],
    "answer": "Quelle destinate al moderno impiego bellico"
  },
  {
    "id": 1051,
    "category": "Legislazione PS",
    "question": "Quali sono le armi da guerra?",
    "options": [
      "Quelle destinate al moderno impiego bellico",
      "Le pistole calibro 9x21",
      "I fucili da caccia",
      "I coltelli a scatto"
    ],
    "answer": "Quelle destinate al moderno impiego bellico"
  },
  {
    "id": 1051,
    "category": "Legislazione PS",
    "question": "Quali sono le armi da guerra?",
    "options": [
      "Quelle destinate al moderno impiego bellico",
      "Le pistole calibro 9x21",
      "I fucili da caccia",
      "I coltelli a scatto"
    ],
    "answer": "Quelle destinate al moderno impiego bellico"
  },
  {
    "id": 1052,
    "category": "Legislazione PS",
    "question": "Chi classifica le armi comuni da sparo?",
    "options": [
      "Il Banco Nazionale di Prova di Gardone Val Trompia",
      "Il Ministero dell'Interno",
      "La Polizia di Stato",
      "L'Esercito Italiano"
    ],
    "answer": "Il Banco Nazionale di Prova di Gardone Val Trompia"
  },
  {
    "id": 1052,
    "category": "Legislazione PS",
    "question": "Chi classifica le armi comuni da sparo?",
    "options": [
      "Il Banco Nazionale di Prova di Gardone Val Trompia",
      "Il Ministero dell'Interno",
      "La Polizia di Stato",
      "L'Esercito Italiano"
    ],
    "answer": "Il Banco Nazionale di Prova di Gardone Val Trompia"
  },
  {
    "id": 1052,
    "category": "Legislazione PS",
    "question": "Chi classifica le armi comuni da sparo?",
    "options": [
      "Il Banco Nazionale di Prova di Gardone Val Trompia",
      "Il Ministero dell'Interno",
      "La Polizia di Stato",
      "L'Esercito Italiano"
    ],
    "answer": "Il Banco Nazionale di Prova di Gardone Val Trompia"
  },
  {
    "id": 1053,
    "category": "Legislazione PS",
    "question": "È consentito il porto di armi da guerra?",
    "options": [
      "Sì, con licenza",
      "No, è vietato",
      "Solo per i collezionisti",
      "Solo nei poligoni"
    ],
    "answer": "No, è vietato"
  },
  {
    "id": 1053,
    "category": "Legislazione PS",
    "question": "È consentito il porto di armi da guerra?",
    "options": [
      "Sì, con licenza",
      "No, è vietato",
      "Solo per i collezionisti",
      "Solo nei poligoni"
    ],
    "answer": "No, è vietato"
  },
  {
    "id": 1053,
    "category": "Legislazione PS",
    "question": "È consentito il porto di armi da guerra?",
    "options": [
      "Sì, con licenza",
      "No, è vietato",
      "Solo per i collezionisti",
      "Solo nei poligoni"
    ],
    "answer": "No, è vietato"
  },
  {
    "id": 1054,
    "category": "Legislazione PS",
    "question": "Qual è la sanzione per la detenzione illegale di arma da guerra?",
    "options": [
      "Arresto facoltativo",
      "Arresto obbligatorio",
      "Sanzione amministrativa",
      "Nessuna sanzione"
    ],
    "answer": "Arresto obbligatorio"
  },
  {
    "id": 1054,
    "category": "Legislazione PS",
    "question": "Qual è la sanzione per la detenzione illegale di arma da guerra?",
    "options": [
      "Arresto facoltativo",
      "Arresto obbligatorio",
      "Sanzione amministrativa",
      "Nessuna sanzione"
    ],
    "answer": "Arresto obbligatorio"
  },
  {
    "id": 1054,
    "category": "Legislazione PS",
    "question": "Qual è la sanzione per la detenzione illegale di arma da guerra?",
    "options": [
      "Arresto facoltativo",
      "Arresto obbligatorio",
      "Sanzione amministrativa",
      "Nessuna sanzione"
    ],
    "answer": "Arresto obbligatorio"
  },
  {
    "id": 1055,
    "category": "Legislazione PS",
    "question": "Cosa si intende per arma clandestina?",
    "options": [
      "Un'arma priva dei prescritti contrassegni (matricola abrasa o non catalogata)",
      "Un'arma nascosta",
      "Un'arma rubata",
      "Un'arma giocattolo"
    ],
    "answer": "Un'arma priva dei prescritti contrassegni (matricola abrasa o non catalogata)"
  },
  {
    "id": 1055,
    "category": "Legislazione PS",
    "question": "Cosa si intende per arma clandestina?",
    "options": [
      "Un'arma priva dei prescritti contrassegni (matricola abrasa o non catalogata)",
      "Un'arma nascosta",
      "Un'arma rubata",
      "Un'arma giocattolo"
    ],
    "answer": "Un'arma priva dei prescritti contrassegni (matricola abrasa o non catalogata)"
  },
  {
    "id": 1055,
    "category": "Legislazione PS",
    "question": "Cosa si intende per arma clandestina?",
    "options": [
      "Un'arma priva dei prescritti contrassegni (matricola abrasa o non catalogata)",
      "Un'arma nascosta",
      "Un'arma rubata",
      "Un'arma giocattolo"
    ],
    "answer": "Un'arma priva dei prescritti contrassegni (matricola abrasa o non catalogata)"
  },
  {
    "id": 1056,
    "category": "Legislazione PS",
    "question": "È consentito l'arresto per la detenzione abusiva di munizioni per armi comuni?",
    "options": [
      "Sì, sempre",
      "No, non è consentito",
      "Solo se in flagranza",
      "Solo se recidivi"
    ],
    "answer": "No, non è consentito"
  },
  {
    "id": 1056,
    "category": "Legislazione PS",
    "question": "È consentito l'arresto per la detenzione abusiva di munizioni per armi comuni?",
    "options": [
      "Sì, sempre",
      "No, non è consentito",
      "Solo se in flagranza",
      "Solo se recidivi"
    ],
    "answer": "No, non è consentito"
  },
  {
    "id": 1056,
    "category": "Legislazione PS",
    "question": "È consentito l'arresto per la detenzione abusiva di munizioni per armi comuni?",
    "options": [
      "Sì, sempre",
      "No, non è consentito",
      "Solo se in flagranza",
      "Solo se recidivi"
    ],
    "answer": "No, non è consentito"
  },
  {
    "id": 1057,
    "category": "Legislazione PS",
    "question": "Quale reato commette chi porta fuori dalla propria abitazione un coltello a scatto senza giustificato motivo?",
    "options": [
      "Porto abusivo di armi (art. 699 c.p.)",
      "Porto di oggetti atti ad offendere (art. 4 L. 110/75)",
      "Nessun reato",
      "Illecito amministrativo"
    ],
    "answer": "Porto abusivo di armi (art. 699 c.p.)"
  },
  {
    "id": 1057,
    "category": "Legislazione PS",
    "question": "Quale reato commette chi porta fuori dalla propria abitazione un coltello a scatto senza giustificato motivo?",
    "options": [
      "Porto abusivo di armi (art. 699 c.p.)",
      "Porto di oggetti atti ad offendere (art. 4 L. 110/75)",
      "Nessun reato",
      "Illecito amministrativo"
    ],
    "answer": "Porto abusivo di armi (art. 699 c.p.)"
  },
  {
    "id": 1057,
    "category": "Legislazione PS",
    "question": "Quale reato commette chi porta fuori dalla propria abitazione un coltello a scatto senza giustificato motivo?",
    "options": [
      "Porto abusivo di armi (art. 699 c.p.)",
      "Porto di oggetti atti ad offendere (art. 4 L. 110/75)",
      "Nessun reato",
      "Illecito amministrativo"
    ],
    "answer": "Porto abusivo di armi (art. 699 c.p.)"
  },
  {
    "id": 1058,
    "category": "Legislazione PS",
    "question": "Cosa prevede l'art. 6 bis della Legge 401/1989?",
    "options": [
      "Il divieto di fumo negli stadi",
      "Il divieto di lancio di materiale pericoloso in occasione di manifestazioni sportive",
      "L'obbligo del biglietto nominativo",
      "La tessera del tifoso"
    ],
    "answer": "Il divieto di lancio di materiale pericoloso in occasione di manifestazioni sportive"
  },
  {
    "id": 1058,
    "category": "Legislazione PS",
    "question": "Cosa prevede l'art. 6 bis della Legge 401/1989?",
    "options": [
      "Il divieto di fumo negli stadi",
      "Il divieto di lancio di materiale pericoloso in occasione di manifestazioni sportive",
      "L'obbligo del biglietto nominativo",
      "La tessera del tifoso"
    ],
    "answer": "Il divieto di lancio di materiale pericoloso in occasione di manifestazioni sportive"
  },
  {
    "id": 1058,
    "category": "Legislazione PS",
    "question": "Cosa prevede l'art. 6 bis della Legge 401/1989?",
    "options": [
      "Il divieto di fumo negli stadi",
      "Il divieto di lancio di materiale pericoloso in occasione di manifestazioni sportive",
      "L'obbligo del biglietto nominativo",
      "La tessera del tifoso"
    ],
    "answer": "Il divieto di lancio di materiale pericoloso in occasione di manifestazioni sportive"
  },
  {
    "id": 1059,
    "category": "Legislazione PS",
    "question": "Quando si configura il reato di invasione di campo (art. 6 bis L. 401/89)?",
    "options": [
      "Solo se la partita viene sospesa",
      "Quando si supera indebitamente una recinzione o si invade il terreno di gioco",
      "Solo se si aggredisce l'arbitro",
      "Solo se si è ubriachi"
    ],
    "answer": "Quando si supera indebitamente una recinzione o si invade il terreno di gioco"
  },
  {
    "id": 1059,
    "category": "Legislazione PS",
    "question": "Quando si configura il reato di invasione di campo (art. 6 bis L. 401/89)?",
    "options": [
      "Solo se la partita viene sospesa",
      "Quando si supera indebitamente una recinzione o si invade il terreno di gioco",
      "Solo se si aggredisce l'arbitro",
      "Solo se si è ubriachi"
    ],
    "answer": "Quando si supera indebitamente una recinzione o si invade il terreno di gioco"
  },
  {
    "id": 1059,
    "category": "Legislazione PS",
    "question": "Quando si configura il reato di invasione di campo (art. 6 bis L. 401/89)?",
    "options": [
      "Solo se la partita viene sospesa",
      "Quando si supera indebitamente una recinzione o si invade il terreno di gioco",
      "Solo se si aggredisce l'arbitro",
      "Solo se si è ubriachi"
    ],
    "answer": "Quando si supera indebitamente una recinzione o si invade il terreno di gioco"
  },
  {
    "id": 1060,
    "category": "Legislazione PS",
    "question": "È consentito l'arresto in flagranza per il reato di invasione di campo semplice (senza aggravanti)?",
    "options": [
      "Sì",
      "No, trattandosi di contravvenzione",
      "Solo se recidivi",
      "A discrezione dell'agente"
    ],
    "answer": "No, trattandosi di contravvenzione"
  },
  {
    "id": 1060,
    "category": "Legislazione PS",
    "question": "È consentito l'arresto in flagranza per il reato di invasione di campo semplice (senza aggravanti)?",
    "options": [
      "Sì",
      "No, trattandosi di contravvenzione",
      "Solo se recidivi",
      "A discrezione dell'agente"
    ],
    "answer": "No, trattandosi di contravvenzione"
  },
  {
    "id": 1060,
    "category": "Legislazione PS",
    "question": "È consentito l'arresto in flagranza per il reato di invasione di campo semplice (senza aggravanti)?",
    "options": [
      "Sì",
      "No, trattandosi di contravvenzione",
      "Solo se recidivi",
      "A discrezione dell'agente"
    ],
    "answer": "No, trattandosi di contravvenzione"
  },
  {
    "id": 1061,
    "category": "Legislazione PS",
    "question": "Cosa punisce l'art. 6 ter della Legge 401/1989?",
    "options": [
      "Il possesso di artifici pirotecnici in occasione di manifestazioni sportive",
      "L'ingresso senza biglietto",
      "Il coro razzista",
      "La vendita di bevande alcoliche"
    ],
    "answer": "Il possesso di artifici pirotecnici in occasione di manifestazioni sportive"
  },
  {
    "id": 1061,
    "category": "Legislazione PS",
    "question": "Cosa punisce l'art. 6 ter della Legge 401/1989?",
    "options": [
      "Il possesso di artifici pirotecnici in occasione di manifestazioni sportive",
      "L'ingresso senza biglietto",
      "Il coro razzista",
      "La vendita di bevande alcoliche"
    ],
    "answer": "Il possesso di artifici pirotecnici in occasione di manifestazioni sportive"
  },
  {
    "id": 1061,
    "category": "Legislazione PS",
    "question": "Cosa punisce l'art. 6 ter della Legge 401/1989?",
    "options": [
      "Il possesso di artifici pirotecnici in occasione di manifestazioni sportive",
      "L'ingresso senza biglietto",
      "Il coro razzista",
      "La vendita di bevande alcoliche"
    ],
    "answer": "Il possesso di artifici pirotecnici in occasione di manifestazioni sportive"
  },
  {
    "id": 1062,
    "category": "Legislazione PS",
    "question": "Cos'è la 'flagranza differita'?",
    "options": [
      "L'arresto eseguito entro 48 ore sulla base di documentazione video-fotografica",
      "L'arresto eseguito il giorno dopo",
      "L'arresto su mandato del giudice",
      "L'arresto in un altro comune"
    ],
    "answer": "L'arresto eseguito entro 48 ore sulla base di documentazione video-fotografica"
  },
  {
    "id": 1062,
    "category": "Legislazione PS",
    "question": "Cos'è la 'flagranza differita'?",
    "options": [
      "L'arresto eseguito entro 48 ore sulla base di documentazione video-fotografica",
      "L'arresto eseguito il giorno dopo",
      "L'arresto su mandato del giudice",
      "L'arresto in un altro comune"
    ],
    "answer": "L'arresto eseguito entro 48 ore sulla base di documentazione video-fotografica"
  },
  {
    "id": 1062,
    "category": "Legislazione PS",
    "question": "Cos'è la 'flagranza differita'?",
    "options": [
      "L'arresto eseguito entro 48 ore sulla base di documentazione video-fotografica",
      "L'arresto eseguito il giorno dopo",
      "L'arresto su mandato del giudice",
      "L'arresto in un altro comune"
    ],
    "answer": "L'arresto eseguito entro 48 ore sulla base di documentazione video-fotografica"
  },
  {
    "id": 1063,
    "category": "Legislazione PS",
    "question": "Qual è la pena per lesioni gravi a un pubblico ufficiale in servizio di ordine pubblico durante manifestazioni sportive?",
    "options": [
      "Reclusione da 4 a 10 anni",
      "Multa",
      "Arresto fino a 3 mesi",
      "Reclusione fino a 1 anno"
    ],
    "answer": "Reclusione da 4 a 10 anni"
  },
  {
    "id": 1063,
    "category": "Legislazione PS",
    "question": "Qual è la pena per lesioni gravi a un pubblico ufficiale in servizio di ordine pubblico durante manifestazioni sportive?",
    "options": [
      "Reclusione da 4 a 10 anni",
      "Multa",
      "Arresto fino a 3 mesi",
      "Reclusione fino a 1 anno"
    ],
    "answer": "Reclusione da 4 a 10 anni"
  },
  {
    "id": 1063,
    "category": "Legislazione PS",
    "question": "Qual è la pena per lesioni gravi a un pubblico ufficiale in servizio di ordine pubblico durante manifestazioni sportive?",
    "options": [
      "Reclusione da 4 a 10 anni",
      "Multa",
      "Arresto fino a 3 mesi",
      "Reclusione fino a 1 anno"
    ],
    "answer": "Reclusione da 4 a 10 anni"
  },
  {
    "id": 1064,
    "category": "Legislazione PS",
    "question": "Cosa vieta l'art. 2 bis della Legge 8/2007 negli stadi?",
    "options": [
      "L'introduzione di striscioni incitanti alla violenza o recanti ingiurie",
      "L'uso di tamburi",
      "L'ingresso ai minori",
      "Il consumo di cibo"
    ],
    "answer": "L'introduzione di striscioni incitanti alla violenza o recanti ingiurie"
  },
  {
    "id": 1064,
    "category": "Legislazione PS",
    "question": "Cosa vieta l'art. 2 bis della Legge 8/2007 negli stadi?",
    "options": [
      "L'introduzione di striscioni incitanti alla violenza o recanti ingiurie",
      "L'uso di tamburi",
      "L'ingresso ai minori",
      "Il consumo di cibo"
    ],
    "answer": "L'introduzione di striscioni incitanti alla violenza o recanti ingiurie"
  },
  {
    "id": 1064,
    "category": "Legislazione PS",
    "question": "Cosa vieta l'art. 2 bis della Legge 8/2007 negli stadi?",
    "options": [
      "L'introduzione di striscioni incitanti alla violenza o recanti ingiurie",
      "L'uso di tamburi",
      "L'ingresso ai minori",
      "Il consumo di cibo"
    ],
    "answer": "L'introduzione di striscioni incitanti alla violenza o recanti ingiurie"
  },
  {
    "id": 1065,
    "category": "Legislazione PS",
    "question": "Chi irroga la sanzione amministrativa per la violazione del regolamento d'uso dell'impianto sportivo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Società Sportiva"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1065,
    "category": "Legislazione PS",
    "question": "Chi irroga la sanzione amministrativa per la violazione del regolamento d'uso dell'impianto sportivo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Società Sportiva"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1065,
    "category": "Legislazione PS",
    "question": "Chi irroga la sanzione amministrativa per la violazione del regolamento d'uso dell'impianto sportivo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Società Sportiva"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1066,
    "category": "Legislazione PS",
    "question": "Chi compone il G.O.S. (Gruppo Operativo Sicurezza)?",
    "options": [
      "Rappresentanti di Polizia, Vigili del Fuoco, Sanitari, Società sportiva, Polizia Municipale",
      "Solo Polizia di Stato",
      "Solo Carabinieri",
      "Sindaco e Assessori"
    ],
    "answer": "Rappresentanti di Polizia, Vigili del Fuoco, Sanitari, Società sportiva, Polizia Municipale"
  },
  {
    "id": 1066,
    "category": "Legislazione PS",
    "question": "Chi compone il G.O.S. (Gruppo Operativo Sicurezza)?",
    "options": [
      "Rappresentanti di Polizia, Vigili del Fuoco, Sanitari, Società sportiva, Polizia Municipale",
      "Solo Polizia di Stato",
      "Solo Carabinieri",
      "Sindaco e Assessori"
    ],
    "answer": "Rappresentanti di Polizia, Vigili del Fuoco, Sanitari, Società sportiva, Polizia Municipale"
  },
  {
    "id": 1066,
    "category": "Legislazione PS",
    "question": "Chi compone il G.O.S. (Gruppo Operativo Sicurezza)?",
    "options": [
      "Rappresentanti di Polizia, Vigili del Fuoco, Sanitari, Società sportiva, Polizia Municipale",
      "Solo Polizia di Stato",
      "Solo Carabinieri",
      "Sindaco e Assessori"
    ],
    "answer": "Rappresentanti di Polizia, Vigili del Fuoco, Sanitari, Società sportiva, Polizia Municipale"
  },
  {
    "id": 1067,
    "category": "Legislazione PS",
    "question": "Chi coordina il G.O.S.?",
    "options": [
      "Un funzionario di Polizia designato dal Questore",
      "Il Comandante dei Vigili del Fuoco",
      "Il Presidente della squadra",
      "Il Sindaco"
    ],
    "answer": "Un funzionario di Polizia designato dal Questore"
  },
  {
    "id": 1067,
    "category": "Legislazione PS",
    "question": "Chi coordina il G.O.S.?",
    "options": [
      "Un funzionario di Polizia designato dal Questore",
      "Il Comandante dei Vigili del Fuoco",
      "Il Presidente della squadra",
      "Il Sindaco"
    ],
    "answer": "Un funzionario di Polizia designato dal Questore"
  },
  {
    "id": 1067,
    "category": "Legislazione PS",
    "question": "Chi coordina il G.O.S.?",
    "options": [
      "Un funzionario di Polizia designato dal Questore",
      "Il Comandante dei Vigili del Fuoco",
      "Il Presidente della squadra",
      "Il Sindaco"
    ],
    "answer": "Un funzionario di Polizia designato dal Questore"
  },
  {
    "id": 1068,
    "category": "Legislazione PS",
    "question": "Qual è il compito del G.O.S.?",
    "options": [
      "Verificare le misure organizzative e vigilare sulla sicurezza dell'impianto",
      "Vendere i biglietti",
      "Allenare la squadra",
      "Pulire lo stadio"
    ],
    "answer": "Verificare le misure organizzative e vigilare sulla sicurezza dell'impianto"
  },
  {
    "id": 1068,
    "category": "Legislazione PS",
    "question": "Qual è il compito del G.O.S.?",
    "options": [
      "Verificare le misure organizzative e vigilare sulla sicurezza dell'impianto",
      "Vendere i biglietti",
      "Allenare la squadra",
      "Pulire lo stadio"
    ],
    "answer": "Verificare le misure organizzative e vigilare sulla sicurezza dell'impianto"
  },
  {
    "id": 1068,
    "category": "Legislazione PS",
    "question": "Qual è il compito del G.O.S.?",
    "options": [
      "Verificare le misure organizzative e vigilare sulla sicurezza dell'impianto",
      "Vendere i biglietti",
      "Allenare la squadra",
      "Pulire lo stadio"
    ],
    "answer": "Verificare le misure organizzative e vigilare sulla sicurezza dell'impianto"
  },
  {
    "id": 1069,
    "category": "Legislazione PS",
    "question": "Chi ha competenza diretta in materia di fabbricazione di armi da guerra?",
    "options": [
      "Il Ministro dell'Interno",
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1069,
    "category": "Legislazione PS",
    "question": "Chi ha competenza diretta in materia di fabbricazione di armi da guerra?",
    "options": [
      "Il Ministro dell'Interno",
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1069,
    "category": "Legislazione PS",
    "question": "Chi ha competenza diretta in materia di fabbricazione di armi da guerra?",
    "options": [
      "Il Ministro dell'Interno",
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1070,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la fabbricazione di esplosivi di II e III categoria?",
    "options": [
      "Il Ministro dell'Interno (o il Prefetto su delega per l'esportazione)",
      "Il Questore",
      "Il Sindaco",
      "La Regione"
    ],
    "answer": "Il Ministro dell'Interno (o il Prefetto su delega per l'esportazione)"
  },
  {
    "id": 1070,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la fabbricazione di esplosivi di II e III categoria?",
    "options": [
      "Il Ministro dell'Interno (o il Prefetto su delega per l'esportazione)",
      "Il Questore",
      "Il Sindaco",
      "La Regione"
    ],
    "answer": "Il Ministro dell'Interno (o il Prefetto su delega per l'esportazione)"
  },
  {
    "id": 1070,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la fabbricazione di esplosivi di II e III categoria?",
    "options": [
      "Il Ministro dell'Interno (o il Prefetto su delega per l'esportazione)",
      "Il Questore",
      "Il Sindaco",
      "La Regione"
    ],
    "answer": "Il Ministro dell'Interno (o il Prefetto su delega per l'esportazione)"
  },
  {
    "id": 1071,
    "category": "Legislazione PS",
    "question": "Chi rilascia il nulla osta per l'acquisto di armi?",
    "options": [
      "Il Questore (o Dirigenti Commissariati delegati)",
      "Il Prefetto",
      "Il Sindaco",
      "L'armiere"
    ],
    "answer": "Il Questore (o Dirigenti Commissariati delegati)"
  },
  {
    "id": 1071,
    "category": "Legislazione PS",
    "question": "Chi rilascia il nulla osta per l'acquisto di armi?",
    "options": [
      "Il Questore (o Dirigenti Commissariati delegati)",
      "Il Prefetto",
      "Il Sindaco",
      "L'armiere"
    ],
    "answer": "Il Questore (o Dirigenti Commissariati delegati)"
  },
  {
    "id": 1071,
    "category": "Legislazione PS",
    "question": "Chi rilascia il nulla osta per l'acquisto di armi?",
    "options": [
      "Il Questore (o Dirigenti Commissariati delegati)",
      "Il Prefetto",
      "Il Sindaco",
      "L'armiere"
    ],
    "answer": "Il Questore (o Dirigenti Commissariati delegati)"
  },
  {
    "id": 1072,
    "category": "Legislazione PS",
    "question": "Chi approva la nomina a guardia particolare giurata?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il datore di lavoro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1072,
    "category": "Legislazione PS",
    "question": "Chi approva la nomina a guardia particolare giurata?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il datore di lavoro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1072,
    "category": "Legislazione PS",
    "question": "Chi approva la nomina a guardia particolare giurata?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il datore di lavoro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1073,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la vendita di alcolici?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Regione"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1073,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la vendita di alcolici?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Regione"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1073,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la vendita di alcolici?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Regione"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1074,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per sale pubbliche da gioco (biliardi, ecc.)?",
    "options": [
      "Il Sindaco (ex art. 86 TULPS)",
      "Il Questore",
      "Il Prefetto",
      "Il Monopolio di Stato"
    ],
    "answer": "Il Sindaco (ex art. 86 TULPS)"
  },
  {
    "id": 1074,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per sale pubbliche da gioco (biliardi, ecc.)?",
    "options": [
      "Il Sindaco (ex art. 86 TULPS)",
      "Il Questore",
      "Il Prefetto",
      "Il Monopolio di Stato"
    ],
    "answer": "Il Sindaco (ex art. 86 TULPS)"
  },
  {
    "id": 1074,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per sale pubbliche da gioco (biliardi, ecc.)?",
    "options": [
      "Il Sindaco (ex art. 86 TULPS)",
      "Il Questore",
      "Il Prefetto",
      "Il Monopolio di Stato"
    ],
    "answer": "Il Sindaco (ex art. 86 TULPS)"
  },
  {
    "id": 1075,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio di scommesse (art. 88 TULPS)?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "L'AAMS"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1075,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio di scommesse (art. 88 TULPS)?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "L'AAMS"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1075,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio di scommesse (art. 88 TULPS)?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "L'AAMS"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1076,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il pubblico esercente con la licenza?",
    "options": [
      "Tenerla esposta nel locale in luogo visibile",
      "Custodirla in cassaforte",
      "Portarla sempre con sé",
      "Inviarla al commercialista"
    ],
    "answer": "Tenerla esposta nel locale in luogo visibile"
  },
  {
    "id": 1076,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il pubblico esercente con la licenza?",
    "options": [
      "Tenerla esposta nel locale in luogo visibile",
      "Custodirla in cassaforte",
      "Portarla sempre con sé",
      "Inviarla al commercialista"
    ],
    "answer": "Tenerla esposta nel locale in luogo visibile"
  },
  {
    "id": 1076,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il pubblico esercente con la licenza?",
    "options": [
      "Tenerla esposta nel locale in luogo visibile",
      "Custodirla in cassaforte",
      "Portarla sempre con sé",
      "Inviarla al commercialista"
    ],
    "answer": "Tenerla esposta nel locale in luogo visibile"
  },
  {
    "id": 1077,
    "category": "Legislazione PS",
    "question": "È consentita la somministrazione di alcolici a minori di 16 anni?",
    "options": [
      "No, è reato (art. 689 c.p.)",
      "Sì, se accompagnati",
      "Sì, ma solo birra",
      "A discrezione del gestore"
    ],
    "answer": "No, è reato (art. 689 c.p.)"
  },
  {
    "id": 1077,
    "category": "Legislazione PS",
    "question": "È consentita la somministrazione di alcolici a minori di 16 anni?",
    "options": [
      "No, è reato (art. 689 c.p.)",
      "Sì, se accompagnati",
      "Sì, ma solo birra",
      "A discrezione del gestore"
    ],
    "answer": "No, è reato (art. 689 c.p.)"
  },
  {
    "id": 1077,
    "category": "Legislazione PS",
    "question": "È consentita la somministrazione di alcolici a minori di 16 anni?",
    "options": [
      "No, è reato (art. 689 c.p.)",
      "Sì, se accompagnati",
      "Sì, ma solo birra",
      "A discrezione del gestore"
    ],
    "answer": "No, è reato (art. 689 c.p.)"
  },
  {
    "id": 1078,
    "category": "Legislazione PS",
    "question": "Cosa rischia chi somministra alcolici a persona in stato di manifesta ubriachezza?",
    "options": [
      "Reato (art. 691 c.p.) e sospensione attività",
      "Solo una multa",
      "Nulla",
      "Un richiamo"
    ],
    "answer": "Reato (art. 691 c.p.) e sospensione attività"
  },
  {
    "id": 1078,
    "category": "Legislazione PS",
    "question": "Cosa rischia chi somministra alcolici a persona in stato di manifesta ubriachezza?",
    "options": [
      "Reato (art. 691 c.p.) e sospensione attività",
      "Solo una multa",
      "Nulla",
      "Un richiamo"
    ],
    "answer": "Reato (art. 691 c.p.) e sospensione attività"
  },
  {
    "id": 1078,
    "category": "Legislazione PS",
    "question": "Cosa rischia chi somministra alcolici a persona in stato di manifesta ubriachezza?",
    "options": [
      "Reato (art. 691 c.p.) e sospensione attività",
      "Solo una multa",
      "Nulla",
      "Un richiamo"
    ],
    "answer": "Reato (art. 691 c.p.) e sospensione attività"
  },
  {
    "id": 1079,
    "category": "Legislazione PS",
    "question": "Chi è competente per l'espulsione dello straniero per motivi di ordine pubblico?",
    "options": [
      "Il Ministro dell'Interno",
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1079,
    "category": "Legislazione PS",
    "question": "Chi è competente per l'espulsione dello straniero per motivi di ordine pubblico?",
    "options": [
      "Il Ministro dell'Interno",
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1079,
    "category": "Legislazione PS",
    "question": "Chi è competente per l'espulsione dello straniero per motivi di ordine pubblico?",
    "options": [
      "Il Ministro dell'Interno",
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1080,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il commercio di oggetti preziosi?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Camera di Commercio"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1080,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il commercio di oggetti preziosi?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Camera di Commercio"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1080,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il commercio di oggetti preziosi?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Camera di Commercio"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1081,
    "category": "Legislazione PS",
    "question": "Chi rilascia il permesso di soggiorno?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministero del Lavoro"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1081,
    "category": "Legislazione PS",
    "question": "Chi rilascia il permesso di soggiorno?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministero del Lavoro"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1081,
    "category": "Legislazione PS",
    "question": "Chi rilascia il permesso di soggiorno?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministero del Lavoro"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1082,
    "category": "Legislazione PS",
    "question": "Chi può dichiarare lo stato di pericolo pubblico?",
    "options": [
      "Il Ministro dell'Interno",
      "Il Presidente della Repubblica",
      "Il Prefetto",
      "Il Capo della Polizia"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1082,
    "category": "Legislazione PS",
    "question": "Chi può dichiarare lo stato di pericolo pubblico?",
    "options": [
      "Il Ministro dell'Interno",
      "Il Presidente della Repubblica",
      "Il Prefetto",
      "Il Capo della Polizia"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1082,
    "category": "Legislazione PS",
    "question": "Chi può dichiarare lo stato di pericolo pubblico?",
    "options": [
      "Il Ministro dell'Interno",
      "Il Presidente della Repubblica",
      "Il Prefetto",
      "Il Capo della Polizia"
    ],
    "answer": "Il Ministro dell'Interno"
  },
  {
    "id": 1083,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per collezione di armi comuni da sparo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministero"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1083,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per collezione di armi comuni da sparo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministero"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1083,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per collezione di armi comuni da sparo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministero"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1084,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio dell'arte fotografica in forma ambulante?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "La Regione"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1084,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio dell'arte fotografica in forma ambulante?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "La Regione"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1084,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio dell'arte fotografica in forma ambulante?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "La Regione"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1085,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per spettacoli pirotecnici (sparo di mine)?",
    "options": [
      "Il Prefetto (permesso speciale) o l'Autorità locale di PS (licenza)",
      "Il Questore",
      "Il Sindaco",
      "I Vigili del Fuoco"
    ],
    "answer": "Il Prefetto (permesso speciale) o l'Autorità locale di PS (licenza)"
  },
  {
    "id": 1085,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per spettacoli pirotecnici (sparo di mine)?",
    "options": [
      "Il Prefetto (permesso speciale) o l'Autorità locale di PS (licenza)",
      "Il Questore",
      "Il Sindaco",
      "I Vigili del Fuoco"
    ],
    "answer": "Il Prefetto (permesso speciale) o l'Autorità locale di PS (licenza)"
  },
  {
    "id": 1085,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per spettacoli pirotecnici (sparo di mine)?",
    "options": [
      "Il Prefetto (permesso speciale) o l'Autorità locale di PS (licenza)",
      "Il Questore",
      "Il Sindaco",
      "I Vigili del Fuoco"
    ],
    "answer": "Il Prefetto (permesso speciale) o l'Autorità locale di PS (licenza)"
  },
  {
    "id": 1086,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per allevamento di colombi viaggiatori?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "La ASL"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1086,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per allevamento di colombi viaggiatori?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "La ASL"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1086,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per allevamento di colombi viaggiatori?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "La ASL"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1087,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per agenzie di recupero crediti?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Tribunale"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1087,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per agenzie di recupero crediti?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Tribunale"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1087,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per agenzie di recupero crediti?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Tribunale"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1088,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per agenzie matrimoniali?",
    "options": [
      "Il Questore (basta comunicazione)",
      "Il Sindaco",
      "Il Prefetto",
      "Il Giudice"
    ],
    "answer": "Il Questore (basta comunicazione)"
  },
  {
    "id": 1088,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per agenzie matrimoniali?",
    "options": [
      "Il Questore (basta comunicazione)",
      "Il Sindaco",
      "Il Prefetto",
      "Il Giudice"
    ],
    "answer": "Il Questore (basta comunicazione)"
  },
  {
    "id": 1088,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per agenzie matrimoniali?",
    "options": [
      "Il Questore (basta comunicazione)",
      "Il Sindaco",
      "Il Prefetto",
      "Il Giudice"
    ],
    "answer": "Il Questore (basta comunicazione)"
  },
  {
    "id": 1089,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'attività di investigatore privato?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il Ministero della Giustizia"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1089,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'attività di investigatore privato?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il Ministero della Giustizia"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1089,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'attività di investigatore privato?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il Ministero della Giustizia"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1090,
    "category": "Legislazione PS",
    "question": "Quale autorità può sospendere una licenza commerciale rilasciata dal Sindaco per motivi di ordine pubblico?",
    "options": [
      "Il Questore (ex art. 100 TULPS) o il Prefetto (richiesta al Sindaco)",
      "Solo il Sindaco",
      "Nessuno",
      "Il Giudice"
    ],
    "answer": "Il Questore (ex art. 100 TULPS) o il Prefetto (richiesta al Sindaco)"
  },
  {
    "id": 1090,
    "category": "Legislazione PS",
    "question": "Quale autorità può sospendere una licenza commerciale rilasciata dal Sindaco per motivi di ordine pubblico?",
    "options": [
      "Il Questore (ex art. 100 TULPS) o il Prefetto (richiesta al Sindaco)",
      "Solo il Sindaco",
      "Nessuno",
      "Il Giudice"
    ],
    "answer": "Il Questore (ex art. 100 TULPS) o il Prefetto (richiesta al Sindaco)"
  },
  {
    "id": 1090,
    "category": "Legislazione PS",
    "question": "Quale autorità può sospendere una licenza commerciale rilasciata dal Sindaco per motivi di ordine pubblico?",
    "options": [
      "Il Questore (ex art. 100 TULPS) o il Prefetto (richiesta al Sindaco)",
      "Solo il Sindaco",
      "Nessuno",
      "Il Giudice"
    ],
    "answer": "Il Questore (ex art. 100 TULPS) o il Prefetto (richiesta al Sindaco)"
  },
  {
    "id": 1091,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il promotore di una riunione in luogo pubblico?",
    "options": [
      "Dare preavviso al Questore almeno 3 giorni prima",
      "Chiedere autorizzazione al Sindaco",
      "Nulla",
      "Informare i giornali"
    ],
    "answer": "Dare preavviso al Questore almeno 3 giorni prima"
  },
  {
    "id": 1091,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il promotore di una riunione in luogo pubblico?",
    "options": [
      "Dare preavviso al Questore almeno 3 giorni prima",
      "Chiedere autorizzazione al Sindaco",
      "Nulla",
      "Informare i giornali"
    ],
    "answer": "Dare preavviso al Questore almeno 3 giorni prima"
  },
  {
    "id": 1091,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il promotore di una riunione in luogo pubblico?",
    "options": [
      "Dare preavviso al Questore almeno 3 giorni prima",
      "Chiedere autorizzazione al Sindaco",
      "Nulla",
      "Informare i giornali"
    ],
    "answer": "Dare preavviso al Questore almeno 3 giorni prima"
  },
  {
    "id": 1092,
    "category": "Legislazione PS",
    "question": "Cosa si intende per 'manifestazione sediziosa'?",
    "options": [
      "Manifestazione che ha potenzialità sovversiva dell'ordine pubblico",
      "Manifestazione rumorosa",
      "Manifestazione non autorizzata",
      "Manifestazione sportiva"
    ],
    "answer": "Manifestazione che ha potenzialità sovversiva dell'ordine pubblico"
  },
  {
    "id": 1092,
    "category": "Legislazione PS",
    "question": "Cosa si intende per 'manifestazione sediziosa'?",
    "options": [
      "Manifestazione che ha potenzialità sovversiva dell'ordine pubblico",
      "Manifestazione rumorosa",
      "Manifestazione non autorizzata",
      "Manifestazione sportiva"
    ],
    "answer": "Manifestazione che ha potenzialità sovversiva dell'ordine pubblico"
  },
  {
    "id": 1092,
    "category": "Legislazione PS",
    "question": "Cosa si intende per 'manifestazione sediziosa'?",
    "options": [
      "Manifestazione che ha potenzialità sovversiva dell'ordine pubblico",
      "Manifestazione rumorosa",
      "Manifestazione non autorizzata",
      "Manifestazione sportiva"
    ],
    "answer": "Manifestazione che ha potenzialità sovversiva dell'ordine pubblico"
  },
  {
    "id": 1093,
    "category": "Legislazione PS",
    "question": "Chi può sciogliere una riunione in luogo pubblico?",
    "options": [
      "Gli Ufficiali di P.S.",
      "Il Sindaco",
      "I Vigili Urbani",
      "I partecipanti stessi"
    ],
    "answer": "Gli Ufficiali di P.S."
  },
  {
    "id": 1093,
    "category": "Legislazione PS",
    "question": "Chi può sciogliere una riunione in luogo pubblico?",
    "options": [
      "Gli Ufficiali di P.S.",
      "Il Sindaco",
      "I Vigili Urbani",
      "I partecipanti stessi"
    ],
    "answer": "Gli Ufficiali di P.S."
  },
  {
    "id": 1093,
    "category": "Legislazione PS",
    "question": "Chi può sciogliere una riunione in luogo pubblico?",
    "options": [
      "Gli Ufficiali di P.S.",
      "Il Sindaco",
      "I Vigili Urbani",
      "I partecipanti stessi"
    ],
    "answer": "Gli Ufficiali di P.S."
  },
  {
    "id": 1094,
    "category": "Legislazione PS",
    "question": "Qual è la sanzione per chi partecipa a una riunione vietata?",
    "options": [
      "Arresto e ammenda",
      "Solo ammenda",
      "Solo arresto",
      "Nessuna sanzione"
    ],
    "answer": "Arresto e ammenda"
  },
  {
    "id": 1094,
    "category": "Legislazione PS",
    "question": "Qual è la sanzione per chi partecipa a una riunione vietata?",
    "options": [
      "Arresto e ammenda",
      "Solo ammenda",
      "Solo arresto",
      "Nessuna sanzione"
    ],
    "answer": "Arresto e ammenda"
  },
  {
    "id": 1094,
    "category": "Legislazione PS",
    "question": "Qual è la sanzione per chi partecipa a una riunione vietata?",
    "options": [
      "Arresto e ammenda",
      "Solo ammenda",
      "Solo arresto",
      "Nessuna sanzione"
    ],
    "answer": "Arresto e ammenda"
  },
  {
    "id": 1095,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il Questore se vieta una riunione?",
    "options": [
      "Darne notizia ai promotori con processo verbale",
      "Pubblicarlo sui giornali",
      "Dirlo in televisione",
      "Nulla"
    ],
    "answer": "Darne notizia ai promotori con processo verbale"
  },
  {
    "id": 1095,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il Questore se vieta una riunione?",
    "options": [
      "Darne notizia ai promotori con processo verbale",
      "Pubblicarlo sui giornali",
      "Dirlo in televisione",
      "Nulla"
    ],
    "answer": "Darne notizia ai promotori con processo verbale"
  },
  {
    "id": 1095,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il Questore se vieta una riunione?",
    "options": [
      "Darne notizia ai promotori con processo verbale",
      "Pubblicarlo sui giornali",
      "Dirlo in televisione",
      "Nulla"
    ],
    "answer": "Darne notizia ai promotori con processo verbale"
  },
  {
    "id": 1096,
    "category": "Legislazione PS",
    "question": "Quali riunioni non necessitano di preavviso?",
    "options": [
      "Le riunioni elettorali (durante la campagna elettorale) e quelle in luogo aperto al pubblico",
      "Le riunioni in piazza",
      "I cortei",
      "Le manifestazioni sindacali"
    ],
    "answer": "Le riunioni elettorali (durante la campagna elettorale) e quelle in luogo aperto al pubblico"
  },
  {
    "id": 1096,
    "category": "Legislazione PS",
    "question": "Quali riunioni non necessitano di preavviso?",
    "options": [
      "Le riunioni elettorali (durante la campagna elettorale) e quelle in luogo aperto al pubblico",
      "Le riunioni in piazza",
      "I cortei",
      "Le manifestazioni sindacali"
    ],
    "answer": "Le riunioni elettorali (durante la campagna elettorale) e quelle in luogo aperto al pubblico"
  },
  {
    "id": 1096,
    "category": "Legislazione PS",
    "question": "Quali riunioni non necessitano di preavviso?",
    "options": [
      "Le riunioni elettorali (durante la campagna elettorale) e quelle in luogo aperto al pubblico",
      "Le riunioni in piazza",
      "I cortei",
      "Le manifestazioni sindacali"
    ],
    "answer": "Le riunioni elettorali (durante la campagna elettorale) e quelle in luogo aperto al pubblico"
  },
  {
    "id": 1097,
    "category": "Legislazione PS",
    "question": "Cosa succede se una riunione si svolge senza preavviso?",
    "options": [
      "I promotori sono puniti, ma la riunione può svolgersi se pacifica",
      "Viene sciolta immediatamente",
      "Tutti i partecipanti vengono arrestati",
      "Non succede nulla"
    ],
    "answer": "I promotori sono puniti, ma la riunione può svolgersi se pacifica"
  },
  {
    "id": 1097,
    "category": "Legislazione PS",
    "question": "Cosa succede se una riunione si svolge senza preavviso?",
    "options": [
      "I promotori sono puniti, ma la riunione può svolgersi se pacifica",
      "Viene sciolta immediatamente",
      "Tutti i partecipanti vengono arrestati",
      "Non succede nulla"
    ],
    "answer": "I promotori sono puniti, ma la riunione può svolgersi se pacifica"
  },
  {
    "id": 1097,
    "category": "Legislazione PS",
    "question": "Cosa succede se una riunione si svolge senza preavviso?",
    "options": [
      "I promotori sono puniti, ma la riunione può svolgersi se pacifica",
      "Viene sciolta immediatamente",
      "Tutti i partecipanti vengono arrestati",
      "Non succede nulla"
    ],
    "answer": "I promotori sono puniti, ma la riunione può svolgersi se pacifica"
  },
  {
    "id": 1098,
    "category": "Legislazione PS",
    "question": "Chi è considerato 'promotore' di una riunione?",
    "options": [
      "Chi la organizza, la indice o collabora alla sua realizzazione pratica",
      "Solo chi firma il preavviso",
      "Chi partecipa",
      "Chi la guarda"
    ],
    "answer": "Chi la organizza, la indice o collabora alla sua realizzazione pratica"
  },
  {
    "id": 1098,
    "category": "Legislazione PS",
    "question": "Chi è considerato 'promotore' di una riunione?",
    "options": [
      "Chi la organizza, la indice o collabora alla sua realizzazione pratica",
      "Solo chi firma il preavviso",
      "Chi partecipa",
      "Chi la guarda"
    ],
    "answer": "Chi la organizza, la indice o collabora alla sua realizzazione pratica"
  },
  {
    "id": 1098,
    "category": "Legislazione PS",
    "question": "Chi è considerato 'promotore' di una riunione?",
    "options": [
      "Chi la organizza, la indice o collabora alla sua realizzazione pratica",
      "Solo chi firma il preavviso",
      "Chi partecipa",
      "Chi la guarda"
    ],
    "answer": "Chi la organizza, la indice o collabora alla sua realizzazione pratica"
  },
  {
    "id": 1099,
    "category": "Legislazione PS",
    "question": "Qual è il limite di validità temporale del preavviso di riunione?",
    "options": [
      "Almeno 3 giorni prima",
      "Almeno 24 ore prima",
      "Almeno 1 settimana prima",
      "Almeno 1 mese prima"
    ],
    "answer": "Almeno 3 giorni prima"
  },
  {
    "id": 1099,
    "category": "Legislazione PS",
    "question": "Qual è il limite di validità temporale del preavviso di riunione?",
    "options": [
      "Almeno 3 giorni prima",
      "Almeno 24 ore prima",
      "Almeno 1 settimana prima",
      "Almeno 1 mese prima"
    ],
    "answer": "Almeno 3 giorni prima"
  },
  {
    "id": 1099,
    "category": "Legislazione PS",
    "question": "Qual è il limite di validità temporale del preavviso di riunione?",
    "options": [
      "Almeno 3 giorni prima",
      "Almeno 24 ore prima",
      "Almeno 1 settimana prima",
      "Almeno 1 mese prima"
    ],
    "answer": "Almeno 3 giorni prima"
  },
  {
    "id": 1100,
    "category": "Legislazione PS",
    "question": "Cosa può fare il Questore in caso di omesso preavviso di riunione?",
    "options": [
      "Impedire la riunione per motivi di ordine pubblico o prescrivere modalità",
      "Arrestare tutti preventivamente",
      "Chiudere la città",
      "Dimettersi"
    ],
    "answer": "Impedire la riunione per motivi di ordine pubblico o prescrivere modalità"
  },
  {
    "id": 1100,
    "category": "Legislazione PS",
    "question": "Cosa può fare il Questore in caso di omesso preavviso di riunione?",
    "options": [
      "Impedire la riunione per motivi di ordine pubblico o prescrivere modalità",
      "Arrestare tutti preventivamente",
      "Chiudere la città",
      "Dimettersi"
    ],
    "answer": "Impedire la riunione per motivi di ordine pubblico o prescrivere modalità"
  },
  {
    "id": 1100,
    "category": "Legislazione PS",
    "question": "Cosa può fare il Questore in caso di omesso preavviso di riunione?",
    "options": [
      "Impedire la riunione per motivi di ordine pubblico o prescrivere modalità",
      "Arrestare tutti preventivamente",
      "Chiudere la città",
      "Dimettersi"
    ],
    "answer": "Impedire la riunione per motivi di ordine pubblico o prescrivere modalità"
  },
  {
    "id": 1101,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la fabbricazione di armi comuni da sparo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Ministro dell'Interno",
      "Il Sindaco"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1101,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la fabbricazione di armi comuni da sparo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Ministro dell'Interno",
      "Il Sindaco"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1101,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la fabbricazione di armi comuni da sparo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Ministro dell'Interno",
      "Il Sindaco"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1102,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la raccolta di armi da guerra?",
    "options": [
      "Il Prefetto (su delega del Ministro)",
      "Il Questore",
      "Il Sindaco",
      "Il Ministero della Difesa"
    ],
    "answer": "Il Prefetto (su delega del Ministro)"
  },
  {
    "id": 1102,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la raccolta di armi da guerra?",
    "options": [
      "Il Prefetto (su delega del Ministro)",
      "Il Questore",
      "Il Sindaco",
      "Il Ministero della Difesa"
    ],
    "answer": "Il Prefetto (su delega del Ministro)"
  },
  {
    "id": 1102,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la raccolta di armi da guerra?",
    "options": [
      "Il Prefetto (su delega del Ministro)",
      "Il Questore",
      "Il Sindaco",
      "Il Ministero della Difesa"
    ],
    "answer": "Il Prefetto (su delega del Ministro)"
  },
  {
    "id": 1103,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il trasporto di esplosivi?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "La Polizia Stradale"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1103,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il trasporto di esplosivi?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "La Polizia Stradale"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1103,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il trasporto di esplosivi?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "La Polizia Stradale"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1104,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'importazione di armi comuni da sparo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "L'Agenzia delle Dogane"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1104,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'importazione di armi comuni da sparo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "L'Agenzia delle Dogane"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1104,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'importazione di armi comuni da sparo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "L'Agenzia delle Dogane"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1105,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio dell'arte tipografica (stampa)?",
    "options": [
      "Il Sindaco (con obbligo di informare il Questore)",
      "Il Questore",
      "Il Prefetto",
      "La Camera di Commercio"
    ],
    "answer": "Il Sindaco (con obbligo di informare il Questore)"
  },
  {
    "id": 1105,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio dell'arte tipografica (stampa)?",
    "options": [
      "Il Sindaco (con obbligo di informare il Questore)",
      "Il Questore",
      "Il Prefetto",
      "La Camera di Commercio"
    ],
    "answer": "Il Sindaco (con obbligo di informare il Questore)"
  },
  {
    "id": 1105,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio dell'arte tipografica (stampa)?",
    "options": [
      "Il Sindaco (con obbligo di informare il Questore)",
      "Il Questore",
      "Il Prefetto",
      "La Camera di Commercio"
    ],
    "answer": "Il Sindaco (con obbligo di informare il Questore)"
  },
  {
    "id": 1106,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per mestieri ambulanti?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Regione"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1106,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per mestieri ambulanti?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Regione"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1106,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per mestieri ambulanti?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Regione"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1107,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per ascensori e montacarichi in servizio pubblico?",
    "options": [
      "Il Sindaco",
      "Il Prefetto",
      "Il Questore",
      "L'ingegnere capo"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1107,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per ascensori e montacarichi in servizio pubblico?",
    "options": [
      "Il Sindaco",
      "Il Prefetto",
      "Il Questore",
      "L'ingegnere capo"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1107,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per ascensori e montacarichi in servizio pubblico?",
    "options": [
      "Il Sindaco",
      "Il Prefetto",
      "Il Questore",
      "L'ingegnere capo"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1108,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per rimesse di autoveicoli?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Motorizzazione"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1108,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per rimesse di autoveicoli?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Motorizzazione"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1108,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per rimesse di autoveicoli?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Motorizzazione"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1109,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per stabilimenti di bagni (balneari)?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Capitaneria di Porto"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1109,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per stabilimenti di bagni (balneari)?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Capitaneria di Porto"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1109,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per stabilimenti di bagni (balneari)?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "La Capitaneria di Porto"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1110,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il Sindaco quando rilascia una licenza ex art. 86 TULPS (es. bar)?",
    "options": [
      "Comunicarlo al Prefetto",
      "Comunicarlo al Questore",
      "Nulla",
      "Pubblicarlo sul sito"
    ],
    "answer": "Comunicarlo al Prefetto"
  },
  {
    "id": 1110,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il Sindaco quando rilascia una licenza ex art. 86 TULPS (es. bar)?",
    "options": [
      "Comunicarlo al Prefetto",
      "Comunicarlo al Questore",
      "Nulla",
      "Pubblicarlo sul sito"
    ],
    "answer": "Comunicarlo al Prefetto"
  },
  {
    "id": 1110,
    "category": "Legislazione PS",
    "question": "Cosa deve fare il Sindaco quando rilascia una licenza ex art. 86 TULPS (es. bar)?",
    "options": [
      "Comunicarlo al Prefetto",
      "Comunicarlo al Questore",
      "Nulla",
      "Pubblicarlo sul sito"
    ],
    "answer": "Comunicarlo al Prefetto"
  },
  {
    "id": 1111,
    "category": "Legislazione PS",
    "question": "Quando il Prefetto può chiedere al Sindaco di revocare una licenza?",
    "options": [
      "Per motivate esigenze di pubblica sicurezza",
      "Se il locale è brutto",
      "Se il gestore è antipatico",
      "Mai"
    ],
    "answer": "Per motivate esigenze di pubblica sicurezza"
  },
  {
    "id": 1111,
    "category": "Legislazione PS",
    "question": "Quando il Prefetto può chiedere al Sindaco di revocare una licenza?",
    "options": [
      "Per motivate esigenze di pubblica sicurezza",
      "Se il locale è brutto",
      "Se il gestore è antipatico",
      "Mai"
    ],
    "answer": "Per motivate esigenze di pubblica sicurezza"
  },
  {
    "id": 1111,
    "category": "Legislazione PS",
    "question": "Quando il Prefetto può chiedere al Sindaco di revocare una licenza?",
    "options": [
      "Per motivate esigenze di pubblica sicurezza",
      "Se il locale è brutto",
      "Se il gestore è antipatico",
      "Mai"
    ],
    "answer": "Per motivate esigenze di pubblica sicurezza"
  },
  {
    "id": 1112,
    "category": "Legislazione PS",
    "question": "Cosa succede se il Prefetto esprime parere negativo su una licenza di competenza del Sindaco?",
    "options": [
      "Il diniego è efficace (il Sindaco non può rilasciarla)",
      "Il Sindaco può decidere comunque",
      "Si va al TAR",
      "Si chiede al Ministro"
    ],
    "answer": "Il diniego è efficace (il Sindaco non può rilasciarla)"
  },
  {
    "id": 1112,
    "category": "Legislazione PS",
    "question": "Cosa succede se il Prefetto esprime parere negativo su una licenza di competenza del Sindaco?",
    "options": [
      "Il diniego è efficace (il Sindaco non può rilasciarla)",
      "Il Sindaco può decidere comunque",
      "Si va al TAR",
      "Si chiede al Ministro"
    ],
    "answer": "Il diniego è efficace (il Sindaco non può rilasciarla)"
  },
  {
    "id": 1112,
    "category": "Legislazione PS",
    "question": "Cosa succede se il Prefetto esprime parere negativo su una licenza di competenza del Sindaco?",
    "options": [
      "Il diniego è efficace (il Sindaco non può rilasciarla)",
      "Il Sindaco può decidere comunque",
      "Si va al TAR",
      "Si chiede al Ministro"
    ],
    "answer": "Il diniego è efficace (il Sindaco non può rilasciarla)"
  },
  {
    "id": 1113,
    "category": "Legislazione PS",
    "question": "Chi rilascia l'autorizzazione per la costituzione di un istituto di vigilanza privata?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il Ministro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1113,
    "category": "Legislazione PS",
    "question": "Chi rilascia l'autorizzazione per la costituzione di un istituto di vigilanza privata?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il Ministro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1113,
    "category": "Legislazione PS",
    "question": "Chi rilascia l'autorizzazione per la costituzione di un istituto di vigilanza privata?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il Ministro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1114,
    "category": "Legislazione PS",
    "question": "Chi approva le divise delle guardie giurate?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il sarto"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1114,
    "category": "Legislazione PS",
    "question": "Chi approva le divise delle guardie giurate?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il sarto"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1114,
    "category": "Legislazione PS",
    "question": "Chi approva le divise delle guardie giurate?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il sarto"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1115,
    "category": "Legislazione PS",
    "question": "Chi rilascia il porto d'armi a tassa ridotta per le guardie giurate?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il datore di lavoro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1115,
    "category": "Legislazione PS",
    "question": "Chi rilascia il porto d'armi a tassa ridotta per le guardie giurate?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il datore di lavoro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1115,
    "category": "Legislazione PS",
    "question": "Chi rilascia il porto d'armi a tassa ridotta per le guardie giurate?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il datore di lavoro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1116,
    "category": "Legislazione PS",
    "question": "Chi attribuisce la qualifica di Agente di P.S. alla Polizia Municipale?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il Ministro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1116,
    "category": "Legislazione PS",
    "question": "Chi attribuisce la qualifica di Agente di P.S. alla Polizia Municipale?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il Ministro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1116,
    "category": "Legislazione PS",
    "question": "Chi attribuisce la qualifica di Agente di P.S. alla Polizia Municipale?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "Il Ministro"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1117,
    "category": "Legislazione PS",
    "question": "Chi attribuisce la qualifica di Agente di P.S. alle guardie campestri?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "La Regione"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1117,
    "category": "Legislazione PS",
    "question": "Chi attribuisce la qualifica di Agente di P.S. alle guardie campestri?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "La Regione"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1117,
    "category": "Legislazione PS",
    "question": "Chi attribuisce la qualifica di Agente di P.S. alle guardie campestri?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "La Regione"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1118,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il commercio di cose antiche o usate?",
    "options": [
      "Il Sindaco (dichiarazione)",
      "Il Questore",
      "Il Prefetto",
      "La Soprintendenza"
    ],
    "answer": "Il Sindaco (dichiarazione)"
  },
  {
    "id": 1118,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il commercio di cose antiche o usate?",
    "options": [
      "Il Sindaco (dichiarazione)",
      "Il Questore",
      "Il Prefetto",
      "La Soprintendenza"
    ],
    "answer": "Il Sindaco (dichiarazione)"
  },
  {
    "id": 1118,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il commercio di cose antiche o usate?",
    "options": [
      "Il Sindaco (dichiarazione)",
      "Il Questore",
      "Il Prefetto",
      "La Soprintendenza"
    ],
    "answer": "Il Sindaco (dichiarazione)"
  },
  {
    "id": 1119,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per accademie e scuole di ballo?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "Il Ministero dell'Istruzione"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1119,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per accademie e scuole di ballo?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "Il Ministero dell'Istruzione"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1119,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per accademie e scuole di ballo?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "Il Ministero dell'Istruzione"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1120,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio di teatri?",
    "options": [
      "Il Sindaco (agibilità)",
      "Il Questore",
      "Il Prefetto",
      "Il Ministero della Cultura"
    ],
    "answer": "Il Sindaco (agibilità)"
  },
  {
    "id": 1120,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio di teatri?",
    "options": [
      "Il Sindaco (agibilità)",
      "Il Questore",
      "Il Prefetto",
      "Il Ministero della Cultura"
    ],
    "answer": "Il Sindaco (agibilità)"
  },
  {
    "id": 1120,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio di teatri?",
    "options": [
      "Il Sindaco (agibilità)",
      "Il Questore",
      "Il Prefetto",
      "Il Ministero della Cultura"
    ],
    "answer": "Il Sindaco (agibilità)"
  },
  {
    "id": 1121,
    "category": "Legislazione PS",
    "question": "Cosa deve fare chi ospita uno straniero in casa propria?",
    "options": [
      "Comunicarlo all'Autorità locale di P.S. entro 48 ore",
      "Nulla",
      "Chiedere il permesso al condominio",
      "Farsi pagare"
    ],
    "answer": "Comunicarlo all'Autorità locale di P.S. entro 48 ore"
  },
  {
    "id": 1121,
    "category": "Legislazione PS",
    "question": "Cosa deve fare chi ospita uno straniero in casa propria?",
    "options": [
      "Comunicarlo all'Autorità locale di P.S. entro 48 ore",
      "Nulla",
      "Chiedere il permesso al condominio",
      "Farsi pagare"
    ],
    "answer": "Comunicarlo all'Autorità locale di P.S. entro 48 ore"
  },
  {
    "id": 1121,
    "category": "Legislazione PS",
    "question": "Cosa deve fare chi ospita uno straniero in casa propria?",
    "options": [
      "Comunicarlo all'Autorità locale di P.S. entro 48 ore",
      "Nulla",
      "Chiedere il permesso al condominio",
      "Farsi pagare"
    ],
    "answer": "Comunicarlo all'Autorità locale di P.S. entro 48 ore"
  },
  {
    "id": 1122,
    "category": "Legislazione PS",
    "question": "Chi riceve le denunce di infortunio sul lavoro?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Sindaco",
      "Il Prefetto",
      "Il Medico"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1122,
    "category": "Legislazione PS",
    "question": "Chi riceve le denunce di infortunio sul lavoro?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Sindaco",
      "Il Prefetto",
      "Il Medico"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1122,
    "category": "Legislazione PS",
    "question": "Chi riceve le denunce di infortunio sul lavoro?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Sindaco",
      "Il Prefetto",
      "Il Medico"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1123,
    "category": "Legislazione PS",
    "question": "Chi riceve le denunce di scoperte archeologiche?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Museo",
      "Il Sindaco",
      "Il Parroco"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1123,
    "category": "Legislazione PS",
    "question": "Chi riceve le denunce di scoperte archeologiche?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Museo",
      "Il Sindaco",
      "Il Parroco"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1123,
    "category": "Legislazione PS",
    "question": "Chi riceve le denunce di scoperte archeologiche?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Museo",
      "Il Sindaco",
      "Il Parroco"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1124,
    "category": "Legislazione PS",
    "question": "Chi autorizza l'uso della maschera nei teatri?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Sindaco",
      "Il Direttore del teatro",
      "Il Prefetto"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1124,
    "category": "Legislazione PS",
    "question": "Chi autorizza l'uso della maschera nei teatri?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Sindaco",
      "Il Direttore del teatro",
      "Il Prefetto"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1124,
    "category": "Legislazione PS",
    "question": "Chi autorizza l'uso della maschera nei teatri?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Sindaco",
      "Il Direttore del teatro",
      "Il Prefetto"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1125,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per impianti provvisori elettrici in occasione di feste?",
    "options": [
      "L'Autorità locale di P.S.",
      "L'ENEL",
      "Il Sindaco",
      "Il Prefetto"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1125,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per impianti provvisori elettrici in occasione di feste?",
    "options": [
      "L'Autorità locale di P.S.",
      "L'ENEL",
      "Il Sindaco",
      "Il Prefetto"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1125,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per impianti provvisori elettrici in occasione di feste?",
    "options": [
      "L'Autorità locale di P.S.",
      "L'ENEL",
      "Il Sindaco",
      "Il Prefetto"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1126,
    "category": "Legislazione PS",
    "question": "Chi ha facoltà di ordinare la distruzione di esplosivi pericolosi?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Sindaco",
      "Il Pompere",
      "Il Cittadino"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1126,
    "category": "Legislazione PS",
    "question": "Chi ha facoltà di ordinare la distruzione di esplosivi pericolosi?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Sindaco",
      "Il Pompere",
      "Il Cittadino"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1126,
    "category": "Legislazione PS",
    "question": "Chi ha facoltà di ordinare la distruzione di esplosivi pericolosi?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Sindaco",
      "Il Pompere",
      "Il Cittadino"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1127,
    "category": "Legislazione PS",
    "question": "Chi vigila sulle riunioni prive di preavviso?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Sindaco",
      "Il Giornalista",
      "Il Passante"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1127,
    "category": "Legislazione PS",
    "question": "Chi vigila sulle riunioni prive di preavviso?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Sindaco",
      "Il Giornalista",
      "Il Passante"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1127,
    "category": "Legislazione PS",
    "question": "Chi vigila sulle riunioni prive di preavviso?",
    "options": [
      "L'Autorità locale di P.S.",
      "Il Sindaco",
      "Il Giornalista",
      "Il Passante"
    ],
    "answer": "L'Autorità locale di P.S."
  },
  {
    "id": 1128,
    "category": "Legislazione PS",
    "question": "Chi può impedire una riunione in caso d'urgenza se manca il preavviso?",
    "options": [
      "L'Autorità locale di P.S. (riferendo al Questore)",
      "Il Sindaco",
      "Il Vigile",
      "Nessuno"
    ],
    "answer": "L'Autorità locale di P.S. (riferendo al Questore)"
  },
  {
    "id": 1128,
    "category": "Legislazione PS",
    "question": "Chi può impedire una riunione in caso d'urgenza se manca il preavviso?",
    "options": [
      "L'Autorità locale di P.S. (riferendo al Questore)",
      "Il Sindaco",
      "Il Vigile",
      "Nessuno"
    ],
    "answer": "L'Autorità locale di P.S. (riferendo al Questore)"
  },
  {
    "id": 1128,
    "category": "Legislazione PS",
    "question": "Chi può impedire una riunione in caso d'urgenza se manca il preavviso?",
    "options": [
      "L'Autorità locale di P.S. (riferendo al Questore)",
      "Il Sindaco",
      "Il Vigile",
      "Nessuno"
    ],
    "answer": "L'Autorità locale di P.S. (riferendo al Questore)"
  },
  {
    "id": 1129,
    "category": "Legislazione PS",
    "question": "Chi riceve le comunicazioni del movimento alloggiati?",
    "options": [
      "L'Autorità locale di P.S. (Questura)",
      "Il Comune",
      "L'ISTAT",
      "La Regione"
    ],
    "answer": "L'Autorità locale di P.S. (Questura)"
  },
  {
    "id": 1129,
    "category": "Legislazione PS",
    "question": "Chi riceve le comunicazioni del movimento alloggiati?",
    "options": [
      "L'Autorità locale di P.S. (Questura)",
      "Il Comune",
      "L'ISTAT",
      "La Regione"
    ],
    "answer": "L'Autorità locale di P.S. (Questura)"
  },
  {
    "id": 1129,
    "category": "Legislazione PS",
    "question": "Chi riceve le comunicazioni del movimento alloggiati?",
    "options": [
      "L'Autorità locale di P.S. (Questura)",
      "Il Comune",
      "L'ISTAT",
      "La Regione"
    ],
    "answer": "L'Autorità locale di P.S. (Questura)"
  },
  {
    "id": 1130,
    "category": "Legislazione PS",
    "question": "Qual è la durata della carta d'identità?",
    "options": [
      "10 anni",
      "5 anni",
      "1 anno",
      "Illimitata"
    ],
    "answer": "10 anni"
  },
  {
    "id": 1130,
    "category": "Legislazione PS",
    "question": "Qual è la durata della carta d'identità?",
    "options": [
      "10 anni",
      "5 anni",
      "1 anno",
      "Illimitata"
    ],
    "answer": "10 anni"
  },
  {
    "id": 1130,
    "category": "Legislazione PS",
    "question": "Qual è la durata della carta d'identità?",
    "options": [
      "10 anni",
      "5 anni",
      "1 anno",
      "Illimitata"
    ],
    "answer": "10 anni"
  },
  {
    "id": 1131,
    "category": "Legislazione PS",
    "question": "Chi rilascia la carta d'identità?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "Il Ministero"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1131,
    "category": "Legislazione PS",
    "question": "Chi rilascia la carta d'identità?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "Il Ministero"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1131,
    "category": "Legislazione PS",
    "question": "Chi rilascia la carta d'identità?",
    "options": [
      "Il Sindaco",
      "Il Questore",
      "Il Prefetto",
      "Il Ministero"
    ],
    "answer": "Il Sindaco"
  },
  {
    "id": 1132,
    "category": "Legislazione PS",
    "question": "Quali documenti sono equipollenti alla carta d'identità?",
    "options": [
      "Passaporto, patente, porto d'armi, tessere statali con foto",
      "Solo il passaporto",
      "Solo la patente",
      "Nessuno"
    ],
    "answer": "Passaporto, patente, porto d'armi, tessere statali con foto"
  },
  {
    "id": 1132,
    "category": "Legislazione PS",
    "question": "Quali documenti sono equipollenti alla carta d'identità?",
    "options": [
      "Passaporto, patente, porto d'armi, tessere statali con foto",
      "Solo il passaporto",
      "Solo la patente",
      "Nessuno"
    ],
    "answer": "Passaporto, patente, porto d'armi, tessere statali con foto"
  },
  {
    "id": 1132,
    "category": "Legislazione PS",
    "question": "Quali documenti sono equipollenti alla carta d'identità?",
    "options": [
      "Passaporto, patente, porto d'armi, tessere statali con foto",
      "Solo il passaporto",
      "Solo la patente",
      "Nessuno"
    ],
    "answer": "Passaporto, patente, porto d'armi, tessere statali con foto"
  },
  {
    "id": 1133,
    "category": "Legislazione PS",
    "question": "Chi ha l'obbligo di portare sempre con sé la carta d'identità?",
    "options": [
      "Le persone pericolose o sospette a cui è stato ordinato dall'Autorità",
      "Tutti i cittadini",
      "Solo gli stranieri",
      "Nessuno"
    ],
    "answer": "Le persone pericolose o sospette a cui è stato ordinato dall'Autorità"
  },
  {
    "id": 1133,
    "category": "Legislazione PS",
    "question": "Chi ha l'obbligo di portare sempre con sé la carta d'identità?",
    "options": [
      "Le persone pericolose o sospette a cui è stato ordinato dall'Autorità",
      "Tutti i cittadini",
      "Solo gli stranieri",
      "Nessuno"
    ],
    "answer": "Le persone pericolose o sospette a cui è stato ordinato dall'Autorità"
  },
  {
    "id": 1133,
    "category": "Legislazione PS",
    "question": "Chi ha l'obbligo di portare sempre con sé la carta d'identità?",
    "options": [
      "Le persone pericolose o sospette a cui è stato ordinato dall'Autorità",
      "Tutti i cittadini",
      "Solo gli stranieri",
      "Nessuno"
    ],
    "answer": "Le persone pericolose o sospette a cui è stato ordinato dall'Autorità"
  },
  {
    "id": 1134,
    "category": "Legislazione PS",
    "question": "Cosa rischia chi rifiuta di dichiarare le proprie generalità?",
    "options": [
      "Accompagnamento in ufficio per identificazione (fermo)",
      "Arresto immediato",
      "Multa",
      "Nulla"
    ],
    "answer": "Accompagnamento in ufficio per identificazione (fermo)"
  },
  {
    "id": 1134,
    "category": "Legislazione PS",
    "question": "Cosa rischia chi rifiuta di dichiarare le proprie generalità?",
    "options": [
      "Accompagnamento in ufficio per identificazione (fermo)",
      "Arresto immediato",
      "Multa",
      "Nulla"
    ],
    "answer": "Accompagnamento in ufficio per identificazione (fermo)"
  },
  {
    "id": 1134,
    "category": "Legislazione PS",
    "question": "Cosa rischia chi rifiuta di dichiarare le proprie generalità?",
    "options": [
      "Accompagnamento in ufficio per identificazione (fermo)",
      "Arresto immediato",
      "Multa",
      "Nulla"
    ],
    "answer": "Accompagnamento in ufficio per identificazione (fermo)"
  },
  {
    "id": 1135,
    "category": "Legislazione PS",
    "question": "Cosa rischia chi dichiara false generalità?",
    "options": [
      "Reato (art. 495/496 c.p.) e accompagnamento",
      "Solo multa",
      "Solo ammonimento",
      "Nulla"
    ],
    "answer": "Reato (art. 495/496 c.p.) e accompagnamento"
  },
  {
    "id": 1135,
    "category": "Legislazione PS",
    "question": "Cosa rischia chi dichiara false generalità?",
    "options": [
      "Reato (art. 495/496 c.p.) e accompagnamento",
      "Solo multa",
      "Solo ammonimento",
      "Nulla"
    ],
    "answer": "Reato (art. 495/496 c.p.) e accompagnamento"
  },
  {
    "id": 1135,
    "category": "Legislazione PS",
    "question": "Cosa rischia chi dichiara false generalità?",
    "options": [
      "Reato (art. 495/496 c.p.) e accompagnamento",
      "Solo multa",
      "Solo ammonimento",
      "Nulla"
    ],
    "answer": "Reato (art. 495/496 c.p.) e accompagnamento"
  },
  {
    "id": 1136,
    "category": "Legislazione PS",
    "question": "Chi può disporre l'accompagnamento coattivo per chi non si presenta all'invito ex art. 15 TULPS?",
    "options": [
      "L'Autorità di P.S.",
      "Il Sindaco",
      "Il Giudice",
      "L'avvocato"
    ],
    "answer": "L'Autorità di P.S."
  },
  {
    "id": 1136,
    "category": "Legislazione PS",
    "question": "Chi può disporre l'accompagnamento coattivo per chi non si presenta all'invito ex art. 15 TULPS?",
    "options": [
      "L'Autorità di P.S.",
      "Il Sindaco",
      "Il Giudice",
      "L'avvocato"
    ],
    "answer": "L'Autorità di P.S."
  },
  {
    "id": 1136,
    "category": "Legislazione PS",
    "question": "Chi può disporre l'accompagnamento coattivo per chi non si presenta all'invito ex art. 15 TULPS?",
    "options": [
      "L'Autorità di P.S.",
      "Il Sindaco",
      "Il Giudice",
      "L'avvocato"
    ],
    "answer": "L'Autorità di P.S."
  },
  {
    "id": 1137,
    "category": "Legislazione PS",
    "question": "Qual è la sanzione amministrativa per inosservanza dell'invito ex art. 15 TULPS (se non reato)?",
    "options": [
      "Da 154 a 516 euro",
      "Da 10 a 50 euro",
      "Da 1000 a 2000 euro",
      "Nessuna"
    ],
    "answer": "Da 154 a 516 euro"
  },
  {
    "id": 1137,
    "category": "Legislazione PS",
    "question": "Qual è la sanzione amministrativa per inosservanza dell'invito ex art. 15 TULPS (se non reato)?",
    "options": [
      "Da 154 a 516 euro",
      "Da 10 a 50 euro",
      "Da 1000 a 2000 euro",
      "Nessuna"
    ],
    "answer": "Da 154 a 516 euro"
  },
  {
    "id": 1137,
    "category": "Legislazione PS",
    "question": "Qual è la sanzione amministrativa per inosservanza dell'invito ex art. 15 TULPS (se non reato)?",
    "options": [
      "Da 154 a 516 euro",
      "Da 10 a 50 euro",
      "Da 1000 a 2000 euro",
      "Nessuna"
    ],
    "answer": "Da 154 a 516 euro"
  },
  {
    "id": 1138,
    "category": "Legislazione PS",
    "question": "Quando l'inosservanza dell'invito a comparire costituisce reato ex art. 650 c.p.?",
    "options": [
      "Quando l'invito è per ragioni di giustizia, sicurezza o ordine pubblico",
      "Sempre",
      "Mai",
      "Solo se recidivi"
    ],
    "answer": "Quando l'invito è per ragioni di giustizia, sicurezza o ordine pubblico"
  },
  {
    "id": 1138,
    "category": "Legislazione PS",
    "question": "Quando l'inosservanza dell'invito a comparire costituisce reato ex art. 650 c.p.?",
    "options": [
      "Quando l'invito è per ragioni di giustizia, sicurezza o ordine pubblico",
      "Sempre",
      "Mai",
      "Solo se recidivi"
    ],
    "answer": "Quando l'invito è per ragioni di giustizia, sicurezza o ordine pubblico"
  },
  {
    "id": 1138,
    "category": "Legislazione PS",
    "question": "Quando l'inosservanza dell'invito a comparire costituisce reato ex art. 650 c.p.?",
    "options": [
      "Quando l'invito è per ragioni di giustizia, sicurezza o ordine pubblico",
      "Sempre",
      "Mai",
      "Solo se recidivi"
    ],
    "answer": "Quando l'invito è per ragioni di giustizia, sicurezza o ordine pubblico"
  },
  {
    "id": 1139,
    "category": "Legislazione PS",
    "question": "Chi può accedere ai locali pubblici per controlli ex art. 16 TULPS?",
    "options": [
      "Gli Ufficiali e Agenti di P.S.",
      "Solo gli Ufficiali",
      "Solo il Questore",
      "Solo il Sindaco"
    ],
    "answer": "Gli Ufficiali e Agenti di P.S."
  },
  {
    "id": 1139,
    "category": "Legislazione PS",
    "question": "Chi può accedere ai locali pubblici per controlli ex art. 16 TULPS?",
    "options": [
      "Gli Ufficiali e Agenti di P.S.",
      "Solo gli Ufficiali",
      "Solo il Questore",
      "Solo il Sindaco"
    ],
    "answer": "Gli Ufficiali e Agenti di P.S."
  },
  {
    "id": 1139,
    "category": "Legislazione PS",
    "question": "Chi può accedere ai locali pubblici per controlli ex art. 16 TULPS?",
    "options": [
      "Gli Ufficiali e Agenti di P.S.",
      "Solo gli Ufficiali",
      "Solo il Questore",
      "Solo il Sindaco"
    ],
    "answer": "Gli Ufficiali e Agenti di P.S."
  },
  {
    "id": 1140,
    "category": "Legislazione PS",
    "question": "Quando possono accedere gli Ufficiali e Agenti di P.S. nei locali pubblici?",
    "options": [
      "In qualunque ora (durante l'apertura)",
      "Solo di giorno",
      "Solo con mandato",
      "Solo se chiamati"
    ],
    "answer": "In qualunque ora (durante l'apertura)"
  },
  {
    "id": 1140,
    "category": "Legislazione PS",
    "question": "Quando possono accedere gli Ufficiali e Agenti di P.S. nei locali pubblici?",
    "options": [
      "In qualunque ora (durante l'apertura)",
      "Solo di giorno",
      "Solo con mandato",
      "Solo se chiamati"
    ],
    "answer": "In qualunque ora (durante l'apertura)"
  },
  {
    "id": 1140,
    "category": "Legislazione PS",
    "question": "Quando possono accedere gli Ufficiali e Agenti di P.S. nei locali pubblici?",
    "options": [
      "In qualunque ora (durante l'apertura)",
      "Solo di giorno",
      "Solo con mandato",
      "Solo se chiamati"
    ],
    "answer": "In qualunque ora (durante l'apertura)"
  },
  {
    "id": 1141,
    "category": "Legislazione PS",
    "question": "Cosa possono controllare gli Agenti di P.S. nei locali pubblici?",
    "options": [
      "L'adempimento delle prescrizioni di legge e amministrative",
      "La qualità del caffè",
      "L'abbigliamento dei clienti",
      "I prezzi dei fornitori"
    ],
    "answer": "L'adempimento delle prescrizioni di legge e amministrative"
  },
  {
    "id": 1141,
    "category": "Legislazione PS",
    "question": "Cosa possono controllare gli Agenti di P.S. nei locali pubblici?",
    "options": [
      "L'adempimento delle prescrizioni di legge e amministrative",
      "La qualità del caffè",
      "L'abbigliamento dei clienti",
      "I prezzi dei fornitori"
    ],
    "answer": "L'adempimento delle prescrizioni di legge e amministrative"
  },
  {
    "id": 1141,
    "category": "Legislazione PS",
    "question": "Cosa possono controllare gli Agenti di P.S. nei locali pubblici?",
    "options": [
      "L'adempimento delle prescrizioni di legge e amministrative",
      "La qualità del caffè",
      "L'abbigliamento dei clienti",
      "I prezzi dei fornitori"
    ],
    "answer": "L'adempimento delle prescrizioni di legge e amministrative"
  },
  {
    "id": 1142,
    "category": "Legislazione PS",
    "question": "Chi può ordinare la cessazione di uno spettacolo in caso di disordini?",
    "options": [
      "Gli Ufficiali e Agenti di P.S.",
      "Il pubblico",
      "Il gestore",
      "Il Sindaco"
    ],
    "answer": "Gli Ufficiali e Agenti di P.S."
  },
  {
    "id": 1142,
    "category": "Legislazione PS",
    "question": "Chi può ordinare la cessazione di uno spettacolo in caso di disordini?",
    "options": [
      "Gli Ufficiali e Agenti di P.S.",
      "Il pubblico",
      "Il gestore",
      "Il Sindaco"
    ],
    "answer": "Gli Ufficiali e Agenti di P.S."
  },
  {
    "id": 1142,
    "category": "Legislazione PS",
    "question": "Chi può ordinare la cessazione di uno spettacolo in caso di disordini?",
    "options": [
      "Gli Ufficiali e Agenti di P.S.",
      "Il pubblico",
      "Il gestore",
      "Il Sindaco"
    ],
    "answer": "Gli Ufficiali e Agenti di P.S."
  },
  {
    "id": 1143,
    "category": "Legislazione PS",
    "question": "Chi può accedere alle sedi di gestori di giochi leciti per controlli?",
    "options": [
      "Gli Ufficiali e Agenti di P.S.",
      "Solo la Finanza",
      "Solo i Monopoli",
      "Nessuno"
    ],
    "answer": "Gli Ufficiali e Agenti di P.S."
  },
  {
    "id": 1143,
    "category": "Legislazione PS",
    "question": "Chi può accedere alle sedi di gestori di giochi leciti per controlli?",
    "options": [
      "Gli Ufficiali e Agenti di P.S.",
      "Solo la Finanza",
      "Solo i Monopoli",
      "Nessuno"
    ],
    "answer": "Gli Ufficiali e Agenti di P.S."
  },
  {
    "id": 1143,
    "category": "Legislazione PS",
    "question": "Chi può accedere alle sedi di gestori di giochi leciti per controlli?",
    "options": [
      "Gli Ufficiali e Agenti di P.S.",
      "Solo la Finanza",
      "Solo i Monopoli",
      "Nessuno"
    ],
    "answer": "Gli Ufficiali e Agenti di P.S."
  },
  {
    "id": 1144,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la vendita di armi comuni da sparo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministero"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1144,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la vendita di armi comuni da sparo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministero"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1144,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la vendita di armi comuni da sparo?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "Il Ministero"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1145,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la riparazione di armi?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Camera di Commercio"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1145,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la riparazione di armi?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Camera di Commercio"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1145,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per la riparazione di armi?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Camera di Commercio"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1146,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il deposito di esplosivi?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "I Vigili del Fuoco"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1146,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il deposito di esplosivi?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "I Vigili del Fuoco"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1146,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il deposito di esplosivi?",
    "options": [
      "Il Prefetto",
      "Il Questore",
      "Il Sindaco",
      "I Vigili del Fuoco"
    ],
    "answer": "Il Prefetto"
  },
  {
    "id": 1147,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il trasporto di gas tossici?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La ASL"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1147,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il trasporto di gas tossici?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La ASL"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1147,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per il trasporto di gas tossici?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La ASL"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1148,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per monti di pietà (pegni)?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Banca d'Italia"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1148,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per monti di pietà (pegni)?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Banca d'Italia"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1148,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per monti di pietà (pegni)?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Banca d'Italia"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1149,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per agenzie d'affari (non di competenza comunale)?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Regione"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1149,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per agenzie d'affari (non di competenza comunale)?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Regione"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1149,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per agenzie d'affari (non di competenza comunale)?",
    "options": [
      "Il Questore",
      "Il Prefetto",
      "Il Sindaco",
      "La Regione"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1150,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio dell'arte fotografica in studio?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "La Camera di Commercio"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1150,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio dell'arte fotografica in studio?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "La Camera di Commercio"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 1150,
    "category": "Legislazione PS",
    "question": "Chi rilascia la licenza per l'esercizio dell'arte fotografica in studio?",
    "options": [
      "Il Questore",
      "Il Sindaco",
      "Il Prefetto",
      "La Camera di Commercio"
    ],
    "answer": "Il Questore"
  },
  {
    "id": 2001,
    "category": "Diritto Penale",
    "question": "Cosa sancisce il principio di legalità (art. 1 c.p.)?",
    "options": [
      "Nessuno può essere punito per un fatto che non sia espressamente preveduto come reato dalla legge",
      "La legge è uguale per tutti",
      "La responsabilità penale è personale",
      "L'ignoranza della legge non scusa"
    ],
    "answer": "Nessuno può essere punito per un fatto che non sia espressamente preveduto come reato dalla legge"
  },
  {
    "id": 2001,
    "category": "Diritto Penale",
    "question": "Cosa sancisce il principio di legalità (art. 1 c.p.)?",
    "options": [
      "Nessuno può essere punito per un fatto che non sia espressamente preveduto come reato dalla legge",
      "La legge è uguale per tutti",
      "La responsabilità penale è personale",
      "L'ignoranza della legge non scusa"
    ],
    "answer": "Nessuno può essere punito per un fatto che non sia espressamente preveduto come reato dalla legge"
  },
  {
    "id": 2001,
    "category": "Diritto Penale",
    "question": "Cosa sancisce il principio di legalità (art. 1 c.p.)?",
    "options": [
      "Nessuno può essere punito per un fatto che non sia espressamente preveduto come reato dalla legge",
      "La legge è uguale per tutti",
      "La responsabilità penale è personale",
      "L'ignoranza della legge non scusa"
    ],
    "answer": "Nessuno può essere punito per un fatto che non sia espressamente preveduto come reato dalla legge"
  },
  {
    "id": 2002,
    "category": "Diritto Penale",
    "question": "Qual è la fonte del diritto penale in base al principio di riserva di legge?",
    "options": [
      "Solo la legge (o atti aventi forza di legge)",
      "I regolamenti governativi",
      "Le consuetudini",
      "Le circolari ministeriali"
    ],
    "answer": "Solo la legge (o atti aventi forza di legge)"
  },
  {
    "id": 2002,
    "category": "Diritto Penale",
    "question": "Qual è la fonte del diritto penale in base al principio di riserva di legge?",
    "options": [
      "Solo la legge (o atti aventi forza di legge)",
      "I regolamenti governativi",
      "Le consuetudini",
      "Le circolari ministeriali"
    ],
    "answer": "Solo la legge (o atti aventi forza di legge)"
  },
  {
    "id": 2002,
    "category": "Diritto Penale",
    "question": "Qual è la fonte del diritto penale in base al principio di riserva di legge?",
    "options": [
      "Solo la legge (o atti aventi forza di legge)",
      "I regolamenti governativi",
      "Le consuetudini",
      "Le circolari ministeriali"
    ],
    "answer": "Solo la legge (o atti aventi forza di legge)"
  },
  {
    "id": 2003,
    "category": "Diritto Penale",
    "question": "Cosa prevede il principio di irretroattività della legge penale?",
    "options": [
      "Nessuno può essere punito per un fatto che, secondo la legge del tempo in cui fu commesso, non costituiva reato",
      "La legge penale si applica sempre al passato",
      "La legge penale si applica solo ai fatti futuri, anche se più favorevole",
      "Il giudice decide caso per caso"
    ],
    "answer": "Nessuno può essere punito per un fatto che, secondo la legge del tempo in cui fu commesso, non costituiva reato"
  },
  {
    "id": 2003,
    "category": "Diritto Penale",
    "question": "Cosa prevede il principio di irretroattività della legge penale?",
    "options": [
      "Nessuno può essere punito per un fatto che, secondo la legge del tempo in cui fu commesso, non costituiva reato",
      "La legge penale si applica sempre al passato",
      "La legge penale si applica solo ai fatti futuri, anche se più favorevole",
      "Il giudice decide caso per caso"
    ],
    "answer": "Nessuno può essere punito per un fatto che, secondo la legge del tempo in cui fu commesso, non costituiva reato"
  },
  {
    "id": 2003,
    "category": "Diritto Penale",
    "question": "Cosa prevede il principio di irretroattività della legge penale?",
    "options": [
      "Nessuno può essere punito per un fatto che, secondo la legge del tempo in cui fu commesso, non costituiva reato",
      "La legge penale si applica sempre al passato",
      "La legge penale si applica solo ai fatti futuri, anche se più favorevole",
      "Il giudice decide caso per caso"
    ],
    "answer": "Nessuno può essere punito per un fatto che, secondo la legge del tempo in cui fu commesso, non costituiva reato"
  },
  {
    "id": 2004,
    "category": "Diritto Penale",
    "question": "Quando si applica retroattivamente la legge penale?",
    "options": [
      "Quando è più favorevole al reo (favor rei)",
      "Sempre",
      "Mai",
      "Solo per i delitti gravi"
    ],
    "answer": "Quando è più favorevole al reo (favor rei)"
  },
  {
    "id": 2004,
    "category": "Diritto Penale",
    "question": "Quando si applica retroattivamente la legge penale?",
    "options": [
      "Quando è più favorevole al reo (favor rei)",
      "Sempre",
      "Mai",
      "Solo per i delitti gravi"
    ],
    "answer": "Quando è più favorevole al reo (favor rei)"
  },
  {
    "id": 2004,
    "category": "Diritto Penale",
    "question": "Quando si applica retroattivamente la legge penale?",
    "options": [
      "Quando è più favorevole al reo (favor rei)",
      "Sempre",
      "Mai",
      "Solo per i delitti gravi"
    ],
    "answer": "Quando è più favorevole al reo (favor rei)"
  },
  {
    "id": 2005,
    "category": "Diritto Penale",
    "question": "Cosa impone il principio di tassatività?",
    "options": [
      "Che la norma penale descriva il fatto in modo chiaro, preciso e determinato",
      "Che il giudice possa decidere liberamente",
      "Che le tasse siano pagate",
      "Che la legge sia breve"
    ],
    "answer": "Che la norma penale descriva il fatto in modo chiaro, preciso e determinato"
  },
  {
    "id": 2005,
    "category": "Diritto Penale",
    "question": "Cosa impone il principio di tassatività?",
    "options": [
      "Che la norma penale descriva il fatto in modo chiaro, preciso e determinato",
      "Che il giudice possa decidere liberamente",
      "Che le tasse siano pagate",
      "Che la legge sia breve"
    ],
    "answer": "Che la norma penale descriva il fatto in modo chiaro, preciso e determinato"
  },
  {
    "id": 2005,
    "category": "Diritto Penale",
    "question": "Cosa impone il principio di tassatività?",
    "options": [
      "Che la norma penale descriva il fatto in modo chiaro, preciso e determinato",
      "Che il giudice possa decidere liberamente",
      "Che le tasse siano pagate",
      "Che la legge sia breve"
    ],
    "answer": "Che la norma penale descriva il fatto in modo chiaro, preciso e determinato"
  },
  {
    "id": 2006,
    "category": "Diritto Penale",
    "question": "È ammessa l'analogia nel diritto penale?",
    "options": [
      "No, è vietata per le norme incriminatrici (in malam partem)",
      "Sì, sempre",
      "Sì, se il giudice lo ritiene opportuno",
      "Solo per le contravvenzioni"
    ],
    "answer": "No, è vietata per le norme incriminatrici (in malam partem)"
  },
  {
    "id": 2006,
    "category": "Diritto Penale",
    "question": "È ammessa l'analogia nel diritto penale?",
    "options": [
      "No, è vietata per le norme incriminatrici (in malam partem)",
      "Sì, sempre",
      "Sì, se il giudice lo ritiene opportuno",
      "Solo per le contravvenzioni"
    ],
    "answer": "No, è vietata per le norme incriminatrici (in malam partem)"
  },
  {
    "id": 2006,
    "category": "Diritto Penale",
    "question": "È ammessa l'analogia nel diritto penale?",
    "options": [
      "No, è vietata per le norme incriminatrici (in malam partem)",
      "Sì, sempre",
      "Sì, se il giudice lo ritiene opportuno",
      "Solo per le contravvenzioni"
    ],
    "answer": "No, è vietata per le norme incriminatrici (in malam partem)"
  },
  {
    "id": 2007,
    "category": "Diritto Penale",
    "question": "Cosa si intende per principio di materialità?",
    "options": [
      "Il reato deve consistere in un fatto materiale esteriore, non in un pensiero",
      "Il reato deve causare un danno economico",
      "Il reato deve essere commesso con oggetti materiali",
      "Il reato deve essere scritto"
    ],
    "answer": "Il reato deve consistere in un fatto materiale esteriore, non in un pensiero"
  },
  {
    "id": 2007,
    "category": "Diritto Penale",
    "question": "Cosa si intende per principio di materialità?",
    "options": [
      "Il reato deve consistere in un fatto materiale esteriore, non in un pensiero",
      "Il reato deve causare un danno economico",
      "Il reato deve essere commesso con oggetti materiali",
      "Il reato deve essere scritto"
    ],
    "answer": "Il reato deve consistere in un fatto materiale esteriore, non in un pensiero"
  },
  {
    "id": 2007,
    "category": "Diritto Penale",
    "question": "Cosa si intende per principio di materialità?",
    "options": [
      "Il reato deve consistere in un fatto materiale esteriore, non in un pensiero",
      "Il reato deve causare un danno economico",
      "Il reato deve essere commesso con oggetti materiali",
      "Il reato deve essere scritto"
    ],
    "answer": "Il reato deve consistere in un fatto materiale esteriore, non in un pensiero"
  },
  {
    "id": 2008,
    "category": "Diritto Penale",
    "question": "Qual è la differenza tra delitti e contravvenzioni?",
    "options": [
      "Il tipo di pena prevista (ergastolo/reclusione/multa per i delitti; arresto/ammenda per le contravvenzioni)",
      "La gravità del fatto (i delitti sono sempre più gravi)",
      "Chi li commette",
      "Il luogo di commissione"
    ],
    "answer": "Il tipo di pena prevista (ergastolo/reclusione/multa per i delitti; arresto/ammenda per le contravvenzioni)"
  },
  {
    "id": 2008,
    "category": "Diritto Penale",
    "question": "Qual è la differenza tra delitti e contravvenzioni?",
    "options": [
      "Il tipo di pena prevista (ergastolo/reclusione/multa per i delitti; arresto/ammenda per le contravvenzioni)",
      "La gravità del fatto (i delitti sono sempre più gravi)",
      "Chi li commette",
      "Il luogo di commissione"
    ],
    "answer": "Il tipo di pena prevista (ergastolo/reclusione/multa per i delitti; arresto/ammenda per le contravvenzioni)"
  },
  {
    "id": 2008,
    "category": "Diritto Penale",
    "question": "Qual è la differenza tra delitti e contravvenzioni?",
    "options": [
      "Il tipo di pena prevista (ergastolo/reclusione/multa per i delitti; arresto/ammenda per le contravvenzioni)",
      "La gravità del fatto (i delitti sono sempre più gravi)",
      "Chi li commette",
      "Il luogo di commissione"
    ],
    "answer": "Il tipo di pena prevista (ergastolo/reclusione/multa per i delitti; arresto/ammenda per le contravvenzioni)"
  },
  {
    "id": 2009,
    "category": "Diritto Penale",
    "question": "Qual è l'elemento soggettivo richiesto per i delitti?",
    "options": [
      "Di regola il dolo (la colpa solo se espressamente prevista)",
      "Sempre la colpa",
      "La preterintenzione",
      "Indifferentemente dolo o colpa"
    ],
    "answer": "Di regola il dolo (la colpa solo se espressamente prevista)"
  },
  {
    "id": 2009,
    "category": "Diritto Penale",
    "question": "Qual è l'elemento soggettivo richiesto per i delitti?",
    "options": [
      "Di regola il dolo (la colpa solo se espressamente prevista)",
      "Sempre la colpa",
      "La preterintenzione",
      "Indifferentemente dolo o colpa"
    ],
    "answer": "Di regola il dolo (la colpa solo se espressamente prevista)"
  },
  {
    "id": 2009,
    "category": "Diritto Penale",
    "question": "Qual è l'elemento soggettivo richiesto per i delitti?",
    "options": [
      "Di regola il dolo (la colpa solo se espressamente prevista)",
      "Sempre la colpa",
      "La preterintenzione",
      "Indifferentemente dolo o colpa"
    ],
    "answer": "Di regola il dolo (la colpa solo se espressamente prevista)"
  },
  {
    "id": 2010,
    "category": "Diritto Penale",
    "question": "Qual è l'elemento soggettivo richiesto per le contravvenzioni?",
    "options": [
      "Indifferentemente dolo o colpa",
      "Solo il dolo",
      "Solo la colpa",
      "La responsabilità oggettiva"
    ],
    "answer": "Indifferentemente dolo o colpa"
  },
  {
    "id": 2010,
    "category": "Diritto Penale",
    "question": "Qual è l'elemento soggettivo richiesto per le contravvenzioni?",
    "options": [
      "Indifferentemente dolo o colpa",
      "Solo il dolo",
      "Solo la colpa",
      "La responsabilità oggettiva"
    ],
    "answer": "Indifferentemente dolo o colpa"
  },
  {
    "id": 2010,
    "category": "Diritto Penale",
    "question": "Qual è l'elemento soggettivo richiesto per le contravvenzioni?",
    "options": [
      "Indifferentemente dolo o colpa",
      "Solo il dolo",
      "Solo la colpa",
      "La responsabilità oggettiva"
    ],
    "answer": "Indifferentemente dolo o colpa"
  },
  {
    "id": 2011,
    "category": "Diritto Penale",
    "question": "Cosa si intende per reato omissivo improprio?",
    "options": [
      "Il mancato impedimento di un evento che si ha l'obbligo giuridico di impedire",
      "Il mancato compimento di un'azione prescritta",
      "L'omissione di soccorso",
      "L'omissione di atti d'ufficio"
    ],
    "answer": "Il mancato impedimento di un evento che si ha l'obbligo giuridico di impedire"
  },
  {
    "id": 2011,
    "category": "Diritto Penale",
    "question": "Cosa si intende per reato omissivo improprio?",
    "options": [
      "Il mancato impedimento di un evento che si ha l'obbligo giuridico di impedire",
      "Il mancato compimento di un'azione prescritta",
      "L'omissione di soccorso",
      "L'omissione di atti d'ufficio"
    ],
    "answer": "Il mancato impedimento di un evento che si ha l'obbligo giuridico di impedire"
  },
  {
    "id": 2011,
    "category": "Diritto Penale",
    "question": "Cosa si intende per reato omissivo improprio?",
    "options": [
      "Il mancato impedimento di un evento che si ha l'obbligo giuridico di impedire",
      "Il mancato compimento di un'azione prescritta",
      "L'omissione di soccorso",
      "L'omissione di atti d'ufficio"
    ],
    "answer": "Il mancato impedimento di un evento che si ha l'obbligo giuridico di impedire"
  },
  {
    "id": 2012,
    "category": "Diritto Penale",
    "question": "Cosa è il nesso di causalità?",
    "options": [
      "Il legame tra la condotta e l'evento",
      "Il legame tra il reo e la vittima",
      "Il motivo del reato",
      "La prova del reato"
    ],
    "answer": "Il legame tra la condotta e l'evento"
  },
  {
    "id": 2012,
    "category": "Diritto Penale",
    "question": "Cosa è il nesso di causalità?",
    "options": [
      "Il legame tra la condotta e l'evento",
      "Il legame tra il reo e la vittima",
      "Il motivo del reato",
      "La prova del reato"
    ],
    "answer": "Il legame tra la condotta e l'evento"
  },
  {
    "id": 2012,
    "category": "Diritto Penale",
    "question": "Cosa è il nesso di causalità?",
    "options": [
      "Il legame tra la condotta e l'evento",
      "Il legame tra il reo e la vittima",
      "Il motivo del reato",
      "La prova del reato"
    ],
    "answer": "Il legame tra la condotta e l'evento"
  },
  {
    "id": 2013,
    "category": "Diritto Penale",
    "question": "Cosa interrompe il nesso di causalità?",
    "options": [
      "Le cause sopravvenute da sole sufficienti a determinare l'evento",
      "Il concorso di colpa",
      "La volontà della vittima",
      "Il pentimento del reo"
    ],
    "answer": "Le cause sopravvenute da sole sufficienti a determinare l'evento"
  },
  {
    "id": 2013,
    "category": "Diritto Penale",
    "question": "Cosa interrompe il nesso di causalità?",
    "options": [
      "Le cause sopravvenute da sole sufficienti a determinare l'evento",
      "Il concorso di colpa",
      "La volontà della vittima",
      "Il pentimento del reo"
    ],
    "answer": "Le cause sopravvenute da sole sufficienti a determinare l'evento"
  },
  {
    "id": 2013,
    "category": "Diritto Penale",
    "question": "Cosa interrompe il nesso di causalità?",
    "options": [
      "Le cause sopravvenute da sole sufficienti a determinare l'evento",
      "Il concorso di colpa",
      "La volontà della vittima",
      "Il pentimento del reo"
    ],
    "answer": "Le cause sopravvenute da sole sufficienti a determinare l'evento"
  },
  {
    "id": 2014,
    "category": "Diritto Penale",
    "question": "Cosa sono le cause di giustificazione (scriminanti)?",
    "options": [
      "Situazioni che escludono l'antigiuridicità del fatto, rendendolo lecito",
      "Situazioni che diminuiscono la pena",
      "Situazioni che escludono la capacità di intendere e di volere",
      "Situazioni che estinguono il reato"
    ],
    "answer": "Situazioni che escludono l'antigiuridicità del fatto, rendendolo lecito"
  },
  {
    "id": 2014,
    "category": "Diritto Penale",
    "question": "Cosa sono le cause di giustificazione (scriminanti)?",
    "options": [
      "Situazioni che escludono l'antigiuridicità del fatto, rendendolo lecito",
      "Situazioni che diminuiscono la pena",
      "Situazioni che escludono la capacità di intendere e di volere",
      "Situazioni che estinguono il reato"
    ],
    "answer": "Situazioni che escludono l'antigiuridicità del fatto, rendendolo lecito"
  },
  {
    "id": 2014,
    "category": "Diritto Penale",
    "question": "Cosa sono le cause di giustificazione (scriminanti)?",
    "options": [
      "Situazioni che escludono l'antigiuridicità del fatto, rendendolo lecito",
      "Situazioni che diminuiscono la pena",
      "Situazioni che escludono la capacità di intendere e di volere",
      "Situazioni che estinguono il reato"
    ],
    "answer": "Situazioni che escludono l'antigiuridicità del fatto, rendendolo lecito"
  },
  {
    "id": 2015,
    "category": "Diritto Penale",
    "question": "Quale tra le seguenti è una causa di giustificazione?",
    "options": [
      "Legittima difesa",
      "Minore età",
      "Ubriachezza",
      "Provocazione"
    ],
    "answer": "Legittima difesa"
  },
  {
    "id": 2015,
    "category": "Diritto Penale",
    "question": "Quale tra le seguenti è una causa di giustificazione?",
    "options": [
      "Legittima difesa",
      "Minore età",
      "Ubriachezza",
      "Provocazione"
    ],
    "answer": "Legittima difesa"
  },
  {
    "id": 2015,
    "category": "Diritto Penale",
    "question": "Quale tra le seguenti è una causa di giustificazione?",
    "options": [
      "Legittima difesa",
      "Minore età",
      "Ubriachezza",
      "Provocazione"
    ],
    "answer": "Legittima difesa"
  },
  {
    "id": 2016,
    "category": "Diritto Penale",
    "question": "Quando sussiste la legittima difesa?",
    "options": [
      "Quando si è costretti dalla necessità di difendere un diritto contro il pericolo attuale di un'offesa ingiusta",
      "Quando si vuole vendicare un torto",
      "Quando si difende l'onore",
      "Quando si viene insultati"
    ],
    "answer": "Quando si è costretti dalla necessità di difendere un diritto contro il pericolo attuale di un'offesa ingiusta"
  },
  {
    "id": 2016,
    "category": "Diritto Penale",
    "question": "Quando sussiste la legittima difesa?",
    "options": [
      "Quando si è costretti dalla necessità di difendere un diritto contro il pericolo attuale di un'offesa ingiusta",
      "Quando si vuole vendicare un torto",
      "Quando si difende l'onore",
      "Quando si viene insultati"
    ],
    "answer": "Quando si è costretti dalla necessità di difendere un diritto contro il pericolo attuale di un'offesa ingiusta"
  },
  {
    "id": 2016,
    "category": "Diritto Penale",
    "question": "Quando sussiste la legittima difesa?",
    "options": [
      "Quando si è costretti dalla necessità di difendere un diritto contro il pericolo attuale di un'offesa ingiusta",
      "Quando si vuole vendicare un torto",
      "Quando si difende l'onore",
      "Quando si viene insultati"
    ],
    "answer": "Quando si è costretti dalla necessità di difendere un diritto contro il pericolo attuale di un'offesa ingiusta"
  },
  {
    "id": 2017,
    "category": "Diritto Penale",
    "question": "Qual è il requisito fondamentale della legittima difesa?",
    "options": [
      "La proporzione tra difesa e offesa",
      "L'uso di armi",
      "La presenza di testimoni",
      "L'autorizzazione del giudice"
    ],
    "answer": "La proporzione tra difesa e offesa"
  },
  {
    "id": 2017,
    "category": "Diritto Penale",
    "question": "Qual è il requisito fondamentale della legittima difesa?",
    "options": [
      "La proporzione tra difesa e offesa",
      "L'uso di armi",
      "La presenza di testimoni",
      "L'autorizzazione del giudice"
    ],
    "answer": "La proporzione tra difesa e offesa"
  },
  {
    "id": 2017,
    "category": "Diritto Penale",
    "question": "Qual è il requisito fondamentale della legittima difesa?",
    "options": [
      "La proporzione tra difesa e offesa",
      "L'uso di armi",
      "La presenza di testimoni",
      "L'autorizzazione del giudice"
    ],
    "answer": "La proporzione tra difesa e offesa"
  },
  {
    "id": 2018,
    "category": "Diritto Penale",
    "question": "Cosa prevede lo stato di necessità (art. 54 c.p.)?",
    "options": [
      "La non punibilità di chi agisce per salvare sé o altri dal pericolo attuale di un danno grave alla persona",
      "La non punibilità di chi agisce per bisogno economico",
      "La non punibilità di chi ruba per fame",
      "La non punibilità di chi agisce per ordine del superiore"
    ],
    "answer": "La non punibilità di chi agisce per salvare sé o altri dal pericolo attuale di un danno grave alla persona"
  },
  {
    "id": 2018,
    "category": "Diritto Penale",
    "question": "Cosa prevede lo stato di necessità (art. 54 c.p.)?",
    "options": [
      "La non punibilità di chi agisce per salvare sé o altri dal pericolo attuale di un danno grave alla persona",
      "La non punibilità di chi agisce per bisogno economico",
      "La non punibilità di chi ruba per fame",
      "La non punibilità di chi agisce per ordine del superiore"
    ],
    "answer": "La non punibilità di chi agisce per salvare sé o altri dal pericolo attuale di un danno grave alla persona"
  },
  {
    "id": 2018,
    "category": "Diritto Penale",
    "question": "Cosa prevede lo stato di necessità (art. 54 c.p.)?",
    "options": [
      "La non punibilità di chi agisce per salvare sé o altri dal pericolo attuale di un danno grave alla persona",
      "La non punibilità di chi agisce per bisogno economico",
      "La non punibilità di chi ruba per fame",
      "La non punibilità di chi agisce per ordine del superiore"
    ],
    "answer": "La non punibilità di chi agisce per salvare sé o altri dal pericolo attuale di un danno grave alla persona"
  },
  {
    "id": 2019,
    "category": "Diritto Penale",
    "question": "Cosa distingue lo stato di necessità dalla legittima difesa?",
    "options": [
      "Nello stato di necessità il pericolo non è causato volontariamente e l'azione lesiva ricade su un terzo innocente",
      "Nello stato di necessità si usano le armi",
      "Nella legittima difesa non c'è pericolo",
      "Non c'è differenza"
    ],
    "answer": "Nello stato di necessità il pericolo non è causato volontariamente e l'azione lesiva ricade su un terzo innocente"
  },
  {
    "id": 2019,
    "category": "Diritto Penale",
    "question": "Cosa distingue lo stato di necessità dalla legittima difesa?",
    "options": [
      "Nello stato di necessità il pericolo non è causato volontariamente e l'azione lesiva ricade su un terzo innocente",
      "Nello stato di necessità si usano le armi",
      "Nella legittima difesa non c'è pericolo",
      "Non c'è differenza"
    ],
    "answer": "Nello stato di necessità il pericolo non è causato volontariamente e l'azione lesiva ricade su un terzo innocente"
  },
  {
    "id": 2019,
    "category": "Diritto Penale",
    "question": "Cosa distingue lo stato di necessità dalla legittima difesa?",
    "options": [
      "Nello stato di necessità il pericolo non è causato volontariamente e l'azione lesiva ricade su un terzo innocente",
      "Nello stato di necessità si usano le armi",
      "Nella legittima difesa non c'è pericolo",
      "Non c'è differenza"
    ],
    "answer": "Nello stato di necessità il pericolo non è causato volontariamente e l'azione lesiva ricade su un terzo innocente"
  },
  {
    "id": 2020,
    "category": "Diritto Penale",
    "question": "Cosa si intende per dolo?",
    "options": [
      "Previsione e volontà dell'evento dannoso o pericoloso",
      "Negligenza o imprudenza",
      "Oltre l'intenzione",
      "Responsabilità oggettiva"
    ],
    "answer": "Previsione e volontà dell'evento dannoso o pericoloso"
  },
  {
    "id": 2020,
    "category": "Diritto Penale",
    "question": "Cosa si intende per dolo?",
    "options": [
      "Previsione e volontà dell'evento dannoso o pericoloso",
      "Negligenza o imprudenza",
      "Oltre l'intenzione",
      "Responsabilità oggettiva"
    ],
    "answer": "Previsione e volontà dell'evento dannoso o pericoloso"
  },
  {
    "id": 2020,
    "category": "Diritto Penale",
    "question": "Cosa si intende per dolo?",
    "options": [
      "Previsione e volontà dell'evento dannoso o pericoloso",
      "Negligenza o imprudenza",
      "Oltre l'intenzione",
      "Responsabilità oggettiva"
    ],
    "answer": "Previsione e volontà dell'evento dannoso o pericoloso"
  },
  {
    "id": 2021,
    "category": "Diritto Penale",
    "question": "Cosa si intende per colpa?",
    "options": [
      "Mancanza di volontà dell'evento, verificatosi per negligenza, imprudenza, imperizia o inosservanza di leggi",
      "Volontà dell'evento",
      "Intenzione di nuocere",
      "Caso fortuito"
    ],
    "answer": "Mancanza di volontà dell'evento, verificatosi per negligenza, imprudenza, imperizia o inosservanza di leggi"
  },
  {
    "id": 2021,
    "category": "Diritto Penale",
    "question": "Cosa si intende per colpa?",
    "options": [
      "Mancanza di volontà dell'evento, verificatosi per negligenza, imprudenza, imperizia o inosservanza di leggi",
      "Volontà dell'evento",
      "Intenzione di nuocere",
      "Caso fortuito"
    ],
    "answer": "Mancanza di volontà dell'evento, verificatosi per negligenza, imprudenza, imperizia o inosservanza di leggi"
  },
  {
    "id": 2021,
    "category": "Diritto Penale",
    "question": "Cosa si intende per colpa?",
    "options": [
      "Mancanza di volontà dell'evento, verificatosi per negligenza, imprudenza, imperizia o inosservanza di leggi",
      "Volontà dell'evento",
      "Intenzione di nuocere",
      "Caso fortuito"
    ],
    "answer": "Mancanza di volontà dell'evento, verificatosi per negligenza, imprudenza, imperizia o inosservanza di leggi"
  },
  {
    "id": 2022,
    "category": "Diritto Penale",
    "question": "Cosa si intende per preterintenzione?",
    "options": [
      "Quando dall'azione od omissione deriva un evento più grave di quello voluto",
      "Quando l'evento è voluto",
      "Quando l'evento non è voluto",
      "Quando l'evento è impossibile"
    ],
    "answer": "Quando dall'azione od omissione deriva un evento più grave di quello voluto"
  },
  {
    "id": 2022,
    "category": "Diritto Penale",
    "question": "Cosa si intende per preterintenzione?",
    "options": [
      "Quando dall'azione od omissione deriva un evento più grave di quello voluto",
      "Quando l'evento è voluto",
      "Quando l'evento non è voluto",
      "Quando l'evento è impossibile"
    ],
    "answer": "Quando dall'azione od omissione deriva un evento più grave di quello voluto"
  },
  {
    "id": 2022,
    "category": "Diritto Penale",
    "question": "Cosa si intende per preterintenzione?",
    "options": [
      "Quando dall'azione od omissione deriva un evento più grave di quello voluto",
      "Quando l'evento è voluto",
      "Quando l'evento non è voluto",
      "Quando l'evento è impossibile"
    ],
    "answer": "Quando dall'azione od omissione deriva un evento più grave di quello voluto"
  },
  {
    "id": 2023,
    "category": "Diritto Penale",
    "question": "Qual è un esempio di delitto preterintenzionale?",
    "options": [
      "Omicidio preterintenzionale (atti diretti a percuotere o ledere causano la morte)",
      "Furto",
      "Rapina",
      "Truffa"
    ],
    "answer": "Omicidio preterintenzionale (atti diretti a percuotere o ledere causano la morte)"
  },
  {
    "id": 2023,
    "category": "Diritto Penale",
    "question": "Qual è un esempio di delitto preterintenzionale?",
    "options": [
      "Omicidio preterintenzionale (atti diretti a percuotere o ledere causano la morte)",
      "Furto",
      "Rapina",
      "Truffa"
    ],
    "answer": "Omicidio preterintenzionale (atti diretti a percuotere o ledere causano la morte)"
  },
  {
    "id": 2023,
    "category": "Diritto Penale",
    "question": "Qual è un esempio di delitto preterintenzionale?",
    "options": [
      "Omicidio preterintenzionale (atti diretti a percuotere o ledere causano la morte)",
      "Furto",
      "Rapina",
      "Truffa"
    ],
    "answer": "Omicidio preterintenzionale (atti diretti a percuotere o ledere causano la morte)"
  },
  {
    "id": 2024,
    "category": "Diritto Penale",
    "question": "Cosa è il dolo eventuale?",
    "options": [
      "Il soggetto accetta il rischio che si verifichi l'evento, pur non volendolo direttamente",
      "Il soggetto vuole l'evento direttamente",
      "Il soggetto agisce per colpa",
      "Il soggetto non prevede l'evento"
    ],
    "answer": "Il soggetto accetta il rischio che si verifichi l'evento, pur non volendolo direttamente"
  },
  {
    "id": 2024,
    "category": "Diritto Penale",
    "question": "Cosa è il dolo eventuale?",
    "options": [
      "Il soggetto accetta il rischio che si verifichi l'evento, pur non volendolo direttamente",
      "Il soggetto vuole l'evento direttamente",
      "Il soggetto agisce per colpa",
      "Il soggetto non prevede l'evento"
    ],
    "answer": "Il soggetto accetta il rischio che si verifichi l'evento, pur non volendolo direttamente"
  },
  {
    "id": 2024,
    "category": "Diritto Penale",
    "question": "Cosa è il dolo eventuale?",
    "options": [
      "Il soggetto accetta il rischio che si verifichi l'evento, pur non volendolo direttamente",
      "Il soggetto vuole l'evento direttamente",
      "Il soggetto agisce per colpa",
      "Il soggetto non prevede l'evento"
    ],
    "answer": "Il soggetto accetta il rischio che si verifichi l'evento, pur non volendolo direttamente"
  },
  {
    "id": 2025,
    "category": "Diritto Penale",
    "question": "Cosa è la colpa cosciente?",
    "options": [
      "Il soggetto prevede l'evento ma confida di evitarlo (non lo vuole)",
      "Il soggetto vuole l'evento",
      "Il soggetto non prevede l'evento",
      "Il soggetto accetta il rischio"
    ],
    "answer": "Il soggetto prevede l'evento ma confida di evitarlo (non lo vuole)"
  },
  {
    "id": 2025,
    "category": "Diritto Penale",
    "question": "Cosa è la colpa cosciente?",
    "options": [
      "Il soggetto prevede l'evento ma confida di evitarlo (non lo vuole)",
      "Il soggetto vuole l'evento",
      "Il soggetto non prevede l'evento",
      "Il soggetto accetta il rischio"
    ],
    "answer": "Il soggetto prevede l'evento ma confida di evitarlo (non lo vuole)"
  },
  {
    "id": 2025,
    "category": "Diritto Penale",
    "question": "Cosa è la colpa cosciente?",
    "options": [
      "Il soggetto prevede l'evento ma confida di evitarlo (non lo vuole)",
      "Il soggetto vuole l'evento",
      "Il soggetto non prevede l'evento",
      "Il soggetto accetta il rischio"
    ],
    "answer": "Il soggetto prevede l'evento ma confida di evitarlo (non lo vuole)"
  },
  {
    "id": 2026,
    "category": "Diritto Penale",
    "question": "L'errore sul fatto che costituisce reato esclude la punibilità?",
    "options": [
      "Sì, esclude il dolo (ma può residuare responsabilità colposa se prevista)",
      "No, mai",
      "Solo se scusabile",
      "Solo per le contravvenzioni"
    ],
    "answer": "Sì, esclude il dolo (ma può residuare responsabilità colposa se prevista)"
  },
  {
    "id": 2026,
    "category": "Diritto Penale",
    "question": "L'errore sul fatto che costituisce reato esclude la punibilità?",
    "options": [
      "Sì, esclude il dolo (ma può residuare responsabilità colposa se prevista)",
      "No, mai",
      "Solo se scusabile",
      "Solo per le contravvenzioni"
    ],
    "answer": "Sì, esclude il dolo (ma può residuare responsabilità colposa se prevista)"
  },
  {
    "id": 2026,
    "category": "Diritto Penale",
    "question": "L'errore sul fatto che costituisce reato esclude la punibilità?",
    "options": [
      "Sì, esclude il dolo (ma può residuare responsabilità colposa se prevista)",
      "No, mai",
      "Solo se scusabile",
      "Solo per le contravvenzioni"
    ],
    "answer": "Sì, esclude il dolo (ma può residuare responsabilità colposa se prevista)"
  },
  {
    "id": 2027,
    "category": "Diritto Penale",
    "question": "L'ignoranza della legge penale scusa?",
    "options": [
      "No, salvo che si tratti di ignoranza inevitabile (sent. Corte Cost. 364/88)",
      "Sì, sempre",
      "Solo per gli stranieri",
      "Solo per i minori"
    ],
    "answer": "No, salvo che si tratti di ignoranza inevitabile (sent. Corte Cost. 364/88)"
  },
  {
    "id": 2027,
    "category": "Diritto Penale",
    "question": "L'ignoranza della legge penale scusa?",
    "options": [
      "No, salvo che si tratti di ignoranza inevitabile (sent. Corte Cost. 364/88)",
      "Sì, sempre",
      "Solo per gli stranieri",
      "Solo per i minori"
    ],
    "answer": "No, salvo che si tratti di ignoranza inevitabile (sent. Corte Cost. 364/88)"
  },
  {
    "id": 2027,
    "category": "Diritto Penale",
    "question": "L'ignoranza della legge penale scusa?",
    "options": [
      "No, salvo che si tratti di ignoranza inevitabile (sent. Corte Cost. 364/88)",
      "Sì, sempre",
      "Solo per gli stranieri",
      "Solo per i minori"
    ],
    "answer": "No, salvo che si tratti di ignoranza inevitabile (sent. Corte Cost. 364/88)"
  },
  {
    "id": 2028,
    "category": "Diritto Penale",
    "question": "Chi è imputabile?",
    "options": [
      "Chi ha la capacità di intendere e di volere al momento del fatto",
      "Chi è maggiorenne",
      "Chi è cittadino italiano",
      "Chi non ha precedenti penali"
    ],
    "answer": "Chi ha la capacità di intendere e di volere al momento del fatto"
  },
  {
    "id": 2028,
    "category": "Diritto Penale",
    "question": "Chi è imputabile?",
    "options": [
      "Chi ha la capacità di intendere e di volere al momento del fatto",
      "Chi è maggiorenne",
      "Chi è cittadino italiano",
      "Chi non ha precedenti penali"
    ],
    "answer": "Chi ha la capacità di intendere e di volere al momento del fatto"
  },
  {
    "id": 2028,
    "category": "Diritto Penale",
    "question": "Chi è imputabile?",
    "options": [
      "Chi ha la capacità di intendere e di volere al momento del fatto",
      "Chi è maggiorenne",
      "Chi è cittadino italiano",
      "Chi non ha precedenti penali"
    ],
    "answer": "Chi ha la capacità di intendere e di volere al momento del fatto"
  },
  {
    "id": 2029,
    "category": "Diritto Penale",
    "question": "Il minore di 14 anni è imputabile?",
    "options": [
      "No, mai (presunzione assoluta di non imputabilità)",
      "Sì, se capace di intendere e di volere",
      "Solo per reati gravi",
      "A discrezione del giudice"
    ],
    "answer": "No, mai (presunzione assoluta di non imputabilità)"
  },
  {
    "id": 2029,
    "category": "Diritto Penale",
    "question": "Il minore di 14 anni è imputabile?",
    "options": [
      "No, mai (presunzione assoluta di non imputabilità)",
      "Sì, se capace di intendere e di volere",
      "Solo per reati gravi",
      "A discrezione del giudice"
    ],
    "answer": "No, mai (presunzione assoluta di non imputabilità)"
  },
  {
    "id": 2029,
    "category": "Diritto Penale",
    "question": "Il minore di 14 anni è imputabile?",
    "options": [
      "No, mai (presunzione assoluta di non imputabilità)",
      "Sì, se capace di intendere e di volere",
      "Solo per reati gravi",
      "A discrezione del giudice"
    ],
    "answer": "No, mai (presunzione assoluta di non imputabilità)"
  },
  {
    "id": 2030,
    "category": "Diritto Penale",
    "question": "Il minore tra 14 e 18 anni è imputabile?",
    "options": [
      "Sì, se il giudice accerta che aveva la capacità di intendere e di volere (pena diminuita)",
      "Sì, sempre",
      "No, mai",
      "Solo se recidivo"
    ],
    "answer": "Sì, se il giudice accerta che aveva la capacità di intendere e di volere (pena diminuita)"
  },
  {
    "id": 2030,
    "category": "Diritto Penale",
    "question": "Il minore tra 14 e 18 anni è imputabile?",
    "options": [
      "Sì, se il giudice accerta che aveva la capacità di intendere e di volere (pena diminuita)",
      "Sì, sempre",
      "No, mai",
      "Solo se recidivo"
    ],
    "answer": "Sì, se il giudice accerta che aveva la capacità di intendere e di volere (pena diminuita)"
  },
  {
    "id": 2030,
    "category": "Diritto Penale",
    "question": "Il minore tra 14 e 18 anni è imputabile?",
    "options": [
      "Sì, se il giudice accerta che aveva la capacità di intendere e di volere (pena diminuita)",
      "Sì, sempre",
      "No, mai",
      "Solo se recidivo"
    ],
    "answer": "Sì, se il giudice accerta che aveva la capacità di intendere e di volere (pena diminuita)"
  },
  {
    "id": 2031,
    "category": "Diritto Penale",
    "question": "L'ubriachezza volontaria esclude l'imputabilità?",
    "options": [
      "No, il soggetto è pienamente imputabile",
      "Sì, sempre",
      "Solo se accidentale",
      "Diminuisce la pena"
    ],
    "answer": "No, il soggetto è pienamente imputabile"
  },
  {
    "id": 2031,
    "category": "Diritto Penale",
    "question": "L'ubriachezza volontaria esclude l'imputabilità?",
    "options": [
      "No, il soggetto è pienamente imputabile",
      "Sì, sempre",
      "Solo se accidentale",
      "Diminuisce la pena"
    ],
    "answer": "No, il soggetto è pienamente imputabile"
  },
  {
    "id": 2031,
    "category": "Diritto Penale",
    "question": "L'ubriachezza volontaria esclude l'imputabilità?",
    "options": [
      "No, il soggetto è pienamente imputabile",
      "Sì, sempre",
      "Solo se accidentale",
      "Diminuisce la pena"
    ],
    "answer": "No, il soggetto è pienamente imputabile"
  },
  {
    "id": 2032,
    "category": "Diritto Penale",
    "question": "Cosa comporta l'ubriachezza preordinata (per commettere un reato)?",
    "options": [
      "Un aumento di pena",
      "L'esclusione della punibilità",
      "Una diminuzione di pena",
      "Nessuna conseguenza"
    ],
    "answer": "Un aumento di pena"
  },
  {
    "id": 2032,
    "category": "Diritto Penale",
    "question": "Cosa comporta l'ubriachezza preordinata (per commettere un reato)?",
    "options": [
      "Un aumento di pena",
      "L'esclusione della punibilità",
      "Una diminuzione di pena",
      "Nessuna conseguenza"
    ],
    "answer": "Un aumento di pena"
  },
  {
    "id": 2032,
    "category": "Diritto Penale",
    "question": "Cosa comporta l'ubriachezza preordinata (per commettere un reato)?",
    "options": [
      "Un aumento di pena",
      "L'esclusione della punibilità",
      "Una diminuzione di pena",
      "Nessuna conseguenza"
    ],
    "answer": "Un aumento di pena"
  },
  {
    "id": 2033,
    "category": "Diritto Penale",
    "question": "Cosa sono le circostanze del reato?",
    "options": [
      "Elementi accidentali che comportano un aumento (aggravanti) o diminuzione (attenuanti) della pena",
      "Elementi essenziali del reato",
      "Le cause di giustificazione",
      "Le misure di sicurezza"
    ],
    "answer": "Elementi accidentali che comportano un aumento (aggravanti) o diminuzione (attenuanti) della pena"
  },
  {
    "id": 2033,
    "category": "Diritto Penale",
    "question": "Cosa sono le circostanze del reato?",
    "options": [
      "Elementi accidentali che comportano un aumento (aggravanti) o diminuzione (attenuanti) della pena",
      "Elementi essenziali del reato",
      "Le cause di giustificazione",
      "Le misure di sicurezza"
    ],
    "answer": "Elementi accidentali che comportano un aumento (aggravanti) o diminuzione (attenuanti) della pena"
  },
  {
    "id": 2033,
    "category": "Diritto Penale",
    "question": "Cosa sono le circostanze del reato?",
    "options": [
      "Elementi accidentali che comportano un aumento (aggravanti) o diminuzione (attenuanti) della pena",
      "Elementi essenziali del reato",
      "Le cause di giustificazione",
      "Le misure di sicurezza"
    ],
    "answer": "Elementi accidentali che comportano un aumento (aggravanti) o diminuzione (attenuanti) della pena"
  },
  {
    "id": 2034,
    "category": "Diritto Penale",
    "question": "Cosa è la recidiva?",
    "options": [
      "La commissione di un nuovo reato dopo una precedente condanna definitiva",
      "La prima condanna",
      "Il pentimento",
      "L'assoluzione"
    ],
    "answer": "La commissione di un nuovo reato dopo una precedente condanna definitiva"
  },
  {
    "id": 2034,
    "category": "Diritto Penale",
    "question": "Cosa è la recidiva?",
    "options": [
      "La commissione di un nuovo reato dopo una precedente condanna definitiva",
      "La prima condanna",
      "Il pentimento",
      "L'assoluzione"
    ],
    "answer": "La commissione di un nuovo reato dopo una precedente condanna definitiva"
  },
  {
    "id": 2034,
    "category": "Diritto Penale",
    "question": "Cosa è la recidiva?",
    "options": [
      "La commissione di un nuovo reato dopo una precedente condanna definitiva",
      "La prima condanna",
      "Il pentimento",
      "L'assoluzione"
    ],
    "answer": "La commissione di un nuovo reato dopo una precedente condanna definitiva"
  },
  {
    "id": 2035,
    "category": "Diritto Penale",
    "question": "Quando si configura il tentativo (delitto tentato)?",
    "options": [
      "Quando si compiono atti idonei diretti in modo non equivoco a commettere un delitto, ma l'evento non si verifica",
      "Quando si pensa di commettere un reato",
      "Quando si commette un reato per imprudenza",
      "Quando il reato è consumato"
    ],
    "answer": "Quando si compiono atti idonei diretti in modo non equivoco a commettere un delitto, ma l'evento non si verifica"
  },
  {
    "id": 2035,
    "category": "Diritto Penale",
    "question": "Quando si configura il tentativo (delitto tentato)?",
    "options": [
      "Quando si compiono atti idonei diretti in modo non equivoco a commettere un delitto, ma l'evento non si verifica",
      "Quando si pensa di commettere un reato",
      "Quando si commette un reato per imprudenza",
      "Quando il reato è consumato"
    ],
    "answer": "Quando si compiono atti idonei diretti in modo non equivoco a commettere un delitto, ma l'evento non si verifica"
  },
  {
    "id": 2035,
    "category": "Diritto Penale",
    "question": "Quando si configura il tentativo (delitto tentato)?",
    "options": [
      "Quando si compiono atti idonei diretti in modo non equivoco a commettere un delitto, ma l'evento non si verifica",
      "Quando si pensa di commettere un reato",
      "Quando si commette un reato per imprudenza",
      "Quando il reato è consumato"
    ],
    "answer": "Quando si compiono atti idonei diretti in modo non equivoco a commettere un delitto, ma l'evento non si verifica"
  },
  {
    "id": 2036,
    "category": "Diritto Penale",
    "question": "Come è punito il delitto tentato?",
    "options": [
      "Con la pena prevista per il delitto consumato diminuita da un terzo a due terzi",
      "Con la stessa pena del delitto consumato",
      "Non è punito",
      "Con una multa"
    ],
    "answer": "Con la pena prevista per il delitto consumato diminuita da un terzo a due terzi"
  },
  {
    "id": 2036,
    "category": "Diritto Penale",
    "question": "Come è punito il delitto tentato?",
    "options": [
      "Con la pena prevista per il delitto consumato diminuita da un terzo a due terzi",
      "Con la stessa pena del delitto consumato",
      "Non è punito",
      "Con una multa"
    ],
    "answer": "Con la pena prevista per il delitto consumato diminuita da un terzo a due terzi"
  },
  {
    "id": 2036,
    "category": "Diritto Penale",
    "question": "Come è punito il delitto tentato?",
    "options": [
      "Con la pena prevista per il delitto consumato diminuita da un terzo a due terzi",
      "Con la stessa pena del delitto consumato",
      "Non è punito",
      "Con una multa"
    ],
    "answer": "Con la pena prevista per il delitto consumato diminuita da un terzo a due terzi"
  },
  {
    "id": 2037,
    "category": "Diritto Penale",
    "question": "Cosa è la desistenza volontaria?",
    "options": [
      "Quando il colpevole interrompe volontariamente l'azione criminosa prima che sia compiuta",
      "Quando il colpevole si costituisce",
      "Quando il colpevole confessa",
      "Quando il colpevole scappa"
    ],
    "answer": "Quando il colpevole interrompe volontariamente l'azione criminosa prima che sia compiuta"
  },
  {
    "id": 2037,
    "category": "Diritto Penale",
    "question": "Cosa è la desistenza volontaria?",
    "options": [
      "Quando il colpevole interrompe volontariamente l'azione criminosa prima che sia compiuta",
      "Quando il colpevole si costituisce",
      "Quando il colpevole confessa",
      "Quando il colpevole scappa"
    ],
    "answer": "Quando il colpevole interrompe volontariamente l'azione criminosa prima che sia compiuta"
  },
  {
    "id": 2037,
    "category": "Diritto Penale",
    "question": "Cosa è la desistenza volontaria?",
    "options": [
      "Quando il colpevole interrompe volontariamente l'azione criminosa prima che sia compiuta",
      "Quando il colpevole si costituisce",
      "Quando il colpevole confessa",
      "Quando il colpevole scappa"
    ],
    "answer": "Quando il colpevole interrompe volontariamente l'azione criminosa prima che sia compiuta"
  },
  {
    "id": 2038,
    "category": "Diritto Penale",
    "question": "Cosa comporta la desistenza volontaria?",
    "options": [
      "L'impunità per il tentativo (si risponde solo degli atti già compiuti se costituiscono reato diverso)",
      "Una diminuzione di pena",
      "L'aumento di pena",
      "Nulla"
    ],
    "answer": "L'impunità per il tentativo (si risponde solo degli atti già compiuti se costituiscono reato diverso)"
  },
  {
    "id": 2038,
    "category": "Diritto Penale",
    "question": "Cosa comporta la desistenza volontaria?",
    "options": [
      "L'impunità per il tentativo (si risponde solo degli atti già compiuti se costituiscono reato diverso)",
      "Una diminuzione di pena",
      "L'aumento di pena",
      "Nulla"
    ],
    "answer": "L'impunità per il tentativo (si risponde solo degli atti già compiuti se costituiscono reato diverso)"
  },
  {
    "id": 2038,
    "category": "Diritto Penale",
    "question": "Cosa comporta la desistenza volontaria?",
    "options": [
      "L'impunità per il tentativo (si risponde solo degli atti già compiuti se costituiscono reato diverso)",
      "Una diminuzione di pena",
      "L'aumento di pena",
      "Nulla"
    ],
    "answer": "L'impunità per il tentativo (si risponde solo degli atti già compiuti se costituiscono reato diverso)"
  },
  {
    "id": 2039,
    "category": "Diritto Penale",
    "question": "Cosa è il concorso di persone nel reato?",
    "options": [
      "Quando più persone concorrono nel medesimo reato",
      "Quando una persona commette più reati",
      "Quando si commette un reato in piazza",
      "Quando ci sono testimoni"
    ],
    "answer": "Quando più persone concorrono nel medesimo reato"
  },
  {
    "id": 2039,
    "category": "Diritto Penale",
    "question": "Cosa è il concorso di persone nel reato?",
    "options": [
      "Quando più persone concorrono nel medesimo reato",
      "Quando una persona commette più reati",
      "Quando si commette un reato in piazza",
      "Quando ci sono testimoni"
    ],
    "answer": "Quando più persone concorrono nel medesimo reato"
  },
  {
    "id": 2039,
    "category": "Diritto Penale",
    "question": "Cosa è il concorso di persone nel reato?",
    "options": [
      "Quando più persone concorrono nel medesimo reato",
      "Quando una persona commette più reati",
      "Quando si commette un reato in piazza",
      "Quando ci sono testimoni"
    ],
    "answer": "Quando più persone concorrono nel medesimo reato"
  },
  {
    "id": 2040,
    "category": "Diritto Penale",
    "question": "Qual è la pena per i concorrenti nel reato?",
    "options": [
      "Ciascuno soggiace alla pena stabilita per il reato (salvo circostanze aggravanti o attenuanti)",
      "La pena è divisa tra i concorrenti",
      "Solo l'esecutore materiale è punito",
      "Solo il mandante è punito"
    ],
    "answer": "Ciascuno soggiace alla pena stabilita per il reato (salvo circostanze aggravanti o attenuanti)"
  },
  {
    "id": 2040,
    "category": "Diritto Penale",
    "question": "Qual è la pena per i concorrenti nel reato?",
    "options": [
      "Ciascuno soggiace alla pena stabilita per il reato (salvo circostanze aggravanti o attenuanti)",
      "La pena è divisa tra i concorrenti",
      "Solo l'esecutore materiale è punito",
      "Solo il mandante è punito"
    ],
    "answer": "Ciascuno soggiace alla pena stabilita per il reato (salvo circostanze aggravanti o attenuanti)"
  },
  {
    "id": 2040,
    "category": "Diritto Penale",
    "question": "Qual è la pena per i concorrenti nel reato?",
    "options": [
      "Ciascuno soggiace alla pena stabilita per il reato (salvo circostanze aggravanti o attenuanti)",
      "La pena è divisa tra i concorrenti",
      "Solo l'esecutore materiale è punito",
      "Solo il mandante è punito"
    ],
    "answer": "Ciascuno soggiace alla pena stabilita per il reato (salvo circostanze aggravanti o attenuanti)"
  },
  {
    "id": 2041,
    "category": "Diritto Penale",
    "question": "Cosa è il reato continuato?",
    "options": [
      "Più azioni od omissioni esecutive di un medesimo disegno criminoso",
      "Un reato che dura nel tempo",
      "La recidiva",
      "Il concorso di persone"
    ],
    "answer": "Più azioni od omissioni esecutive di un medesimo disegno criminoso"
  },
  {
    "id": 2041,
    "category": "Diritto Penale",
    "question": "Cosa è il reato continuato?",
    "options": [
      "Più azioni od omissioni esecutive di un medesimo disegno criminoso",
      "Un reato che dura nel tempo",
      "La recidiva",
      "Il concorso di persone"
    ],
    "answer": "Più azioni od omissioni esecutive di un medesimo disegno criminoso"
  },
  {
    "id": 2041,
    "category": "Diritto Penale",
    "question": "Cosa è il reato continuato?",
    "options": [
      "Più azioni od omissioni esecutive di un medesimo disegno criminoso",
      "Un reato che dura nel tempo",
      "La recidiva",
      "Il concorso di persone"
    ],
    "answer": "Più azioni od omissioni esecutive di un medesimo disegno criminoso"
  },
  {
    "id": 2042,
    "category": "Diritto Penale",
    "question": "Come è punito il reato continuato?",
    "options": [
      "Con la pena prevista per la violazione più grave aumentata fino al triplo (cumulo giuridico)",
      "Con la somma delle pene (cumulo materiale)",
      "Con la pena del reato meno grave",
      "Non è punito"
    ],
    "answer": "Con la pena prevista per la violazione più grave aumentata fino al triplo (cumulo giuridico)"
  },
  {
    "id": 2042,
    "category": "Diritto Penale",
    "question": "Come è punito il reato continuato?",
    "options": [
      "Con la pena prevista per la violazione più grave aumentata fino al triplo (cumulo giuridico)",
      "Con la somma delle pene (cumulo materiale)",
      "Con la pena del reato meno grave",
      "Non è punito"
    ],
    "answer": "Con la pena prevista per la violazione più grave aumentata fino al triplo (cumulo giuridico)"
  },
  {
    "id": 2042,
    "category": "Diritto Penale",
    "question": "Come è punito il reato continuato?",
    "options": [
      "Con la pena prevista per la violazione più grave aumentata fino al triplo (cumulo giuridico)",
      "Con la somma delle pene (cumulo materiale)",
      "Con la pena del reato meno grave",
      "Non è punito"
    ],
    "answer": "Con la pena prevista per la violazione più grave aumentata fino al triplo (cumulo giuridico)"
  },
  {
    "id": 2043,
    "category": "Diritto Penale",
    "question": "Cosa è l'aberratio ictus?",
    "options": [
      "Offesa a persona diversa da quella alla quale l'offesa era diretta",
      "Errore sul fatto",
      "Reato impossibile",
      "Evento diverso da quello voluto"
    ],
    "answer": "Offesa a persona diversa da quella alla quale l'offesa era diretta"
  },
  {
    "id": 2043,
    "category": "Diritto Penale",
    "question": "Cosa è l'aberratio ictus?",
    "options": [
      "Offesa a persona diversa da quella alla quale l'offesa era diretta",
      "Errore sul fatto",
      "Reato impossibile",
      "Evento diverso da quello voluto"
    ],
    "answer": "Offesa a persona diversa da quella alla quale l'offesa era diretta"
  },
  {
    "id": 2043,
    "category": "Diritto Penale",
    "question": "Cosa è l'aberratio ictus?",
    "options": [
      "Offesa a persona diversa da quella alla quale l'offesa era diretta",
      "Errore sul fatto",
      "Reato impossibile",
      "Evento diverso da quello voluto"
    ],
    "answer": "Offesa a persona diversa da quella alla quale l'offesa era diretta"
  },
  {
    "id": 2044,
    "category": "Diritto Penale",
    "question": "Quali sono le funzioni della pena?",
    "options": [
      "Preventiva, retributiva, rieducativa",
      "Solo punitiva",
      "Solo preventiva",
      "Solo economica"
    ],
    "answer": "Preventiva, retributiva, rieducativa"
  },
  {
    "id": 2044,
    "category": "Diritto Penale",
    "question": "Quali sono le funzioni della pena?",
    "options": [
      "Preventiva, retributiva, rieducativa",
      "Solo punitiva",
      "Solo preventiva",
      "Solo economica"
    ],
    "answer": "Preventiva, retributiva, rieducativa"
  },
  {
    "id": 2044,
    "category": "Diritto Penale",
    "question": "Quali sono le funzioni della pena?",
    "options": [
      "Preventiva, retributiva, rieducativa",
      "Solo punitiva",
      "Solo preventiva",
      "Solo economica"
    ],
    "answer": "Preventiva, retributiva, rieducativa"
  },
  {
    "id": 2045,
    "category": "Diritto Penale",
    "question": "Qual è una causa di estinzione del reato?",
    "options": [
      "Prescrizione",
      "Indulto (estingue la pena)",
      "Grazia (estingue la pena)",
      "Recidiva"
    ],
    "answer": "Prescrizione"
  },
  {
    "id": 2045,
    "category": "Diritto Penale",
    "question": "Qual è una causa di estinzione del reato?",
    "options": [
      "Prescrizione",
      "Indulto (estingue la pena)",
      "Grazia (estingue la pena)",
      "Recidiva"
    ],
    "answer": "Prescrizione"
  },
  {
    "id": 2045,
    "category": "Diritto Penale",
    "question": "Qual è una causa di estinzione del reato?",
    "options": [
      "Prescrizione",
      "Indulto (estingue la pena)",
      "Grazia (estingue la pena)",
      "Recidiva"
    ],
    "answer": "Prescrizione"
  },
  {
    "id": 2046,
    "category": "Diritto Penale",
    "question": "Cosa è l'amnistia?",
    "options": [
      "Un provvedimento del Parlamento che estingue il reato (rinuncia a perseguirlo)",
      "Un provvedimento del Presidente della Repubblica",
      "Uno sconto di pena",
      "La liberazione anticipata"
    ],
    "answer": "Un provvedimento del Parlamento che estingue il reato (rinuncia a perseguirlo)"
  },
  {
    "id": 2046,
    "category": "Diritto Penale",
    "question": "Cosa è l'amnistia?",
    "options": [
      "Un provvedimento del Parlamento che estingue il reato (rinuncia a perseguirlo)",
      "Un provvedimento del Presidente della Repubblica",
      "Uno sconto di pena",
      "La liberazione anticipata"
    ],
    "answer": "Un provvedimento del Parlamento che estingue il reato (rinuncia a perseguirlo)"
  },
  {
    "id": 2046,
    "category": "Diritto Penale",
    "question": "Cosa è l'amnistia?",
    "options": [
      "Un provvedimento del Parlamento che estingue il reato (rinuncia a perseguirlo)",
      "Un provvedimento del Presidente della Repubblica",
      "Uno sconto di pena",
      "La liberazione anticipata"
    ],
    "answer": "Un provvedimento del Parlamento che estingue il reato (rinuncia a perseguirlo)"
  },
  {
    "id": 2047,
    "category": "Diritto Penale",
    "question": "Cosa sono le misure di sicurezza?",
    "options": [
      "Provvedimenti applicati ai soggetti socialmente pericolosi (anche non imputabili) per rieducazione/cura",
      "Pene accessorie",
      "Misure cautelari",
      "Sanzioni amministrative"
    ],
    "answer": "Provvedimenti applicati ai soggetti socialmente pericolosi (anche non imputabili) per rieducazione/cura"
  },
  {
    "id": 2047,
    "category": "Diritto Penale",
    "question": "Cosa sono le misure di sicurezza?",
    "options": [
      "Provvedimenti applicati ai soggetti socialmente pericolosi (anche non imputabili) per rieducazione/cura",
      "Pene accessorie",
      "Misure cautelari",
      "Sanzioni amministrative"
    ],
    "answer": "Provvedimenti applicati ai soggetti socialmente pericolosi (anche non imputabili) per rieducazione/cura"
  },
  {
    "id": 2047,
    "category": "Diritto Penale",
    "question": "Cosa sono le misure di sicurezza?",
    "options": [
      "Provvedimenti applicati ai soggetti socialmente pericolosi (anche non imputabili) per rieducazione/cura",
      "Pene accessorie",
      "Misure cautelari",
      "Sanzioni amministrative"
    ],
    "answer": "Provvedimenti applicati ai soggetti socialmente pericolosi (anche non imputabili) per rieducazione/cura"
  },
  {
    "id": 2048,
    "category": "Diritto Penale",
    "question": "Qual è il presupposto per l'applicazione delle misure di sicurezza?",
    "options": [
      "La pericolosità sociale",
      "La colpevolezza",
      "Il dolo",
      "La recidiva"
    ],
    "answer": "La pericolosità sociale"
  },
  {
    "id": 2048,
    "category": "Diritto Penale",
    "question": "Qual è il presupposto per l'applicazione delle misure di sicurezza?",
    "options": [
      "La pericolosità sociale",
      "La colpevolezza",
      "Il dolo",
      "La recidiva"
    ],
    "answer": "La pericolosità sociale"
  },
  {
    "id": 2048,
    "category": "Diritto Penale",
    "question": "Qual è il presupposto per l'applicazione delle misure di sicurezza?",
    "options": [
      "La pericolosità sociale",
      "La colpevolezza",
      "Il dolo",
      "La recidiva"
    ],
    "answer": "La pericolosità sociale"
  },
  {
    "id": 2049,
    "category": "Diritto Penale",
    "question": "Cosa è l'omicidio stradale (art. 589 bis c.p.)?",
    "options": [
      "Cagionare per colpa la morte di una persona violando le norme sulla circolazione stradale",
      "Un incidente casuale",
      "Un omicidio doloso commesso in auto",
      "Una contravvenzione"
    ],
    "answer": "Cagionare per colpa la morte di una persona violando le norme sulla circolazione stradale"
  },
  {
    "id": 2049,
    "category": "Diritto Penale",
    "question": "Cosa è l'omicidio stradale (art. 589 bis c.p.)?",
    "options": [
      "Cagionare per colpa la morte di una persona violando le norme sulla circolazione stradale",
      "Un incidente casuale",
      "Un omicidio doloso commesso in auto",
      "Una contravvenzione"
    ],
    "answer": "Cagionare per colpa la morte di una persona violando le norme sulla circolazione stradale"
  },
  {
    "id": 2049,
    "category": "Diritto Penale",
    "question": "Cosa è l'omicidio stradale (art. 589 bis c.p.)?",
    "options": [
      "Cagionare per colpa la morte di una persona violando le norme sulla circolazione stradale",
      "Un incidente casuale",
      "Un omicidio doloso commesso in auto",
      "Una contravvenzione"
    ],
    "answer": "Cagionare per colpa la morte di una persona violando le norme sulla circolazione stradale"
  },
  {
    "id": 2050,
    "category": "Diritto Penale",
    "question": "Quando l'uso delle armi è legittimo (art. 53 c.p.)?",
    "options": [
      "Quando il pubblico ufficiale vi è costretto per respingere una violenza o vincere una resistenza",
      "Sempre se si è in servizio",
      "Per punire un criminale",
      "Per intimidire la folla"
    ],
    "answer": "Quando il pubblico ufficiale vi è costretto per respingere una violenza o vincere una resistenza"
  },
  {
    "id": 2050,
    "category": "Diritto Penale",
    "question": "Quando l'uso delle armi è legittimo (art. 53 c.p.)?",
    "options": [
      "Quando il pubblico ufficiale vi è costretto per respingere una violenza o vincere una resistenza",
      "Sempre se si è in servizio",
      "Per punire un criminale",
      "Per intimidire la folla"
    ],
    "answer": "Quando il pubblico ufficiale vi è costretto per respingere una violenza o vincere una resistenza"
  },
  {
    "id": 2050,
    "category": "Diritto Penale",
    "question": "Quando l'uso delle armi è legittimo (art. 53 c.p.)?",
    "options": [
      "Quando il pubblico ufficiale vi è costretto per respingere una violenza o vincere una resistenza",
      "Sempre se si è in servizio",
      "Per punire un criminale",
      "Per intimidire la folla"
    ],
    "answer": "Quando il pubblico ufficiale vi è costretto per respingere una violenza o vincere una resistenza"
  },
  {
    "id": 2051,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 328 c.p. (Rifiuto di atti d'ufficio)?",
    "options": [
      "Il pubblico ufficiale che rifiuta indebitamente un atto del suo ufficio che deve essere compiuto senza ritardo per ragioni di giustizia o sicurezza pubblica",
      "Il pubblico ufficiale che arriva in ritardo",
      "Il pubblico ufficiale che sbaglia un atto",
      "Il privato che non obbedisce al pubblico ufficiale"
    ],
    "answer": "Il pubblico ufficiale che rifiuta indebitamente un atto del suo ufficio che deve essere compiuto senza ritardo per ragioni di giustizia o sicurezza pubblica"
  },
  {
    "id": 2051,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 328 c.p. (Rifiuto di atti d'ufficio)?",
    "options": [
      "Il pubblico ufficiale che rifiuta indebitamente un atto del suo ufficio che deve essere compiuto senza ritardo per ragioni di giustizia o sicurezza pubblica",
      "Il pubblico ufficiale che arriva in ritardo",
      "Il pubblico ufficiale che sbaglia un atto",
      "Il privato che non obbedisce al pubblico ufficiale"
    ],
    "answer": "Il pubblico ufficiale che rifiuta indebitamente un atto del suo ufficio che deve essere compiuto senza ritardo per ragioni di giustizia o sicurezza pubblica"
  },
  {
    "id": 2051,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 328 c.p. (Rifiuto di atti d'ufficio)?",
    "options": [
      "Il pubblico ufficiale che rifiuta indebitamente un atto del suo ufficio che deve essere compiuto senza ritardo per ragioni di giustizia o sicurezza pubblica",
      "Il pubblico ufficiale che arriva in ritardo",
      "Il pubblico ufficiale che sbaglia un atto",
      "Il privato che non obbedisce al pubblico ufficiale"
    ],
    "answer": "Il pubblico ufficiale che rifiuta indebitamente un atto del suo ufficio che deve essere compiuto senza ritardo per ragioni di giustizia o sicurezza pubblica"
  },
  {
    "id": 2052,
    "category": "Diritto Penale",
    "question": "Nella seconda ipotesi di rifiuto di atti d'ufficio (omissione), quanto tempo deve trascorrere dalla richiesta scritta perché si configuri il reato?",
    "options": [
      "30 giorni",
      "15 giorni",
      "60 giorni",
      "90 giorni"
    ],
    "answer": "30 giorni"
  },
  {
    "id": 2052,
    "category": "Diritto Penale",
    "question": "Nella seconda ipotesi di rifiuto di atti d'ufficio (omissione), quanto tempo deve trascorrere dalla richiesta scritta perché si configuri il reato?",
    "options": [
      "30 giorni",
      "15 giorni",
      "60 giorni",
      "90 giorni"
    ],
    "answer": "30 giorni"
  },
  {
    "id": 2052,
    "category": "Diritto Penale",
    "question": "Nella seconda ipotesi di rifiuto di atti d'ufficio (omissione), quanto tempo deve trascorrere dalla richiesta scritta perché si configuri il reato?",
    "options": [
      "30 giorni",
      "15 giorni",
      "60 giorni",
      "90 giorni"
    ],
    "answer": "30 giorni"
  },
  {
    "id": 2053,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 316 bis c.p. (Malversazione a danno dello Stato)?",
    "options": [
      "L'estraneo alla P.A. che, ottenuti contributi pubblici per opere o attività di pubblico interesse, non li destina a tali finalità",
      "Il pubblico ufficiale che si appropria di denaro",
      "Il furto ai danni dello Stato",
      "La truffa aggravata"
    ],
    "answer": "L'estraneo alla P.A. che, ottenuti contributi pubblici per opere o attività di pubblico interesse, non li destina a tali finalità"
  },
  {
    "id": 2053,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 316 bis c.p. (Malversazione a danno dello Stato)?",
    "options": [
      "L'estraneo alla P.A. che, ottenuti contributi pubblici per opere o attività di pubblico interesse, non li destina a tali finalità",
      "Il pubblico ufficiale che si appropria di denaro",
      "Il furto ai danni dello Stato",
      "La truffa aggravata"
    ],
    "answer": "L'estraneo alla P.A. che, ottenuti contributi pubblici per opere o attività di pubblico interesse, non li destina a tali finalità"
  },
  {
    "id": 2053,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 316 bis c.p. (Malversazione a danno dello Stato)?",
    "options": [
      "L'estraneo alla P.A. che, ottenuti contributi pubblici per opere o attività di pubblico interesse, non li destina a tali finalità",
      "Il pubblico ufficiale che si appropria di denaro",
      "Il furto ai danni dello Stato",
      "La truffa aggravata"
    ],
    "answer": "L'estraneo alla P.A. che, ottenuti contributi pubblici per opere o attività di pubblico interesse, non li destina a tali finalità"
  },
  {
    "id": 2054,
    "category": "Diritto Penale",
    "question": "Qual è la differenza tra Violenza o minaccia a P.U. (art. 336) e Resistenza a P.U. (art. 337)?",
    "options": [
      "Nell'art. 336 la violenza/minaccia precede l'atto per costringere il P.U. a fare/ommettere qualcosa; nell'art. 337 avviene MENTRE il P.U. compie l'atto per opporsi",
      "Non c'è differenza",
      "L'art. 336 riguarda solo la violenza fisica",
      "L'art. 337 riguarda solo la minaccia"
    ],
    "answer": "Nell'art. 336 la violenza/minaccia precede l'atto per costringere il P.U. a fare/ommettere qualcosa; nell'art. 337 avviene MENTRE il P.U. compie l'atto per opporsi"
  },
  {
    "id": 2054,
    "category": "Diritto Penale",
    "question": "Qual è la differenza tra Violenza o minaccia a P.U. (art. 336) e Resistenza a P.U. (art. 337)?",
    "options": [
      "Nell'art. 336 la violenza/minaccia precede l'atto per costringere il P.U. a fare/ommettere qualcosa; nell'art. 337 avviene MENTRE il P.U. compie l'atto per opporsi",
      "Non c'è differenza",
      "L'art. 336 riguarda solo la violenza fisica",
      "L'art. 337 riguarda solo la minaccia"
    ],
    "answer": "Nell'art. 336 la violenza/minaccia precede l'atto per costringere il P.U. a fare/ommettere qualcosa; nell'art. 337 avviene MENTRE il P.U. compie l'atto per opporsi"
  },
  {
    "id": 2054,
    "category": "Diritto Penale",
    "question": "Qual è la differenza tra Violenza o minaccia a P.U. (art. 336) e Resistenza a P.U. (art. 337)?",
    "options": [
      "Nell'art. 336 la violenza/minaccia precede l'atto per costringere il P.U. a fare/ommettere qualcosa; nell'art. 337 avviene MENTRE il P.U. compie l'atto per opporsi",
      "Non c'è differenza",
      "L'art. 336 riguarda solo la violenza fisica",
      "L'art. 337 riguarda solo la minaccia"
    ],
    "answer": "Nell'art. 336 la violenza/minaccia precede l'atto per costringere il P.U. a fare/ommettere qualcosa; nell'art. 337 avviene MENTRE il P.U. compie l'atto per opporsi"
  },
  {
    "id": 2055,
    "category": "Diritto Penale",
    "question": "La resistenza passiva (es. buttarsi a terra) integra il reato di Resistenza a P.U.?",
    "options": [
      "No, la resistenza deve essere attiva (violenza o minaccia)",
      "Sì, sempre",
      "Sì, se il P.U. deve usare la forza",
      "Dipende dalla discrezione del giudice"
    ],
    "answer": "No, la resistenza deve essere attiva (violenza o minaccia)"
  },
  {
    "id": 2055,
    "category": "Diritto Penale",
    "question": "La resistenza passiva (es. buttarsi a terra) integra il reato di Resistenza a P.U.?",
    "options": [
      "No, la resistenza deve essere attiva (violenza o minaccia)",
      "Sì, sempre",
      "Sì, se il P.U. deve usare la forza",
      "Dipende dalla discrezione del giudice"
    ],
    "answer": "No, la resistenza deve essere attiva (violenza o minaccia)"
  },
  {
    "id": 2055,
    "category": "Diritto Penale",
    "question": "La resistenza passiva (es. buttarsi a terra) integra il reato di Resistenza a P.U.?",
    "options": [
      "No, la resistenza deve essere attiva (violenza o minaccia)",
      "Sì, sempre",
      "Sì, se il P.U. deve usare la forza",
      "Dipende dalla discrezione del giudice"
    ],
    "answer": "No, la resistenza deve essere attiva (violenza o minaccia)"
  },
  {
    "id": 2056,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 341-bis c.p. (Oltraggio a pubblico ufficiale)?",
    "options": [
      "Chi offende l'onore e il prestigio di un P.U. in luogo pubblico/aperto al pubblico, in presenza di più persone, mentre compie un atto d'ufficio e a causa/nell'esercizio delle funzioni",
      "Chi insulta un P.U. al telefono",
      "Chi critica un P.U. sui social network",
      "Chi non saluta un P.U."
    ],
    "answer": "Chi offende l'onore e il prestigio di un P.U. in luogo pubblico/aperto al pubblico, in presenza di più persone, mentre compie un atto d'ufficio e a causa/nell'esercizio delle funzioni"
  },
  {
    "id": 2056,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 341-bis c.p. (Oltraggio a pubblico ufficiale)?",
    "options": [
      "Chi offende l'onore e il prestigio di un P.U. in luogo pubblico/aperto al pubblico, in presenza di più persone, mentre compie un atto d'ufficio e a causa/nell'esercizio delle funzioni",
      "Chi insulta un P.U. al telefono",
      "Chi critica un P.U. sui social network",
      "Chi non saluta un P.U."
    ],
    "answer": "Chi offende l'onore e il prestigio di un P.U. in luogo pubblico/aperto al pubblico, in presenza di più persone, mentre compie un atto d'ufficio e a causa/nell'esercizio delle funzioni"
  },
  {
    "id": 2056,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 341-bis c.p. (Oltraggio a pubblico ufficiale)?",
    "options": [
      "Chi offende l'onore e il prestigio di un P.U. in luogo pubblico/aperto al pubblico, in presenza di più persone, mentre compie un atto d'ufficio e a causa/nell'esercizio delle funzioni",
      "Chi insulta un P.U. al telefono",
      "Chi critica un P.U. sui social network",
      "Chi non saluta un P.U."
    ],
    "answer": "Chi offende l'onore e il prestigio di un P.U. in luogo pubblico/aperto al pubblico, in presenza di più persone, mentre compie un atto d'ufficio e a causa/nell'esercizio delle funzioni"
  },
  {
    "id": 2057,
    "category": "Diritto Penale",
    "question": "Cosa prevede la 'reazione agli atti arbitrari' (art. 393-bis c.p.)?",
    "options": [
      "Non si applicano le norme su violenza/resistenza/oltraggio a P.U. se il P.U. ha dato causa al fatto eccedendo con atti arbitrari i limiti delle sue attribuzioni",
      "Si può sempre reagire al P.U.",
      "La pena è dimezzata",
      "Il reato diventa procedibile a querela"
    ],
    "answer": "Non si applicano le norme su violenza/resistenza/oltraggio a P.U. se il P.U. ha dato causa al fatto eccedendo con atti arbitrari i limiti delle sue attribuzioni"
  },
  {
    "id": 2057,
    "category": "Diritto Penale",
    "question": "Cosa prevede la 'reazione agli atti arbitrari' (art. 393-bis c.p.)?",
    "options": [
      "Non si applicano le norme su violenza/resistenza/oltraggio a P.U. se il P.U. ha dato causa al fatto eccedendo con atti arbitrari i limiti delle sue attribuzioni",
      "Si può sempre reagire al P.U.",
      "La pena è dimezzata",
      "Il reato diventa procedibile a querela"
    ],
    "answer": "Non si applicano le norme su violenza/resistenza/oltraggio a P.U. se il P.U. ha dato causa al fatto eccedendo con atti arbitrari i limiti delle sue attribuzioni"
  },
  {
    "id": 2057,
    "category": "Diritto Penale",
    "question": "Cosa prevede la 'reazione agli atti arbitrari' (art. 393-bis c.p.)?",
    "options": [
      "Non si applicano le norme su violenza/resistenza/oltraggio a P.U. se il P.U. ha dato causa al fatto eccedendo con atti arbitrari i limiti delle sue attribuzioni",
      "Si può sempre reagire al P.U.",
      "La pena è dimezzata",
      "Il reato diventa procedibile a querela"
    ],
    "answer": "Non si applicano le norme su violenza/resistenza/oltraggio a P.U. se il P.U. ha dato causa al fatto eccedendo con atti arbitrari i limiti delle sue attribuzioni"
  },
  {
    "id": 2058,
    "category": "Diritto Penale",
    "question": "Cosa si intende per Omessa denuncia di reato da parte del P.U. (art. 361 c.p.)?",
    "options": [
      "Il P.U. che omette o ritarda di denunciare all'A.G. un reato di cui ha avuto notizia nell'esercizio o a causa delle sue funzioni",
      "Il cittadino che non denuncia un reato",
      "Il P.U. che non arresta il colpevole",
      "Il P.U. che perde la denuncia"
    ],
    "answer": "Il P.U. che omette o ritarda di denunciare all'A.G. un reato di cui ha avuto notizia nell'esercizio o a causa delle sue funzioni"
  },
  {
    "id": 2058,
    "category": "Diritto Penale",
    "question": "Cosa si intende per Omessa denuncia di reato da parte del P.U. (art. 361 c.p.)?",
    "options": [
      "Il P.U. che omette o ritarda di denunciare all'A.G. un reato di cui ha avuto notizia nell'esercizio o a causa delle sue funzioni",
      "Il cittadino che non denuncia un reato",
      "Il P.U. che non arresta il colpevole",
      "Il P.U. che perde la denuncia"
    ],
    "answer": "Il P.U. che omette o ritarda di denunciare all'A.G. un reato di cui ha avuto notizia nell'esercizio o a causa delle sue funzioni"
  },
  {
    "id": 2058,
    "category": "Diritto Penale",
    "question": "Cosa si intende per Omessa denuncia di reato da parte del P.U. (art. 361 c.p.)?",
    "options": [
      "Il P.U. che omette o ritarda di denunciare all'A.G. un reato di cui ha avuto notizia nell'esercizio o a causa delle sue funzioni",
      "Il cittadino che non denuncia un reato",
      "Il P.U. che non arresta il colpevole",
      "Il P.U. che perde la denuncia"
    ],
    "answer": "Il P.U. che omette o ritarda di denunciare all'A.G. un reato di cui ha avuto notizia nell'esercizio o a causa delle sue funzioni"
  },
  {
    "id": 2059,
    "category": "Diritto Penale",
    "question": "L'obbligo di denuncia per il P.U. sussiste per i reati procedibili a querela?",
    "options": [
      "No, solo per i reati procedibili d'ufficio",
      "Sì, sempre",
      "Solo se la querela è già stata presentata",
      "Solo per i reati gravi"
    ],
    "answer": "No, solo per i reati procedibili d'ufficio"
  },
  {
    "id": 2059,
    "category": "Diritto Penale",
    "question": "L'obbligo di denuncia per il P.U. sussiste per i reati procedibili a querela?",
    "options": [
      "No, solo per i reati procedibili d'ufficio",
      "Sì, sempre",
      "Solo se la querela è già stata presentata",
      "Solo per i reati gravi"
    ],
    "answer": "No, solo per i reati procedibili d'ufficio"
  },
  {
    "id": 2059,
    "category": "Diritto Penale",
    "question": "L'obbligo di denuncia per il P.U. sussiste per i reati procedibili a querela?",
    "options": [
      "No, solo per i reati procedibili d'ufficio",
      "Sì, sempre",
      "Solo se la querela è già stata presentata",
      "Solo per i reati gravi"
    ],
    "answer": "No, solo per i reati procedibili d'ufficio"
  },
  {
    "id": 2060,
    "category": "Diritto Penale",
    "question": "Cosa è l'Omissione di referto (art. 365 c.p.)?",
    "options": [
      "Il sanitario che omette o ritarda di riferire all'Autorità casi che possono presentare i caratteri di un delitto procedibile d'ufficio",
      "Il medico che sbaglia la diagnosi",
      "Il medico che non cura il paziente",
      "L'infermiere che non avvisa il medico"
    ],
    "answer": "Il sanitario che omette o ritarda di riferire all'Autorità casi che possono presentare i caratteri di un delitto procedibile d'ufficio"
  },
  {
    "id": 2060,
    "category": "Diritto Penale",
    "question": "Cosa è l'Omissione di referto (art. 365 c.p.)?",
    "options": [
      "Il sanitario che omette o ritarda di riferire all'Autorità casi che possono presentare i caratteri di un delitto procedibile d'ufficio",
      "Il medico che sbaglia la diagnosi",
      "Il medico che non cura il paziente",
      "L'infermiere che non avvisa il medico"
    ],
    "answer": "Il sanitario che omette o ritarda di riferire all'Autorità casi che possono presentare i caratteri di un delitto procedibile d'ufficio"
  },
  {
    "id": 2060,
    "category": "Diritto Penale",
    "question": "Cosa è l'Omissione di referto (art. 365 c.p.)?",
    "options": [
      "Il sanitario che omette o ritarda di riferire all'Autorità casi che possono presentare i caratteri di un delitto procedibile d'ufficio",
      "Il medico che sbaglia la diagnosi",
      "Il medico che non cura il paziente",
      "L'infermiere che non avvisa il medico"
    ],
    "answer": "Il sanitario che omette o ritarda di riferire all'Autorità casi che possono presentare i caratteri di un delitto procedibile d'ufficio"
  },
  {
    "id": 2061,
    "category": "Diritto Penale",
    "question": "Quando viene meno l'obbligo di referto?",
    "options": [
      "Quando il referto esporrebbe la persona assistita a procedimento penale",
      "Quando il paziente paga",
      "Quando il medico è stanco",
      "Mai"
    ],
    "answer": "Quando il referto esporrebbe la persona assistita a procedimento penale"
  },
  {
    "id": 2061,
    "category": "Diritto Penale",
    "question": "Quando viene meno l'obbligo di referto?",
    "options": [
      "Quando il referto esporrebbe la persona assistita a procedimento penale",
      "Quando il paziente paga",
      "Quando il medico è stanco",
      "Mai"
    ],
    "answer": "Quando il referto esporrebbe la persona assistita a procedimento penale"
  },
  {
    "id": 2061,
    "category": "Diritto Penale",
    "question": "Quando viene meno l'obbligo di referto?",
    "options": [
      "Quando il referto esporrebbe la persona assistita a procedimento penale",
      "Quando il paziente paga",
      "Quando il medico è stanco",
      "Mai"
    ],
    "answer": "Quando il referto esporrebbe la persona assistita a procedimento penale"
  },
  {
    "id": 2062,
    "category": "Diritto Penale",
    "question": "Cosa è la Simulazione di reato (art. 367 c.p.)?",
    "options": [
      "Affermare falsamente avvenuto un reato (simulazione formale) o simularne le tracce (simulazione reale), in modo che si possa iniziare un procedimento penale",
      "Inventare un reato per scherzo",
      "Accusare una persona specifica sapendola innocente",
      "Nascondere le prove di un reato vero"
    ],
    "answer": "Affermare falsamente avvenuto un reato (simulazione formale) o simularne le tracce (simulazione reale), in modo che si possa iniziare un procedimento penale"
  },
  {
    "id": 2062,
    "category": "Diritto Penale",
    "question": "Cosa è la Simulazione di reato (art. 367 c.p.)?",
    "options": [
      "Affermare falsamente avvenuto un reato (simulazione formale) o simularne le tracce (simulazione reale), in modo che si possa iniziare un procedimento penale",
      "Inventare un reato per scherzo",
      "Accusare una persona specifica sapendola innocente",
      "Nascondere le prove di un reato vero"
    ],
    "answer": "Affermare falsamente avvenuto un reato (simulazione formale) o simularne le tracce (simulazione reale), in modo che si possa iniziare un procedimento penale"
  },
  {
    "id": 2062,
    "category": "Diritto Penale",
    "question": "Cosa è la Simulazione di reato (art. 367 c.p.)?",
    "options": [
      "Affermare falsamente avvenuto un reato (simulazione formale) o simularne le tracce (simulazione reale), in modo che si possa iniziare un procedimento penale",
      "Inventare un reato per scherzo",
      "Accusare una persona specifica sapendola innocente",
      "Nascondere le prove di un reato vero"
    ],
    "answer": "Affermare falsamente avvenuto un reato (simulazione formale) o simularne le tracce (simulazione reale), in modo che si possa iniziare un procedimento penale"
  },
  {
    "id": 2063,
    "category": "Diritto Penale",
    "question": "Qual è la differenza fondamentale tra Simulazione di reato e Calunnia?",
    "options": [
      "Nella simulazione l'accusa è rivolta contro ignoti (o il reato non è avvenuto); nella calunnia si incolpa una persona specifica che si sa innocente",
      "La simulazione è più grave",
      "La calunnia è solo verbale",
      "Non c'è differenza"
    ],
    "answer": "Nella simulazione l'accusa è rivolta contro ignoti (o il reato non è avvenuto); nella calunnia si incolpa una persona specifica che si sa innocente"
  },
  {
    "id": 2063,
    "category": "Diritto Penale",
    "question": "Qual è la differenza fondamentale tra Simulazione di reato e Calunnia?",
    "options": [
      "Nella simulazione l'accusa è rivolta contro ignoti (o il reato non è avvenuto); nella calunnia si incolpa una persona specifica che si sa innocente",
      "La simulazione è più grave",
      "La calunnia è solo verbale",
      "Non c'è differenza"
    ],
    "answer": "Nella simulazione l'accusa è rivolta contro ignoti (o il reato non è avvenuto); nella calunnia si incolpa una persona specifica che si sa innocente"
  },
  {
    "id": 2063,
    "category": "Diritto Penale",
    "question": "Qual è la differenza fondamentale tra Simulazione di reato e Calunnia?",
    "options": [
      "Nella simulazione l'accusa è rivolta contro ignoti (o il reato non è avvenuto); nella calunnia si incolpa una persona specifica che si sa innocente",
      "La simulazione è più grave",
      "La calunnia è solo verbale",
      "Non c'è differenza"
    ],
    "answer": "Nella simulazione l'accusa è rivolta contro ignoti (o il reato non è avvenuto); nella calunnia si incolpa una persona specifica che si sa innocente"
  },
  {
    "id": 2064,
    "category": "Diritto Penale",
    "question": "Cosa è la Calunnia (art. 368 c.p.)?",
    "options": [
      "Incolpare di un reato taluno che si sa innocente, mediante denuncia o simulazione di tracce",
      "Parlare male di qualcuno",
      "Diffamare qualcuno su internet",
      "Testimoniare il falso"
    ],
    "answer": "Incolpare di un reato taluno che si sa innocente, mediante denuncia o simulazione di tracce"
  },
  {
    "id": 2064,
    "category": "Diritto Penale",
    "question": "Cosa è la Calunnia (art. 368 c.p.)?",
    "options": [
      "Incolpare di un reato taluno che si sa innocente, mediante denuncia o simulazione di tracce",
      "Parlare male di qualcuno",
      "Diffamare qualcuno su internet",
      "Testimoniare il falso"
    ],
    "answer": "Incolpare di un reato taluno che si sa innocente, mediante denuncia o simulazione di tracce"
  },
  {
    "id": 2064,
    "category": "Diritto Penale",
    "question": "Cosa è la Calunnia (art. 368 c.p.)?",
    "options": [
      "Incolpare di un reato taluno che si sa innocente, mediante denuncia o simulazione di tracce",
      "Parlare male di qualcuno",
      "Diffamare qualcuno su internet",
      "Testimoniare il falso"
    ],
    "answer": "Incolpare di un reato taluno che si sa innocente, mediante denuncia o simulazione di tracce"
  },
  {
    "id": 2065,
    "category": "Diritto Penale",
    "question": "Cosa è l'Autocalunnia (art. 369 c.p.)?",
    "options": [
      "Incolpare se stesso di un reato che non ha commesso (o commesso da altri)",
      "Confessare un reato commesso",
      "Pentirsi",
      "Costituirsi"
    ],
    "answer": "Incolpare se stesso di un reato che non ha commesso (o commesso da altri)"
  },
  {
    "id": 2065,
    "category": "Diritto Penale",
    "question": "Cosa è l'Autocalunnia (art. 369 c.p.)?",
    "options": [
      "Incolpare se stesso di un reato che non ha commesso (o commesso da altri)",
      "Confessare un reato commesso",
      "Pentirsi",
      "Costituirsi"
    ],
    "answer": "Incolpare se stesso di un reato che non ha commesso (o commesso da altri)"
  },
  {
    "id": 2065,
    "category": "Diritto Penale",
    "question": "Cosa è l'Autocalunnia (art. 369 c.p.)?",
    "options": [
      "Incolpare se stesso di un reato che non ha commesso (o commesso da altri)",
      "Confessare un reato commesso",
      "Pentirsi",
      "Costituirsi"
    ],
    "answer": "Incolpare se stesso di un reato che non ha commesso (o commesso da altri)"
  },
  {
    "id": 2066,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 371-bis c.p. (False informazioni al PM)?",
    "options": [
      "Rendere dichiarazioni false al PM o tacere ciò che si sa",
      "Mentire alla Polizia Giudiziaria (questo è favoreggiamento)",
      "Mentire al difensore",
      "Mentire al giudice (falsa testimonianza)"
    ],
    "answer": "Rendere dichiarazioni false al PM o tacere ciò che si sa"
  },
  {
    "id": 2066,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 371-bis c.p. (False informazioni al PM)?",
    "options": [
      "Rendere dichiarazioni false al PM o tacere ciò che si sa",
      "Mentire alla Polizia Giudiziaria (questo è favoreggiamento)",
      "Mentire al difensore",
      "Mentire al giudice (falsa testimonianza)"
    ],
    "answer": "Rendere dichiarazioni false al PM o tacere ciò che si sa"
  },
  {
    "id": 2066,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 371-bis c.p. (False informazioni al PM)?",
    "options": [
      "Rendere dichiarazioni false al PM o tacere ciò che si sa",
      "Mentire alla Polizia Giudiziaria (questo è favoreggiamento)",
      "Mentire al difensore",
      "Mentire al giudice (falsa testimonianza)"
    ],
    "answer": "Rendere dichiarazioni false al PM o tacere ciò che si sa"
  },
  {
    "id": 2067,
    "category": "Diritto Penale",
    "question": "Cosa è il Favoreggiamento personale (art. 378 c.p.)?",
    "options": [
      "Aiutare taluno a eludere le investigazioni o sottrarsi alle ricerche dell'Autorità, dopo che fu commesso un reato",
      "Aiutare qualcuno a commettere un reato (concorso)",
      "Nascondere la refurtiva (favoreggiamento reale/ricettazione)",
      "Difendere un imputato in tribunale"
    ],
    "answer": "Aiutare taluno a eludere le investigazioni o sottrarsi alle ricerche dell'Autorità, dopo che fu commesso un reato"
  },
  {
    "id": 2067,
    "category": "Diritto Penale",
    "question": "Cosa è il Favoreggiamento personale (art. 378 c.p.)?",
    "options": [
      "Aiutare taluno a eludere le investigazioni o sottrarsi alle ricerche dell'Autorità, dopo che fu commesso un reato",
      "Aiutare qualcuno a commettere un reato (concorso)",
      "Nascondere la refurtiva (favoreggiamento reale/ricettazione)",
      "Difendere un imputato in tribunale"
    ],
    "answer": "Aiutare taluno a eludere le investigazioni o sottrarsi alle ricerche dell'Autorità, dopo che fu commesso un reato"
  },
  {
    "id": 2067,
    "category": "Diritto Penale",
    "question": "Cosa è il Favoreggiamento personale (art. 378 c.p.)?",
    "options": [
      "Aiutare taluno a eludere le investigazioni o sottrarsi alle ricerche dell'Autorità, dopo che fu commesso un reato",
      "Aiutare qualcuno a commettere un reato (concorso)",
      "Nascondere la refurtiva (favoreggiamento reale/ricettazione)",
      "Difendere un imputato in tribunale"
    ],
    "answer": "Aiutare taluno a eludere le investigazioni o sottrarsi alle ricerche dell'Autorità, dopo che fu commesso un reato"
  },
  {
    "id": 2068,
    "category": "Diritto Penale",
    "question": "Il favoreggiamento personale richiede che il favoreggiatore abbia partecipato al reato presupposto?",
    "options": [
      "No, deve essere estraneo al reato presupposto (altrimenti è concorso)",
      "Sì, deve essere complice",
      "È indifferente",
      "Solo se è parente"
    ],
    "answer": "No, deve essere estraneo al reato presupposto (altrimenti è concorso)"
  },
  {
    "id": 2068,
    "category": "Diritto Penale",
    "question": "Il favoreggiamento personale richiede che il favoreggiatore abbia partecipato al reato presupposto?",
    "options": [
      "No, deve essere estraneo al reato presupposto (altrimenti è concorso)",
      "Sì, deve essere complice",
      "È indifferente",
      "Solo se è parente"
    ],
    "answer": "No, deve essere estraneo al reato presupposto (altrimenti è concorso)"
  },
  {
    "id": 2068,
    "category": "Diritto Penale",
    "question": "Il favoreggiamento personale richiede che il favoreggiatore abbia partecipato al reato presupposto?",
    "options": [
      "No, deve essere estraneo al reato presupposto (altrimenti è concorso)",
      "Sì, deve essere complice",
      "È indifferente",
      "Solo se è parente"
    ],
    "answer": "No, deve essere estraneo al reato presupposto (altrimenti è concorso)"
  },
  {
    "id": 2069,
    "category": "Diritto Penale",
    "question": "Cosa è il Favoreggiamento reale (art. 379 c.p.)?",
    "options": [
      "Aiutare taluno ad assicurare il prodotto, il profitto o il prezzo di un reato",
      "Aiutare un latitante",
      "Vendere droga",
      "Falsificare soldi"
    ],
    "answer": "Aiutare taluno ad assicurare il prodotto, il profitto o il prezzo di un reato"
  },
  {
    "id": 2069,
    "category": "Diritto Penale",
    "question": "Cosa è il Favoreggiamento reale (art. 379 c.p.)?",
    "options": [
      "Aiutare taluno ad assicurare il prodotto, il profitto o il prezzo di un reato",
      "Aiutare un latitante",
      "Vendere droga",
      "Falsificare soldi"
    ],
    "answer": "Aiutare taluno ad assicurare il prodotto, il profitto o il prezzo di un reato"
  },
  {
    "id": 2069,
    "category": "Diritto Penale",
    "question": "Cosa è il Favoreggiamento reale (art. 379 c.p.)?",
    "options": [
      "Aiutare taluno ad assicurare il prodotto, il profitto o il prezzo di un reato",
      "Aiutare un latitante",
      "Vendere droga",
      "Falsificare soldi"
    ],
    "answer": "Aiutare taluno ad assicurare il prodotto, il profitto o il prezzo di un reato"
  },
  {
    "id": 2070,
    "category": "Diritto Penale",
    "question": "Qual è la differenza tra Favoreggiamento reale e Ricettazione?",
    "options": [
      "Nella ricettazione si agisce per procurare a sé o ad altri un profitto; nel favoreggiamento reale solo per aiutare l'autore del reato a consolidare il vantaggio",
      "La ricettazione riguarda solo denaro",
      "Il favoreggiamento reale è più grave",
      "Non c'è differenza"
    ],
    "answer": "Nella ricettazione si agisce per procurare a sé o ad altri un profitto; nel favoreggiamento reale solo per aiutare l'autore del reato a consolidare il vantaggio"
  },
  {
    "id": 2070,
    "category": "Diritto Penale",
    "question": "Qual è la differenza tra Favoreggiamento reale e Ricettazione?",
    "options": [
      "Nella ricettazione si agisce per procurare a sé o ad altri un profitto; nel favoreggiamento reale solo per aiutare l'autore del reato a consolidare il vantaggio",
      "La ricettazione riguarda solo denaro",
      "Il favoreggiamento reale è più grave",
      "Non c'è differenza"
    ],
    "answer": "Nella ricettazione si agisce per procurare a sé o ad altri un profitto; nel favoreggiamento reale solo per aiutare l'autore del reato a consolidare il vantaggio"
  },
  {
    "id": 2070,
    "category": "Diritto Penale",
    "question": "Qual è la differenza tra Favoreggiamento reale e Ricettazione?",
    "options": [
      "Nella ricettazione si agisce per procurare a sé o ad altri un profitto; nel favoreggiamento reale solo per aiutare l'autore del reato a consolidare il vantaggio",
      "La ricettazione riguarda solo denaro",
      "Il favoreggiamento reale è più grave",
      "Non c'è differenza"
    ],
    "answer": "Nella ricettazione si agisce per procurare a sé o ad altri un profitto; nel favoreggiamento reale solo per aiutare l'autore del reato a consolidare il vantaggio"
  },
  {
    "id": 2071,
    "category": "Diritto Penale",
    "question": "Cosa è l'Esercizio arbitrario delle proprie ragioni (art. 392-393 c.p.)?",
    "options": [
      "Farsi giustizia da sé con violenza sulle cose o sulle persone, potendo ricorrere al giudice",
      "Difendersi da un'aggressione (legittima difesa)",
      "Denunciare un torto",
      "Chiedere un risarcimento"
    ],
    "answer": "Farsi giustizia da sé con violenza sulle cose o sulle persone, potendo ricorrere al giudice"
  },
  {
    "id": 2071,
    "category": "Diritto Penale",
    "question": "Cosa è l'Esercizio arbitrario delle proprie ragioni (art. 392-393 c.p.)?",
    "options": [
      "Farsi giustizia da sé con violenza sulle cose o sulle persone, potendo ricorrere al giudice",
      "Difendersi da un'aggressione (legittima difesa)",
      "Denunciare un torto",
      "Chiedere un risarcimento"
    ],
    "answer": "Farsi giustizia da sé con violenza sulle cose o sulle persone, potendo ricorrere al giudice"
  },
  {
    "id": 2071,
    "category": "Diritto Penale",
    "question": "Cosa è l'Esercizio arbitrario delle proprie ragioni (art. 392-393 c.p.)?",
    "options": [
      "Farsi giustizia da sé con violenza sulle cose o sulle persone, potendo ricorrere al giudice",
      "Difendersi da un'aggressione (legittima difesa)",
      "Denunciare un torto",
      "Chiedere un risarcimento"
    ],
    "answer": "Farsi giustizia da sé con violenza sulle cose o sulle persone, potendo ricorrere al giudice"
  },
  {
    "id": 2072,
    "category": "Diritto Penale",
    "question": "Cosa punisce il reato di Evasione (art. 385 c.p.)?",
    "options": [
      "Chiunque, essendo legalmente arrestato o detenuto, evade",
      "Chi non paga le tasse",
      "Chi scappa di casa",
      "Chi non si presenta in caserma"
    ],
    "answer": "Chiunque, essendo legalmente arrestato o detenuto, evade"
  },
  {
    "id": 2072,
    "category": "Diritto Penale",
    "question": "Cosa punisce il reato di Evasione (art. 385 c.p.)?",
    "options": [
      "Chiunque, essendo legalmente arrestato o detenuto, evade",
      "Chi non paga le tasse",
      "Chi scappa di casa",
      "Chi non si presenta in caserma"
    ],
    "answer": "Chiunque, essendo legalmente arrestato o detenuto, evade"
  },
  {
    "id": 2072,
    "category": "Diritto Penale",
    "question": "Cosa punisce il reato di Evasione (art. 385 c.p.)?",
    "options": [
      "Chiunque, essendo legalmente arrestato o detenuto, evade",
      "Chi non paga le tasse",
      "Chi scappa di casa",
      "Chi non si presenta in caserma"
    ],
    "answer": "Chiunque, essendo legalmente arrestato o detenuto, evade"
  },
  {
    "id": 2073,
    "category": "Diritto Penale",
    "question": "L'allontanamento dal luogo degli arresti domiciliari costituisce evasione?",
    "options": [
      "Sì",
      "No, è solo inosservanza di provvedimenti",
      "Solo se si va all'estero",
      "Solo se si commette un altro reato"
    ],
    "answer": "Sì"
  },
  {
    "id": 2073,
    "category": "Diritto Penale",
    "question": "L'allontanamento dal luogo degli arresti domiciliari costituisce evasione?",
    "options": [
      "Sì",
      "No, è solo inosservanza di provvedimenti",
      "Solo se si va all'estero",
      "Solo se si commette un altro reato"
    ],
    "answer": "Sì"
  },
  {
    "id": 2073,
    "category": "Diritto Penale",
    "question": "L'allontanamento dal luogo degli arresti domiciliari costituisce evasione?",
    "options": [
      "Sì",
      "No, è solo inosservanza di provvedimenti",
      "Solo se si va all'estero",
      "Solo se si commette un altro reato"
    ],
    "answer": "Sì"
  },
  {
    "id": 2074,
    "category": "Diritto Penale",
    "question": "Cosa tutela il Titolo VII del Codice Penale (Delitti contro la fede pubblica)?",
    "options": [
      "La fiducia della società in determinati oggetti o simboli (es. documenti, monete) ai quali l'ordinamento attribuisce valore",
      "La religione",
      "La fedeltà coniugale",
      "La fiducia nel governo"
    ],
    "answer": "La fiducia della società in determinati oggetti o simboli (es. documenti, monete) ai quali l'ordinamento attribuisce valore"
  },
  {
    "id": 2074,
    "category": "Diritto Penale",
    "question": "Cosa tutela il Titolo VII del Codice Penale (Delitti contro la fede pubblica)?",
    "options": [
      "La fiducia della società in determinati oggetti o simboli (es. documenti, monete) ai quali l'ordinamento attribuisce valore",
      "La religione",
      "La fedeltà coniugale",
      "La fiducia nel governo"
    ],
    "answer": "La fiducia della società in determinati oggetti o simboli (es. documenti, monete) ai quali l'ordinamento attribuisce valore"
  },
  {
    "id": 2074,
    "category": "Diritto Penale",
    "question": "Cosa tutela il Titolo VII del Codice Penale (Delitti contro la fede pubblica)?",
    "options": [
      "La fiducia della società in determinati oggetti o simboli (es. documenti, monete) ai quali l'ordinamento attribuisce valore",
      "La religione",
      "La fedeltà coniugale",
      "La fiducia nel governo"
    ],
    "answer": "La fiducia della società in determinati oggetti o simboli (es. documenti, monete) ai quali l'ordinamento attribuisce valore"
  },
  {
    "id": 2075,
    "category": "Diritto Penale",
    "question": "Cosa è la Falsità materiale?",
    "options": [
      "Quando il documento è contraffatto (formato da chi non è l'autore) o alterato (modificato dopo la formazione)",
      "Quando il documento contiene dichiarazioni non vere",
      "Quando il documento è rubato",
      "Quando il documento è scaduto"
    ],
    "answer": "Quando il documento è contraffatto (formato da chi non è l'autore) o alterato (modificato dopo la formazione)"
  },
  {
    "id": 2075,
    "category": "Diritto Penale",
    "question": "Cosa è la Falsità materiale?",
    "options": [
      "Quando il documento è contraffatto (formato da chi non è l'autore) o alterato (modificato dopo la formazione)",
      "Quando il documento contiene dichiarazioni non vere",
      "Quando il documento è rubato",
      "Quando il documento è scaduto"
    ],
    "answer": "Quando il documento è contraffatto (formato da chi non è l'autore) o alterato (modificato dopo la formazione)"
  },
  {
    "id": 2075,
    "category": "Diritto Penale",
    "question": "Cosa è la Falsità materiale?",
    "options": [
      "Quando il documento è contraffatto (formato da chi non è l'autore) o alterato (modificato dopo la formazione)",
      "Quando il documento contiene dichiarazioni non vere",
      "Quando il documento è rubato",
      "Quando il documento è scaduto"
    ],
    "answer": "Quando il documento è contraffatto (formato da chi non è l'autore) o alterato (modificato dopo la formazione)"
  },
  {
    "id": 2076,
    "category": "Diritto Penale",
    "question": "Cosa è la Falsità ideologica?",
    "options": [
      "Quando il documento, pur genuino nella provenienza, contiene dichiarazioni o attestazioni non veritiere",
      "Quando il documento è falso materialmente",
      "Quando la firma è falsa",
      "Quando manca la data"
    ],
    "answer": "Quando il documento, pur genuino nella provenienza, contiene dichiarazioni o attestazioni non veritiere"
  },
  {
    "id": 2076,
    "category": "Diritto Penale",
    "question": "Cosa è la Falsità ideologica?",
    "options": [
      "Quando il documento, pur genuino nella provenienza, contiene dichiarazioni o attestazioni non veritiere",
      "Quando il documento è falso materialmente",
      "Quando la firma è falsa",
      "Quando manca la data"
    ],
    "answer": "Quando il documento, pur genuino nella provenienza, contiene dichiarazioni o attestazioni non veritiere"
  },
  {
    "id": 2076,
    "category": "Diritto Penale",
    "question": "Cosa è la Falsità ideologica?",
    "options": [
      "Quando il documento, pur genuino nella provenienza, contiene dichiarazioni o attestazioni non veritiere",
      "Quando il documento è falso materialmente",
      "Quando la firma è falsa",
      "Quando manca la data"
    ],
    "answer": "Quando il documento, pur genuino nella provenienza, contiene dichiarazioni o attestazioni non veritiere"
  },
  {
    "id": 2077,
    "category": "Diritto Penale",
    "question": "Il falso grossolano (evidente a tutti) è punibile?",
    "options": [
      "No, è un reato impossibile",
      "Sì, sempre",
      "Sì, ma con pena ridotta",
      "Dipende dal giudice"
    ],
    "answer": "No, è un reato impossibile"
  },
  {
    "id": 2077,
    "category": "Diritto Penale",
    "question": "Il falso grossolano (evidente a tutti) è punibile?",
    "options": [
      "No, è un reato impossibile",
      "Sì, sempre",
      "Sì, ma con pena ridotta",
      "Dipende dal giudice"
    ],
    "answer": "No, è un reato impossibile"
  },
  {
    "id": 2077,
    "category": "Diritto Penale",
    "question": "Il falso grossolano (evidente a tutti) è punibile?",
    "options": [
      "No, è un reato impossibile",
      "Sì, sempre",
      "Sì, ma con pena ridotta",
      "Dipende dal giudice"
    ],
    "answer": "No, è un reato impossibile"
  },
  {
    "id": 2078,
    "category": "Diritto Penale",
    "question": "Cosa rischia il privato che dichiara il falso in un'autocertificazione?",
    "options": [
      "Risponde di falsità ideologica commessa dal privato in atto pubblico (art. 483 c.p.)",
      "Solo una sanzione amministrativa",
      "Nulla",
      "Deve rifare il documento"
    ],
    "answer": "Risponde di falsità ideologica commessa dal privato in atto pubblico (art. 483 c.p.)"
  },
  {
    "id": 2078,
    "category": "Diritto Penale",
    "question": "Cosa rischia il privato che dichiara il falso in un'autocertificazione?",
    "options": [
      "Risponde di falsità ideologica commessa dal privato in atto pubblico (art. 483 c.p.)",
      "Solo una sanzione amministrativa",
      "Nulla",
      "Deve rifare il documento"
    ],
    "answer": "Risponde di falsità ideologica commessa dal privato in atto pubblico (art. 483 c.p.)"
  },
  {
    "id": 2078,
    "category": "Diritto Penale",
    "question": "Cosa rischia il privato che dichiara il falso in un'autocertificazione?",
    "options": [
      "Risponde di falsità ideologica commessa dal privato in atto pubblico (art. 483 c.p.)",
      "Solo una sanzione amministrativa",
      "Nulla",
      "Deve rifare il documento"
    ],
    "answer": "Risponde di falsità ideologica commessa dal privato in atto pubblico (art. 483 c.p.)"
  },
  {
    "id": 2079,
    "category": "Diritto Penale",
    "question": "Esiste il falso documentale colposo?",
    "options": [
      "No, il falso è punito solo a titolo di dolo",
      "Sì, per tutti i reati di falso",
      "Solo per i pubblici ufficiali",
      "Solo per i privati"
    ],
    "answer": "No, il falso è punito solo a titolo di dolo"
  },
  {
    "id": 2079,
    "category": "Diritto Penale",
    "question": "Esiste il falso documentale colposo?",
    "options": [
      "No, il falso è punito solo a titolo di dolo",
      "Sì, per tutti i reati di falso",
      "Solo per i pubblici ufficiali",
      "Solo per i privati"
    ],
    "answer": "No, il falso è punito solo a titolo di dolo"
  },
  {
    "id": 2079,
    "category": "Diritto Penale",
    "question": "Esiste il falso documentale colposo?",
    "options": [
      "No, il falso è punito solo a titolo di dolo",
      "Sì, per tutti i reati di falso",
      "Solo per i pubblici ufficiali",
      "Solo per i privati"
    ],
    "answer": "No, il falso è punito solo a titolo di dolo"
  },
  {
    "id": 2080,
    "category": "Diritto Penale",
    "question": "Qual è la differenza sanzionatoria principale tra delitti e contravvenzioni?",
    "options": [
      "Delitti: ergastolo, reclusione, multa; Contravvenzioni: arresto, ammenda",
      "Delitti: carcere; Contravvenzioni: multa",
      "Delitti: puniti sempre; Contravvenzioni: punite a querela",
      "Non c'è differenza"
    ],
    "answer": "Delitti: ergastolo, reclusione, multa; Contravvenzioni: arresto, ammenda"
  },
  {
    "id": 2080,
    "category": "Diritto Penale",
    "question": "Qual è la differenza sanzionatoria principale tra delitti e contravvenzioni?",
    "options": [
      "Delitti: ergastolo, reclusione, multa; Contravvenzioni: arresto, ammenda",
      "Delitti: carcere; Contravvenzioni: multa",
      "Delitti: puniti sempre; Contravvenzioni: punite a querela",
      "Non c'è differenza"
    ],
    "answer": "Delitti: ergastolo, reclusione, multa; Contravvenzioni: arresto, ammenda"
  },
  {
    "id": 2080,
    "category": "Diritto Penale",
    "question": "Qual è la differenza sanzionatoria principale tra delitti e contravvenzioni?",
    "options": [
      "Delitti: ergastolo, reclusione, multa; Contravvenzioni: arresto, ammenda",
      "Delitti: carcere; Contravvenzioni: multa",
      "Delitti: puniti sempre; Contravvenzioni: punite a querela",
      "Non c'è differenza"
    ],
    "answer": "Delitti: ergastolo, reclusione, multa; Contravvenzioni: arresto, ammenda"
  },
  {
    "id": 2081,
    "category": "Diritto Penale",
    "question": "È configurabile il tentativo nelle contravvenzioni?",
    "options": [
      "No",
      "Sì",
      "Solo in quelle punite con l'arresto",
      "Solo in quelle dolose"
    ],
    "answer": "No"
  },
  {
    "id": 2081,
    "category": "Diritto Penale",
    "question": "È configurabile il tentativo nelle contravvenzioni?",
    "options": [
      "No",
      "Sì",
      "Solo in quelle punite con l'arresto",
      "Solo in quelle dolose"
    ],
    "answer": "No"
  },
  {
    "id": 2081,
    "category": "Diritto Penale",
    "question": "È configurabile il tentativo nelle contravvenzioni?",
    "options": [
      "No",
      "Sì",
      "Solo in quelle punite con l'arresto",
      "Solo in quelle dolose"
    ],
    "answer": "No"
  },
  {
    "id": 2082,
    "category": "Diritto Penale",
    "question": "Qual è l'elemento soggettivo nelle contravvenzioni?",
    "options": [
      "Indifferentemente dolo o colpa",
      "Solo dolo",
      "Solo colpa",
      "Preterintenzione"
    ],
    "answer": "Indifferentemente dolo o colpa"
  },
  {
    "id": 2082,
    "category": "Diritto Penale",
    "question": "Qual è l'elemento soggettivo nelle contravvenzioni?",
    "options": [
      "Indifferentemente dolo o colpa",
      "Solo dolo",
      "Solo colpa",
      "Preterintenzione"
    ],
    "answer": "Indifferentemente dolo o colpa"
  },
  {
    "id": 2082,
    "category": "Diritto Penale",
    "question": "Qual è l'elemento soggettivo nelle contravvenzioni?",
    "options": [
      "Indifferentemente dolo o colpa",
      "Solo dolo",
      "Solo colpa",
      "Preterintenzione"
    ],
    "answer": "Indifferentemente dolo o colpa"
  },
  {
    "id": 2083,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 650 c.p.?",
    "options": [
      "L'inosservanza dei provvedimenti dell'Autorità dati per giustizia, sicurezza, ordine pubblico o igiene",
      "Il rifiuto di fornire le generalità",
      "Il getto pericoloso di cose",
      "Il disturbo della quiete pubblica"
    ],
    "answer": "L'inosservanza dei provvedimenti dell'Autorità dati per giustizia, sicurezza, ordine pubblico o igiene"
  },
  {
    "id": 2083,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 650 c.p.?",
    "options": [
      "L'inosservanza dei provvedimenti dell'Autorità dati per giustizia, sicurezza, ordine pubblico o igiene",
      "Il rifiuto di fornire le generalità",
      "Il getto pericoloso di cose",
      "Il disturbo della quiete pubblica"
    ],
    "answer": "L'inosservanza dei provvedimenti dell'Autorità dati per giustizia, sicurezza, ordine pubblico o igiene"
  },
  {
    "id": 2083,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 650 c.p.?",
    "options": [
      "L'inosservanza dei provvedimenti dell'Autorità dati per giustizia, sicurezza, ordine pubblico o igiene",
      "Il rifiuto di fornire le generalità",
      "Il getto pericoloso di cose",
      "Il disturbo della quiete pubblica"
    ],
    "answer": "L'inosservanza dei provvedimenti dell'Autorità dati per giustizia, sicurezza, ordine pubblico o igiene"
  },
  {
    "id": 2084,
    "category": "Diritto Penale",
    "question": "L'art. 650 c.p. è una norma penale in bianco?",
    "options": [
      "Sì, perché il precetto è determinato dal provvedimento amministrativo specifico",
      "No, è una norma completa",
      "Sì, perché non prevede pena",
      "No, perché è incostituzionale"
    ],
    "answer": "Sì, perché il precetto è determinato dal provvedimento amministrativo specifico"
  },
  {
    "id": 2084,
    "category": "Diritto Penale",
    "question": "L'art. 650 c.p. è una norma penale in bianco?",
    "options": [
      "Sì, perché il precetto è determinato dal provvedimento amministrativo specifico",
      "No, è una norma completa",
      "Sì, perché non prevede pena",
      "No, perché è incostituzionale"
    ],
    "answer": "Sì, perché il precetto è determinato dal provvedimento amministrativo specifico"
  },
  {
    "id": 2084,
    "category": "Diritto Penale",
    "question": "L'art. 650 c.p. è una norma penale in bianco?",
    "options": [
      "Sì, perché il precetto è determinato dal provvedimento amministrativo specifico",
      "No, è una norma completa",
      "Sì, perché non prevede pena",
      "No, perché è incostituzionale"
    ],
    "answer": "Sì, perché il precetto è determinato dal provvedimento amministrativo specifico"
  },
  {
    "id": 2085,
    "category": "Diritto Penale",
    "question": "Qual è la legge di riferimento per gli stupefacenti?",
    "options": [
      "D.P.R. 309/1990",
      "Codice Penale",
      "Legge Merlin",
      "Legge Reale"
    ],
    "answer": "D.P.R. 309/1990"
  },
  {
    "id": 2085,
    "category": "Diritto Penale",
    "question": "Qual è la legge di riferimento per gli stupefacenti?",
    "options": [
      "D.P.R. 309/1990",
      "Codice Penale",
      "Legge Merlin",
      "Legge Reale"
    ],
    "answer": "D.P.R. 309/1990"
  },
  {
    "id": 2085,
    "category": "Diritto Penale",
    "question": "Qual è la legge di riferimento per gli stupefacenti?",
    "options": [
      "D.P.R. 309/1990",
      "Codice Penale",
      "Legge Merlin",
      "Legge Reale"
    ],
    "answer": "D.P.R. 309/1990"
  },
  {
    "id": 2086,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 73 D.P.R. 309/90?",
    "options": [
      "Produzione, traffico e detenzione illecita di sostanze stupefacenti o psicotrope",
      "L'uso personale di droga",
      "L'associazione a delinquere",
      "La guida sotto effetto di stupefacenti"
    ],
    "answer": "Produzione, traffico e detenzione illecita di sostanze stupefacenti o psicotrope"
  },
  {
    "id": 2086,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 73 D.P.R. 309/90?",
    "options": [
      "Produzione, traffico e detenzione illecita di sostanze stupefacenti o psicotrope",
      "L'uso personale di droga",
      "L'associazione a delinquere",
      "La guida sotto effetto di stupefacenti"
    ],
    "answer": "Produzione, traffico e detenzione illecita di sostanze stupefacenti o psicotrope"
  },
  {
    "id": 2086,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 73 D.P.R. 309/90?",
    "options": [
      "Produzione, traffico e detenzione illecita di sostanze stupefacenti o psicotrope",
      "L'uso personale di droga",
      "L'associazione a delinquere",
      "La guida sotto effetto di stupefacenti"
    ],
    "answer": "Produzione, traffico e detenzione illecita di sostanze stupefacenti o psicotrope"
  },
  {
    "id": 2087,
    "category": "Diritto Penale",
    "question": "La detenzione per uso esclusivamente personale è reato?",
    "options": [
      "No, è un illecito amministrativo (art. 75 DPR 309/90)",
      "Sì, sempre",
      "Sì, se la quantità è elevata",
      "Dipende dal tipo di droga"
    ],
    "answer": "No, è un illecito amministrativo (art. 75 DPR 309/90)"
  },
  {
    "id": 2087,
    "category": "Diritto Penale",
    "question": "La detenzione per uso esclusivamente personale è reato?",
    "options": [
      "No, è un illecito amministrativo (art. 75 DPR 309/90)",
      "Sì, sempre",
      "Sì, se la quantità è elevata",
      "Dipende dal tipo di droga"
    ],
    "answer": "No, è un illecito amministrativo (art. 75 DPR 309/90)"
  },
  {
    "id": 2087,
    "category": "Diritto Penale",
    "question": "La detenzione per uso esclusivamente personale è reato?",
    "options": [
      "No, è un illecito amministrativo (art. 75 DPR 309/90)",
      "Sì, sempre",
      "Sì, se la quantità è elevata",
      "Dipende dal tipo di droga"
    ],
    "answer": "No, è un illecito amministrativo (art. 75 DPR 309/90)"
  },
  {
    "id": 2088,
    "category": "Diritto Penale",
    "question": "Come si distingue la detenzione ai fini di spaccio da quella per uso personale?",
    "options": [
      "Dalla quantità (superiore ai limiti massimi), dalle modalità di presentazione (confezionamento frazionato), e altre circostanze (bilancini, contanti)",
      "Solo dalla confessione",
      "Solo dalla quantità",
      "Non si distingue"
    ],
    "answer": "Dalla quantità (superiore ai limiti massimi), dalle modalità di presentazione (confezionamento frazionato), e altre circostanze (bilancini, contanti)"
  },
  {
    "id": 2088,
    "category": "Diritto Penale",
    "question": "Come si distingue la detenzione ai fini di spaccio da quella per uso personale?",
    "options": [
      "Dalla quantità (superiore ai limiti massimi), dalle modalità di presentazione (confezionamento frazionato), e altre circostanze (bilancini, contanti)",
      "Solo dalla confessione",
      "Solo dalla quantità",
      "Non si distingue"
    ],
    "answer": "Dalla quantità (superiore ai limiti massimi), dalle modalità di presentazione (confezionamento frazionato), e altre circostanze (bilancini, contanti)"
  },
  {
    "id": 2088,
    "category": "Diritto Penale",
    "question": "Come si distingue la detenzione ai fini di spaccio da quella per uso personale?",
    "options": [
      "Dalla quantità (superiore ai limiti massimi), dalle modalità di presentazione (confezionamento frazionato), e altre circostanze (bilancini, contanti)",
      "Solo dalla confessione",
      "Solo dalla quantità",
      "Non si distingue"
    ],
    "answer": "Dalla quantità (superiore ai limiti massimi), dalle modalità di presentazione (confezionamento frazionato), e altre circostanze (bilancini, contanti)"
  },
  {
    "id": 2089,
    "category": "Diritto Penale",
    "question": "Cosa prevede il fatto di lieve entità (art. 73 c.5)?",
    "options": [
      "Una pena ridotta (reclusione da 6 mesi a 4 anni) per mezzi, modalità, qualità/quantità che indicano una minore gravità",
      "La non punibilità",
      "Solo una multa",
      "L'ammonimento"
    ],
    "answer": "Una pena ridotta (reclusione da 6 mesi a 4 anni) per mezzi, modalità, qualità/quantità che indicano una minore gravità"
  },
  {
    "id": 2089,
    "category": "Diritto Penale",
    "question": "Cosa prevede il fatto di lieve entità (art. 73 c.5)?",
    "options": [
      "Una pena ridotta (reclusione da 6 mesi a 4 anni) per mezzi, modalità, qualità/quantità che indicano una minore gravità",
      "La non punibilità",
      "Solo una multa",
      "L'ammonimento"
    ],
    "answer": "Una pena ridotta (reclusione da 6 mesi a 4 anni) per mezzi, modalità, qualità/quantità che indicano una minore gravità"
  },
  {
    "id": 2089,
    "category": "Diritto Penale",
    "question": "Cosa prevede il fatto di lieve entità (art. 73 c.5)?",
    "options": [
      "Una pena ridotta (reclusione da 6 mesi a 4 anni) per mezzi, modalità, qualità/quantità che indicano una minore gravità",
      "La non punibilità",
      "Solo una multa",
      "L'ammonimento"
    ],
    "answer": "Una pena ridotta (reclusione da 6 mesi a 4 anni) per mezzi, modalità, qualità/quantità che indicano una minore gravità"
  },
  {
    "id": 2090,
    "category": "Diritto Penale",
    "question": "Cosa vieta la Legge Mancino (D.L. 122/1993)?",
    "options": [
      "Le manifestazioni di discriminazione razziale, etnica, nazionale o religiosa",
      "Le manifestazioni politiche",
      "Gli scioperi",
      "Le riunioni religiose"
    ],
    "answer": "Le manifestazioni di discriminazione razziale, etnica, nazionale o religiosa"
  },
  {
    "id": 2090,
    "category": "Diritto Penale",
    "question": "Cosa vieta la Legge Mancino (D.L. 122/1993)?",
    "options": [
      "Le manifestazioni di discriminazione razziale, etnica, nazionale o religiosa",
      "Le manifestazioni politiche",
      "Gli scioperi",
      "Le riunioni religiose"
    ],
    "answer": "Le manifestazioni di discriminazione razziale, etnica, nazionale o religiosa"
  },
  {
    "id": 2090,
    "category": "Diritto Penale",
    "question": "Cosa vieta la Legge Mancino (D.L. 122/1993)?",
    "options": [
      "Le manifestazioni di discriminazione razziale, etnica, nazionale o religiosa",
      "Le manifestazioni politiche",
      "Gli scioperi",
      "Le riunioni religiose"
    ],
    "answer": "Le manifestazioni di discriminazione razziale, etnica, nazionale o religiosa"
  },
  {
    "id": 2091,
    "category": "Diritto Penale",
    "question": "Cosa è la Circonvenzione di persone incapaci (art. 643 c.p.)?",
    "options": [
      "Abusare dei bisogni/inesperienza di un minore o infermo di mente per indurlo a compiere un atto dannoso per sé o altri, al fine di trarne profitto",
      "Truffare un anziano",
      "Rubare a un disabile",
      "Minacciare un minore"
    ],
    "answer": "Abusare dei bisogni/inesperienza di un minore o infermo di mente per indurlo a compiere un atto dannoso per sé o altri, al fine di trarne profitto"
  },
  {
    "id": 2091,
    "category": "Diritto Penale",
    "question": "Cosa è la Circonvenzione di persone incapaci (art. 643 c.p.)?",
    "options": [
      "Abusare dei bisogni/inesperienza di un minore o infermo di mente per indurlo a compiere un atto dannoso per sé o altri, al fine di trarne profitto",
      "Truffare un anziano",
      "Rubare a un disabile",
      "Minacciare un minore"
    ],
    "answer": "Abusare dei bisogni/inesperienza di un minore o infermo di mente per indurlo a compiere un atto dannoso per sé o altri, al fine di trarne profitto"
  },
  {
    "id": 2091,
    "category": "Diritto Penale",
    "question": "Cosa è la Circonvenzione di persone incapaci (art. 643 c.p.)?",
    "options": [
      "Abusare dei bisogni/inesperienza di un minore o infermo di mente per indurlo a compiere un atto dannoso per sé o altri, al fine di trarne profitto",
      "Truffare un anziano",
      "Rubare a un disabile",
      "Minacciare un minore"
    ],
    "answer": "Abusare dei bisogni/inesperienza di un minore o infermo di mente per indurlo a compiere un atto dannoso per sé o altri, al fine di trarne profitto"
  },
  {
    "id": 2092,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 600 c.p. (Riduzione o mantenimento in schiavitù)?",
    "options": [
      "Esercitare su una persona poteri corrispondenti al diritto di proprietà o ridurla in soggezione continuativa (lavoro forzato, sessuale, accattonaggio)",
      "Il sequestro di persona",
      "Il caporalato",
      "La violenza privata"
    ],
    "answer": "Esercitare su una persona poteri corrispondenti al diritto di proprietà o ridurla in soggezione continuativa (lavoro forzato, sessuale, accattonaggio)"
  },
  {
    "id": 2092,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 600 c.p. (Riduzione o mantenimento in schiavitù)?",
    "options": [
      "Esercitare su una persona poteri corrispondenti al diritto di proprietà o ridurla in soggezione continuativa (lavoro forzato, sessuale, accattonaggio)",
      "Il sequestro di persona",
      "Il caporalato",
      "La violenza privata"
    ],
    "answer": "Esercitare su una persona poteri corrispondenti al diritto di proprietà o ridurla in soggezione continuativa (lavoro forzato, sessuale, accattonaggio)"
  },
  {
    "id": 2092,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 600 c.p. (Riduzione o mantenimento in schiavitù)?",
    "options": [
      "Esercitare su una persona poteri corrispondenti al diritto di proprietà o ridurla in soggezione continuativa (lavoro forzato, sessuale, accattonaggio)",
      "Il sequestro di persona",
      "Il caporalato",
      "La violenza privata"
    ],
    "answer": "Esercitare su una persona poteri corrispondenti al diritto di proprietà o ridurla in soggezione continuativa (lavoro forzato, sessuale, accattonaggio)"
  },
  {
    "id": 2093,
    "category": "Diritto Penale",
    "question": "Cosa è lo Stalking (Atti persecutori, art. 612-bis c.p.)?",
    "options": [
      "Condotte reiterate di minaccia o molestia che cagionano perdurante stato di ansia, timore per l'incolumità o costringono a cambiare abitudini di vita",
      "Un singolo episodio di minaccia",
      "Un corteggiamento insistente ma educato",
      "Una lite tra vicini"
    ],
    "answer": "Condotte reiterate di minaccia o molestia che cagionano perdurante stato di ansia, timore per l'incolumità o costringono a cambiare abitudini di vita"
  },
  {
    "id": 2093,
    "category": "Diritto Penale",
    "question": "Cosa è lo Stalking (Atti persecutori, art. 612-bis c.p.)?",
    "options": [
      "Condotte reiterate di minaccia o molestia che cagionano perdurante stato di ansia, timore per l'incolumità o costringono a cambiare abitudini di vita",
      "Un singolo episodio di minaccia",
      "Un corteggiamento insistente ma educato",
      "Una lite tra vicini"
    ],
    "answer": "Condotte reiterate di minaccia o molestia che cagionano perdurante stato di ansia, timore per l'incolumità o costringono a cambiare abitudini di vita"
  },
  {
    "id": 2093,
    "category": "Diritto Penale",
    "question": "Cosa è lo Stalking (Atti persecutori, art. 612-bis c.p.)?",
    "options": [
      "Condotte reiterate di minaccia o molestia che cagionano perdurante stato di ansia, timore per l'incolumità o costringono a cambiare abitudini di vita",
      "Un singolo episodio di minaccia",
      "Un corteggiamento insistente ma educato",
      "Una lite tra vicini"
    ],
    "answer": "Condotte reiterate di minaccia o molestia che cagionano perdurante stato di ansia, timore per l'incolumità o costringono a cambiare abitudini di vita"
  },
  {
    "id": 2094,
    "category": "Diritto Penale",
    "question": "Il reato di Stalking è procedibile:",
    "options": [
      "A querela della persona offesa (termine 6 mesi), salvo casi specifici (minori, disabili, connessione con reati d'ufficio)",
      "Sempre d'ufficio",
      "Sempre a querela (termine 3 mesi)",
      "A richiesta del Prefetto"
    ],
    "answer": "A querela della persona offesa (termine 6 mesi), salvo casi specifici (minori, disabili, connessione con reati d'ufficio)"
  },
  {
    "id": 2094,
    "category": "Diritto Penale",
    "question": "Il reato di Stalking è procedibile:",
    "options": [
      "A querela della persona offesa (termine 6 mesi), salvo casi specifici (minori, disabili, connessione con reati d'ufficio)",
      "Sempre d'ufficio",
      "Sempre a querela (termine 3 mesi)",
      "A richiesta del Prefetto"
    ],
    "answer": "A querela della persona offesa (termine 6 mesi), salvo casi specifici (minori, disabili, connessione con reati d'ufficio)"
  },
  {
    "id": 2094,
    "category": "Diritto Penale",
    "question": "Il reato di Stalking è procedibile:",
    "options": [
      "A querela della persona offesa (termine 6 mesi), salvo casi specifici (minori, disabili, connessione con reati d'ufficio)",
      "Sempre d'ufficio",
      "Sempre a querela (termine 3 mesi)",
      "A richiesta del Prefetto"
    ],
    "answer": "A querela della persona offesa (termine 6 mesi), salvo casi specifici (minori, disabili, connessione con reati d'ufficio)"
  },
  {
    "id": 2095,
    "category": "Diritto Penale",
    "question": "Cosa è l'Ammonimento del Questore per lo Stalking?",
    "options": [
      "Una misura preventiva: prima della querela, la vittima può chiedere al Questore di ammonire il molestatore a tenere una condotta conforme alla legge",
      "Una sanzione penale",
      "Una misura cautelare",
      "Una multa"
    ],
    "answer": "Una misura preventiva: prima della querela, la vittima può chiedere al Questore di ammonire il molestatore a tenere una condotta conforme alla legge"
  },
  {
    "id": 2095,
    "category": "Diritto Penale",
    "question": "Cosa è l'Ammonimento del Questore per lo Stalking?",
    "options": [
      "Una misura preventiva: prima della querela, la vittima può chiedere al Questore di ammonire il molestatore a tenere una condotta conforme alla legge",
      "Una sanzione penale",
      "Una misura cautelare",
      "Una multa"
    ],
    "answer": "Una misura preventiva: prima della querela, la vittima può chiedere al Questore di ammonire il molestatore a tenere una condotta conforme alla legge"
  },
  {
    "id": 2095,
    "category": "Diritto Penale",
    "question": "Cosa è l'Ammonimento del Questore per lo Stalking?",
    "options": [
      "Una misura preventiva: prima della querela, la vittima può chiedere al Questore di ammonire il molestatore a tenere una condotta conforme alla legge",
      "Una sanzione penale",
      "Una misura cautelare",
      "Una multa"
    ],
    "answer": "Una misura preventiva: prima della querela, la vittima può chiedere al Questore di ammonire il molestatore a tenere una condotta conforme alla legge"
  },
  {
    "id": 2096,
    "category": "Diritto Penale",
    "question": "Qual è il reato di ingresso e soggiorno illegale (art. 10-bis D.Lgs. 286/98)?",
    "options": [
      "Una contravvenzione punita con ammenda per lo straniero che entra o si trattiene illegalmente nel territorio dello Stato",
      "Un delitto punito con la reclusione",
      "Un illecito amministrativo",
      "Non è reato"
    ],
    "answer": "Una contravvenzione punita con ammenda per lo straniero che entra o si trattiene illegalmente nel territorio dello Stato"
  },
  {
    "id": 2096,
    "category": "Diritto Penale",
    "question": "Qual è il reato di ingresso e soggiorno illegale (art. 10-bis D.Lgs. 286/98)?",
    "options": [
      "Una contravvenzione punita con ammenda per lo straniero che entra o si trattiene illegalmente nel territorio dello Stato",
      "Un delitto punito con la reclusione",
      "Un illecito amministrativo",
      "Non è reato"
    ],
    "answer": "Una contravvenzione punita con ammenda per lo straniero che entra o si trattiene illegalmente nel territorio dello Stato"
  },
  {
    "id": 2096,
    "category": "Diritto Penale",
    "question": "Qual è il reato di ingresso e soggiorno illegale (art. 10-bis D.Lgs. 286/98)?",
    "options": [
      "Una contravvenzione punita con ammenda per lo straniero che entra o si trattiene illegalmente nel territorio dello Stato",
      "Un delitto punito con la reclusione",
      "Un illecito amministrativo",
      "Non è reato"
    ],
    "answer": "Una contravvenzione punita con ammenda per lo straniero che entra o si trattiene illegalmente nel territorio dello Stato"
  },
  {
    "id": 2097,
    "category": "Diritto Penale",
    "question": "Cosa succede se lo straniero non ottempera all'ordine di espulsione senza giustificato motivo?",
    "options": [
      "È punito con la multa (art. 14 c. 5-ter D.Lgs 286/98)",
      "È punito con la reclusione",
      "Viene accompagnato alla frontiera senza conseguenze penali",
      "Viene arrestato"
    ],
    "answer": "È punito con la multa (art. 14 c. 5-ter D.Lgs 286/98)"
  },
  {
    "id": 2097,
    "category": "Diritto Penale",
    "question": "Cosa succede se lo straniero non ottempera all'ordine di espulsione senza giustificato motivo?",
    "options": [
      "È punito con la multa (art. 14 c. 5-ter D.Lgs 286/98)",
      "È punito con la reclusione",
      "Viene accompagnato alla frontiera senza conseguenze penali",
      "Viene arrestato"
    ],
    "answer": "È punito con la multa (art. 14 c. 5-ter D.Lgs 286/98)"
  },
  {
    "id": 2097,
    "category": "Diritto Penale",
    "question": "Cosa succede se lo straniero non ottempera all'ordine di espulsione senza giustificato motivo?",
    "options": [
      "È punito con la multa (art. 14 c. 5-ter D.Lgs 286/98)",
      "È punito con la reclusione",
      "Viene accompagnato alla frontiera senza conseguenze penali",
      "Viene arrestato"
    ],
    "answer": "È punito con la multa (art. 14 c. 5-ter D.Lgs 286/98)"
  },
  {
    "id": 2098,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 12 D.Lgs. 286/98 (Favoreggiamento dell'immigrazione clandestina)?",
    "options": [
      "Chi promuove, dirige, organizza, finanzia o effettua il trasporto di stranieri nel territorio dello Stato o ne procura l'ingresso illegale",
      "Chi ospita un clandestino",
      "Chi assume un clandestino",
      "Chi non denuncia un clandestino"
    ],
    "answer": "Chi promuove, dirige, organizza, finanzia o effettua il trasporto di stranieri nel territorio dello Stato o ne procura l'ingresso illegale"
  },
  {
    "id": 2098,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 12 D.Lgs. 286/98 (Favoreggiamento dell'immigrazione clandestina)?",
    "options": [
      "Chi promuove, dirige, organizza, finanzia o effettua il trasporto di stranieri nel territorio dello Stato o ne procura l'ingresso illegale",
      "Chi ospita un clandestino",
      "Chi assume un clandestino",
      "Chi non denuncia un clandestino"
    ],
    "answer": "Chi promuove, dirige, organizza, finanzia o effettua il trasporto di stranieri nel territorio dello Stato o ne procura l'ingresso illegale"
  },
  {
    "id": 2098,
    "category": "Diritto Penale",
    "question": "Cosa punisce l'art. 12 D.Lgs. 286/98 (Favoreggiamento dell'immigrazione clandestina)?",
    "options": [
      "Chi promuove, dirige, organizza, finanzia o effettua il trasporto di stranieri nel territorio dello Stato o ne procura l'ingresso illegale",
      "Chi ospita un clandestino",
      "Chi assume un clandestino",
      "Chi non denuncia un clandestino"
    ],
    "answer": "Chi promuove, dirige, organizza, finanzia o effettua il trasporto di stranieri nel territorio dello Stato o ne procura l'ingresso illegale"
  },
  {
    "id": 2099,
    "category": "Diritto Penale",
    "question": "Cosa ha modificato la Riforma Cartabia (D.Lgs. 150/2022) riguardo alla procedibilità?",
    "options": [
      "Ha esteso la procedibilità a querela per molti reati (es. lesioni, furto, danneggiamento) salvo aggravanti o incapacità della vittima",
      "Ha reso tutti i reati procedibili d'ufficio",
      "Ha abolito la querela",
      "Ha introdotto la procedibilità a richiesta del PM"
    ],
    "answer": "Ha esteso la procedibilità a querela per molti reati (es. lesioni, furto, danneggiamento) salvo aggravanti o incapacità della vittima"
  },
  {
    "id": 2099,
    "category": "Diritto Penale",
    "question": "Cosa ha modificato la Riforma Cartabia (D.Lgs. 150/2022) riguardo alla procedibilità?",
    "options": [
      "Ha esteso la procedibilità a querela per molti reati (es. lesioni, furto, danneggiamento) salvo aggravanti o incapacità della vittima",
      "Ha reso tutti i reati procedibili d'ufficio",
      "Ha abolito la querela",
      "Ha introdotto la procedibilità a richiesta del PM"
    ],
    "answer": "Ha esteso la procedibilità a querela per molti reati (es. lesioni, furto, danneggiamento) salvo aggravanti o incapacità della vittima"
  },
  {
    "id": 2099,
    "category": "Diritto Penale",
    "question": "Cosa ha modificato la Riforma Cartabia (D.Lgs. 150/2022) riguardo alla procedibilità?",
    "options": [
      "Ha esteso la procedibilità a querela per molti reati (es. lesioni, furto, danneggiamento) salvo aggravanti o incapacità della vittima",
      "Ha reso tutti i reati procedibili d'ufficio",
      "Ha abolito la querela",
      "Ha introdotto la procedibilità a richiesta del PM"
    ],
    "answer": "Ha esteso la procedibilità a querela per molti reati (es. lesioni, furto, danneggiamento) salvo aggravanti o incapacità della vittima"
  },
  {
    "id": 2100,
    "category": "Diritto Penale",
    "question": "Cosa prevede il nuovo art. 131-bis c.p. (Particolare tenuità del fatto) dopo la Riforma Cartabia?",
    "options": [
      "Si applica ai reati con pena minima edittale non superiore a 2 anni (senza limite massimo), se l'offesa è tenue e il comportamento non abituale",
      "Si applica solo ai reati puniti con la multa",
      "Si applica a tutti i reati",
      "È stato abrogato"
    ],
    "answer": "Si applica ai reati con pena minima edittale non superiore a 2 anni (senza limite massimo), se l'offesa è tenue e il comportamento non abituale"
  },
  {
    "id": 2100,
    "category": "Diritto Penale",
    "question": "Cosa prevede il nuovo art. 131-bis c.p. (Particolare tenuità del fatto) dopo la Riforma Cartabia?",
    "options": [
      "Si applica ai reati con pena minima edittale non superiore a 2 anni (senza limite massimo), se l'offesa è tenue e il comportamento non abituale",
      "Si applica solo ai reati puniti con la multa",
      "Si applica a tutti i reati",
      "È stato abrogato"
    ],
    "answer": "Si applica ai reati con pena minima edittale non superiore a 2 anni (senza limite massimo), se l'offesa è tenue e il comportamento non abituale"
  },
  {
    "id": 2100,
    "category": "Diritto Penale",
    "question": "Cosa prevede il nuovo art. 131-bis c.p. (Particolare tenuità del fatto) dopo la Riforma Cartabia?",
    "options": [
      "Si applica ai reati con pena minima edittale non superiore a 2 anni (senza limite massimo), se l'offesa è tenue e il comportamento non abituale",
      "Si applica solo ai reati puniti con la multa",
      "Si applica a tutti i reati",
      "È stato abrogato"
    ],
    "answer": "Si applica ai reati con pena minima edittale non superiore a 2 anni (senza limite massimo), se l'offesa è tenue e il comportamento non abituale"
  },
  {
    "id": 2101,
    "category": "Diritto Penale",
    "question": "Cosa si intende per 'reato impossibile' (art. 49 c.p.)?",
    "options": [
      "Quando per l'inidoneità dell'azione o l'inesistenza dell'oggetto è impossibile che l'evento dannoso o pericoloso si verifichi",
      "Un reato che non può essere scoperto",
      "Un reato commesso da un non imputabile",
      "Un reato prescritto"
    ],
    "answer": "Quando per l'inidoneità dell'azione o l'inesistenza dell'oggetto è impossibile che l'evento dannoso o pericoloso si verifichi"
  },
  {
    "id": 2101,
    "category": "Diritto Penale",
    "question": "Cosa si intende per 'reato impossibile' (art. 49 c.p.)?",
    "options": [
      "Quando per l'inidoneità dell'azione o l'inesistenza dell'oggetto è impossibile che l'evento dannoso o pericoloso si verifichi",
      "Un reato che non può essere scoperto",
      "Un reato commesso da un non imputabile",
      "Un reato prescritto"
    ],
    "answer": "Quando per l'inidoneità dell'azione o l'inesistenza dell'oggetto è impossibile che l'evento dannoso o pericoloso si verifichi"
  },
  {
    "id": 2101,
    "category": "Diritto Penale",
    "question": "Cosa si intende per 'reato impossibile' (art. 49 c.p.)?",
    "options": [
      "Quando per l'inidoneità dell'azione o l'inesistenza dell'oggetto è impossibile che l'evento dannoso o pericoloso si verifichi",
      "Un reato che non può essere scoperto",
      "Un reato commesso da un non imputabile",
      "Un reato prescritto"
    ],
    "answer": "Quando per l'inidoneità dell'azione o l'inesistenza dell'oggetto è impossibile che l'evento dannoso o pericoloso si verifichi"
  },
  {
    "id": 2102,
    "category": "Diritto Penale",
    "question": "In caso di reato impossibile, il giudice può applicare una misura di sicurezza?",
    "options": [
      "Sì, la libertà vigilata, se l'imputato è socialmente pericoloso",
      "No, mai",
      "Sì, il carcere",
      "Sì, l'ospedale psichiatrico"
    ],
    "answer": "Sì, la libertà vigilata, se l'imputato è socialmente pericoloso"
  },
  {
    "id": 2102,
    "category": "Diritto Penale",
    "question": "In caso di reato impossibile, il giudice può applicare una misura di sicurezza?",
    "options": [
      "Sì, la libertà vigilata, se l'imputato è socialmente pericoloso",
      "No, mai",
      "Sì, il carcere",
      "Sì, l'ospedale psichiatrico"
    ],
    "answer": "Sì, la libertà vigilata, se l'imputato è socialmente pericoloso"
  },
  {
    "id": 2102,
    "category": "Diritto Penale",
    "question": "In caso di reato impossibile, il giudice può applicare una misura di sicurezza?",
    "options": [
      "Sì, la libertà vigilata, se l'imputato è socialmente pericoloso",
      "No, mai",
      "Sì, il carcere",
      "Sì, l'ospedale psichiatrico"
    ],
    "answer": "Sì, la libertà vigilata, se l'imputato è socialmente pericoloso"
  },
  {
    "id": 2103,
    "category": "Diritto Penale",
    "question": "Cosa è l'aberratio delicti?",
    "options": [
      "Quando il soggetto cagiona un evento diverso da quello voluto per errore nell'uso dei mezzi di esecuzione",
      "Quando il soggetto colpisce una persona diversa",
      "Quando il soggetto sbaglia reato per ignoranza della legge",
      "Quando il reato è commesso per errore scusabile"
    ],
    "answer": "Quando il soggetto cagiona un evento diverso da quello voluto per errore nell'uso dei mezzi di esecuzione"
  },
  {
    "id": 2103,
    "category": "Diritto Penale",
    "question": "Cosa è l'aberratio delicti?",
    "options": [
      "Quando il soggetto cagiona un evento diverso da quello voluto per errore nell'uso dei mezzi di esecuzione",
      "Quando il soggetto colpisce una persona diversa",
      "Quando il soggetto sbaglia reato per ignoranza della legge",
      "Quando il reato è commesso per errore scusabile"
    ],
    "answer": "Quando il soggetto cagiona un evento diverso da quello voluto per errore nell'uso dei mezzi di esecuzione"
  },
  {
    "id": 2103,
    "category": "Diritto Penale",
    "question": "Cosa è l'aberratio delicti?",
    "options": [
      "Quando il soggetto cagiona un evento diverso da quello voluto per errore nell'uso dei mezzi di esecuzione",
      "Quando il soggetto colpisce una persona diversa",
      "Quando il soggetto sbaglia reato per ignoranza della legge",
      "Quando il reato è commesso per errore scusabile"
    ],
    "answer": "Quando il soggetto cagiona un evento diverso da quello voluto per errore nell'uso dei mezzi di esecuzione"
  },
  {
    "id": 2104,
    "category": "Diritto Penale",
    "question": "Come risponde il colpevole in caso di aberratio delicti?",
    "options": [
      "A titolo di colpa per l'evento non voluto, se il fatto è previsto come delitto colposo",
      "A titolo di dolo",
      "Non risponde",
      "Risponde per entrambi i reati"
    ],
    "answer": "A titolo di colpa per l'evento non voluto, se il fatto è previsto come delitto colposo"
  },
  {
    "id": 2104,
    "category": "Diritto Penale",
    "question": "Come risponde il colpevole in caso di aberratio delicti?",
    "options": [
      "A titolo di colpa per l'evento non voluto, se il fatto è previsto come delitto colposo",
      "A titolo di dolo",
      "Non risponde",
      "Risponde per entrambi i reati"
    ],
    "answer": "A titolo di colpa per l'evento non voluto, se il fatto è previsto come delitto colposo"
  },
  {
    "id": 2104,
    "category": "Diritto Penale",
    "question": "Come risponde il colpevole in caso di aberratio delicti?",
    "options": [
      "A titolo di colpa per l'evento non voluto, se il fatto è previsto come delitto colposo",
      "A titolo di dolo",
      "Non risponde",
      "Risponde per entrambi i reati"
    ],
    "answer": "A titolo di colpa per l'evento non voluto, se il fatto è previsto come delitto colposo"
  },
  {
    "id": 2105,
    "category": "Diritto Penale",
    "question": "Cosa è il concorso formale di reati?",
    "options": [
      "Quando con una sola azione od omissione si violano diverse disposizioni di legge o si commettono più violazioni della stessa disposizione",
      "Quando si commettono più reati con più azioni",
      "Quando più persone concorrono nel reato",
      "Quando il reato è continuato"
    ],
    "answer": "Quando con una sola azione od omissione si violano diverse disposizioni di legge o si commettono più violazioni della stessa disposizione"
  },
  {
    "id": 2105,
    "category": "Diritto Penale",
    "question": "Cosa è il concorso formale di reati?",
    "options": [
      "Quando con una sola azione od omissione si violano diverse disposizioni di legge o si commettono più violazioni della stessa disposizione",
      "Quando si commettono più reati con più azioni",
      "Quando più persone concorrono nel reato",
      "Quando il reato è continuato"
    ],
    "answer": "Quando con una sola azione od omissione si violano diverse disposizioni di legge o si commettono più violazioni della stessa disposizione"
  },
  {
    "id": 2105,
    "category": "Diritto Penale",
    "question": "Cosa è il concorso formale di reati?",
    "options": [
      "Quando con una sola azione od omissione si violano diverse disposizioni di legge o si commettono più violazioni della stessa disposizione",
      "Quando si commettono più reati con più azioni",
      "Quando più persone concorrono nel reato",
      "Quando il reato è continuato"
    ],
    "answer": "Quando con una sola azione od omissione si violano diverse disposizioni di legge o si commettono più violazioni della stessa disposizione"
  },
  {
    "id": 2106,
    "category": "Diritto Penale",
    "question": "Quale regime sanzionatorio si applica al concorso formale?",
    "options": [
      "Il cumulo giuridico (pena per la violazione più grave aumentata fino al triplo)",
      "Il cumulo materiale (somma delle pene)",
      "La pena media",
      "L'assorbimento (solo la pena più grave)"
    ],
    "answer": "Il cumulo giuridico (pena per la violazione più grave aumentata fino al triplo)"
  },
  {
    "id": 2106,
    "category": "Diritto Penale",
    "question": "Quale regime sanzionatorio si applica al concorso formale?",
    "options": [
      "Il cumulo giuridico (pena per la violazione più grave aumentata fino al triplo)",
      "Il cumulo materiale (somma delle pene)",
      "La pena media",
      "L'assorbimento (solo la pena più grave)"
    ],
    "answer": "Il cumulo giuridico (pena per la violazione più grave aumentata fino al triplo)"
  },
  {
    "id": 2106,
    "category": "Diritto Penale",
    "question": "Quale regime sanzionatorio si applica al concorso formale?",
    "options": [
      "Il cumulo giuridico (pena per la violazione più grave aumentata fino al triplo)",
      "Il cumulo materiale (somma delle pene)",
      "La pena media",
      "L'assorbimento (solo la pena più grave)"
    ],
    "answer": "Il cumulo giuridico (pena per la violazione più grave aumentata fino al triplo)"
  },
  {
    "id": 2107,
    "category": "Diritto Penale",
    "question": "Cosa è il concorso materiale di reati?",
    "options": [
      "Quando con più azioni od omissioni si commettono più reati",
      "Quando con una sola azione si commettono più reati",
      "Quando il reato è commesso da più persone",
      "Quando il reato è aggravato"
    ],
    "answer": "Quando con più azioni od omissioni si commettono più reati"
  },
  {
    "id": 2107,
    "category": "Diritto Penale",
    "question": "Cosa è il concorso materiale di reati?",
    "options": [
      "Quando con più azioni od omissioni si commettono più reati",
      "Quando con una sola azione si commettono più reati",
      "Quando il reato è commesso da più persone",
      "Quando il reato è aggravato"
    ],
    "answer": "Quando con più azioni od omissioni si commettono più reati"
  },
  {
    "id": 2107,
    "category": "Diritto Penale",
    "question": "Cosa è il concorso materiale di reati?",
    "options": [
      "Quando con più azioni od omissioni si commettono più reati",
      "Quando con una sola azione si commettono più reati",
      "Quando il reato è commesso da più persone",
      "Quando il reato è aggravato"
    ],
    "answer": "Quando con più azioni od omissioni si commettono più reati"
  },
  {
    "id": 2108,
    "category": "Diritto Penale",
    "question": "Quale regime sanzionatorio si applica al concorso materiale?",
    "options": [
      "Il cumulo materiale (somma delle pene, entro certi limiti massimi)",
      "Il cumulo giuridico",
      "L'assorbimento",
      "La pena unica"
    ],
    "answer": "Il cumulo materiale (somma delle pene, entro certi limiti massimi)"
  },
  {
    "id": 2108,
    "category": "Diritto Penale",
    "question": "Quale regime sanzionatorio si applica al concorso materiale?",
    "options": [
      "Il cumulo materiale (somma delle pene, entro certi limiti massimi)",
      "Il cumulo giuridico",
      "L'assorbimento",
      "La pena unica"
    ],
    "answer": "Il cumulo materiale (somma delle pene, entro certi limiti massimi)"
  },
  {
    "id": 2108,
    "category": "Diritto Penale",
    "question": "Quale regime sanzionatorio si applica al concorso materiale?",
    "options": [
      "Il cumulo materiale (somma delle pene, entro certi limiti massimi)",
      "Il cumulo giuridico",
      "L'assorbimento",
      "La pena unica"
    ],
    "answer": "Il cumulo materiale (somma delle pene, entro certi limiti massimi)"
  },
  {
    "id": 2109,
    "category": "Diritto Penale",
    "question": "Cosa è l'indulto?",
    "options": [
      "Una causa di estinzione della pena (in tutto o in parte) concessa dal Parlamento",
      "Una causa di estinzione del reato",
      "Un provvedimento del Presidente della Repubblica",
      "Un provvedimento del giudice"
    ],
    "answer": "Una causa di estinzione della pena (in tutto o in parte) concessa dal Parlamento"
  },
  {
    "id": 2109,
    "category": "Diritto Penale",
    "question": "Cosa è l'indulto?",
    "options": [
      "Una causa di estinzione della pena (in tutto o in parte) concessa dal Parlamento",
      "Una causa di estinzione del reato",
      "Un provvedimento del Presidente della Repubblica",
      "Un provvedimento del giudice"
    ],
    "answer": "Una causa di estinzione della pena (in tutto o in parte) concessa dal Parlamento"
  },
  {
    "id": 2109,
    "category": "Diritto Penale",
    "question": "Cosa è l'indulto?",
    "options": [
      "Una causa di estinzione della pena (in tutto o in parte) concessa dal Parlamento",
      "Una causa di estinzione del reato",
      "Un provvedimento del Presidente della Repubblica",
      "Un provvedimento del giudice"
    ],
    "answer": "Una causa di estinzione della pena (in tutto o in parte) concessa dal Parlamento"
  },
  {
    "id": 2110,
    "category": "Diritto Penale",
    "question": "Cosa è la grazia?",
    "options": [
      "Un provvedimento di clemenza individuale concesso dal Presidente della Repubblica che condona o commuta la pena",
      "Un provvedimento generale del Parlamento",
      "Una causa di giustificazione",
      "Una misura di sicurezza"
    ],
    "answer": "Un provvedimento di clemenza individuale concesso dal Presidente della Repubblica che condona o commuta la pena"
  },
  {
    "id": 2110,
    "category": "Diritto Penale",
    "question": "Cosa è la grazia?",
    "options": [
      "Un provvedimento di clemenza individuale concesso dal Presidente della Repubblica che condona o commuta la pena",
      "Un provvedimento generale del Parlamento",
      "Una causa di giustificazione",
      "Una misura di sicurezza"
    ],
    "answer": "Un provvedimento di clemenza individuale concesso dal Presidente della Repubblica che condona o commuta la pena"
  },
  {
    "id": 2110,
    "category": "Diritto Penale",
    "question": "Cosa è la grazia?",
    "options": [
      "Un provvedimento di clemenza individuale concesso dal Presidente della Repubblica che condona o commuta la pena",
      "Un provvedimento generale del Parlamento",
      "Una causa di giustificazione",
      "Una misura di sicurezza"
    ],
    "answer": "Un provvedimento di clemenza individuale concesso dal Presidente della Repubblica che condona o commuta la pena"
  },
  {
    "id": 2111,
    "category": "Diritto Penale",
    "question": "La morte del reo prima della condanna estingue:",
    "options": [
      "Il reato",
      "La pena",
      "Solo le pene accessorie",
      "Nulla, il processo continua contro gli eredi"
    ],
    "answer": "Il reato"
  },
  {
    "id": 2111,
    "category": "Diritto Penale",
    "question": "La morte del reo prima della condanna estingue:",
    "options": [
      "Il reato",
      "La pena",
      "Solo le pene accessorie",
      "Nulla, il processo continua contro gli eredi"
    ],
    "answer": "Il reato"
  },
  {
    "id": 2111,
    "category": "Diritto Penale",
    "question": "La morte del reo prima della condanna estingue:",
    "options": [
      "Il reato",
      "La pena",
      "Solo le pene accessorie",
      "Nulla, il processo continua contro gli eredi"
    ],
    "answer": "Il reato"
  },
  {
    "id": 2112,
    "category": "Diritto Penale",
    "question": "La morte del reo dopo la condanna definitiva estingue:",
    "options": [
      "La pena",
      "Il reato",
      "Le obbligazioni civili",
      "La confisca"
    ],
    "answer": "La pena"
  },
  {
    "id": 2112,
    "category": "Diritto Penale",
    "question": "La morte del reo dopo la condanna definitiva estingue:",
    "options": [
      "La pena",
      "Il reato",
      "Le obbligazioni civili",
      "La confisca"
    ],
    "answer": "La pena"
  },
  {
    "id": 2112,
    "category": "Diritto Penale",
    "question": "La morte del reo dopo la condanna definitiva estingue:",
    "options": [
      "La pena",
      "Il reato",
      "Le obbligazioni civili",
      "La confisca"
    ],
    "answer": "La pena"
  },
  {
    "id": 2113,
    "category": "Diritto Penale",
    "question": "Cosa è la querela?",
    "options": [
      "Una condizione di procedibilità: la manifestazione di volontà della persona offesa che si proceda penalmente per un fatto di reato",
      "Una denuncia fatta da un pubblico ufficiale",
      "Una richiesta di risarcimento danni",
      "Una confessione"
    ],
    "answer": "Una condizione di procedibilità: la manifestazione di volontà della persona offesa che si proceda penalmente per un fatto di reato"
  },
  {
    "id": 2113,
    "category": "Diritto Penale",
    "question": "Cosa è la querela?",
    "options": [
      "Una condizione di procedibilità: la manifestazione di volontà della persona offesa che si proceda penalmente per un fatto di reato",
      "Una denuncia fatta da un pubblico ufficiale",
      "Una richiesta di risarcimento danni",
      "Una confessione"
    ],
    "answer": "Una condizione di procedibilità: la manifestazione di volontà della persona offesa che si proceda penalmente per un fatto di reato"
  },
  {
    "id": 2113,
    "category": "Diritto Penale",
    "question": "Cosa è la querela?",
    "options": [
      "Una condizione di procedibilità: la manifestazione di volontà della persona offesa che si proceda penalmente per un fatto di reato",
      "Una denuncia fatta da un pubblico ufficiale",
      "Una richiesta di risarcimento danni",
      "Una confessione"
    ],
    "answer": "Una condizione di procedibilità: la manifestazione di volontà della persona offesa che si proceda penalmente per un fatto di reato"
  },
  {
    "id": 2114,
    "category": "Diritto Penale",
    "question": "Qual è il termine ordinario per proporre querela?",
    "options": [
      "3 mesi dal giorno della notizia del fatto che costituisce reato",
      "6 mesi",
      "90 giorni",
      "1 anno"
    ],
    "answer": "3 mesi dal giorno della notizia del fatto che costituisce reato"
  },
  {
    "id": 2114,
    "category": "Diritto Penale",
    "question": "Qual è il termine ordinario per proporre querela?",
    "options": [
      "3 mesi dal giorno della notizia del fatto che costituisce reato",
      "6 mesi",
      "90 giorni",
      "1 anno"
    ],
    "answer": "3 mesi dal giorno della notizia del fatto che costituisce reato"
  },
  {
    "id": 2114,
    "category": "Diritto Penale",
    "question": "Qual è il termine ordinario per proporre querela?",
    "options": [
      "3 mesi dal giorno della notizia del fatto che costituisce reato",
      "6 mesi",
      "90 giorni",
      "1 anno"
    ],
    "answer": "3 mesi dal giorno della notizia del fatto che costituisce reato"
  },
  {
    "id": 2115,
    "category": "Diritto Penale",
    "question": "Per quali reati il termine per la querela è di 6 mesi?",
    "options": [
      "Stalking (Atti persecutori) e violenza sessuale",
      "Furto",
      "Truffa",
      "Lesioni"
    ],
    "answer": "Stalking (Atti persecutori) e violenza sessuale"
  },
  {
    "id": 2115,
    "category": "Diritto Penale",
    "question": "Per quali reati il termine per la querela è di 6 mesi?",
    "options": [
      "Stalking (Atti persecutori) e violenza sessuale",
      "Furto",
      "Truffa",
      "Lesioni"
    ],
    "answer": "Stalking (Atti persecutori) e violenza sessuale"
  },
  {
    "id": 2115,
    "category": "Diritto Penale",
    "question": "Per quali reati il termine per la querela è di 6 mesi?",
    "options": [
      "Stalking (Atti persecutori) e violenza sessuale",
      "Furto",
      "Truffa",
      "Lesioni"
    ],
    "answer": "Stalking (Atti persecutori) e violenza sessuale"
  },
  {
    "id": 2116,
    "category": "Diritto Penale",
    "question": "La querela può essere ritirata?",
    "options": [
      "Sì, mediante remissione (accettata dal querelato), salvo che per alcuni reati (es. violenza sessuale o stalking grave)",
      "No, mai",
      "Sì, ma solo davanti al giudice",
      "Solo se si paga"
    ],
    "answer": "Sì, mediante remissione (accettata dal querelato), salvo che per alcuni reati (es. violenza sessuale o stalking grave)"
  },
  {
    "id": 2116,
    "category": "Diritto Penale",
    "question": "La querela può essere ritirata?",
    "options": [
      "Sì, mediante remissione (accettata dal querelato), salvo che per alcuni reati (es. violenza sessuale o stalking grave)",
      "No, mai",
      "Sì, ma solo davanti al giudice",
      "Solo se si paga"
    ],
    "answer": "Sì, mediante remissione (accettata dal querelato), salvo che per alcuni reati (es. violenza sessuale o stalking grave)"
  },
  {
    "id": 2116,
    "category": "Diritto Penale",
    "question": "La querela può essere ritirata?",
    "options": [
      "Sì, mediante remissione (accettata dal querelato), salvo che per alcuni reati (es. violenza sessuale o stalking grave)",
      "No, mai",
      "Sì, ma solo davanti al giudice",
      "Solo se si paga"
    ],
    "answer": "Sì, mediante remissione (accettata dal querelato), salvo che per alcuni reati (es. violenza sessuale o stalking grave)"
  },
  {
    "id": 2117,
    "category": "Diritto Penale",
    "question": "Cosa è la remissione della querela?",
    "options": [
      "L'atto con cui la persona offesa rinuncia a proseguire l'azione penale già iniziata",
      "Il ritiro della denuncia",
      "La prescrizione del reato",
      "L'assoluzione"
    ],
    "answer": "L'atto con cui la persona offesa rinuncia a proseguire l'azione penale già iniziata"
  },
  {
    "id": 2117,
    "category": "Diritto Penale",
    "question": "Cosa è la remissione della querela?",
    "options": [
      "L'atto con cui la persona offesa rinuncia a proseguire l'azione penale già iniziata",
      "Il ritiro della denuncia",
      "La prescrizione del reato",
      "L'assoluzione"
    ],
    "answer": "L'atto con cui la persona offesa rinuncia a proseguire l'azione penale già iniziata"
  },
  {
    "id": 2117,
    "category": "Diritto Penale",
    "question": "Cosa è la remissione della querela?",
    "options": [
      "L'atto con cui la persona offesa rinuncia a proseguire l'azione penale già iniziata",
      "Il ritiro della denuncia",
      "La prescrizione del reato",
      "L'assoluzione"
    ],
    "answer": "L'atto con cui la persona offesa rinuncia a proseguire l'azione penale già iniziata"
  },
  {
    "id": 2118,
    "category": "Diritto Penale",
    "question": "Cosa comporta la Riforma Cartabia per il reato di Furto (art. 624 c.p.)?",
    "options": [
      "È diventato procedibile a querela, salvo aggravanti specifiche (es. su cose esposte alla pubblica fede, o incapaci)",
      "È diventato procedibile d'ufficio sempre",
      "È stato depenalizzato",
      "La pena è stata aumentata"
    ],
    "answer": "È diventato procedibile a querela, salvo aggravanti specifiche (es. su cose esposte alla pubblica fede, o incapaci)"
  },
  {
    "id": 2118,
    "category": "Diritto Penale",
    "question": "Cosa comporta la Riforma Cartabia per il reato di Furto (art. 624 c.p.)?",
    "options": [
      "È diventato procedibile a querela, salvo aggravanti specifiche (es. su cose esposte alla pubblica fede, o incapaci)",
      "È diventato procedibile d'ufficio sempre",
      "È stato depenalizzato",
      "La pena è stata aumentata"
    ],
    "answer": "È diventato procedibile a querela, salvo aggravanti specifiche (es. su cose esposte alla pubblica fede, o incapaci)"
  },
  {
    "id": 2118,
    "category": "Diritto Penale",
    "question": "Cosa comporta la Riforma Cartabia per il reato di Furto (art. 624 c.p.)?",
    "options": [
      "È diventato procedibile a querela, salvo aggravanti specifiche (es. su cose esposte alla pubblica fede, o incapaci)",
      "È diventato procedibile d'ufficio sempre",
      "È stato depenalizzato",
      "La pena è stata aumentata"
    ],
    "answer": "È diventato procedibile a querela, salvo aggravanti specifiche (es. su cose esposte alla pubblica fede, o incapaci)"
  },
  {
    "id": 2119,
    "category": "Diritto Penale",
    "question": "Il reato di Lesioni personali (art. 582 c.p.) è procedibile:",
    "options": [
      "A querela di parte, salvo aggravanti specifiche o se la malattia supera i 20 giorni e la vittima è incapace",
      "Sempre d'ufficio se la malattia supera i 20 giorni",
      "Sempre a querela",
      "D'ufficio solo se gravissime"
    ],
    "answer": "A querela di parte, salvo aggravanti specifiche o se la malattia supera i 20 giorni e la vittima è incapace"
  },
  {
    "id": 2119,
    "category": "Diritto Penale",
    "question": "Il reato di Lesioni personali (art. 582 c.p.) è procedibile:",
    "options": [
      "A querela di parte, salvo aggravanti specifiche o se la malattia supera i 20 giorni e la vittima è incapace",
      "Sempre d'ufficio se la malattia supera i 20 giorni",
      "Sempre a querela",
      "D'ufficio solo se gravissime"
    ],
    "answer": "A querela di parte, salvo aggravanti specifiche o se la malattia supera i 20 giorni e la vittima è incapace"
  },
  {
    "id": 2119,
    "category": "Diritto Penale",
    "question": "Il reato di Lesioni personali (art. 582 c.p.) è procedibile:",
    "options": [
      "A querela di parte, salvo aggravanti specifiche o se la malattia supera i 20 giorni e la vittima è incapace",
      "Sempre d'ufficio se la malattia supera i 20 giorni",
      "Sempre a querela",
      "D'ufficio solo se gravissime"
    ],
    "answer": "A querela di parte, salvo aggravanti specifiche o se la malattia supera i 20 giorni e la vittima è incapace"
  },
  {
    "id": 2120,
    "category": "Diritto Penale",
    "question": "Il reato di Danneggiamento (art. 635 c.p.) è procedibile:",
    "options": [
      "A querela di parte, salvo se commesso in occasione di interruzione di pubblico servizio o contro incapaci",
      "Sempre d'ufficio",
      "Non è più reato (depenalizzato nel 2016 per la forma semplice)",
      "Solo se il danno è grave"
    ],
    "answer": "A querela di parte, salvo se commesso in occasione di interruzione di pubblico servizio o contro incapaci"
  },
  {
    "id": 2120,
    "category": "Diritto Penale",
    "question": "Il reato di Danneggiamento (art. 635 c.p.) è procedibile:",
    "options": [
      "A querela di parte, salvo se commesso in occasione di interruzione di pubblico servizio o contro incapaci",
      "Sempre d'ufficio",
      "Non è più reato (depenalizzato nel 2016 per la forma semplice)",
      "Solo se il danno è grave"
    ],
    "answer": "A querela di parte, salvo se commesso in occasione di interruzione di pubblico servizio o contro incapaci"
  },
  {
    "id": 2120,
    "category": "Diritto Penale",
    "question": "Il reato di Danneggiamento (art. 635 c.p.) è procedibile:",
    "options": [
      "A querela di parte, salvo se commesso in occasione di interruzione di pubblico servizio o contro incapaci",
      "Sempre d'ufficio",
      "Non è più reato (depenalizzato nel 2016 per la forma semplice)",
      "Solo se il danno è grave"
    ],
    "answer": "A querela di parte, salvo se commesso in occasione di interruzione di pubblico servizio o contro incapaci"
  },
  {
    "id": 2121,
    "category": "Diritto Penale",
    "question": "Cosa è la confisca?",
    "options": [
      "Una misura di sicurezza patrimoniale consistente nell'espropriazione delle cose che servirono a commettere il reato o che ne sono il prodotto/profitto",
      "Una pena accessoria",
      "Una sanzione amministrativa",
      "Il sequestro probatorio"
    ],
    "answer": "Una misura di sicurezza patrimoniale consistente nell'espropriazione delle cose che servirono a commettere il reato o che ne sono il prodotto/profitto"
  },
  {
    "id": 2121,
    "category": "Diritto Penale",
    "question": "Cosa è la confisca?",
    "options": [
      "Una misura di sicurezza patrimoniale consistente nell'espropriazione delle cose che servirono a commettere il reato o che ne sono il prodotto/profitto",
      "Una pena accessoria",
      "Una sanzione amministrativa",
      "Il sequestro probatorio"
    ],
    "answer": "Una misura di sicurezza patrimoniale consistente nell'espropriazione delle cose che servirono a commettere il reato o che ne sono il prodotto/profitto"
  },
  {
    "id": 2121,
    "category": "Diritto Penale",
    "question": "Cosa è la confisca?",
    "options": [
      "Una misura di sicurezza patrimoniale consistente nell'espropriazione delle cose che servirono a commettere il reato o che ne sono il prodotto/profitto",
      "Una pena accessoria",
      "Una sanzione amministrativa",
      "Il sequestro probatorio"
    ],
    "answer": "Una misura di sicurezza patrimoniale consistente nell'espropriazione delle cose che servirono a commettere il reato o che ne sono il prodotto/profitto"
  },
  {
    "id": 2122,
    "category": "Diritto Penale",
    "question": "La confisca è obbligatoria?",
    "options": [
      "Sì, in alcuni casi previsti dalla legge (es. cose la cui fabbricazione/uso è vietato, armi, ecc.)",
      "No, è sempre facoltativa",
      "Solo per i delitti",
      "Solo per le contravvenzioni"
    ],
    "answer": "Sì, in alcuni casi previsti dalla legge (es. cose la cui fabbricazione/uso è vietato, armi, ecc.)"
  },
  {
    "id": 2122,
    "category": "Diritto Penale",
    "question": "La confisca è obbligatoria?",
    "options": [
      "Sì, in alcuni casi previsti dalla legge (es. cose la cui fabbricazione/uso è vietato, armi, ecc.)",
      "No, è sempre facoltativa",
      "Solo per i delitti",
      "Solo per le contravvenzioni"
    ],
    "answer": "Sì, in alcuni casi previsti dalla legge (es. cose la cui fabbricazione/uso è vietato, armi, ecc.)"
  },
  {
    "id": 2122,
    "category": "Diritto Penale",
    "question": "La confisca è obbligatoria?",
    "options": [
      "Sì, in alcuni casi previsti dalla legge (es. cose la cui fabbricazione/uso è vietato, armi, ecc.)",
      "No, è sempre facoltativa",
      "Solo per i delitti",
      "Solo per le contravvenzioni"
    ],
    "answer": "Sì, in alcuni casi previsti dalla legge (es. cose la cui fabbricazione/uso è vietato, armi, ecc.)"
  },
  {
    "id": 2123,
    "category": "Diritto Penale",
    "question": "Cosa è il sequestro preventivo?",
    "options": [
      "Una misura cautelare reale disposta dal giudice per impedire che la libera disponibilità di una cosa pertinente al reato possa aggravare/protrarre le conseguenze",
      "Il sequestro delle prove",
      "La confisca definitiva",
      "Il pignoramento"
    ],
    "answer": "Una misura cautelare reale disposta dal giudice per impedire che la libera disponibilità di una cosa pertinente al reato possa aggravare/protrarre le conseguenze"
  },
  {
    "id": 2123,
    "category": "Diritto Penale",
    "question": "Cosa è il sequestro preventivo?",
    "options": [
      "Una misura cautelare reale disposta dal giudice per impedire che la libera disponibilità di una cosa pertinente al reato possa aggravare/protrarre le conseguenze",
      "Il sequestro delle prove",
      "La confisca definitiva",
      "Il pignoramento"
    ],
    "answer": "Una misura cautelare reale disposta dal giudice per impedire che la libera disponibilità di una cosa pertinente al reato possa aggravare/protrarre le conseguenze"
  },
  {
    "id": 2123,
    "category": "Diritto Penale",
    "question": "Cosa è il sequestro preventivo?",
    "options": [
      "Una misura cautelare reale disposta dal giudice per impedire che la libera disponibilità di una cosa pertinente al reato possa aggravare/protrarre le conseguenze",
      "Il sequestro delle prove",
      "La confisca definitiva",
      "Il pignoramento"
    ],
    "answer": "Una misura cautelare reale disposta dal giudice per impedire che la libera disponibilità di una cosa pertinente al reato possa aggravare/protrarre le conseguenze"
  },
  {
    "id": 2124,
    "category": "Diritto Penale",
    "question": "Cosa è il sequestro probatorio?",
    "options": [
      "Un mezzo di ricerca della prova disposto dall'A.G. per assicurare il corpo del reato e le cose pertinenti al reato necessarie per l'accertamento dei fatti",
      "Una misura di sicurezza",
      "Una misura di prevenzione",
      "Una sanzione"
    ],
    "answer": "Un mezzo di ricerca della prova disposto dall'A.G. per assicurare il corpo del reato e le cose pertinenti al reato necessarie per l'accertamento dei fatti"
  },
  {
    "id": 2124,
    "category": "Diritto Penale",
    "question": "Cosa è il sequestro probatorio?",
    "options": [
      "Un mezzo di ricerca della prova disposto dall'A.G. per assicurare il corpo del reato e le cose pertinenti al reato necessarie per l'accertamento dei fatti",
      "Una misura di sicurezza",
      "Una misura di prevenzione",
      "Una sanzione"
    ],
    "answer": "Un mezzo di ricerca della prova disposto dall'A.G. per assicurare il corpo del reato e le cose pertinenti al reato necessarie per l'accertamento dei fatti"
  },
  {
    "id": 2124,
    "category": "Diritto Penale",
    "question": "Cosa è il sequestro probatorio?",
    "options": [
      "Un mezzo di ricerca della prova disposto dall'A.G. per assicurare il corpo del reato e le cose pertinenti al reato necessarie per l'accertamento dei fatti",
      "Una misura di sicurezza",
      "Una misura di prevenzione",
      "Una sanzione"
    ],
    "answer": "Un mezzo di ricerca della prova disposto dall'A.G. per assicurare il corpo del reato e le cose pertinenti al reato necessarie per l'accertamento dei fatti"
  },
  {
    "id": 2125,
    "category": "Diritto Penale",
    "question": "Chi sono gli Ufficiali di Polizia Giudiziaria?",
    "options": [
      "Dirigenti, commissari, ispettori della Polizia di Stato, Ufficiali dei Carabinieri e G.d.F., Marescialli, ecc.",
      "Solo i Commissari",
      "Tutti i poliziotti",
      "Solo i Carabinieri"
    ],
    "answer": "Dirigenti, commissari, ispettori della Polizia di Stato, Ufficiali dei Carabinieri e G.d.F., Marescialli, ecc."
  },
  {
    "id": 2125,
    "category": "Diritto Penale",
    "question": "Chi sono gli Ufficiali di Polizia Giudiziaria?",
    "options": [
      "Dirigenti, commissari, ispettori della Polizia di Stato, Ufficiali dei Carabinieri e G.d.F., Marescialli, ecc.",
      "Solo i Commissari",
      "Tutti i poliziotti",
      "Solo i Carabinieri"
    ],
    "answer": "Dirigenti, commissari, ispettori della Polizia di Stato, Ufficiali dei Carabinieri e G.d.F., Marescialli, ecc."
  },
  {
    "id": 2125,
    "category": "Diritto Penale",
    "question": "Chi sono gli Ufficiali di Polizia Giudiziaria?",
    "options": [
      "Dirigenti, commissari, ispettori della Polizia di Stato, Ufficiali dei Carabinieri e G.d.F., Marescialli, ecc.",
      "Solo i Commissari",
      "Tutti i poliziotti",
      "Solo i Carabinieri"
    ],
    "answer": "Dirigenti, commissari, ispettori della Polizia di Stato, Ufficiali dei Carabinieri e G.d.F., Marescialli, ecc."
  },
  {
    "id": 2126,
    "category": "Diritto Penale",
    "question": "Chi sono gli Agenti di Polizia Giudiziaria?",
    "options": [
      "Il personale della Polizia di Stato, Carabinieri, G.d.F. che non è ufficiale (es. agenti, assistenti, sovrintendenti, carabinieri, appuntati, brigadieri)",
      "I cittadini",
      "I magistrati",
      "I prefetti"
    ],
    "answer": "Il personale della Polizia di Stato, Carabinieri, G.d.F. che non è ufficiale (es. agenti, assistenti, sovrintendenti, carabinieri, appuntati, brigadieri)"
  },
  {
    "id": 2126,
    "category": "Diritto Penale",
    "question": "Chi sono gli Agenti di Polizia Giudiziaria?",
    "options": [
      "Il personale della Polizia di Stato, Carabinieri, G.d.F. che non è ufficiale (es. agenti, assistenti, sovrintendenti, carabinieri, appuntati, brigadieri)",
      "I cittadini",
      "I magistrati",
      "I prefetti"
    ],
    "answer": "Il personale della Polizia di Stato, Carabinieri, G.d.F. che non è ufficiale (es. agenti, assistenti, sovrintendenti, carabinieri, appuntati, brigadieri)"
  },
  {
    "id": 2126,
    "category": "Diritto Penale",
    "question": "Chi sono gli Agenti di Polizia Giudiziaria?",
    "options": [
      "Il personale della Polizia di Stato, Carabinieri, G.d.F. che non è ufficiale (es. agenti, assistenti, sovrintendenti, carabinieri, appuntati, brigadieri)",
      "I cittadini",
      "I magistrati",
      "I prefetti"
    ],
    "answer": "Il personale della Polizia di Stato, Carabinieri, G.d.F. che non è ufficiale (es. agenti, assistenti, sovrintendenti, carabinieri, appuntati, brigadieri)"
  },
  {
    "id": 2127,
    "category": "Diritto Penale",
    "question": "Qual è la funzione della Polizia Giudiziaria?",
    "options": [
      "Prendere notizia dei reati, impedire che vengano portati a conseguenze ulteriori, ricercarne gli autori, compiere atti necessari per assicurare le fonti di prova",
      "Emettere sentenze",
      "Difendere gli imputati",
      "Fare leggi"
    ],
    "answer": "Prendere notizia dei reati, impedire che vengano portati a conseguenze ulteriori, ricercarne gli autori, compiere atti necessari per assicurare le fonti di prova"
  },
  {
    "id": 2127,
    "category": "Diritto Penale",
    "question": "Qual è la funzione della Polizia Giudiziaria?",
    "options": [
      "Prendere notizia dei reati, impedire che vengano portati a conseguenze ulteriori, ricercarne gli autori, compiere atti necessari per assicurare le fonti di prova",
      "Emettere sentenze",
      "Difendere gli imputati",
      "Fare leggi"
    ],
    "answer": "Prendere notizia dei reati, impedire che vengano portati a conseguenze ulteriori, ricercarne gli autori, compiere atti necessari per assicurare le fonti di prova"
  },
  {
    "id": 2127,
    "category": "Diritto Penale",
    "question": "Qual è la funzione della Polizia Giudiziaria?",
    "options": [
      "Prendere notizia dei reati, impedire che vengano portati a conseguenze ulteriori, ricercarne gli autori, compiere atti necessari per assicurare le fonti di prova",
      "Emettere sentenze",
      "Difendere gli imputati",
      "Fare leggi"
    ],
    "answer": "Prendere notizia dei reati, impedire che vengano portati a conseguenze ulteriori, ricercarne gli autori, compiere atti necessari per assicurare le fonti di prova"
  },
  {
    "id": 2128,
    "category": "Diritto Penale",
    "question": "Cosa è l'arresto in flagranza?",
    "options": [
      "Una misura precautelare privativa della libertà personale che la P.G. adotta nei confronti di chi è colto nell'atto di commettere il reato",
      "Una condanna",
      "Un fermo per identificazione",
      "Una perquisizione"
    ],
    "answer": "Una misura precautelare privativa della libertà personale che la P.G. adotta nei confronti di chi è colto nell'atto di commettere il reato"
  },
  {
    "id": 2128,
    "category": "Diritto Penale",
    "question": "Cosa è l'arresto in flagranza?",
    "options": [
      "Una misura precautelare privativa della libertà personale che la P.G. adotta nei confronti di chi è colto nell'atto di commettere il reato",
      "Una condanna",
      "Un fermo per identificazione",
      "Una perquisizione"
    ],
    "answer": "Una misura precautelare privativa della libertà personale che la P.G. adotta nei confronti di chi è colto nell'atto di commettere il reato"
  },
  {
    "id": 2128,
    "category": "Diritto Penale",
    "question": "Cosa è l'arresto in flagranza?",
    "options": [
      "Una misura precautelare privativa della libertà personale che la P.G. adotta nei confronti di chi è colto nell'atto di commettere il reato",
      "Una condanna",
      "Un fermo per identificazione",
      "Una perquisizione"
    ],
    "answer": "Una misura precautelare privativa della libertà personale che la P.G. adotta nei confronti di chi è colto nell'atto di commettere il reato"
  },
  {
    "id": 2129,
    "category": "Diritto Penale",
    "question": "Quando l'arresto è obbligatorio?",
    "options": [
      "Per delitti non colposi gravi (es. rapina, estorsione, traffico di droga) e quando la pena edittale è ergastolo o reclusione non inferiore nel minimo a 5 anni e nel massimo a 20",
      "Sempre",
      "Mai",
      "Solo su ordine del giudice"
    ],
    "answer": "Per delitti non colposi gravi (es. rapina, estorsione, traffico di droga) e quando la pena edittale è ergastolo o reclusione non inferiore nel minimo a 5 anni e nel massimo a 20"
  },
  {
    "id": 2129,
    "category": "Diritto Penale",
    "question": "Quando l'arresto è obbligatorio?",
    "options": [
      "Per delitti non colposi gravi (es. rapina, estorsione, traffico di droga) e quando la pena edittale è ergastolo o reclusione non inferiore nel minimo a 5 anni e nel massimo a 20",
      "Sempre",
      "Mai",
      "Solo su ordine del giudice"
    ],
    "answer": "Per delitti non colposi gravi (es. rapina, estorsione, traffico di droga) e quando la pena edittale è ergastolo o reclusione non inferiore nel minimo a 5 anni e nel massimo a 20"
  },
  {
    "id": 2129,
    "category": "Diritto Penale",
    "question": "Quando l'arresto è obbligatorio?",
    "options": [
      "Per delitti non colposi gravi (es. rapina, estorsione, traffico di droga) e quando la pena edittale è ergastolo o reclusione non inferiore nel minimo a 5 anni e nel massimo a 20",
      "Sempre",
      "Mai",
      "Solo su ordine del giudice"
    ],
    "answer": "Per delitti non colposi gravi (es. rapina, estorsione, traffico di droga) e quando la pena edittale è ergastolo o reclusione non inferiore nel minimo a 5 anni e nel massimo a 20"
  },
  {
    "id": 2130,
    "category": "Diritto Penale",
    "question": "Quando l'arresto è facoltativo?",
    "options": [
      "Per delitti non colposi con pena reclusione superiore nel massimo a 3 anni, o per delitti colposi non inferiori nel massimo a 5 anni, se la misura è giustificata dalla gravità del fatto/pericolosità",
      "Per le contravvenzioni",
      "Per i reati puniti con la multa",
      "A discrezione dell'agente sempre"
    ],
    "answer": "Per delitti non colposi con pena reclusione superiore nel massimo a 3 anni, o per delitti colposi non inferiori nel massimo a 5 anni, se la misura è giustificata dalla gravità del fatto/pericolosità"
  },
  {
    "id": 2130,
    "category": "Diritto Penale",
    "question": "Quando l'arresto è facoltativo?",
    "options": [
      "Per delitti non colposi con pena reclusione superiore nel massimo a 3 anni, o per delitti colposi non inferiori nel massimo a 5 anni, se la misura è giustificata dalla gravità del fatto/pericolosità",
      "Per le contravvenzioni",
      "Per i reati puniti con la multa",
      "A discrezione dell'agente sempre"
    ],
    "answer": "Per delitti non colposi con pena reclusione superiore nel massimo a 3 anni, o per delitti colposi non inferiori nel massimo a 5 anni, se la misura è giustificata dalla gravità del fatto/pericolosità"
  },
  {
    "id": 2130,
    "category": "Diritto Penale",
    "question": "Quando l'arresto è facoltativo?",
    "options": [
      "Per delitti non colposi con pena reclusione superiore nel massimo a 3 anni, o per delitti colposi non inferiori nel massimo a 5 anni, se la misura è giustificata dalla gravità del fatto/pericolosità",
      "Per le contravvenzioni",
      "Per i reati puniti con la multa",
      "A discrezione dell'agente sempre"
    ],
    "answer": "Per delitti non colposi con pena reclusione superiore nel massimo a 3 anni, o per delitti colposi non inferiori nel massimo a 5 anni, se la misura è giustificata dalla gravità del fatto/pericolosità"
  },
  {
    "id": 2131,
    "category": "Diritto Penale",
    "question": "Cosa è il fermo di indiziato di delitto?",
    "options": [
      "Una misura precautelare disposta dal PM (o dalla PG in casi d'urgenza) quando sussistono gravi indizi di colpevolezza e pericolo di fuga per delitti gravi",
      "Un arresto in flagranza",
      "Un controllo documenti",
      "Una misura di sicurezza"
    ],
    "answer": "Una misura precautelare disposta dal PM (o dalla PG in casi d'urgenza) quando sussistono gravi indizi di colpevolezza e pericolo di fuga per delitti gravi"
  },
  {
    "id": 2131,
    "category": "Diritto Penale",
    "question": "Cosa è il fermo di indiziato di delitto?",
    "options": [
      "Una misura precautelare disposta dal PM (o dalla PG in casi d'urgenza) quando sussistono gravi indizi di colpevolezza e pericolo di fuga per delitti gravi",
      "Un arresto in flagranza",
      "Un controllo documenti",
      "Una misura di sicurezza"
    ],
    "answer": "Una misura precautelare disposta dal PM (o dalla PG in casi d'urgenza) quando sussistono gravi indizi di colpevolezza e pericolo di fuga per delitti gravi"
  },
  {
    "id": 2131,
    "category": "Diritto Penale",
    "question": "Cosa è il fermo di indiziato di delitto?",
    "options": [
      "Una misura precautelare disposta dal PM (o dalla PG in casi d'urgenza) quando sussistono gravi indizi di colpevolezza e pericolo di fuga per delitti gravi",
      "Un arresto in flagranza",
      "Un controllo documenti",
      "Una misura di sicurezza"
    ],
    "answer": "Una misura precautelare disposta dal PM (o dalla PG in casi d'urgenza) quando sussistono gravi indizi di colpevolezza e pericolo di fuga per delitti gravi"
  },
  {
    "id": 2132,
    "category": "Diritto Penale",
    "question": "Cosa è la perquisizione?",
    "options": [
      "Un mezzo di ricerca della prova volto a trovare il corpo del reato o cose pertinenti al reato sulla persona (personale) o in un luogo (locale/domiciliare)",
      "Un interrogatorio",
      "Un pedinamento",
      "Un'intercettazione"
    ],
    "answer": "Un mezzo di ricerca della prova volto a trovare il corpo del reato o cose pertinenti al reato sulla persona (personale) o in un luogo (locale/domiciliare)"
  },
  {
    "id": 2132,
    "category": "Diritto Penale",
    "question": "Cosa è la perquisizione?",
    "options": [
      "Un mezzo di ricerca della prova volto a trovare il corpo del reato o cose pertinenti al reato sulla persona (personale) o in un luogo (locale/domiciliare)",
      "Un interrogatorio",
      "Un pedinamento",
      "Un'intercettazione"
    ],
    "answer": "Un mezzo di ricerca della prova volto a trovare il corpo del reato o cose pertinenti al reato sulla persona (personale) o in un luogo (locale/domiciliare)"
  },
  {
    "id": 2132,
    "category": "Diritto Penale",
    "question": "Cosa è la perquisizione?",
    "options": [
      "Un mezzo di ricerca della prova volto a trovare il corpo del reato o cose pertinenti al reato sulla persona (personale) o in un luogo (locale/domiciliare)",
      "Un interrogatorio",
      "Un pedinamento",
      "Un'intercettazione"
    ],
    "answer": "Un mezzo di ricerca della prova volto a trovare il corpo del reato o cose pertinenti al reato sulla persona (personale) o in un luogo (locale/domiciliare)"
  },
  {
    "id": 2133,
    "category": "Diritto Penale",
    "question": "La P.G. può procedere a perquisizione d'iniziativa?",
    "options": [
      "Sì, in caso di flagranza di reato o evasione, o se si cerca droga/armi (leggi speciali), quando c'è fondato motivo di ritenere che si trovino sulla persona o nel luogo",
      "No, serve sempre il mandato",
      "Sì, sempre",
      "Solo di giorno"
    ],
    "answer": "Sì, in caso di flagranza di reato o evasione, o se si cerca droga/armi (leggi speciali), quando c'è fondato motivo di ritenere che si trovino sulla persona o nel luogo"
  },
  {
    "id": 2133,
    "category": "Diritto Penale",
    "question": "La P.G. può procedere a perquisizione d'iniziativa?",
    "options": [
      "Sì, in caso di flagranza di reato o evasione, o se si cerca droga/armi (leggi speciali), quando c'è fondato motivo di ritenere che si trovino sulla persona o nel luogo",
      "No, serve sempre il mandato",
      "Sì, sempre",
      "Solo di giorno"
    ],
    "answer": "Sì, in caso di flagranza di reato o evasione, o se si cerca droga/armi (leggi speciali), quando c'è fondato motivo di ritenere che si trovino sulla persona o nel luogo"
  },
  {
    "id": 2133,
    "category": "Diritto Penale",
    "question": "La P.G. può procedere a perquisizione d'iniziativa?",
    "options": [
      "Sì, in caso di flagranza di reato o evasione, o se si cerca droga/armi (leggi speciali), quando c'è fondato motivo di ritenere che si trovino sulla persona o nel luogo",
      "No, serve sempre il mandato",
      "Sì, sempre",
      "Solo di giorno"
    ],
    "answer": "Sì, in caso di flagranza di reato o evasione, o se si cerca droga/armi (leggi speciali), quando c'è fondato motivo di ritenere che si trovino sulla persona o nel luogo"
  },
  {
    "id": 2134,
    "category": "Diritto Penale",
    "question": "Entro quanto tempo la P.G. deve trasmettere il verbale di arresto/fermo al PM?",
    "options": [
      "Entro 24 ore",
      "Entro 48 ore",
      "Entro 12 ore",
      "Immediatamente"
    ],
    "answer": "Entro 24 ore"
  },
  {
    "id": 2134,
    "category": "Diritto Penale",
    "question": "Entro quanto tempo la P.G. deve trasmettere il verbale di arresto/fermo al PM?",
    "options": [
      "Entro 24 ore",
      "Entro 48 ore",
      "Entro 12 ore",
      "Immediatamente"
    ],
    "answer": "Entro 24 ore"
  },
  {
    "id": 2134,
    "category": "Diritto Penale",
    "question": "Entro quanto tempo la P.G. deve trasmettere il verbale di arresto/fermo al PM?",
    "options": [
      "Entro 24 ore",
      "Entro 48 ore",
      "Entro 12 ore",
      "Immediatamente"
    ],
    "answer": "Entro 24 ore"
  },
  {
    "id": 2135,
    "category": "Diritto Penale",
    "question": "Entro quanto tempo il PM deve chiedere la convalida dell'arresto al GIP?",
    "options": [
      "Entro 48 ore dall'arresto",
      "Entro 24 ore",
      "Entro 96 ore",
      "Entro 5 giorni"
    ],
    "answer": "Entro 48 ore dall'arresto"
  },
  {
    "id": 2135,
    "category": "Diritto Penale",
    "question": "Entro quanto tempo il PM deve chiedere la convalida dell'arresto al GIP?",
    "options": [
      "Entro 48 ore dall'arresto",
      "Entro 24 ore",
      "Entro 96 ore",
      "Entro 5 giorni"
    ],
    "answer": "Entro 48 ore dall'arresto"
  },
  {
    "id": 2135,
    "category": "Diritto Penale",
    "question": "Entro quanto tempo il PM deve chiedere la convalida dell'arresto al GIP?",
    "options": [
      "Entro 48 ore dall'arresto",
      "Entro 24 ore",
      "Entro 96 ore",
      "Entro 5 giorni"
    ],
    "answer": "Entro 48 ore dall'arresto"
  },
  {
    "id": 2136,
    "category": "Diritto Penale",
    "question": "Entro quanto tempo deve intervenire l'udienza di convalida davanti al GIP?",
    "options": [
      "Entro le 48 ore successive alla richiesta del PM",
      "Entro 24 ore",
      "Entro 10 giorni",
      "Entro 1 mese"
    ],
    "answer": "Entro le 48 ore successive alla richiesta del PM"
  },
  {
    "id": 2136,
    "category": "Diritto Penale",
    "question": "Entro quanto tempo deve intervenire l'udienza di convalida davanti al GIP?",
    "options": [
      "Entro le 48 ore successive alla richiesta del PM",
      "Entro 24 ore",
      "Entro 10 giorni",
      "Entro 1 mese"
    ],
    "answer": "Entro le 48 ore successive alla richiesta del PM"
  },
  {
    "id": 2136,
    "category": "Diritto Penale",
    "question": "Entro quanto tempo deve intervenire l'udienza di convalida davanti al GIP?",
    "options": [
      "Entro le 48 ore successive alla richiesta del PM",
      "Entro 24 ore",
      "Entro 10 giorni",
      "Entro 1 mese"
    ],
    "answer": "Entro le 48 ore successive alla richiesta del PM"
  },
  {
    "id": 2137,
    "category": "Diritto Penale",
    "question": "Cosa è l'identificazione (art. 349 c.p.p.)?",
    "options": [
      "L'attività diretta a individuare le generalità dell'indagato o di altre persone informate sui fatti",
      "L'arresto",
      "La perquisizione",
      "Il pedinamento"
    ],
    "answer": "L'attività diretta a individuare le generalità dell'indagato o di altre persone informate sui fatti"
  },
  {
    "id": 2137,
    "category": "Diritto Penale",
    "question": "Cosa è l'identificazione (art. 349 c.p.p.)?",
    "options": [
      "L'attività diretta a individuare le generalità dell'indagato o di altre persone informate sui fatti",
      "L'arresto",
      "La perquisizione",
      "Il pedinamento"
    ],
    "answer": "L'attività diretta a individuare le generalità dell'indagato o di altre persone informate sui fatti"
  },
  {
    "id": 2137,
    "category": "Diritto Penale",
    "question": "Cosa è l'identificazione (art. 349 c.p.p.)?",
    "options": [
      "L'attività diretta a individuare le generalità dell'indagato o di altre persone informate sui fatti",
      "L'arresto",
      "La perquisizione",
      "Il pedinamento"
    ],
    "answer": "L'attività diretta a individuare le generalità dell'indagato o di altre persone informate sui fatti"
  },
  {
    "id": 2138,
    "category": "Diritto Penale",
    "question": "Se una persona rifiuta di farsi identificare o fornisce generalità false, la P.G. può:",
    "options": [
      "Accompagnarla nei propri uffici e trattenerla per il tempo strettamente necessario (max 12 ore, o 24 in casi eccezionali)",
      "Arrestarla sempre",
      "Lasciarla andare",
      "Sparare"
    ],
    "answer": "Accompagnarla nei propri uffici e trattenerla per il tempo strettamente necessario (max 12 ore, o 24 in casi eccezionali)"
  },
  {
    "id": 2138,
    "category": "Diritto Penale",
    "question": "Se una persona rifiuta di farsi identificare o fornisce generalità false, la P.G. può:",
    "options": [
      "Accompagnarla nei propri uffici e trattenerla per il tempo strettamente necessario (max 12 ore, o 24 in casi eccezionali)",
      "Arrestarla sempre",
      "Lasciarla andare",
      "Sparare"
    ],
    "answer": "Accompagnarla nei propri uffici e trattenerla per il tempo strettamente necessario (max 12 ore, o 24 in casi eccezionali)"
  },
  {
    "id": 2138,
    "category": "Diritto Penale",
    "question": "Se una persona rifiuta di farsi identificare o fornisce generalità false, la P.G. può:",
    "options": [
      "Accompagnarla nei propri uffici e trattenerla per il tempo strettamente necessario (max 12 ore, o 24 in casi eccezionali)",
      "Arrestarla sempre",
      "Lasciarla andare",
      "Sparare"
    ],
    "answer": "Accompagnarla nei propri uffici e trattenerla per il tempo strettamente necessario (max 12 ore, o 24 in casi eccezionali)"
  },
  {
    "id": 2139,
    "category": "Diritto Penale",
    "question": "Cosa è il reato di Peculato (art. 314 c.p.)?",
    "options": [
      "Il P.U. che, avendo per ragione del suo ufficio il possesso di denaro o altra cosa mobile altrui, se ne appropria",
      "Il furto commesso dal privato",
      "La truffa ai danni dello Stato",
      "La concussione"
    ],
    "answer": "Il P.U. che, avendo per ragione del suo ufficio il possesso di denaro o altra cosa mobile altrui, se ne appropria"
  },
  {
    "id": 2139,
    "category": "Diritto Penale",
    "question": "Cosa è il reato di Peculato (art. 314 c.p.)?",
    "options": [
      "Il P.U. che, avendo per ragione del suo ufficio il possesso di denaro o altra cosa mobile altrui, se ne appropria",
      "Il furto commesso dal privato",
      "La truffa ai danni dello Stato",
      "La concussione"
    ],
    "answer": "Il P.U. che, avendo per ragione del suo ufficio il possesso di denaro o altra cosa mobile altrui, se ne appropria"
  },
  {
    "id": 2139,
    "category": "Diritto Penale",
    "question": "Cosa è il reato di Peculato (art. 314 c.p.)?",
    "options": [
      "Il P.U. che, avendo per ragione del suo ufficio il possesso di denaro o altra cosa mobile altrui, se ne appropria",
      "Il furto commesso dal privato",
      "La truffa ai danni dello Stato",
      "La concussione"
    ],
    "answer": "Il P.U. che, avendo per ragione del suo ufficio il possesso di denaro o altra cosa mobile altrui, se ne appropria"
  },
  {
    "id": 2140,
    "category": "Diritto Penale",
    "question": "Cosa è la Concussione (art. 317 c.p.)?",
    "options": [
      "Il P.U. che, abusando della sua qualità o dei suoi poteri, costringe taluno a dare o promettere indebitamente denaro o altra utilità",
      "La corruzione",
      "Il peculato",
      "L'abuso d'ufficio"
    ],
    "answer": "Il P.U. che, abusando della sua qualità o dei suoi poteri, costringe taluno a dare o promettere indebitamente denaro o altra utilità"
  },
  {
    "id": 2140,
    "category": "Diritto Penale",
    "question": "Cosa è la Concussione (art. 317 c.p.)?",
    "options": [
      "Il P.U. che, abusando della sua qualità o dei suoi poteri, costringe taluno a dare o promettere indebitamente denaro o altra utilità",
      "La corruzione",
      "Il peculato",
      "L'abuso d'ufficio"
    ],
    "answer": "Il P.U. che, abusando della sua qualità o dei suoi poteri, costringe taluno a dare o promettere indebitamente denaro o altra utilità"
  },
  {
    "id": 2140,
    "category": "Diritto Penale",
    "question": "Cosa è la Concussione (art. 317 c.p.)?",
    "options": [
      "Il P.U. che, abusando della sua qualità o dei suoi poteri, costringe taluno a dare o promettere indebitamente denaro o altra utilità",
      "La corruzione",
      "Il peculato",
      "L'abuso d'ufficio"
    ],
    "answer": "Il P.U. che, abusando della sua qualità o dei suoi poteri, costringe taluno a dare o promettere indebitamente denaro o altra utilità"
  },
  {
    "id": 2141,
    "category": "Diritto Penale",
    "question": "Cosa è la Corruzione per l'esercizio della funzione (art. 318 c.p.)?",
    "options": [
      "Il P.U. che riceve denaro o utilità per compiere un atto del suo ufficio (corruzione impropria)",
      "Il P.U. che ruba",
      "Il P.U. che picchia un arrestato",
      "Il P.U. che non lavora"
    ],
    "answer": "Il P.U. che riceve denaro o utilità per compiere un atto del suo ufficio (corruzione impropria)"
  },
  {
    "id": 2141,
    "category": "Diritto Penale",
    "question": "Cosa è la Corruzione per l'esercizio della funzione (art. 318 c.p.)?",
    "options": [
      "Il P.U. che riceve denaro o utilità per compiere un atto del suo ufficio (corruzione impropria)",
      "Il P.U. che ruba",
      "Il P.U. che picchia un arrestato",
      "Il P.U. che non lavora"
    ],
    "answer": "Il P.U. che riceve denaro o utilità per compiere un atto del suo ufficio (corruzione impropria)"
  },
  {
    "id": 2141,
    "category": "Diritto Penale",
    "question": "Cosa è la Corruzione per l'esercizio della funzione (art. 318 c.p.)?",
    "options": [
      "Il P.U. che riceve denaro o utilità per compiere un atto del suo ufficio (corruzione impropria)",
      "Il P.U. che ruba",
      "Il P.U. che picchia un arrestato",
      "Il P.U. che non lavora"
    ],
    "answer": "Il P.U. che riceve denaro o utilità per compiere un atto del suo ufficio (corruzione impropria)"
  },
  {
    "id": 2142,
    "category": "Diritto Penale",
    "question": "Cosa è la Corruzione per un atto contrario ai doveri d'ufficio (art. 319 c.p.)?",
    "options": [
      "Il P.U. che riceve denaro o utilità per omettere o ritardare un atto d'ufficio o per compiere un atto contrario ai doveri d'ufficio (corruzione propria)",
      "La concussione",
      "Il peculato",
      "L'abuso d'ufficio"
    ],
    "answer": "Il P.U. che riceve denaro o utilità per omettere o ritardare un atto d'ufficio o per compiere un atto contrario ai doveri d'ufficio (corruzione propria)"
  },
  {
    "id": 2142,
    "category": "Diritto Penale",
    "question": "Cosa è la Corruzione per un atto contrario ai doveri d'ufficio (art. 319 c.p.)?",
    "options": [
      "Il P.U. che riceve denaro o utilità per omettere o ritardare un atto d'ufficio o per compiere un atto contrario ai doveri d'ufficio (corruzione propria)",
      "La concussione",
      "Il peculato",
      "L'abuso d'ufficio"
    ],
    "answer": "Il P.U. che riceve denaro o utilità per omettere o ritardare un atto d'ufficio o per compiere un atto contrario ai doveri d'ufficio (corruzione propria)"
  },
  {
    "id": 2142,
    "category": "Diritto Penale",
    "question": "Cosa è la Corruzione per un atto contrario ai doveri d'ufficio (art. 319 c.p.)?",
    "options": [
      "Il P.U. che riceve denaro o utilità per omettere o ritardare un atto d'ufficio o per compiere un atto contrario ai doveri d'ufficio (corruzione propria)",
      "La concussione",
      "Il peculato",
      "L'abuso d'ufficio"
    ],
    "answer": "Il P.U. che riceve denaro o utilità per omettere o ritardare un atto d'ufficio o per compiere un atto contrario ai doveri d'ufficio (corruzione propria)"
  },
  {
    "id": 2143,
    "category": "Diritto Penale",
    "question": "Cosa è l'Abuso d'ufficio (art. 323 c.p.)?",
    "options": [
      "Il P.U. che, violando specifiche regole di condotta previste dalla legge, procura a sé o ad altri un ingiusto vantaggio patrimoniale o arreca ad altri un danno ingiusto",
      "Il P.U. che è maleducato",
      "Il P.U. che arriva tardi",
      "Il P.U. che sbaglia una pratica"
    ],
    "answer": "Il P.U. che, violando specifiche regole di condotta previste dalla legge, procura a sé o ad altri un ingiusto vantaggio patrimoniale o arreca ad altri un danno ingiusto"
  },
  {
    "id": 2143,
    "category": "Diritto Penale",
    "question": "Cosa è l'Abuso d'ufficio (art. 323 c.p.)?",
    "options": [
      "Il P.U. che, violando specifiche regole di condotta previste dalla legge, procura a sé o ad altri un ingiusto vantaggio patrimoniale o arreca ad altri un danno ingiusto",
      "Il P.U. che è maleducato",
      "Il P.U. che arriva tardi",
      "Il P.U. che sbaglia una pratica"
    ],
    "answer": "Il P.U. che, violando specifiche regole di condotta previste dalla legge, procura a sé o ad altri un ingiusto vantaggio patrimoniale o arreca ad altri un danno ingiusto"
  },
  {
    "id": 2143,
    "category": "Diritto Penale",
    "question": "Cosa è l'Abuso d'ufficio (art. 323 c.p.)?",
    "options": [
      "Il P.U. che, violando specifiche regole di condotta previste dalla legge, procura a sé o ad altri un ingiusto vantaggio patrimoniale o arreca ad altri un danno ingiusto",
      "Il P.U. che è maleducato",
      "Il P.U. che arriva tardi",
      "Il P.U. che sbaglia una pratica"
    ],
    "answer": "Il P.U. che, violando specifiche regole di condotta previste dalla legge, procura a sé o ad altri un ingiusto vantaggio patrimoniale o arreca ad altri un danno ingiusto"
  },
  {
    "id": 2144,
    "category": "Diritto Penale",
    "question": "Cosa è la Rissa (art. 588 c.p.)?",
    "options": [
      "La partecipazione a una rissa (violenta contesa tra più persone con intento di recare offesa)",
      "Una discussione animata",
      "Un duello",
      "Un'aggressione unilaterale"
    ],
    "answer": "La partecipazione a una rissa (violenta contesa tra più persone con intento di recare offesa)"
  },
  {
    "id": 2144,
    "category": "Diritto Penale",
    "question": "Cosa è la Rissa (art. 588 c.p.)?",
    "options": [
      "La partecipazione a una rissa (violenta contesa tra più persone con intento di recare offesa)",
      "Una discussione animata",
      "Un duello",
      "Un'aggressione unilaterale"
    ],
    "answer": "La partecipazione a una rissa (violenta contesa tra più persone con intento di recare offesa)"
  },
  {
    "id": 2144,
    "category": "Diritto Penale",
    "question": "Cosa è la Rissa (art. 588 c.p.)?",
    "options": [
      "La partecipazione a una rissa (violenta contesa tra più persone con intento di recare offesa)",
      "Una discussione animata",
      "Un duello",
      "Un'aggressione unilaterale"
    ],
    "answer": "La partecipazione a una rissa (violenta contesa tra più persone con intento di recare offesa)"
  },
  {
    "id": 2145,
    "category": "Diritto Penale",
    "question": "Cosa è la Rapina (art. 628 c.p.)?",
    "options": [
      "Impossessarsi della cosa mobile altrui sottraendola a chi la detiene, mediante violenza alla persona o minaccia, per trarne profitto",
      "Il furto con destrezza",
      "L'estorsione",
      "Il sequestro di persona"
    ],
    "answer": "Impossessarsi della cosa mobile altrui sottraendola a chi la detiene, mediante violenza alla persona o minaccia, per trarne profitto"
  },
  {
    "id": 2145,
    "category": "Diritto Penale",
    "question": "Cosa è la Rapina (art. 628 c.p.)?",
    "options": [
      "Impossessarsi della cosa mobile altrui sottraendola a chi la detiene, mediante violenza alla persona o minaccia, per trarne profitto",
      "Il furto con destrezza",
      "L'estorsione",
      "Il sequestro di persona"
    ],
    "answer": "Impossessarsi della cosa mobile altrui sottraendola a chi la detiene, mediante violenza alla persona o minaccia, per trarne profitto"
  },
  {
    "id": 2145,
    "category": "Diritto Penale",
    "question": "Cosa è la Rapina (art. 628 c.p.)?",
    "options": [
      "Impossessarsi della cosa mobile altrui sottraendola a chi la detiene, mediante violenza alla persona o minaccia, per trarne profitto",
      "Il furto con destrezza",
      "L'estorsione",
      "Il sequestro di persona"
    ],
    "answer": "Impossessarsi della cosa mobile altrui sottraendola a chi la detiene, mediante violenza alla persona o minaccia, per trarne profitto"
  },
  {
    "id": 2146,
    "category": "Diritto Penale",
    "question": "Cosa è l'Estorsione (art. 629 c.p.)?",
    "options": [
      "Costringere taluno a fare o omettere qualcosa mediante violenza o minaccia, procurando a sé o ad altri un ingiusto profitto con altrui danno",
      "La rapina",
      "Il furto",
      "La truffa"
    ],
    "answer": "Costringere taluno a fare o omettere qualcosa mediante violenza o minaccia, procurando a sé o ad altri un ingiusto profitto con altrui danno"
  },
  {
    "id": 2146,
    "category": "Diritto Penale",
    "question": "Cosa è l'Estorsione (art. 629 c.p.)?",
    "options": [
      "Costringere taluno a fare o omettere qualcosa mediante violenza o minaccia, procurando a sé o ad altri un ingiusto profitto con altrui danno",
      "La rapina",
      "Il furto",
      "La truffa"
    ],
    "answer": "Costringere taluno a fare o omettere qualcosa mediante violenza o minaccia, procurando a sé o ad altri un ingiusto profitto con altrui danno"
  },
  {
    "id": 2146,
    "category": "Diritto Penale",
    "question": "Cosa è l'Estorsione (art. 629 c.p.)?",
    "options": [
      "Costringere taluno a fare o omettere qualcosa mediante violenza o minaccia, procurando a sé o ad altri un ingiusto profitto con altrui danno",
      "La rapina",
      "Il furto",
      "La truffa"
    ],
    "answer": "Costringere taluno a fare o omettere qualcosa mediante violenza o minaccia, procurando a sé o ad altri un ingiusto profitto con altrui danno"
  },
  {
    "id": 2147,
    "category": "Diritto Penale",
    "question": "Cosa è la Truffa (art. 640 c.p.)?",
    "options": [
      "Indurre taluno in errore con artifizi o raggiri per procurare a sé o ad altri un ingiusto profitto con altrui danno",
      "Il furto",
      "La rapina",
      "L'insolvenza fraudolenta"
    ],
    "answer": "Indurre taluno in errore con artifizi o raggiri per procurare a sé o ad altri un ingiusto profitto con altrui danno"
  },
  {
    "id": 2147,
    "category": "Diritto Penale",
    "question": "Cosa è la Truffa (art. 640 c.p.)?",
    "options": [
      "Indurre taluno in errore con artifizi o raggiri per procurare a sé o ad altri un ingiusto profitto con altrui danno",
      "Il furto",
      "La rapina",
      "L'insolvenza fraudolenta"
    ],
    "answer": "Indurre taluno in errore con artifizi o raggiri per procurare a sé o ad altri un ingiusto profitto con altrui danno"
  },
  {
    "id": 2147,
    "category": "Diritto Penale",
    "question": "Cosa è la Truffa (art. 640 c.p.)?",
    "options": [
      "Indurre taluno in errore con artifizi o raggiri per procurare a sé o ad altri un ingiusto profitto con altrui danno",
      "Il furto",
      "La rapina",
      "L'insolvenza fraudolenta"
    ],
    "answer": "Indurre taluno in errore con artifizi o raggiri per procurare a sé o ad altri un ingiusto profitto con altrui danno"
  },
  {
    "id": 2148,
    "category": "Diritto Penale",
    "question": "Cosa è la Ricettazione (art. 648 c.p.)?",
    "options": [
      "Acquistare, ricevere o occultare denaro o cose provenienti da un qualsiasi delitto, al fine di procurare a sé o ad altri un profitto",
      "Il furto",
      "Il favoreggiamento",
      "L'incauto acquisto"
    ],
    "answer": "Acquistare, ricevere o occultare denaro o cose provenienti da un qualsiasi delitto, al fine di procurare a sé o ad altri un profitto"
  },
  {
    "id": 2148,
    "category": "Diritto Penale",
    "question": "Cosa è la Ricettazione (art. 648 c.p.)?",
    "options": [
      "Acquistare, ricevere o occultare denaro o cose provenienti da un qualsiasi delitto, al fine di procurare a sé o ad altri un profitto",
      "Il furto",
      "Il favoreggiamento",
      "L'incauto acquisto"
    ],
    "answer": "Acquistare, ricevere o occultare denaro o cose provenienti da un qualsiasi delitto, al fine di procurare a sé o ad altri un profitto"
  },
  {
    "id": 2148,
    "category": "Diritto Penale",
    "question": "Cosa è la Ricettazione (art. 648 c.p.)?",
    "options": [
      "Acquistare, ricevere o occultare denaro o cose provenienti da un qualsiasi delitto, al fine di procurare a sé o ad altri un profitto",
      "Il furto",
      "Il favoreggiamento",
      "L'incauto acquisto"
    ],
    "answer": "Acquistare, ricevere o occultare denaro o cose provenienti da un qualsiasi delitto, al fine di procurare a sé o ad altri un profitto"
  },
  {
    "id": 2149,
    "category": "Diritto Penale",
    "question": "Cosa distingue la Ricettazione dall'Incauto acquisto (art. 712 c.p.)?",
    "options": [
      "Nella ricettazione c'è il dolo (consapevolezza della provenienza illecita); nell'incauto acquisto c'è colpa (mancato accertamento della provenienza per negligenza)",
      "L'incauto acquisto è più grave",
      "La ricettazione riguarda solo le auto",
      "Non c'è differenza"
    ],
    "answer": "Nella ricettazione c'è il dolo (consapevolezza della provenienza illecita); nell'incauto acquisto c'è colpa (mancato accertamento della provenienza per negligenza)"
  },
  {
    "id": 2149,
    "category": "Diritto Penale",
    "question": "Cosa distingue la Ricettazione dall'Incauto acquisto (art. 712 c.p.)?",
    "options": [
      "Nella ricettazione c'è il dolo (consapevolezza della provenienza illecita); nell'incauto acquisto c'è colpa (mancato accertamento della provenienza per negligenza)",
      "L'incauto acquisto è più grave",
      "La ricettazione riguarda solo le auto",
      "Non c'è differenza"
    ],
    "answer": "Nella ricettazione c'è il dolo (consapevolezza della provenienza illecita); nell'incauto acquisto c'è colpa (mancato accertamento della provenienza per negligenza)"
  },
  {
    "id": 2149,
    "category": "Diritto Penale",
    "question": "Cosa distingue la Ricettazione dall'Incauto acquisto (art. 712 c.p.)?",
    "options": [
      "Nella ricettazione c'è il dolo (consapevolezza della provenienza illecita); nell'incauto acquisto c'è colpa (mancato accertamento della provenienza per negligenza)",
      "L'incauto acquisto è più grave",
      "La ricettazione riguarda solo le auto",
      "Non c'è differenza"
    ],
    "answer": "Nella ricettazione c'è il dolo (consapevolezza della provenienza illecita); nell'incauto acquisto c'è colpa (mancato accertamento della provenienza per negligenza)"
  },
  {
    "id": 2150,
    "category": "Diritto Penale",
    "question": "Cosa è l'Omicidio preterintenzionale (art. 584 c.p.)?",
    "options": [
      "Quando con atti diretti a commettere percosse o lesioni si cagiona la morte di un uomo (evento più grave non voluto)",
      "L'omicidio volontario",
      "L'omicidio colposo",
      "L'omicidio stradale"
    ],
    "answer": "Quando con atti diretti a commettere percosse o lesioni si cagiona la morte di un uomo (evento più grave non voluto)"
  },
  {
    "id": 2150,
    "category": "Diritto Penale",
    "question": "Cosa è l'Omicidio preterintenzionale (art. 584 c.p.)?",
    "options": [
      "Quando con atti diretti a commettere percosse o lesioni si cagiona la morte di un uomo (evento più grave non voluto)",
      "L'omicidio volontario",
      "L'omicidio colposo",
      "L'omicidio stradale"
    ],
    "answer": "Quando con atti diretti a commettere percosse o lesioni si cagiona la morte di un uomo (evento più grave non voluto)"
  },
  {
    "id": 2150,
    "category": "Diritto Penale",
    "question": "Cosa è l'Omicidio preterintenzionale (art. 584 c.p.)?",
    "options": [
      "Quando con atti diretti a commettere percosse o lesioni si cagiona la morte di un uomo (evento più grave non voluto)",
      "L'omicidio volontario",
      "L'omicidio colposo",
      "L'omicidio stradale"
    ],
    "answer": "Quando con atti diretti a commettere percosse o lesioni si cagiona la morte di un uomo (evento più grave non voluto)"
  },
  {
    "id": 3001,
    "category": "Diritto Costituzionale",
    "question": "Quando è entrata in vigore la Costituzione italiana?",
    "options": [
      "1° gennaio 1948",
      "2 giugno 1946",
      "27 dicembre 1947",
      "25 aprile 1945"
    ],
    "answer": "1° gennaio 1948"
  },
  {
    "id": 3001,
    "category": "Diritto Costituzionale",
    "question": "Quando è entrata in vigore la Costituzione italiana?",
    "options": [
      "1° gennaio 1948",
      "2 giugno 1946",
      "27 dicembre 1947",
      "25 aprile 1945"
    ],
    "answer": "1° gennaio 1948"
  },
  {
    "id": 3001,
    "category": "Diritto Costituzionale",
    "question": "Quando è entrata in vigore la Costituzione italiana?",
    "options": [
      "1° gennaio 1948",
      "2 giugno 1946",
      "27 dicembre 1947",
      "25 aprile 1945"
    ],
    "answer": "1° gennaio 1948"
  },
  {
    "id": 3002,
    "category": "Diritto Costituzionale",
    "question": "Qual è la caratteristica principale della Costituzione italiana rispetto alla modificabilità?",
    "options": [
      "È rigida (modificabile solo con procedimento aggravato)",
      "È flessibile (modificabile con legge ordinaria)",
      "È immodificabile",
      "È temporanea"
    ],
    "answer": "È rigida (modificabile solo con procedimento aggravato)"
  },
  {
    "id": 3002,
    "category": "Diritto Costituzionale",
    "question": "Qual è la caratteristica principale della Costituzione italiana rispetto alla modificabilità?",
    "options": [
      "È rigida (modificabile solo con procedimento aggravato)",
      "È flessibile (modificabile con legge ordinaria)",
      "È immodificabile",
      "È temporanea"
    ],
    "answer": "È rigida (modificabile solo con procedimento aggravato)"
  },
  {
    "id": 3002,
    "category": "Diritto Costituzionale",
    "question": "Qual è la caratteristica principale della Costituzione italiana rispetto alla modificabilità?",
    "options": [
      "È rigida (modificabile solo con procedimento aggravato)",
      "È flessibile (modificabile con legge ordinaria)",
      "È immodificabile",
      "È temporanea"
    ],
    "answer": "È rigida (modificabile solo con procedimento aggravato)"
  },
  {
    "id": 3003,
    "category": "Diritto Costituzionale",
    "question": "Chi ha il potere di revisione costituzionale?",
    "options": [
      "Il Parlamento (con procedimento aggravato)",
      "Il Governo",
      "Il Presidente della Repubblica",
      "La Corte Costituzionale"
    ],
    "answer": "Il Parlamento (con procedimento aggravato)"
  },
  {
    "id": 3003,
    "category": "Diritto Costituzionale",
    "question": "Chi ha il potere di revisione costituzionale?",
    "options": [
      "Il Parlamento (con procedimento aggravato)",
      "Il Governo",
      "Il Presidente della Repubblica",
      "La Corte Costituzionale"
    ],
    "answer": "Il Parlamento (con procedimento aggravato)"
  },
  {
    "id": 3003,
    "category": "Diritto Costituzionale",
    "question": "Chi ha il potere di revisione costituzionale?",
    "options": [
      "Il Parlamento (con procedimento aggravato)",
      "Il Governo",
      "Il Presidente della Repubblica",
      "La Corte Costituzionale"
    ],
    "answer": "Il Parlamento (con procedimento aggravato)"
  },
  {
    "id": 3004,
    "category": "Diritto Costituzionale",
    "question": "Quale articolo disciplina il procedimento di revisione costituzionale?",
    "options": [
      "Art. 138",
      "Art. 1",
      "Art. 70",
      "Art. 100"
    ],
    "answer": "Art. 138"
  },
  {
    "id": 3004,
    "category": "Diritto Costituzionale",
    "question": "Quale articolo disciplina il procedimento di revisione costituzionale?",
    "options": [
      "Art. 138",
      "Art. 1",
      "Art. 70",
      "Art. 100"
    ],
    "answer": "Art. 138"
  },
  {
    "id": 3004,
    "category": "Diritto Costituzionale",
    "question": "Quale articolo disciplina il procedimento di revisione costituzionale?",
    "options": [
      "Art. 138",
      "Art. 1",
      "Art. 70",
      "Art. 100"
    ],
    "answer": "Art. 138"
  },
  {
    "id": 3005,
    "category": "Diritto Costituzionale",
    "question": "Quante deliberazioni sono necessarie per approvare una legge costituzionale?",
    "options": [
      "Due per ciascuna Camera",
      "Una per ciascuna Camera",
      "Tre per ciascuna Camera",
      "Una sola in seduta comune"
    ],
    "answer": "Due per ciascuna Camera"
  },
  {
    "id": 3005,
    "category": "Diritto Costituzionale",
    "question": "Quante deliberazioni sono necessarie per approvare una legge costituzionale?",
    "options": [
      "Due per ciascuna Camera",
      "Una per ciascuna Camera",
      "Tre per ciascuna Camera",
      "Una sola in seduta comune"
    ],
    "answer": "Due per ciascuna Camera"
  },
  {
    "id": 3005,
    "category": "Diritto Costituzionale",
    "question": "Quante deliberazioni sono necessarie per approvare una legge costituzionale?",
    "options": [
      "Due per ciascuna Camera",
      "Una per ciascuna Camera",
      "Tre per ciascuna Camera",
      "Una sola in seduta comune"
    ],
    "answer": "Due per ciascuna Camera"
  },
  {
    "id": 3006,
    "category": "Diritto Costituzionale",
    "question": "Quale intervallo di tempo deve intercorrere tra le due deliberazioni?",
    "options": [
      "Almeno 3 mesi",
      "Almeno 1 mese",
      "Almeno 6 mesi",
      "Almeno 1 anno"
    ],
    "answer": "Almeno 3 mesi"
  },
  {
    "id": 3006,
    "category": "Diritto Costituzionale",
    "question": "Quale intervallo di tempo deve intercorrere tra le due deliberazioni?",
    "options": [
      "Almeno 3 mesi",
      "Almeno 1 mese",
      "Almeno 6 mesi",
      "Almeno 1 anno"
    ],
    "answer": "Almeno 3 mesi"
  },
  {
    "id": 3006,
    "category": "Diritto Costituzionale",
    "question": "Quale intervallo di tempo deve intercorrere tra le due deliberazioni?",
    "options": [
      "Almeno 3 mesi",
      "Almeno 1 mese",
      "Almeno 6 mesi",
      "Almeno 1 anno"
    ],
    "answer": "Almeno 3 mesi"
  },
  {
    "id": 3007,
    "category": "Diritto Costituzionale",
    "question": "Quando è possibile richiedere il referendum costituzionale (confermativo)?",
    "options": [
      "Se nella seconda votazione non si raggiunge la maggioranza dei 2/3 ma solo la maggioranza assoluta",
      "Sempre",
      "Mai",
      "Solo se lo chiede il Presidente della Repubblica"
    ],
    "answer": "Se nella seconda votazione non si raggiunge la maggioranza dei 2/3 ma solo la maggioranza assoluta"
  },
  {
    "id": 3007,
    "category": "Diritto Costituzionale",
    "question": "Quando è possibile richiedere il referendum costituzionale (confermativo)?",
    "options": [
      "Se nella seconda votazione non si raggiunge la maggioranza dei 2/3 ma solo la maggioranza assoluta",
      "Sempre",
      "Mai",
      "Solo se lo chiede il Presidente della Repubblica"
    ],
    "answer": "Se nella seconda votazione non si raggiunge la maggioranza dei 2/3 ma solo la maggioranza assoluta"
  },
  {
    "id": 3007,
    "category": "Diritto Costituzionale",
    "question": "Quando è possibile richiedere il referendum costituzionale (confermativo)?",
    "options": [
      "Se nella seconda votazione non si raggiunge la maggioranza dei 2/3 ma solo la maggioranza assoluta",
      "Sempre",
      "Mai",
      "Solo se lo chiede il Presidente della Repubblica"
    ],
    "answer": "Se nella seconda votazione non si raggiunge la maggioranza dei 2/3 ma solo la maggioranza assoluta"
  },
  {
    "id": 3008,
    "category": "Diritto Costituzionale",
    "question": "Qual è l'unico limite esplicito alla revisione costituzionale (art. 139)?",
    "options": [
      "La forma repubblicana",
      "I diritti inviolabili",
      "L'unità nazionale",
      "La bandiera"
    ],
    "answer": "La forma repubblicana"
  },
  {
    "id": 3008,
    "category": "Diritto Costituzionale",
    "question": "Qual è l'unico limite esplicito alla revisione costituzionale (art. 139)?",
    "options": [
      "La forma repubblicana",
      "I diritti inviolabili",
      "L'unità nazionale",
      "La bandiera"
    ],
    "answer": "La forma repubblicana"
  },
  {
    "id": 3008,
    "category": "Diritto Costituzionale",
    "question": "Qual è l'unico limite esplicito alla revisione costituzionale (art. 139)?",
    "options": [
      "La forma repubblicana",
      "I diritti inviolabili",
      "L'unità nazionale",
      "La bandiera"
    ],
    "answer": "La forma repubblicana"
  },
  {
    "id": 3009,
    "category": "Diritto Costituzionale",
    "question": "Cosa si intende per 'Costituzione lunga'?",
    "options": [
      "Che disciplina non solo l'organizzazione dello Stato ma anche i diritti sociali e i rapporti etico-sociali ed economici",
      "Che ha molti articoli",
      "Che è scritta in modo prolisso",
      "Che dura da tanto tempo"
    ],
    "answer": "Che disciplina non solo l'organizzazione dello Stato ma anche i diritti sociali e i rapporti etico-sociali ed economici"
  },
  {
    "id": 3009,
    "category": "Diritto Costituzionale",
    "question": "Cosa si intende per 'Costituzione lunga'?",
    "options": [
      "Che disciplina non solo l'organizzazione dello Stato ma anche i diritti sociali e i rapporti etico-sociali ed economici",
      "Che ha molti articoli",
      "Che è scritta in modo prolisso",
      "Che dura da tanto tempo"
    ],
    "answer": "Che disciplina non solo l'organizzazione dello Stato ma anche i diritti sociali e i rapporti etico-sociali ed economici"
  },
  {
    "id": 3009,
    "category": "Diritto Costituzionale",
    "question": "Cosa si intende per 'Costituzione lunga'?",
    "options": [
      "Che disciplina non solo l'organizzazione dello Stato ma anche i diritti sociali e i rapporti etico-sociali ed economici",
      "Che ha molti articoli",
      "Che è scritta in modo prolisso",
      "Che dura da tanto tempo"
    ],
    "answer": "Che disciplina non solo l'organizzazione dello Stato ma anche i diritti sociali e i rapporti etico-sociali ed economici"
  },
  {
    "id": 3010,
    "category": "Diritto Costituzionale",
    "question": "Qual è la differenza tra Statuto Albertino e Costituzione Repubblicana?",
    "options": [
      "Lo Statuto era flessibile e concesso (ottriato); la Costituzione è rigida e votata",
      "Lo Statuto era rigido",
      "La Costituzione è flessibile",
      "Non c'è differenza"
    ],
    "answer": "Lo Statuto era flessibile e concesso (ottriato); la Costituzione è rigida e votata"
  },
  {
    "id": 3010,
    "category": "Diritto Costituzionale",
    "question": "Qual è la differenza tra Statuto Albertino e Costituzione Repubblicana?",
    "options": [
      "Lo Statuto era flessibile e concesso (ottriato); la Costituzione è rigida e votata",
      "Lo Statuto era rigido",
      "La Costituzione è flessibile",
      "Non c'è differenza"
    ],
    "answer": "Lo Statuto era flessibile e concesso (ottriato); la Costituzione è rigida e votata"
  },
  {
    "id": 3010,
    "category": "Diritto Costituzionale",
    "question": "Qual è la differenza tra Statuto Albertino e Costituzione Repubblicana?",
    "options": [
      "Lo Statuto era flessibile e concesso (ottriato); la Costituzione è rigida e votata",
      "Lo Statuto era rigido",
      "La Costituzione è flessibile",
      "Non c'è differenza"
    ],
    "answer": "Lo Statuto era flessibile e concesso (ottriato); la Costituzione è rigida e votata"
  },
  {
    "id": 3011,
    "category": "Diritto Costituzionale",
    "question": "A chi appartiene la sovranità secondo l'art. 1 Cost.?",
    "options": [
      "Al popolo",
      "Allo Stato",
      "Al Parlamento",
      "Al Governo"
    ],
    "answer": "Al popolo"
  },
  {
    "id": 3011,
    "category": "Diritto Costituzionale",
    "question": "A chi appartiene la sovranità secondo l'art. 1 Cost.?",
    "options": [
      "Al popolo",
      "Allo Stato",
      "Al Parlamento",
      "Al Governo"
    ],
    "answer": "Al popolo"
  },
  {
    "id": 3011,
    "category": "Diritto Costituzionale",
    "question": "A chi appartiene la sovranità secondo l'art. 1 Cost.?",
    "options": [
      "Al popolo",
      "Allo Stato",
      "Al Parlamento",
      "Al Governo"
    ],
    "answer": "Al popolo"
  },
  {
    "id": 3012,
    "category": "Diritto Costituzionale",
    "question": "L'Italia è una Repubblica fondata:",
    "options": [
      "Sul lavoro",
      "Sulla libertà",
      "Sull'uguaglianza",
      "Sulla pace"
    ],
    "answer": "Sul lavoro"
  },
  {
    "id": 3012,
    "category": "Diritto Costituzionale",
    "question": "L'Italia è una Repubblica fondata:",
    "options": [
      "Sul lavoro",
      "Sulla libertà",
      "Sull'uguaglianza",
      "Sulla pace"
    ],
    "answer": "Sul lavoro"
  },
  {
    "id": 3012,
    "category": "Diritto Costituzionale",
    "question": "L'Italia è una Repubblica fondata:",
    "options": [
      "Sul lavoro",
      "Sulla libertà",
      "Sull'uguaglianza",
      "Sulla pace"
    ],
    "answer": "Sul lavoro"
  },
  {
    "id": 3013,
    "category": "Diritto Costituzionale",
    "question": "Quale principio sancisce l'art. 3 Cost.?",
    "options": [
      "Il principio di uguaglianza (formale e sostanziale)",
      "Il principio lavorista",
      "Il principio autonomista",
      "Il principio internazionalista"
    ],
    "answer": "Il principio di uguaglianza (formale e sostanziale)"
  },
  {
    "id": 3013,
    "category": "Diritto Costituzionale",
    "question": "Quale principio sancisce l'art. 3 Cost.?",
    "options": [
      "Il principio di uguaglianza (formale e sostanziale)",
      "Il principio lavorista",
      "Il principio autonomista",
      "Il principio internazionalista"
    ],
    "answer": "Il principio di uguaglianza (formale e sostanziale)"
  },
  {
    "id": 3013,
    "category": "Diritto Costituzionale",
    "question": "Quale principio sancisce l'art. 3 Cost.?",
    "options": [
      "Il principio di uguaglianza (formale e sostanziale)",
      "Il principio lavorista",
      "Il principio autonomista",
      "Il principio internazionalista"
    ],
    "answer": "Il principio di uguaglianza (formale e sostanziale)"
  },
  {
    "id": 3014,
    "category": "Diritto Costituzionale",
    "question": "Cosa significa uguaglianza sostanziale (art. 3 comma 2)?",
    "options": [
      "Che la Repubblica deve rimuovere gli ostacoli che impediscono il pieno sviluppo della persona umana",
      "Che tutti sono uguali davanti alla legge",
      "Che tutti devono avere lo stesso stipendio",
      "Che non ci sono differenze di sesso"
    ],
    "answer": "Che la Repubblica deve rimuovere gli ostacoli che impediscono il pieno sviluppo della persona umana"
  },
  {
    "id": 3014,
    "category": "Diritto Costituzionale",
    "question": "Cosa significa uguaglianza sostanziale (art. 3 comma 2)?",
    "options": [
      "Che la Repubblica deve rimuovere gli ostacoli che impediscono il pieno sviluppo della persona umana",
      "Che tutti sono uguali davanti alla legge",
      "Che tutti devono avere lo stesso stipendio",
      "Che non ci sono differenze di sesso"
    ],
    "answer": "Che la Repubblica deve rimuovere gli ostacoli che impediscono il pieno sviluppo della persona umana"
  },
  {
    "id": 3014,
    "category": "Diritto Costituzionale",
    "question": "Cosa significa uguaglianza sostanziale (art. 3 comma 2)?",
    "options": [
      "Che la Repubblica deve rimuovere gli ostacoli che impediscono il pieno sviluppo della persona umana",
      "Che tutti sono uguali davanti alla legge",
      "Che tutti devono avere lo stesso stipendio",
      "Che non ci sono differenze di sesso"
    ],
    "answer": "Che la Repubblica deve rimuovere gli ostacoli che impediscono il pieno sviluppo della persona umana"
  },
  {
    "id": 3015,
    "category": "Diritto Costituzionale",
    "question": "Quale articolo riconosce e garantisce i diritti inviolabili dell'uomo?",
    "options": [
      "Art. 2",
      "Art. 1",
      "Art. 13",
      "Art. 27"
    ],
    "answer": "Art. 2"
  },
  {
    "id": 3015,
    "category": "Diritto Costituzionale",
    "question": "Quale articolo riconosce e garantisce i diritti inviolabili dell'uomo?",
    "options": [
      "Art. 2",
      "Art. 1",
      "Art. 13",
      "Art. 27"
    ],
    "answer": "Art. 2"
  },
  {
    "id": 3015,
    "category": "Diritto Costituzionale",
    "question": "Quale articolo riconosce e garantisce i diritti inviolabili dell'uomo?",
    "options": [
      "Art. 2",
      "Art. 1",
      "Art. 13",
      "Art. 27"
    ],
    "answer": "Art. 2"
  },
  {
    "id": 3016,
    "category": "Diritto Costituzionale",
    "question": "I rapporti tra Stato e Chiesa Cattolica sono regolati (art. 7):",
    "options": [
      "Dai Patti Lateranensi",
      "Dalla legge ordinaria",
      "Da un concordato qualsiasi",
      "Dalla Costituzione direttamente"
    ],
    "answer": "Dai Patti Lateranensi"
  },
  {
    "id": 3016,
    "category": "Diritto Costituzionale",
    "question": "I rapporti tra Stato e Chiesa Cattolica sono regolati (art. 7):",
    "options": [
      "Dai Patti Lateranensi",
      "Dalla legge ordinaria",
      "Da un concordato qualsiasi",
      "Dalla Costituzione direttamente"
    ],
    "answer": "Dai Patti Lateranensi"
  },
  {
    "id": 3016,
    "category": "Diritto Costituzionale",
    "question": "I rapporti tra Stato e Chiesa Cattolica sono regolati (art. 7):",
    "options": [
      "Dai Patti Lateranensi",
      "Dalla legge ordinaria",
      "Da un concordato qualsiasi",
      "Dalla Costituzione direttamente"
    ],
    "answer": "Dai Patti Lateranensi"
  },
  {
    "id": 3017,
    "category": "Diritto Costituzionale",
    "question": "Le confessioni religiose diverse dalla cattolica (art. 8):",
    "options": [
      "Sono egualmente libere davanti alla legge e i loro rapporti sono regolati per legge sulla base di intese",
      "Sono vietate",
      "Devono convertirsi",
      "Sono tollerate"
    ],
    "answer": "Sono egualmente libere davanti alla legge e i loro rapporti sono regolati per legge sulla base di intese"
  },
  {
    "id": 3017,
    "category": "Diritto Costituzionale",
    "question": "Le confessioni religiose diverse dalla cattolica (art. 8):",
    "options": [
      "Sono egualmente libere davanti alla legge e i loro rapporti sono regolati per legge sulla base di intese",
      "Sono vietate",
      "Devono convertirsi",
      "Sono tollerate"
    ],
    "answer": "Sono egualmente libere davanti alla legge e i loro rapporti sono regolati per legge sulla base di intese"
  },
  {
    "id": 3017,
    "category": "Diritto Costituzionale",
    "question": "Le confessioni religiose diverse dalla cattolica (art. 8):",
    "options": [
      "Sono egualmente libere davanti alla legge e i loro rapporti sono regolati per legge sulla base di intese",
      "Sono vietate",
      "Devono convertirsi",
      "Sono tollerate"
    ],
    "answer": "Sono egualmente libere davanti alla legge e i loro rapporti sono regolati per legge sulla base di intese"
  },
  {
    "id": 3018,
    "category": "Diritto Costituzionale",
    "question": "L'ordinamento giuridico italiano si conforma (art. 10):",
    "options": [
      "Alle norme del diritto internazionale generalmente riconosciute",
      "Alle leggi degli USA",
      "Alle leggi della Francia",
      "Solo alle proprie leggi"
    ],
    "answer": "Alle norme del diritto internazionale generalmente riconosciute"
  },
  {
    "id": 3018,
    "category": "Diritto Costituzionale",
    "question": "L'ordinamento giuridico italiano si conforma (art. 10):",
    "options": [
      "Alle norme del diritto internazionale generalmente riconosciute",
      "Alle leggi degli USA",
      "Alle leggi della Francia",
      "Solo alle proprie leggi"
    ],
    "answer": "Alle norme del diritto internazionale generalmente riconosciute"
  },
  {
    "id": 3018,
    "category": "Diritto Costituzionale",
    "question": "L'ordinamento giuridico italiano si conforma (art. 10):",
    "options": [
      "Alle norme del diritto internazionale generalmente riconosciute",
      "Alle leggi degli USA",
      "Alle leggi della Francia",
      "Solo alle proprie leggi"
    ],
    "answer": "Alle norme del diritto internazionale generalmente riconosciute"
  },
  {
    "id": 3019,
    "category": "Diritto Costituzionale",
    "question": "L'Italia ripudia la guerra (art. 11):",
    "options": [
      "Come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali",
      "Sempre e comunque",
      "Mai",
      "Solo contro i paesi europei"
    ],
    "answer": "Come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali"
  },
  {
    "id": 3019,
    "category": "Diritto Costituzionale",
    "question": "L'Italia ripudia la guerra (art. 11):",
    "options": [
      "Come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali",
      "Sempre e comunque",
      "Mai",
      "Solo contro i paesi europei"
    ],
    "answer": "Come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali"
  },
  {
    "id": 3019,
    "category": "Diritto Costituzionale",
    "question": "L'Italia ripudia la guerra (art. 11):",
    "options": [
      "Come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali",
      "Sempre e comunque",
      "Mai",
      "Solo contro i paesi europei"
    ],
    "answer": "Come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali"
  },
  {
    "id": 3020,
    "category": "Diritto Costituzionale",
    "question": "Qual è la fonte primaria del diritto nell'ordinamento italiano (sotto la Costituzione)?",
    "options": [
      "La legge ordinaria (e atti aventi forza di legge)",
      "Il regolamento",
      "La consuetudine",
      "La circolare"
    ],
    "answer": "La legge ordinaria (e atti aventi forza di legge)"
  },
  {
    "id": 3020,
    "category": "Diritto Costituzionale",
    "question": "Qual è la fonte primaria del diritto nell'ordinamento italiano (sotto la Costituzione)?",
    "options": [
      "La legge ordinaria (e atti aventi forza di legge)",
      "Il regolamento",
      "La consuetudine",
      "La circolare"
    ],
    "answer": "La legge ordinaria (e atti aventi forza di legge)"
  },
  {
    "id": 3020,
    "category": "Diritto Costituzionale",
    "question": "Qual è la fonte primaria del diritto nell'ordinamento italiano (sotto la Costituzione)?",
    "options": [
      "La legge ordinaria (e atti aventi forza di legge)",
      "Il regolamento",
      "La consuetudine",
      "La circolare"
    ],
    "answer": "La legge ordinaria (e atti aventi forza di legge)"
  },
  {
    "id": 3021,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il criterio gerarchico?",
    "options": [
      "La fonte di grado superiore prevale su quella di grado inferiore",
      "La legge più recente prevale su quella più antica",
      "La legge speciale prevale sulla generale",
      "La legge competente prevale"
    ],
    "answer": "La fonte di grado superiore prevale su quella di grado inferiore"
  },
  {
    "id": 3021,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il criterio gerarchico?",
    "options": [
      "La fonte di grado superiore prevale su quella di grado inferiore",
      "La legge più recente prevale su quella più antica",
      "La legge speciale prevale sulla generale",
      "La legge competente prevale"
    ],
    "answer": "La fonte di grado superiore prevale su quella di grado inferiore"
  },
  {
    "id": 3021,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il criterio gerarchico?",
    "options": [
      "La fonte di grado superiore prevale su quella di grado inferiore",
      "La legge più recente prevale su quella più antica",
      "La legge speciale prevale sulla generale",
      "La legge competente prevale"
    ],
    "answer": "La fonte di grado superiore prevale su quella di grado inferiore"
  },
  {
    "id": 3022,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il criterio cronologico?",
    "options": [
      "Tra fonti dello stesso grado, la legge successiva abroga la precedente",
      "La legge superiore prevale",
      "La legge speciale prevale",
      "La Costituzione prevale"
    ],
    "answer": "Tra fonti dello stesso grado, la legge successiva abroga la precedente"
  },
  {
    "id": 3022,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il criterio cronologico?",
    "options": [
      "Tra fonti dello stesso grado, la legge successiva abroga la precedente",
      "La legge superiore prevale",
      "La legge speciale prevale",
      "La Costituzione prevale"
    ],
    "answer": "Tra fonti dello stesso grado, la legge successiva abroga la precedente"
  },
  {
    "id": 3022,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il criterio cronologico?",
    "options": [
      "Tra fonti dello stesso grado, la legge successiva abroga la precedente",
      "La legge superiore prevale",
      "La legge speciale prevale",
      "La Costituzione prevale"
    ],
    "answer": "Tra fonti dello stesso grado, la legge successiva abroga la precedente"
  },
  {
    "id": 3023,
    "category": "Diritto Costituzionale",
    "question": "A chi spetta la funzione legislativa?",
    "options": [
      "Collettivamente alle due Camere",
      "Al Governo",
      "Al Presidente della Repubblica",
      "Alla Corte Costituzionale"
    ],
    "answer": "Collettivamente alle due Camere"
  },
  {
    "id": 3023,
    "category": "Diritto Costituzionale",
    "question": "A chi spetta la funzione legislativa?",
    "options": [
      "Collettivamente alle due Camere",
      "Al Governo",
      "Al Presidente della Repubblica",
      "Alla Corte Costituzionale"
    ],
    "answer": "Collettivamente alle due Camere"
  },
  {
    "id": 3023,
    "category": "Diritto Costituzionale",
    "question": "A chi spetta la funzione legislativa?",
    "options": [
      "Collettivamente alle due Camere",
      "Al Governo",
      "Al Presidente della Repubblica",
      "Alla Corte Costituzionale"
    ],
    "answer": "Collettivamente alle due Camere"
  },
  {
    "id": 3024,
    "category": "Diritto Costituzionale",
    "question": "Chi ha l'iniziativa legislativa?",
    "options": [
      "Il Governo, ciascun membro delle Camere, il CNEL, 50.000 elettori, i Consigli Regionali",
      "Solo il Governo",
      "Solo i deputati",
      "Solo il Presidente della Repubblica"
    ],
    "answer": "Il Governo, ciascun membro delle Camere, il CNEL, 50.000 elettori, i Consigli Regionali"
  },
  {
    "id": 3024,
    "category": "Diritto Costituzionale",
    "question": "Chi ha l'iniziativa legislativa?",
    "options": [
      "Il Governo, ciascun membro delle Camere, il CNEL, 50.000 elettori, i Consigli Regionali",
      "Solo il Governo",
      "Solo i deputati",
      "Solo il Presidente della Repubblica"
    ],
    "answer": "Il Governo, ciascun membro delle Camere, il CNEL, 50.000 elettori, i Consigli Regionali"
  },
  {
    "id": 3024,
    "category": "Diritto Costituzionale",
    "question": "Chi ha l'iniziativa legislativa?",
    "options": [
      "Il Governo, ciascun membro delle Camere, il CNEL, 50.000 elettori, i Consigli Regionali",
      "Solo il Governo",
      "Solo i deputati",
      "Solo il Presidente della Repubblica"
    ],
    "answer": "Il Governo, ciascun membro delle Camere, il CNEL, 50.000 elettori, i Consigli Regionali"
  },
  {
    "id": 3025,
    "category": "Diritto Costituzionale",
    "question": "Cosa è la promulgazione?",
    "options": [
      "L'atto con cui il Presidente della Repubblica attesta l'approvazione della legge e ne ordina la pubblicazione",
      "L'approvazione del Parlamento",
      "La pubblicazione in Gazzetta Ufficiale",
      "L'entrata in vigore"
    ],
    "answer": "L'atto con cui il Presidente della Repubblica attesta l'approvazione della legge e ne ordina la pubblicazione"
  },
  {
    "id": 3025,
    "category": "Diritto Costituzionale",
    "question": "Cosa è la promulgazione?",
    "options": [
      "L'atto con cui il Presidente della Repubblica attesta l'approvazione della legge e ne ordina la pubblicazione",
      "L'approvazione del Parlamento",
      "La pubblicazione in Gazzetta Ufficiale",
      "L'entrata in vigore"
    ],
    "answer": "L'atto con cui il Presidente della Repubblica attesta l'approvazione della legge e ne ordina la pubblicazione"
  },
  {
    "id": 3025,
    "category": "Diritto Costituzionale",
    "question": "Cosa è la promulgazione?",
    "options": [
      "L'atto con cui il Presidente della Repubblica attesta l'approvazione della legge e ne ordina la pubblicazione",
      "L'approvazione del Parlamento",
      "La pubblicazione in Gazzetta Ufficiale",
      "L'entrata in vigore"
    ],
    "answer": "L'atto con cui il Presidente della Repubblica attesta l'approvazione della legge e ne ordina la pubblicazione"
  },
  {
    "id": 3026,
    "category": "Diritto Costituzionale",
    "question": "Il Presidente della Repubblica può rinviare una legge alle Camere?",
    "options": [
      "Sì, con messaggio motivato (una sola volta)",
      "No, deve sempre promulgare",
      "Sì, quante volte vuole",
      "Solo se la legge è incostituzionale"
    ],
    "answer": "Sì, con messaggio motivato (una sola volta)"
  },
  {
    "id": 3026,
    "category": "Diritto Costituzionale",
    "question": "Il Presidente della Repubblica può rinviare una legge alle Camere?",
    "options": [
      "Sì, con messaggio motivato (una sola volta)",
      "No, deve sempre promulgare",
      "Sì, quante volte vuole",
      "Solo se la legge è incostituzionale"
    ],
    "answer": "Sì, con messaggio motivato (una sola volta)"
  },
  {
    "id": 3026,
    "category": "Diritto Costituzionale",
    "question": "Il Presidente della Repubblica può rinviare una legge alle Camere?",
    "options": [
      "Sì, con messaggio motivato (una sola volta)",
      "No, deve sempre promulgare",
      "Sì, quante volte vuole",
      "Solo se la legge è incostituzionale"
    ],
    "answer": "Sì, con messaggio motivato (una sola volta)"
  },
  {
    "id": 3027,
    "category": "Diritto Costituzionale",
    "question": "Quando entra in vigore una legge?",
    "options": [
      "Di regola il 15° giorno successivo alla pubblicazione (vacatio legis), salvo che sia stabilito diversamente",
      "Il giorno stesso della pubblicazione",
      "Dopo un mese",
      "Dopo 6 mesi"
    ],
    "answer": "Di regola il 15° giorno successivo alla pubblicazione (vacatio legis), salvo che sia stabilito diversamente"
  },
  {
    "id": 3027,
    "category": "Diritto Costituzionale",
    "question": "Quando entra in vigore una legge?",
    "options": [
      "Di regola il 15° giorno successivo alla pubblicazione (vacatio legis), salvo che sia stabilito diversamente",
      "Il giorno stesso della pubblicazione",
      "Dopo un mese",
      "Dopo 6 mesi"
    ],
    "answer": "Di regola il 15° giorno successivo alla pubblicazione (vacatio legis), salvo che sia stabilito diversamente"
  },
  {
    "id": 3027,
    "category": "Diritto Costituzionale",
    "question": "Quando entra in vigore una legge?",
    "options": [
      "Di regola il 15° giorno successivo alla pubblicazione (vacatio legis), salvo che sia stabilito diversamente",
      "Il giorno stesso della pubblicazione",
      "Dopo un mese",
      "Dopo 6 mesi"
    ],
    "answer": "Di regola il 15° giorno successivo alla pubblicazione (vacatio legis), salvo che sia stabilito diversamente"
  },
  {
    "id": 3028,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il Decreto Legge (art. 77)?",
    "options": [
      "Un atto con forza di legge adottato dal Governo in casi straordinari di necessità e urgenza",
      "Una legge del Parlamento",
      "Un regolamento",
      "Una sentenza"
    ],
    "answer": "Un atto con forza di legge adottato dal Governo in casi straordinari di necessità e urgenza"
  },
  {
    "id": 3028,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il Decreto Legge (art. 77)?",
    "options": [
      "Un atto con forza di legge adottato dal Governo in casi straordinari di necessità e urgenza",
      "Una legge del Parlamento",
      "Un regolamento",
      "Una sentenza"
    ],
    "answer": "Un atto con forza di legge adottato dal Governo in casi straordinari di necessità e urgenza"
  },
  {
    "id": 3028,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il Decreto Legge (art. 77)?",
    "options": [
      "Un atto con forza di legge adottato dal Governo in casi straordinari di necessità e urgenza",
      "Una legge del Parlamento",
      "Un regolamento",
      "Una sentenza"
    ],
    "answer": "Un atto con forza di legge adottato dal Governo in casi straordinari di necessità e urgenza"
  },
  {
    "id": 3029,
    "category": "Diritto Costituzionale",
    "question": "Entro quanto tempo deve essere convertito in legge un Decreto Legge?",
    "options": [
      "60 giorni dalla pubblicazione",
      "30 giorni",
      "90 giorni",
      "1 anno"
    ],
    "answer": "60 giorni dalla pubblicazione"
  },
  {
    "id": 3029,
    "category": "Diritto Costituzionale",
    "question": "Entro quanto tempo deve essere convertito in legge un Decreto Legge?",
    "options": [
      "60 giorni dalla pubblicazione",
      "30 giorni",
      "90 giorni",
      "1 anno"
    ],
    "answer": "60 giorni dalla pubblicazione"
  },
  {
    "id": 3029,
    "category": "Diritto Costituzionale",
    "question": "Entro quanto tempo deve essere convertito in legge un Decreto Legge?",
    "options": [
      "60 giorni dalla pubblicazione",
      "30 giorni",
      "90 giorni",
      "1 anno"
    ],
    "answer": "60 giorni dalla pubblicazione"
  },
  {
    "id": 3030,
    "category": "Diritto Costituzionale",
    "question": "Cosa succede se il Decreto Legge non viene convertito?",
    "options": [
      "Perde efficacia sin dall'inizio (ex tunc)",
      "Perde efficacia solo per il futuro",
      "Rimane valido",
      "Diventa un regolamento"
    ],
    "answer": "Perde efficacia sin dall'inizio (ex tunc)"
  },
  {
    "id": 3030,
    "category": "Diritto Costituzionale",
    "question": "Cosa succede se il Decreto Legge non viene convertito?",
    "options": [
      "Perde efficacia sin dall'inizio (ex tunc)",
      "Perde efficacia solo per il futuro",
      "Rimane valido",
      "Diventa un regolamento"
    ],
    "answer": "Perde efficacia sin dall'inizio (ex tunc)"
  },
  {
    "id": 3030,
    "category": "Diritto Costituzionale",
    "question": "Cosa succede se il Decreto Legge non viene convertito?",
    "options": [
      "Perde efficacia sin dall'inizio (ex tunc)",
      "Perde efficacia solo per il futuro",
      "Rimane valido",
      "Diventa un regolamento"
    ],
    "answer": "Perde efficacia sin dall'inizio (ex tunc)"
  },
  {
    "id": 3031,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il Decreto Legislativo (art. 76)?",
    "options": [
      "Un atto con forza di legge adottato dal Governo su delega del Parlamento",
      "Un decreto legge",
      "Un atto amministrativo",
      "Una legge regionale"
    ],
    "answer": "Un atto con forza di legge adottato dal Governo su delega del Parlamento"
  },
  {
    "id": 3031,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il Decreto Legislativo (art. 76)?",
    "options": [
      "Un atto con forza di legge adottato dal Governo su delega del Parlamento",
      "Un decreto legge",
      "Un atto amministrativo",
      "Una legge regionale"
    ],
    "answer": "Un atto con forza di legge adottato dal Governo su delega del Parlamento"
  },
  {
    "id": 3031,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il Decreto Legislativo (art. 76)?",
    "options": [
      "Un atto con forza di legge adottato dal Governo su delega del Parlamento",
      "Un decreto legge",
      "Un atto amministrativo",
      "Una legge regionale"
    ],
    "answer": "Un atto con forza di legge adottato dal Governo su delega del Parlamento"
  },
  {
    "id": 3032,
    "category": "Diritto Costituzionale",
    "question": "Cosa deve contenere la legge di delega?",
    "options": [
      "Principi e criteri direttivi, tempo limitato, oggetti definiti",
      "Solo l'oggetto",
      "Solo il tempo",
      "Nulla di specifico"
    ],
    "answer": "Principi e criteri direttivi, tempo limitato, oggetti definiti"
  },
  {
    "id": 3032,
    "category": "Diritto Costituzionale",
    "question": "Cosa deve contenere la legge di delega?",
    "options": [
      "Principi e criteri direttivi, tempo limitato, oggetti definiti",
      "Solo l'oggetto",
      "Solo il tempo",
      "Nulla di specifico"
    ],
    "answer": "Principi e criteri direttivi, tempo limitato, oggetti definiti"
  },
  {
    "id": 3032,
    "category": "Diritto Costituzionale",
    "question": "Cosa deve contenere la legge di delega?",
    "options": [
      "Principi e criteri direttivi, tempo limitato, oggetti definiti",
      "Solo l'oggetto",
      "Solo il tempo",
      "Nulla di specifico"
    ],
    "answer": "Principi e criteri direttivi, tempo limitato, oggetti definiti"
  },
  {
    "id": 3033,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il Referendum abrogativo (art. 75)?",
    "options": [
      "Uno strumento di democrazia diretta per abrogare, totalmente o parzialmente, una legge o un atto avente forza di legge",
      "Un modo per approvare le leggi",
      "Un sondaggio",
      "Un'elezione"
    ],
    "answer": "Uno strumento di democrazia diretta per abrogare, totalmente o parzialmente, una legge o un atto avente forza di legge"
  },
  {
    "id": 3033,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il Referendum abrogativo (art. 75)?",
    "options": [
      "Uno strumento di democrazia diretta per abrogare, totalmente o parzialmente, una legge o un atto avente forza di legge",
      "Un modo per approvare le leggi",
      "Un sondaggio",
      "Un'elezione"
    ],
    "answer": "Uno strumento di democrazia diretta per abrogare, totalmente o parzialmente, una legge o un atto avente forza di legge"
  },
  {
    "id": 3033,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il Referendum abrogativo (art. 75)?",
    "options": [
      "Uno strumento di democrazia diretta per abrogare, totalmente o parzialmente, una legge o un atto avente forza di legge",
      "Un modo per approvare le leggi",
      "Un sondaggio",
      "Un'elezione"
    ],
    "answer": "Uno strumento di democrazia diretta per abrogare, totalmente o parzialmente, una legge o un atto avente forza di legge"
  },
  {
    "id": 3034,
    "category": "Diritto Costituzionale",
    "question": "Chi può richiedere il referendum abrogativo?",
    "options": [
      "500.000 elettori o 5 Consigli Regionali",
      "Il Governo",
      "Il Presidente della Repubblica",
      "I sindacati"
    ],
    "answer": "500.000 elettori o 5 Consigli Regionali"
  },
  {
    "id": 3034,
    "category": "Diritto Costituzionale",
    "question": "Chi può richiedere il referendum abrogativo?",
    "options": [
      "500.000 elettori o 5 Consigli Regionali",
      "Il Governo",
      "Il Presidente della Repubblica",
      "I sindacati"
    ],
    "answer": "500.000 elettori o 5 Consigli Regionali"
  },
  {
    "id": 3034,
    "category": "Diritto Costituzionale",
    "question": "Chi può richiedere il referendum abrogativo?",
    "options": [
      "500.000 elettori o 5 Consigli Regionali",
      "Il Governo",
      "Il Presidente della Repubblica",
      "I sindacati"
    ],
    "answer": "500.000 elettori o 5 Consigli Regionali"
  },
  {
    "id": 3035,
    "category": "Diritto Costituzionale",
    "question": "Per quali leggi NON è ammesso il referendum abrogativo?",
    "options": [
      "Leggi tributarie e di bilancio, di amnistia e indulto, di autorizzazione a ratificare trattati internazionali",
      "Leggi penali",
      "Leggi civili",
      "Leggi elettorali (totalmente)"
    ],
    "answer": "Leggi tributarie e di bilancio, di amnistia e indulto, di autorizzazione a ratificare trattati internazionali"
  },
  {
    "id": 3035,
    "category": "Diritto Costituzionale",
    "question": "Per quali leggi NON è ammesso il referendum abrogativo?",
    "options": [
      "Leggi tributarie e di bilancio, di amnistia e indulto, di autorizzazione a ratificare trattati internazionali",
      "Leggi penali",
      "Leggi civili",
      "Leggi elettorali (totalmente)"
    ],
    "answer": "Leggi tributarie e di bilancio, di amnistia e indulto, di autorizzazione a ratificare trattati internazionali"
  },
  {
    "id": 3035,
    "category": "Diritto Costituzionale",
    "question": "Per quali leggi NON è ammesso il referendum abrogativo?",
    "options": [
      "Leggi tributarie e di bilancio, di amnistia e indulto, di autorizzazione a ratificare trattati internazionali",
      "Leggi penali",
      "Leggi civili",
      "Leggi elettorali (totalmente)"
    ],
    "answer": "Leggi tributarie e di bilancio, di amnistia e indulto, di autorizzazione a ratificare trattati internazionali"
  },
  {
    "id": 3036,
    "category": "Diritto Costituzionale",
    "question": "Qual è il quorum per la validità del referendum abrogativo?",
    "options": [
      "La maggioranza degli aventi diritto al voto (50% + 1)",
      "La maggioranza dei votanti",
      "Nessun quorum",
      "Il 30%"
    ],
    "answer": "La maggioranza degli aventi diritto al voto (50% + 1)"
  },
  {
    "id": 3036,
    "category": "Diritto Costituzionale",
    "question": "Qual è il quorum per la validità del referendum abrogativo?",
    "options": [
      "La maggioranza degli aventi diritto al voto (50% + 1)",
      "La maggioranza dei votanti",
      "Nessun quorum",
      "Il 30%"
    ],
    "answer": "La maggioranza degli aventi diritto al voto (50% + 1)"
  },
  {
    "id": 3036,
    "category": "Diritto Costituzionale",
    "question": "Qual è il quorum per la validità del referendum abrogativo?",
    "options": [
      "La maggioranza degli aventi diritto al voto (50% + 1)",
      "La maggioranza dei votanti",
      "Nessun quorum",
      "Il 30%"
    ],
    "answer": "La maggioranza degli aventi diritto al voto (50% + 1)"
  },
  {
    "id": 3037,
    "category": "Diritto Costituzionale",
    "question": "Da quali Camere è composto il Parlamento?",
    "options": [
      "Camera dei Deputati e Senato della Repubblica",
      "Camera dei Lord e Camera dei Comuni",
      "Camera Alta e Camera Bassa",
      "Solo dalla Camera dei Deputati"
    ],
    "answer": "Camera dei Deputati e Senato della Repubblica"
  },
  {
    "id": 3037,
    "category": "Diritto Costituzionale",
    "question": "Da quali Camere è composto il Parlamento?",
    "options": [
      "Camera dei Deputati e Senato della Repubblica",
      "Camera dei Lord e Camera dei Comuni",
      "Camera Alta e Camera Bassa",
      "Solo dalla Camera dei Deputati"
    ],
    "answer": "Camera dei Deputati e Senato della Repubblica"
  },
  {
    "id": 3037,
    "category": "Diritto Costituzionale",
    "question": "Da quali Camere è composto il Parlamento?",
    "options": [
      "Camera dei Deputati e Senato della Repubblica",
      "Camera dei Lord e Camera dei Comuni",
      "Camera Alta e Camera Bassa",
      "Solo dalla Camera dei Deputati"
    ],
    "answer": "Camera dei Deputati e Senato della Repubblica"
  },
  {
    "id": 3038,
    "category": "Diritto Costituzionale",
    "question": "Cosa si intende per bicameralismo perfetto?",
    "options": [
      "Le due Camere hanno identici poteri e funzioni",
      "Una Camera è più importante dell'altra",
      "Le Camere si riuniscono sempre insieme",
      "Le Camere sono elette nello stesso modo"
    ],
    "answer": "Le due Camere hanno identici poteri e funzioni"
  },
  {
    "id": 3038,
    "category": "Diritto Costituzionale",
    "question": "Cosa si intende per bicameralismo perfetto?",
    "options": [
      "Le due Camere hanno identici poteri e funzioni",
      "Una Camera è più importante dell'altra",
      "Le Camere si riuniscono sempre insieme",
      "Le Camere sono elette nello stesso modo"
    ],
    "answer": "Le due Camere hanno identici poteri e funzioni"
  },
  {
    "id": 3038,
    "category": "Diritto Costituzionale",
    "question": "Cosa si intende per bicameralismo perfetto?",
    "options": [
      "Le due Camere hanno identici poteri e funzioni",
      "Una Camera è più importante dell'altra",
      "Le Camere si riuniscono sempre insieme",
      "Le Camere sono elette nello stesso modo"
    ],
    "answer": "Le due Camere hanno identici poteri e funzioni"
  },
  {
    "id": 3039,
    "category": "Diritto Costituzionale",
    "question": "Quanto dura la legislatura?",
    "options": [
      "5 anni",
      "4 anni",
      "7 anni",
      "6 anni"
    ],
    "answer": "5 anni"
  },
  {
    "id": 3039,
    "category": "Diritto Costituzionale",
    "question": "Quanto dura la legislatura?",
    "options": [
      "5 anni",
      "4 anni",
      "7 anni",
      "6 anni"
    ],
    "answer": "5 anni"
  },
  {
    "id": 3039,
    "category": "Diritto Costituzionale",
    "question": "Quanto dura la legislatura?",
    "options": [
      "5 anni",
      "4 anni",
      "7 anni",
      "6 anni"
    ],
    "answer": "5 anni"
  },
  {
    "id": 3040,
    "category": "Diritto Costituzionale",
    "question": "Chi sono i senatori a vita?",
    "options": [
      "Gli ex Presidenti della Repubblica e cittadini nominati dal Presidente della Repubblica per altissimi meriti (max 5)",
      "Tutti i senatori",
      "I giudici della Corte Costituzionale",
      "I generali"
    ],
    "answer": "Gli ex Presidenti della Repubblica e cittadini nominati dal Presidente della Repubblica per altissimi meriti (max 5)"
  },
  {
    "id": 3040,
    "category": "Diritto Costituzionale",
    "question": "Chi sono i senatori a vita?",
    "options": [
      "Gli ex Presidenti della Repubblica e cittadini nominati dal Presidente della Repubblica per altissimi meriti (max 5)",
      "Tutti i senatori",
      "I giudici della Corte Costituzionale",
      "I generali"
    ],
    "answer": "Gli ex Presidenti della Repubblica e cittadini nominati dal Presidente della Repubblica per altissimi meriti (max 5)"
  },
  {
    "id": 3040,
    "category": "Diritto Costituzionale",
    "question": "Chi sono i senatori a vita?",
    "options": [
      "Gli ex Presidenti della Repubblica e cittadini nominati dal Presidente della Repubblica per altissimi meriti (max 5)",
      "Tutti i senatori",
      "I giudici della Corte Costituzionale",
      "I generali"
    ],
    "answer": "Gli ex Presidenti della Repubblica e cittadini nominati dal Presidente della Repubblica per altissimi meriti (max 5)"
  },
  {
    "id": 3041,
    "category": "Diritto Costituzionale",
    "question": "Cosa è l'insindacabilità dei parlamentari (art. 68)?",
    "options": [
      "Non possono essere chiamati a rispondere delle opinioni espresse e dei voti dati nell'esercizio delle loro funzioni",
      "Non possono essere arrestati",
      "Non pagano le tasse",
      "Non possono essere multati"
    ],
    "answer": "Non possono essere chiamati a rispondere delle opinioni espresse e dei voti dati nell'esercizio delle loro funzioni"
  },
  {
    "id": 3041,
    "category": "Diritto Costituzionale",
    "question": "Cosa è l'insindacabilità dei parlamentari (art. 68)?",
    "options": [
      "Non possono essere chiamati a rispondere delle opinioni espresse e dei voti dati nell'esercizio delle loro funzioni",
      "Non possono essere arrestati",
      "Non pagano le tasse",
      "Non possono essere multati"
    ],
    "answer": "Non possono essere chiamati a rispondere delle opinioni espresse e dei voti dati nell'esercizio delle loro funzioni"
  },
  {
    "id": 3041,
    "category": "Diritto Costituzionale",
    "question": "Cosa è l'insindacabilità dei parlamentari (art. 68)?",
    "options": [
      "Non possono essere chiamati a rispondere delle opinioni espresse e dei voti dati nell'esercizio delle loro funzioni",
      "Non possono essere arrestati",
      "Non pagano le tasse",
      "Non possono essere multati"
    ],
    "answer": "Non possono essere chiamati a rispondere delle opinioni espresse e dei voti dati nell'esercizio delle loro funzioni"
  },
  {
    "id": 3042,
    "category": "Diritto Costituzionale",
    "question": "Cosa serve per sottoporre a perquisizione o arresto un parlamentare (salvo flagranza)?",
    "options": [
      "L'autorizzazione della Camera di appartenenza",
      "L'autorizzazione del Governo",
      "L'autorizzazione del Presidente della Repubblica",
      "Nulla"
    ],
    "answer": "L'autorizzazione della Camera di appartenenza"
  },
  {
    "id": 3042,
    "category": "Diritto Costituzionale",
    "question": "Cosa serve per sottoporre a perquisizione o arresto un parlamentare (salvo flagranza)?",
    "options": [
      "L'autorizzazione della Camera di appartenenza",
      "L'autorizzazione del Governo",
      "L'autorizzazione del Presidente della Repubblica",
      "Nulla"
    ],
    "answer": "L'autorizzazione della Camera di appartenenza"
  },
  {
    "id": 3042,
    "category": "Diritto Costituzionale",
    "question": "Cosa serve per sottoporre a perquisizione o arresto un parlamentare (salvo flagranza)?",
    "options": [
      "L'autorizzazione della Camera di appartenenza",
      "L'autorizzazione del Governo",
      "L'autorizzazione del Presidente della Repubblica",
      "Nulla"
    ],
    "answer": "L'autorizzazione della Camera di appartenenza"
  },
  {
    "id": 3043,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il divieto di mandato imperativo (art. 67)?",
    "options": [
      "Ogni membro del Parlamento rappresenta la Nazione ed esercita le sue funzioni senza vincolo di mandato (non è vincolato alle istruzioni degli elettori o del partito)",
      "Il parlamentare deve obbedire al partito",
      "Il parlamentare deve obbedire agli elettori",
      "Il parlamentare non può cambiare partito"
    ],
    "answer": "Ogni membro del Parlamento rappresenta la Nazione ed esercita le sue funzioni senza vincolo di mandato (non è vincolato alle istruzioni degli elettori o del partito)"
  },
  {
    "id": 3043,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il divieto di mandato imperativo (art. 67)?",
    "options": [
      "Ogni membro del Parlamento rappresenta la Nazione ed esercita le sue funzioni senza vincolo di mandato (non è vincolato alle istruzioni degli elettori o del partito)",
      "Il parlamentare deve obbedire al partito",
      "Il parlamentare deve obbedire agli elettori",
      "Il parlamentare non può cambiare partito"
    ],
    "answer": "Ogni membro del Parlamento rappresenta la Nazione ed esercita le sue funzioni senza vincolo di mandato (non è vincolato alle istruzioni degli elettori o del partito)"
  },
  {
    "id": 3043,
    "category": "Diritto Costituzionale",
    "question": "Cosa è il divieto di mandato imperativo (art. 67)?",
    "options": [
      "Ogni membro del Parlamento rappresenta la Nazione ed esercita le sue funzioni senza vincolo di mandato (non è vincolato alle istruzioni degli elettori o del partito)",
      "Il parlamentare deve obbedire al partito",
      "Il parlamentare deve obbedire agli elettori",
      "Il parlamentare non può cambiare partito"
    ],
    "answer": "Ogni membro del Parlamento rappresenta la Nazione ed esercita le sue funzioni senza vincolo di mandato (non è vincolato alle istruzioni degli elettori o del partito)"
  },
  {
    "id": 3044,
    "category": "Diritto Costituzionale",
    "question": "Come viene eletto il Presidente della Repubblica?",
    "options": [
      "Dal Parlamento in seduta comune integrato dai delegati regionali",
      "Direttamente dal popolo",
      "Dal Governo",
      "Dalla Corte Costituzionale"
    ],
    "answer": "Dal Parlamento in seduta comune integrato dai delegati regionali"
  },
  {
    "id": 3044,
    "category": "Diritto Costituzionale",
    "question": "Come viene eletto il Presidente della Repubblica?",
    "options": [
      "Dal Parlamento in seduta comune integrato dai delegati regionali",
      "Direttamente dal popolo",
      "Dal Governo",
      "Dalla Corte Costituzionale"
    ],
    "answer": "Dal Parlamento in seduta comune integrato dai delegati regionali"
  },
  {
    "id": 3044,
    "category": "Diritto Costituzionale",
    "question": "Come viene eletto il Presidente della Repubblica?",
    "options": [
      "Dal Parlamento in seduta comune integrato dai delegati regionali",
      "Direttamente dal popolo",
      "Dal Governo",
      "Dalla Corte Costituzionale"
    ],
    "answer": "Dal Parlamento in seduta comune integrato dai delegati regionali"
  },
  {
    "id": 3045,
    "category": "Diritto Costituzionale",
    "question": "Qual è la maggioranza richiesta per l'elezione del Presidente della Repubblica?",
    "options": [
      "2/3 nei primi 3 scrutini, maggioranza assoluta dal 4°",
      "Sempre 2/3",
      "Sempre maggioranza assoluta",
      "Maggioranza semplice"
    ],
    "answer": "2/3 nei primi 3 scrutini, maggioranza assoluta dal 4°"
  },
  {
    "id": 3045,
    "category": "Diritto Costituzionale",
    "question": "Qual è la maggioranza richiesta per l'elezione del Presidente della Repubblica?",
    "options": [
      "2/3 nei primi 3 scrutini, maggioranza assoluta dal 4°",
      "Sempre 2/3",
      "Sempre maggioranza assoluta",
      "Maggioranza semplice"
    ],
    "answer": "2/3 nei primi 3 scrutini, maggioranza assoluta dal 4°"
  },
  {
    "id": 3045,
    "category": "Diritto Costituzionale",
    "question": "Qual è la maggioranza richiesta per l'elezione del Presidente della Repubblica?",
    "options": [
      "2/3 nei primi 3 scrutini, maggioranza assoluta dal 4°",
      "Sempre 2/3",
      "Sempre maggioranza assoluta",
      "Maggioranza semplice"
    ],
    "answer": "2/3 nei primi 3 scrutini, maggioranza assoluta dal 4°"
  },
  {
    "id": 3046,
    "category": "Diritto Costituzionale",
    "question": "Quanto dura in carica il Presidente della Repubblica?",
    "options": [
      "7 anni",
      "5 anni",
      "9 anni",
      "A vita"
    ],
    "answer": "7 anni"
  },
  {
    "id": 3046,
    "category": "Diritto Costituzionale",
    "question": "Quanto dura in carica il Presidente della Repubblica?",
    "options": [
      "7 anni",
      "5 anni",
      "9 anni",
      "A vita"
    ],
    "answer": "7 anni"
  },
  {
    "id": 3046,
    "category": "Diritto Costituzionale",
    "question": "Quanto dura in carica il Presidente della Repubblica?",
    "options": [
      "7 anni",
      "5 anni",
      "9 anni",
      "A vita"
    ],
    "answer": "7 anni"
  },
  {
    "id": 3047,
    "category": "Diritto Costituzionale",
    "question": "Chi sostituisce il Presidente della Repubblica in caso di impedimento?",
    "options": [
      "Il Presidente del Senato",
      "Il Presidente della Camera",
      "Il Presidente del Consiglio",
      "Il Presidente della Corte Costituzionale"
    ],
    "answer": "Il Presidente del Senato"
  },
  {
    "id": 3047,
    "category": "Diritto Costituzionale",
    "question": "Chi sostituisce il Presidente della Repubblica in caso di impedimento?",
    "options": [
      "Il Presidente del Senato",
      "Il Presidente della Camera",
      "Il Presidente del Consiglio",
      "Il Presidente della Corte Costituzionale"
    ],
    "answer": "Il Presidente del Senato"
  },
  {
    "id": 3047,
    "category": "Diritto Costituzionale",
    "question": "Chi sostituisce il Presidente della Repubblica in caso di impedimento?",
    "options": [
      "Il Presidente del Senato",
      "Il Presidente della Camera",
      "Il Presidente del Consiglio",
      "Il Presidente della Corte Costituzionale"
    ],
    "answer": "Il Presidente del Senato"
  },
  {
    "id": 3048,
    "category": "Diritto Costituzionale",
    "question": "Cosa è la controfirma ministeriale (art. 89)?",
    "options": [
      "Nessun atto del Presidente della Repubblica è valido se non è controfirmato dai ministri proponenti, che ne assumono la responsabilità",
      "Una formalità inutile",
      "La firma del Presidente del Consiglio",
      "La firma del Parlamento"
    ],
    "answer": "Nessun atto del Presidente della Repubblica è valido se non è controfirmato dai ministri proponenti, che ne assumono la responsabilità"
  },
  {
    "id": 3048,
    "category": "Diritto Costituzionale",
    "question": "Cosa è la controfirma ministeriale (art. 89)?",
    "options": [
      "Nessun atto del Presidente della Repubblica è valido se non è controfirmato dai ministri proponenti, che ne assumono la responsabilità",
      "Una formalità inutile",
      "La firma del Presidente del Consiglio",
      "La firma del Parlamento"
    ],
    "answer": "Nessun atto del Presidente della Repubblica è valido se non è controfirmato dai ministri proponenti, che ne assumono la responsabilità"
  },
  {
    "id": 3048,
    "category": "Diritto Costituzionale",
    "question": "Cosa è la controfirma ministeriale (art. 89)?",
    "options": [
      "Nessun atto del Presidente della Repubblica è valido se non è controfirmato dai ministri proponenti, che ne assumono la responsabilità",
      "Una formalità inutile",
      "La firma del Presidente del Consiglio",
      "La firma del Parlamento"
    ],
    "answer": "Nessun atto del Presidente della Repubblica è valido se non è controfirmato dai ministri proponenti, che ne assumono la responsabilità"
  },
  {
    "id": 3049,
    "category": "Diritto Costituzionale",
    "question": "Il Presidente della Repubblica è responsabile per gli atti compiuti nell'esercizio delle sue funzioni?",
    "options": [
      "No, tranne che per alto tradimento o attentato alla Costituzione",
      "Sì, sempre",
      "Solo civilmente",
      "Solo politicamente"
    ],
    "answer": "No, tranne che per alto tradimento o attentato alla Costituzione"
  },
  {
    "id": 3049,
    "category": "Diritto Costituzionale",
    "question": "Il Presidente della Repubblica è responsabile per gli atti compiuti nell'esercizio delle sue funzioni?",
    "options": [
      "No, tranne che per alto tradimento o attentato alla Costituzione",
      "Sì, sempre",
      "Solo civilmente",
      "Solo politicamente"
    ],
    "answer": "No, tranne che per alto tradimento o attentato alla Costituzione"
  },
  {
    "id": 3049,
    "category": "Diritto Costituzionale",
    "question": "Il Presidente della Repubblica è responsabile per gli atti compiuti nell'esercizio delle sue funzioni?",
    "options": [
      "No, tranne che per alto tradimento o attentato alla Costituzione",
      "Sì, sempre",
      "Solo civilmente",
      "Solo politicamente"
    ],
    "answer": "No, tranne che per alto tradimento o attentato alla Costituzione"
  },
  {
    "id": 3050,
    "category": "Diritto Costituzionale",
    "question": "Chi giudica il Presidente della Repubblica per alto tradimento o attentato alla Costituzione?",
    "options": [
      "La Corte Costituzionale (in composizione integrata)",
      "Il Parlamento",
      "La Cassazione",
      "Il Tribunale ordinario"
    ],
    "answer": "La Corte Costituzionale (in composizione integrata)"
  },
  {
    "id": 3050,
    "category": "Diritto Costituzionale",
    "question": "Chi giudica il Presidente della Repubblica per alto tradimento o attentato alla Costituzione?",
    "options": [
      "La Corte Costituzionale (in composizione integrata)",
      "Il Parlamento",
      "La Cassazione",
      "Il Tribunale ordinario"
    ],
    "answer": "La Corte Costituzionale (in composizione integrata)"
  },
  {
    "id": 3050,
    "category": "Diritto Costituzionale",
    "question": "Chi giudica il Presidente della Repubblica per alto tradimento o attentato alla Costituzione?",
    "options": [
      "La Corte Costituzionale (in composizione integrata)",
      "Il Parlamento",
      "La Cassazione",
      "Il Tribunale ordinario"
    ],
    "answer": "La Corte Costituzionale (in composizione integrata)"
  },
  {
    "id": 3051,
    "category": "Diritto Costituzionale",
    "question": "La libertà personale è inviolabile (art. 13). In quali casi è ammessa la detenzione, ispezione o perquisizione personale?",
    "options": [
      "Solo per atto motivato dell'autorità giudiziaria e nei soli casi e modi previsti dalla legge",
      "Sempre, se lo decide la polizia",
      "Mai",
      "Solo in caso di guerra"
    ],
    "answer": "Solo per atto motivato dell'autorità giudiziaria e nei soli casi e modi previsti dalla legge"
  },
  {
    "id": 3051,
    "category": "Diritto Costituzionale",
    "question": "La libertà personale è inviolabile (art. 13). In quali casi è ammessa la detenzione, ispezione o perquisizione personale?",
    "options": [
      "Solo per atto motivato dell'autorità giudiziaria e nei soli casi e modi previsti dalla legge",
      "Sempre, se lo decide la polizia",
      "Mai",
      "Solo in caso di guerra"
    ],
    "answer": "Solo per atto motivato dell'autorità giudiziaria e nei soli casi e modi previsti dalla legge"
  },
  {
    "id": 3051,
    "category": "Diritto Costituzionale",
    "question": "La libertà personale è inviolabile (art. 13). In quali casi è ammessa la detenzione, ispezione o perquisizione personale?",
    "options": [
      "Solo per atto motivato dell'autorità giudiziaria e nei soli casi e modi previsti dalla legge",
      "Sempre, se lo decide la polizia",
      "Mai",
      "Solo in caso di guerra"
    ],
    "answer": "Solo per atto motivato dell'autorità giudiziaria e nei soli casi e modi previsti dalla legge"
  },
  {
    "id": 3052,
    "category": "Diritto Costituzionale",
    "question": "In casi eccezionali di necessità ed urgenza, l'autorità di pubblica sicurezza può adottare provvedimenti provvisori restrittivi della libertà personale. Entro quanto tempo devono essere comunicati all'autorità giudiziaria?",
    "options": [
      "Entro 48 ore",
      "Entro 24 ore",
      "Entro 72 ore",
      "Entro 5 giorni"
    ],
    "answer": "Entro 48 ore"
  },
  {
    "id": 3052,
    "category": "Diritto Costituzionale",
    "question": "In casi eccezionali di necessità ed urgenza, l'autorità di pubblica sicurezza può adottare provvedimenti provvisori restrittivi della libertà personale. Entro quanto tempo devono essere comunicati all'autorità giudiziaria?",
    "options": [
      "Entro 48 ore",
      "Entro 24 ore",
      "Entro 72 ore",
      "Entro 5 giorni"
    ],
    "answer": "Entro 48 ore"
  },
  {
    "id": 3052,
    "category": "Diritto Costituzionale",
    "question": "In casi eccezionali di necessità ed urgenza, l'autorità di pubblica sicurezza può adottare provvedimenti provvisori restrittivi della libertà personale. Entro quanto tempo devono essere comunicati all'autorità giudiziaria?",
    "options": [
      "Entro 48 ore",
      "Entro 24 ore",
      "Entro 72 ore",
      "Entro 5 giorni"
    ],
    "answer": "Entro 48 ore"
  },
  {
    "id": 3053,
    "category": "Diritto Costituzionale",
    "question": "Se l'autorità giudiziaria non convalida i provvedimenti provvisori di restrizione della libertà entro le successive 48 ore, cosa succede?",
    "options": [
      "Si intendono revocati e restano privi di ogni effetto",
      "Rimangono validi per altri 5 giorni",
      "Diventano definitivi",
      "Si trasformano in arresti domiciliari"
    ],
    "answer": "Si intendono revocati e restano privi di ogni effetto"
  },
  {
    "id": 3053,
    "category": "Diritto Costituzionale",
    "question": "Se l'autorità giudiziaria non convalida i provvedimenti provvisori di restrizione della libertà entro le successive 48 ore, cosa succede?",
    "options": [
      "Si intendono revocati e restano privi di ogni effetto",
      "Rimangono validi per altri 5 giorni",
      "Diventano definitivi",
      "Si trasformano in arresti domiciliari"
    ],
    "answer": "Si intendono revocati e restano privi di ogni effetto"
  },
  {
    "id": 3053,
    "category": "Diritto Costituzionale",
    "question": "Se l'autorità giudiziaria non convalida i provvedimenti provvisori di restrizione della libertà entro le successive 48 ore, cosa succede?",
    "options": [
      "Si intendono revocati e restano privi di ogni effetto",
      "Rimangono validi per altri 5 giorni",
      "Diventano definitivi",
      "Si trasformano in arresti domiciliari"
    ],
    "answer": "Si intendono revocati e restano privi di ogni effetto"
  },
  {
    "id": 3054,
    "category": "Diritto Costituzionale",
    "question": "È ammessa la violenza fisica e morale sulle persone sottoposte a restrizione di libertà?",
    "options": [
      "No, è punita ogni violenza fisica e morale",
      "Sì, se necessaria per l'interrogatorio",
      "Sì, ma solo fisica",
      "Solo su ordine del giudice"
    ],
    "answer": "No, è punita ogni violenza fisica e morale"
  },
  {
    "id": 3054,
    "category": "Diritto Costituzionale",
    "question": "È ammessa la violenza fisica e morale sulle persone sottoposte a restrizione di libertà?",
    "options": [
      "No, è punita ogni violenza fisica e morale",
      "Sì, se necessaria per l'interrogatorio",
      "Sì, ma solo fisica",
      "Solo su ordine del giudice"
    ],
    "answer": "No, è punita ogni violenza fisica e morale"
  },
  {
    "id": 3054,
    "category": "Diritto Costituzionale",
    "question": "È ammessa la violenza fisica e morale sulle persone sottoposte a restrizione di libertà?",
    "options": [
      "No, è punita ogni violenza fisica e morale",
      "Sì, se necessaria per l'interrogatorio",
      "Sì, ma solo fisica",
      "Solo su ordine del giudice"
    ],
    "answer": "No, è punita ogni violenza fisica e morale"
  },
  {
    "id": 3055,
    "category": "Diritto Costituzionale",
    "question": "Il domicilio è inviolabile (art. 14). Le ispezioni o perquisizioni domiciliari possono essere eseguite:",
    "options": [
      "Nei casi e modi stabiliti dalla legge secondo le garanzie prescritte per la tutela della libertà personale",
      "Sempre liberamente dalla polizia",
      "Solo di giorno",
      "Solo se il proprietario acconsente"
    ],
    "answer": "Nei casi e modi stabiliti dalla legge secondo le garanzie prescritte per la tutela della libertà personale"
  },
  {
    "id": 3055,
    "category": "Diritto Costituzionale",
    "question": "Il domicilio è inviolabile (art. 14). Le ispezioni o perquisizioni domiciliari possono essere eseguite:",
    "options": [
      "Nei casi e modi stabiliti dalla legge secondo le garanzie prescritte per la tutela della libertà personale",
      "Sempre liberamente dalla polizia",
      "Solo di giorno",
      "Solo se il proprietario acconsente"
    ],
    "answer": "Nei casi e modi stabiliti dalla legge secondo le garanzie prescritte per la tutela della libertà personale"
  },
  {
    "id": 3055,
    "category": "Diritto Costituzionale",
    "question": "Il domicilio è inviolabile (art. 14). Le ispezioni o perquisizioni domiciliari possono essere eseguite:",
    "options": [
      "Nei casi e modi stabiliti dalla legge secondo le garanzie prescritte per la tutela della libertà personale",
      "Sempre liberamente dalla polizia",
      "Solo di giorno",
      "Solo se il proprietario acconsente"
    ],
    "answer": "Nei casi e modi stabiliti dalla legge secondo le garanzie prescritte per la tutela della libertà personale"
  },
  {
    "id": 3056,
    "category": "Diritto Costituzionale",
    "question": "Gli accertamenti e le ispezioni per motivi di sanità e di incolumità pubblica o a fini economici e fiscali sono regolati:",
    "options": [
      "Da leggi speciali",
      "Dal codice penale",
      "Dalla Costituzione direttamente",
      "Da regolamenti comunali"
    ],
    "answer": "Da leggi speciali"
  },
  {
    "id": 3056,
    "category": "Diritto Costituzionale",
    "question": "Gli accertamenti e le ispezioni per motivi di sanità e di incolumità pubblica o a fini economici e fiscali sono regolati:",
    "options": [
      "Da leggi speciali",
      "Dal codice penale",
      "Dalla Costituzione direttamente",
      "Da regolamenti comunali"
    ],
    "answer": "Da leggi speciali"
  },
  {
    "id": 3056,
    "category": "Diritto Costituzionale",
    "question": "Gli accertamenti e le ispezioni per motivi di sanità e di incolumità pubblica o a fini economici e fiscali sono regolati:",
    "options": [
      "Da leggi speciali",
      "Dal codice penale",
      "Dalla Costituzione direttamente",
      "Da regolamenti comunali"
    ],
    "answer": "Da leggi speciali"
  },
  {
    "id": 3057,
    "category": "Diritto Costituzionale",
    "question": "La libertà e la segretezza della corrispondenza e di ogni altra forma di comunicazione (art. 15) sono:",
    "options": [
      "Inviolabili",
      "Violabili sempre",
      "Tutelate solo per i cittadini",
      "Tutelate solo per la posta cartacea"
    ],
    "answer": "Inviolabili"
  },
  {
    "id": 3057,
    "category": "Diritto Costituzionale",
    "question": "La libertà e la segretezza della corrispondenza e di ogni altra forma di comunicazione (art. 15) sono:",
    "options": [
      "Inviolabili",
      "Violabili sempre",
      "Tutelate solo per i cittadini",
      "Tutelate solo per la posta cartacea"
    ],
    "answer": "Inviolabili"
  },
  {
    "id": 3057,
    "category": "Diritto Costituzionale",
    "question": "La libertà e la segretezza della corrispondenza e di ogni altra forma di comunicazione (art. 15) sono:",
    "options": [
      "Inviolabili",
      "Violabili sempre",
      "Tutelate solo per i cittadini",
      "Tutelate solo per la posta cartacea"
    ],
    "answer": "Inviolabili"
  },
  {
    "id": 3058,
    "category": "Diritto Costituzionale",
    "question": "Ogni cittadino può circolare e soggiornare liberamente in qualsiasi parte del territorio nazionale (art. 16), salvo le limitazioni che la legge stabilisce in via generale per motivi di:",
    "options": [
      "Sanità o sicurezza",
      "Politica",
      "Economia",
      "Ordine pubblico generico"
    ],
    "answer": "Sanità o sicurezza"
  },
  {
    "id": 3058,
    "category": "Diritto Costituzionale",
    "question": "Ogni cittadino può circolare e soggiornare liberamente in qualsiasi parte del territorio nazionale (art. 16), salvo le limitazioni che la legge stabilisce in via generale per motivi di:",
    "options": [
      "Sanità o sicurezza",
      "Politica",
      "Economia",
      "Ordine pubblico generico"
    ],
    "answer": "Sanità o sicurezza"
  },
  {
    "id": 3058,
    "category": "Diritto Costituzionale",
    "question": "Ogni cittadino può circolare e soggiornare liberamente in qualsiasi parte del territorio nazionale (art. 16), salvo le limitazioni che la legge stabilisce in via generale per motivi di:",
    "options": [
      "Sanità o sicurezza",
      "Politica",
      "Economia",
      "Ordine pubblico generico"
    ],
    "answer": "Sanità o sicurezza"
  },
  {
    "id": 3059,
    "category": "Diritto Costituzionale",
    "question": "I cittadini hanno diritto di riunirsi pacificamente e senz'armi (art. 17). Per le riunioni, anche in luogo aperto al pubblico, è richiesto preavviso?",
    "options": [
      "No",
      "Sì, sempre",
      "Sì, di 3 giorni",
      "Solo se ci sono politici"
    ],
    "answer": "No"
  },
  {
    "id": 3059,
    "category": "Diritto Costituzionale",
    "question": "I cittadini hanno diritto di riunirsi pacificamente e senz'armi (art. 17). Per le riunioni, anche in luogo aperto al pubblico, è richiesto preavviso?",
    "options": [
      "No",
      "Sì, sempre",
      "Sì, di 3 giorni",
      "Solo se ci sono politici"
    ],
    "answer": "No"
  },
  {
    "id": 3059,
    "category": "Diritto Costituzionale",
    "question": "I cittadini hanno diritto di riunirsi pacificamente e senz'armi (art. 17). Per le riunioni, anche in luogo aperto al pubblico, è richiesto preavviso?",
    "options": [
      "No",
      "Sì, sempre",
      "Sì, di 3 giorni",
      "Solo se ci sono politici"
    ],
    "answer": "No"
  },
  {
    "id": 3060,
    "category": "Diritto Costituzionale",
    "question": "Per le riunioni in luogo pubblico deve essere dato preavviso alle autorità?",
    "options": [
      "Sì, e possono vietarle solo per comprovati motivi di sicurezza o di incolumità pubblica",
      "No, mai",
      "Sì, e l'autorità deve autorizzarle",
      "Solo se sono cortei"
    ],
    "answer": "Sì, e possono vietarle solo per comprovati motivi di sicurezza o di incolumità pubblica"
  },
  {
    "id": 3060,
    "category": "Diritto Costituzionale",
    "question": "Per le riunioni in luogo pubblico deve essere dato preavviso alle autorità?",
    "options": [
      "Sì, e possono vietarle solo per comprovati motivi di sicurezza o di incolumità pubblica",
      "No, mai",
      "Sì, e l'autorità deve autorizzarle",
      "Solo se sono cortei"
    ],
    "answer": "Sì, e possono vietarle solo per comprovati motivi di sicurezza o di incolumità pubblica"
  },
  {
    "id": 3060,
    "category": "Diritto Costituzionale",
    "question": "Per le riunioni in luogo pubblico deve essere dato preavviso alle autorità?",
    "options": [
      "Sì, e possono vietarle solo per comprovati motivi di sicurezza o di incolumità pubblica",
      "No, mai",
      "Sì, e l'autorità deve autorizzarle",
      "Solo se sono cortei"
    ],
    "answer": "Sì, e possono vietarle solo per comprovati motivi di sicurezza o di incolumità pubblica"
  },
  {
    "id": 3061,
    "category": "Diritto Costituzionale",
    "question": "I cittadini hanno diritto di associarsi liberamente, senza autorizzazione (art. 18), per fini che:",
    "options": [
      "Non sono vietati ai singoli dalla legge penale",
      "Sono approvati dal Governo",
      "Sono utili alla società",
      "Non sono politici"
    ],
    "answer": "Non sono vietati ai singoli dalla legge penale"
  },
  {
    "id": 3061,
    "category": "Diritto Costituzionale",
    "question": "I cittadini hanno diritto di associarsi liberamente, senza autorizzazione (art. 18), per fini che:",
    "options": [
      "Non sono vietati ai singoli dalla legge penale",
      "Sono approvati dal Governo",
      "Sono utili alla società",
      "Non sono politici"
    ],
    "answer": "Non sono vietati ai singoli dalla legge penale"
  },
  {
    "id": 3061,
    "category": "Diritto Costituzionale",
    "question": "I cittadini hanno diritto di associarsi liberamente, senza autorizzazione (art. 18), per fini che:",
    "options": [
      "Non sono vietati ai singoli dalla legge penale",
      "Sono approvati dal Governo",
      "Sono utili alla società",
      "Non sono politici"
    ],
    "answer": "Non sono vietati ai singoli dalla legge penale"
  },
  {
    "id": 3062,
    "category": "Diritto Costituzionale",
    "question": "Quali associazioni sono proibite dalla Costituzione?",
    "options": [
      "Le associazioni segrete e quelle che perseguono, anche indirettamente, scopi politici mediante organizzazioni di carattere militare",
      "I sindacati",
      "I partiti politici",
      "Le associazioni religiose"
    ],
    "answer": "Le associazioni segrete e quelle che perseguono, anche indirettamente, scopi politici mediante organizzazioni di carattere militare"
  },
  {
    "id": 3062,
    "category": "Diritto Costituzionale",
    "question": "Quali associazioni sono proibite dalla Costituzione?",
    "options": [
      "Le associazioni segrete e quelle che perseguono, anche indirettamente, scopi politici mediante organizzazioni di carattere militare",
      "I sindacati",
      "I partiti politici",
      "Le associazioni religiose"
    ],
    "answer": "Le associazioni segrete e quelle che perseguono, anche indirettamente, scopi politici mediante organizzazioni di carattere militare"
  },
  {
    "id": 3062,
    "category": "Diritto Costituzionale",
    "question": "Quali associazioni sono proibite dalla Costituzione?",
    "options": [
      "Le associazioni segrete e quelle che perseguono, anche indirettamente, scopi politici mediante organizzazioni di carattere militare",
      "I sindacati",
      "I partiti politici",
      "Le associazioni religiose"
    ],
    "answer": "Le associazioni segrete e quelle che perseguono, anche indirettamente, scopi politici mediante organizzazioni di carattere militare"
  },
  {
    "id": 3063,
    "category": "Diritto Costituzionale",
    "question": "Tutti hanno diritto di professare liberamente la propria fede religiosa (art. 19)?",
    "options": [
      "Sì, in qualsiasi forma, individuale o associata, di farne propaganda e di esercitarne in privato o in pubblico il culto, purché non si tratti di riti contrari al buon costume",
      "Solo in privato",
      "Solo se cattolici",
      "Solo se autorizzati"
    ],
    "answer": "Sì, in qualsiasi forma, individuale o associata, di farne propaganda e di esercitarne in privato o in pubblico il culto, purché non si tratti di riti contrari al buon costume"
  },
  {
    "id": 3063,
    "category": "Diritto Costituzionale",
    "question": "Tutti hanno diritto di professare liberamente la propria fede religiosa (art. 19)?",
    "options": [
      "Sì, in qualsiasi forma, individuale o associata, di farne propaganda e di esercitarne in privato o in pubblico il culto, purché non si tratti di riti contrari al buon costume",
      "Solo in privato",
      "Solo se cattolici",
      "Solo se autorizzati"
    ],
    "answer": "Sì, in qualsiasi forma, individuale o associata, di farne propaganda e di esercitarne in privato o in pubblico il culto, purché non si tratti di riti contrari al buon costume"
  },
  {
    "id": 3063,
    "category": "Diritto Costituzionale",
    "question": "Tutti hanno diritto di professare liberamente la propria fede religiosa (art. 19)?",
    "options": [
      "Sì, in qualsiasi forma, individuale o associata, di farne propaganda e di esercitarne in privato o in pubblico il culto, purché non si tratti di riti contrari al buon costume",
      "Solo in privato",
      "Solo se cattolici",
      "Solo se autorizzati"
    ],
    "answer": "Sì, in qualsiasi forma, individuale o associata, di farne propaganda e di esercitarne in privato o in pubblico il culto, purché non si tratti di riti contrari al buon costume"
  },
  {
    "id": 3064,
    "category": "Diritto Costituzionale",
    "question": "Tutti hanno diritto di manifestare liberamente il proprio pensiero (art. 21) con:",
    "options": [
      "La parola, lo scritto e ogni altro mezzo di diffusione",
      "Solo la parola",
      "Solo lo scritto",
      "Solo internet"
    ],
    "answer": "La parola, lo scritto e ogni altro mezzo di diffusione"
  },
  {
    "id": 3064,
    "category": "Diritto Costituzionale",
    "question": "Tutti hanno diritto di manifestare liberamente il proprio pensiero (art. 21) con:",
    "options": [
      "La parola, lo scritto e ogni altro mezzo di diffusione",
      "Solo la parola",
      "Solo lo scritto",
      "Solo internet"
    ],
    "answer": "La parola, lo scritto e ogni altro mezzo di diffusione"
  },
  {
    "id": 3064,
    "category": "Diritto Costituzionale",
    "question": "Tutti hanno diritto di manifestare liberamente il proprio pensiero (art. 21) con:",
    "options": [
      "La parola, lo scritto e ogni altro mezzo di diffusione",
      "Solo la parola",
      "Solo lo scritto",
      "Solo internet"
    ],
    "answer": "La parola, lo scritto e ogni altro mezzo di diffusione"
  },
  {
    "id": 3065,
    "category": "Diritto Costituzionale",
    "question": "La stampa può essere soggetta ad autorizzazioni o censure?",
    "options": [
      "No",
      "Sì, sempre",
      "Solo in tempo di guerra",
      "Solo se critica il Governo"
    ],
    "answer": "No"
  },
  {
    "id": 3065,
    "category": "Diritto Costituzionale",
    "question": "La stampa può essere soggetta ad autorizzazioni o censure?",
    "options": [
      "No",
      "Sì, sempre",
      "Solo in tempo di guerra",
      "Solo se critica il Governo"
    ],
    "answer": "No"
  },
  {
    "id": 3065,
    "category": "Diritto Costituzionale",
    "question": "La stampa può essere soggetta ad autorizzazioni o censure?",
    "options": [
      "No",
      "Sì, sempre",
      "Solo in tempo di guerra",
      "Solo se critica il Governo"
    ],
    "answer": "No"
  },
  {
    "id": 3066,
    "category": "Diritto Costituzionale",
    "question": "Quando si può procedere a sequestro della stampa?",
    "options": [
      "Solo per atto motivato dell'autorità giudiziaria nel caso di delitti, per i quali la legge sulla stampa espressamente lo autorizzi",
      "Sempre se la notizia è falsa",
      "Se lo ordina il Prefetto",
      "Mai"
    ],
    "answer": "Solo per atto motivato dell'autorità giudiziaria nel caso di delitti, per i quali la legge sulla stampa espressamente lo autorizzi"
  },
  {
    "id": 3066,
    "category": "Diritto Costituzionale",
    "question": "Quando si può procedere a sequestro della stampa?",
    "options": [
      "Solo per atto motivato dell'autorità giudiziaria nel caso di delitti, per i quali la legge sulla stampa espressamente lo autorizzi",
      "Sempre se la notizia è falsa",
      "Se lo ordina il Prefetto",
      "Mai"
    ],
    "answer": "Solo per atto motivato dell'autorità giudiziaria nel caso di delitti, per i quali la legge sulla stampa espressamente lo autorizzi"
  },
  {
    "id": 3066,
    "category": "Diritto Costituzionale",
    "question": "Quando si può procedere a sequestro della stampa?",
    "options": [
      "Solo per atto motivato dell'autorità giudiziaria nel caso di delitti, per i quali la legge sulla stampa espressamente lo autorizzi",
      "Sempre se la notizia è falsa",
      "Se lo ordina il Prefetto",
      "Mai"
    ],
    "answer": "Solo per atto motivato dell'autorità giudiziaria nel caso di delitti, per i quali la legge sulla stampa espressamente lo autorizzi"
  },
  {
    "id": 3067,
    "category": "Diritto Costituzionale",
    "question": "Nessuno può essere distolto dal giudice naturale precostituito per legge (art. 25). Cosa significa?",
    "options": [
      "Che il giudice competente deve essere individuato in base a criteri oggettivi fissati dalla legge prima che il fatto sia commesso",
      "Che il giudice deve essere nato nello stesso luogo dell'imputato",
      "Che l'imputato può scegliersi il giudice",
      "Che il giudice deve essere naturale e non artificiale"
    ],
    "answer": "Che il giudice competente deve essere individuato in base a criteri oggettivi fissati dalla legge prima che il fatto sia commesso"
  },
  {
    "id": 3067,
    "category": "Diritto Costituzionale",
    "question": "Nessuno può essere distolto dal giudice naturale precostituito per legge (art. 25). Cosa significa?",
    "options": [
      "Che il giudice competente deve essere individuato in base a criteri oggettivi fissati dalla legge prima che il fatto sia commesso",
      "Che il giudice deve essere nato nello stesso luogo dell'imputato",
      "Che l'imputato può scegliersi il giudice",
      "Che il giudice deve essere naturale e non artificiale"
    ],
    "answer": "Che il giudice competente deve essere individuato in base a criteri oggettivi fissati dalla legge prima che il fatto sia commesso"
  },
  {
    "id": 3067,
    "category": "Diritto Costituzionale",
    "question": "Nessuno può essere distolto dal giudice naturale precostituito per legge (art. 25). Cosa significa?",
    "options": [
      "Che il giudice competente deve essere individuato in base a criteri oggettivi fissati dalla legge prima che il fatto sia commesso",
      "Che il giudice deve essere nato nello stesso luogo dell'imputato",
      "Che l'imputato può scegliersi il giudice",
      "Che il giudice deve essere naturale e non artificiale"
    ],
    "answer": "Che il giudice competente deve essere individuato in base a criteri oggettivi fissati dalla legge prima che il fatto sia commesso"
  },
  {
    "id": 3068,
    "category": "Diritto Costituzionale",
    "question": "La responsabilità penale è (art. 27):",
    "options": [
      "Personale",
      "Di gruppo",
      "Familiare",
      "Oggettiva"
    ],
    "answer": "Personale"
  },
  {
    "id": 3068,
    "category": "Diritto Costituzionale",
    "question": "La responsabilità penale è (art. 27):",
    "options": [
      "Personale",
      "Di gruppo",
      "Familiare",
      "Oggettiva"
    ],
    "answer": "Personale"
  },
  {
    "id": 3068,
    "category": "Diritto Costituzionale",
    "question": "La responsabilità penale è (art. 27):",
    "options": [
      "Personale",
      "Di gruppo",
      "Familiare",
      "Oggettiva"
    ],
    "answer": "Personale"
  },
  {
    "id": 3069,
    "category": "Diritto Costituzionale",
    "question": "L'imputato non è considerato colpevole sino:",
    "options": [
      "Alla condanna definitiva",
      "Al rinvio a giudizio",
      "All'arresto",
      "Alla sentenza di primo grado"
    ],
    "answer": "Alla condanna definitiva"
  },
  {
    "id": 3069,
    "category": "Diritto Costituzionale",
    "question": "L'imputato non è considerato colpevole sino:",
    "options": [
      "Alla condanna definitiva",
      "Al rinvio a giudizio",
      "All'arresto",
      "Alla sentenza di primo grado"
    ],
    "answer": "Alla condanna definitiva"
  },
  {
    "id": 3069,
    "category": "Diritto Costituzionale",
    "question": "L'imputato non è considerato colpevole sino:",
    "options": [
      "Alla condanna definitiva",
      "Al rinvio a giudizio",
      "All'arresto",
      "Alla sentenza di primo grado"
    ],
    "answer": "Alla condanna definitiva"
  },
  {
    "id": 3070,
    "category": "Diritto Costituzionale",
    "question": "Le pene non possono consistere in trattamenti contrari al senso di umanità e devono tendere:",
    "options": [
      "Alla rieducazione del condannato",
      "Alla vendetta",
      "All'eliminazione fisica",
      "Al risarcimento del danno"
    ],
    "answer": "Alla rieducazione del condannato"
  },
  {
    "id": 3070,
    "category": "Diritto Costituzionale",
    "question": "Le pene non possono consistere in trattamenti contrari al senso di umanità e devono tendere:",
    "options": [
      "Alla rieducazione del condannato",
      "Alla vendetta",
      "All'eliminazione fisica",
      "Al risarcimento del danno"
    ],
    "answer": "Alla rieducazione del condannato"
  },
  {
    "id": 3070,
    "category": "Diritto Costituzionale",
    "question": "Le pene non possono consistere in trattamenti contrari al senso di umanità e devono tendere:",
    "options": [
      "Alla rieducazione del condannato",
      "Alla vendetta",
      "All'eliminazione fisica",
      "Al risarcimento del danno"
    ],
    "answer": "Alla rieducazione del condannato"
  },
  {
    "id": 3071,
    "category": "Diritto Costituzionale",
    "question": "È ammessa la pena di morte in Italia?",
    "options": [
      "Non è ammessa",
      "Sì, per i casi previsti dalle leggi militari di guerra (ma abrogata anche lì)",
      "Sì, per omicidio",
      "Sì, per alto tradimento"
    ],
    "answer": "Non è ammessa"
  },
  {
    "id": 3071,
    "category": "Diritto Costituzionale",
    "question": "È ammessa la pena di morte in Italia?",
    "options": [
      "Non è ammessa",
      "Sì, per i casi previsti dalle leggi militari di guerra (ma abrogata anche lì)",
      "Sì, per omicidio",
      "Sì, per alto tradimento"
    ],
    "answer": "Non è ammessa"
  },
  {
    "id": 3071,
    "category": "Diritto Costituzionale",
    "question": "È ammessa la pena di morte in Italia?",
    "options": [
      "Non è ammessa",
      "Sì, per i casi previsti dalle leggi militari di guerra (ma abrogata anche lì)",
      "Sì, per omicidio",
      "Sì, per alto tradimento"
    ],
    "answer": "Non è ammessa"
  },
  {
    "id": 3072,
    "category": "Diritto Costituzionale",
    "question": "La Repubblica riconosce i diritti della famiglia come società naturale fondata (art. 29):",
    "options": [
      "Sul matrimonio",
      "Sull'amore",
      "Sulla convivenza",
      "Sui figli"
    ],
    "answer": "Sul matrimonio"
  },
  {
    "id": 3072,
    "category": "Diritto Costituzionale",
    "question": "La Repubblica riconosce i diritti della famiglia come società naturale fondata (art. 29):",
    "options": [
      "Sul matrimonio",
      "Sull'amore",
      "Sulla convivenza",
      "Sui figli"
    ],
    "answer": "Sul matrimonio"
  },
  {
    "id": 3072,
    "category": "Diritto Costituzionale",
    "question": "La Repubblica riconosce i diritti della famiglia come società naturale fondata (art. 29):",
    "options": [
      "Sul matrimonio",
      "Sull'amore",
      "Sulla convivenza",
      "Sui figli"
    ],
    "answer": "Sul matrimonio"
  },
  {
    "id": 3073,
    "category": "Diritto Costituzionale",
    "question": "Il matrimonio è ordinato sull'eguaglianza morale e giuridica dei coniugi?",
    "options": [
      "Sì, con i limiti stabiliti dalla legge a garanzia dell'unità familiare",
      "No, il marito è il capo famiglia",
      "No, la moglie decide per i figli",
      "Solo se concordatario"
    ],
    "answer": "Sì, con i limiti stabiliti dalla legge a garanzia dell'unità familiare"
  },
  {
    "id": 3073,
    "category": "Diritto Costituzionale",
    "question": "Il matrimonio è ordinato sull'eguaglianza morale e giuridica dei coniugi?",
    "options": [
      "Sì, con i limiti stabiliti dalla legge a garanzia dell'unità familiare",
      "No, il marito è il capo famiglia",
      "No, la moglie decide per i figli",
      "Solo se concordatario"
    ],
    "answer": "Sì, con i limiti stabiliti dalla legge a garanzia dell'unità familiare"
  },
  {
    "id": 3073,
    "category": "Diritto Costituzionale",
    "question": "Il matrimonio è ordinato sull'eguaglianza morale e giuridica dei coniugi?",
    "options": [
      "Sì, con i limiti stabiliti dalla legge a garanzia dell'unità familiare",
      "No, il marito è il capo famiglia",
      "No, la moglie decide per i figli",
      "Solo se concordatario"
    ],
    "answer": "Sì, con i limiti stabiliti dalla legge a garanzia dell'unità familiare"
  },
  {
    "id": 3074,
    "category": "Diritto Costituzionale",
    "question": "È dovere e diritto dei genitori (art. 30):",
    "options": [
      "Mantenere, istruire ed educare i figli, anche se nati fuori del matrimonio",
      "Solo mantenerli",
      "Solo educarli",
      "Abbandonarli se non li vogliono"
    ],
    "answer": "Mantenere, istruire ed educare i figli, anche se nati fuori del matrimonio"
  },
  {
    "id": 3074,
    "category": "Diritto Costituzionale",
    "question": "È dovere e diritto dei genitori (art. 30):",
    "options": [
      "Mantenere, istruire ed educare i figli, anche se nati fuori del matrimonio",
      "Solo mantenerli",
      "Solo educarli",
      "Abbandonarli se non li vogliono"
    ],
    "answer": "Mantenere, istruire ed educare i figli, anche se nati fuori del matrimonio"
  },
  {
    "id": 3074,
    "category": "Diritto Costituzionale",
    "question": "È dovere e diritto dei genitori (art. 30):",
    "options": [
      "Mantenere, istruire ed educare i figli, anche se nati fuori del matrimonio",
      "Solo mantenerli",
      "Solo educarli",
      "Abbandonarli se non li vogliono"
    ],
    "answer": "Mantenere, istruire ed educare i figli, anche se nati fuori del matrimonio"
  },
  {
    "id": 3075,
    "category": "Diritto Costituzionale",
    "question": "La Repubblica tutela la salute (art. 32) come:",
    "options": [
      "Fondamentale diritto dell'individuo e interesse della collettività",
      "Un lusso",
      "Un dovere solo per i ricchi",
      "Una scelta personale"
    ],
    "answer": "Fondamentale diritto dell'individuo e interesse della collettività"
  },
  {
    "id": 3075,
    "category": "Diritto Costituzionale",
    "question": "La Repubblica tutela la salute (art. 32) come:",
    "options": [
      "Fondamentale diritto dell'individuo e interesse della collettività",
      "Un lusso",
      "Un dovere solo per i ricchi",
      "Una scelta personale"
    ],
    "answer": "Fondamentale diritto dell'individuo e interesse della collettività"
  },
  {
    "id": 3075,
    "category": "Diritto Costituzionale",
    "question": "La Repubblica tutela la salute (art. 32) come:",
    "options": [
      "Fondamentale diritto dell'individuo e interesse della collettività",
      "Un lusso",
      "Un dovere solo per i ricchi",
      "Una scelta personale"
    ],
    "answer": "Fondamentale diritto dell'individuo e interesse della collettività"
  },
  {
    "id": 3076,
    "category": "Diritto Costituzionale",
    "question": "Nessuno può essere obbligato a un determinato trattamento sanitario se non:",
    "options": [
      "Per disposizione di legge",
      "Per ordine del medico",
      "Per ordine del sindaco",
      "Mai"
    ],
    "answer": "Per disposizione di legge"
  },
  {
    "id": 3076,
    "category": "Diritto Costituzionale",
    "question": "Nessuno può essere obbligato a un determinato trattamento sanitario se non:",
    "options": [
      "Per disposizione di legge",
      "Per ordine del medico",
      "Per ordine del sindaco",
      "Mai"
    ],
    "answer": "Per disposizione di legge"
  },
  {
    "id": 3076,
    "category": "Diritto Costituzionale",
    "question": "Nessuno può essere obbligato a un determinato trattamento sanitario se non:",
    "options": [
      "Per disposizione di legge",
      "Per ordine del medico",
      "Per ordine del sindaco",
      "Mai"
    ],
    "answer": "Per disposizione di legge"
  },
  {
    "id": 3077,
    "category": "Diritto Costituzionale",
    "question": "L'arte e la scienza sono libere e libero ne è l'insegnamento (art. 33). Chi ha il diritto di istituire scuole ed istituti di educazione?",
    "options": [
      "Enti e privati, senza oneri per lo Stato",
      "Solo lo Stato",
      "Solo la Chiesa",
      "Solo i Comuni"
    ],
    "answer": "Enti e privati, senza oneri per lo Stato"
  },
  {
    "id": 3077,
    "category": "Diritto Costituzionale",
    "question": "L'arte e la scienza sono libere e libero ne è l'insegnamento (art. 33). Chi ha il diritto di istituire scuole ed istituti di educazione?",
    "options": [
      "Enti e privati, senza oneri per lo Stato",
      "Solo lo Stato",
      "Solo la Chiesa",
      "Solo i Comuni"
    ],
    "answer": "Enti e privati, senza oneri per lo Stato"
  },
  {
    "id": 3077,
    "category": "Diritto Costituzionale",
    "question": "L'arte e la scienza sono libere e libero ne è l'insegnamento (art. 33). Chi ha il diritto di istituire scuole ed istituti di educazione?",
    "options": [
      "Enti e privati, senza oneri per lo Stato",
      "Solo lo Stato",
      "Solo la Chiesa",
      "Solo i Comuni"
    ],
    "answer": "Enti e privati, senza oneri per lo Stato"
  },
  {
    "id": 3078,
    "category": "Diritto Costituzionale",
    "question": "La scuola è aperta a tutti (art. 34). L'istruzione inferiore è:",
    "options": [
      "Obbligatoria e gratuita per almeno 8 anni",
      "Facoltativa",
      "A pagamento",
      "Solo per i cittadini"
    ],
    "answer": "Obbligatoria e gratuita per almeno 8 anni"
  },
  {
    "id": 3078,
    "category": "Diritto Costituzionale",
    "question": "La scuola è aperta a tutti (art. 34). L'istruzione inferiore è:",
    "options": [
      "Obbligatoria e gratuita per almeno 8 anni",
      "Facoltativa",
      "A pagamento",
      "Solo per i cittadini"
    ],
    "answer": "Obbligatoria e gratuita per almeno 8 anni"
  },
  {
    "id": 3078,
    "category": "Diritto Costituzionale",
    "question": "La scuola è aperta a tutti (art. 34). L'istruzione inferiore è:",
    "options": [
      "Obbligatoria e gratuita per almeno 8 anni",
      "Facoltativa",
      "A pagamento",
      "Solo per i cittadini"
    ],
    "answer": "Obbligatoria e gratuita per almeno 8 anni"
  },
  {
    "id": 3079,
    "category": "Diritto Costituzionale",
    "question": "I capaci e meritevoli, anche se privi di mezzi, hanno diritto di raggiungere i gradi più alti degli studi. Come garantisce ciò la Repubblica?",
    "options": [
      "Con borse di studio, assegni alle famiglie ed altre provvidenze, da attribuire mediante concorso",
      "Con prestiti d'onore",
      "Non lo garantisce",
      "Solo se raccomandati"
    ],
    "answer": "Con borse di studio, assegni alle famiglie ed altre provvidenze, da attribuire mediante concorso"
  },
  {
    "id": 3079,
    "category": "Diritto Costituzionale",
    "question": "I capaci e meritevoli, anche se privi di mezzi, hanno diritto di raggiungere i gradi più alti degli studi. Come garantisce ciò la Repubblica?",
    "options": [
      "Con borse di studio, assegni alle famiglie ed altre provvidenze, da attribuire mediante concorso",
      "Con prestiti d'onore",
      "Non lo garantisce",
      "Solo se raccomandati"
    ],
    "answer": "Con borse di studio, assegni alle famiglie ed altre provvidenze, da attribuire mediante concorso"
  },
  {
    "id": 3079,
    "category": "Diritto Costituzionale",
    "question": "I capaci e meritevoli, anche se privi di mezzi, hanno diritto di raggiungere i gradi più alti degli studi. Come garantisce ciò la Repubblica?",
    "options": [
      "Con borse di studio, assegni alle famiglie ed altre provvidenze, da attribuire mediante concorso",
      "Con prestiti d'onore",
      "Non lo garantisce",
      "Solo se raccomandati"
    ],
    "answer": "Con borse di studio, assegni alle famiglie ed altre provvidenze, da attribuire mediante concorso"
  },
  {
    "id": 3080,
    "category": "Diritto Costituzionale",
    "question": "Il lavoratore ha diritto ad una retribuzione (art. 36):",
    "options": [
      "Proporzionata alla quantità e qualità del suo lavoro e in ogni caso sufficiente ad assicurare a sé e alla famiglia un'esistenza libera e dignitosa",
      "Uguale per tutti",
      "Minima stabilita dal datore",
      "Basata solo sull'anzianità"
    ],
    "answer": "Proporzionata alla quantità e qualità del suo lavoro e in ogni caso sufficiente ad assicurare a sé e alla famiglia un'esistenza libera e dignitosa"
  },
  {
    "id": 3080,
    "category": "Diritto Costituzionale",
    "question": "Il lavoratore ha diritto ad una retribuzione (art. 36):",
    "options": [
      "Proporzionata alla quantità e qualità del suo lavoro e in ogni caso sufficiente ad assicurare a sé e alla famiglia un'esistenza libera e dignitosa",
      "Uguale per tutti",
      "Minima stabilita dal datore",
      "Basata solo sull'anzianità"
    ],
    "answer": "Proporzionata alla quantità e qualità del suo lavoro e in ogni caso sufficiente ad assicurare a sé e alla famiglia un'esistenza libera e dignitosa"
  },
  {
    "id": 3080,
    "category": "Diritto Costituzionale",
    "question": "Il lavoratore ha diritto ad una retribuzione (art. 36):",
    "options": [
      "Proporzionata alla quantità e qualità del suo lavoro e in ogni caso sufficiente ad assicurare a sé e alla famiglia un'esistenza libera e dignitosa",
      "Uguale per tutti",
      "Minima stabilita dal datore",
      "Basata solo sull'anzianità"
    ],
    "answer": "Proporzionata alla quantità e qualità del suo lavoro e in ogni caso sufficiente ad assicurare a sé e alla famiglia un'esistenza libera e dignitosa"
  },
  {
    "id": 3081,
    "category": "Diritto Costituzionale",
    "question": "La donna lavoratrice ha gli stessi diritti e, a parità di lavoro, le stesse retribuzioni che spettano al lavoratore (art. 37)?",
    "options": [
      "Sì",
      "No, guadagna meno",
      "Solo se non è sposata",
      "Solo nel pubblico impiego"
    ],
    "answer": "Sì"
  },
  {
    "id": 3081,
    "category": "Diritto Costituzionale",
    "question": "La donna lavoratrice ha gli stessi diritti e, a parità di lavoro, le stesse retribuzioni che spettano al lavoratore (art. 37)?",
    "options": [
      "Sì",
      "No, guadagna meno",
      "Solo se non è sposata",
      "Solo nel pubblico impiego"
    ],
    "answer": "Sì"
  },
  {
    "id": 3081,
    "category": "Diritto Costituzionale",
    "question": "La donna lavoratrice ha gli stessi diritti e, a parità di lavoro, le stesse retribuzioni che spettano al lavoratore (art. 37)?",
    "options": [
      "Sì",
      "No, guadagna meno",
      "Solo se non è sposata",
      "Solo nel pubblico impiego"
    ],
    "answer": "Sì"
  },
  {
    "id": 3082,
    "category": "Diritto Costituzionale",
    "question": "Ogni cittadino inabile al lavoro e sprovvisto dei mezzi necessari per vivere ha diritto (art. 38):",
    "options": [
      "Al mantenimento e all'assistenza sociale",
      "Alla pensione di vecchiaia",
      "A un lavoro statale",
      "A nulla"
    ],
    "answer": "Al mantenimento e all'assistenza sociale"
  },
  {
    "id": 3082,
    "category": "Diritto Costituzionale",
    "question": "Ogni cittadino inabile al lavoro e sprovvisto dei mezzi necessari per vivere ha diritto (art. 38):",
    "options": [
      "Al mantenimento e all'assistenza sociale",
      "Alla pensione di vecchiaia",
      "A un lavoro statale",
      "A nulla"
    ],
    "answer": "Al mantenimento e all'assistenza sociale"
  },
  {
    "id": 3082,
    "category": "Diritto Costituzionale",
    "question": "Ogni cittadino inabile al lavoro e sprovvisto dei mezzi necessari per vivere ha diritto (art. 38):",
    "options": [
      "Al mantenimento e all'assistenza sociale",
      "Alla pensione di vecchiaia",
      "A un lavoro statale",
      "A nulla"
    ],
    "answer": "Al mantenimento e all'assistenza sociale"
  },
  {
    "id": 3083,
    "category": "Diritto Costituzionale",
    "question": "L'organizzazione sindacale è (art. 39):",
    "options": [
      "Libera",
      "Obbligatoria",
      "Vietata",
      "Statale"
    ],
    "answer": "Libera"
  },
  {
    "id": 3083,
    "category": "Diritto Costituzionale",
    "question": "L'organizzazione sindacale è (art. 39):",
    "options": [
      "Libera",
      "Obbligatoria",
      "Vietata",
      "Statale"
    ],
    "answer": "Libera"
  },
  {
    "id": 3083,
    "category": "Diritto Costituzionale",
    "question": "L'organizzazione sindacale è (art. 39):",
    "options": [
      "Libera",
      "Obbligatoria",
      "Vietata",
      "Statale"
    ],
    "answer": "Libera"
  },
  {
    "id": 3084,
    "category": "Diritto Costituzionale",
    "question": "Ai sindacati può essere imposto altro obbligo se non la loro registrazione?",
    "options": [
      "No, salvo la registrazione presso uffici locali o centrali",
      "Sì, di non fare sciopero",
      "Sì, di essere apolitici",
      "Sì, di pagare una tassa"
    ],
    "answer": "No, salvo la registrazione presso uffici locali o centrali"
  },
  {
    "id": 3084,
    "category": "Diritto Costituzionale",
    "question": "Ai sindacati può essere imposto altro obbligo se non la loro registrazione?",
    "options": [
      "No, salvo la registrazione presso uffici locali o centrali",
      "Sì, di non fare sciopero",
      "Sì, di essere apolitici",
      "Sì, di pagare una tassa"
    ],
    "answer": "No, salvo la registrazione presso uffici locali o centrali"
  },
  {
    "id": 3084,
    "category": "Diritto Costituzionale",
    "question": "Ai sindacati può essere imposto altro obbligo se non la loro registrazione?",
    "options": [
      "No, salvo la registrazione presso uffici locali o centrali",
      "Sì, di non fare sciopero",
      "Sì, di essere apolitici",
      "Sì, di pagare una tassa"
    ],
    "answer": "No, salvo la registrazione presso uffici locali o centrali"
  },
  {
    "id": 3085,
    "category": "Diritto Costituzionale",
    "question": "Il diritto di sciopero si esercita (art. 40):",
    "options": [
      "Nell'ambito delle leggi che lo regolano",
      "Senza limiti",
      "Solo per motivi economici",
      "Solo se autorizzato dal Prefetto"
    ],
    "answer": "Nell'ambito delle leggi che lo regolano"
  },
  {
    "id": 3085,
    "category": "Diritto Costituzionale",
    "question": "Il diritto di sciopero si esercita (art. 40):",
    "options": [
      "Nell'ambito delle leggi che lo regolano",
      "Senza limiti",
      "Solo per motivi economici",
      "Solo se autorizzato dal Prefetto"
    ],
    "answer": "Nell'ambito delle leggi che lo regolano"
  },
  {
    "id": 3085,
    "category": "Diritto Costituzionale",
    "question": "Il diritto di sciopero si esercita (art. 40):",
    "options": [
      "Nell'ambito delle leggi che lo regolano",
      "Senza limiti",
      "Solo per motivi economici",
      "Solo se autorizzato dal Prefetto"
    ],
    "answer": "Nell'ambito delle leggi che lo regolano"
  },
  {
    "id": 3086,
    "category": "Diritto Costituzionale",
    "question": "L'iniziativa economica privata è (art. 41):",
    "options": [
      "Libera",
      "Vietata",
      "Riservata allo Stato",
      "Solo per le cooperative"
    ],
    "answer": "Libera"
  },
  {
    "id": 3086,
    "category": "Diritto Costituzionale",
    "question": "L'iniziativa economica privata è (art. 41):",
    "options": [
      "Libera",
      "Vietata",
      "Riservata allo Stato",
      "Solo per le cooperative"
    ],
    "answer": "Libera"
  },
  {
    "id": 3086,
    "category": "Diritto Costituzionale",
    "question": "L'iniziativa economica privata è (art. 41):",
    "options": [
      "Libera",
      "Vietata",
      "Riservata allo Stato",
      "Solo per le cooperative"
    ],
    "answer": "Libera"
  },
  {
    "id": 3087,
    "category": "Diritto Costituzionale",
    "question": "L'iniziativa economica privata non può svolgersi in contrasto con:",
    "options": [
      "L'utilità sociale o in modo da recare danno alla sicurezza, alla libertà, alla dignità umana",
      "Il profitto",
      "La concorrenza",
      "Le direttive europee"
    ],
    "answer": "L'utilità sociale o in modo da recare danno alla sicurezza, alla libertà, alla dignità umana"
  },
  {
    "id": 3087,
    "category": "Diritto Costituzionale",
    "question": "L'iniziativa economica privata non può svolgersi in contrasto con:",
    "options": [
      "L'utilità sociale o in modo da recare danno alla sicurezza, alla libertà, alla dignità umana",
      "Il profitto",
      "La concorrenza",
      "Le direttive europee"
    ],
    "answer": "L'utilità sociale o in modo da recare danno alla sicurezza, alla libertà, alla dignità umana"
  },
  {
    "id": 3087,
    "category": "Diritto Costituzionale",
    "question": "L'iniziativa economica privata non può svolgersi in contrasto con:",
    "options": [
      "L'utilità sociale o in modo da recare danno alla sicurezza, alla libertà, alla dignità umana",
      "Il profitto",
      "La concorrenza",
      "Le direttive europee"
    ],
    "answer": "L'utilità sociale o in modo da recare danno alla sicurezza, alla libertà, alla dignità umana"
  },
  {
    "id": 3088,
    "category": "Diritto Costituzionale",
    "question": "La proprietà è (art. 42):",
    "options": [
      "Pubblica o privata",
      "Solo privata",
      "Solo pubblica",
      "Solo collettiva"
    ],
    "answer": "Pubblica o privata"
  },
  {
    "id": 3088,
    "category": "Diritto Costituzionale",
    "question": "La proprietà è (art. 42):",
    "options": [
      "Pubblica o privata",
      "Solo privata",
      "Solo pubblica",
      "Solo collettiva"
    ],
    "answer": "Pubblica o privata"
  },
  {
    "id": 3088,
    "category": "Diritto Costituzionale",
    "question": "La proprietà è (art. 42):",
    "options": [
      "Pubblica o privata",
      "Solo privata",
      "Solo pubblica",
      "Solo collettiva"
    ],
    "answer": "Pubblica o privata"
  },
  {
    "id": 3089,
    "category": "Diritto Costituzionale",
    "question": "La proprietà privata può essere espropriata per motivi d'interesse generale?",
    "options": [
      "Sì, nei casi preveduti dalla legge e salvo indennizzo",
      "No, mai",
      "Sì, senza indennizzo",
      "Solo in caso di guerra"
    ],
    "answer": "Sì, nei casi preveduti dalla legge e salvo indennizzo"
  },
  {
    "id": 3089,
    "category": "Diritto Costituzionale",
    "question": "La proprietà privata può essere espropriata per motivi d'interesse generale?",
    "options": [
      "Sì, nei casi preveduti dalla legge e salvo indennizzo",
      "No, mai",
      "Sì, senza indennizzo",
      "Solo in caso di guerra"
    ],
    "answer": "Sì, nei casi preveduti dalla legge e salvo indennizzo"
  },
  {
    "id": 3089,
    "category": "Diritto Costituzionale",
    "question": "La proprietà privata può essere espropriata per motivi d'interesse generale?",
    "options": [
      "Sì, nei casi preveduti dalla legge e salvo indennizzo",
      "No, mai",
      "Sì, senza indennizzo",
      "Solo in caso di guerra"
    ],
    "answer": "Sì, nei casi preveduti dalla legge e salvo indennizzo"
  },
  {
    "id": 3090,
    "category": "Diritto Costituzionale",
    "question": "La Repubblica incoraggia e tutela (art. 47):",
    "options": [
      "Il risparmio in tutte le sue forme",
      "Il consumo",
      "L'evasione fiscale",
      "Il gioco d'azzardo"
    ],
    "answer": "Il risparmio in tutte le sue forme"
  },
  {
    "id": 3090,
    "category": "Diritto Costituzionale",
    "question": "La Repubblica incoraggia e tutela (art. 47):",
    "options": [
      "Il risparmio in tutte le sue forme",
      "Il consumo",
      "L'evasione fiscale",
      "Il gioco d'azzardo"
    ],
    "answer": "Il risparmio in tutte le sue forme"
  },
  {
    "id": 3090,
    "category": "Diritto Costituzionale",
    "question": "La Repubblica incoraggia e tutela (art. 47):",
    "options": [
      "Il risparmio in tutte le sue forme",
      "Il consumo",
      "L'evasione fiscale",
      "Il gioco d'azzardo"
    ],
    "answer": "Il risparmio in tutte le sue forme"
  },
  {
    "id": 3091,
    "category": "Diritto Costituzionale",
    "question": "Il voto è (art. 48):",
    "options": [
      "Personale ed eguale, libero e segreto",
      "Pubblico",
      "Delegabile",
      "Obbligatorio (sanzionato penalmente)"
    ],
    "answer": "Personale ed eguale, libero e segreto"
  },
  {
    "id": 3091,
    "category": "Diritto Costituzionale",
    "question": "Il voto è (art. 48):",
    "options": [
      "Personale ed eguale, libero e segreto",
      "Pubblico",
      "Delegabile",
      "Obbligatorio (sanzionato penalmente)"
    ],
    "answer": "Personale ed eguale, libero e segreto"
  },
  {
    "id": 3091,
    "category": "Diritto Costituzionale",
    "question": "Il voto è (art. 48):",
    "options": [
      "Personale ed eguale, libero e segreto",
      "Pubblico",
      "Delegabile",
      "Obbligatorio (sanzionato penalmente)"
    ],
    "answer": "Personale ed eguale, libero e segreto"
  },
  {
    "id": 3092,
    "category": "Diritto Costituzionale",
    "question": "Il diritto di voto può essere limitato?",
    "options": [
      "Sì, per incapacità civile o per effetto di sentenza penale irrevocabile o nei casi di indegnità morale indicati dalla legge",
      "No, mai",
      "Sì, per chi non paga le tasse",
      "Sì, per chi non ha la licenza media"
    ],
    "answer": "Sì, per incapacità civile o per effetto di sentenza penale irrevocabile o nei casi di indegnità morale indicati dalla legge"
  },
  {
    "id": 3092,
    "category": "Diritto Costituzionale",
    "question": "Il diritto di voto può essere limitato?",
    "options": [
      "Sì, per incapacità civile o per effetto di sentenza penale irrevocabile o nei casi di indegnità morale indicati dalla legge",
      "No, mai",
      "Sì, per chi non paga le tasse",
      "Sì, per chi non ha la licenza media"
    ],
    "answer": "Sì, per incapacità civile o per effetto di sentenza penale irrevocabile o nei casi di indegnità morale indicati dalla legge"
  },
  {
    "id": 3092,
    "category": "Diritto Costituzionale",
    "question": "Il diritto di voto può essere limitato?",
    "options": [
      "Sì, per incapacità civile o per effetto di sentenza penale irrevocabile o nei casi di indegnità morale indicati dalla legge",
      "No, mai",
      "Sì, per chi non paga le tasse",
      "Sì, per chi non ha la licenza media"
    ],
    "answer": "Sì, per incapacità civile o per effetto di sentenza penale irrevocabile o nei casi di indegnità morale indicati dalla legge"
  },
  {
    "id": 3093,
    "category": "Diritto Costituzionale",
    "question": "Tutti i cittadini hanno diritto di associarsi liberamente in partiti (art. 49) per:",
    "options": [
      "Concorrere con metodo democratico a determinare la politica nazionale",
      "Sovvertire lo Stato",
      "Fare affari",
      "Organizzare milizie"
    ],
    "answer": "Concorrere con metodo democratico a determinare la politica nazionale"
  },
  {
    "id": 3093,
    "category": "Diritto Costituzionale",
    "question": "Tutti i cittadini hanno diritto di associarsi liberamente in partiti (art. 49) per:",
    "options": [
      "Concorrere con metodo democratico a determinare la politica nazionale",
      "Sovvertire lo Stato",
      "Fare affari",
      "Organizzare milizie"
    ],
    "answer": "Concorrere con metodo democratico a determinare la politica nazionale"
  },
  {
    "id": 3093,
    "category": "Diritto Costituzionale",
    "question": "Tutti i cittadini hanno diritto di associarsi liberamente in partiti (art. 49) per:",
    "options": [
      "Concorrere con metodo democratico a determinare la politica nazionale",
      "Sovvertire lo Stato",
      "Fare affari",
      "Organizzare milizie"
    ],
    "answer": "Concorrere con metodo democratico a determinare la politica nazionale"
  },
  {
    "id": 3094,
    "category": "Diritto Costituzionale",
    "question": "Tutti i cittadini possono rivolgere petizioni alle Camere (art. 50) per:",
    "options": [
      "Chiedere provvedimenti legislativi o esporre comuni necessità",
      "Chiedere soldi",
      "Lamentarsi del Governo",
      "Chiedere lavoro"
    ],
    "answer": "Chiedere provvedimenti legislativi o esporre comuni necessità"
  },
  {
    "id": 3094,
    "category": "Diritto Costituzionale",
    "question": "Tutti i cittadini possono rivolgere petizioni alle Camere (art. 50) per:",
    "options": [
      "Chiedere provvedimenti legislativi o esporre comuni necessità",
      "Chiedere soldi",
      "Lamentarsi del Governo",
      "Chiedere lavoro"
    ],
    "answer": "Chiedere provvedimenti legislativi o esporre comuni necessità"
  },
  {
    "id": 3094,
    "category": "Diritto Costituzionale",
    "question": "Tutti i cittadini possono rivolgere petizioni alle Camere (art. 50) per:",
    "options": [
      "Chiedere provvedimenti legislativi o esporre comuni necessità",
      "Chiedere soldi",
      "Lamentarsi del Governo",
      "Chiedere lavoro"
    ],
    "answer": "Chiedere provvedimenti legislativi o esporre comuni necessità"
  },
  {
    "id": 3095,
    "category": "Diritto Costituzionale",
    "question": "La difesa della Patria è (art. 52):",
    "options": [
      "Sacro dovere del cittadino",
      "Facoltativa",
      "Solo per i militari",
      "Un obbligo solo in guerra"
    ],
    "answer": "Sacro dovere del cittadino"
  },
  {
    "id": 3095,
    "category": "Diritto Costituzionale",
    "question": "La difesa della Patria è (art. 52):",
    "options": [
      "Sacro dovere del cittadino",
      "Facoltativa",
      "Solo per i militari",
      "Un obbligo solo in guerra"
    ],
    "answer": "Sacro dovere del cittadino"
  },
  {
    "id": 3095,
    "category": "Diritto Costituzionale",
    "question": "La difesa della Patria è (art. 52):",
    "options": [
      "Sacro dovere del cittadino",
      "Facoltativa",
      "Solo per i militari",
      "Un obbligo solo in guerra"
    ],
    "answer": "Sacro dovere del cittadino"
  },
  {
    "id": 3096,
    "category": "Diritto Costituzionale",
    "question": "Tutti sono tenuti a concorrere alle spese pubbliche in ragione (art. 53):",
    "options": [
      "Della loro capacità contributiva",
      "Del loro reddito fisso",
      "Della loro età",
      "Della loro residenza"
    ],
    "answer": "Della loro capacità contributiva"
  },
  {
    "id": 3096,
    "category": "Diritto Costituzionale",
    "question": "Tutti sono tenuti a concorrere alle spese pubbliche in ragione (art. 53):",
    "options": [
      "Della loro capacità contributiva",
      "Del loro reddito fisso",
      "Della loro età",
      "Della loro residenza"
    ],
    "answer": "Della loro capacità contributiva"
  },
  {
    "id": 3096,
    "category": "Diritto Costituzionale",
    "question": "Tutti sono tenuti a concorrere alle spese pubbliche in ragione (art. 53):",
    "options": [
      "Della loro capacità contributiva",
      "Del loro reddito fisso",
      "Della loro età",
      "Della loro residenza"
    ],
    "answer": "Della loro capacità contributiva"
  },
  {
    "id": 3097,
    "category": "Diritto Costituzionale",
    "question": "Il sistema tributario è informato a criteri di:",
    "options": [
      "Progressività",
      "Proporzionalità fissa",
      "Regressività",
      "Casualità"
    ],
    "answer": "Progressività"
  },
  {
    "id": 3097,
    "category": "Diritto Costituzionale",
    "question": "Il sistema tributario è informato a criteri di:",
    "options": [
      "Progressività",
      "Proporzionalità fissa",
      "Regressività",
      "Casualità"
    ],
    "answer": "Progressività"
  },
  {
    "id": 3097,
    "category": "Diritto Costituzionale",
    "question": "Il sistema tributario è informato a criteri di:",
    "options": [
      "Progressività",
      "Proporzionalità fissa",
      "Regressività",
      "Casualità"
    ],
    "answer": "Progressività"
  },
  {
    "id": 3098,
    "category": "Diritto Costituzionale",
    "question": "Tutti i cittadini hanno il dovere di essere fedeli alla Repubblica e di osservarne la Costituzione e le leggi (art. 54)?",
    "options": [
      "Sì",
      "No, solo i dipendenti pubblici",
      "Solo i politici",
      "Solo i militari"
    ],
    "answer": "Sì"
  },
  {
    "id": 3098,
    "category": "Diritto Costituzionale",
    "question": "Tutti i cittadini hanno il dovere di essere fedeli alla Repubblica e di osservarne la Costituzione e le leggi (art. 54)?",
    "options": [
      "Sì",
      "No, solo i dipendenti pubblici",
      "Solo i politici",
      "Solo i militari"
    ],
    "answer": "Sì"
  },
  {
    "id": 3098,
    "category": "Diritto Costituzionale",
    "question": "Tutti i cittadini hanno il dovere di essere fedeli alla Repubblica e di osservarne la Costituzione e le leggi (art. 54)?",
    "options": [
      "Sì",
      "No, solo i dipendenti pubblici",
      "Solo i politici",
      "Solo i militari"
    ],
    "answer": "Sì"
  },
  {
    "id": 3099,
    "category": "Diritto Costituzionale",
    "question": "I cittadini cui sono affidate funzioni pubbliche hanno il dovere di adempierle:",
    "options": [
      "Con disciplina ed onore, prestando giuramento nei casi previsti dalla legge",
      "Come vogliono",
      "Senza giuramento",
      "Gratuitamente"
    ],
    "answer": "Con disciplina ed onore, prestando giuramento nei casi previsti dalla legge"
  },
  {
    "id": 3099,
    "category": "Diritto Costituzionale",
    "question": "I cittadini cui sono affidate funzioni pubbliche hanno il dovere di adempierle:",
    "options": [
      "Con disciplina ed onore, prestando giuramento nei casi previsti dalla legge",
      "Come vogliono",
      "Senza giuramento",
      "Gratuitamente"
    ],
    "answer": "Con disciplina ed onore, prestando giuramento nei casi previsti dalla legge"
  },
  {
    "id": 3099,
    "category": "Diritto Costituzionale",
    "question": "I cittadini cui sono affidate funzioni pubbliche hanno il dovere di adempierle:",
    "options": [
      "Con disciplina ed onore, prestando giuramento nei casi previsti dalla legge",
      "Come vogliono",
      "Senza giuramento",
      "Gratuitamente"
    ],
    "answer": "Con disciplina ed onore, prestando giuramento nei casi previsti dalla legge"
  },
  {
    "id": 3100,
    "category": "Diritto Costituzionale",
    "question": "Il Parlamento si riunisce in seduta comune dei membri delle due Camere:",
    "options": [
      "Nei soli casi stabiliti dalla Costituzione",
      "Ogni mese",
      "Per approvare tutte le leggi",
      "Mai"
    ],
    "answer": "Nei soli casi stabiliti dalla Costituzione"
  },
  {
    "id": 3100,
    "category": "Diritto Costituzionale",
    "question": "Il Parlamento si riunisce in seduta comune dei membri delle due Camere:",
    "options": [
      "Nei soli casi stabiliti dalla Costituzione",
      "Ogni mese",
      "Per approvare tutte le leggi",
      "Mai"
    ],
    "answer": "Nei soli casi stabiliti dalla Costituzione"
  },
  {
    "id": 3100,
    "category": "Diritto Costituzionale",
    "question": "Il Parlamento si riunisce in seduta comune dei membri delle due Camere:",
    "options": [
      "Nei soli casi stabiliti dalla Costituzione",
      "Ogni mese",
      "Per approvare tutte le leggi",
      "Mai"
    ],
    "answer": "Nei soli casi stabiliti dalla Costituzione"
  },
  {
    "id": 3101,
    "category": "Diritto Costituzionale",
    "question": "La giustizia è amministrata in nome (art. 101):",
    "options": [
      "Del Popolo",
      "Della Legge",
      "Del Presidente della Repubblica",
      "Di Dio"
    ],
    "answer": "Del Popolo"
  },
  {
    "id": 3101,
    "category": "Diritto Costituzionale",
    "question": "La giustizia è amministrata in nome (art. 101):",
    "options": [
      "Del Popolo",
      "Della Legge",
      "Del Presidente della Repubblica",
      "Di Dio"
    ],
    "answer": "Del Popolo"
  },
  {
    "id": 3101,
    "category": "Diritto Costituzionale",
    "question": "La giustizia è amministrata in nome (art. 101):",
    "options": [
      "Del Popolo",
      "Della Legge",
      "Del Presidente della Repubblica",
      "Di Dio"
    ],
    "answer": "Del Popolo"
  },
  {
    "id": 3102,
    "category": "Diritto Costituzionale",
    "question": "I giudici sono soggetti soltanto:",
    "options": [
      "Alla legge",
      "Al Ministro della Giustizia",
      "Al CSM",
      "Al Popolo"
    ],
    "answer": "Alla legge"
  },
  {
    "id": 3102,
    "category": "Diritto Costituzionale",
    "question": "I giudici sono soggetti soltanto:",
    "options": [
      "Alla legge",
      "Al Ministro della Giustizia",
      "Al CSM",
      "Al Popolo"
    ],
    "answer": "Alla legge"
  },
  {
    "id": 3102,
    "category": "Diritto Costituzionale",
    "question": "I giudici sono soggetti soltanto:",
    "options": [
      "Alla legge",
      "Al Ministro della Giustizia",
      "Al CSM",
      "Al Popolo"
    ],
    "answer": "Alla legge"
  },
  {
    "id": 3103,
    "category": "Diritto Costituzionale",
    "question": "La magistratura costituisce un ordine (art. 104):",
    "options": [
      "Autonomo e indipendente da ogni altro potere",
      "Dipendente dal Ministero della Giustizia",
      "Gerarchico",
      "Politico"
    ],
    "answer": "Autonomo e indipendente da ogni altro potere"
  },
  {
    "id": 3103,
    "category": "Diritto Costituzionale",
    "question": "La magistratura costituisce un ordine (art. 104):",
    "options": [
      "Autonomo e indipendente da ogni altro potere",
      "Dipendente dal Ministero della Giustizia",
      "Gerarchico",
      "Politico"
    ],
    "answer": "Autonomo e indipendente da ogni altro potere"
  },
  {
    "id": 3103,
    "category": "Diritto Costituzionale",
    "question": "La magistratura costituisce un ordine (art. 104):",
    "options": [
      "Autonomo e indipendente da ogni altro potere",
      "Dipendente dal Ministero della Giustizia",
      "Gerarchico",
      "Politico"
    ],
    "answer": "Autonomo e indipendente da ogni altro potere"
  },
  {
    "id": 3104,
    "category": "Diritto Costituzionale",
    "question": "Chi presiede il Consiglio Superiore della Magistratura (CSM)?",
    "options": [
      "Il Presidente della Repubblica",
      "Il Primo Presidente della Cassazione",
      "Il Ministro della Giustizia",
      "Un giudice eletto"
    ],
    "answer": "Il Presidente della Repubblica"
  },
  {
    "id": 3104,
    "category": "Diritto Costituzionale",
    "question": "Chi presiede il Consiglio Superiore della Magistratura (CSM)?",
    "options": [
      "Il Presidente della Repubblica",
      "Il Primo Presidente della Cassazione",
      "Il Ministro della Giustizia",
      "Un giudice eletto"
    ],
    "answer": "Il Presidente della Repubblica"
  },
  {
    "id": 3104,
    "category": "Diritto Costituzionale",
    "question": "Chi presiede il Consiglio Superiore della Magistratura (CSM)?",
    "options": [
      "Il Presidente della Repubblica",
      "Il Primo Presidente della Cassazione",
      "Il Ministro della Giustizia",
      "Un giudice eletto"
    ],
    "answer": "Il Presidente della Repubblica"
  },
  {
    "id": 3105,
    "category": "Diritto Costituzionale",
    "question": "Di cosa si occupa il CSM (art. 105)?",
    "options": [
      "Assunzioni, assegnazioni, trasferimenti, promozioni e provvedimenti disciplinari nei riguardi dei magistrati",
      "Giudicare i reati dei politici",
      "Approvare le leggi sulla giustizia",
      "Nominare il Ministro della Giustizia"
    ],
    "answer": "Assunzioni, assegnazioni, trasferimenti, promozioni e provvedimenti disciplinari nei riguardi dei magistrati"
  },
  {
    "id": 3105,
    "category": "Diritto Costituzionale",
    "question": "Di cosa si occupa il CSM (art. 105)?",
    "options": [
      "Assunzioni, assegnazioni, trasferimenti, promozioni e provvedimenti disciplinari nei riguardi dei magistrati",
      "Giudicare i reati dei politici",
      "Approvare le leggi sulla giustizia",
      "Nominare il Ministro della Giustizia"
    ],
    "answer": "Assunzioni, assegnazioni, trasferimenti, promozioni e provvedimenti disciplinari nei riguardi dei magistrati"
  },
  {
    "id": 3105,
    "category": "Diritto Costituzionale",
    "question": "Di cosa si occupa il CSM (art. 105)?",
    "options": [
      "Assunzioni, assegnazioni, trasferimenti, promozioni e provvedimenti disciplinari nei riguardi dei magistrati",
      "Giudicare i reati dei politici",
      "Approvare le leggi sulla giustizia",
      "Nominare il Ministro della Giustizia"
    ],
    "answer": "Assunzioni, assegnazioni, trasferimenti, promozioni e provvedimenti disciplinari nei riguardi dei magistrati"
  },
  {
    "id": 3106,
    "category": "Diritto Costituzionale",
    "question": "I magistrati sono inamovibili (art. 107)?",
    "options": [
      "Sì, non possono essere dispensati o sospesi dal servizio né destinati ad altre sedi o funzioni se non in seguito a decisione del CSM",
      "No, il Ministro può trasferirli quando vuole",
      "Solo quelli della Cassazione",
      "Solo dopo 10 anni di servizio"
    ],
    "answer": "Sì, non possono essere dispensati o sospesi dal servizio né destinati ad altre sedi o funzioni se non in seguito a decisione del CSM"
  },
  {
    "id": 3106,
    "category": "Diritto Costituzionale",
    "question": "I magistrati sono inamovibili (art. 107)?",
    "options": [
      "Sì, non possono essere dispensati o sospesi dal servizio né destinati ad altre sedi o funzioni se non in seguito a decisione del CSM",
      "No, il Ministro può trasferirli quando vuole",
      "Solo quelli della Cassazione",
      "Solo dopo 10 anni di servizio"
    ],
    "answer": "Sì, non possono essere dispensati o sospesi dal servizio né destinati ad altre sedi o funzioni se non in seguito a decisione del CSM"
  },
  {
    "id": 3106,
    "category": "Diritto Costituzionale",
    "question": "I magistrati sono inamovibili (art. 107)?",
    "options": [
      "Sì, non possono essere dispensati o sospesi dal servizio né destinati ad altre sedi o funzioni se non in seguito a decisione del CSM",
      "No, il Ministro può trasferirli quando vuole",
      "Solo quelli della Cassazione",
      "Solo dopo 10 anni di servizio"
    ],
    "answer": "Sì, non possono essere dispensati o sospesi dal servizio né destinati ad altre sedi o funzioni se non in seguito a decisione del CSM"
  },
  {
    "id": 3107,
    "category": "Diritto Costituzionale",
    "question": "L'autorità giudiziaria dispone direttamente della polizia giudiziaria (art. 109)?",
    "options": [
      "Sì",
      "No, deve chiedere al Prefetto",
      "Solo in caso di emergenza",
      "Solo per reati gravi"
    ],
    "answer": "Sì"
  },
  {
    "id": 3107,
    "category": "Diritto Costituzionale",
    "question": "L'autorità giudiziaria dispone direttamente della polizia giudiziaria (art. 109)?",
    "options": [
      "Sì",
      "No, deve chiedere al Prefetto",
      "Solo in caso di emergenza",
      "Solo per reati gravi"
    ],
    "answer": "Sì"
  },
  {
    "id": 3107,
    "category": "Diritto Costituzionale",
    "question": "L'autorità giudiziaria dispone direttamente della polizia giudiziaria (art. 109)?",
    "options": [
      "Sì",
      "No, deve chiedere al Prefetto",
      "Solo in caso di emergenza",
      "Solo per reati gravi"
    ],
    "answer": "Sì"
  },
  {
    "id": 3108,
    "category": "Diritto Costituzionale",
    "question": "La giurisdizione si attua mediante il giusto processo regolato (art. 111):",
    "options": [
      "Dalla legge",
      "Dal giudice",
      "Dalle parti",
      "Dal CSM"
    ],
    "answer": "Dalla legge"
  },
  {
    "id": 3108,
    "category": "Diritto Costituzionale",
    "question": "La giurisdizione si attua mediante il giusto processo regolato (art. 111):",
    "options": [
      "Dalla legge",
      "Dal giudice",
      "Dalle parti",
      "Dal CSM"
    ],
    "answer": "Dalla legge"
  },
  {
    "id": 3108,
    "category": "Diritto Costituzionale",
    "question": "La giurisdizione si attua mediante il giusto processo regolato (art. 111):",
    "options": [
      "Dalla legge",
      "Dal giudice",
      "Dalle parti",
      "Dal CSM"
    ],
    "answer": "Dalla legge"
  },
  {
    "id": 3109,
    "category": "Diritto Costituzionale",
    "question": "Nel processo penale, la legge assicura che la persona accusata di un reato:",
    "options": [
      "Sia informata riservatamente della natura e dei motivi dell'accusa nel più breve tempo possibile",
      "Sia arrestata subito",
      "Sia giudicata entro 24 ore",
      "Non possa avere un avvocato"
    ],
    "answer": "Sia informata riservatamente della natura e dei motivi dell'accusa nel più breve tempo possibile"
  },
  {
    "id": 3109,
    "category": "Diritto Costituzionale",
    "question": "Nel processo penale, la legge assicura che la persona accusata di un reato:",
    "options": [
      "Sia informata riservatamente della natura e dei motivi dell'accusa nel più breve tempo possibile",
      "Sia arrestata subito",
      "Sia giudicata entro 24 ore",
      "Non possa avere un avvocato"
    ],
    "answer": "Sia informata riservatamente della natura e dei motivi dell'accusa nel più breve tempo possibile"
  },
  {
    "id": 3109,
    "category": "Diritto Costituzionale",
    "question": "Nel processo penale, la legge assicura che la persona accusata di un reato:",
    "options": [
      "Sia informata riservatamente della natura e dei motivi dell'accusa nel più breve tempo possibile",
      "Sia arrestata subito",
      "Sia giudicata entro 24 ore",
      "Non possa avere un avvocato"
    ],
    "answer": "Sia informata riservatamente della natura e dei motivi dell'accusa nel più breve tempo possibile"
  },
  {
    "id": 3110,
    "category": "Diritto Costituzionale",
    "question": "Tutti i provvedimenti giurisdizionali devono essere motivati?",
    "options": [
      "Sì",
      "No, solo le sentenze",
      "No, solo le ordinanze",
      "Solo se richiesto dalle parti"
    ],
    "answer": "Sì"
  },
  {
    "id": 3110,
    "category": "Diritto Costituzionale",
    "question": "Tutti i provvedimenti giurisdizionali devono essere motivati?",
    "options": [
      "Sì",
      "No, solo le sentenze",
      "No, solo le ordinanze",
      "Solo se richiesto dalle parti"
    ],
    "answer": "Sì"
  },
  {
    "id": 3110,
    "category": "Diritto Costituzionale",
    "question": "Tutti i provvedimenti giurisdizionali devono essere motivati?",
    "options": [
      "Sì",
      "No, solo le sentenze",
      "No, solo le ordinanze",
      "Solo se richiesto dalle parti"
    ],
    "answer": "Sì"
  },
  {
    "id": 3111,
    "category": "Diritto Costituzionale",
    "question": "Contro le sentenze e contro i provvedimenti sulla libertà personale è sempre ammesso ricorso in Cassazione per violazione di legge?",
    "options": [
      "Sì",
      "No, mai",
      "Solo per le sentenze penali",
      "Solo se il giudice è d'accordo"
    ],
    "answer": "Sì"
  },
  {
    "id": 3111,
    "category": "Diritto Costituzionale",
    "question": "Contro le sentenze e contro i provvedimenti sulla libertà personale è sempre ammesso ricorso in Cassazione per violazione di legge?",
    "options": [
      "Sì",
      "No, mai",
      "Solo per le sentenze penali",
      "Solo se il giudice è d'accordo"
    ],
    "answer": "Sì"
  },
  {
    "id": 3111,
    "category": "Diritto Costituzionale",
    "question": "Contro le sentenze e contro i provvedimenti sulla libertà personale è sempre ammesso ricorso in Cassazione per violazione di legge?",
    "options": [
      "Sì",
      "No, mai",
      "Solo per le sentenze penali",
      "Solo se il giudice è d'accordo"
    ],
    "answer": "Sì"
  },
  {
    "id": 3112,
    "category": "Diritto Costituzionale",
    "question": "Chi è il giudice delle leggi in Italia?",
    "options": [
      "La Corte Costituzionale",
      "La Corte di Cassazione",
      "Il Consiglio di Stato",
      "Il Presidente della Repubblica"
    ],
    "answer": "La Corte Costituzionale"
  },
  {
    "id": 3112,
    "category": "Diritto Costituzionale",
    "question": "Chi è il giudice delle leggi in Italia?",
    "options": [
      "La Corte Costituzionale",
      "La Corte di Cassazione",
      "Il Consiglio di Stato",
      "Il Presidente della Repubblica"
    ],
    "answer": "La Corte Costituzionale"
  },
  {
    "id": 3112,
    "category": "Diritto Costituzionale",
    "question": "Chi è il giudice delle leggi in Italia?",
    "options": [
      "La Corte Costituzionale",
      "La Corte di Cassazione",
      "Il Consiglio di Stato",
      "Il Presidente della Repubblica"
    ],
    "answer": "La Corte Costituzionale"
  },
  {
    "id": 3113,
    "category": "Diritto Costituzionale",
    "question": "Da quanti giudici è composta la Corte Costituzionale?",
    "options": [
      "15",
      "12",
      "20",
      "9"
    ],
    "answer": "15"
  },
  {
    "id": 3113,
    "category": "Diritto Costituzionale",
    "question": "Da quanti giudici è composta la Corte Costituzionale?",
    "options": [
      "15",
      "12",
      "20",
      "9"
    ],
    "answer": "15"
  },
  {
    "id": 3113,
    "category": "Diritto Costituzionale",
    "question": "Da quanti giudici è composta la Corte Costituzionale?",
    "options": [
      "15",
      "12",
      "20",
      "9"
    ],
    "answer": "15"
  },
  {
    "id": 3114,
    "category": "Diritto Costituzionale",
    "question": "Come sono nominati i giudici della Corte Costituzionale?",
    "options": [
      "1/3 dal Presidente della Repubblica, 1/3 dal Parlamento in seduta comune, 1/3 dalle supreme magistrature ordinaria e amministrative",
      "Tutti dal Parlamento",
      "Tutti dal Presidente della Repubblica",
      "Tutti dai magistrati"
    ],
    "answer": "1/3 dal Presidente della Repubblica, 1/3 dal Parlamento in seduta comune, 1/3 dalle supreme magistrature ordinaria e amministrative"
  },
  {
    "id": 3114,
    "category": "Diritto Costituzionale",
    "question": "Come sono nominati i giudici della Corte Costituzionale?",
    "options": [
      "1/3 dal Presidente della Repubblica, 1/3 dal Parlamento in seduta comune, 1/3 dalle supreme magistrature ordinaria e amministrative",
      "Tutti dal Parlamento",
      "Tutti dal Presidente della Repubblica",
      "Tutti dai magistrati"
    ],
    "answer": "1/3 dal Presidente della Repubblica, 1/3 dal Parlamento in seduta comune, 1/3 dalle supreme magistrature ordinaria e amministrative"
  },
  {
    "id": 3114,
    "category": "Diritto Costituzionale",
    "question": "Come sono nominati i giudici della Corte Costituzionale?",
    "options": [
      "1/3 dal Presidente della Repubblica, 1/3 dal Parlamento in seduta comune, 1/3 dalle supreme magistrature ordinaria e amministrative",
      "Tutti dal Parlamento",
      "Tutti dal Presidente della Repubblica",
      "Tutti dai magistrati"
    ],
    "answer": "1/3 dal Presidente della Repubblica, 1/3 dal Parlamento in seduta comune, 1/3 dalle supreme magistrature ordinaria e amministrative"
  },
  {
    "id": 3115,
    "category": "Diritto Costituzionale",
    "question": "Quanto dura in carica un giudice costituzionale?",
    "options": [
      "9 anni",
      "7 anni",
      "5 anni",
      "A vita"
    ],
    "answer": "9 anni"
  },
  {
    "id": 3115,
    "category": "Diritto Costituzionale",
    "question": "Quanto dura in carica un giudice costituzionale?",
    "options": [
      "9 anni",
      "7 anni",
      "5 anni",
      "A vita"
    ],
    "answer": "9 anni"
  },
  {
    "id": 3115,
    "category": "Diritto Costituzionale",
    "question": "Quanto dura in carica un giudice costituzionale?",
    "options": [
      "9 anni",
      "7 anni",
      "5 anni",
      "A vita"
    ],
    "answer": "9 anni"
  },
  {
    "id": 3116,
    "category": "Diritto Costituzionale",
    "question": "I giudici della Corte Costituzionale sono rieleggibili?",
    "options": [
      "No",
      "Sì, una volta",
      "Sì, sempre",
      "Solo dopo 3 anni"
    ],
    "answer": "No"
  },
  {
    "id": 3116,
    "category": "Diritto Costituzionale",
    "question": "I giudici della Corte Costituzionale sono rieleggibili?",
    "options": [
      "No",
      "Sì, una volta",
      "Sì, sempre",
      "Solo dopo 3 anni"
    ],
    "answer": "No"
  },
  {
    "id": 3116,
    "category": "Diritto Costituzionale",
    "question": "I giudici della Corte Costituzionale sono rieleggibili?",
    "options": [
      "No",
      "Sì, una volta",
      "Sì, sempre",
      "Solo dopo 3 anni"
    ],
    "answer": "No"
  },
  {
    "id": 3117,
    "category": "Diritto Costituzionale",
    "question": "Quale funzione NON spetta alla Corte Costituzionale?",
    "options": [
      "Giudicare sui reati comuni commessi dai parlamentari",
      "Giudicare sulla legittimità costituzionale delle leggi",
      "Giudicare sui conflitti di attribuzione tra i poteri dello Stato",
      "Giudicare sulle accuse contro il Presidente della Repubblica"
    ],
    "answer": "Giudicare sui reati comuni commessi dai parlamentari"
  },
  {
    "id": 3117,
    "category": "Diritto Costituzionale",
    "question": "Quale funzione NON spetta alla Corte Costituzionale?",
    "options": [
      "Giudicare sui reati comuni commessi dai parlamentari",
      "Giudicare sulla legittimità costituzionale delle leggi",
      "Giudicare sui conflitti di attribuzione tra i poteri dello Stato",
      "Giudicare sulle accuse contro il Presidente della Repubblica"
    ],
    "answer": "Giudicare sui reati comuni commessi dai parlamentari"
  },
  {
    "id": 3117,
    "category": "Diritto Costituzionale",
    "question": "Quale funzione NON spetta alla Corte Costituzionale?",
    "options": [
      "Giudicare sui reati comuni commessi dai parlamentari",
      "Giudicare sulla legittimità costituzionale delle leggi",
      "Giudicare sui conflitti di attribuzione tra i poteri dello Stato",
      "Giudicare sulle accuse contro il Presidente della Repubblica"
    ],
    "answer": "Giudicare sui reati comuni commessi dai parlamentari"
  },
  {
    "id": 3118,
    "category": "Diritto Costituzionale",
    "question": "Quando la Corte dichiara l'illegittimità costituzionale di una norma, questa:",
    "options": [
      "Cessa di avere efficacia dal giorno successivo alla pubblicazione della decisione",
      "Cessa di avere efficacia dopo 1 anno",
      "Rimane valida per i processi in corso",
      "Viene abrogata dal Parlamento"
    ],
    "answer": "Cessa di avere efficacia dal giorno successivo alla pubblicazione della decisione"
  },
  {
    "id": 3118,
    "category": "Diritto Costituzionale",
    "question": "Quando la Corte dichiara l'illegittimità costituzionale di una norma, questa:",
    "options": [
      "Cessa di avere efficacia dal giorno successivo alla pubblicazione della decisione",
      "Cessa di avere efficacia dopo 1 anno",
      "Rimane valida per i processi in corso",
      "Viene abrogata dal Parlamento"
    ],
    "answer": "Cessa di avere efficacia dal giorno successivo alla pubblicazione della decisione"
  },
  {
    "id": 3118,
    "category": "Diritto Costituzionale",
    "question": "Quando la Corte dichiara l'illegittimità costituzionale di una norma, questa:",
    "options": [
      "Cessa di avere efficacia dal giorno successivo alla pubblicazione della decisione",
      "Cessa di avere efficacia dopo 1 anno",
      "Rimane valida per i processi in corso",
      "Viene abrogata dal Parlamento"
    ],
    "answer": "Cessa di avere efficacia dal giorno successivo alla pubblicazione della decisione"
  },
  {
    "id": 3119,
    "category": "Diritto Costituzionale",
    "question": "Contro le decisioni della Corte Costituzionale:",
    "options": [
      "Non è ammessa alcuna impugnazione",
      "È ammesso ricorso in Cassazione",
      "È ammesso ricorso al Parlamento",
      "È ammesso ricorso alla Corte Europea"
    ],
    "answer": "Non è ammessa alcuna impugnazione"
  },
  {
    "id": 3119,
    "category": "Diritto Costituzionale",
    "question": "Contro le decisioni della Corte Costituzionale:",
    "options": [
      "Non è ammessa alcuna impugnazione",
      "È ammesso ricorso in Cassazione",
      "È ammesso ricorso al Parlamento",
      "È ammesso ricorso alla Corte Europea"
    ],
    "answer": "Non è ammessa alcuna impugnazione"
  },
  {
    "id": 3119,
    "category": "Diritto Costituzionale",
    "question": "Contro le decisioni della Corte Costituzionale:",
    "options": [
      "Non è ammessa alcuna impugnazione",
      "È ammesso ricorso in Cassazione",
      "È ammesso ricorso al Parlamento",
      "È ammesso ricorso alla Corte Europea"
    ],
    "answer": "Non è ammessa alcuna impugnazione"
  },
  {
    "id": 3120,
    "category": "Diritto Costituzionale",
    "question": "Il giudizio di costituzionalità in via incidentale inizia:",
    "options": [
      "Da un processo in corso davanti a un'autorità giurisdizionale",
      "Da un ricorso diretto del cittadino",
      "Da una richiesta del Governo",
      "Da una richiesta del Parlamento"
    ],
    "answer": "Da un processo in corso davanti a un'autorità giurisdizionale"
  },
  {
    "id": 3120,
    "category": "Diritto Costituzionale",
    "question": "Il giudizio di costituzionalità in via incidentale inizia:",
    "options": [
      "Da un processo in corso davanti a un'autorità giurisdizionale",
      "Da un ricorso diretto del cittadino",
      "Da una richiesta del Governo",
      "Da una richiesta del Parlamento"
    ],
    "answer": "Da un processo in corso davanti a un'autorità giurisdizionale"
  },
  {
    "id": 3120,
    "category": "Diritto Costituzionale",
    "question": "Il giudizio di costituzionalità in via incidentale inizia:",
    "options": [
      "Da un processo in corso davanti a un'autorità giurisdizionale",
      "Da un ricorso diretto del cittadino",
      "Da una richiesta del Governo",
      "Da una richiesta del Parlamento"
    ],
    "answer": "Da un processo in corso davanti a un'autorità giurisdizionale"
  },
  {
    "id": 3121,
    "category": "Diritto Costituzionale",
    "question": "Il giudice a quo, per sollevare la questione di costituzionalità, deve accertare:",
    "options": [
      "La rilevanza e la non manifesta infondatezza",
      "Solo la rilevanza",
      "Solo la fondatezza",
      "Che la legge sia vecchia"
    ],
    "answer": "La rilevanza e la non manifesta infondatezza"
  },
  {
    "id": 3121,
    "category": "Diritto Costituzionale",
    "question": "Il giudice a quo, per sollevare la questione di costituzionalità, deve accertare:",
    "options": [
      "La rilevanza e la non manifesta infondatezza",
      "Solo la rilevanza",
      "Solo la fondatezza",
      "Che la legge sia vecchia"
    ],
    "answer": "La rilevanza e la non manifesta infondatezza"
  },
  {
    "id": 3121,
    "category": "Diritto Costituzionale",
    "question": "Il giudice a quo, per sollevare la questione di costituzionalità, deve accertare:",
    "options": [
      "La rilevanza e la non manifesta infondatezza",
      "Solo la rilevanza",
      "Solo la fondatezza",
      "Che la legge sia vecchia"
    ],
    "answer": "La rilevanza e la non manifesta infondatezza"
  },
  {
    "id": 3122,
    "category": "Diritto Costituzionale",
    "question": "Cosa significa che la questione deve essere rilevante?",
    "options": [
      "Che il giudizio non può essere definito indipendentemente dalla risoluzione della questione di legittimità costituzionale",
      "Che la questione è importante politicamente",
      "Che la legge è ingiusta",
      "Che le parti sono d'accordo"
    ],
    "answer": "Che il giudizio non può essere definito indipendentemente dalla risoluzione della questione di legittimità costituzionale"
  },
  {
    "id": 3122,
    "category": "Diritto Costituzionale",
    "question": "Cosa significa che la questione deve essere rilevante?",
    "options": [
      "Che il giudizio non può essere definito indipendentemente dalla risoluzione della questione di legittimità costituzionale",
      "Che la questione è importante politicamente",
      "Che la legge è ingiusta",
      "Che le parti sono d'accordo"
    ],
    "answer": "Che il giudizio non può essere definito indipendentemente dalla risoluzione della questione di legittimità costituzionale"
  },
  {
    "id": 3122,
    "category": "Diritto Costituzionale",
    "question": "Cosa significa che la questione deve essere rilevante?",
    "options": [
      "Che il giudizio non può essere definito indipendentemente dalla risoluzione della questione di legittimità costituzionale",
      "Che la questione è importante politicamente",
      "Che la legge è ingiusta",
      "Che le parti sono d'accordo"
    ],
    "answer": "Che il giudizio non può essere definito indipendentemente dalla risoluzione della questione di legittimità costituzionale"
  },
  {
    "id": 3123,
    "category": "Diritto Costituzionale",
    "question": "Se il giudice ritiene la questione manifestamente infondata:",
    "options": [
      "La respinge con ordinanza motivata",
      "La invia comunque alla Corte",
      "Sospende il processo",
      "Assolve l'imputato"
    ],
    "answer": "La respinge con ordinanza motivata"
  },
  {
    "id": 3123,
    "category": "Diritto Costituzionale",
    "question": "Se il giudice ritiene la questione manifestamente infondata:",
    "options": [
      "La respinge con ordinanza motivata",
      "La invia comunque alla Corte",
      "Sospende il processo",
      "Assolve l'imputato"
    ],
    "answer": "La respinge con ordinanza motivata"
  },
  {
    "id": 3123,
    "category": "Diritto Costituzionale",
    "question": "Se il giudice ritiene la questione manifestamente infondata:",
    "options": [
      "La respinge con ordinanza motivata",
      "La invia comunque alla Corte",
      "Sospende il processo",
      "Assolve l'imputato"
    ],
    "answer": "La respinge con ordinanza motivata"
  },
  {
    "id": 3124,
    "category": "Diritto Costituzionale",
    "question": "Il giudizio in via principale (o d'azione) può essere promosso:",
    "options": [
      "Dallo Stato contro una legge regionale o dalla Regione contro una legge statale o di altra Regione",
      "Dai cittadini",
      "Dai giudici",
      "Dai sindacati"
    ],
    "answer": "Dallo Stato contro una legge regionale o dalla Regione contro una legge statale o di altra Regione"
  },
  {
    "id": 3124,
    "category": "Diritto Costituzionale",
    "question": "Il giudizio in via principale (o d'azione) può essere promosso:",
    "options": [
      "Dallo Stato contro una legge regionale o dalla Regione contro una legge statale o di altra Regione",
      "Dai cittadini",
      "Dai giudici",
      "Dai sindacati"
    ],
    "answer": "Dallo Stato contro una legge regionale o dalla Regione contro una legge statale o di altra Regione"
  },
  {
    "id": 3124,
    "category": "Diritto Costituzionale",
    "question": "Il giudizio in via principale (o d'azione) può essere promosso:",
    "options": [
      "Dallo Stato contro una legge regionale o dalla Regione contro una legge statale o di altra Regione",
      "Dai cittadini",
      "Dai giudici",
      "Dai sindacati"
    ],
    "answer": "Dallo Stato contro una legge regionale o dalla Regione contro una legge statale o di altra Regione"
  },
  {
    "id": 3125,
    "category": "Diritto Costituzionale",
    "question": "Entro quanto tempo lo Stato può impugnare una legge regionale?",
    "options": [
      "Entro 60 giorni dalla pubblicazione",
      "Entro 30 giorni",
      "Entro 1 anno",
      "Senza limiti di tempo"
    ],
    "answer": "Entro 60 giorni dalla pubblicazione"
  },
  {
    "id": 3125,
    "category": "Diritto Costituzionale",
    "question": "Entro quanto tempo lo Stato può impugnare una legge regionale?",
    "options": [
      "Entro 60 giorni dalla pubblicazione",
      "Entro 30 giorni",
      "Entro 1 anno",
      "Senza limiti di tempo"
    ],
    "answer": "Entro 60 giorni dalla pubblicazione"
  },
  {
    "id": 3125,
    "category": "Diritto Costituzionale",
    "question": "Entro quanto tempo lo Stato può impugnare una legge regionale?",
    "options": [
      "Entro 60 giorni dalla pubblicazione",
      "Entro 30 giorni",
      "Entro 1 anno",
      "Senza limiti di tempo"
    ],
    "answer": "Entro 60 giorni dalla pubblicazione"
  },
  {
    "id": 3126,
    "category": "Diritto Costituzionale",
    "question": "Le sentenze di accoglimento della Corte Costituzionale hanno effetto:",
    "options": [
      "Erga omnes (per tutti)",
      "Solo tra le parti",
      "Solo per il giudice a quo",
      "Solo per il futuro"
    ],
    "answer": "Erga omnes (per tutti)"
  },
  {
    "id": 3126,
    "category": "Diritto Costituzionale",
    "question": "Le sentenze di accoglimento della Corte Costituzionale hanno effetto:",
    "options": [
      "Erga omnes (per tutti)",
      "Solo tra le parti",
      "Solo per il giudice a quo",
      "Solo per il futuro"
    ],
    "answer": "Erga omnes (per tutti)"
  },
  {
    "id": 3126,
    "category": "Diritto Costituzionale",
    "question": "Le sentenze di accoglimento della Corte Costituzionale hanno effetto:",
    "options": [
      "Erga omnes (per tutti)",
      "Solo tra le parti",
      "Solo per il giudice a quo",
      "Solo per il futuro"
    ],
    "answer": "Erga omnes (per tutti)"
  },
  {
    "id": 3127,
    "category": "Diritto Costituzionale",
    "question": "Le sentenze di rigetto della Corte Costituzionale:",
    "options": [
      "Dichiarano non fondata la questione, ma non impediscono che venga riproposta in un altro processo",
      "Dichiarano la legge legittima per sempre",
      "Hanno effetto erga omnes",
      "Abrogano la legge"
    ],
    "answer": "Dichiarano non fondata la questione, ma non impediscono che venga riproposta in un altro processo"
  },
  {
    "id": 3127,
    "category": "Diritto Costituzionale",
    "question": "Le sentenze di rigetto della Corte Costituzionale:",
    "options": [
      "Dichiarano non fondata la questione, ma non impediscono che venga riproposta in un altro processo",
      "Dichiarano la legge legittima per sempre",
      "Hanno effetto erga omnes",
      "Abrogano la legge"
    ],
    "answer": "Dichiarano non fondata la questione, ma non impediscono che venga riproposta in un altro processo"
  },
  {
    "id": 3127,
    "category": "Diritto Costituzionale",
    "question": "Le sentenze di rigetto della Corte Costituzionale:",
    "options": [
      "Dichiarano non fondata la questione, ma non impediscono che venga riproposta in un altro processo",
      "Dichiarano la legge legittima per sempre",
      "Hanno effetto erga omnes",
      "Abrogano la legge"
    ],
    "answer": "Dichiarano non fondata la questione, ma non impediscono che venga riproposta in un altro processo"
  },
  {
    "id": 3128,
    "category": "Diritto Costituzionale",
    "question": "Cosa sono le sentenze interpretative di rigetto?",
    "options": [
      "Sentenze in cui la Corte dichiara infondata la questione perché la norma può essere interpretata in modo conforme a Costituzione",
      "Sentenze che annullano la legge",
      "Sentenze che modificano il testo della legge",
      "Sentenze che rinviano al Parlamento"
    ],
    "answer": "Sentenze in cui la Corte dichiara infondata la questione perché la norma può essere interpretata in modo conforme a Costituzione"
  },
  {
    "id": 3128,
    "category": "Diritto Costituzionale",
    "question": "Cosa sono le sentenze interpretative di rigetto?",
    "options": [
      "Sentenze in cui la Corte dichiara infondata la questione perché la norma può essere interpretata in modo conforme a Costituzione",
      "Sentenze che annullano la legge",
      "Sentenze che modificano il testo della legge",
      "Sentenze che rinviano al Parlamento"
    ],
    "answer": "Sentenze in cui la Corte dichiara infondata la questione perché la norma può essere interpretata in modo conforme a Costituzione"
  },
  {
    "id": 3128,
    "category": "Diritto Costituzionale",
    "question": "Cosa sono le sentenze interpretative di rigetto?",
    "options": [
      "Sentenze in cui la Corte dichiara infondata la questione perché la norma può essere interpretata in modo conforme a Costituzione",
      "Sentenze che annullano la legge",
      "Sentenze che modificano il testo della legge",
      "Sentenze che rinviano al Parlamento"
    ],
    "answer": "Sentenze in cui la Corte dichiara infondata la questione perché la norma può essere interpretata in modo conforme a Costituzione"
  },
  {
    "id": 3129,
    "category": "Diritto Costituzionale",
    "question": "Il referendum abrogativo (art. 75) non è ammesso per:",
    "options": [
      "Leggi tributarie e di bilancio, di amnistia e di indulto, di autorizzazione a ratificare trattati internazionali",
      "Leggi elettorali",
      "Leggi costituzionali",
      "Tutte le leggi precedenti"
    ],
    "answer": "Leggi tributarie e di bilancio, di amnistia e di indulto, di autorizzazione a ratificare trattati internazionali"
  },
  {
    "id": 3129,
    "category": "Diritto Costituzionale",
    "question": "Il referendum abrogativo (art. 75) non è ammesso per:",
    "options": [
      "Leggi tributarie e di bilancio, di amnistia e di indulto, di autorizzazione a ratificare trattati internazionali",
      "Leggi elettorali",
      "Leggi costituzionali",
      "Tutte le leggi precedenti"
    ],
    "answer": "Leggi tributarie e di bilancio, di amnistia e di indulto, di autorizzazione a ratificare trattati internazionali"
  },
  {
    "id": 3129,
    "category": "Diritto Costituzionale",
    "question": "Il referendum abrogativo (art. 75) non è ammesso per:",
    "options": [
      "Leggi tributarie e di bilancio, di amnistia e di indulto, di autorizzazione a ratificare trattati internazionali",
      "Leggi elettorali",
      "Leggi costituzionali",
      "Tutte le leggi precedenti"
    ],
    "answer": "Leggi tributarie e di bilancio, di amnistia e di indulto, di autorizzazione a ratificare trattati internazionali"
  },
  {
    "id": 3130,
    "category": "Diritto Costituzionale",
    "question": "Chi giudica sull'ammissibilità del referendum abrogativo?",
    "options": [
      "La Corte Costituzionale",
      "La Corte di Cassazione",
      "Il Presidente della Repubblica",
      "Il Parlamento"
    ],
    "answer": "La Corte Costituzionale"
  },
  {
    "id": 3130,
    "category": "Diritto Costituzionale",
    "question": "Chi giudica sull'ammissibilità del referendum abrogativo?",
    "options": [
      "La Corte Costituzionale",
      "La Corte di Cassazione",
      "Il Presidente della Repubblica",
      "Il Parlamento"
    ],
    "answer": "La Corte Costituzionale"
  },
  {
    "id": 3130,
    "category": "Diritto Costituzionale",
    "question": "Chi giudica sull'ammissibilità del referendum abrogativo?",
    "options": [
      "La Corte Costituzionale",
      "La Corte di Cassazione",
      "Il Presidente della Repubblica",
      "Il Parlamento"
    ],
    "answer": "La Corte Costituzionale"
  },
  {
    "id": 3131,
    "category": "Diritto Costituzionale",
    "question": "La revisione della Costituzione (art. 138) richiede:",
    "options": [
      "Due deliberazioni successive da parte di ciascuna Camera ad intervallo non minore di tre mesi",
      "Una sola deliberazione a maggioranza semplice",
      "L'approvazione del Governo",
      "Un referendum obbligatorio"
    ],
    "answer": "Due deliberazioni successive da parte di ciascuna Camera ad intervallo non minore di tre mesi"
  },
  {
    "id": 3131,
    "category": "Diritto Costituzionale",
    "question": "La revisione della Costituzione (art. 138) richiede:",
    "options": [
      "Due deliberazioni successive da parte di ciascuna Camera ad intervallo non minore di tre mesi",
      "Una sola deliberazione a maggioranza semplice",
      "L'approvazione del Governo",
      "Un referendum obbligatorio"
    ],
    "answer": "Due deliberazioni successive da parte di ciascuna Camera ad intervallo non minore di tre mesi"
  },
  {
    "id": 3131,
    "category": "Diritto Costituzionale",
    "question": "La revisione della Costituzione (art. 138) richiede:",
    "options": [
      "Due deliberazioni successive da parte di ciascuna Camera ad intervallo non minore di tre mesi",
      "Una sola deliberazione a maggioranza semplice",
      "L'approvazione del Governo",
      "Un referendum obbligatorio"
    ],
    "answer": "Due deliberazioni successive da parte di ciascuna Camera ad intervallo non minore di tre mesi"
  },
  {
    "id": 3132,
    "category": "Diritto Costituzionale",
    "question": "Se nella seconda votazione per la revisione costituzionale si raggiunge la maggioranza dei 2/3:",
    "options": [
      "La legge è promulgata e non si fa luogo a referendum",
      "Si fa comunque il referendum",
      "La legge deve essere approvata dal Presidente",
      "La legge decade"
    ],
    "answer": "La legge è promulgata e non si fa luogo a referendum"
  },
  {
    "id": 3132,
    "category": "Diritto Costituzionale",
    "question": "Se nella seconda votazione per la revisione costituzionale si raggiunge la maggioranza dei 2/3:",
    "options": [
      "La legge è promulgata e non si fa luogo a referendum",
      "Si fa comunque il referendum",
      "La legge deve essere approvata dal Presidente",
      "La legge decade"
    ],
    "answer": "La legge è promulgata e non si fa luogo a referendum"
  },
  {
    "id": 3132,
    "category": "Diritto Costituzionale",
    "question": "Se nella seconda votazione per la revisione costituzionale si raggiunge la maggioranza dei 2/3:",
    "options": [
      "La legge è promulgata e non si fa luogo a referendum",
      "Si fa comunque il referendum",
      "La legge deve essere approvata dal Presidente",
      "La legge decade"
    ],
    "answer": "La legge è promulgata e non si fa luogo a referendum"
  },
  {
    "id": 3133,
    "category": "Diritto Costituzionale",
    "question": "La forma repubblicana può essere oggetto di revisione costituzionale (art. 139)?",
    "options": [
      "No",
      "Sì, con referendum",
      "Sì, all'unanimità",
      "Sì, dopo 50 anni"
    ],
    "answer": "No"
  },
  {
    "id": 3133,
    "category": "Diritto Costituzionale",
    "question": "La forma repubblicana può essere oggetto di revisione costituzionale (art. 139)?",
    "options": [
      "No",
      "Sì, con referendum",
      "Sì, all'unanimità",
      "Sì, dopo 50 anni"
    ],
    "answer": "No"
  },
  {
    "id": 3133,
    "category": "Diritto Costituzionale",
    "question": "La forma repubblicana può essere oggetto di revisione costituzionale (art. 139)?",
    "options": [
      "No",
      "Sì, con referendum",
      "Sì, all'unanimità",
      "Sì, dopo 50 anni"
    ],
    "answer": "No"
  },
  {
    "id": 3134,
    "category": "Diritto Costituzionale",
    "question": "Le Regioni hanno potestà legislativa (art. 117)?",
    "options": [
      "Sì, concorrente o esclusiva a seconda delle materie",
      "No, solo lo Stato fa le leggi",
      "Solo le Regioni a statuto speciale",
      "Solo su delega del Governo"
    ],
    "answer": "Sì, concorrente o esclusiva a seconda delle materie"
  },
  {
    "id": 3134,
    "category": "Diritto Costituzionale",
    "question": "Le Regioni hanno potestà legislativa (art. 117)?",
    "options": [
      "Sì, concorrente o esclusiva a seconda delle materie",
      "No, solo lo Stato fa le leggi",
      "Solo le Regioni a statuto speciale",
      "Solo su delega del Governo"
    ],
    "answer": "Sì, concorrente o esclusiva a seconda delle materie"
  },
  {
    "id": 3134,
    "category": "Diritto Costituzionale",
    "question": "Le Regioni hanno potestà legislativa (art. 117)?",
    "options": [
      "Sì, concorrente o esclusiva a seconda delle materie",
      "No, solo lo Stato fa le leggi",
      "Solo le Regioni a statuto speciale",
      "Solo su delega del Governo"
    ],
    "answer": "Sì, concorrente o esclusiva a seconda delle materie"
  },
  {
    "id": 3135,
    "category": "Diritto Costituzionale",
    "question": "Nelle materie di legislazione concorrente, allo Stato spetta:",
    "options": [
      "La determinazione dei principi fondamentali",
      "Il dettaglio della normativa",
      "Nulla",
      "L'approvazione delle leggi regionali"
    ],
    "answer": "La determinazione dei principi fondamentali"
  },
  {
    "id": 3135,
    "category": "Diritto Costituzionale",
    "question": "Nelle materie di legislazione concorrente, allo Stato spetta:",
    "options": [
      "La determinazione dei principi fondamentali",
      "Il dettaglio della normativa",
      "Nulla",
      "L'approvazione delle leggi regionali"
    ],
    "answer": "La determinazione dei principi fondamentali"
  },
  {
    "id": 3135,
    "category": "Diritto Costituzionale",
    "question": "Nelle materie di legislazione concorrente, allo Stato spetta:",
    "options": [
      "La determinazione dei principi fondamentali",
      "Il dettaglio della normativa",
      "Nulla",
      "L'approvazione delle leggi regionali"
    ],
    "answer": "La determinazione dei principi fondamentali"
  },
  {
    "id": 3136,
    "category": "Diritto Costituzionale",
    "question": "Le Regioni hanno autonomia finanziaria (art. 119)?",
    "options": [
      "Sì, di entrata e di spesa",
      "No, dipendono dallo Stato",
      "Solo di spesa",
      "Solo le Regioni ricche"
    ],
    "answer": "Sì, di entrata e di spesa"
  },
  {
    "id": 3136,
    "category": "Diritto Costituzionale",
    "question": "Le Regioni hanno autonomia finanziaria (art. 119)?",
    "options": [
      "Sì, di entrata e di spesa",
      "No, dipendono dallo Stato",
      "Solo di spesa",
      "Solo le Regioni ricche"
    ],
    "answer": "Sì, di entrata e di spesa"
  },
  {
    "id": 3136,
    "category": "Diritto Costituzionale",
    "question": "Le Regioni hanno autonomia finanziaria (art. 119)?",
    "options": [
      "Sì, di entrata e di spesa",
      "No, dipendono dallo Stato",
      "Solo di spesa",
      "Solo le Regioni ricche"
    ],
    "answer": "Sì, di entrata e di spesa"
  },
  {
    "id": 3137,
    "category": "Diritto Costituzionale",
    "question": "Il Presidente della Giunta Regionale è eletto:",
    "options": [
      "A suffragio universale e diretto, salvo che lo statuto regionale disponga diversamente",
      "Dal Consiglio Regionale",
      "Dal Governo",
      "Dai Sindaci"
    ],
    "answer": "A suffragio universale e diretto, salvo che lo statuto regionale disponga diversamente"
  },
  {
    "id": 3137,
    "category": "Diritto Costituzionale",
    "question": "Il Presidente della Giunta Regionale è eletto:",
    "options": [
      "A suffragio universale e diretto, salvo che lo statuto regionale disponga diversamente",
      "Dal Consiglio Regionale",
      "Dal Governo",
      "Dai Sindaci"
    ],
    "answer": "A suffragio universale e diretto, salvo che lo statuto regionale disponga diversamente"
  },
  {
    "id": 3137,
    "category": "Diritto Costituzionale",
    "question": "Il Presidente della Giunta Regionale è eletto:",
    "options": [
      "A suffragio universale e diretto, salvo che lo statuto regionale disponga diversamente",
      "Dal Consiglio Regionale",
      "Dal Governo",
      "Dai Sindaci"
    ],
    "answer": "A suffragio universale e diretto, salvo che lo statuto regionale disponga diversamente"
  },
  {
    "id": 3138,
    "category": "Diritto Costituzionale",
    "question": "Il Governo può sostituirsi a organi delle Regioni, delle Città metropolitane, delle Province e dei Comuni (art. 120)?",
    "options": [
      "Sì, nel caso di mancato rispetto di norme e trattati internazionali o della normativa comunitaria oppure di pericolo grave per l'incolumità e la sicurezza pubblica",
      "No, mai",
      "Sì, sempre se non è d'accordo",
      "Solo se lo chiede il Prefetto"
    ],
    "answer": "Sì, nel caso di mancato rispetto di norme e trattati internazionali o della normativa comunitaria oppure di pericolo grave per l'incolumità e la sicurezza pubblica"
  },
  {
    "id": 3138,
    "category": "Diritto Costituzionale",
    "question": "Il Governo può sostituirsi a organi delle Regioni, delle Città metropolitane, delle Province e dei Comuni (art. 120)?",
    "options": [
      "Sì, nel caso di mancato rispetto di norme e trattati internazionali o della normativa comunitaria oppure di pericolo grave per l'incolumità e la sicurezza pubblica",
      "No, mai",
      "Sì, sempre se non è d'accordo",
      "Solo se lo chiede il Prefetto"
    ],
    "answer": "Sì, nel caso di mancato rispetto di norme e trattati internazionali o della normativa comunitaria oppure di pericolo grave per l'incolumità e la sicurezza pubblica"
  },
  {
    "id": 3138,
    "category": "Diritto Costituzionale",
    "question": "Il Governo può sostituirsi a organi delle Regioni, delle Città metropolitane, delle Province e dei Comuni (art. 120)?",
    "options": [
      "Sì, nel caso di mancato rispetto di norme e trattati internazionali o della normativa comunitaria oppure di pericolo grave per l'incolumità e la sicurezza pubblica",
      "No, mai",
      "Sì, sempre se non è d'accordo",
      "Solo se lo chiede il Prefetto"
    ],
    "answer": "Sì, nel caso di mancato rispetto di norme e trattati internazionali o della normativa comunitaria oppure di pericolo grave per l'incolumità e la sicurezza pubblica"
  },
  {
    "id": 3139,
    "category": "Diritto Costituzionale",
    "question": "I Comuni, le Province e le Città metropolitane sono (art. 114):",
    "options": [
      "Enti autonomi con propri statuti, poteri e funzioni",
      "Organi dello Stato",
      "Uffici del Governo",
      "Enti privati"
    ],
    "answer": "Enti autonomi con propri statuti, poteri e funzioni"
  },
  {
    "id": 3139,
    "category": "Diritto Costituzionale",
    "question": "I Comuni, le Province e le Città metropolitane sono (art. 114):",
    "options": [
      "Enti autonomi con propri statuti, poteri e funzioni",
      "Organi dello Stato",
      "Uffici del Governo",
      "Enti privati"
    ],
    "answer": "Enti autonomi con propri statuti, poteri e funzioni"
  },
  {
    "id": 3139,
    "category": "Diritto Costituzionale",
    "question": "I Comuni, le Province e le Città metropolitane sono (art. 114):",
    "options": [
      "Enti autonomi con propri statuti, poteri e funzioni",
      "Organi dello Stato",
      "Uffici del Governo",
      "Enti privati"
    ],
    "answer": "Enti autonomi con propri statuti, poteri e funzioni"
  },
  {
    "id": 3140,
    "category": "Diritto Costituzionale",
    "question": "La potestà regolamentare spetta allo Stato:",
    "options": [
      "Nelle materie di legislazione esclusiva, salva delega alle Regioni",
      "In tutte le materie",
      "Mai",
      "Solo in caso di guerra"
    ],
    "answer": "Nelle materie di legislazione esclusiva, salva delega alle Regioni"
  },
  {
    "id": 3140,
    "category": "Diritto Costituzionale",
    "question": "La potestà regolamentare spetta allo Stato:",
    "options": [
      "Nelle materie di legislazione esclusiva, salva delega alle Regioni",
      "In tutte le materie",
      "Mai",
      "Solo in caso di guerra"
    ],
    "answer": "Nelle materie di legislazione esclusiva, salva delega alle Regioni"
  },
  {
    "id": 3140,
    "category": "Diritto Costituzionale",
    "question": "La potestà regolamentare spetta allo Stato:",
    "options": [
      "Nelle materie di legislazione esclusiva, salva delega alle Regioni",
      "In tutte le materie",
      "Mai",
      "Solo in caso di guerra"
    ],
    "answer": "Nelle materie di legislazione esclusiva, salva delega alle Regioni"
  },
  {
    "id": 3141,
    "category": "Diritto Costituzionale",
    "question": "Alle Regioni spetta la potestà regolamentare:",
    "options": [
      "In ogni altra materia (non esclusiva statale)",
      "Solo se autorizzate",
      "Mai",
      "Solo per l'organizzazione interna"
    ],
    "answer": "In ogni altra materia (non esclusiva statale)"
  },
  {
    "id": 3141,
    "category": "Diritto Costituzionale",
    "question": "Alle Regioni spetta la potestà regolamentare:",
    "options": [
      "In ogni altra materia (non esclusiva statale)",
      "Solo se autorizzate",
      "Mai",
      "Solo per l'organizzazione interna"
    ],
    "answer": "In ogni altra materia (non esclusiva statale)"
  },
  {
    "id": 3141,
    "category": "Diritto Costituzionale",
    "question": "Alle Regioni spetta la potestà regolamentare:",
    "options": [
      "In ogni altra materia (non esclusiva statale)",
      "Solo se autorizzate",
      "Mai",
      "Solo per l'organizzazione interna"
    ],
    "answer": "In ogni altra materia (non esclusiva statale)"
  },
  {
    "id": 3142,
    "category": "Diritto Costituzionale",
    "question": "I Comuni, le Province e le Città metropolitane hanno potestà regolamentare?",
    "options": [
      "Sì, in ordine alla disciplina dell'organizzazione e dello svolgimento delle funzioni loro attribuite",
      "No",
      "Solo i Comuni capoluogo",
      "Solo le Province"
    ],
    "answer": "Sì, in ordine alla disciplina dell'organizzazione e dello svolgimento delle funzioni loro attribuite"
  },
  {
    "id": 3142,
    "category": "Diritto Costituzionale",
    "question": "I Comuni, le Province e le Città metropolitane hanno potestà regolamentare?",
    "options": [
      "Sì, in ordine alla disciplina dell'organizzazione e dello svolgimento delle funzioni loro attribuite",
      "No",
      "Solo i Comuni capoluogo",
      "Solo le Province"
    ],
    "answer": "Sì, in ordine alla disciplina dell'organizzazione e dello svolgimento delle funzioni loro attribuite"
  },
  {
    "id": 3142,
    "category": "Diritto Costituzionale",
    "question": "I Comuni, le Province e le Città metropolitane hanno potestà regolamentare?",
    "options": [
      "Sì, in ordine alla disciplina dell'organizzazione e dello svolgimento delle funzioni loro attribuite",
      "No",
      "Solo i Comuni capoluogo",
      "Solo le Province"
    ],
    "answer": "Sì, in ordine alla disciplina dell'organizzazione e dello svolgimento delle funzioni loro attribuite"
  },
  {
    "id": 3143,
    "category": "Diritto Costituzionale",
    "question": "Il principio di sussidiarietà (art. 118) implica che:",
    "options": [
      "Le funzioni amministrative sono attribuite ai Comuni salvo che, per assicurarne l'esercizio unitario, siano conferite a Province, Città metropolitane, Regioni e Stato",
      "Tutto deve fare lo Stato",
      "Tutto devono fare le Regioni",
      "I privati devono gestire tutto"
    ],
    "answer": "Le funzioni amministrative sono attribuite ai Comuni salvo che, per assicurarne l'esercizio unitario, siano conferite a Province, Città metropolitane, Regioni e Stato"
  },
  {
    "id": 3143,
    "category": "Diritto Costituzionale",
    "question": "Il principio di sussidiarietà (art. 118) implica che:",
    "options": [
      "Le funzioni amministrative sono attribuite ai Comuni salvo che, per assicurarne l'esercizio unitario, siano conferite a Province, Città metropolitane, Regioni e Stato",
      "Tutto deve fare lo Stato",
      "Tutto devono fare le Regioni",
      "I privati devono gestire tutto"
    ],
    "answer": "Le funzioni amministrative sono attribuite ai Comuni salvo che, per assicurarne l'esercizio unitario, siano conferite a Province, Città metropolitane, Regioni e Stato"
  },
  {
    "id": 3143,
    "category": "Diritto Costituzionale",
    "question": "Il principio di sussidiarietà (art. 118) implica che:",
    "options": [
      "Le funzioni amministrative sono attribuite ai Comuni salvo che, per assicurarne l'esercizio unitario, siano conferite a Province, Città metropolitane, Regioni e Stato",
      "Tutto deve fare lo Stato",
      "Tutto devono fare le Regioni",
      "I privati devono gestire tutto"
    ],
    "answer": "Le funzioni amministrative sono attribuite ai Comuni salvo che, per assicurarne l'esercizio unitario, siano conferite a Province, Città metropolitane, Regioni e Stato"
  },
  {
    "id": 3144,
    "category": "Diritto Costituzionale",
    "question": "Stato, Regioni, Città metropolitane, Province e Comuni favoriscono l'autonoma iniziativa dei cittadini, singoli e associati, per lo svolgimento di attività di interesse generale. Questo è il principio di:",
    "options": [
      "Sussidiarietà orizzontale",
      "Sussidiarietà verticale",
      "Decentramento",
      "Autonomia"
    ],
    "answer": "Sussidiarietà orizzontale"
  },
  {
    "id": 3144,
    "category": "Diritto Costituzionale",
    "question": "Stato, Regioni, Città metropolitane, Province e Comuni favoriscono l'autonoma iniziativa dei cittadini, singoli e associati, per lo svolgimento di attività di interesse generale. Questo è il principio di:",
    "options": [
      "Sussidiarietà orizzontale",
      "Sussidiarietà verticale",
      "Decentramento",
      "Autonomia"
    ],
    "answer": "Sussidiarietà orizzontale"
  },
  {
    "id": 3144,
    "category": "Diritto Costituzionale",
    "question": "Stato, Regioni, Città metropolitane, Province e Comuni favoriscono l'autonoma iniziativa dei cittadini, singoli e associati, per lo svolgimento di attività di interesse generale. Questo è il principio di:",
    "options": [
      "Sussidiarietà orizzontale",
      "Sussidiarietà verticale",
      "Decentramento",
      "Autonomia"
    ],
    "answer": "Sussidiarietà orizzontale"
  },
  {
    "id": 3145,
    "category": "Diritto Costituzionale",
    "question": "Il Consiglio di Stato è (art. 100):",
    "options": [
      "Organo di consulenza giuridico-amministrativa e di tutela della giustizia nell'amministrazione",
      "Organo legislativo",
      "Organo di governo",
      "Organo di polizia"
    ],
    "answer": "Organo di consulenza giuridico-amministrativa e di tutela della giustizia nell'amministrazione"
  },
  {
    "id": 3145,
    "category": "Diritto Costituzionale",
    "question": "Il Consiglio di Stato è (art. 100):",
    "options": [
      "Organo di consulenza giuridico-amministrativa e di tutela della giustizia nell'amministrazione",
      "Organo legislativo",
      "Organo di governo",
      "Organo di polizia"
    ],
    "answer": "Organo di consulenza giuridico-amministrativa e di tutela della giustizia nell'amministrazione"
  },
  {
    "id": 3145,
    "category": "Diritto Costituzionale",
    "question": "Il Consiglio di Stato è (art. 100):",
    "options": [
      "Organo di consulenza giuridico-amministrativa e di tutela della giustizia nell'amministrazione",
      "Organo legislativo",
      "Organo di governo",
      "Organo di polizia"
    ],
    "answer": "Organo di consulenza giuridico-amministrativa e di tutela della giustizia nell'amministrazione"
  },
  {
    "id": 3146,
    "category": "Diritto Costituzionale",
    "question": "La Corte dei conti esercita (art. 100):",
    "options": [
      "Il controllo preventivo di legittimità sugli atti del Governo e quello successivo sulla gestione del bilancio dello Stato",
      "Il potere legislativo",
      "Il potere esecutivo",
      "Il potere di grazia"
    ],
    "answer": "Il controllo preventivo di legittimità sugli atti del Governo e quello successivo sulla gestione del bilancio dello Stato"
  },
  {
    "id": 3146,
    "category": "Diritto Costituzionale",
    "question": "La Corte dei conti esercita (art. 100):",
    "options": [
      "Il controllo preventivo di legittimità sugli atti del Governo e quello successivo sulla gestione del bilancio dello Stato",
      "Il potere legislativo",
      "Il potere esecutivo",
      "Il potere di grazia"
    ],
    "answer": "Il controllo preventivo di legittimità sugli atti del Governo e quello successivo sulla gestione del bilancio dello Stato"
  },
  {
    "id": 3146,
    "category": "Diritto Costituzionale",
    "question": "La Corte dei conti esercita (art. 100):",
    "options": [
      "Il controllo preventivo di legittimità sugli atti del Governo e quello successivo sulla gestione del bilancio dello Stato",
      "Il potere legislativo",
      "Il potere esecutivo",
      "Il potere di grazia"
    ],
    "answer": "Il controllo preventivo di legittimità sugli atti del Governo e quello successivo sulla gestione del bilancio dello Stato"
  },
  {
    "id": 3147,
    "category": "Diritto Costituzionale",
    "question": "Il CNEL (Consiglio Nazionale dell'Economia e del Lavoro) ha iniziativa legislativa (art. 99)?",
    "options": [
      "Sì",
      "No",
      "Solo in materia economica",
      "Solo se richiesto dal Governo"
    ],
    "answer": "Sì"
  },
  {
    "id": 3147,
    "category": "Diritto Costituzionale",
    "question": "Il CNEL (Consiglio Nazionale dell'Economia e del Lavoro) ha iniziativa legislativa (art. 99)?",
    "options": [
      "Sì",
      "No",
      "Solo in materia economica",
      "Solo se richiesto dal Governo"
    ],
    "answer": "Sì"
  },
  {
    "id": 3147,
    "category": "Diritto Costituzionale",
    "question": "Il CNEL (Consiglio Nazionale dell'Economia e del Lavoro) ha iniziativa legislativa (art. 99)?",
    "options": [
      "Sì",
      "No",
      "Solo in materia economica",
      "Solo se richiesto dal Governo"
    ],
    "answer": "Sì"
  },
  {
    "id": 3148,
    "category": "Diritto Costituzionale",
    "question": "L'Italia ripudia la guerra (art. 11):",
    "options": [
      "Come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali",
      "Sempre e comunque",
      "Mai",
      "Solo se non provocata"
    ],
    "answer": "Come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali"
  },
  {
    "id": 3148,
    "category": "Diritto Costituzionale",
    "question": "L'Italia ripudia la guerra (art. 11):",
    "options": [
      "Come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali",
      "Sempre e comunque",
      "Mai",
      "Solo se non provocata"
    ],
    "answer": "Come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali"
  },
  {
    "id": 3148,
    "category": "Diritto Costituzionale",
    "question": "L'Italia ripudia la guerra (art. 11):",
    "options": [
      "Come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali",
      "Sempre e comunque",
      "Mai",
      "Solo se non provocata"
    ],
    "answer": "Come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali"
  },
  {
    "id": 3149,
    "category": "Diritto Costituzionale",
    "question": "L'ordinamento giuridico italiano si conforma (art. 10):",
    "options": [
      "Alle norme del diritto internazionale generalmente riconosciute",
      "Alle leggi americane",
      "Alle leggi francesi",
      "Solo alle leggi interne"
    ],
    "answer": "Alle norme del diritto internazionale generalmente riconosciute"
  },
  {
    "id": 3149,
    "category": "Diritto Costituzionale",
    "question": "L'ordinamento giuridico italiano si conforma (art. 10):",
    "options": [
      "Alle norme del diritto internazionale generalmente riconosciute",
      "Alle leggi americane",
      "Alle leggi francesi",
      "Solo alle leggi interne"
    ],
    "answer": "Alle norme del diritto internazionale generalmente riconosciute"
  },
  {
    "id": 3149,
    "category": "Diritto Costituzionale",
    "question": "L'ordinamento giuridico italiano si conforma (art. 10):",
    "options": [
      "Alle norme del diritto internazionale generalmente riconosciute",
      "Alle leggi americane",
      "Alle leggi francesi",
      "Solo alle leggi interne"
    ],
    "answer": "Alle norme del diritto internazionale generalmente riconosciute"
  },
  {
    "id": 3150,
    "category": "Diritto Costituzionale",
    "question": "La condizione giuridica dello straniero è regolata (art. 10):",
    "options": [
      "Dalla legge in conformità delle norme e dei trattati internazionali",
      "Dal Prefetto",
      "Dal Questore",
      "Dal Sindaco"
    ],
    "answer": "Dalla legge in conformità delle norme e dei trattati internazionali"
  },
  {
    "id": 3150,
    "category": "Diritto Costituzionale",
    "question": "La condizione giuridica dello straniero è regolata (art. 10):",
    "options": [
      "Dalla legge in conformità delle norme e dei trattati internazionali",
      "Dal Prefetto",
      "Dal Questore",
      "Dal Sindaco"
    ],
    "answer": "Dalla legge in conformità delle norme e dei trattati internazionali"
  },
  {
    "id": 3150,
    "category": "Diritto Costituzionale",
    "question": "La condizione giuridica dello straniero è regolata (art. 10):",
    "options": [
      "Dalla legge in conformità delle norme e dei trattati internazionali",
      "Dal Prefetto",
      "Dal Questore",
      "Dal Sindaco"
    ],
    "answer": "Dalla legge in conformità delle norme e dei trattati internazionali"
  },
  {
    "id": 4001,
    "category": "Procedura Penale",
    "question": "Qual è lo scopo del processo penale?",
    "options": [
      "Accertare se una persona ha commesso un reato, la personalità dell'autore e le sanzioni da applicare",
      "Punire sempre l'indagato",
      "Risarcire la vittima civilmente",
      "Creare nuove leggi penali"
    ],
    "answer": "Accertare se una persona ha commesso un reato, la personalità dell'autore e le sanzioni da applicare"
  },
  {
    "id": 4001,
    "category": "Procedura Penale",
    "question": "Qual è lo scopo del processo penale?",
    "options": [
      "Accertare se una persona ha commesso un reato, la personalità dell'autore e le sanzioni da applicare",
      "Punire sempre l'indagato",
      "Risarcire la vittima civilmente",
      "Creare nuove leggi penali"
    ],
    "answer": "Accertare se una persona ha commesso un reato, la personalità dell'autore e le sanzioni da applicare"
  },
  {
    "id": 4001,
    "category": "Procedura Penale",
    "question": "Qual è lo scopo del processo penale?",
    "options": [
      "Accertare se una persona ha commesso un reato, la personalità dell'autore e le sanzioni da applicare",
      "Punire sempre l'indagato",
      "Risarcire la vittima civilmente",
      "Creare nuove leggi penali"
    ],
    "answer": "Accertare se una persona ha commesso un reato, la personalità dell'autore e le sanzioni da applicare"
  },
  {
    "id": 4002,
    "category": "Procedura Penale",
    "question": "Cosa si intende per 'procedimento penale' in senso ampio?",
    "options": [
      "Una serie cronologicamente ordinata di atti diretti alla pronuncia di una decisione penale",
      "Solo la fase del dibattimento",
      "Solo la fase delle indagini",
      "L'arresto del colpevole"
    ],
    "answer": "Una serie cronologicamente ordinata di atti diretti alla pronuncia di una decisione penale"
  },
  {
    "id": 4002,
    "category": "Procedura Penale",
    "question": "Cosa si intende per 'procedimento penale' in senso ampio?",
    "options": [
      "Una serie cronologicamente ordinata di atti diretti alla pronuncia di una decisione penale",
      "Solo la fase del dibattimento",
      "Solo la fase delle indagini",
      "L'arresto del colpevole"
    ],
    "answer": "Una serie cronologicamente ordinata di atti diretti alla pronuncia di una decisione penale"
  },
  {
    "id": 4002,
    "category": "Procedura Penale",
    "question": "Cosa si intende per 'procedimento penale' in senso ampio?",
    "options": [
      "Una serie cronologicamente ordinata di atti diretti alla pronuncia di una decisione penale",
      "Solo la fase del dibattimento",
      "Solo la fase delle indagini",
      "L'arresto del colpevole"
    ],
    "answer": "Una serie cronologicamente ordinata di atti diretti alla pronuncia di una decisione penale"
  },
  {
    "id": 4003,
    "category": "Procedura Penale",
    "question": "Qual è la differenza tra procedimento e processo penale?",
    "options": [
      "Il procedimento inizia con la notizia di reato, il processo inizia con l'esercizio dell'azione penale",
      "Sono sinonimi",
      "Il processo viene prima del procedimento",
      "Il procedimento è solo civile"
    ],
    "answer": "Il procedimento inizia con la notizia di reato, il processo inizia con l'esercizio dell'azione penale"
  },
  {
    "id": 4003,
    "category": "Procedura Penale",
    "question": "Qual è la differenza tra procedimento e processo penale?",
    "options": [
      "Il procedimento inizia con la notizia di reato, il processo inizia con l'esercizio dell'azione penale",
      "Sono sinonimi",
      "Il processo viene prima del procedimento",
      "Il procedimento è solo civile"
    ],
    "answer": "Il procedimento inizia con la notizia di reato, il processo inizia con l'esercizio dell'azione penale"
  },
  {
    "id": 4003,
    "category": "Procedura Penale",
    "question": "Qual è la differenza tra procedimento e processo penale?",
    "options": [
      "Il procedimento inizia con la notizia di reato, il processo inizia con l'esercizio dell'azione penale",
      "Sono sinonimi",
      "Il processo viene prima del procedimento",
      "Il procedimento è solo civile"
    ],
    "answer": "Il procedimento inizia con la notizia di reato, il processo inizia con l'esercizio dell'azione penale"
  },
  {
    "id": 4004,
    "category": "Procedura Penale",
    "question": "Come si chiama il soggetto nei cui confronti si svolgono le indagini preliminari?",
    "options": [
      "Indagato (o persona sottoposta alle indagini)",
      "Imputato",
      "Condannato",
      "Reo"
    ],
    "answer": "Indagato (o persona sottoposta alle indagini)"
  },
  {
    "id": 4004,
    "category": "Procedura Penale",
    "question": "Come si chiama il soggetto nei cui confronti si svolgono le indagini preliminari?",
    "options": [
      "Indagato (o persona sottoposta alle indagini)",
      "Imputato",
      "Condannato",
      "Reo"
    ],
    "answer": "Indagato (o persona sottoposta alle indagini)"
  },
  {
    "id": 4004,
    "category": "Procedura Penale",
    "question": "Come si chiama il soggetto nei cui confronti si svolgono le indagini preliminari?",
    "options": [
      "Indagato (o persona sottoposta alle indagini)",
      "Imputato",
      "Condannato",
      "Reo"
    ],
    "answer": "Indagato (o persona sottoposta alle indagini)"
  },
  {
    "id": 4005,
    "category": "Procedura Penale",
    "question": "Quando l'indagato assume la qualità di imputato?",
    "options": [
      "Con l'esercizio dell'azione penale (es. richiesta di rinvio a giudizio)",
      "Con l'iscrizione nel registro notizie di reato",
      "Con l'arresto",
      "Con la sentenza di condanna"
    ],
    "answer": "Con l'esercizio dell'azione penale (es. richiesta di rinvio a giudizio)"
  },
  {
    "id": 4005,
    "category": "Procedura Penale",
    "question": "Quando l'indagato assume la qualità di imputato?",
    "options": [
      "Con l'esercizio dell'azione penale (es. richiesta di rinvio a giudizio)",
      "Con l'iscrizione nel registro notizie di reato",
      "Con l'arresto",
      "Con la sentenza di condanna"
    ],
    "answer": "Con l'esercizio dell'azione penale (es. richiesta di rinvio a giudizio)"
  },
  {
    "id": 4005,
    "category": "Procedura Penale",
    "question": "Quando l'indagato assume la qualità di imputato?",
    "options": [
      "Con l'esercizio dell'azione penale (es. richiesta di rinvio a giudizio)",
      "Con l'iscrizione nel registro notizie di reato",
      "Con l'arresto",
      "Con la sentenza di condanna"
    ],
    "answer": "Con l'esercizio dell'azione penale (es. richiesta di rinvio a giudizio)"
  },
  {
    "id": 4006,
    "category": "Procedura Penale",
    "question": "Chi è il dominus delle indagini preliminari?",
    "options": [
      "Il Pubblico Ministero (P.M.)",
      "Il Giudice per le Indagini Preliminari (G.I.P.)",
      "La Polizia Giudiziaria",
      "Il Difensore"
    ],
    "answer": "Il Pubblico Ministero (P.M.)"
  },
  {
    "id": 4006,
    "category": "Procedura Penale",
    "question": "Chi è il dominus delle indagini preliminari?",
    "options": [
      "Il Pubblico Ministero (P.M.)",
      "Il Giudice per le Indagini Preliminari (G.I.P.)",
      "La Polizia Giudiziaria",
      "Il Difensore"
    ],
    "answer": "Il Pubblico Ministero (P.M.)"
  },
  {
    "id": 4006,
    "category": "Procedura Penale",
    "question": "Chi è il dominus delle indagini preliminari?",
    "options": [
      "Il Pubblico Ministero (P.M.)",
      "Il Giudice per le Indagini Preliminari (G.I.P.)",
      "La Polizia Giudiziaria",
      "Il Difensore"
    ],
    "answer": "Il Pubblico Ministero (P.M.)"
  },
  {
    "id": 4007,
    "category": "Procedura Penale",
    "question": "Qual è la funzione del G.I.P. (Giudice per le Indagini Preliminari)?",
    "options": [
      "Esercitare una funzione di garanzia e controllo sui provvedimenti più importanti (es. misure cautelari)",
      "Svolgere le indagini",
      "Arrestare i colpevoli",
      "Difendere l'indagato"
    ],
    "answer": "Esercitare una funzione di garanzia e controllo sui provvedimenti più importanti (es. misure cautelari)"
  },
  {
    "id": 4007,
    "category": "Procedura Penale",
    "question": "Qual è la funzione del G.I.P. (Giudice per le Indagini Preliminari)?",
    "options": [
      "Esercitare una funzione di garanzia e controllo sui provvedimenti più importanti (es. misure cautelari)",
      "Svolgere le indagini",
      "Arrestare i colpevoli",
      "Difendere l'indagato"
    ],
    "answer": "Esercitare una funzione di garanzia e controllo sui provvedimenti più importanti (es. misure cautelari)"
  },
  {
    "id": 4007,
    "category": "Procedura Penale",
    "question": "Qual è la funzione del G.I.P. (Giudice per le Indagini Preliminari)?",
    "options": [
      "Esercitare una funzione di garanzia e controllo sui provvedimenti più importanti (es. misure cautelari)",
      "Svolgere le indagini",
      "Arrestare i colpevoli",
      "Difendere l'indagato"
    ],
    "answer": "Esercitare una funzione di garanzia e controllo sui provvedimenti più importanti (es. misure cautelari)"
  },
  {
    "id": 4008,
    "category": "Procedura Penale",
    "question": "Cosa succede se il P.M. ritiene infondata la notizia di reato al termine delle indagini?",
    "options": [
      "Chiede al G.I.P. l'archiviazione",
      "Esercita l'azione penale comunque",
      "Assolve l'indagato",
      "Condanna l'indagato"
    ],
    "answer": "Chiede al G.I.P. l'archiviazione"
  },
  {
    "id": 4008,
    "category": "Procedura Penale",
    "question": "Cosa succede se il P.M. ritiene infondata la notizia di reato al termine delle indagini?",
    "options": [
      "Chiede al G.I.P. l'archiviazione",
      "Esercita l'azione penale comunque",
      "Assolve l'indagato",
      "Condanna l'indagato"
    ],
    "answer": "Chiede al G.I.P. l'archiviazione"
  },
  {
    "id": 4008,
    "category": "Procedura Penale",
    "question": "Cosa succede se il P.M. ritiene infondata la notizia di reato al termine delle indagini?",
    "options": [
      "Chiede al G.I.P. l'archiviazione",
      "Esercita l'azione penale comunque",
      "Assolve l'indagato",
      "Condanna l'indagato"
    ],
    "answer": "Chiede al G.I.P. l'archiviazione"
  },
  {
    "id": 4009,
    "category": "Procedura Penale",
    "question": "L'azione penale è obbligatoria (art. 112 Cost.)?",
    "options": [
      "Sì, il P.M. è tenuto ad esercitarla se non deve chiedere l'archiviazione",
      "No, è discrezionale",
      "Solo per i reati gravi",
      "Solo se c'è la querela"
    ],
    "answer": "Sì, il P.M. è tenuto ad esercitarla se non deve chiedere l'archiviazione"
  },
  {
    "id": 4009,
    "category": "Procedura Penale",
    "question": "L'azione penale è obbligatoria (art. 112 Cost.)?",
    "options": [
      "Sì, il P.M. è tenuto ad esercitarla se non deve chiedere l'archiviazione",
      "No, è discrezionale",
      "Solo per i reati gravi",
      "Solo se c'è la querela"
    ],
    "answer": "Sì, il P.M. è tenuto ad esercitarla se non deve chiedere l'archiviazione"
  },
  {
    "id": 4009,
    "category": "Procedura Penale",
    "question": "L'azione penale è obbligatoria (art. 112 Cost.)?",
    "options": [
      "Sì, il P.M. è tenuto ad esercitarla se non deve chiedere l'archiviazione",
      "No, è discrezionale",
      "Solo per i reati gravi",
      "Solo se c'è la querela"
    ],
    "answer": "Sì, il P.M. è tenuto ad esercitarla se non deve chiedere l'archiviazione"
  },
  {
    "id": 4010,
    "category": "Procedura Penale",
    "question": "Cos'è l'udienza preliminare?",
    "options": [
      "Un'udienza-filtro in cui il G.U.P. decide se rinviare a giudizio l'imputato o emettere sentenza di non luogo a procedere",
      "La prima udienza del dibattimento",
      "L'udienza per la convalida dell'arresto",
      "L'udienza finale del processo"
    ],
    "answer": "Un'udienza-filtro in cui il G.U.P. decide se rinviare a giudizio l'imputato o emettere sentenza di non luogo a procedere"
  },
  {
    "id": 4010,
    "category": "Procedura Penale",
    "question": "Cos'è l'udienza preliminare?",
    "options": [
      "Un'udienza-filtro in cui il G.U.P. decide se rinviare a giudizio l'imputato o emettere sentenza di non luogo a procedere",
      "La prima udienza del dibattimento",
      "L'udienza per la convalida dell'arresto",
      "L'udienza finale del processo"
    ],
    "answer": "Un'udienza-filtro in cui il G.U.P. decide se rinviare a giudizio l'imputato o emettere sentenza di non luogo a procedere"
  },
  {
    "id": 4010,
    "category": "Procedura Penale",
    "question": "Cos'è l'udienza preliminare?",
    "options": [
      "Un'udienza-filtro in cui il G.U.P. decide se rinviare a giudizio l'imputato o emettere sentenza di non luogo a procedere",
      "La prima udienza del dibattimento",
      "L'udienza per la convalida dell'arresto",
      "L'udienza finale del processo"
    ],
    "answer": "Un'udienza-filtro in cui il G.U.P. decide se rinviare a giudizio l'imputato o emettere sentenza di non luogo a procedere"
  },
  {
    "id": 4011,
    "category": "Procedura Penale",
    "question": "Quali sono i principi del 'giusto processo' (art. 111 Cost.)?",
    "options": [
      "Contraddittorio, parità delle parti, giudice terzo e imparziale, ragionevole durata",
      "Segretezza e inquisizione",
      "Rapidità a tutti i costi",
      "Prevalenza dell'accusa"
    ],
    "answer": "Contraddittorio, parità delle parti, giudice terzo e imparziale, ragionevole durata"
  },
  {
    "id": 4011,
    "category": "Procedura Penale",
    "question": "Quali sono i principi del 'giusto processo' (art. 111 Cost.)?",
    "options": [
      "Contraddittorio, parità delle parti, giudice terzo e imparziale, ragionevole durata",
      "Segretezza e inquisizione",
      "Rapidità a tutti i costi",
      "Prevalenza dell'accusa"
    ],
    "answer": "Contraddittorio, parità delle parti, giudice terzo e imparziale, ragionevole durata"
  },
  {
    "id": 4011,
    "category": "Procedura Penale",
    "question": "Quali sono i principi del 'giusto processo' (art. 111 Cost.)?",
    "options": [
      "Contraddittorio, parità delle parti, giudice terzo e imparziale, ragionevole durata",
      "Segretezza e inquisizione",
      "Rapidità a tutti i costi",
      "Prevalenza dell'accusa"
    ],
    "answer": "Contraddittorio, parità delle parti, giudice terzo e imparziale, ragionevole durata"
  },
  {
    "id": 4012,
    "category": "Procedura Penale",
    "question": "Il processo penale italiano attuale è ispirato al modello:",
    "options": [
      "Accusatorio",
      "Inquisitorio",
      "Misto",
      "Amministrativo"
    ],
    "answer": "Accusatorio"
  },
  {
    "id": 4012,
    "category": "Procedura Penale",
    "question": "Il processo penale italiano attuale è ispirato al modello:",
    "options": [
      "Accusatorio",
      "Inquisitorio",
      "Misto",
      "Amministrativo"
    ],
    "answer": "Accusatorio"
  },
  {
    "id": 4012,
    "category": "Procedura Penale",
    "question": "Il processo penale italiano attuale è ispirato al modello:",
    "options": [
      "Accusatorio",
      "Inquisitorio",
      "Misto",
      "Amministrativo"
    ],
    "answer": "Accusatorio"
  },
  {
    "id": 4013,
    "category": "Procedura Penale",
    "question": "Dove si forma la prova nel processo accusatorio?",
    "options": [
      "In dibattimento, nel contraddittorio tra le parti",
      "Nelle indagini preliminari",
      "Nel segreto della camera di consiglio",
      "In commissariato"
    ],
    "answer": "In dibattimento, nel contraddittorio tra le parti"
  },
  {
    "id": 4013,
    "category": "Procedura Penale",
    "question": "Dove si forma la prova nel processo accusatorio?",
    "options": [
      "In dibattimento, nel contraddittorio tra le parti",
      "Nelle indagini preliminari",
      "Nel segreto della camera di consiglio",
      "In commissariato"
    ],
    "answer": "In dibattimento, nel contraddittorio tra le parti"
  },
  {
    "id": 4013,
    "category": "Procedura Penale",
    "question": "Dove si forma la prova nel processo accusatorio?",
    "options": [
      "In dibattimento, nel contraddittorio tra le parti",
      "Nelle indagini preliminari",
      "Nel segreto della camera di consiglio",
      "In commissariato"
    ],
    "answer": "In dibattimento, nel contraddittorio tra le parti"
  },
  {
    "id": 4014,
    "category": "Procedura Penale",
    "question": "Cos'è l'incidente probatorio?",
    "options": [
      "Un istituto che consente di anticipare l'acquisizione della prova nella fase delle indagini preliminari",
      "Un incidente stradale",
      "Un errore del giudice",
      "Una prova falsa"
    ],
    "answer": "Un istituto che consente di anticipare l'acquisizione della prova nella fase delle indagini preliminari"
  },
  {
    "id": 4014,
    "category": "Procedura Penale",
    "question": "Cos'è l'incidente probatorio?",
    "options": [
      "Un istituto che consente di anticipare l'acquisizione della prova nella fase delle indagini preliminari",
      "Un incidente stradale",
      "Un errore del giudice",
      "Una prova falsa"
    ],
    "answer": "Un istituto che consente di anticipare l'acquisizione della prova nella fase delle indagini preliminari"
  },
  {
    "id": 4014,
    "category": "Procedura Penale",
    "question": "Cos'è l'incidente probatorio?",
    "options": [
      "Un istituto che consente di anticipare l'acquisizione della prova nella fase delle indagini preliminari",
      "Un incidente stradale",
      "Un errore del giudice",
      "Una prova falsa"
    ],
    "answer": "Un istituto che consente di anticipare l'acquisizione della prova nella fase delle indagini preliminari"
  },
  {
    "id": 4015,
    "category": "Procedura Penale",
    "question": "Quando si può ricorrere all'incidente probatorio?",
    "options": [
      "In casi tassativi di non rinviabilità (es. teste in pericolo di vita, minacciato, o accertamenti irripetibili)",
      "Sempre",
      "Mai",
      "Quando lo vuole la Polizia"
    ],
    "answer": "In casi tassativi di non rinviabilità (es. teste in pericolo di vita, minacciato, o accertamenti irripetibili)"
  },
  {
    "id": 4015,
    "category": "Procedura Penale",
    "question": "Quando si può ricorrere all'incidente probatorio?",
    "options": [
      "In casi tassativi di non rinviabilità (es. teste in pericolo di vita, minacciato, o accertamenti irripetibili)",
      "Sempre",
      "Mai",
      "Quando lo vuole la Polizia"
    ],
    "answer": "In casi tassativi di non rinviabilità (es. teste in pericolo di vita, minacciato, o accertamenti irripetibili)"
  },
  {
    "id": 4015,
    "category": "Procedura Penale",
    "question": "Quando si può ricorrere all'incidente probatorio?",
    "options": [
      "In casi tassativi di non rinviabilità (es. teste in pericolo di vita, minacciato, o accertamenti irripetibili)",
      "Sempre",
      "Mai",
      "Quando lo vuole la Polizia"
    ],
    "answer": "In casi tassativi di non rinviabilità (es. teste in pericolo di vita, minacciato, o accertamenti irripetibili)"
  },
  {
    "id": 4016,
    "category": "Procedura Penale",
    "question": "Il principio del giudice naturale precostituito per legge (art. 25 Cost.) significa che:",
    "options": [
      "Il giudice competente deve essere individuato in base a criteri fissati dalla legge prima del fatto",
      "Il giudice deve essere scelto dalle parti",
      "Il giudice deve essere scelto dal Governo",
      "Il giudice deve essere nato nel luogo del reato"
    ],
    "answer": "Il giudice competente deve essere individuato in base a criteri fissati dalla legge prima del fatto"
  },
  {
    "id": 4016,
    "category": "Procedura Penale",
    "question": "Il principio del giudice naturale precostituito per legge (art. 25 Cost.) significa che:",
    "options": [
      "Il giudice competente deve essere individuato in base a criteri fissati dalla legge prima del fatto",
      "Il giudice deve essere scelto dalle parti",
      "Il giudice deve essere scelto dal Governo",
      "Il giudice deve essere nato nel luogo del reato"
    ],
    "answer": "Il giudice competente deve essere individuato in base a criteri fissati dalla legge prima del fatto"
  },
  {
    "id": 4016,
    "category": "Procedura Penale",
    "question": "Il principio del giudice naturale precostituito per legge (art. 25 Cost.) significa che:",
    "options": [
      "Il giudice competente deve essere individuato in base a criteri fissati dalla legge prima del fatto",
      "Il giudice deve essere scelto dalle parti",
      "Il giudice deve essere scelto dal Governo",
      "Il giudice deve essere nato nel luogo del reato"
    ],
    "answer": "Il giudice competente deve essere individuato in base a criteri fissati dalla legge prima del fatto"
  },
  {
    "id": 4017,
    "category": "Procedura Penale",
    "question": "La difesa tecnica è obbligatoria nel processo penale?",
    "options": [
      "Sì, è un diritto irrinunciabile",
      "No, ci si può difendere da soli",
      "Solo per i reati gravi",
      "Solo se l'imputato è minorenne"
    ],
    "answer": "Sì, è un diritto irrinunciabile"
  },
  {
    "id": 4017,
    "category": "Procedura Penale",
    "question": "La difesa tecnica è obbligatoria nel processo penale?",
    "options": [
      "Sì, è un diritto irrinunciabile",
      "No, ci si può difendere da soli",
      "Solo per i reati gravi",
      "Solo se l'imputato è minorenne"
    ],
    "answer": "Sì, è un diritto irrinunciabile"
  },
  {
    "id": 4017,
    "category": "Procedura Penale",
    "question": "La difesa tecnica è obbligatoria nel processo penale?",
    "options": [
      "Sì, è un diritto irrinunciabile",
      "No, ci si può difendere da soli",
      "Solo per i reati gravi",
      "Solo se l'imputato è minorenne"
    ],
    "answer": "Sì, è un diritto irrinunciabile"
  },
  {
    "id": 4018,
    "category": "Procedura Penale",
    "question": "Chi esercita la giurisdizione penale?",
    "options": [
      "I giudici ordinari (Tribunale, Corte d'Appello, Cassazione, ecc.)",
      "La Polizia",
      "Il Prefetto",
      "Il Sindaco"
    ],
    "answer": "I giudici ordinari (Tribunale, Corte d'Appello, Cassazione, ecc.)"
  },
  {
    "id": 4018,
    "category": "Procedura Penale",
    "question": "Chi esercita la giurisdizione penale?",
    "options": [
      "I giudici ordinari (Tribunale, Corte d'Appello, Cassazione, ecc.)",
      "La Polizia",
      "Il Prefetto",
      "Il Sindaco"
    ],
    "answer": "I giudici ordinari (Tribunale, Corte d'Appello, Cassazione, ecc.)"
  },
  {
    "id": 4018,
    "category": "Procedura Penale",
    "question": "Chi esercita la giurisdizione penale?",
    "options": [
      "I giudici ordinari (Tribunale, Corte d'Appello, Cassazione, ecc.)",
      "La Polizia",
      "Il Prefetto",
      "Il Sindaco"
    ],
    "answer": "I giudici ordinari (Tribunale, Corte d'Appello, Cassazione, ecc.)"
  },
  {
    "id": 4019,
    "category": "Procedura Penale",
    "question": "Qual è il giudice competente per i reati più gravi (es. omicidio)?",
    "options": [
      "La Corte d'Assise",
      "Il Giudice di Pace",
      "Il Tribunale Monocratico",
      "Il Tribunale per i Minorenni"
    ],
    "answer": "La Corte d'Assise"
  },
  {
    "id": 4019,
    "category": "Procedura Penale",
    "question": "Qual è il giudice competente per i reati più gravi (es. omicidio)?",
    "options": [
      "La Corte d'Assise",
      "Il Giudice di Pace",
      "Il Tribunale Monocratico",
      "Il Tribunale per i Minorenni"
    ],
    "answer": "La Corte d'Assise"
  },
  {
    "id": 4019,
    "category": "Procedura Penale",
    "question": "Qual è il giudice competente per i reati più gravi (es. omicidio)?",
    "options": [
      "La Corte d'Assise",
      "Il Giudice di Pace",
      "Il Tribunale Monocratico",
      "Il Tribunale per i Minorenni"
    ],
    "answer": "La Corte d'Assise"
  },
  {
    "id": 4020,
    "category": "Procedura Penale",
    "question": "La Corte di Cassazione è giudice di:",
    "options": [
      "Legittimità (controlla il rispetto della legge)",
      "Merito (giudica il fatto)",
      "Terzo grado (rifà il processo)",
      "Pace"
    ],
    "answer": "Legittimità (controlla il rispetto della legge)"
  },
  {
    "id": 4020,
    "category": "Procedura Penale",
    "question": "La Corte di Cassazione è giudice di:",
    "options": [
      "Legittimità (controlla il rispetto della legge)",
      "Merito (giudica il fatto)",
      "Terzo grado (rifà il processo)",
      "Pace"
    ],
    "answer": "Legittimità (controlla il rispetto della legge)"
  },
  {
    "id": 4020,
    "category": "Procedura Penale",
    "question": "La Corte di Cassazione è giudice di:",
    "options": [
      "Legittimità (controlla il rispetto della legge)",
      "Merito (giudica il fatto)",
      "Terzo grado (rifà il processo)",
      "Pace"
    ],
    "answer": "Legittimità (controlla il rispetto della legge)"
  },
  {
    "id": 4021,
    "category": "Procedura Penale",
    "question": "Il Pubblico Ministero (P.M.) svolge funzioni:",
    "options": [
      "Inquirenti (indagini) e requirenti (accusa nel processo)",
      "Giudicanti (emette sentenze)",
      "Difensive",
      "Amministrative"
    ],
    "answer": "Inquirenti (indagini) e requirenti (accusa nel processo)"
  },
  {
    "id": 4021,
    "category": "Procedura Penale",
    "question": "Il Pubblico Ministero (P.M.) svolge funzioni:",
    "options": [
      "Inquirenti (indagini) e requirenti (accusa nel processo)",
      "Giudicanti (emette sentenze)",
      "Difensive",
      "Amministrative"
    ],
    "answer": "Inquirenti (indagini) e requirenti (accusa nel processo)"
  },
  {
    "id": 4021,
    "category": "Procedura Penale",
    "question": "Il Pubblico Ministero (P.M.) svolge funzioni:",
    "options": [
      "Inquirenti (indagini) e requirenti (accusa nel processo)",
      "Giudicanti (emette sentenze)",
      "Difensive",
      "Amministrative"
    ],
    "answer": "Inquirenti (indagini) e requirenti (accusa nel processo)"
  },
  {
    "id": 4022,
    "category": "Procedura Penale",
    "question": "Il P.M. deve svolgere accertamenti anche a favore dell'indagato (art. 358 c.p.p.)?",
    "options": [
      "Sì",
      "No, solo contro",
      "Solo se glielo chiede il difensore",
      "Solo se l'indagato è innocente"
    ],
    "answer": "Sì"
  },
  {
    "id": 4022,
    "category": "Procedura Penale",
    "question": "Il P.M. deve svolgere accertamenti anche a favore dell'indagato (art. 358 c.p.p.)?",
    "options": [
      "Sì",
      "No, solo contro",
      "Solo se glielo chiede il difensore",
      "Solo se l'indagato è innocente"
    ],
    "answer": "Sì"
  },
  {
    "id": 4022,
    "category": "Procedura Penale",
    "question": "Il P.M. deve svolgere accertamenti anche a favore dell'indagato (art. 358 c.p.p.)?",
    "options": [
      "Sì",
      "No, solo contro",
      "Solo se glielo chiede il difensore",
      "Solo se l'indagato è innocente"
    ],
    "answer": "Sì"
  },
  {
    "id": 4023,
    "category": "Procedura Penale",
    "question": "Cos'è la Direzione Distrettuale Antimafia (DDA)?",
    "options": [
      "Un ufficio della Procura presso il Tribunale capoluogo di distretto competente per i reati di criminalità organizzata",
      "Un reparto della Polizia",
      "Un giudice speciale",
      "Un'associazione privata"
    ],
    "answer": "Un ufficio della Procura presso il Tribunale capoluogo di distretto competente per i reati di criminalità organizzata"
  },
  {
    "id": 4023,
    "category": "Procedura Penale",
    "question": "Cos'è la Direzione Distrettuale Antimafia (DDA)?",
    "options": [
      "Un ufficio della Procura presso il Tribunale capoluogo di distretto competente per i reati di criminalità organizzata",
      "Un reparto della Polizia",
      "Un giudice speciale",
      "Un'associazione privata"
    ],
    "answer": "Un ufficio della Procura presso il Tribunale capoluogo di distretto competente per i reati di criminalità organizzata"
  },
  {
    "id": 4023,
    "category": "Procedura Penale",
    "question": "Cos'è la Direzione Distrettuale Antimafia (DDA)?",
    "options": [
      "Un ufficio della Procura presso il Tribunale capoluogo di distretto competente per i reati di criminalità organizzata",
      "Un reparto della Polizia",
      "Un giudice speciale",
      "Un'associazione privata"
    ],
    "answer": "Un ufficio della Procura presso il Tribunale capoluogo di distretto competente per i reati di criminalità organizzata"
  },
  {
    "id": 4024,
    "category": "Procedura Penale",
    "question": "La Polizia Giudiziaria (P.G.) dipende funzionalmente da:",
    "options": [
      "Autorità Giudiziaria (P.M. e Giudice)",
      "Prefetto",
      "Questore",
      "Sindaco"
    ],
    "answer": "Autorità Giudiziaria (P.M. e Giudice)"
  },
  {
    "id": 4024,
    "category": "Procedura Penale",
    "question": "La Polizia Giudiziaria (P.G.) dipende funzionalmente da:",
    "options": [
      "Autorità Giudiziaria (P.M. e Giudice)",
      "Prefetto",
      "Questore",
      "Sindaco"
    ],
    "answer": "Autorità Giudiziaria (P.M. e Giudice)"
  },
  {
    "id": 4024,
    "category": "Procedura Penale",
    "question": "La Polizia Giudiziaria (P.G.) dipende funzionalmente da:",
    "options": [
      "Autorità Giudiziaria (P.M. e Giudice)",
      "Prefetto",
      "Questore",
      "Sindaco"
    ],
    "answer": "Autorità Giudiziaria (P.M. e Giudice)"
  },
  {
    "id": 4025,
    "category": "Procedura Penale",
    "question": "Quali sono le tre strutture di P.G. distinte dal codice?",
    "options": [
      "Sezioni, Servizi e altri uffici di P.G.",
      "Commissariati, Stazioni e Comandi",
      "Squadra Mobile, DIGOS e Volanti",
      "Polizia, Carabinieri e Finanza"
    ],
    "answer": "Sezioni, Servizi e altri uffici di P.G."
  },
  {
    "id": 4025,
    "category": "Procedura Penale",
    "question": "Quali sono le tre strutture di P.G. distinte dal codice?",
    "options": [
      "Sezioni, Servizi e altri uffici di P.G.",
      "Commissariati, Stazioni e Comandi",
      "Squadra Mobile, DIGOS e Volanti",
      "Polizia, Carabinieri e Finanza"
    ],
    "answer": "Sezioni, Servizi e altri uffici di P.G."
  },
  {
    "id": 4025,
    "category": "Procedura Penale",
    "question": "Quali sono le tre strutture di P.G. distinte dal codice?",
    "options": [
      "Sezioni, Servizi e altri uffici di P.G.",
      "Commissariati, Stazioni e Comandi",
      "Squadra Mobile, DIGOS e Volanti",
      "Polizia, Carabinieri e Finanza"
    ],
    "answer": "Sezioni, Servizi e altri uffici di P.G."
  },
  {
    "id": 4026,
    "category": "Procedura Penale",
    "question": "Le Sezioni di P.G. sono istituite presso:",
    "options": [
      "Ogni Procura della Repubblica",
      "Ogni Questura",
      "Ogni Tribunale",
      "Ogni Comune"
    ],
    "answer": "Ogni Procura della Repubblica"
  },
  {
    "id": 4026,
    "category": "Procedura Penale",
    "question": "Le Sezioni di P.G. sono istituite presso:",
    "options": [
      "Ogni Procura della Repubblica",
      "Ogni Questura",
      "Ogni Tribunale",
      "Ogni Comune"
    ],
    "answer": "Ogni Procura della Repubblica"
  },
  {
    "id": 4026,
    "category": "Procedura Penale",
    "question": "Le Sezioni di P.G. sono istituite presso:",
    "options": [
      "Ogni Procura della Repubblica",
      "Ogni Questura",
      "Ogni Tribunale",
      "Ogni Comune"
    ],
    "answer": "Ogni Procura della Repubblica"
  },
  {
    "id": 4027,
    "category": "Procedura Penale",
    "question": "Chi dispone direttamente del personale delle Sezioni di P.G.?",
    "options": [
      "Il Pubblico Ministero",
      "Il Questore",
      "Il Comandante dei Carabinieri",
      "Il Prefetto"
    ],
    "answer": "Il Pubblico Ministero"
  },
  {
    "id": 4027,
    "category": "Procedura Penale",
    "question": "Chi dispone direttamente del personale delle Sezioni di P.G.?",
    "options": [
      "Il Pubblico Ministero",
      "Il Questore",
      "Il Comandante dei Carabinieri",
      "Il Prefetto"
    ],
    "answer": "Il Pubblico Ministero"
  },
  {
    "id": 4027,
    "category": "Procedura Penale",
    "question": "Chi dispone direttamente del personale delle Sezioni di P.G.?",
    "options": [
      "Il Pubblico Ministero",
      "Il Questore",
      "Il Comandante dei Carabinieri",
      "Il Prefetto"
    ],
    "answer": "Il Pubblico Ministero"
  },
  {
    "id": 4028,
    "category": "Procedura Penale",
    "question": "I Servizi di P.G. (es. Squadra Mobile) dipendono dall'A.G.:",
    "options": [
      "Funzionalmente, ma organicamente dall'amministrazione di appartenenza",
      "Totalmente",
      "Solo per gli stipendi",
      "Per nulla"
    ],
    "answer": "Funzionalmente, ma organicamente dall'amministrazione di appartenenza"
  },
  {
    "id": 4028,
    "category": "Procedura Penale",
    "question": "I Servizi di P.G. (es. Squadra Mobile) dipendono dall'A.G.:",
    "options": [
      "Funzionalmente, ma organicamente dall'amministrazione di appartenenza",
      "Totalmente",
      "Solo per gli stipendi",
      "Per nulla"
    ],
    "answer": "Funzionalmente, ma organicamente dall'amministrazione di appartenenza"
  },
  {
    "id": 4028,
    "category": "Procedura Penale",
    "question": "I Servizi di P.G. (es. Squadra Mobile) dipendono dall'A.G.:",
    "options": [
      "Funzionalmente, ma organicamente dall'amministrazione di appartenenza",
      "Totalmente",
      "Solo per gli stipendi",
      "Per nulla"
    ],
    "answer": "Funzionalmente, ma organicamente dall'amministrazione di appartenenza"
  },
  {
    "id": 4029,
    "category": "Procedura Penale",
    "question": "Quali sono le funzioni della Polizia Giudiziaria (art. 55 c.p.p.)?",
    "options": [
      "Prendere notizia dei reati, impedire conseguenze ulteriori, ricercare autori, assicurare fonti di prova",
      "Emettere sentenze",
      "Difendere i cittadini in tribunale",
      "Fare leggi"
    ],
    "answer": "Prendere notizia dei reati, impedire conseguenze ulteriori, ricercare autori, assicurare fonti di prova"
  },
  {
    "id": 4029,
    "category": "Procedura Penale",
    "question": "Quali sono le funzioni della Polizia Giudiziaria (art. 55 c.p.p.)?",
    "options": [
      "Prendere notizia dei reati, impedire conseguenze ulteriori, ricercare autori, assicurare fonti di prova",
      "Emettere sentenze",
      "Difendere i cittadini in tribunale",
      "Fare leggi"
    ],
    "answer": "Prendere notizia dei reati, impedire conseguenze ulteriori, ricercare autori, assicurare fonti di prova"
  },
  {
    "id": 4029,
    "category": "Procedura Penale",
    "question": "Quali sono le funzioni della Polizia Giudiziaria (art. 55 c.p.p.)?",
    "options": [
      "Prendere notizia dei reati, impedire conseguenze ulteriori, ricercare autori, assicurare fonti di prova",
      "Emettere sentenze",
      "Difendere i cittadini in tribunale",
      "Fare leggi"
    ],
    "answer": "Prendere notizia dei reati, impedire conseguenze ulteriori, ricercare autori, assicurare fonti di prova"
  },
  {
    "id": 4030,
    "category": "Procedura Penale",
    "question": "L'attività di P.G. può essere:",
    "options": [
      "D'iniziativa o delegata dall'A.G.",
      "Solo d'iniziativa",
      "Solo delegata",
      "Solo amministrativa"
    ],
    "answer": "D'iniziativa o delegata dall'A.G."
  },
  {
    "id": 4030,
    "category": "Procedura Penale",
    "question": "L'attività di P.G. può essere:",
    "options": [
      "D'iniziativa o delegata dall'A.G.",
      "Solo d'iniziativa",
      "Solo delegata",
      "Solo amministrativa"
    ],
    "answer": "D'iniziativa o delegata dall'A.G."
  },
  {
    "id": 4030,
    "category": "Procedura Penale",
    "question": "L'attività di P.G. può essere:",
    "options": [
      "D'iniziativa o delegata dall'A.G.",
      "Solo d'iniziativa",
      "Solo delegata",
      "Solo amministrativa"
    ],
    "answer": "D'iniziativa o delegata dall'A.G."
  },
  {
    "id": 4031,
    "category": "Procedura Penale",
    "question": "La denuncia è una notizia di reato?",
    "options": [
      "Sì",
      "No, è una prova",
      "No, è una sentenza",
      "Solo se fatta da un avvocato"
    ],
    "answer": "Sì"
  },
  {
    "id": 4031,
    "category": "Procedura Penale",
    "question": "La denuncia è una notizia di reato?",
    "options": [
      "Sì",
      "No, è una prova",
      "No, è una sentenza",
      "Solo se fatta da un avvocato"
    ],
    "answer": "Sì"
  },
  {
    "id": 4031,
    "category": "Procedura Penale",
    "question": "La denuncia è una notizia di reato?",
    "options": [
      "Sì",
      "No, è una prova",
      "No, è una sentenza",
      "Solo se fatta da un avvocato"
    ],
    "answer": "Sì"
  },
  {
    "id": 4032,
    "category": "Procedura Penale",
    "question": "Chi ha l'obbligo di denuncia?",
    "options": [
      "I pubblici ufficiali e gli incaricati di pubblico servizio per i reati conosciuti nell'esercizio o a causa delle funzioni",
      "Tutti i cittadini sempre",
      "Nessuno",
      "Solo la Polizia"
    ],
    "answer": "I pubblici ufficiali e gli incaricati di pubblico servizio per i reati conosciuti nell'esercizio o a causa delle funzioni"
  },
  {
    "id": 4032,
    "category": "Procedura Penale",
    "question": "Chi ha l'obbligo di denuncia?",
    "options": [
      "I pubblici ufficiali e gli incaricati di pubblico servizio per i reati conosciuti nell'esercizio o a causa delle funzioni",
      "Tutti i cittadini sempre",
      "Nessuno",
      "Solo la Polizia"
    ],
    "answer": "I pubblici ufficiali e gli incaricati di pubblico servizio per i reati conosciuti nell'esercizio o a causa delle funzioni"
  },
  {
    "id": 4032,
    "category": "Procedura Penale",
    "question": "Chi ha l'obbligo di denuncia?",
    "options": [
      "I pubblici ufficiali e gli incaricati di pubblico servizio per i reati conosciuti nell'esercizio o a causa delle funzioni",
      "Tutti i cittadini sempre",
      "Nessuno",
      "Solo la Polizia"
    ],
    "answer": "I pubblici ufficiali e gli incaricati di pubblico servizio per i reati conosciuti nell'esercizio o a causa delle funzioni"
  },
  {
    "id": 4033,
    "category": "Procedura Penale",
    "question": "Cos'è il referto?",
    "options": [
      "Una denuncia obbligatoria per chi esercita una professione sanitaria in casi che possono presentare caratteri di delitto procedibile d'ufficio",
      "Un certificato medico generico",
      "Una ricetta",
      "Un verbale di arresto"
    ],
    "answer": "Una denuncia obbligatoria per chi esercita una professione sanitaria in casi che possono presentare caratteri di delitto procedibile d'ufficio"
  },
  {
    "id": 4033,
    "category": "Procedura Penale",
    "question": "Cos'è il referto?",
    "options": [
      "Una denuncia obbligatoria per chi esercita una professione sanitaria in casi che possono presentare caratteri di delitto procedibile d'ufficio",
      "Un certificato medico generico",
      "Una ricetta",
      "Un verbale di arresto"
    ],
    "answer": "Una denuncia obbligatoria per chi esercita una professione sanitaria in casi che possono presentare caratteri di delitto procedibile d'ufficio"
  },
  {
    "id": 4033,
    "category": "Procedura Penale",
    "question": "Cos'è il referto?",
    "options": [
      "Una denuncia obbligatoria per chi esercita una professione sanitaria in casi che possono presentare caratteri di delitto procedibile d'ufficio",
      "Un certificato medico generico",
      "Una ricetta",
      "Un verbale di arresto"
    ],
    "answer": "Una denuncia obbligatoria per chi esercita una professione sanitaria in casi che possono presentare caratteri di delitto procedibile d'ufficio"
  },
  {
    "id": 4034,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo la P.G. deve riferire la notizia di reato al P.M.?",
    "options": [
      "Senza ritardo (e per iscritto), o immediatamente in casi urgenti o gravi",
      "Entro 1 mese",
      "Quando ha tempo",
      "Entro 1 anno"
    ],
    "answer": "Senza ritardo (e per iscritto), o immediatamente in casi urgenti o gravi"
  },
  {
    "id": 4034,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo la P.G. deve riferire la notizia di reato al P.M.?",
    "options": [
      "Senza ritardo (e per iscritto), o immediatamente in casi urgenti o gravi",
      "Entro 1 mese",
      "Quando ha tempo",
      "Entro 1 anno"
    ],
    "answer": "Senza ritardo (e per iscritto), o immediatamente in casi urgenti o gravi"
  },
  {
    "id": 4034,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo la P.G. deve riferire la notizia di reato al P.M.?",
    "options": [
      "Senza ritardo (e per iscritto), o immediatamente in casi urgenti o gravi",
      "Entro 1 mese",
      "Quando ha tempo",
      "Entro 1 anno"
    ],
    "answer": "Senza ritardo (e per iscritto), o immediatamente in casi urgenti o gravi"
  },
  {
    "id": 4035,
    "category": "Procedura Penale",
    "question": "La querela è:",
    "options": [
      "Una condizione di procedibilità",
      "Una prova",
      "Una sentenza",
      "Un atto del giudice"
    ],
    "answer": "Una condizione di procedibilità"
  },
  {
    "id": 4035,
    "category": "Procedura Penale",
    "question": "La querela è:",
    "options": [
      "Una condizione di procedibilità",
      "Una prova",
      "Una sentenza",
      "Un atto del giudice"
    ],
    "answer": "Una condizione di procedibilità"
  },
  {
    "id": 4035,
    "category": "Procedura Penale",
    "question": "La querela è:",
    "options": [
      "Una condizione di procedibilità",
      "Una prova",
      "Una sentenza",
      "Un atto del giudice"
    ],
    "answer": "Una condizione di procedibilità"
  },
  {
    "id": 4036,
    "category": "Procedura Penale",
    "question": "Per i reati procedibili a querela, se manca la querela si può procedere?",
    "options": [
      "No, salvo atti urgenti per assicurare le prove",
      "Sì, sempre",
      "Sì, se il reato è grave",
      "Sì, se lo decide la Polizia"
    ],
    "answer": "No, salvo atti urgenti per assicurare le prove"
  },
  {
    "id": 4036,
    "category": "Procedura Penale",
    "question": "Per i reati procedibili a querela, se manca la querela si può procedere?",
    "options": [
      "No, salvo atti urgenti per assicurare le prove",
      "Sì, sempre",
      "Sì, se il reato è grave",
      "Sì, se lo decide la Polizia"
    ],
    "answer": "No, salvo atti urgenti per assicurare le prove"
  },
  {
    "id": 4036,
    "category": "Procedura Penale",
    "question": "Per i reati procedibili a querela, se manca la querela si può procedere?",
    "options": [
      "No, salvo atti urgenti per assicurare le prove",
      "Sì, sempre",
      "Sì, se il reato è grave",
      "Sì, se lo decide la Polizia"
    ],
    "answer": "No, salvo atti urgenti per assicurare le prove"
  },
  {
    "id": 4037,
    "category": "Procedura Penale",
    "question": "La P.G. può assumere sommarie informazioni dall'indagato?",
    "options": [
      "Sì, con la necessaria presenza del difensore se l'indagato è libero",
      "Sì, sempre da sola",
      "No, mai",
      "Solo se l'indagato confessa"
    ],
    "answer": "Sì, con la necessaria presenza del difensore se l'indagato è libero"
  },
  {
    "id": 4037,
    "category": "Procedura Penale",
    "question": "La P.G. può assumere sommarie informazioni dall'indagato?",
    "options": [
      "Sì, con la necessaria presenza del difensore se l'indagato è libero",
      "Sì, sempre da sola",
      "No, mai",
      "Solo se l'indagato confessa"
    ],
    "answer": "Sì, con la necessaria presenza del difensore se l'indagato è libero"
  },
  {
    "id": 4037,
    "category": "Procedura Penale",
    "question": "La P.G. può assumere sommarie informazioni dall'indagato?",
    "options": [
      "Sì, con la necessaria presenza del difensore se l'indagato è libero",
      "Sì, sempre da sola",
      "No, mai",
      "Solo se l'indagato confessa"
    ],
    "answer": "Sì, con la necessaria presenza del difensore se l'indagato è libero"
  },
  {
    "id": 4038,
    "category": "Procedura Penale",
    "question": "Le dichiarazioni spontanee dell'indagato richiedono la presenza del difensore?",
    "options": [
      "No",
      "Sì, sempre",
      "Solo se scritte",
      "Solo se registrate"
    ],
    "answer": "No"
  },
  {
    "id": 4038,
    "category": "Procedura Penale",
    "question": "Le dichiarazioni spontanee dell'indagato richiedono la presenza del difensore?",
    "options": [
      "No",
      "Sì, sempre",
      "Solo se scritte",
      "Solo se registrate"
    ],
    "answer": "No"
  },
  {
    "id": 4038,
    "category": "Procedura Penale",
    "question": "Le dichiarazioni spontanee dell'indagato richiedono la presenza del difensore?",
    "options": [
      "No",
      "Sì, sempre",
      "Solo se scritte",
      "Solo se registrate"
    ],
    "answer": "No"
  },
  {
    "id": 4039,
    "category": "Procedura Penale",
    "question": "La P.G. può porre domande all'indagato nell'immediatezza del fatto senza difensore?",
    "options": [
      "Sì, solo sul luogo o nell'immediatezza del fatto per notizie utili alla prosecuzione delle indagini (ma sono inutilizzabili)",
      "No, mai",
      "Sì, e sono utilizzabili come prova",
      "Sì, se l'indagato è d'accordo"
    ],
    "answer": "Sì, solo sul luogo o nell'immediatezza del fatto per notizie utili alla prosecuzione delle indagini (ma sono inutilizzabili)"
  },
  {
    "id": 4039,
    "category": "Procedura Penale",
    "question": "La P.G. può porre domande all'indagato nell'immediatezza del fatto senza difensore?",
    "options": [
      "Sì, solo sul luogo o nell'immediatezza del fatto per notizie utili alla prosecuzione delle indagini (ma sono inutilizzabili)",
      "No, mai",
      "Sì, e sono utilizzabili come prova",
      "Sì, se l'indagato è d'accordo"
    ],
    "answer": "Sì, solo sul luogo o nell'immediatezza del fatto per notizie utili alla prosecuzione delle indagini (ma sono inutilizzabili)"
  },
  {
    "id": 4039,
    "category": "Procedura Penale",
    "question": "La P.G. può porre domande all'indagato nell'immediatezza del fatto senza difensore?",
    "options": [
      "Sì, solo sul luogo o nell'immediatezza del fatto per notizie utili alla prosecuzione delle indagini (ma sono inutilizzabili)",
      "No, mai",
      "Sì, e sono utilizzabili come prova",
      "Sì, se l'indagato è d'accordo"
    ],
    "answer": "Sì, solo sul luogo o nell'immediatezza del fatto per notizie utili alla prosecuzione delle indagini (ma sono inutilizzabili)"
  },
  {
    "id": 4040,
    "category": "Procedura Penale",
    "question": "L'indagato ha diritto di mentire?",
    "options": [
      "Sì (nemo tenetur se detegere), tranne che sulle proprie generalità",
      "No, deve dire la verità",
      "Solo se è innocente",
      "Solo se autorizzato"
    ],
    "answer": "Sì (nemo tenetur se detegere), tranne che sulle proprie generalità"
  },
  {
    "id": 4040,
    "category": "Procedura Penale",
    "question": "L'indagato ha diritto di mentire?",
    "options": [
      "Sì (nemo tenetur se detegere), tranne che sulle proprie generalità",
      "No, deve dire la verità",
      "Solo se è innocente",
      "Solo se autorizzato"
    ],
    "answer": "Sì (nemo tenetur se detegere), tranne che sulle proprie generalità"
  },
  {
    "id": 4040,
    "category": "Procedura Penale",
    "question": "L'indagato ha diritto di mentire?",
    "options": [
      "Sì (nemo tenetur se detegere), tranne che sulle proprie generalità",
      "No, deve dire la verità",
      "Solo se è innocente",
      "Solo se autorizzato"
    ],
    "answer": "Sì (nemo tenetur se detegere), tranne che sulle proprie generalità"
  },
  {
    "id": 4041,
    "category": "Procedura Penale",
    "question": "Le persone informate sui fatti (testimoni) hanno l'obbligo di dire la verità alla P.G.?",
    "options": [
      "Sì, altrimenti commettono favoreggiamento o false informazioni",
      "No, possono mentire",
      "Solo se giurano",
      "Solo davanti al giudice"
    ],
    "answer": "Sì, altrimenti commettono favoreggiamento o false informazioni"
  },
  {
    "id": 4041,
    "category": "Procedura Penale",
    "question": "Le persone informate sui fatti (testimoni) hanno l'obbligo di dire la verità alla P.G.?",
    "options": [
      "Sì, altrimenti commettono favoreggiamento o false informazioni",
      "No, possono mentire",
      "Solo se giurano",
      "Solo davanti al giudice"
    ],
    "answer": "Sì, altrimenti commettono favoreggiamento o false informazioni"
  },
  {
    "id": 4041,
    "category": "Procedura Penale",
    "question": "Le persone informate sui fatti (testimoni) hanno l'obbligo di dire la verità alla P.G.?",
    "options": [
      "Sì, altrimenti commettono favoreggiamento o false informazioni",
      "No, possono mentire",
      "Solo se giurano",
      "Solo davanti al giudice"
    ],
    "answer": "Sì, altrimenti commettono favoreggiamento o false informazioni"
  },
  {
    "id": 4042,
    "category": "Procedura Penale",
    "question": "L'identificazione (art. 349 c.p.p.) serve a:",
    "options": [
      "Individuare le generalità di una persona",
      "Arrestare una persona",
      "Perquisire una persona",
      "Interrogare una persona"
    ],
    "answer": "Individuare le generalità di una persona"
  },
  {
    "id": 4042,
    "category": "Procedura Penale",
    "question": "L'identificazione (art. 349 c.p.p.) serve a:",
    "options": [
      "Individuare le generalità di una persona",
      "Arrestare una persona",
      "Perquisire una persona",
      "Interrogare una persona"
    ],
    "answer": "Individuare le generalità di una persona"
  },
  {
    "id": 4042,
    "category": "Procedura Penale",
    "question": "L'identificazione (art. 349 c.p.p.) serve a:",
    "options": [
      "Individuare le generalità di una persona",
      "Arrestare una persona",
      "Perquisire una persona",
      "Interrogare una persona"
    ],
    "answer": "Individuare le generalità di una persona"
  },
  {
    "id": 4043,
    "category": "Procedura Penale",
    "question": "Se una persona rifiuta di farsi identificare, la P.G. può:",
    "options": [
      "Accompagnarla negli uffici e trattenerla per il tempo necessario (max 12 ore, o 24 in casi complessi)",
      "Arrestarla subito",
      "Lasciarla andare",
      "Picchiarla"
    ],
    "answer": "Accompagnarla negli uffici e trattenerla per il tempo necessario (max 12 ore, o 24 in casi complessi)"
  },
  {
    "id": 4043,
    "category": "Procedura Penale",
    "question": "Se una persona rifiuta di farsi identificare, la P.G. può:",
    "options": [
      "Accompagnarla negli uffici e trattenerla per il tempo necessario (max 12 ore, o 24 in casi complessi)",
      "Arrestarla subito",
      "Lasciarla andare",
      "Picchiarla"
    ],
    "answer": "Accompagnarla negli uffici e trattenerla per il tempo necessario (max 12 ore, o 24 in casi complessi)"
  },
  {
    "id": 4043,
    "category": "Procedura Penale",
    "question": "Se una persona rifiuta di farsi identificare, la P.G. può:",
    "options": [
      "Accompagnarla negli uffici e trattenerla per il tempo necessario (max 12 ore, o 24 in casi complessi)",
      "Arrestarla subito",
      "Lasciarla andare",
      "Picchiarla"
    ],
    "answer": "Accompagnarla negli uffici e trattenerla per il tempo necessario (max 12 ore, o 24 in casi complessi)"
  },
  {
    "id": 4044,
    "category": "Procedura Penale",
    "question": "Il sopralluogo ha la finalità di:",
    "options": [
      "Comprendere la dinamica, raccogliere elementi di prova e cercare spunti per le indagini",
      "Pulire la scena del crimine",
      "Fare fotografie per i giornali",
      "Arrestare i curiosi"
    ],
    "answer": "Comprendere la dinamica, raccogliere elementi di prova e cercare spunti per le indagini"
  },
  {
    "id": 4044,
    "category": "Procedura Penale",
    "question": "Il sopralluogo ha la finalità di:",
    "options": [
      "Comprendere la dinamica, raccogliere elementi di prova e cercare spunti per le indagini",
      "Pulire la scena del crimine",
      "Fare fotografie per i giornali",
      "Arrestare i curiosi"
    ],
    "answer": "Comprendere la dinamica, raccogliere elementi di prova e cercare spunti per le indagini"
  },
  {
    "id": 4044,
    "category": "Procedura Penale",
    "question": "Il sopralluogo ha la finalità di:",
    "options": [
      "Comprendere la dinamica, raccogliere elementi di prova e cercare spunti per le indagini",
      "Pulire la scena del crimine",
      "Fare fotografie per i giornali",
      "Arrestare i curiosi"
    ],
    "answer": "Comprendere la dinamica, raccogliere elementi di prova e cercare spunti per le indagini"
  },
  {
    "id": 4045,
    "category": "Procedura Penale",
    "question": "La P.G. può compiere accertamenti urgenti sui luoghi, cose e persone?",
    "options": [
      "Sì, se il P.M. non può intervenire tempestivamente e c'è pericolo che le tracce si perdano (art. 354 c.p.p.)",
      "No, mai",
      "Solo se autorizzata dal giudice",
      "Solo se c'è il morto"
    ],
    "answer": "Sì, se il P.M. non può intervenire tempestivamente e c'è pericolo che le tracce si perdano (art. 354 c.p.p.)"
  },
  {
    "id": 4045,
    "category": "Procedura Penale",
    "question": "La P.G. può compiere accertamenti urgenti sui luoghi, cose e persone?",
    "options": [
      "Sì, se il P.M. non può intervenire tempestivamente e c'è pericolo che le tracce si perdano (art. 354 c.p.p.)",
      "No, mai",
      "Solo se autorizzata dal giudice",
      "Solo se c'è il morto"
    ],
    "answer": "Sì, se il P.M. non può intervenire tempestivamente e c'è pericolo che le tracce si perdano (art. 354 c.p.p.)"
  },
  {
    "id": 4045,
    "category": "Procedura Penale",
    "question": "La P.G. può compiere accertamenti urgenti sui luoghi, cose e persone?",
    "options": [
      "Sì, se il P.M. non può intervenire tempestivamente e c'è pericolo che le tracce si perdano (art. 354 c.p.p.)",
      "No, mai",
      "Solo se autorizzata dal giudice",
      "Solo se c'è il morto"
    ],
    "answer": "Sì, se il P.M. non può intervenire tempestivamente e c'è pericolo che le tracce si perdano (art. 354 c.p.p.)"
  },
  {
    "id": 4046,
    "category": "Procedura Penale",
    "question": "La perquisizione d'iniziativa della P.G. è ammessa:",
    "options": [
      "In caso di flagranza di reato o evasione",
      "Sempre",
      "Mai",
      "Solo di notte"
    ],
    "answer": "In caso di flagranza di reato o evasione"
  },
  {
    "id": 4046,
    "category": "Procedura Penale",
    "question": "La perquisizione d'iniziativa della P.G. è ammessa:",
    "options": [
      "In caso di flagranza di reato o evasione",
      "Sempre",
      "Mai",
      "Solo di notte"
    ],
    "answer": "In caso di flagranza di reato o evasione"
  },
  {
    "id": 4046,
    "category": "Procedura Penale",
    "question": "La perquisizione d'iniziativa della P.G. è ammessa:",
    "options": [
      "In caso di flagranza di reato o evasione",
      "Sempre",
      "Mai",
      "Solo di notte"
    ],
    "answer": "In caso di flagranza di reato o evasione"
  },
  {
    "id": 4047,
    "category": "Procedura Penale",
    "question": "La perquisizione d'iniziativa deve essere convalidata?",
    "options": [
      "Sì, dal P.M. entro 48 ore",
      "No",
      "Sì, dal G.I.P.",
      "Sì, dal Questore"
    ],
    "answer": "Sì, dal P.M. entro 48 ore"
  },
  {
    "id": 4047,
    "category": "Procedura Penale",
    "question": "La perquisizione d'iniziativa deve essere convalidata?",
    "options": [
      "Sì, dal P.M. entro 48 ore",
      "No",
      "Sì, dal G.I.P.",
      "Sì, dal Questore"
    ],
    "answer": "Sì, dal P.M. entro 48 ore"
  },
  {
    "id": 4047,
    "category": "Procedura Penale",
    "question": "La perquisizione d'iniziativa deve essere convalidata?",
    "options": [
      "Sì, dal P.M. entro 48 ore",
      "No",
      "Sì, dal G.I.P.",
      "Sì, dal Questore"
    ],
    "answer": "Sì, dal P.M. entro 48 ore"
  },
  {
    "id": 4048,
    "category": "Procedura Penale",
    "question": "Qual è la differenza tra mezzo di prova e mezzo di ricerca della prova?",
    "options": [
      "Il mezzo di prova si forma in dibattimento (es. testimonianza), il mezzo di ricerca acquisisce tracce preesistenti (es. perquisizione)",
      "Sono la stessa cosa",
      "Il mezzo di prova è solo documentale",
      "Il mezzo di ricerca è solo informatico"
    ],
    "answer": "Il mezzo di prova si forma in dibattimento (es. testimonianza), il mezzo di ricerca acquisisce tracce preesistenti (es. perquisizione)"
  },
  {
    "id": 4048,
    "category": "Procedura Penale",
    "question": "Qual è la differenza tra mezzo di prova e mezzo di ricerca della prova?",
    "options": [
      "Il mezzo di prova si forma in dibattimento (es. testimonianza), il mezzo di ricerca acquisisce tracce preesistenti (es. perquisizione)",
      "Sono la stessa cosa",
      "Il mezzo di prova è solo documentale",
      "Il mezzo di ricerca è solo informatico"
    ],
    "answer": "Il mezzo di prova si forma in dibattimento (es. testimonianza), il mezzo di ricerca acquisisce tracce preesistenti (es. perquisizione)"
  },
  {
    "id": 4048,
    "category": "Procedura Penale",
    "question": "Qual è la differenza tra mezzo di prova e mezzo di ricerca della prova?",
    "options": [
      "Il mezzo di prova si forma in dibattimento (es. testimonianza), il mezzo di ricerca acquisisce tracce preesistenti (es. perquisizione)",
      "Sono la stessa cosa",
      "Il mezzo di prova è solo documentale",
      "Il mezzo di ricerca è solo informatico"
    ],
    "answer": "Il mezzo di prova si forma in dibattimento (es. testimonianza), il mezzo di ricerca acquisisce tracce preesistenti (es. perquisizione)"
  },
  {
    "id": 4049,
    "category": "Procedura Penale",
    "question": "La testimonianza è un mezzo di prova?",
    "options": [
      "Sì",
      "No, è un mezzo di ricerca",
      "No, è un indizio",
      "Solo se scritta"
    ],
    "answer": "Sì"
  },
  {
    "id": 4049,
    "category": "Procedura Penale",
    "question": "La testimonianza è un mezzo di prova?",
    "options": [
      "Sì",
      "No, è un mezzo di ricerca",
      "No, è un indizio",
      "Solo se scritta"
    ],
    "answer": "Sì"
  },
  {
    "id": 4049,
    "category": "Procedura Penale",
    "question": "La testimonianza è un mezzo di prova?",
    "options": [
      "Sì",
      "No, è un mezzo di ricerca",
      "No, è un indizio",
      "Solo se scritta"
    ],
    "answer": "Sì"
  },
  {
    "id": 4050,
    "category": "Procedura Penale",
    "question": "I prossimi congiunti dell'imputato hanno facoltà di astenersi dal testimoniare?",
    "options": [
      "Sì",
      "No, devono testimoniare",
      "Solo se minorenni",
      "Solo se conviventi"
    ],
    "answer": "Sì"
  },
  {
    "id": 4050,
    "category": "Procedura Penale",
    "question": "I prossimi congiunti dell'imputato hanno facoltà di astenersi dal testimoniare?",
    "options": [
      "Sì",
      "No, devono testimoniare",
      "Solo se minorenni",
      "Solo se conviventi"
    ],
    "answer": "Sì"
  },
  {
    "id": 4050,
    "category": "Procedura Penale",
    "question": "I prossimi congiunti dell'imputato hanno facoltà di astenersi dal testimoniare?",
    "options": [
      "Sì",
      "No, devono testimoniare",
      "Solo se minorenni",
      "Solo se conviventi"
    ],
    "answer": "Sì"
  },
  {
    "id": 4051,
    "category": "Procedura Penale",
    "question": "Il sequestro probatorio serve a:",
    "options": [
      "Assicurare il corpo del reato o cose pertinenti al reato per finalità probatorie",
      "Punire l'indagato",
      "Pignorare i beni per i debiti",
      "Confiscare i beni ai mafiosi"
    ],
    "answer": "Assicurare il corpo del reato o cose pertinenti al reato per finalità probatorie"
  },
  {
    "id": 4051,
    "category": "Procedura Penale",
    "question": "Il sequestro probatorio serve a:",
    "options": [
      "Assicurare il corpo del reato o cose pertinenti al reato per finalità probatorie",
      "Punire l'indagato",
      "Pignorare i beni per i debiti",
      "Confiscare i beni ai mafiosi"
    ],
    "answer": "Assicurare il corpo del reato o cose pertinenti al reato per finalità probatorie"
  },
  {
    "id": 4051,
    "category": "Procedura Penale",
    "question": "Il sequestro probatorio serve a:",
    "options": [
      "Assicurare il corpo del reato o cose pertinenti al reato per finalità probatorie",
      "Punire l'indagato",
      "Pignorare i beni per i debiti",
      "Confiscare i beni ai mafiosi"
    ],
    "answer": "Assicurare il corpo del reato o cose pertinenti al reato per finalità probatorie"
  },
  {
    "id": 4052,
    "category": "Procedura Penale",
    "question": "Cosa si intende per 'corpo del reato' (art. 240 c.p.p.)?",
    "options": [
      "Le cose sulle quali o mediante le quali il reato è stato commesso, e le cose che ne costituiscono il prodotto, profitto o prezzo",
      "Il cadavere",
      "L'arma del delitto soltanto",
      "La refurtiva soltanto"
    ],
    "answer": "Le cose sulle quali o mediante le quali il reato è stato commesso, e le cose che ne costituiscono il prodotto, profitto o prezzo"
  },
  {
    "id": 4052,
    "category": "Procedura Penale",
    "question": "Cosa si intende per 'corpo del reato' (art. 240 c.p.p.)?",
    "options": [
      "Le cose sulle quali o mediante le quali il reato è stato commesso, e le cose che ne costituiscono il prodotto, profitto o prezzo",
      "Il cadavere",
      "L'arma del delitto soltanto",
      "La refurtiva soltanto"
    ],
    "answer": "Le cose sulle quali o mediante le quali il reato è stato commesso, e le cose che ne costituiscono il prodotto, profitto o prezzo"
  },
  {
    "id": 4052,
    "category": "Procedura Penale",
    "question": "Cosa si intende per 'corpo del reato' (art. 240 c.p.p.)?",
    "options": [
      "Le cose sulle quali o mediante le quali il reato è stato commesso, e le cose che ne costituiscono il prodotto, profitto o prezzo",
      "Il cadavere",
      "L'arma del delitto soltanto",
      "La refurtiva soltanto"
    ],
    "answer": "Le cose sulle quali o mediante le quali il reato è stato commesso, e le cose che ne costituiscono il prodotto, profitto o prezzo"
  },
  {
    "id": 4053,
    "category": "Procedura Penale",
    "question": "Chi dispone il sequestro probatorio durante le indagini?",
    "options": [
      "Il P.M. con decreto motivato (o la P.G. in caso di urgenza)",
      "Il G.I.P.",
      "Il Questore",
      "Il Prefetto"
    ],
    "answer": "Il P.M. con decreto motivato (o la P.G. in caso di urgenza)"
  },
  {
    "id": 4053,
    "category": "Procedura Penale",
    "question": "Chi dispone il sequestro probatorio durante le indagini?",
    "options": [
      "Il P.M. con decreto motivato (o la P.G. in caso di urgenza)",
      "Il G.I.P.",
      "Il Questore",
      "Il Prefetto"
    ],
    "answer": "Il P.M. con decreto motivato (o la P.G. in caso di urgenza)"
  },
  {
    "id": 4053,
    "category": "Procedura Penale",
    "question": "Chi dispone il sequestro probatorio durante le indagini?",
    "options": [
      "Il P.M. con decreto motivato (o la P.G. in caso di urgenza)",
      "Il G.I.P.",
      "Il Questore",
      "Il Prefetto"
    ],
    "answer": "Il P.M. con decreto motivato (o la P.G. in caso di urgenza)"
  },
  {
    "id": 4054,
    "category": "Procedura Penale",
    "question": "Le intercettazioni devono essere autorizzate da:",
    "options": [
      "G.I.P. su richiesta del P.M.",
      "P.M. autonomamente",
      "Questore",
      "Polizia"
    ],
    "answer": "G.I.P. su richiesta del P.M."
  },
  {
    "id": 4054,
    "category": "Procedura Penale",
    "question": "Le intercettazioni devono essere autorizzate da:",
    "options": [
      "G.I.P. su richiesta del P.M.",
      "P.M. autonomamente",
      "Questore",
      "Polizia"
    ],
    "answer": "G.I.P. su richiesta del P.M."
  },
  {
    "id": 4054,
    "category": "Procedura Penale",
    "question": "Le intercettazioni devono essere autorizzate da:",
    "options": [
      "G.I.P. su richiesta del P.M.",
      "P.M. autonomamente",
      "Questore",
      "Polizia"
    ],
    "answer": "G.I.P. su richiesta del P.M."
  },
  {
    "id": 4055,
    "category": "Procedura Penale",
    "question": "Quali sono i presupposti per le intercettazioni (art. 266 c.p.p.)?",
    "options": [
      "Gravi indizi di reato e assoluta indispensabilità per la prosecuzione delle indagini (per reati specifici)",
      "Semplice sospetto",
      "Curiosità investigativa",
      "Richiesta della vittima"
    ],
    "answer": "Gravi indizi di reato e assoluta indispensabilità per la prosecuzione delle indagini (per reati specifici)"
  },
  {
    "id": 4055,
    "category": "Procedura Penale",
    "question": "Quali sono i presupposti per le intercettazioni (art. 266 c.p.p.)?",
    "options": [
      "Gravi indizi di reato e assoluta indispensabilità per la prosecuzione delle indagini (per reati specifici)",
      "Semplice sospetto",
      "Curiosità investigativa",
      "Richiesta della vittima"
    ],
    "answer": "Gravi indizi di reato e assoluta indispensabilità per la prosecuzione delle indagini (per reati specifici)"
  },
  {
    "id": 4055,
    "category": "Procedura Penale",
    "question": "Quali sono i presupposti per le intercettazioni (art. 266 c.p.p.)?",
    "options": [
      "Gravi indizi di reato e assoluta indispensabilità per la prosecuzione delle indagini (per reati specifici)",
      "Semplice sospetto",
      "Curiosità investigativa",
      "Richiesta della vittima"
    ],
    "answer": "Gravi indizi di reato e assoluta indispensabilità per la prosecuzione delle indagini (per reati specifici)"
  },
  {
    "id": 4056,
    "category": "Procedura Penale",
    "question": "In casi di urgenza, il P.M. può disporre le intercettazioni?",
    "options": [
      "Sì, ma deve chiedere la convalida al G.I.P. entro 24 ore (che decide nelle successive 48 ore)",
      "Sì, senza limiti",
      "No, mai",
      "Solo per reati di mafia"
    ],
    "answer": "Sì, ma deve chiedere la convalida al G.I.P. entro 24 ore (che decide nelle successive 48 ore)"
  },
  {
    "id": 4056,
    "category": "Procedura Penale",
    "question": "In casi di urgenza, il P.M. può disporre le intercettazioni?",
    "options": [
      "Sì, ma deve chiedere la convalida al G.I.P. entro 24 ore (che decide nelle successive 48 ore)",
      "Sì, senza limiti",
      "No, mai",
      "Solo per reati di mafia"
    ],
    "answer": "Sì, ma deve chiedere la convalida al G.I.P. entro 24 ore (che decide nelle successive 48 ore)"
  },
  {
    "id": 4056,
    "category": "Procedura Penale",
    "question": "In casi di urgenza, il P.M. può disporre le intercettazioni?",
    "options": [
      "Sì, ma deve chiedere la convalida al G.I.P. entro 24 ore (che decide nelle successive 48 ore)",
      "Sì, senza limiti",
      "No, mai",
      "Solo per reati di mafia"
    ],
    "answer": "Sì, ma deve chiedere la convalida al G.I.P. entro 24 ore (che decide nelle successive 48 ore)"
  },
  {
    "id": 4057,
    "category": "Procedura Penale",
    "question": "Le intercettazioni preventive (art. 226 disp. att.) servono a:",
    "options": [
      "Acquisire notizie per la prevenzione di reati gravi (terrorismo, mafia), ma non sono utilizzabili come prova",
      "Trovare prove per il processo",
      "Arrestare i colpevoli",
      "Condannare gli indagati"
    ],
    "answer": "Acquisire notizie per la prevenzione di reati gravi (terrorismo, mafia), ma non sono utilizzabili come prova"
  },
  {
    "id": 4057,
    "category": "Procedura Penale",
    "question": "Le intercettazioni preventive (art. 226 disp. att.) servono a:",
    "options": [
      "Acquisire notizie per la prevenzione di reati gravi (terrorismo, mafia), ma non sono utilizzabili come prova",
      "Trovare prove per il processo",
      "Arrestare i colpevoli",
      "Condannare gli indagati"
    ],
    "answer": "Acquisire notizie per la prevenzione di reati gravi (terrorismo, mafia), ma non sono utilizzabili come prova"
  },
  {
    "id": 4057,
    "category": "Procedura Penale",
    "question": "Le intercettazioni preventive (art. 226 disp. att.) servono a:",
    "options": [
      "Acquisire notizie per la prevenzione di reati gravi (terrorismo, mafia), ma non sono utilizzabili come prova",
      "Trovare prove per il processo",
      "Arrestare i colpevoli",
      "Condannare gli indagati"
    ],
    "answer": "Acquisire notizie per la prevenzione di reati gravi (terrorismo, mafia), ma non sono utilizzabili come prova"
  },
  {
    "id": 4058,
    "category": "Procedura Penale",
    "question": "L'arresto in flagranza è una misura:",
    "options": [
      "Precautelare",
      "Cautelare",
      "Definitiva",
      "Amministrativa"
    ],
    "answer": "Precautelare"
  },
  {
    "id": 4058,
    "category": "Procedura Penale",
    "question": "L'arresto in flagranza è una misura:",
    "options": [
      "Precautelare",
      "Cautelare",
      "Definitiva",
      "Amministrativa"
    ],
    "answer": "Precautelare"
  },
  {
    "id": 4058,
    "category": "Procedura Penale",
    "question": "L'arresto in flagranza è una misura:",
    "options": [
      "Precautelare",
      "Cautelare",
      "Definitiva",
      "Amministrativa"
    ],
    "answer": "Precautelare"
  },
  {
    "id": 4059,
    "category": "Procedura Penale",
    "question": "Quando è obbligatorio l'arresto in flagranza per la P.G.?",
    "options": [
      "Per delitti non colposi gravi (ergastolo o reclusione min 5 anni e max 20 anni) e altri reati specifici (art. 380 c.p.p.)",
      "Sempre",
      "Mai",
      "Solo se c'è pericolo di fuga"
    ],
    "answer": "Per delitti non colposi gravi (ergastolo o reclusione min 5 anni e max 20 anni) e altri reati specifici (art. 380 c.p.p.)"
  },
  {
    "id": 4059,
    "category": "Procedura Penale",
    "question": "Quando è obbligatorio l'arresto in flagranza per la P.G.?",
    "options": [
      "Per delitti non colposi gravi (ergastolo o reclusione min 5 anni e max 20 anni) e altri reati specifici (art. 380 c.p.p.)",
      "Sempre",
      "Mai",
      "Solo se c'è pericolo di fuga"
    ],
    "answer": "Per delitti non colposi gravi (ergastolo o reclusione min 5 anni e max 20 anni) e altri reati specifici (art. 380 c.p.p.)"
  },
  {
    "id": 4059,
    "category": "Procedura Penale",
    "question": "Quando è obbligatorio l'arresto in flagranza per la P.G.?",
    "options": [
      "Per delitti non colposi gravi (ergastolo o reclusione min 5 anni e max 20 anni) e altri reati specifici (art. 380 c.p.p.)",
      "Sempre",
      "Mai",
      "Solo se c'è pericolo di fuga"
    ],
    "answer": "Per delitti non colposi gravi (ergastolo o reclusione min 5 anni e max 20 anni) e altri reati specifici (art. 380 c.p.p.)"
  },
  {
    "id": 4060,
    "category": "Procedura Penale",
    "question": "Il privato può eseguire l'arresto in flagranza?",
    "options": [
      "Sì, nei casi di arresto obbligatorio per la P.G. e per reati procedibili d'ufficio",
      "No, mai",
      "Sì, sempre",
      "Solo se è una guardia giurata"
    ],
    "answer": "Sì, nei casi di arresto obbligatorio per la P.G. e per reati procedibili d'ufficio"
  },
  {
    "id": 4060,
    "category": "Procedura Penale",
    "question": "Il privato può eseguire l'arresto in flagranza?",
    "options": [
      "Sì, nei casi di arresto obbligatorio per la P.G. e per reati procedibili d'ufficio",
      "No, mai",
      "Sì, sempre",
      "Solo se è una guardia giurata"
    ],
    "answer": "Sì, nei casi di arresto obbligatorio per la P.G. e per reati procedibili d'ufficio"
  },
  {
    "id": 4060,
    "category": "Procedura Penale",
    "question": "Il privato può eseguire l'arresto in flagranza?",
    "options": [
      "Sì, nei casi di arresto obbligatorio per la P.G. e per reati procedibili d'ufficio",
      "No, mai",
      "Sì, sempre",
      "Solo se è una guardia giurata"
    ],
    "answer": "Sì, nei casi di arresto obbligatorio per la P.G. e per reati procedibili d'ufficio"
  },
  {
    "id": 4061,
    "category": "Procedura Penale",
    "question": "L'arresto facoltativo dipende da:",
    "options": [
      "Valutazione discrezionale della P.G. sulla gravità del fatto o pericolosità del soggetto",
      "Decisione del P.M.",
      "Decisione del Giudice",
      "Volontà della vittima"
    ],
    "answer": "Valutazione discrezionale della P.G. sulla gravità del fatto o pericolosità del soggetto"
  },
  {
    "id": 4061,
    "category": "Procedura Penale",
    "question": "L'arresto facoltativo dipende da:",
    "options": [
      "Valutazione discrezionale della P.G. sulla gravità del fatto o pericolosità del soggetto",
      "Decisione del P.M.",
      "Decisione del Giudice",
      "Volontà della vittima"
    ],
    "answer": "Valutazione discrezionale della P.G. sulla gravità del fatto o pericolosità del soggetto"
  },
  {
    "id": 4061,
    "category": "Procedura Penale",
    "question": "L'arresto facoltativo dipende da:",
    "options": [
      "Valutazione discrezionale della P.G. sulla gravità del fatto o pericolosità del soggetto",
      "Decisione del P.M.",
      "Decisione del Giudice",
      "Volontà della vittima"
    ],
    "answer": "Valutazione discrezionale della P.G. sulla gravità del fatto o pericolosità del soggetto"
  },
  {
    "id": 4062,
    "category": "Procedura Penale",
    "question": "Il fermo di indiziato di delitto è disposto da:",
    "options": [
      "P.M. (o P.G. in via sussidiaria)",
      "G.I.P.",
      "Questore",
      "Sindaco"
    ],
    "answer": "P.M. (o P.G. in via sussidiaria)"
  },
  {
    "id": 4062,
    "category": "Procedura Penale",
    "question": "Il fermo di indiziato di delitto è disposto da:",
    "options": [
      "P.M. (o P.G. in via sussidiaria)",
      "G.I.P.",
      "Questore",
      "Sindaco"
    ],
    "answer": "P.M. (o P.G. in via sussidiaria)"
  },
  {
    "id": 4062,
    "category": "Procedura Penale",
    "question": "Il fermo di indiziato di delitto è disposto da:",
    "options": [
      "P.M. (o P.G. in via sussidiaria)",
      "G.I.P.",
      "Questore",
      "Sindaco"
    ],
    "answer": "P.M. (o P.G. in via sussidiaria)"
  },
  {
    "id": 4063,
    "category": "Procedura Penale",
    "question": "Qual è il presupposto fondamentale per il fermo?",
    "options": [
      "Il pericolo di fuga",
      "La flagranza",
      "La confessione",
      "La testimonianza"
    ],
    "answer": "Il pericolo di fuga"
  },
  {
    "id": 4063,
    "category": "Procedura Penale",
    "question": "Qual è il presupposto fondamentale per il fermo?",
    "options": [
      "Il pericolo di fuga",
      "La flagranza",
      "La confessione",
      "La testimonianza"
    ],
    "answer": "Il pericolo di fuga"
  },
  {
    "id": 4063,
    "category": "Procedura Penale",
    "question": "Qual è il presupposto fondamentale per il fermo?",
    "options": [
      "Il pericolo di fuga",
      "La flagranza",
      "La confessione",
      "La testimonianza"
    ],
    "answer": "Il pericolo di fuga"
  },
  {
    "id": 4064,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo la P.G. deve dare notizia dell'arresto/fermo al P.M.?",
    "options": [
      "Immediatamente",
      "Entro 24 ore",
      "Entro 48 ore",
      "Entro 5 giorni"
    ],
    "answer": "Immediatamente"
  },
  {
    "id": 4064,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo la P.G. deve dare notizia dell'arresto/fermo al P.M.?",
    "options": [
      "Immediatamente",
      "Entro 24 ore",
      "Entro 48 ore",
      "Entro 5 giorni"
    ],
    "answer": "Immediatamente"
  },
  {
    "id": 4064,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo la P.G. deve dare notizia dell'arresto/fermo al P.M.?",
    "options": [
      "Immediatamente",
      "Entro 24 ore",
      "Entro 48 ore",
      "Entro 5 giorni"
    ],
    "answer": "Immediatamente"
  },
  {
    "id": 4065,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo la P.G. deve mettere l'arrestato a disposizione del P.M. (in carcere)?",
    "options": [
      "Entro 24 ore",
      "Entro 48 ore",
      "Entro 12 ore",
      "Entro 96 ore"
    ],
    "answer": "Entro 24 ore"
  },
  {
    "id": 4065,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo la P.G. deve mettere l'arrestato a disposizione del P.M. (in carcere)?",
    "options": [
      "Entro 24 ore",
      "Entro 48 ore",
      "Entro 12 ore",
      "Entro 96 ore"
    ],
    "answer": "Entro 24 ore"
  },
  {
    "id": 4065,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo la P.G. deve mettere l'arrestato a disposizione del P.M. (in carcere)?",
    "options": [
      "Entro 24 ore",
      "Entro 48 ore",
      "Entro 12 ore",
      "Entro 96 ore"
    ],
    "answer": "Entro 24 ore"
  },
  {
    "id": 4066,
    "category": "Procedura Penale",
    "question": "Chi convalida l'arresto o il fermo?",
    "options": [
      "Il G.I.P. (Giudice per le Indagini Preliminari)",
      "Il P.M.",
      "Il Questore",
      "Il Prefetto"
    ],
    "answer": "Il G.I.P. (Giudice per le Indagini Preliminari)"
  },
  {
    "id": 4066,
    "category": "Procedura Penale",
    "question": "Chi convalida l'arresto o il fermo?",
    "options": [
      "Il G.I.P. (Giudice per le Indagini Preliminari)",
      "Il P.M.",
      "Il Questore",
      "Il Prefetto"
    ],
    "answer": "Il G.I.P. (Giudice per le Indagini Preliminari)"
  },
  {
    "id": 4066,
    "category": "Procedura Penale",
    "question": "Chi convalida l'arresto o il fermo?",
    "options": [
      "Il G.I.P. (Giudice per le Indagini Preliminari)",
      "Il P.M.",
      "Il Questore",
      "Il Prefetto"
    ],
    "answer": "Il G.I.P. (Giudice per le Indagini Preliminari)"
  },
  {
    "id": 4067,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo il P.M. deve chiedere la convalida al G.I.P.?",
    "options": [
      "Entro 48 ore dall'arresto",
      "Entro 24 ore",
      "Entro 5 giorni",
      "Entro 10 giorni"
    ],
    "answer": "Entro 48 ore dall'arresto"
  },
  {
    "id": 4067,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo il P.M. deve chiedere la convalida al G.I.P.?",
    "options": [
      "Entro 48 ore dall'arresto",
      "Entro 24 ore",
      "Entro 5 giorni",
      "Entro 10 giorni"
    ],
    "answer": "Entro 48 ore dall'arresto"
  },
  {
    "id": 4067,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo il P.M. deve chiedere la convalida al G.I.P.?",
    "options": [
      "Entro 48 ore dall'arresto",
      "Entro 24 ore",
      "Entro 5 giorni",
      "Entro 10 giorni"
    ],
    "answer": "Entro 48 ore dall'arresto"
  },
  {
    "id": 4068,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo il G.I.P. deve decidere sulla convalida?",
    "options": [
      "Entro le successive 48 ore",
      "Entro 24 ore",
      "Entro 5 giorni",
      "Entro 10 giorni"
    ],
    "answer": "Entro le successive 48 ore"
  },
  {
    "id": 4068,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo il G.I.P. deve decidere sulla convalida?",
    "options": [
      "Entro le successive 48 ore",
      "Entro 24 ore",
      "Entro 5 giorni",
      "Entro 10 giorni"
    ],
    "answer": "Entro le successive 48 ore"
  },
  {
    "id": 4068,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo il G.I.P. deve decidere sulla convalida?",
    "options": [
      "Entro le successive 48 ore",
      "Entro 24 ore",
      "Entro 5 giorni",
      "Entro 10 giorni"
    ],
    "answer": "Entro le successive 48 ore"
  },
  {
    "id": 4069,
    "category": "Procedura Penale",
    "question": "Se l'arresto non viene convalidato nei termini, cosa succede?",
    "options": [
      "L'arrestato deve essere liberato (la misura perde efficacia)",
      "Rimane in carcere",
      "Viene processato subito",
      "Viene multato"
    ],
    "answer": "L'arrestato deve essere liberato (la misura perde efficacia)"
  },
  {
    "id": 4069,
    "category": "Procedura Penale",
    "question": "Se l'arresto non viene convalidato nei termini, cosa succede?",
    "options": [
      "L'arrestato deve essere liberato (la misura perde efficacia)",
      "Rimane in carcere",
      "Viene processato subito",
      "Viene multato"
    ],
    "answer": "L'arrestato deve essere liberato (la misura perde efficacia)"
  },
  {
    "id": 4069,
    "category": "Procedura Penale",
    "question": "Se l'arresto non viene convalidato nei termini, cosa succede?",
    "options": [
      "L'arrestato deve essere liberato (la misura perde efficacia)",
      "Rimane in carcere",
      "Viene processato subito",
      "Viene multato"
    ],
    "answer": "L'arrestato deve essere liberato (la misura perde efficacia)"
  },
  {
    "id": 4070,
    "category": "Procedura Penale",
    "question": "Le misure cautelari (es. custodia in carcere) sono disposte da:",
    "options": [
      "Giudice (su richiesta del P.M.)",
      "P.M.",
      "Polizia",
      "Prefetto"
    ],
    "answer": "Giudice (su richiesta del P.M.)"
  },
  {
    "id": 4070,
    "category": "Procedura Penale",
    "question": "Le misure cautelari (es. custodia in carcere) sono disposte da:",
    "options": [
      "Giudice (su richiesta del P.M.)",
      "P.M.",
      "Polizia",
      "Prefetto"
    ],
    "answer": "Giudice (su richiesta del P.M.)"
  },
  {
    "id": 4070,
    "category": "Procedura Penale",
    "question": "Le misure cautelari (es. custodia in carcere) sono disposte da:",
    "options": [
      "Giudice (su richiesta del P.M.)",
      "P.M.",
      "Polizia",
      "Prefetto"
    ],
    "answer": "Giudice (su richiesta del P.M.)"
  },
  {
    "id": 4071,
    "category": "Procedura Penale",
    "question": "Quali sono le esigenze cautelari (art. 274 c.p.p.)?",
    "options": [
      "Pericolo di inquinamento prove, pericolo di fuga, pericolo di reiterazione del reato",
      "Gravità del reato",
      "Precedenti penali",
      "Mancanza di lavoro"
    ],
    "answer": "Pericolo di inquinamento prove, pericolo di fuga, pericolo di reiterazione del reato"
  },
  {
    "id": 4071,
    "category": "Procedura Penale",
    "question": "Quali sono le esigenze cautelari (art. 274 c.p.p.)?",
    "options": [
      "Pericolo di inquinamento prove, pericolo di fuga, pericolo di reiterazione del reato",
      "Gravità del reato",
      "Precedenti penali",
      "Mancanza di lavoro"
    ],
    "answer": "Pericolo di inquinamento prove, pericolo di fuga, pericolo di reiterazione del reato"
  },
  {
    "id": 4071,
    "category": "Procedura Penale",
    "question": "Quali sono le esigenze cautelari (art. 274 c.p.p.)?",
    "options": [
      "Pericolo di inquinamento prove, pericolo di fuga, pericolo di reiterazione del reato",
      "Gravità del reato",
      "Precedenti penali",
      "Mancanza di lavoro"
    ],
    "answer": "Pericolo di inquinamento prove, pericolo di fuga, pericolo di reiterazione del reato"
  },
  {
    "id": 4072,
    "category": "Procedura Penale",
    "question": "Il giudizio direttissimo è un procedimento speciale che salta:",
    "options": [
      "L'udienza preliminare (si va subito al dibattimento)",
      "Le indagini preliminari",
      "Il dibattimento",
      "L'appello"
    ],
    "answer": "L'udienza preliminare (si va subito al dibattimento)"
  },
  {
    "id": 4072,
    "category": "Procedura Penale",
    "question": "Il giudizio direttissimo è un procedimento speciale che salta:",
    "options": [
      "L'udienza preliminare (si va subito al dibattimento)",
      "Le indagini preliminari",
      "Il dibattimento",
      "L'appello"
    ],
    "answer": "L'udienza preliminare (si va subito al dibattimento)"
  },
  {
    "id": 4072,
    "category": "Procedura Penale",
    "question": "Il giudizio direttissimo è un procedimento speciale che salta:",
    "options": [
      "L'udienza preliminare (si va subito al dibattimento)",
      "Le indagini preliminari",
      "Il dibattimento",
      "L'appello"
    ],
    "answer": "L'udienza preliminare (si va subito al dibattimento)"
  },
  {
    "id": 4073,
    "category": "Procedura Penale",
    "question": "Quando si può procedere a giudizio direttissimo?",
    "options": [
      "In caso di arresto in flagranza convalidato o confessione",
      "Sempre",
      "Mai",
      "Solo per reati lievi"
    ],
    "answer": "In caso di arresto in flagranza convalidato o confessione"
  },
  {
    "id": 4073,
    "category": "Procedura Penale",
    "question": "Quando si può procedere a giudizio direttissimo?",
    "options": [
      "In caso di arresto in flagranza convalidato o confessione",
      "Sempre",
      "Mai",
      "Solo per reati lievi"
    ],
    "answer": "In caso di arresto in flagranza convalidato o confessione"
  },
  {
    "id": 4073,
    "category": "Procedura Penale",
    "question": "Quando si può procedere a giudizio direttissimo?",
    "options": [
      "In caso di arresto in flagranza convalidato o confessione",
      "Sempre",
      "Mai",
      "Solo per reati lievi"
    ],
    "answer": "In caso di arresto in flagranza convalidato o confessione"
  },
  {
    "id": 4074,
    "category": "Procedura Penale",
    "question": "Il giudizio immediato salta:",
    "options": [
      "L'udienza preliminare",
      "Le indagini",
      "Il dibattimento",
      "La sentenza"
    ],
    "answer": "L'udienza preliminare"
  },
  {
    "id": 4074,
    "category": "Procedura Penale",
    "question": "Il giudizio immediato salta:",
    "options": [
      "L'udienza preliminare",
      "Le indagini",
      "Il dibattimento",
      "La sentenza"
    ],
    "answer": "L'udienza preliminare"
  },
  {
    "id": 4074,
    "category": "Procedura Penale",
    "question": "Il giudizio immediato salta:",
    "options": [
      "L'udienza preliminare",
      "Le indagini",
      "Il dibattimento",
      "La sentenza"
    ],
    "answer": "L'udienza preliminare"
  },
  {
    "id": 4075,
    "category": "Procedura Penale",
    "question": "Il giudizio abbreviato comporta:",
    "options": [
      "Uno sconto di pena (1/3) in caso di condanna e si svolge allo stato degli atti (senza dibattimento)",
      "L'assoluzione automatica",
      "Il raddoppio della pena",
      "La scarcerazione immediata"
    ],
    "answer": "Uno sconto di pena (1/3) in caso di condanna e si svolge allo stato degli atti (senza dibattimento)"
  },
  {
    "id": 4075,
    "category": "Procedura Penale",
    "question": "Il giudizio abbreviato comporta:",
    "options": [
      "Uno sconto di pena (1/3) in caso di condanna e si svolge allo stato degli atti (senza dibattimento)",
      "L'assoluzione automatica",
      "Il raddoppio della pena",
      "La scarcerazione immediata"
    ],
    "answer": "Uno sconto di pena (1/3) in caso di condanna e si svolge allo stato degli atti (senza dibattimento)"
  },
  {
    "id": 4075,
    "category": "Procedura Penale",
    "question": "Il giudizio abbreviato comporta:",
    "options": [
      "Uno sconto di pena (1/3) in caso di condanna e si svolge allo stato degli atti (senza dibattimento)",
      "L'assoluzione automatica",
      "Il raddoppio della pena",
      "La scarcerazione immediata"
    ],
    "answer": "Uno sconto di pena (1/3) in caso di condanna e si svolge allo stato degli atti (senza dibattimento)"
  },
  {
    "id": 4076,
    "category": "Procedura Penale",
    "question": "Il patteggiamento è:",
    "options": [
      "L'applicazione della pena su richiesta delle parti (accordo tra P.M. e imputato)",
      "Una condanna decisa solo dal giudice",
      "Un'assoluzione",
      "Un processo lungo"
    ],
    "answer": "L'applicazione della pena su richiesta delle parti (accordo tra P.M. e imputato)"
  },
  {
    "id": 4076,
    "category": "Procedura Penale",
    "question": "Il patteggiamento è:",
    "options": [
      "L'applicazione della pena su richiesta delle parti (accordo tra P.M. e imputato)",
      "Una condanna decisa solo dal giudice",
      "Un'assoluzione",
      "Un processo lungo"
    ],
    "answer": "L'applicazione della pena su richiesta delle parti (accordo tra P.M. e imputato)"
  },
  {
    "id": 4076,
    "category": "Procedura Penale",
    "question": "Il patteggiamento è:",
    "options": [
      "L'applicazione della pena su richiesta delle parti (accordo tra P.M. e imputato)",
      "Una condanna decisa solo dal giudice",
      "Un'assoluzione",
      "Un processo lungo"
    ],
    "answer": "L'applicazione della pena su richiesta delle parti (accordo tra P.M. e imputato)"
  },
  {
    "id": 4077,
    "category": "Procedura Penale",
    "question": "Il decreto penale di condanna si applica per:",
    "options": [
      "Reati perseguibili d'ufficio o a querela, punibili con pena pecuniaria (anche in sostituzione di detentiva)",
      "Omicidi",
      "Rapine",
      "Tutti i reati"
    ],
    "answer": "Reati perseguibili d'ufficio o a querela, punibili con pena pecuniaria (anche in sostituzione di detentiva)"
  },
  {
    "id": 4077,
    "category": "Procedura Penale",
    "question": "Il decreto penale di condanna si applica per:",
    "options": [
      "Reati perseguibili d'ufficio o a querela, punibili con pena pecuniaria (anche in sostituzione di detentiva)",
      "Omicidi",
      "Rapine",
      "Tutti i reati"
    ],
    "answer": "Reati perseguibili d'ufficio o a querela, punibili con pena pecuniaria (anche in sostituzione di detentiva)"
  },
  {
    "id": 4077,
    "category": "Procedura Penale",
    "question": "Il decreto penale di condanna si applica per:",
    "options": [
      "Reati perseguibili d'ufficio o a querela, punibili con pena pecuniaria (anche in sostituzione di detentiva)",
      "Omicidi",
      "Rapine",
      "Tutti i reati"
    ],
    "answer": "Reati perseguibili d'ufficio o a querela, punibili con pena pecuniaria (anche in sostituzione di detentiva)"
  },
  {
    "id": 4078,
    "category": "Procedura Penale",
    "question": "La sospensione del procedimento con messa alla prova comporta:",
    "options": [
      "La sospensione del processo e l'affidamento dell'imputato ai servizi sociali per svolgere lavori di pubblica utilità",
      "La condanna immediata",
      "L'assoluzione immediata",
      "L'arresto"
    ],
    "answer": "La sospensione del processo e l'affidamento dell'imputato ai servizi sociali per svolgere lavori di pubblica utilità"
  },
  {
    "id": 4078,
    "category": "Procedura Penale",
    "question": "La sospensione del procedimento con messa alla prova comporta:",
    "options": [
      "La sospensione del processo e l'affidamento dell'imputato ai servizi sociali per svolgere lavori di pubblica utilità",
      "La condanna immediata",
      "L'assoluzione immediata",
      "L'arresto"
    ],
    "answer": "La sospensione del processo e l'affidamento dell'imputato ai servizi sociali per svolgere lavori di pubblica utilità"
  },
  {
    "id": 4078,
    "category": "Procedura Penale",
    "question": "La sospensione del procedimento con messa alla prova comporta:",
    "options": [
      "La sospensione del processo e l'affidamento dell'imputato ai servizi sociali per svolgere lavori di pubblica utilità",
      "La condanna immediata",
      "L'assoluzione immediata",
      "L'arresto"
    ],
    "answer": "La sospensione del processo e l'affidamento dell'imputato ai servizi sociali per svolgere lavori di pubblica utilità"
  },
  {
    "id": 4079,
    "category": "Procedura Penale",
    "question": "Se la prova ha esito positivo, il reato:",
    "options": [
      "Si estingue",
      "Viene punito più severamente",
      "Viene archiviato per infondatezza",
      "Diventa un illecito amministrativo"
    ],
    "answer": "Si estingue"
  },
  {
    "id": 4079,
    "category": "Procedura Penale",
    "question": "Se la prova ha esito positivo, il reato:",
    "options": [
      "Si estingue",
      "Viene punito più severamente",
      "Viene archiviato per infondatezza",
      "Diventa un illecito amministrativo"
    ],
    "answer": "Si estingue"
  },
  {
    "id": 4079,
    "category": "Procedura Penale",
    "question": "Se la prova ha esito positivo, il reato:",
    "options": [
      "Si estingue",
      "Viene punito più severamente",
      "Viene archiviato per infondatezza",
      "Diventa un illecito amministrativo"
    ],
    "answer": "Si estingue"
  },
  {
    "id": 4080,
    "category": "Procedura Penale",
    "question": "La riforma Cartabia (D.Lgs. 150/2022) ha introdotto:",
    "options": [
      "La Giustizia Riparativa",
      "La pena di morte",
      "Il processo telematico obbligatorio per tutti",
      "L'abolizione del P.M."
    ],
    "answer": "La Giustizia Riparativa"
  },
  {
    "id": 4080,
    "category": "Procedura Penale",
    "question": "La riforma Cartabia (D.Lgs. 150/2022) ha introdotto:",
    "options": [
      "La Giustizia Riparativa",
      "La pena di morte",
      "Il processo telematico obbligatorio per tutti",
      "L'abolizione del P.M."
    ],
    "answer": "La Giustizia Riparativa"
  },
  {
    "id": 4080,
    "category": "Procedura Penale",
    "question": "La riforma Cartabia (D.Lgs. 150/2022) ha introdotto:",
    "options": [
      "La Giustizia Riparativa",
      "La pena di morte",
      "Il processo telematico obbligatorio per tutti",
      "L'abolizione del P.M."
    ],
    "answer": "La Giustizia Riparativa"
  },
  {
    "id": 4081,
    "category": "Procedura Penale",
    "question": "Cos'è la Giustizia Riparativa?",
    "options": [
      "Un programma per la risoluzione delle questioni derivanti dal reato con l'aiuto di un mediatore",
      "Un risarcimento danni automatico",
      "Una pena alternativa",
      "Un processo civile"
    ],
    "answer": "Un programma per la risoluzione delle questioni derivanti dal reato con l'aiuto di un mediatore"
  },
  {
    "id": 4081,
    "category": "Procedura Penale",
    "question": "Cos'è la Giustizia Riparativa?",
    "options": [
      "Un programma per la risoluzione delle questioni derivanti dal reato con l'aiuto di un mediatore",
      "Un risarcimento danni automatico",
      "Una pena alternativa",
      "Un processo civile"
    ],
    "answer": "Un programma per la risoluzione delle questioni derivanti dal reato con l'aiuto di un mediatore"
  },
  {
    "id": 4081,
    "category": "Procedura Penale",
    "question": "Cos'è la Giustizia Riparativa?",
    "options": [
      "Un programma per la risoluzione delle questioni derivanti dal reato con l'aiuto di un mediatore",
      "Un risarcimento danni automatico",
      "Una pena alternativa",
      "Un processo civile"
    ],
    "answer": "Un programma per la risoluzione delle questioni derivanti dal reato con l'aiuto di un mediatore"
  },
  {
    "id": 4082,
    "category": "Procedura Penale",
    "question": "L'accesso alla Giustizia Riparativa è:",
    "options": [
      "Volontario e gratuito",
      "Obbligatorio",
      "A pagamento",
      "Solo per i minorenni"
    ],
    "answer": "Volontario e gratuito"
  },
  {
    "id": 4082,
    "category": "Procedura Penale",
    "question": "L'accesso alla Giustizia Riparativa è:",
    "options": [
      "Volontario e gratuito",
      "Obbligatorio",
      "A pagamento",
      "Solo per i minorenni"
    ],
    "answer": "Volontario e gratuito"
  },
  {
    "id": 4082,
    "category": "Procedura Penale",
    "question": "L'accesso alla Giustizia Riparativa è:",
    "options": [
      "Volontario e gratuito",
      "Obbligatorio",
      "A pagamento",
      "Solo per i minorenni"
    ],
    "answer": "Volontario e gratuito"
  },
  {
    "id": 4083,
    "category": "Procedura Penale",
    "question": "Qual è l'obiettivo della Giustizia Riparativa?",
    "options": [
      "Raggiungere un esito riparativo (simbolico o materiale) e ricostruire il legame con la comunità",
      "Punire il colpevole",
      "Assolvere il colpevole",
      "Dimenticare il reato"
    ],
    "answer": "Raggiungere un esito riparativo (simbolico o materiale) e ricostruire il legame con la comunità"
  },
  {
    "id": 4083,
    "category": "Procedura Penale",
    "question": "Qual è l'obiettivo della Giustizia Riparativa?",
    "options": [
      "Raggiungere un esito riparativo (simbolico o materiale) e ricostruire il legame con la comunità",
      "Punire il colpevole",
      "Assolvere il colpevole",
      "Dimenticare il reato"
    ],
    "answer": "Raggiungere un esito riparativo (simbolico o materiale) e ricostruire il legame con la comunità"
  },
  {
    "id": 4083,
    "category": "Procedura Penale",
    "question": "Qual è l'obiettivo della Giustizia Riparativa?",
    "options": [
      "Raggiungere un esito riparativo (simbolico o materiale) e ricostruire il legame con la comunità",
      "Punire il colpevole",
      "Assolvere il colpevole",
      "Dimenticare il reato"
    ],
    "answer": "Raggiungere un esito riparativo (simbolico o materiale) e ricostruire il legame con la comunità"
  },
  {
    "id": 4084,
    "category": "Procedura Penale",
    "question": "La riforma Cartabia ha modificato i termini delle indagini preliminari?",
    "options": [
      "Sì, il termine ordinario è di 1 anno (6 mesi per contravvenzioni, 1 anno e 6 mesi per reati gravi)",
      "No, sono rimasti uguali",
      "Li ha aboliti",
      "Li ha raddoppiati tutti"
    ],
    "answer": "Sì, il termine ordinario è di 1 anno (6 mesi per contravvenzioni, 1 anno e 6 mesi per reati gravi)"
  },
  {
    "id": 4084,
    "category": "Procedura Penale",
    "question": "La riforma Cartabia ha modificato i termini delle indagini preliminari?",
    "options": [
      "Sì, il termine ordinario è di 1 anno (6 mesi per contravvenzioni, 1 anno e 6 mesi per reati gravi)",
      "No, sono rimasti uguali",
      "Li ha aboliti",
      "Li ha raddoppiati tutti"
    ],
    "answer": "Sì, il termine ordinario è di 1 anno (6 mesi per contravvenzioni, 1 anno e 6 mesi per reati gravi)"
  },
  {
    "id": 4084,
    "category": "Procedura Penale",
    "question": "La riforma Cartabia ha modificato i termini delle indagini preliminari?",
    "options": [
      "Sì, il termine ordinario è di 1 anno (6 mesi per contravvenzioni, 1 anno e 6 mesi per reati gravi)",
      "No, sono rimasti uguali",
      "Li ha aboliti",
      "Li ha raddoppiati tutti"
    ],
    "answer": "Sì, il termine ordinario è di 1 anno (6 mesi per contravvenzioni, 1 anno e 6 mesi per reati gravi)"
  },
  {
    "id": 4085,
    "category": "Procedura Penale",
    "question": "La proroga delle indagini può essere chiesta:",
    "options": [
      "Una sola volta per 6 mesi, se le indagini sono complesse",
      "Infinite volte",
      "Mai",
      "Ogni mese"
    ],
    "answer": "Una sola volta per 6 mesi, se le indagini sono complesse"
  },
  {
    "id": 4085,
    "category": "Procedura Penale",
    "question": "La proroga delle indagini può essere chiesta:",
    "options": [
      "Una sola volta per 6 mesi, se le indagini sono complesse",
      "Infinite volte",
      "Mai",
      "Ogni mese"
    ],
    "answer": "Una sola volta per 6 mesi, se le indagini sono complesse"
  },
  {
    "id": 4085,
    "category": "Procedura Penale",
    "question": "La proroga delle indagini può essere chiesta:",
    "options": [
      "Una sola volta per 6 mesi, se le indagini sono complesse",
      "Infinite volte",
      "Mai",
      "Ogni mese"
    ],
    "answer": "Una sola volta per 6 mesi, se le indagini sono complesse"
  },
  {
    "id": 4086,
    "category": "Procedura Penale",
    "question": "Cosa succede se il P.M. non esercita l'azione penale nei termini?",
    "options": [
      "Deve effettuare la 'discovery' (deposito atti) e l'indagato può chiedere al G.I.P. di ordinare al P.M. di decidere",
      "Il reato si estingue",
      "Il P.M. viene arrestato",
      "Si ricomincia da capo"
    ],
    "answer": "Deve effettuare la 'discovery' (deposito atti) e l'indagato può chiedere al G.I.P. di ordinare al P.M. di decidere"
  },
  {
    "id": 4086,
    "category": "Procedura Penale",
    "question": "Cosa succede se il P.M. non esercita l'azione penale nei termini?",
    "options": [
      "Deve effettuare la 'discovery' (deposito atti) e l'indagato può chiedere al G.I.P. di ordinare al P.M. di decidere",
      "Il reato si estingue",
      "Il P.M. viene arrestato",
      "Si ricomincia da capo"
    ],
    "answer": "Deve effettuare la 'discovery' (deposito atti) e l'indagato può chiedere al G.I.P. di ordinare al P.M. di decidere"
  },
  {
    "id": 4086,
    "category": "Procedura Penale",
    "question": "Cosa succede se il P.M. non esercita l'azione penale nei termini?",
    "options": [
      "Deve effettuare la 'discovery' (deposito atti) e l'indagato può chiedere al G.I.P. di ordinare al P.M. di decidere",
      "Il reato si estingue",
      "Il P.M. viene arrestato",
      "Si ricomincia da capo"
    ],
    "answer": "Deve effettuare la 'discovery' (deposito atti) e l'indagato può chiedere al G.I.P. di ordinare al P.M. di decidere"
  },
  {
    "id": 4087,
    "category": "Procedura Penale",
    "question": "Il nuovo presupposto per l'archiviazione (Riforma Cartabia) è:",
    "options": [
      "Quando gli elementi acquisiti non consentono di formulare una ragionevole previsione di condanna",
      "Quando la notizia di reato è infondata",
      "Quando l'indagato è simpatico",
      "Quando il reato è lieve"
    ],
    "answer": "Quando gli elementi acquisiti non consentono di formulare una ragionevole previsione di condanna"
  },
  {
    "id": 4087,
    "category": "Procedura Penale",
    "question": "Il nuovo presupposto per l'archiviazione (Riforma Cartabia) è:",
    "options": [
      "Quando gli elementi acquisiti non consentono di formulare una ragionevole previsione di condanna",
      "Quando la notizia di reato è infondata",
      "Quando l'indagato è simpatico",
      "Quando il reato è lieve"
    ],
    "answer": "Quando gli elementi acquisiti non consentono di formulare una ragionevole previsione di condanna"
  },
  {
    "id": 4087,
    "category": "Procedura Penale",
    "question": "Il nuovo presupposto per l'archiviazione (Riforma Cartabia) è:",
    "options": [
      "Quando gli elementi acquisiti non consentono di formulare una ragionevole previsione di condanna",
      "Quando la notizia di reato è infondata",
      "Quando l'indagato è simpatico",
      "Quando il reato è lieve"
    ],
    "answer": "Quando gli elementi acquisiti non consentono di formulare una ragionevole previsione di condanna"
  },
  {
    "id": 4088,
    "category": "Procedura Penale",
    "question": "L'avviso di conclusione delle indagini (art. 415-bis) deve contenere:",
    "options": [
      "Anche l'avviso della facoltà di accedere ai programmi di giustizia riparativa",
      "Solo l'accusa",
      "Solo la data del processo",
      "La condanna"
    ],
    "answer": "Anche l'avviso della facoltà di accedere ai programmi di giustizia riparativa"
  },
  {
    "id": 4088,
    "category": "Procedura Penale",
    "question": "L'avviso di conclusione delle indagini (art. 415-bis) deve contenere:",
    "options": [
      "Anche l'avviso della facoltà di accedere ai programmi di giustizia riparativa",
      "Solo l'accusa",
      "Solo la data del processo",
      "La condanna"
    ],
    "answer": "Anche l'avviso della facoltà di accedere ai programmi di giustizia riparativa"
  },
  {
    "id": 4088,
    "category": "Procedura Penale",
    "question": "L'avviso di conclusione delle indagini (art. 415-bis) deve contenere:",
    "options": [
      "Anche l'avviso della facoltà di accedere ai programmi di giustizia riparativa",
      "Solo l'accusa",
      "Solo la data del processo",
      "La condanna"
    ],
    "answer": "Anche l'avviso della facoltà di accedere ai programmi di giustizia riparativa"
  },
  {
    "id": 4089,
    "category": "Procedura Penale",
    "question": "La riforma Cartabia ha potenziato le pene sostitutive delle pene detentive brevi?",
    "options": [
      "Sì (semilibertà, detenzione domiciliare, lavoro di pubblica utilità, pena pecuniaria)",
      "No, le ha abolite",
      "Solo per i minorenni",
      "Solo per le donne"
    ],
    "answer": "Sì (semilibertà, detenzione domiciliare, lavoro di pubblica utilità, pena pecuniaria)"
  },
  {
    "id": 4089,
    "category": "Procedura Penale",
    "question": "La riforma Cartabia ha potenziato le pene sostitutive delle pene detentive brevi?",
    "options": [
      "Sì (semilibertà, detenzione domiciliare, lavoro di pubblica utilità, pena pecuniaria)",
      "No, le ha abolite",
      "Solo per i minorenni",
      "Solo per le donne"
    ],
    "answer": "Sì (semilibertà, detenzione domiciliare, lavoro di pubblica utilità, pena pecuniaria)"
  },
  {
    "id": 4089,
    "category": "Procedura Penale",
    "question": "La riforma Cartabia ha potenziato le pene sostitutive delle pene detentive brevi?",
    "options": [
      "Sì (semilibertà, detenzione domiciliare, lavoro di pubblica utilità, pena pecuniaria)",
      "No, le ha abolite",
      "Solo per i minorenni",
      "Solo per le donne"
    ],
    "answer": "Sì (semilibertà, detenzione domiciliare, lavoro di pubblica utilità, pena pecuniaria)"
  },
  {
    "id": 4090,
    "category": "Procedura Penale",
    "question": "Il giudice può applicare direttamente una pena sostitutiva?",
    "options": [
      "Sì, se ha gli elementi necessari e con il consenso dell'imputato (per alcune misure)",
      "No, deve decidere il magistrato di sorveglianza",
      "Solo se lo chiede il P.M.",
      "Mai"
    ],
    "answer": "Sì, se ha gli elementi necessari e con il consenso dell'imputato (per alcune misure)"
  },
  {
    "id": 4090,
    "category": "Procedura Penale",
    "question": "Il giudice può applicare direttamente una pena sostitutiva?",
    "options": [
      "Sì, se ha gli elementi necessari e con il consenso dell'imputato (per alcune misure)",
      "No, deve decidere il magistrato di sorveglianza",
      "Solo se lo chiede il P.M.",
      "Mai"
    ],
    "answer": "Sì, se ha gli elementi necessari e con il consenso dell'imputato (per alcune misure)"
  },
  {
    "id": 4090,
    "category": "Procedura Penale",
    "question": "Il giudice può applicare direttamente una pena sostitutiva?",
    "options": [
      "Sì, se ha gli elementi necessari e con il consenso dell'imputato (per alcune misure)",
      "No, deve decidere il magistrato di sorveglianza",
      "Solo se lo chiede il P.M.",
      "Mai"
    ],
    "answer": "Sì, se ha gli elementi necessari e con il consenso dell'imputato (per alcune misure)"
  },
  {
    "id": 4091,
    "category": "Procedura Penale",
    "question": "L'ispezione personale è un atto:",
    "options": [
      "Garantito (richiede preavviso al difensore, salvo urgenza)",
      "Segreto",
      "Libero",
      "Amministrativo"
    ],
    "answer": "Garantito (richiede preavviso al difensore, salvo urgenza)"
  },
  {
    "id": 4091,
    "category": "Procedura Penale",
    "question": "L'ispezione personale è un atto:",
    "options": [
      "Garantito (richiede preavviso al difensore, salvo urgenza)",
      "Segreto",
      "Libero",
      "Amministrativo"
    ],
    "answer": "Garantito (richiede preavviso al difensore, salvo urgenza)"
  },
  {
    "id": 4091,
    "category": "Procedura Penale",
    "question": "L'ispezione personale è un atto:",
    "options": [
      "Garantito (richiede preavviso al difensore, salvo urgenza)",
      "Segreto",
      "Libero",
      "Amministrativo"
    ],
    "answer": "Garantito (richiede preavviso al difensore, salvo urgenza)"
  },
  {
    "id": 4092,
    "category": "Procedura Penale",
    "question": "La perquisizione personale è disposta quando:",
    "options": [
      "Vi è fondato motivo di ritenere che taluno occulti sulla persona il corpo del reato o cose pertinenti",
      "Sempre",
      "Per identificare una persona",
      "Per punizione"
    ],
    "answer": "Vi è fondato motivo di ritenere che taluno occulti sulla persona il corpo del reato o cose pertinenti"
  },
  {
    "id": 4092,
    "category": "Procedura Penale",
    "question": "La perquisizione personale è disposta quando:",
    "options": [
      "Vi è fondato motivo di ritenere che taluno occulti sulla persona il corpo del reato o cose pertinenti",
      "Sempre",
      "Per identificare una persona",
      "Per punizione"
    ],
    "answer": "Vi è fondato motivo di ritenere che taluno occulti sulla persona il corpo del reato o cose pertinenti"
  },
  {
    "id": 4092,
    "category": "Procedura Penale",
    "question": "La perquisizione personale è disposta quando:",
    "options": [
      "Vi è fondato motivo di ritenere che taluno occulti sulla persona il corpo del reato o cose pertinenti",
      "Sempre",
      "Per identificare una persona",
      "Per punizione"
    ],
    "answer": "Vi è fondato motivo di ritenere che taluno occulti sulla persona il corpo del reato o cose pertinenti"
  },
  {
    "id": 4093,
    "category": "Procedura Penale",
    "question": "La perquisizione locale è disposta quando:",
    "options": [
      "Vi è fondato motivo di ritenere che cose pertinenti al reato si trovino in un luogo o che lì si trovi l'imputato",
      "A caso",
      "Per controllare i documenti",
      "Per fare un censimento"
    ],
    "answer": "Vi è fondato motivo di ritenere che cose pertinenti al reato si trovino in un luogo o che lì si trovi l'imputato"
  },
  {
    "id": 4093,
    "category": "Procedura Penale",
    "question": "La perquisizione locale è disposta quando:",
    "options": [
      "Vi è fondato motivo di ritenere che cose pertinenti al reato si trovino in un luogo o che lì si trovi l'imputato",
      "A caso",
      "Per controllare i documenti",
      "Per fare un censimento"
    ],
    "answer": "Vi è fondato motivo di ritenere che cose pertinenti al reato si trovino in un luogo o che lì si trovi l'imputato"
  },
  {
    "id": 4093,
    "category": "Procedura Penale",
    "question": "La perquisizione locale è disposta quando:",
    "options": [
      "Vi è fondato motivo di ritenere che cose pertinenti al reato si trovino in un luogo o che lì si trovi l'imputato",
      "A caso",
      "Per controllare i documenti",
      "Per fare un censimento"
    ],
    "answer": "Vi è fondato motivo di ritenere che cose pertinenti al reato si trovino in un luogo o che lì si trovi l'imputato"
  },
  {
    "id": 4094,
    "category": "Procedura Penale",
    "question": "Il decreto di perquisizione deve essere consegnato all'interessato?",
    "options": [
      "Sì, con l'avviso della facoltà di farsi assistere da persona di fiducia",
      "No, è segreto",
      "Solo se lo chiede",
      "Dopo il processo"
    ],
    "answer": "Sì, con l'avviso della facoltà di farsi assistere da persona di fiducia"
  },
  {
    "id": 4094,
    "category": "Procedura Penale",
    "question": "Il decreto di perquisizione deve essere consegnato all'interessato?",
    "options": [
      "Sì, con l'avviso della facoltà di farsi assistere da persona di fiducia",
      "No, è segreto",
      "Solo se lo chiede",
      "Dopo il processo"
    ],
    "answer": "Sì, con l'avviso della facoltà di farsi assistere da persona di fiducia"
  },
  {
    "id": 4094,
    "category": "Procedura Penale",
    "question": "Il decreto di perquisizione deve essere consegnato all'interessato?",
    "options": [
      "Sì, con l'avviso della facoltà di farsi assistere da persona di fiducia",
      "No, è segreto",
      "Solo se lo chiede",
      "Dopo il processo"
    ],
    "answer": "Sì, con l'avviso della facoltà di farsi assistere da persona di fiducia"
  },
  {
    "id": 4095,
    "category": "Procedura Penale",
    "question": "Sequestro di corrispondenza: chi può aprirla?",
    "options": [
      "Solo l'Autorità Giudiziaria (la P.G. deve consegnarla chiusa)",
      "La P.G.",
      "Il postino",
      "Il destinatario"
    ],
    "answer": "Solo l'Autorità Giudiziaria (la P.G. deve consegnarla chiusa)"
  },
  {
    "id": 4095,
    "category": "Procedura Penale",
    "question": "Sequestro di corrispondenza: chi può aprirla?",
    "options": [
      "Solo l'Autorità Giudiziaria (la P.G. deve consegnarla chiusa)",
      "La P.G.",
      "Il postino",
      "Il destinatario"
    ],
    "answer": "Solo l'Autorità Giudiziaria (la P.G. deve consegnarla chiusa)"
  },
  {
    "id": 4095,
    "category": "Procedura Penale",
    "question": "Sequestro di corrispondenza: chi può aprirla?",
    "options": [
      "Solo l'Autorità Giudiziaria (la P.G. deve consegnarla chiusa)",
      "La P.G.",
      "Il postino",
      "Il destinatario"
    ],
    "answer": "Solo l'Autorità Giudiziaria (la P.G. deve consegnarla chiusa)"
  },
  {
    "id": 4096,
    "category": "Procedura Penale",
    "question": "Sequestro di computer: cosa si sequestra preferibilmente?",
    "options": [
      "La copia clone del documento informatico (per garantire l'integrità)",
      "Il computer intero sempre",
      "Lo schermo",
      "La tastiera"
    ],
    "answer": "La copia clone del documento informatico (per garantire l'integrità)"
  },
  {
    "id": 4096,
    "category": "Procedura Penale",
    "question": "Sequestro di computer: cosa si sequestra preferibilmente?",
    "options": [
      "La copia clone del documento informatico (per garantire l'integrità)",
      "Il computer intero sempre",
      "Lo schermo",
      "La tastiera"
    ],
    "answer": "La copia clone del documento informatico (per garantire l'integrità)"
  },
  {
    "id": 4096,
    "category": "Procedura Penale",
    "question": "Sequestro di computer: cosa si sequestra preferibilmente?",
    "options": [
      "La copia clone del documento informatico (per garantire l'integrità)",
      "Il computer intero sempre",
      "Lo schermo",
      "La tastiera"
    ],
    "answer": "La copia clone del documento informatico (per garantire l'integrità)"
  },
  {
    "id": 4097,
    "category": "Procedura Penale",
    "question": "L'accompagnamento coattivo per identificazione (art. 349 c.p.p.) è un arresto?",
    "options": [
      "No, è un fermo amministrativo per identificazione",
      "Sì",
      "È una misura cautelare",
      "È una condanna"
    ],
    "answer": "No, è un fermo amministrativo per identificazione"
  },
  {
    "id": 4097,
    "category": "Procedura Penale",
    "question": "L'accompagnamento coattivo per identificazione (art. 349 c.p.p.) è un arresto?",
    "options": [
      "No, è un fermo amministrativo per identificazione",
      "Sì",
      "È una misura cautelare",
      "È una condanna"
    ],
    "answer": "No, è un fermo amministrativo per identificazione"
  },
  {
    "id": 4097,
    "category": "Procedura Penale",
    "question": "L'accompagnamento coattivo per identificazione (art. 349 c.p.p.) è un arresto?",
    "options": [
      "No, è un fermo amministrativo per identificazione",
      "Sì",
      "È una misura cautelare",
      "È una condanna"
    ],
    "answer": "No, è un fermo amministrativo per identificazione"
  },
  {
    "id": 4098,
    "category": "Procedura Penale",
    "question": "La P.G. può prelevare coattivamente materiale biologico (DNA)?",
    "options": [
      "Solo sull'indagato e solo per l'identificazione (art. 349 bis), altrimenti serve autorizzazione del P.M./Giudice",
      "Su chiunque",
      "Sempre",
      "Mai"
    ],
    "answer": "Solo sull'indagato e solo per l'identificazione (art. 349 bis), altrimenti serve autorizzazione del P.M./Giudice"
  },
  {
    "id": 4098,
    "category": "Procedura Penale",
    "question": "La P.G. può prelevare coattivamente materiale biologico (DNA)?",
    "options": [
      "Solo sull'indagato e solo per l'identificazione (art. 349 bis), altrimenti serve autorizzazione del P.M./Giudice",
      "Su chiunque",
      "Sempre",
      "Mai"
    ],
    "answer": "Solo sull'indagato e solo per l'identificazione (art. 349 bis), altrimenti serve autorizzazione del P.M./Giudice"
  },
  {
    "id": 4098,
    "category": "Procedura Penale",
    "question": "La P.G. può prelevare coattivamente materiale biologico (DNA)?",
    "options": [
      "Solo sull'indagato e solo per l'identificazione (art. 349 bis), altrimenti serve autorizzazione del P.M./Giudice",
      "Su chiunque",
      "Sempre",
      "Mai"
    ],
    "answer": "Solo sull'indagato e solo per l'identificazione (art. 349 bis), altrimenti serve autorizzazione del P.M./Giudice"
  },
  {
    "id": 4099,
    "category": "Procedura Penale",
    "question": "Le sommarie informazioni da persone informate sui fatti sono documentate?",
    "options": [
      "Sì, mediante verbale",
      "No",
      "Solo se importanti",
      "Solo se c'è l'avvocato"
    ],
    "answer": "Sì, mediante verbale"
  },
  {
    "id": 4099,
    "category": "Procedura Penale",
    "question": "Le sommarie informazioni da persone informate sui fatti sono documentate?",
    "options": [
      "Sì, mediante verbale",
      "No",
      "Solo se importanti",
      "Solo se c'è l'avvocato"
    ],
    "answer": "Sì, mediante verbale"
  },
  {
    "id": 4099,
    "category": "Procedura Penale",
    "question": "Le sommarie informazioni da persone informate sui fatti sono documentate?",
    "options": [
      "Sì, mediante verbale",
      "No",
      "Solo se importanti",
      "Solo se c'è l'avvocato"
    ],
    "answer": "Sì, mediante verbale"
  },
  {
    "id": 4100,
    "category": "Procedura Penale",
    "question": "La P.G. può avvalersi di esperti (es. psicologi) per sentire minori?",
    "options": [
      "Sì, ed è obbligatorio per certi reati (es. violenza sessuale)",
      "No",
      "Solo se paga il genitore",
      "Solo se il minore è malato"
    ],
    "answer": "Sì, ed è obbligatorio per certi reati (es. violenza sessuale)"
  },
  {
    "id": 4100,
    "category": "Procedura Penale",
    "question": "La P.G. può avvalersi di esperti (es. psicologi) per sentire minori?",
    "options": [
      "Sì, ed è obbligatorio per certi reati (es. violenza sessuale)",
      "No",
      "Solo se paga il genitore",
      "Solo se il minore è malato"
    ],
    "answer": "Sì, ed è obbligatorio per certi reati (es. violenza sessuale)"
  },
  {
    "id": 4100,
    "category": "Procedura Penale",
    "question": "La P.G. può avvalersi di esperti (es. psicologi) per sentire minori?",
    "options": [
      "Sì, ed è obbligatorio per certi reati (es. violenza sessuale)",
      "No",
      "Solo se paga il genitore",
      "Solo se il minore è malato"
    ],
    "answer": "Sì, ed è obbligatorio per certi reati (es. violenza sessuale)"
  },
  {
    "id": 4101,
    "category": "Procedura Penale",
    "question": "Il principio 'nemo tenetur se detegere' significa:",
    "options": [
      "Nessuno è tenuto ad autoaccusarsi",
      "Nessuno può essere arrestato",
      "Nessuno può essere perquisito",
      "Nessuno può essere processato"
    ],
    "answer": "Nessuno è tenuto ad autoaccusarsi"
  },
  {
    "id": 4101,
    "category": "Procedura Penale",
    "question": "Il principio 'nemo tenetur se detegere' significa:",
    "options": [
      "Nessuno è tenuto ad autoaccusarsi",
      "Nessuno può essere arrestato",
      "Nessuno può essere perquisito",
      "Nessuno può essere processato"
    ],
    "answer": "Nessuno è tenuto ad autoaccusarsi"
  },
  {
    "id": 4101,
    "category": "Procedura Penale",
    "question": "Qual è la funzione delle misure precautelari (arresto e fermo)?",
    "options": [
      "Anticipare la condanna definitiva",
      "Limitare la libertà personale in situazioni di urgenza fino alla convalida del giudice",
      "Sostituire le misure cautelari",
      "Punire l'indagato prima del processo"
    ],
    "answer": "Limitare la libertà personale in situazioni di urgenza fino alla convalida del giudice"
  },
  {
    "id": 4102,
    "category": "Procedura Penale",
    "question": "L'avviso di garanzia (informazione di garanzia) viene inviato quando:",
    "options": [
      "Il P.M. deve compiere un atto al quale il difensore ha diritto di assistere (es. interrogatorio)",
      "Sempre all'inizio delle indagini",
      "Solo se l'indagato viene arrestato",
      "Dopo la condanna"
    ],
    "answer": "Il P.M. deve compiere un atto al quale il difensore ha diritto di assistere (es. interrogatorio)"
  },
  {
    "id": 4102,
    "category": "Procedura Penale",
    "question": "L'avviso di garanzia (informazione di garanzia) viene inviato quando:",
    "options": [
      "Il P.M. deve compiere un atto al quale il difensore ha diritto di assistere (es. interrogatorio)",
      "Sempre all'inizio delle indagini",
      "Solo se l'indagato viene arrestato",
      "Dopo la condanna"
    ],
    "answer": "Il P.M. deve compiere un atto al quale il difensore ha diritto di assistere (es. interrogatorio)"
  },
  {
    "id": 4102,
    "category": "Procedura Penale",
    "question": "Chi può disporre l'arresto in flagranza?",
    "options": [
      "Solo il Pubblico Ministero",
      "La Polizia Giudiziaria e, in casi eccezionali, i privati",
      "Solo il Giudice",
      "Il Prefetto"
    ],
    "answer": "La Polizia Giudiziaria e, in casi eccezionali, i privati"
  },
  {
    "id": 4103,
    "category": "Procedura Penale",
    "question": "L'informazione di garanzia contiene:",
    "options": [
      "Indicazione del fatto, norme violate, data e luogo, e invito a nominare un difensore",
      "La sentenza",
      "L'ordine di arresto",
      "La data del processo"
    ],
    "answer": "Indicazione del fatto, norme violate, data e luogo, e invito a nominare un difensore"
  },
  {
    "id": 4103,
    "category": "Procedura Penale",
    "question": "L'informazione di garanzia contiene:",
    "options": [
      "Indicazione del fatto, norme violate, data e luogo, e invito a nominare un difensore",
      "La sentenza",
      "L'ordine di arresto",
      "La data del processo"
    ],
    "answer": "Indicazione del fatto, norme violate, data e luogo, e invito a nominare un difensore"
  },
  {
    "id": 4103,
    "category": "Procedura Penale",
    "question": "Quando si ha lo stato di flagranza (art. 382 c.p.p.)?",
    "options": [
      "Quando il soggetto ha confessato il reato",
      "Quando il soggetto viene colto nell'atto di commettere il reato",
      "Quando il soggetto è indagato da molto tempo",
      "Quando il reato è stato commesso il giorno prima"
    ],
    "answer": "Quando il soggetto viene colto nell'atto di commettere il reato"
  },
  {
    "id": 4104,
    "category": "Procedura Penale",
    "question": "Se un atto di indagine è irripetibile (es. sequestro), il verbale:",
    "options": [
      "Confluisce nel fascicolo per il dibattimento e diventa prova",
      "Rimane nel fascicolo del P.M.",
      "Viene distrutto",
      "Non ha valore"
    ],
    "answer": "Confluisce nel fascicolo per il dibattimento e diventa prova"
  },
  {
    "id": 4104,
    "category": "Procedura Penale",
    "question": "Se un atto di indagine è irripetibile (es. sequestro), il verbale:",
    "options": [
      "Confluisce nel fascicolo per il dibattimento e diventa prova",
      "Rimane nel fascicolo del P.M.",
      "Viene distrutto",
      "Non ha valore"
    ],
    "answer": "Confluisce nel fascicolo per il dibattimento e diventa prova"
  },
  {
    "id": 4104,
    "category": "Procedura Penale",
    "question": "Cosa si intende per 'quasi flagranza'?",
    "options": [
      "Quando il soggetto sta per commettere il reato",
      "Quando il soggetto, subito dopo il reato, è inseguito dalla P.G. o sorpreso con cose o tracce del reato",
      "Quando il soggetto si costituisce",
      "Quando il reato non è grave"
    ],
    "answer": "Quando il soggetto, subito dopo il reato, è inseguito dalla P.G. o sorpreso con cose o tracce del reato"
  },
  {
    "id": 4105,
    "category": "Procedura Penale",
    "question": "Il fascicolo del P.M. è conosciuto dal giudice del dibattimento?",
    "options": [
      "No, di regola (salvo accordo delle parti o contestazioni)",
      "Sì, sempre",
      "Solo se il reato è grave",
      "Solo se l'imputato confessa"
    ],
    "answer": "No, di regola (salvo accordo delle parti o contestazioni)"
  },
  {
    "id": 4105,
    "category": "Procedura Penale",
    "question": "Il fascicolo del P.M. è conosciuto dal giudice del dibattimento?",
    "options": [
      "No, di regola (salvo accordo delle parti o contestazioni)",
      "Sì, sempre",
      "Solo se il reato è grave",
      "Solo se l'imputato confessa"
    ],
    "answer": "No, di regola (salvo accordo delle parti o contestazioni)"
  },
  {
    "id": 4105,
    "category": "Procedura Penale",
    "question": "Quando è obbligatorio l'arresto in flagranza per la P.G.?",
    "options": [
      "Per tutti i reati",
      "Per delitti non colposi con pena dell'ergastolo o reclusione non inferiore nel minimo a 5 anni e nel massimo a 20",
      "Solo per i reati contro il patrimonio",
      "A discrezione della P.G."
    ],
    "answer": "Per delitti non colposi con pena dell'ergastolo o reclusione non inferiore nel minimo a 5 anni e nel massimo a 20"
  },
  {
    "id": 4106,
    "category": "Procedura Penale",
    "question": "Le investigazioni difensive possono essere svolte:",
    "options": [
      "Dal difensore, anche avvalendosi di investigatori privati e consulenti tecnici",
      "Solo dalla Polizia",
      "Solo dal P.M.",
      "Solo dal Giudice"
    ],
    "answer": "Dal difensore, anche avvalendosi di investigatori privati e consulenti tecnici"
  },
  {
    "id": 4106,
    "category": "Procedura Penale",
    "question": "Le investigazioni difensive possono essere svolte:",
    "options": [
      "Dal difensore, anche avvalendosi di investigatori privati e consulenti tecnici",
      "Solo dalla Polizia",
      "Solo dal P.M.",
      "Solo dal Giudice"
    ],
    "answer": "Dal difensore, anche avvalendosi di investigatori privati e consulenti tecnici"
  },
  {
    "id": 4106,
    "category": "Procedura Penale",
    "question": "I privati possono procedere all'arresto in flagranza?",
    "options": [
      "Mai",
      "Sì, per i delitti procedibili d'ufficio per i quali è previsto l'arresto obbligatorio da parte della P.G.",
      "Sempre",
      "Solo se autorizzati dal Sindaco"
    ],
    "answer": "Sì, per i delitti procedibili d'ufficio per i quali è previsto l'arresto obbligatorio da parte della P.G."
  },
  {
    "id": 4107,
    "category": "Procedura Penale",
    "question": "Il difensore può svolgere investigazioni preventive (prima dell'inizio del procedimento)?",
    "options": [
      "Sì, su incarico di chi teme di essere sottoposto a indagini",
      "No",
      "Solo se autorizzato dal P.M.",
      "Solo se autorizzato dal Questore"
    ],
    "answer": "Sì, su incarico di chi teme di essere sottoposto a indagini"
  },
  {
    "id": 4107,
    "category": "Procedura Penale",
    "question": "Il difensore può svolgere investigazioni preventive (prima dell'inizio del procedimento)?",
    "options": [
      "Sì, su incarico di chi teme di essere sottoposto a indagini",
      "No",
      "Solo se autorizzato dal P.M.",
      "Solo se autorizzato dal Questore"
    ],
    "answer": "Sì, su incarico di chi teme di essere sottoposto a indagini"
  },
  {
    "id": 4107,
    "category": "Procedura Penale",
    "question": "Cosa deve fare il privato dopo aver eseguito un arresto?",
    "options": [
      "Interrogare l'arrestato",
      "Consegnare senza ritardo l'arrestato e le cose pertinenti al reato alla P.G.",
      "Trattenere l'arrestato a casa propria",
      "Giudicare l'arrestato"
    ],
    "answer": "Consegnare senza ritardo l'arrestato e le cose pertinenti al reato alla P.G."
  },
  {
    "id": 4108,
    "category": "Procedura Penale",
    "question": "La prova indiziaria è valida se gli indizi sono:",
    "options": [
      "Gravi, precisi e concordanti",
      "Numerosi",
      "Sospetti",
      "Anonimi"
    ],
    "answer": "Gravi, precisi e concordanti"
  },
  {
    "id": 4108,
    "category": "Procedura Penale",
    "question": "La prova indiziaria è valida se gli indizi sono:",
    "options": [
      "Gravi, precisi e concordanti",
      "Numerosi",
      "Sospetti",
      "Anonimi"
    ],
    "answer": "Gravi, precisi e concordanti"
  },
  {
    "id": 4108,
    "category": "Procedura Penale",
    "question": "Quando è consentito l'arresto facoltativo in flagranza?",
    "options": [
      "Sempre",
      "Quando la misura è giustificata dalla gravità del fatto o dalla pericolosità del soggetto",
      "Mai",
      "Solo di notte"
    ],
    "answer": "Quando la misura è giustificata dalla gravità del fatto o dalla pericolosità del soggetto"
  },
  {
    "id": 4109,
    "category": "Procedura Penale",
    "question": "La chiamata in correità (dichiarazione di un coimputato) necessita di:",
    "options": [
      "Riscontri esterni che ne confermino l'attendibilità",
      "Nulla, basta la parola",
      "Giuramento",
      "Video"
    ],
    "answer": "Riscontri esterni che ne confermino l'attendibilità"
  },
  {
    "id": 4109,
    "category": "Procedura Penale",
    "question": "La chiamata in correità (dichiarazione di un coimputato) necessita di:",
    "options": [
      "Riscontri esterni che ne confermino l'attendibilità",
      "Nulla, basta la parola",
      "Giuramento",
      "Video"
    ],
    "answer": "Riscontri esterni che ne confermino l'attendibilità"
  },
  {
    "id": 4109,
    "category": "Procedura Penale",
    "question": "È consentito l'arresto se il fatto è compiuto nell'adempimento di un dovere?",
    "options": [
      "Sì, sempre",
      "No, mai",
      "Solo se il dovere è imposto da un superiore",
      "Dipende dal reato"
    ],
    "answer": "No, mai"
  },
  {
    "id": 4110,
    "category": "Procedura Penale",
    "question": "Il giudice è vincolato dal risultato della perizia?",
    "options": [
      "No, è peritus peritorum (può discostarsene motivando)",
      "Sì, sempre",
      "Solo se è scientifica",
      "Solo se è medica"
    ],
    "answer": "No, è peritus peritorum (può discostarsene motivando)"
  },
  {
    "id": 4110,
    "category": "Procedura Penale",
    "question": "Il giudice è vincolato dal risultato della perizia?",
    "options": [
      "No, è peritus peritorum (può discostarsene motivando)",
      "Sì, sempre",
      "Solo se è scientifica",
      "Solo se è medica"
    ],
    "answer": "No, è peritus peritorum (può discostarsene motivando)"
  },
  {
    "id": 4110,
    "category": "Procedura Penale",
    "question": "Si può procedere all'arresto per un delitto perseguibile a querela se questa non è stata proposta?",
    "options": [
      "Sì",
      "No, la querela deve essere proposta anche oralmente",
      "Solo se il reato è grave",
      "Sì, ma solo per 24 ore"
    ],
    "answer": "No, la querela deve essere proposta anche oralmente"
  },
  {
    "id": 4111,
    "category": "Procedura Penale",
    "question": "I documenti anonimi possono essere utilizzati nel processo?",
    "options": [
      "No, salvo che costituiscano corpo del reato o provengano dall'imputato",
      "Sì, sempre",
      "Sì, se interessanti",
      "Sì, se inviati alla Polizia"
    ],
    "answer": "No, salvo che costituiscano corpo del reato o provengano dall'imputato"
  },
  {
    "id": 4111,
    "category": "Procedura Penale",
    "question": "I documenti anonimi possono essere utilizzati nel processo?",
    "options": [
      "No, salvo che costituiscano corpo del reato o provengano dall'imputato",
      "Sì, sempre",
      "Sì, se interessanti",
      "Sì, se inviati alla Polizia"
    ],
    "answer": "No, salvo che costituiscano corpo del reato o provengano dall'imputato"
  },
  {
    "id": 4111,
    "category": "Procedura Penale",
    "question": "Chi dispone di regola il fermo di indiziato di delitto?",
    "options": [
      "Il Giudice",
      "Il Pubblico Ministero",
      "La Polizia Giudiziaria",
      "Il Prefetto"
    ],
    "answer": "Il Pubblico Ministero"
  },
  {
    "id": 4112,
    "category": "Procedura Penale",
    "question": "L'inutilizzabilità della prova significa che:",
    "options": [
      "La prova acquisita in violazione di divieti di legge non può essere posta a fondamento della decisione",
      "La prova è falsa",
      "La prova è persa",
      "La prova è vecchia"
    ],
    "answer": "La prova acquisita in violazione di divieti di legge non può essere posta a fondamento della decisione"
  },
  {
    "id": 4112,
    "category": "Procedura Penale",
    "question": "L'inutilizzabilità della prova significa che:",
    "options": [
      "La prova acquisita in violazione di divieti di legge non può essere posta a fondamento della decisione",
      "La prova è falsa",
      "La prova è persa",
      "La prova è vecchia"
    ],
    "answer": "La prova acquisita in violazione di divieti di legge non può essere posta a fondamento della decisione"
  },
  {
    "id": 4112,
    "category": "Procedura Penale",
    "question": "Quale condizione è necessaria per il fermo oltre ai gravi indizi?",
    "options": [
      "Il pericolo di fuga",
      "La flagranza di reato",
      "La confessione",
      "La recidiva"
    ],
    "answer": "Il pericolo di fuga"
  },
  {
    "id": 4113,
    "category": "Procedura Penale",
    "question": "Il giudizio di Cassazione può annullare la sentenza per:",
    "options": [
      "Violazione di legge o vizio di motivazione (non giudica il fatto)",
      "Ingiustizia sostanziale",
      "Perché l'imputato è innocente",
      "Perché la pena è troppo alta"
    ],
    "answer": "Violazione di legge o vizio di motivazione (non giudica il fatto)"
  },
  {
    "id": 4113,
    "category": "Procedura Penale",
    "question": "Il giudizio di Cassazione può annullare la sentenza per:",
    "options": [
      "Violazione di legge o vizio di motivazione (non giudica il fatto)",
      "Ingiustizia sostanziale",
      "Perché l'imputato è innocente",
      "Perché la pena è troppo alta"
    ],
    "answer": "Violazione di legge o vizio di motivazione (non giudica il fatto)"
  },
  {
    "id": 4113,
    "category": "Procedura Penale",
    "question": "Quando la P.G. può procedere al fermo di propria iniziativa?",
    "options": [
      "Sempre",
      "Prima che il P.M. abbia assunto la direzione delle indagini o in casi di urgenza se c'è pericolo di fuga",
      "Mai",
      "Solo se autorizzata dal Questore"
    ],
    "answer": "Prima che il P.M. abbia assunto la direzione delle indagini o in casi di urgenza se c'è pericolo di fuga"
  },
  {
    "id": 4114,
    "category": "Procedura Penale",
    "question": "La revisione del processo è ammessa:",
    "options": [
      "Per le sentenze di condanna definitive, se sopravvengono nuove prove che dimostrano l'innocenza",
      "Sempre",
      "Mai",
      "Se il P.M. cambia idea"
    ],
    "answer": "Per le sentenze di condanna definitive, se sopravvengono nuove prove che dimostrano l'innocenza"
  },
  {
    "id": 4114,
    "category": "Procedura Penale",
    "question": "La revisione del processo è ammessa:",
    "options": [
      "Per le sentenze di condanna definitive, se sopravvengono nuove prove che dimostrano l'innocenza",
      "Sempre",
      "Mai",
      "Se il P.M. cambia idea"
    ],
    "answer": "Per le sentenze di condanna definitive, se sopravvengono nuove prove che dimostrano l'innocenza"
  },
  {
    "id": 4114,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo la P.G. deve dare notizia dell'arresto o fermo al P.M.?",
    "options": [
      "Immediatamente",
      "Entro 24 ore",
      "Entro 48 ore",
      "Entro 3 giorni"
    ],
    "answer": "Immediatamente"
  },
  {
    "id": 4115,
    "category": "Procedura Penale",
    "question": "Il principio del 'ne bis in idem' significa:",
    "options": [
      "Nessuno può essere processato due volte per lo stesso fatto (se c'è sentenza irrevocabile)",
      "Bisogna fare due processi",
      "Il processo deve essere doppio",
      "La pena deve essere doppia"
    ],
    "answer": "Nessuno può essere processato due volte per lo stesso fatto (se c'è sentenza irrevocabile)"
  },
  {
    "id": 4115,
    "category": "Procedura Penale",
    "question": "Il principio del 'ne bis in idem' significa:",
    "options": [
      "Nessuno può essere processato due volte per lo stesso fatto (se c'è sentenza irrevocabile)",
      "Bisogna fare due processi",
      "Il processo deve essere doppio",
      "La pena deve essere doppia"
    ],
    "answer": "Nessuno può essere processato due volte per lo stesso fatto (se c'è sentenza irrevocabile)"
  },
  {
    "id": 4115,
    "category": "Procedura Penale",
    "question": "Quale avviso deve essere dato all'arrestato o fermato?",
    "options": [
      "Facoltà di nominare un difensore di fiducia",
      "Obbligo di confessare",
      "Divieto di parlare",
      "Obbligo di pagare una cauzione"
    ],
    "answer": "Facoltà di nominare un difensore di fiducia"
  },
  {
    "id": 4116,
    "category": "Procedura Penale",
    "question": "Le misure cautelari personali si distinguono in:",
    "options": [
      "Coercitive (es. custodia in carcere, arresti domiciliari) e interdittive (es. sospensione dall'esercizio di un pubblico ufficio)",
      "Civili e penali",
      "Amministrative e giudiziarie",
      "Belle e brutte"
    ],
    "answer": "Coercitive (es. custodia in carcere, arresti domiciliari) e interdittive (es. sospensione dall'esercizio di un pubblico ufficio)"
  },
  {
    "id": 4116,
    "category": "Procedura Penale",
    "question": "Le misure cautelari personali si distinguono in:",
    "options": [
      "Coercitive (es. custodia in carcere, arresti domiciliari) e interdittive (es. sospensione dall'esercizio di un pubblico ufficio)",
      "Civili e penali",
      "Amministrative e giudiziarie",
      "Belle e brutte"
    ],
    "answer": "Coercitive (es. custodia in carcere, arresti domiciliari) e interdittive (es. sospensione dall'esercizio di un pubblico ufficio)"
  },
  {
    "id": 4116,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo il P.M. deve chiedere la convalida dell'arresto o del fermo al G.I.P.?",
    "options": [
      "24 ore",
      "48 ore",
      "72 ore",
      "96 ore"
    ],
    "answer": "48 ore"
  },
  {
    "id": 4117,
    "category": "Procedura Penale",
    "question": "Chi decide l'applicazione delle misure cautelari?",
    "options": [
      "Il Giudice (G.I.P. o giudice del processo) su richiesta del P.M.",
      "Il P.M. da solo",
      "La Polizia",
      "Il Sindaco"
    ],
    "answer": "Il Giudice (G.I.P. o giudice del processo) su richiesta del P.M."
  },
  {
    "id": 4117,
    "category": "Procedura Penale",
    "question": "Chi decide l'applicazione delle misure cautelari?",
    "options": [
      "Il Giudice (G.I.P. o giudice del processo) su richiesta del P.M.",
      "Il P.M. da solo",
      "La Polizia",
      "Il Sindaco"
    ],
    "answer": "Il Giudice (G.I.P. o giudice del processo) su richiesta del P.M."
  },
  {
    "id": 4117,
    "category": "Procedura Penale",
    "question": "Entro quanto tempo il G.I.P. deve decidere sulla convalida?",
    "options": [
      "Nelle 48 ore successive alla richiesta del P.M.",
      "Entro 5 giorni",
      "Entro 10 giorni",
      "Senza termine"
    ],
    "answer": "Nelle 48 ore successive alla richiesta del P.M."
  },
  {
    "id": 4118,
    "category": "Procedura Penale",
    "question": "L'interrogatorio di garanzia dopo l'esecuzione di una misura cautelare deve avvenire:",
    "options": [
      "Entro 5 giorni (se in carcere) o 10 giorni (altre misure)",
      "Entro 1 mese",
      "Prima del processo",
      "Mai"
    ],
    "answer": "Entro 5 giorni (se in carcere) o 10 giorni (altre misure)"
  },
  {
    "id": 4118,
    "category": "Procedura Penale",
    "question": "L'interrogatorio di garanzia dopo l'esecuzione di una misura cautelare deve avvenire:",
    "options": [
      "Entro 5 giorni (se in carcere) o 10 giorni (altre misure)",
      "Entro 1 mese",
      "Prima del processo",
      "Mai"
    ],
    "answer": "Entro 5 giorni (se in carcere) o 10 giorni (altre misure)"
  },
  {
    "id": 4118,
    "category": "Procedura Penale",
    "question": "Cosa succede se l'arresto o il fermo non viene convalidato nei termini?",
    "options": [
      "La misura cessa di avere efficacia e l'arrestato viene liberato",
      "L'arresto si trasforma in custodia cautelare",
      "Il termine viene prorogato",
      "Nulla, il processo continua"
    ],
    "answer": "La misura cessa di avere efficacia e l'arrestato viene liberato"
  },
  {
    "id": 4119,
    "category": "Procedura Penale",
    "question": "Il riesame delle misure cautelari (Tribunale della Libertà) serve a:",
    "options": [
      "Controllare la legittimità e il merito della misura coercitiva applicata",
      "Condannare l'indagato",
      "Assolvere l'indagato",
      "Rifare le indagini"
    ],
    "answer": "Controllare la legittimità e il merito della misura coercitiva applicata"
  },
  {
    "id": 4119,
    "category": "Procedura Penale",
    "question": "Il riesame delle misure cautelari (Tribunale della Libertà) serve a:",
    "options": [
      "Controllare la legittimità e il merito della misura coercitiva applicata",
      "Condannare l'indagato",
      "Assolvere l'indagato",
      "Rifare le indagini"
    ],
    "answer": "Controllare la legittimità e il merito della misura coercitiva applicata"
  },
  {
    "id": 4119,
    "category": "Procedura Penale",
    "question": "Chi è competente ad applicare le misure cautelari?",
    "options": [
      "Il Pubblico Ministero",
      "Il Giudice",
      "La Polizia Giudiziaria",
      "Il Prefetto"
    ],
    "answer": "Il Giudice"
  },
  {
    "id": 4120,
    "category": "Procedura Penale",
    "question": "La latitanza è:",
    "options": [
      "Lo stato di chi si sottrae volontariamente a una misura cautelare, all'arresto, al fermo o all'ordine di carcerazione",
      "Una vacanza",
      "Un permesso premio",
      "L'assenza giustificata"
    ],
    "answer": "Lo stato di chi si sottrae volontariamente a una misura cautelare, all'arresto, al fermo o all'ordine di carcerazione"
  },
  {
    "id": 4120,
    "category": "Procedura Penale",
    "question": "La latitanza è:",
    "options": [
      "Lo stato di chi si sottrae volontariamente a una misura cautelare, all'arresto, al fermo o all'ordine di carcerazione",
      "Una vacanza",
      "Un permesso premio",
      "L'assenza giustificata"
    ],
    "answer": "Lo stato di chi si sottrae volontariamente a una misura cautelare, all'arresto, al fermo o all'ordine di carcerazione"
  },
  {
    "id": 4120,
    "category": "Procedura Penale",
    "question": "Quali sono le esigenze cautelari che giustificano una misura cautelare?",
    "options": [
      "Pericolo di inquinamento prove, pericolo di fuga, pericolo di reiterazione del reato",
      "Gravità del reato e precedenti penali",
      "Mancanza di collaborazione dell'indagato",
      "Clamore mediatico"
    ],
    "answer": "Pericolo di inquinamento prove, pericolo di fuga, pericolo di reiterazione del reato"
  },
  {
    "id": 4121,
    "category": "Procedura Penale",
    "question": "L'estradizione serve a:",
    "options": [
      "Consegnare una persona a uno Stato estero per essere giudicata o scontare una pena",
      "Mandare in vacanza un detenuto",
      "Espellere uno straniero irregolare",
      "Assumere un lavoratore estero"
    ],
    "answer": "Consegnare una persona a uno Stato estero per essere giudicata o scontare una pena"
  },
  {
    "id": 4121,
    "category": "Procedura Penale",
    "question": "L'estradizione serve a:",
    "options": [
      "Consegnare una persona a uno Stato estero per essere giudicata o scontare una pena",
      "Mandare in vacanza un detenuto",
      "Espellere uno straniero irregolare",
      "Assumere un lavoratore estero"
    ],
    "answer": "Consegnare una persona a uno Stato estero per essere giudicata o scontare una pena"
  },
  {
    "id": 4121,
    "category": "Procedura Penale",
    "question": "Qual è la misura cautelare personale più grave?",
    "options": [
      "Arresti domiciliari",
      "Custodia cautelare in carcere",
      "Obbligo di firma",
      "Divieto di espatrio"
    ],
    "answer": "Custodia cautelare in carcere"
  },
  {
    "id": 4122,
    "category": "Procedura Penale",
    "question": "Il mandato di arresto europeo (MAE) sostituisce:",
    "options": [
      "L'estradizione tra Paesi membri dell'UE (procedura più rapida e semplificata)",
      "Il passaporto",
      "Il visto",
      "La carta d'identità"
    ],
    "answer": "L'estradizione tra Paesi membri dell'UE (procedura più rapida e semplificata)"
  },
  {
    "id": 4122,
    "category": "Procedura Penale",
    "question": "Il mandato di arresto europeo (MAE) sostituisce:",
    "options": [
      "L'estradizione tra Paesi membri dell'UE (procedura più rapida e semplificata)",
      "Il passaporto",
      "Il visto",
      "La carta d'identità"
    ],
    "answer": "L'estradizione tra Paesi membri dell'UE (procedura più rapida e semplificata)"
  },
  {
    "id": 4122,
    "category": "Procedura Penale",
    "question": "Cosa sono le misure cautelari reali?",
    "options": [
      "Misure che incidono sui beni patrimoniali (sequestro preventivo e conservativo)",
      "Misure che incidono sulla libertà personale",
      "Misure definitive",
      "Sanzioni amministrative"
    ],
    "answer": "Misure che incidono sui beni patrimoniali (sequestro preventivo e conservativo)"
  },
  {
    "id": 4123,
    "category": "Procedura Penale",
    "question": "La rogatoria internazionale serve a:",
    "options": [
      "Chiedere a un'autorità giudiziaria estera di compiere atti processuali (es. sentire un teste, fare una perquisizione)",
      "Chiedere soldi",
      "Dichiarare guerra",
      "Fare pace"
    ],
    "answer": "Chiedere a un'autorità giudiziaria estera di compiere atti processuali (es. sentire un teste, fare una perquisizione)"
  },
  {
    "id": 4123,
    "category": "Procedura Penale",
    "question": "La rogatoria internazionale serve a:",
    "options": [
      "Chiedere a un'autorità giudiziaria estera di compiere atti processuali (es. sentire un teste, fare una perquisizione)",
      "Chiedere soldi",
      "Dichiarare guerra",
      "Fare pace"
    ],
    "answer": "Chiedere a un'autorità giudiziaria estera di compiere atti processuali (es. sentire un teste, fare una perquisizione)"
  },
  {
    "id": 4123,
    "category": "Procedura Penale",
    "question": "Chi richiede l'applicazione di una misura cautelare?",
    "options": [
      "Il Pubblico Ministero",
      "La Polizia Giudiziaria",
      "L'imputato",
      "La persona offesa"
    ],
    "answer": "Il Pubblico Ministero"
  },
  {
    "id": 4124,
    "category": "Procedura Penale",
    "question": "Il casellario giudiziale contiene:",
    "options": [
      "Le condanne penali definitive",
      "Le multe stradali",
      "I voti scolastici",
      "Le tasse pagate"
    ],
    "answer": "Le condanne penali definitive"
  },
  {
    "id": 4124,
    "category": "Procedura Penale",
    "question": "Il casellario giudiziale contiene:",
    "options": [
      "Le condanne penali definitive",
      "Le multe stradali",
      "I voti scolastici",
      "Le tasse pagate"
    ],
    "answer": "Le condanne penali definitive"
  },
  {
    "id": 4124,
    "category": "Procedura Penale",
    "question": "Cos'è il giudizio abbreviato?",
    "options": [
      "Un procedimento speciale che evita il dibattimento e prevede uno sconto di pena",
      "Un processo rapido per reati minori",
      "Un giudizio senza giudice",
      "Un processo solo per minorenni"
    ],
    "answer": "Un procedimento speciale che evita il dibattimento e prevede uno sconto di pena"
  },
  {
    "id": 4125,
    "category": "Procedura Penale",
    "question": "La riabilitazione penale serve a:",
    "options": [
      "Estinguere le pene accessorie e ogni altro effetto penale della condanna (dopo un certo tempo e buona condotta)",
      "Curare il condannato",
      "Rifare il processo",
      "Cancellare il reato"
    ],
    "answer": "Estinguere le pene accessorie e ogni altro effetto penale della condanna (dopo un certo tempo e buona condotta)"
  },
  {
    "id": 4125,
    "category": "Procedura Penale",
    "question": "La riabilitazione penale serve a:",
    "options": [
      "Estinguere le pene accessorie e ogni altro effetto penale della condanna (dopo un certo tempo e buona condotta)",
      "Curare il condannato",
      "Rifare il processo",
      "Cancellare il reato"
    ],
    "answer": "Estinguere le pene accessorie e ogni altro effetto penale della condanna (dopo un certo tempo e buona condotta)"
  },
  {
    "id": 4125,
    "category": "Procedura Penale",
    "question": "Qual è il vantaggio per l'imputato nel patteggiamento?",
    "options": [
      "Sconto di pena fino a un terzo",
      "Assoluzione automatica",
      "Nessuna pena",
      "Libertà immediata"
    ],
    "answer": "Sconto di pena fino a un terzo"
  },
  {
    "id": 4126,
    "category": "Procedura Penale",
    "question": "L'oblazione è:",
    "options": [
      "Una causa di estinzione del reato (per le contravvenzioni) mediante pagamento di una somma di denaro",
      "Una condanna",
      "Un arresto",
      "Una perquisizione"
    ],
    "answer": "Una causa di estinzione del reato (per le contravvenzioni) mediante pagamento di una somma di denaro"
  },
  {
    "id": 4126,
    "category": "Procedura Penale",
    "question": "L'oblazione è:",
    "options": [
      "Una causa di estinzione del reato (per le contravvenzioni) mediante pagamento di una somma di denaro",
      "Una condanna",
      "Un arresto",
      "Una perquisizione"
    ],
    "answer": "Una causa di estinzione del reato (per le contravvenzioni) mediante pagamento di una somma di denaro"
  },
  {
    "id": 4126,
    "category": "Procedura Penale",
    "question": "Cos'è il giudizio direttissimo?",
    "options": [
      "Un rito speciale celebrato quando l'imputato è arrestato in flagranza o ha confessato",
      "Un giudizio d'appello",
      "Un giudizio davanti alla Corte di Cassazione",
      "Un giudizio civile"
    ],
    "answer": "Un rito speciale celebrato quando l'imputato è arrestato in flagranza o ha confessato"
  },
  {
    "id": 4127,
    "category": "Procedura Penale",
    "question": "La prescrizione del reato estingue il reato:",
    "options": [
      "Per il decorso del tempo (in base alla pena massima edittale)",
      "Per la morte del reo",
      "Per il perdono della vittima",
      "Per la buona condotta"
    ],
    "answer": "Per il decorso del tempo (in base alla pena massima edittale)"
  },
  {
    "id": 4127,
    "category": "Procedura Penale",
    "question": "La prescrizione del reato estingue il reato:",
    "options": [
      "Per il decorso del tempo (in base alla pena massima edittale)",
      "Per la morte del reo",
      "Per il perdono della vittima",
      "Per la buona condotta"
    ],
    "answer": "Per il decorso del tempo (in base alla pena massima edittale)"
  },
  {
    "id": 4127,
    "category": "Procedura Penale",
    "question": "Cos'è il giudizio immediato?",
    "options": [
      "Un rito che salta l'udienza preliminare quando la prova è evidente",
      "Un giudizio senza avvocati",
      "Un giudizio per reati politici",
      "Un giudizio sommario"
    ],
    "answer": "Un rito che salta l'udienza preliminare quando la prova è evidente"
  },
  {
    "id": 4128,
    "category": "Procedura Penale",
    "question": "L'amnistia e l'indulto sono provvedimenti di clemenza concessi da:",
    "options": [
      "Parlamento (con legge approvata a maggioranza dei 2/3)",
      "Presidente della Repubblica",
      "Governo",
      "Papa"
    ],
    "answer": "Parlamento (con legge approvata a maggioranza dei 2/3)"
  },
  {
    "id": 4128,
    "category": "Procedura Penale",
    "question": "L'amnistia e l'indulto sono provvedimenti di clemenza concessi da:",
    "options": [
      "Parlamento (con legge approvata a maggioranza dei 2/3)",
      "Presidente della Repubblica",
      "Governo",
      "Papa"
    ],
    "answer": "Parlamento (con legge approvata a maggioranza dei 2/3)"
  },
  {
    "id": 4128,
    "category": "Procedura Penale",
    "question": "Cos'è il decreto penale di condanna?",
    "options": [
      "Un provvedimento emesso dal G.I.P. su richiesta del P.M. per reati punibili con pena pecuniaria, senza udienza",
      "Una sentenza della Corte d'Assise",
      "Un atto della Polizia",
      "Una condanna definitiva"
    ],
    "answer": "Un provvedimento emesso dal G.I.P. su richiesta del P.M. per reati punibili con pena pecuniaria, senza udienza"
  },
  {
    "id": 4129,
    "category": "Procedura Penale",
    "question": "La grazia è concessa da:",
    "options": [
      "Presidente della Repubblica (provvedimento individuale)",
      "Parlamento",
      "Governo",
      "Giudice"
    ],
    "answer": "Presidente della Repubblica (provvedimento individuale)"
  },
  {
    "id": 4129,
    "category": "Procedura Penale",
    "question": "La grazia è concessa da:",
    "options": [
      "Presidente della Repubblica (provvedimento individuale)",
      "Parlamento",
      "Governo",
      "Giudice"
    ],
    "answer": "Presidente della Repubblica (provvedimento individuale)"
  },
  {
    "id": 4129,
    "category": "Procedura Penale",
    "question": "L'imputato può opporsi al decreto penale di condanna?",
    "options": [
      "Sì, entro 15 giorni dalla notificazione",
      "No, è definitivo",
      "Solo se è innocente",
      "Solo se paga una cauzione"
    ],
    "answer": "Sì, entro 15 giorni dalla notificazione"
  },
  {
    "id": 4130,
    "category": "Procedura Penale",
    "question": "Il patrocinio a spese dello Stato (Gratuito Patrocinio) è garantito a:",
    "options": [
      "Chi non ha reddito sufficiente (sotto una certa soglia) per pagarsi un avvocato",
      "Tutti",
      "Solo agli innocenti",
      "Solo agli stranieri"
    ],
    "answer": "Chi non ha reddito sufficiente (sotto una certa soglia) per pagarsi un avvocato"
  },
  {
    "id": 4130,
    "category": "Procedura Penale",
    "question": "Il patrocinio a spese dello Stato (Gratuito Patrocinio) è garantito a:",
    "options": [
      "Chi non ha reddito sufficiente (sotto una certa soglia) per pagarsi un avvocato",
      "Tutti",
      "Solo agli innocenti",
      "Solo agli stranieri"
    ],
    "answer": "Chi non ha reddito sufficiente (sotto una certa soglia) per pagarsi un avvocato"
  },
  {
    "id": 4130,
    "category": "Procedura Penale",
    "question": "Qual è la funzione dell'udienza preliminare?",
    "options": [
      "Filtrare le accuse infondate e decidere il rinvio a giudizio",
      "Emettere la sentenza di condanna",
      "Ascoltare i testimoni",
      "Arrestare l'imputato"
    ],
    "answer": "Filtrare le accuse infondate e decidere il rinvio a giudizio"
  },
  {
    "id": 4131,
    "category": "Procedura Penale",
    "question": "Il difensore d'ufficio è:",
    "options": [
      "Nominato dall'autorità giudiziaria o P.G. a chi non ha un difensore di fiducia (e deve essere retribuito dall'assistito, se non ammesso al gratuito patrocinio)",
      "Gratis sempre",
      "Un dipendente pubblico",
      "Un giudice"
    ],
    "answer": "Nominato dall'autorità giudiziaria o P.G. a chi non ha un difensore di fiducia (e deve essere retribuito dall'assistito, se non ammesso al gratuito patrocinio)"
  },
  {
    "id": 4131,
    "category": "Procedura Penale",
    "question": "Il difensore d'ufficio è:",
    "options": [
      "Nominato dall'autorità giudiziaria o P.G. a chi non ha un difensore di fiducia (e deve essere retribuito dall'assistito, se non ammesso al gratuito patrocinio)",
      "Gratis sempre",
      "Un dipendente pubblico",
      "Un giudice"
    ],
    "answer": "Nominato dall'autorità giudiziaria o P.G. a chi non ha un difensore di fiducia (e deve essere retribuito dall'assistito, se non ammesso al gratuito patrocinio)"
  },
  {
    "id": 4131,
    "category": "Procedura Penale",
    "question": "Chi è il G.U.P.?",
    "options": [
      "Giudice dell'Udienza Preliminare",
      "Giudice Unico Penale",
      "Guardia Ufficiale di Polizia",
      "Gruppo Unità Polizia"
    ],
    "answer": "Giudice dell'Udienza Preliminare"
  },
  {
    "id": 4132,
    "category": "Procedura Penale",
    "question": "La parte civile nel processo penale è:",
    "options": [
      "La persona danneggiata dal reato che chiede il risarcimento dei danni",
      "Il P.M.",
      "L'imputato",
      "Il testimone"
    ],
    "answer": "La persona danneggiata dal reato che chiede il risarcimento dei danni"
  },
  {
    "id": 4132,
    "category": "Procedura Penale",
    "question": "La parte civile nel processo penale è:",
    "options": [
      "La persona danneggiata dal reato che chiede il risarcimento dei danni",
      "Il P.M.",
      "L'imputato",
      "Il testimone"
    ],
    "answer": "La persona danneggiata dal reato che chiede il risarcimento dei danni"
  },
  {
    "id": 4132,
    "category": "Procedura Penale",
    "question": "Come si conclude l'udienza preliminare se l'accusa è fondata?",
    "options": [
      "Con il decreto che dispone il giudizio",
      "Con l'archiviazione",
      "Con l'assoluzione",
      "Con l'arresto"
    ],
    "answer": "Con il decreto che dispone il giudizio"
  },
  {
    "id": 4133,
    "category": "Procedura Penale",
    "question": "Il responsabile civile è:",
    "options": [
      "Il soggetto tenuto a risarcire il danno causato dall'imputato (es. assicurazione, datore di lavoro)",
      "L'imputato",
      "La vittima",
      "Il giudice"
    ],
    "answer": "Il soggetto tenuto a risarcire il danno causato dall'imputato (es. assicurazione, datore di lavoro)"
  },
  {
    "id": 4133,
    "category": "Procedura Penale",
    "question": "Il responsabile civile è:",
    "options": [
      "Il soggetto tenuto a risarcire il danno causato dall'imputato (es. assicurazione, datore di lavoro)",
      "L'imputato",
      "La vittima",
      "Il giudice"
    ],
    "answer": "Il soggetto tenuto a risarcire il danno causato dall'imputato (es. assicurazione, datore di lavoro)"
  },
  {
    "id": 4133,
    "category": "Procedura Penale",
    "question": "Come si conclude l'udienza preliminare se l'accusa è infondata?",
    "options": [
      "Con sentenza di non luogo a procedere",
      "Con condanna",
      "Con rinvio a giudizio",
      "Con una multa"
    ],
    "answer": "Con sentenza di non luogo a procedere"
  },
  {
    "id": 4134,
    "category": "Procedura Penale",
    "question": "La competenza per territorio è determinata di regola:",
    "options": [
      "Dal luogo in cui il reato è stato consumato",
      "Dalla residenza dell'imputato",
      "Dalla residenza della vittima",
      "Dal luogo dell'arresto"
    ],
    "answer": "Dal luogo in cui il reato è stato consumato"
  },
  {
    "id": 4134,
    "category": "Procedura Penale",
    "question": "La competenza per territorio è determinata di regola:",
    "options": [
      "Dal luogo in cui il reato è stato consumato",
      "Dalla residenza dell'imputato",
      "Dalla residenza della vittima",
      "Dal luogo dell'arresto"
    ],
    "answer": "Dal luogo in cui il reato è stato consumato"
  },
  {
    "id": 4134,
    "category": "Procedura Penale",
    "question": "Cosa succede nel dibattimento?",
    "options": [
      "Si forma la prova nel contraddittorio tra le parti",
      "Si svolgono le indagini preliminari",
      "Si decide l'arresto",
      "Si interroga solo l'imputato"
    ],
    "answer": "Si forma la prova nel contraddittorio tra le parti"
  },
  {
    "id": 4135,
    "category": "Procedura Penale",
    "question": "La connessione di procedimenti si ha quando:",
    "options": [
      "Più reati sono collegati (es. concorso di persone, reato continuato) e vengono trattati insieme",
      "I giudici sono amici",
      "Gli avvocati sono parenti",
      "I processi sono nello stesso giorno"
    ],
    "answer": "Più reati sono collegati (es. concorso di persone, reato continuato) e vengono trattati insieme"
  },
  {
    "id": 4135,
    "category": "Procedura Penale",
    "question": "La connessione di procedimenti si ha quando:",
    "options": [
      "Più reati sono collegati (es. concorso di persone, reato continuato) e vengono trattati insieme",
      "I giudici sono amici",
      "Gli avvocati sono parenti",
      "I processi sono nello stesso giorno"
    ],
    "answer": "Più reati sono collegati (es. concorso di persone, reato continuato) e vengono trattati insieme"
  },
  {
    "id": 4135,
    "category": "Procedura Penale",
    "question": "Chi dirige il dibattimento?",
    "options": [
      "Il Presidente del Collegio o il Giudice Monocratico",
      "Il Pubblico Ministero",
      "L'avvocato difensore",
      "Il Cancelliere"
    ],
    "answer": "Il Presidente del Collegio o il Giudice Monocratico"
  },
  {
    "id": 4136,
    "category": "Procedura Penale",
    "question": "L'astensione e la ricusazione riguardano:",
    "options": [
      "L'imparzialità del giudice (che deve astenersi o può essere ricusato se ha interessi nel processo)",
      "L'avvocato",
      "Il P.M.",
      "Il testimone"
    ],
    "answer": "L'imparzialità del giudice (che deve astenersi o può essere ricusato se ha interessi nel processo)"
  },
  {
    "id": 4136,
    "category": "Procedura Penale",
    "question": "L'astensione e la ricusazione riguardano:",
    "options": [
      "L'imparzialità del giudice (che deve astenersi o può essere ricusato se ha interessi nel processo)",
      "L'avvocato",
      "Il P.M.",
      "Il testimone"
    ],
    "answer": "L'imparzialità del giudice (che deve astenersi o può essere ricusato se ha interessi nel processo)"
  },
  {
    "id": 4136,
    "category": "Procedura Penale",
    "question": "Cos'è l'esame incrociato (cross examination)?",
    "options": [
      "Il metodo di assunzione della prova orale in dibattimento (domande di P.M. e difensori)",
      "Un confronto tra imputati",
      "Un interrogatorio di polizia",
      "Un esame medico"
    ],
    "answer": "Il metodo di assunzione della prova orale in dibattimento (domande di P.M. e difensori)"
  },
  {
    "id": 4137,
    "category": "Procedura Penale",
    "question": "La nullità degli atti processuali si ha quando:",
    "options": [
      "L'atto è compiuto senza l'osservanza delle disposizioni stabilite dalla legge a pena di nullità",
      "L'atto è scritto male",
      "L'atto è lungo",
      "L'atto è noioso"
    ],
    "answer": "L'atto è compiuto senza l'osservanza delle disposizioni stabilite dalla legge a pena di nullità"
  },
  {
    "id": 4137,
    "category": "Procedura Penale",
    "question": "La nullità degli atti processuali si ha quando:",
    "options": [
      "L'atto è compiuto senza l'osservanza delle disposizioni stabilite dalla legge a pena di nullità",
      "L'atto è scritto male",
      "L'atto è lungo",
      "L'atto è noioso"
    ],
    "answer": "L'atto è compiuto senza l'osservanza delle disposizioni stabilite dalla legge a pena di nullità"
  },
  {
    "id": 4137,
    "category": "Procedura Penale",
    "question": "Il giudice può disporre l'assunzione di nuove prove d'ufficio in dibattimento?",
    "options": [
      "Sì, se assolutamente necessario (art. 507 c.p.p.)",
      "No, mai",
      "Solo su richiesta del P.M.",
      "Solo su richiesta della difesa"
    ],
    "answer": "Sì, se assolutamente necessario (art. 507 c.p.p.)"
  },
  {
    "id": 4138,
    "category": "Procedura Penale",
    "question": "La notificazione serve a:",
    "options": [
      "Portare a conoscenza legale di un destinatario un atto del procedimento",
      "Salutare qualcuno",
      "Spedire un pacco",
      "Fare pubblicità"
    ],
    "answer": "Portare a conoscenza legale di un destinatario un atto del procedimento"
  },
  {
    "id": 4138,
    "category": "Procedura Penale",
    "question": "La notificazione serve a:",
    "options": [
      "Portare a conoscenza legale di un destinatario un atto del procedimento",
      "Salutare qualcuno",
      "Spedire un pacco",
      "Fare pubblicità"
    ],
    "answer": "Portare a conoscenza legale di un destinatario un atto del procedimento"
  },
  {
    "id": 4138,
    "category": "Procedura Penale",
    "question": "Quali sono i possibili esiti della sentenza dibattimentale?",
    "options": [
      "Condanna o proscioglimento (assoluzione o non doversi procedere)",
      "Solo condanna",
      "Solo assoluzione",
      "Rinvio a giudizio"
    ],
    "answer": "Condanna o proscioglimento (assoluzione o non doversi procedere)"
  },
  {
    "id": 4139,
    "category": "Procedura Penale",
    "question": "Se l'imputato è irreperibile:",
    "options": [
      "Viene emesso decreto di irreperibilità e nominato un difensore d'ufficio (il processo prosegue, ma con garanzie sospensive se l'assenza è incolpevole)",
      "Il processo si ferma per sempre",
      "Viene condannato subito",
      "Viene assolto subito"
    ],
    "answer": "Viene emesso decreto di irreperibilità e nominato un difensore d'ufficio (il processo prosegue, ma con garanzie sospensive se l'assenza è incolpevole)"
  },
  {
    "id": 4139,
    "category": "Procedura Penale",
    "question": "Se l'imputato è irreperibile:",
    "options": [
      "Viene emesso decreto di irreperibilità e nominato un difensore d'ufficio (il processo prosegue, ma con garanzie sospensive se l'assenza è incolpevole)",
      "Il processo si ferma per sempre",
      "Viene condannato subito",
      "Viene assolto subito"
    ],
    "answer": "Viene emesso decreto di irreperibilità e nominato un difensore d'ufficio (il processo prosegue, ma con garanzie sospensive se l'assenza è incolpevole)"
  },
  {
    "id": 4139,
    "category": "Procedura Penale",
    "question": "Cosa significa 'in dubio pro reo'?",
    "options": [
      "Se la prova manca o è insufficiente, l'imputato va assolto",
      "Nel dubbio bisogna condannare",
      "Il dubbio favorisce l'accusa",
      "Il giudice decide a caso"
    ],
    "answer": "Se la prova manca o è insufficiente, l'imputato va assolto"
  },
  {
    "id": 4140,
    "category": "Procedura Penale",
    "question": "Il processo in assenza (contumacia, ora assenza) è ammesso?",
    "options": [
      "Sì, se l'imputato ha avuto conoscenza del processo e ha scelto volontariamente di non comparire",
      "No, mai",
      "Sì, sempre",
      "Solo per reati lievi"
    ],
    "answer": "Sì, se l'imputato ha avuto conoscenza del processo e ha scelto volontariamente di non comparire"
  },
  {
    "id": 4140,
    "category": "Procedura Penale",
    "question": "Il processo in assenza (contumacia, ora assenza) è ammesso?",
    "options": [
      "Sì, se l'imputato ha avuto conoscenza del processo e ha scelto volontariamente di non comparire",
      "No, mai",
      "Sì, sempre",
      "Solo per reati lievi"
    ],
    "answer": "Sì, se l'imputato ha avuto conoscenza del processo e ha scelto volontariamente di non comparire"
  },
  {
    "id": 4140,
    "category": "Procedura Penale",
    "question": "Qual è il termine per proporre appello contro una sentenza?",
    "options": [
      "Generalmente 15, 30 o 45 giorni a seconda dei casi",
      "3 giorni",
      "1 anno",
      "Sempre 60 giorni"
    ],
    "answer": "Generalmente 15, 30 o 45 giorni a seconda dei casi"
  },
  {
    "id": 4141,
    "category": "Procedura Penale",
    "question": "La sentenza diventa irrevocabile (passa in giudicato) quando:",
    "options": [
      "Non è più impugnabile (sono scaduti i termini o esauriti i gradi di giudizio)",
      "Viene letta in udienza",
      "Viene scritta",
      "Viene firmata"
    ],
    "answer": "Non è più impugnabile (sono scaduti i termini o esauriti i gradi di giudizio)"
  },
  {
    "id": 4141,
    "category": "Procedura Penale",
    "question": "La sentenza diventa irrevocabile (passa in giudicato) quando:",
    "options": [
      "Non è più impugnabile (sono scaduti i termini o esauriti i gradi di giudizio)",
      "Viene letta in udienza",
      "Viene scritta",
      "Viene firmata"
    ],
    "answer": "Non è più impugnabile (sono scaduti i termini o esauriti i gradi di giudizio)"
  },
  {
    "id": 4141,
    "category": "Procedura Penale",
    "question": "Cosa giudica la Corte di Cassazione?",
    "options": [
      "La legittimità della sentenza (violazioni di legge, vizi di motivazione)",
      "Il merito dei fatti",
      "La colpevolezza dell'imputato",
      "L'ammontare della pena"
    ],
    "answer": "La legittimità della sentenza (violazioni di legge, vizi di motivazione)"
  },
  {
    "id": 4142,
    "category": "Procedura Penale",
    "question": "Il principio del 'favor rei' nelle impugnazioni significa:",
    "options": [
      "In caso di dubbio o parità, prevale la soluzione più favorevole all'imputato (e divieto di reformatio in peius se appella solo l'imputato)",
      "L'imputato ha sempre ragione",
      "Il P.M. ha sempre ragione",
      "Il giudice decide a caso"
    ],
    "answer": "In caso di dubbio o parità, prevale la soluzione più favorevole all'imputato (e divieto di reformatio in peius se appella solo l'imputato)"
  },
  {
    "id": 4142,
    "category": "Procedura Penale",
    "question": "Il principio del 'favor rei' nelle impugnazioni significa:",
    "options": [
      "In caso di dubbio o parità, prevale la soluzione più favorevole all'imputato (e divieto di reformatio in peius se appella solo l'imputato)",
      "L'imputato ha sempre ragione",
      "Il P.M. ha sempre ragione",
      "Il giudice decide a caso"
    ],
    "answer": "In caso di dubbio o parità, prevale la soluzione più favorevole all'imputato (e divieto di reformatio in peius se appella solo l'imputato)"
  },
  {
    "id": 4142,
    "category": "Procedura Penale",
    "question": "Quando una sentenza diventa irrevocabile (passa in giudicato)?",
    "options": [
      "Quando sono esauriti i mezzi di impugnazione ordinari o sono scaduti i termini",
      "Appena viene emessa",
      "Dopo 10 anni",
      "Mai"
    ],
    "answer": "Quando sono esauriti i mezzi di impugnazione ordinari o sono scaduti i termini"
  },
  {
    "id": 4143,
    "category": "Procedura Penale",
    "question": "L'esecuzione della pena detentiva è curata da:",
    "options": [
      "P.M. (che emette l'ordine di esecuzione) e Magistratura di Sorveglianza (che vigila sull'esecuzione)",
      "Polizia",
      "Sindaco",
      "Avvocato"
    ],
    "answer": "P.M. (che emette l'ordine di esecuzione) e Magistratura di Sorveglianza (che vigila sull'esecuzione)"
  },
  {
    "id": 4143,
    "category": "Procedura Penale",
    "question": "L'esecuzione della pena detentiva è curata da:",
    "options": [
      "P.M. (che emette l'ordine di esecuzione) e Magistratura di Sorveglianza (che vigila sull'esecuzione)",
      "Polizia",
      "Sindaco",
      "Avvocato"
    ],
    "answer": "P.M. (che emette l'ordine di esecuzione) e Magistratura di Sorveglianza (che vigila sull'esecuzione)"
  },
  {
    "id": 4143,
    "category": "Procedura Penale",
    "question": "Cos'è la revisione del processo?",
    "options": [
      "Un mezzo di impugnazione straordinario per revocare una condanna definitiva in presenza di nuove prove",
      "Un nuovo appello",
      "Un ricorso in Cassazione",
      "Una grazia presidenziale"
    ],
    "answer": "Un mezzo di impugnazione straordinario per revocare una condanna definitiva in presenza di nuove prove"
  },
  {
    "id": 4144,
    "category": "Procedura Penale",
    "question": "Le misure alternative alla detenzione (es. affidamento in prova) servono a:",
    "options": [
      "Favorire il reinserimento sociale del condannato (funzione rieducativa della pena)",
      "Svuotare le carceri",
      "Fare sconti",
      "Punire di più"
    ],
    "answer": "Favorire il reinserimento sociale del condannato (funzione rieducativa della pena)"
  },
  {
    "id": 4144,
    "category": "Procedura Penale",
    "question": "Le misure alternative alla detenzione (es. affidamento in prova) servono a:",
    "options": [
      "Favorire il reinserimento sociale del condannato (funzione rieducativa della pena)",
      "Svuotare le carceri",
      "Fare sconti",
      "Punire di più"
    ],
    "answer": "Favorire il reinserimento sociale del condannato (funzione rieducativa della pena)"
  },
  {
    "id": 4144,
    "category": "Procedura Penale",
    "question": "Chi esegue le sentenze di condanna divenute definitive?",
    "options": [
      "Il Pubblico Ministero",
      "Il Giudice",
      "La Polizia Penitenziaria",
      "Il Sindaco"
    ],
    "answer": "Il Pubblico Ministero"
  },
  {
    "id": 4145,
    "category": "Procedura Penale",
    "question": "Il Tribunale per i Minorenni giudica:",
    "options": [
      "I reati commessi da minori di 18 anni (con regole specifiche a tutela del minore)",
      "I reati contro i minori",
      "I reati dei genitori",
      "I reati scolastici"
    ],
    "answer": "I reati commessi da minori di 18 anni (con regole specifiche a tutela del minore)"
  },
  {
    "id": 4145,
    "category": "Procedura Penale",
    "question": "Il Tribunale per i Minorenni giudica:",
    "options": [
      "I reati commessi da minori di 18 anni (con regole specifiche a tutela del minore)",
      "I reati contro i minori",
      "I reati dei genitori",
      "I reati scolastici"
    ],
    "answer": "I reati commessi da minori di 18 anni (con regole specifiche a tutela del minore)"
  },
  {
    "id": 4145,
    "category": "Procedura Penale",
    "question": "Qual è la funzione del Tribunale di Sorveglianza?",
    "options": [
      "Vigilare sull'esecuzione della pena e concedere misure alternative",
      "Giudicare i reati commessi in carcere",
      "Sorvegliare la Polizia",
      "Arrestare i latitanti"
    ],
    "answer": "Vigilare sull'esecuzione della pena e concedere misure alternative"
  },
  {
    "id": 4146,
    "category": "Procedura Penale",
    "question": "Nel processo minorile l'arresto è:",
    "options": [
      "Facoltativo o obbligatorio solo per reati gravissimi, e il minore non va in carcere con gli adulti",
      "Sempre obbligatorio",
      "Vietato",
      "Uguale agli adulti"
    ],
    "answer": "Facoltativo o obbligatorio solo per reati gravissimi, e il minore non va in carcere con gli adulti"
  },
  {
    "id": 4146,
    "category": "Procedura Penale",
    "question": "Nel processo minorile l'arresto è:",
    "options": [
      "Facoltativo o obbligatorio solo per reati gravissimi, e il minore non va in carcere con gli adulti",
      "Sempre obbligatorio",
      "Vietato",
      "Uguale agli adulti"
    ],
    "answer": "Facoltativo o obbligatorio solo per reati gravissimi, e il minore non va in carcere con gli adulti"
  },
  {
    "id": 4146,
    "category": "Procedura Penale",
    "question": "Cosa sono le misure alternative alla detenzione?",
    "options": [
      "Misure che consentono di scontare la pena fuori dal carcere (es. affidamento in prova)",
      "Pene pecuniarie",
      "Assoluzioni",
      "Sconti di pena"
    ],
    "answer": "Misure che consentono di scontare la pena fuori dal carcere (es. affidamento in prova)"
  },
  {
    "id": 4147,
    "category": "Procedura Penale",
    "question": "Il perdono giudiziale per i minori è:",
    "options": [
      "Una causa di estinzione del reato applicabile dal giudice se ritiene che il minore non commetterà altri reati (una sola volta)",
      "Un'assoluzione",
      "Una condanna",
      "Una multa"
    ],
    "answer": "Una causa di estinzione del reato applicabile dal giudice se ritiene che il minore non commetterà altri reati (una sola volta)"
  },
  {
    "id": 4147,
    "category": "Procedura Penale",
    "question": "Il perdono giudiziale per i minori è:",
    "options": [
      "Una causa di estinzione del reato applicabile dal giudice se ritiene che il minore non commetterà altri reati (una sola volta)",
      "Un'assoluzione",
      "Una condanna",
      "Una multa"
    ],
    "answer": "Una causa di estinzione del reato applicabile dal giudice se ritiene che il minore non commetterà altri reati (una sola volta)"
  },
  {
    "id": 4147,
    "category": "Procedura Penale",
    "question": "Quando si applica l'affidamento in prova al servizio sociale?",
    "options": [
      "Per pene detentive non superiori a 3 anni (o 4 in casi particolari)",
      "Solo per l'ergastolo",
      "Per pene superiori a 10 anni",
      "Mai"
    ],
    "answer": "Per pene detentive non superiori a 3 anni (o 4 in casi particolari)"
  },
  {
    "id": 4148,
    "category": "Procedura Penale",
    "question": "La competenza per materia si determina in base a:",
    "options": [
      "Tipo di reato e pena edittale (Corte d'Assise, Tribunale, Giudice di Pace)",
      "Luogo del reato",
      "Età dell'imputato",
      "Nome dell'imputato"
    ],
    "answer": "Tipo di reato e pena edittale (Corte d'Assise, Tribunale, Giudice di Pace)"
  },
  {
    "id": 4148,
    "category": "Procedura Penale",
    "question": "La competenza per materia si determina in base a:",
    "options": [
      "Tipo di reato e pena edittale (Corte d'Assise, Tribunale, Giudice di Pace)",
      "Luogo del reato",
      "Età dell'imputato",
      "Nome dell'imputato"
    ],
    "answer": "Tipo di reato e pena edittale (Corte d'Assise, Tribunale, Giudice di Pace)"
  },
  {
    "id": 4148,
    "category": "Procedura Penale",
    "question": "Cos'è la detenzione domiciliare?",
    "options": [
      "L'espiazione della pena nella propria abitazione per particolari categorie di condannati",
      "L'arresto in casa",
      "Una misura cautelare",
      "Una vacanza premio"
    ],
    "answer": "L'espiazione della pena nella propria abitazione per particolari categorie di condannati"
  },
  {
    "id": 4149,
    "category": "Procedura Penale",
    "question": "Il Giudice di Pace penale applica pene detentive?",
    "options": [
      "No, solo pene pecuniarie, permanenza domiciliare o lavoro di pubblica utilità",
      "Sì, fino a 5 anni",
      "Sì, l'ergastolo",
      "Sì, ma solo per furto"
    ],
    "answer": "No, solo pene pecuniarie, permanenza domiciliare o lavoro di pubblica utilità"
  },
  {
    "id": 4149,
    "category": "Procedura Penale",
    "question": "Il Giudice di Pace penale applica pene detentive?",
    "options": [
      "No, solo pene pecuniarie, permanenza domiciliare o lavoro di pubblica utilità",
      "Sì, fino a 5 anni",
      "Sì, l'ergastolo",
      "Sì, ma solo per furto"
    ],
    "answer": "No, solo pene pecuniarie, permanenza domiciliare o lavoro di pubblica utilità"
  },
  {
    "id": 4149,
    "category": "Procedura Penale",
    "question": "Cos'è la liberazione anticipata?",
    "options": [
      "Uno sconto di pena di 45 giorni ogni semestre per buona condotta",
      "La scarcerazione immediata",
      "L'indulto",
      "L'amnistia"
    ],
    "answer": "Uno sconto di pena di 45 giorni ogni semestre per buona condotta"
  },
  {
    "id": 4150,
    "category": "Procedura Penale",
    "question": "La riforma Cartabia mira principalmente a:",
    "options": [
      "Ridurre i tempi del processo (efficienza) e potenziare le pene alternative e la giustizia riparativa",
      "Aumentare le pene",
      "Costruire nuove carceri",
      "Assumere più poliziotti"
    ],
    "answer": "Ridurre i tempi del processo (efficienza) e potenziare le pene alternative e la giustizia riparativa"
  },
  {
    "id": 4150,
    "category": "Procedura Penale",
    "question": "La riforma Cartabia mira principalmente a:",
    "options": [
      "Ridurre i tempi del processo (efficienza) e potenziare le pene alternative e la giustizia riparativa",
      "Aumentare le pene",
      "Costruire nuove carceri",
      "Assumere più poliziotti"
    ],
    "answer": "Ridurre i tempi del processo (efficienza) e potenziare le pene alternative e la giustizia riparativa"
  },
  {
    "id": 4150,
    "category": "Procedura Penale",
    "question": "Chi decide sulle misure alternative alla detenzione?",
    "options": [
      "Il Tribunale di Sorveglianza",
      "Il Direttore del carcere",
      "Il P.M.",
      "Il Ministro della Giustizia"
    ],
    "answer": "Il Tribunale di Sorveglianza"
  }
];