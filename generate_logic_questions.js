const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, 'questions.json');

function getRandomBool() {
    return Math.random() < 0.5;
}

function boolToString(val) {
    return val ? "Vero" : "Falso";
}

function generateExpression(difficulty) {
    const vars = ['A', 'B', 'C'];
    const ops = ['&&', '||'];

    // Assign random values
    const values = {
        A: getRandomBool(),
        B: getRandomBool(),
        C: getRandomBool()
    };

    let expressionStr = "";
    let evalStr = "";

    if (difficulty === 'easy') {
        // Format: (A op B) or (!A op B)
        const v1 = vars[Math.floor(Math.random() * 2)]; // A or B
        const v2 = vars[Math.floor(Math.random() * 2)]; // A or B
        const op = ops[Math.floor(Math.random() * ops.length)];

        const not1 = Math.random() < 0.3 ? "!" : "";
        const not2 = Math.random() < 0.3 ? "!" : "";

        expressionStr = `${not1}${v1} ${op} ${not2}${v2}`;
        evalStr = `${not1 ? '!' : ''}${values[v1]} ${op} ${not2 ? '!' : ''}${values[v2]}`;

    } else {
        // Medium: (A op B) op (!C) or similar
        const v1 = vars[0];
        const v2 = vars[1];
        const v3 = vars[2];

        const op1 = ops[Math.floor(Math.random() * ops.length)];
        const op2 = ops[Math.floor(Math.random() * ops.length)];

        const not1 = Math.random() < 0.3 ? "!" : "";
        const not2 = Math.random() < 0.3 ? "!" : "";
        const not3 = Math.random() < 0.3 ? "!" : "";

        // Structure: (v1 op1 v2) op2 v3
        expressionStr = `(${not1}${v1} ${op1} ${not2}${v2}) ${op2} ${not3}${v3}`;
        evalStr = `(${not1 ? '!' : ''}${values[v1]} ${op1} ${not2 ? '!' : ''}${values[v2]}) ${op2} ${not3 ? '!' : ''}${values[v3]}`;
    }

    // Evaluate
    const result = eval(evalStr);

    // Construct Question Text
    let context = `Dato A=${boolToString(values.A)}, B=${boolToString(values.B)}`;
    if (difficulty === 'medium') {
        context += `, C=${boolToString(values.C)}`;
    }

    const questionText = `${context}. Qual è il risultato di: ${expressionStr} ?`;

    return {
        category: "Informatica",
        question: questionText,
        options: ["Vero", "Falso"],
        answer: boolToString(result)
    };
}

function generateQuestions() {
    const newQuestions = [];

    // 50 Easy
    for (let i = 0; i < 50; i++) {
        newQuestions.push(generateExpression('easy'));
    }

    // 50 Medium
    for (let i = 0; i < 50; i++) {
        newQuestions.push(generateExpression('medium'));
    }

    // Read existing
    let existingQuestions = [];
    if (fs.existsSync(OUTPUT_FILE)) {
        try {
            const data = fs.readFileSync(OUTPUT_FILE, 'utf8');
            existingQuestions = JSON.parse(data);
        } catch (e) {
            console.error("Error reading existing questions:", e);
        }
    }

    // Determine next ID
    let maxId = 0;
    existingQuestions.forEach(q => {
        if (q.id > maxId) maxId = q.id;
    });

    // Assign IDs
    newQuestions.forEach((q, index) => {
        q.id = maxId + 1 + index;
    });

    // Merge
    const allQuestions = existingQuestions.concat(newQuestions);

    // Write
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allQuestions, null, 2));
    console.log(`Added ${newQuestions.length} logic questions to ${OUTPUT_FILE}`);
}

generateQuestions();
