const fs = require('fs');

try {
    const data = fs.readFileSync('questions.json', 'utf8');
    const questions = JSON.parse(data);

    const distribution = {};
    questions.forEach(q => {
        const cat = q.category || "Uncategorized";
        distribution[cat] = (distribution[cat] || 0) + 1;
    });

    let output = "Category Distribution:\n";
    for (const [cat, count] of Object.entries(distribution)) {
        output += `${cat}: ${count}\n`;
    }
    output += `Total Questions: ${questions.length}\n`;

    fs.writeFileSync('distribution.txt', output);
    console.log("Distribution written to distribution.txt");

} catch (err) {
    console.error("Error:", err);
}
