import json

try:
    with open('questions.json', 'r', encoding='utf-8') as f:
        questions = json.load(f)
        
    with_category = sum(1 for q in questions if 'category' in q)
    without_category = len(questions) - with_category
    
    print(f"Total: {len(questions)}")
    print(f"With Cat: {with_category}")
    print(f"No Cat: {without_category}")
    
except Exception as e:
    print(f"Error: {e}")
