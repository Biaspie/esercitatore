import json
import sqlite3

def update_db():
    try:
        # Load questions
        with open('questions.json', 'r', encoding='utf-8') as f:
            questions = json.load(f)
            
        print(f"Loaded {len(questions)} questions.")
        
        # Connect to DB
        conn = sqlite3.connect('quiz.db')
        cursor = conn.cursor()
        
        # Clear table
        cursor.execute("DELETE FROM questions")
        print("Cleared 'questions' table.")
        
        # Insert questions
        count = 0
        for q in questions:
            category = q.get('category', 'Informatica') # Default to Informatica if missing
            question_text = q['question']
            options = json.dumps(q['options'])
            answer = q['answer']
            
            # We let ID be auto-generated or use the one from JSON if we want to preserve it.
            # The schema has 'id' as INTEGER PRIMARY KEY.
            # If JSON has 'id', we can use it.
            q_id = q.get('id')
            
            if q_id:
                cursor.execute("INSERT INTO questions (id, category, question, options, answer) VALUES (?, ?, ?, ?, ?)",
                               (q_id, category, question_text, options, answer))
            else:
                cursor.execute("INSERT INTO questions (category, question, options, answer) VALUES (?, ?, ?, ?)",
                               (category, question_text, options, answer))
            count += 1
            
        conn.commit()
        print(f"Inserted {count} questions into quiz.db.")
        conn.close()
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    update_db()
