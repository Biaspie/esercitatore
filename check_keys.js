const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'Fonti', 'generated_questions');

fs.readdir(DIR, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    const jsonFiles = files.filter(f => f.endsWith('.json'));
    if (jsonFiles.length > 0) {
        const firstFile = jsonFiles[0];
        const content = fs.readFileSync(path.join(DIR, firstFile), 'utf8');
        try {
            const data = JSON.parse(content);
            console.log(`File: ${firstFile}`);
            console.log("Keys:", Object.keys(data[0]));
            console.log("Full Item:", JSON.stringify(data[0], null, 2));
        } catch (e) {
            console.error("Error parsing " + firstFile);
        }
    }
});
