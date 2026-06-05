import TaskItem from './TaskItem';

const EMPTY_MESSAGES = {
  all: { title: 'No tasks yet', sub: 'Add your first task to get started' },
  active: { title: 'All caught up!', sub: 'No active tasks remaining' },
  completed: { title: 'Nothing completed', sub: 'Complete a task to see it here' },
  search: { title: 'No results', sub: 'Try a different search term' },
};

export default function TaskList({ todos, onToggle, onDelete, searchQuery }) {
  if (todos.length === 0) {
    const msg = searchQuery
      ? EMPTY_MESSAGES.search
      : EMPTY_MESSAGES.all;
    return (
      <div className="task-list__empty" id="task-list-empty">
        <div className="task-list__empty-icon">
          <img src="/empty-state.png" alt="" width={96} height={96} />
        </div>
        <p className="task-list__empty-title">{msg.title}</p>
        <p className="task-list__empty-sub">{msg.sub}</p>
      </div>
    );
  }

  // Group by category
  const groups = todos.reduce((acc, todo) => {
    const key = todo.category || 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push(todo);
    return acc;
  }, {});

  return (
    <div className="task-list" id="task-list" role="list">
      {Object.entries(groups).map(([cat, items]) => (
        <div key={cat} className="task-list__group" id={`group-${cat.toLowerCase()}`}>
          <div className="task-list__group-header">
            <span className={`task-list__group-dot task-list__group-dot--${cat.toLowerCase()}`} />
            <span className="task-list__group-name">{cat}</span>
            <span className="task-list__group-count">{items.length}</span>
          </div>
          <div className="task-list__group-items">
            {items.map((todo, i) => (
              <TaskItem
                key={todo.id}
                todo={todo}
                index={i}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
