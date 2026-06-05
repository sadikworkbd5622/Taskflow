import TodoItem from './TodoItem';

export default function CategoryGroup({ category, todos, onToggle, onDelete }) {
  return (
    <section className="category-group" id={`category-${category.toLowerCase()}`}>
      <div className="category-group__header">
        <span className={`category-group__dot category-group__dot--${category.toLowerCase()}`} />
        <span className="category-group__label">{category}</span>
        <span className="category-group__count">
          {todos.filter(t => !t.completed).length}/{todos.length}
        </span>
      </div>
      <div className="category-group__card">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            category={category.toLowerCase()}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}
