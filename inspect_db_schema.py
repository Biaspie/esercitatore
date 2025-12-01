import sqlite3

try:
    conn = sqlite3.connect('quiz.db')
    cursor = conn.cursor()
    
    cursor.execute("SELECT sql FROM sqlite_master WHERE type='table' AND name='questions';")
    schema = cursor.fetchone()
    if schema:
        print(schema[0])
    else:
        print("Table 'questions' not found.")
            
    conn.close()
except Exception as e:
    print(f"Error: {e}")
