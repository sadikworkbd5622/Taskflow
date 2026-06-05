import { useState } from 'react';
import { Trash2, Check } from 'lucide-react';

export default function TodoItem({ todo, category, onToggle, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => onDelete(todo.id), 350);
  };

  const catClass = category ? `todo-item--${category}` : '';

  return (
    <div
      className={`todo-item ${catClass} ${todo.completed ? 'todo-item--completed' : ''} ${isDeleting ? 'todo-item--deleting' : ''}`}
      id={`todo-item-${todo.id}`}
    >
      <label className="todo-item__checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
        />
        <span className="todo-item__checkmark">
          <Check />
        </span>
      </label>

      <span className="todo-item__text">{todo.text}</span>

      <button
        className="todo-item__delete"
        onClick={handleDelete}
        aria-label={`Delete "${todo.text}"`}
      >
        <Trash2 />
      </button>
    </div>
  );
}
