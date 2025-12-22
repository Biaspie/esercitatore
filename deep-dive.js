
export const DeepDive = {
    _cache: null,

    async loadQuestions() {
        if (this._cache) return this._cache;

        try {
            const response = await fetch('Fonti/questions.js');
            if (!response.ok) throw new Error('Failed to load deep dive questions');

            const text = await response.text();

            // Safe extraction: The file starts with "let o = [...]"
            // We strip "let o =" and any trailing semicolon, then parse JSON
            // But since it's JS object syntax (keys might not be quoted), we might need `eval` or `Function`
            // Given the structure is simple JS objects, we can use a Function constructor for safety sandbox

            // Extract the array content
            const arrayContentMatch = text.match(/let\s+o\s*=\s*(\[[\s\S]*\]);?/);
            if (!arrayContentMatch) throw new Error('Invalid file format');

            // Use Function to parse the array structure safely-ish
            // "return " + array content
            const parseFn = new Function(`return ${arrayContentMatch[1]}`);
            const rawData = parseFn();

            this._cache = rawData.map(item => this._transformQuestion(item));
            return this._cache;
        } catch (e) {
            console.error("Deep Dive Load Error:", e);
            return [];
        }
    },

    _transformQuestion(rawItem) {
        // Map raw item to internal question format
        // Difficulty is randomized 1-3 as requested
        const difficulty = Math.floor(Math.random() * 3) + 1;

        // Construct options array: Correct + up to 3 Wrongs
        // Filter out empty strings which seem to be present in source
        const options = [
            rawItem.RispostaCorretta,
            rawItem.RispostaErrata1,
            rawItem.RispostaErrata2,
            rawItem.RispostaErrata3
        ].filter(opt => opt && opt.trim() !== "");

        // Shuffle options (simple shuffle)
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }

        return {
            id: `dd_${rawItem.ID}`,
            category: this._normalizeCategory(rawItem.Materia), // Use Normalized Materia
            question: rawItem.Domanda,
            options: options,
            answer: rawItem.RispostaCorretta,
            difficulty: difficulty,
            explanation: `Riferimento: ${rawItem.Materia}`, // Keep original Specific Materia in explanation
            isDeepDive: true // Flag for isolation
        };
    },

    _normalizeCategory(materia) {
        if (!materia) return "Altro";
        let normalized = materia.trim();

        // 1. Merge "PARTE I", "PARTE II" etc. (Split by " - ")
        if (normalized.includes(" - ")) {
            normalized = normalized.split(" - ")[0].trim();
        }

        // 2. Merge details after colon (Split by ":")
        if (normalized.includes(":")) {
            normalized = normalized.split(":")[0].trim();
        }

        return normalized;
    },

    getSubjects(questions) {
        const subjects = new Set();
        questions.forEach(q => subjects.add(q.category));
        return Array.from(subjects).sort();
    },

    getQuestionsBySubject(questions, subject) {
        return questions.filter(q => q.category === subject);
    }
};
