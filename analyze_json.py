import json

try:
    with open('questions.json', 'r', encoding='utf-8') as f:
        questions = json.load(f)
        
    print(f"Total questions: {len(questions)}")
    
    with_category = 0
    without_category = 0
    categories = set()
    
    for q in questions:
        if 'category' in q:
            with_category += 1
            categories.add(q['category'])
        else:
            without_category += 1
            
    print(f"With category: {with_category}")
    print(f"Without category: {without_category}")
    print(f"Categories found: {categories}")
    
except Exception as e:
    print(f"Error: {e}")
