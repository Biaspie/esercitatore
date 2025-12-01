import sqlite3

try:
    conn = sqlite3.connect('quiz.db')
    cursor = conn.cursor()
    
    with open('db_schema.txt', 'w') as f:
        cursor.execute("PRAGMA table_info(questions)")
        columns = cursor.fetchall()
        for col in columns:
            f.write(f"Column: {col[1]} (Type: {col[2]})\n")
            
    conn.close()
except Exception as e:
    print(f"Error: {e}")
