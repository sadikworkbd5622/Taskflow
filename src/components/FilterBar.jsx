const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
];

export default function FilterBar({ filter, onChange, counts }) {
  return (
    <nav className="filter-bar" id="filter-bar" aria-label="Task filters">
      <div className="filter-bar__wrapper">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            id={`filter-${key}`}
            className={`filter-bar__btn ${filter === key ? 'filter-bar__btn--active' : ''}`}
            onClick={() => onChange(key)}
            aria-pressed={filter === key}
          >
            {label}
            <span className="filter-bar__count">{counts[key]}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
