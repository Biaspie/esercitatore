import json
import os
import glob

def merge_questions():
    base_path = r"c:\Users\raffy\OneDrive\Desktop\Programmazione\test"
    questions_path = os.path.join(base_path, "questions.json")
    generated_dir = os.path.join(base_path, "Fonti", "generated_questions")
    
    # Load existing questions
    if os.path.exists(questions_path):
        with open(questions_path, 'r', encoding='utf-8') as f:
            try:
                all_questions = json.load(f)
            except json.JSONDecodeError:
                all_questions = []
    else:
        all_questions = []
    
    print(f"Loaded {len(all_questions)} existing questions.")
    
    # Load and merge batch files
    batch_files = glob.glob(os.path.join(generated_dir, "*_batch_*.json"))
    new_questions_count = 0
    
    for batch_file in batch_files:
        with open(batch_file, 'r', encoding='utf-8') as f:
            try:
                batch_questions = json.load(f)
                all_questions.extend(batch_questions)
                new_questions_count += len(batch_questions)
                print(f"Loaded {len(batch_questions)} questions from {os.path.basename(batch_file)}")
            except json.JSONDecodeError:
                print(f"Error decoding {batch_file}")

    # Sort by ID to be tidy
    all_questions.sort(key=lambda x: x['id'])
    
    # Save back to questions.json
    with open(questions_path, 'w', encoding='utf-8') as f:
        json.dump(all_questions, f, indent=2, ensure_ascii=False)
    
    print(f"Total questions after merge: {len(all_questions)}")
    print(f"Added {new_questions_count} new questions.")

if __name__ == "__main__":
    merge_questions()
