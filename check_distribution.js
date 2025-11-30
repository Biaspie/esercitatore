const fs = require('fs');

try {
    const data = fs.readFileSync('questions.json', 'utf8');
    const questions = JSON.parse(data);

    const distribution = {};

    questions.forEach(q => {
        const index = q.options.indexOf(q.answer);
        distribution[index] = (distribution[index] || 0) + 1;
    });

    console.log("Answer Index Distribution:");
    console.log(distribution);

} catch (e) {
    console.error(e);
}
