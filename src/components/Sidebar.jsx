import { CheckSquare, LayoutDashboard, Circle, Briefcase, ShoppingCart, Tag, Trash2, BarChart2 } from 'lucide-react';

const CATEGORY_ICONS = {
  All: LayoutDashboard,
  Personal: Circle,
  Work: Briefcase,
  Shopping: ShoppingCart,
  Other: Tag,
};

const CATEGORY_COLORS = {
  All: '#8b8fa8',
  Personal: '#c4b5fd',
  Work: '#7dd3fc',
  Shopping: '#fbbf24',
  Other: '#a5b4fc',
};

export default function Sidebar({
  categories, activeCategory, onCategoryChange,
  categoryCounts, totalTodos, activeCount, completedCount,
  completionRate, onClearCompleted
}) {
  return (
    <aside className="sidebar" id="sidebar">
      {/* Brand */}
      <div className="sidebar__brand">
        <div className="sidebar__brand-icon">
          <CheckSquare size={18} />
        </div>
        <div>
          <div className="sidebar__brand-name">Taskflow</div>
          <div className="sidebar__brand-tagline">Stay organized</div>
        </div>
      </div>

      {/* Progress Card */}
      <div className="sidebar__progress-card">
        <div className="sidebar__progress-header">
          <BarChart2 size={13} />
          <span>Today's Progress</span>
        </div>
        <div className="sidebar__progress-numbers">
          <span className="sidebar__progress-done">{completedCount}</span>
          <span className="sidebar__progress-sep">/</span>
          <span className="sidebar__progress-total">{totalTodos}</span>
          <span className="sidebar__progress-label">completed</span>
        </div>
        <div className="sidebar__progress-bar-track">
          <div
            className="sidebar__progress-bar-fill"
            style={{ width: `${completionRate}%` }}
          />
        </div>
        <div className="sidebar__progress-pct">{completionRate}%</div>
      </div>

      {/* Navigation */}
      <nav className="sidebar__nav" aria-label="Task categories">
        <div className="sidebar__nav-label">Categories</div>
        {categories.map((cat) => {
          const Icon = CATEGORY_ICONS[cat];
          const isActive = activeCategory === cat;
          const count = categoryCounts[cat];
          return (
            <button
              key={cat}
              id={`nav-${cat.toLowerCase()}`}
              className={`sidebar__nav-item ${isActive ? 'sidebar__nav-item--active' : ''}`}
              onClick={() => onCategoryChange(cat)}
              style={isActive ? { '--cat-color': CATEGORY_COLORS[cat] } : {}}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={14} className="sidebar__nav-icon" />
              <span className="sidebar__nav-text">{cat}</span>
              {count > 0 && (
                <span className="sidebar__nav-badge">{count}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Stats */}
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <span className="sidebar__stat-value">{activeCount}</span>
          <span className="sidebar__stat-label">Pending</span>
        </div>
        <div className="sidebar__stat-divider" />
        <div className="sidebar__stat">
          <span className="sidebar__stat-value">{completedCount}</span>
          <span className="sidebar__stat-label">Done</span>
        </div>
        <div className="sidebar__stat-divider" />
        <div className="sidebar__stat">
          <span className="sidebar__stat-value">{totalTodos}</span>
          <span className="sidebar__stat-label">Total</span>
        </div>
      </div>

      {/* Clear */}
      {completedCount > 0 && (
        <button
          id="clear-completed-btn"
          className="sidebar__clear"
          onClick={onClearCompleted}
        >
          <Trash2 size={13} />
          Clear {completedCount} completed
        </button>
      )}

      <div className="sidebar__footer">
        <div className="sidebar__shortcut">
          <kbd>⌘K</kbd> Quick add
        </div>
      </div>
    </aside>
  );
}
