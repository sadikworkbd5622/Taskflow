import CategoryGroup from './CategoryGroup';

const CATEGORY_ORDER = ['Personal', 'Work', 'Shopping', 'Other'];

export default function TodoList({ todos, onToggle, onDelete }) {
  // Group todos by category
  const grouped = CATEGORY_ORDER.reduce((acc, cat) => {
    const items = todos.filter((t) => t.category === cat);
    if (items.length > 0) acc.push({ category: cat, items });
    return acc;
  }, []);

  if (todos.length === 0) {
    return (
      <div className="todo-list" id="todo-list">
        <div className="todo-list__empty">
          <img
            className="todo-list__empty-image"
            src="/empty-state.png"
            alt="No tasks"
          />
          <p className="todo-list__empty-title">Nothing here yet</p>
          <p className="todo-list__empty-subtitle">
            Add your first task to get started
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list" id="todo-list">
      {grouped.map(({ category, items }) => (
        <CategoryGroup
          key={category}
          category={category}
          todos={items}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
