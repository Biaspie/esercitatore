document.addEventListener('DOMContentLoaded', () => {
    const manualsList = document.getElementById('manuals-list');
    const manualTitle = document.getElementById('manual-title');
    document.addEventListener('DOMContentLoaded', () => {
        const manualsList = document.getElementById('manuals-list');
        const manualTitle = document.getElementById('manual-title');
        const manualViewer = document.getElementById('manual-viewer');

        // Define the structure of manuals
        const manuals = [
            {
                title: "Legislazione di P.S.",
                file: "Fonti/PDF/06 Legislazione PS giugno 2021 (1).pdf"
            },
            {
                title: "Diritto Penale",
                file: "Fonti/PDF/Diritto penale luglio 2024 (1).pdf"
            },
            {
                title: "Diritto Costituzionale",
                file: "Fonti/PDF/Diritto-Costituzionale_agg.-al-06.06.22.pdf"
            },
            {
                title: "Procedura Penale",
                file: "Fonti/PDF/Procedura penale luglio 2024.pdf"
            },
            {
                title: "Normativa Disciplinare",
                file: "Fonti/PDF/4a settimana - Normativa Disciplinare.pdf"
            },
            {
                title: "Informatica",
                isGroup: true,
                items: [
                    { title: "Informatica di Base", file: "Fonti/PDF/Informatica/2. Lezione informatica di base slide.pdf" },
                    { title: "Strumenti di Programmazione", file: "Fonti/PDF/Informatica/3. Strumenti di programmazione.pdf" },
                    { title: "Prompt dei Comandi", file: "Fonti/PDF/Informatica/4. Prompt dei comandi.pdf" },
                    { title: "Variabili e Istruzioni", file: "Fonti/PDF/Informatica/5. Variabili e Istruzioni.pdf" },
                    { title: "Tipi di Espressioni pt. 1", file: "Fonti/PDF/Informatica/6. Tipi di Espressioni pt. 1.pdf" },
                    { title: "Tipi di Espressioni pt. 2", file: "Fonti/PDF/Informatica/7. Tipi di Espressioni pt. 2.pdf" },
                    { title: "Logica Booleana", file: "Fonti/PDF/Informatica/8. Tipi di Espressioni - Logica Booleana.pdf" },
                    { title: "Rappresentazione Binaria", file: "Fonti/PDF/Informatica/9. Rappresentazione Binaria.pdf" },
                    { title: "Problemi e Algoritmi pt. 1", file: "Fonti/PDF/Informatica/10.  Problemi e Algoritmi pt. 1.pdf" },
                    { title: "Problemi e Algoritmi pt. 2", file: "Fonti/PDF/Informatica/11. Problemi e Algoritmi pt. 2.pdf" },
                    { title: "Problemi e Algoritmi pt. 3", file: "Fonti/PDF/Informatica/12. Problemi e Algoritmi pt. 3.pdf" },
                    { title: "Istruzioni Condizionali", file: "Fonti/PDF/Informatica/13. Istruzioni condizionali in C.pdf" },
                    { title: "Istruzioni Ripetitive", file: "Fonti/PDF/Informatica/14. Istruzioni Ripetitive in C.pdf" },
                    { title: "Errori", file: "Fonti/PDF/Informatica/15.1 Errori.pdf" },
                    { title: "Stile di Programmazione", file: "Fonti/PDF/Informatica/15.2 Stile di Programmazione.pdf" },
                    { title: "Funzioni pt. 1", file: "Fonti/PDF/Informatica/16. Funzioni pt. 1.pdf" },
                    { title: "Funzioni pt. 2", file: "Fonti/PDF/Informatica/17. Funzioni pt. 2.pdf" },
                    { title: "Array pt. 1", file: "Fonti/PDF/Informatica/18. Array pt. 1.pdf" },
                    { title: "Array pt. 2", file: "Fonti/PDF/Informatica/19. Array pt. 2.pdf" },
                    { title: "Array pt. 3", file: "Fonti/PDF/Informatica/20. Array pt. 3.pdf" },
                    { title: "Stringhe", file: "Fonti/PDF/Informatica/21. Stringhe.pdf" }
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

        function loadManual(title, filePath) {
            manualTitle.textContent = title;
            // Use an iframe to display the PDF
            manualViewer.innerHTML = `
            <iframe 
                src="${filePath}" 
                width="100%" 
                height="100%" 
                style="border: none; border-radius: 8px;"
                type="application/pdf"
            >
                <p>Il tuo browser non supporta i PDF. <a href="${filePath}" target="_blank">Scarica il PDF</a>.</p>
            </iframe>
        `;
        }
    });
