import sqlite3

try:
    conn = sqlite3.connect('quiz.db')
    cursor = conn.cursor()
    
    cursor.execute("PRAGMA table_info(questions)")
    columns = cursor.fetchall()
    for col in columns:
        print(f"Column: {col[1]} (Type: {col[2]})")
            
    conn.close()
except Exception as e:
    print(f"Error: {e}")
