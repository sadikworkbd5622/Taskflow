import { useState, useRef, useEffect } from 'react';
import { Plus, Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import TaskList from './TaskList';

const FILTERS = [
  { key: 'all', label: 'All Tasks' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Done' },
];

const PRIORITIES = ['low', 'medium', 'high'];
const CATEGORIES = ['Personal', 'Work', 'Shopping', 'Other'];

export default function MainPanel({
  todos, filter, onFilterChange, onAdd, onToggle, onDelete,
  activeCategory, activeCount, totalCount, completionRate
}) {
  const [inputText, setInputText] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('Personal');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const inputRef = useRef(null);

  // ⌘K quick-add
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed) return;
    onAdd(trimmed, category, priority);
    setInputText('');
  };

  const filtered = todos.filter(t =>
    t.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const title = activeCategory === 'All' ? 'All Tasks' : activeCategory;

  return (
    <main className="main-panel" id="main-panel">
      {/* Top Bar */}
      <div className="main-panel__topbar">
        <div className="main-panel__title-row">
          <h1 className="main-panel__title">{title}</h1>
          {totalCount > 0 && (
            <span className="main-panel__count-badge">{activeCount} active</span>
          )}
        </div>
        <div className="main-panel__topbar-actions">
          <div className="main-panel__search-wrap">
            <Search size={14} className="main-panel__search-icon" />
            <input
              id="task-search"
              className="main-panel__search"
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search tasks"
            />
          </div>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="main-panel__filters" role="tablist" aria-label="Task filters">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            id={`filter-${key}`}
            role="tab"
            className={`main-panel__filter-btn ${filter === key ? 'main-panel__filter-btn--active' : ''}`}
            onClick={() => onFilterChange(key)}
            aria-selected={filter === key}
          >
            {label}
          </button>
        ))}
        {totalCount > 0 && (
          <div className="main-panel__progress-pill">
            <div
              className="main-panel__progress-pill-fill"
              style={{ width: `${completionRate}%` }}
            />
            <span className="main-panel__progress-pill-label">{completionRate}%</span>
          </div>
        )}
      </div>

      {/* Input */}
      <form className="main-panel__input-row" onSubmit={handleSubmit} id="task-form">
        <div className="main-panel__input-wrap">
          <Plus size={16} className="main-panel__input-icon" />
          <input
            id="todo-text-input"
            ref={inputRef}
            className="main-panel__input"
            type="text"
            placeholder="Add a new task… (⌘K)"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            autoComplete="off"
            aria-label="New task"
          />
          <button
            type="button"
            className={`main-panel__options-toggle ${showOptions ? 'main-panel__options-toggle--open' : ''}`}
            onClick={() => setShowOptions(v => !v)}
            aria-label="Toggle options"
          >
            <SlidersHorizontal size={14} />
            <ChevronDown size={12} />
          </button>
        </div>
        <button
          id="todo-add-button"
          className="main-panel__submit"
          type="submit"
          aria-label="Add task"
        >
          Add Task
        </button>
      </form>

      {/* Expanded Options */}
      {showOptions && (
        <div className="main-panel__options" id="task-options">
          <div className="main-panel__option-group">
            <label className="main-panel__option-label">Category</label>
            <div className="main-panel__option-pills">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  id={`cat-opt-${cat.toLowerCase()}`}
                  className={`main-panel__option-pill main-panel__option-pill--cat-${cat.toLowerCase()} ${category === cat ? 'main-panel__option-pill--active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="main-panel__option-group">
            <label className="main-panel__option-label">Priority</label>
            <div className="main-panel__option-pills">
              {PRIORITIES.map(p => (
                <button
                  key={p}
                  type="button"
                  id={`pri-opt-${p}`}
                  className={`main-panel__option-pill main-panel__option-pill--pri-${p} ${priority === p ? 'main-panel__option-pill--active' : ''}`}
                  onClick={() => setPriority(p)}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Task List */}
      <TaskList
        todos={filtered}
        onToggle={onToggle}
        onDelete={onDelete}
        searchQuery={searchQuery}
      />
    </main>
  );
}
