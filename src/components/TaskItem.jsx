import { useState } from 'react';
import { Check, Trash2, AlertCircle, Minus, ArrowUp } from 'lucide-react';

const PRIORITY_ICONS = {
  high: ArrowUp,
  medium: Minus,
  low: Minus,
};

const PRIORITY_LABELS = { high: 'High', medium: 'Med', low: 'Low' };

function formatRelativeTime(ts) {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default function TaskItem({ todo, index, onToggle, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => onDelete(todo.id), 320);
  };

  const PriorityIcon = PRIORITY_ICONS[todo.priority] || Minus;

  return (
    <div
      className={`task-item task-item--${todo.category?.toLowerCase() || 'other'} task-item--pri-${todo.priority || 'medium'} ${todo.completed ? 'task-item--done' : ''} ${isDeleting ? 'task-item--exit' : ''}`}
      id={`task-${todo.id}`}
      role="listitem"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {/* Priority stripe */}
      <div className="task-item__priority-stripe" aria-hidden="true" />

      {/* Checkbox */}
      <label className="task-item__check" aria-label={`Mark as ${todo.completed ? 'incomplete' : 'complete'}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="task-item__check-box">
          {todo.completed && <Check size={11} strokeWidth={3} />}
        </span>
      </label>

      {/* Content */}
      <div className="task-item__content">
        <span className="task-item__text">{todo.text}</span>
        <div className="task-item__meta">
          <span className={`task-item__priority-badge task-item__priority-badge--${todo.priority || 'medium'}`}>
            <PriorityIcon size={10} strokeWidth={2.5} />
            {PRIORITY_LABELS[todo.priority] || 'Med'}
          </span>
          <span className="task-item__time">{formatRelativeTime(todo.createdAt)}</span>
        </div>
      </div>

      {/* Delete */}
      <button
        className="task-item__delete"
        onClick={handleDelete}
        aria-label={`Delete "${todo.text}"`}
      >
        <Trash2 size={14} />
      </button>
    </div>
  );
}
