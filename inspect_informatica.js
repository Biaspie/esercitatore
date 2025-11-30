const fs = require('fs');
const logStream = fs.createWriteStream('inspect_inf_log.txt', { flags: 'w' });

function log(msg) {
    console.log(msg);
    logStream.write(msg + '\n');
}

try {
    const data = fs.readFileSync('questions.json', 'utf8');
    const questions = JSON.parse(data);

    const informatica = questions.filter(q => q.category === 'Informatica');
    log(`Found ${informatica.length} Informatica questions.`);

    // Dump first 5
    log("--- Sample 1-5 ---");
    informatica.slice(0, 5).forEach(q => {
        log(`Q: ${q.question}`);
        log(`Options: ${JSON.stringify(q.options)}`);
        log(`Answer: ${q.answer}`);
        log("----------------");
    });

    // Dump 5 from the middle
    const mid = Math.floor(informatica.length / 2);
    log("--- Sample Middle ---");
    informatica.slice(mid, mid + 5).forEach(q => {
        log(`Q: ${q.question}`);
        log(`Options: ${JSON.stringify(q.options)}`);
        log(`Answer: ${q.answer}`);
        log("----------------");
    });

    logStream.end();

} catch (e) {
    log(e);
}
