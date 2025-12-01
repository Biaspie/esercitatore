import sqlite3

try:
    conn = sqlite3.connect('quiz.db')
    cursor = conn.cursor()
    
    # Check first few rows
    cursor.execute("SELECT id, category, question FROM questions LIMIT 5")
    rows = cursor.fetchall()
    for row in rows:
        print(row)
        
    # Check count
    cursor.execute("SELECT COUNT(*) FROM questions")
    count = cursor.fetchone()[0]
    print(f"Total in DB: {count}")
            
    conn.close()
except Exception as e:
    print(f"Error: {e}")
