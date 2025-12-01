const fs = require('fs');
const questions = JSON.parse(fs.readFileSync('questions.json', 'utf8'));

const distribution = {};
questions.forEach(q => {
    const cat = q.category || 'Uncategorized';
    distribution[cat] = (distribution[cat] || 0) + 1;
});

console.log("Total questions:", questions.length);
console.log("Distribution:", distribution);
