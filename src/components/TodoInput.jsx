import { useState } from 'react';
import { Plus } from 'lucide-react';

const CATEGORIES = ['Personal', 'Work', 'Shopping', 'Other'];

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Personal');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed, category);
    setText('');
  };

  return (
    <div className="todo-input" id="todo-input-section">
      <form className="todo-input__form" onSubmit={handleSubmit}>
        <input
          id="todo-text-input"
          className="todo-input__field"
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoComplete="off"
          aria-label="New task text"
        />
        <select
          id="todo-category-select"
          className="todo-input__category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Task category"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button
          id="todo-add-button"
          className="todo-input__submit"
          type="submit"
          aria-label="Add task"
        >
          <Plus />
          Add
        </button>
      </form>
    </div>
  );
}
