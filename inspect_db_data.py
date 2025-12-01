import sqlite3

try:
    conn = sqlite3.connect('quiz.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM questions LIMIT 1")
    row = cursor.fetchone()
    if row:
        print("Columns:", row.keys())
        print("Row:", dict(row))
    else:
        print("Table is empty")
            
    conn.close()
except Exception as e:
    print(f"Error: {e}")
