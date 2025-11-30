const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'Fonti', 'generated_questions');

fs.readdir(DIR, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    const jsonFiles = files.filter(f => f.endsWith('.json'));
    console.log(`Found ${jsonFiles.length} JSON files.`);

    if (jsonFiles.length > 0) {
        const firstFile = jsonFiles[0];
        const content = fs.readFileSync(path.join(DIR, firstFile), 'utf8');
        try {
            const data = JSON.parse(content);
            console.log(`File: ${firstFile}`);
            console.log("First item:", JSON.stringify(data[0], null, 2));
            if (data[0].correct !== undefined) {
                console.log("HAS CORRECT FIELD!");
            } else {
                console.log("MISSING CORRECT FIELD!");
            }
        } catch (e) {
            console.error("Error parsing " + firstFile);
        }
    }
});
