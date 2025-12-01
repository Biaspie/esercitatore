document.addEventListener('DOMContentLoaded', () => {
    const manualsList = document.getElementById('manuals-list');
    const manualTitle = document.getElementById('manual-title');
    const manualViewer = document.getElementById('manual-viewer');

    // Define the structure of manuals
    const manuals = [
        {
            title: "Legislazione di P.S.",
            file: "Fonti/06 Legislazione PS giugno 2021 (1) conv.txt"
        },
        {
            title: "Diritto Penale",
            file: "Fonti/Diritto penale luglio 2024 (1) conv.txt"
        },
        {
            title: "Diritto Costituzionale",
            file: "Fonti/Diritto-Costituzionale_agg.-al-06.06.22 conv.txt"
        },
        {
            title: "Procedura Penale",
            file: "Fonti/Procedura penale luglio 2024 conv.txt"
        },
        {
            title: "Normativa Disciplinare",
            file: "Fonti/normativa_disciplinare.txt"
        },
        {
            title: "Informatica",
            isGroup: true,
            items: [
                { title: "Informatica di Base", file: "Fonti/Nuova cartella/2. Lezione informatica di base slide conv.txt" },
                { title: "Strumenti di Programmazione", file: "Fonti/Nuova cartella/3. Strumenti di programmazione conv.txt" },
                { title: "Prompt dei Comandi", file: "Fonti/Nuova cartella/4. Prompt dei comandi conv.txt" },
                { title: "Variabili e Istruzioni", file: "Fonti/Nuova cartella/5. Variabili e Istruzioni conv.txt" },
                { title: "Tipi di Espressioni pt. 1", file: "Fonti/Nuova cartella/6. Tipi di Espressioni pt. 1 conv.txt" },
                { title: "Tipi di Espressioni pt. 2", file: "Fonti/Nuova cartella/7. Tipi di Espressioni pt. 2 conv.txt" },
                { title: "Logica Booleana", file: "Fonti/Nuova cartella/8. Tipi di Espressioni - Logica Booleana conv.txt" },
                { title: "Rappresentazione Binaria", file: "Fonti/Nuova cartella/9. Rappresentazione Binaria conv.txt" },
                { title: "Problemi e Algoritmi pt. 1", file: "Fonti/Nuova cartella/10.  Problemi e Algoritmi pt. 1 conv.txt" },
                { title: "Problemi e Algoritmi pt. 2", file: "Fonti/Nuova cartella/11. Problemi e Algoritmi pt. 2 conv.txt" },
                { title: "Problemi e Algoritmi pt. 3", file: "Fonti/Nuova cartella/12. Problemi e Algoritmi pt. 3 conv.txt" },
                { title: "Istruzioni Condizionali", file: "Fonti/Nuova cartella/13. Istruzioni condizionali in C conv.txt" },
                { title: "Istruzioni Ripetitive", file: "Fonti/Nuova cartella/14. Istruzioni Ripetitive in C conv.txt" },
                { title: "Errori", file: "Fonti/Nuova cartella/15.1 Errori conv.txt" },
                { title: "Stile di Programmazione", file: "Fonti/Nuova cartella/15.2 Stile di Programmazione conv.txt" },
                { title: "Funzioni pt. 1", file: "Fonti/Nuova cartella/16. Funzioni pt. 1 conv.txt" },
                { title: "Funzioni pt. 2", file: "Fonti/Nuova cartella/17. Funzioni pt. 2 conv.txt" },
                { title: "Array pt. 1", file: "Fonti/Nuova cartella/18. Array pt. 1 conv.txt" },
                { title: "Array pt. 2", file: "Fonti/Nuova cartella/19. Array pt. 2 conv.txt" },
                { title: "Array pt. 3", file: "Fonti/Nuova cartella/20. Array pt. 3 conv.txt" },
                { title: "Stringhe", file: "Fonti/Nuova cartella/21. Stringhe conv.txt" }
            ]
        }
    ];

    renderMenu();

    function renderMenu() {
        manualsList.innerHTML = '';
        manuals.forEach(item => {
            if (item.isGroup) {
                const groupDiv = document.createElement('div');
                groupDiv.className = 'manual-group';

                const groupTitle = document.createElement('div');
                groupTitle.className = 'manual-group-title';
                groupTitle.textContent = item.title;
                groupTitle.addEventListener('click', () => {
                    groupDiv.classList.toggle('expanded');
                });

                const groupItems = document.createElement('div');
                groupItems.className = 'manual-group-items';

                item.items.forEach(subItem => {
                    const btn = createManualButton(subItem.title, subItem.file);
                    groupItems.appendChild(btn);
                });

                groupDiv.appendChild(groupTitle);
                groupDiv.appendChild(groupItems);
                manualsList.appendChild(groupDiv);
            } else {
                const btn = createManualButton(item.title, item.file);
                manualsList.appendChild(btn);
            }
        });
    }

    function createManualButton(title, filePath) {
        const btn = document.createElement('button');
        btn.className = 'manual-btn';
        btn.textContent = title;
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.manual-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadManual(title, filePath);
        });
        return btn;
    }

    async function loadManual(title, filePath) {
        manualTitle.textContent = title;
        manualViewer.innerHTML = '<div class="loading">Caricamento in corso...</div>';

        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error("File non trovato");

            const text = await response.text();

            // Improved formatting:
            // 1. Split by double newlines (paragraphs) to handle the "too many spaces" issue
            // 2. Join single newlines within a paragraph with a space to create continuous text
            // 3. Filter out empty paragraphs

            const paragraphs = text.split(/\n\s*\n/);

            const formattedHtml = paragraphs
                .filter(p => p.trim().length > 0) // Remove empty blocks
                .map(p => {
                    let cleanPara = p.replace(/\r/g, '').trim();

                    // Replace single newlines with spaces, but keep the text flow
                    cleanPara = cleanPara.replace(/\n/g, ' ');

                    // Collapse multiple spaces into one
                    cleanPara = cleanPara.replace(/\s+/g, ' ');

                    return `<p>${cleanPara}</p>`;
                })
                .join('');

            manualViewer.innerHTML = `<div class="text-content">${formattedHtml}</div>`;
        } catch (error) {
            manualViewer.innerHTML = `<div class="error">Errore nel caricamento del manuale: ${error.message}</div>`;
        }
    }
});
