import { useMemo } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import './App.css';

const CATEGORIES = ['All', 'Personal', 'Work', 'Shopping', 'Other'];

export default function App() {
  const [todos, setTodos] = useLocalStorage('pro-todos', []);
  const [filter, setFilter] = useLocalStorage('pro-filter', 'all');
  const [activeCategory, setActiveCategory] = useLocalStorage('pro-category', 'All');

  const addTodo = (text, category, priority = 'medium') => {
    setTodos((prev) => [{
      id: crypto.randomUUID(),
      text,
      category,
      priority,
      completed: false,
      createdAt: Date.now(),
    }, ...prev]);
  };

  const toggleTodo = (id) =>
    setTodos((prev) => prev.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const clearCompleted = () =>
    setTodos((prev) => prev.filter((t) => !t.completed));

  const activeCount = useMemo(() => todos.filter((t) => !t.completed).length, [todos]);
  const completedCount = useMemo(() => todos.filter((t) => t.completed).length, [todos]);
  const completionRate = todos.length > 0 ? Math.round((completedCount / todos.length) * 100) : 0;

  const categoryCounts = useMemo(() => {
    const counts = {};
    CATEGORIES.forEach(cat => {
      counts[cat] = cat === 'All'
        ? todos.filter(t => !t.completed).length
        : todos.filter(t => t.category === cat && !t.completed).length;
    });
    return counts;
  }, [todos]);

  const filteredTodos = useMemo(() => {
    let result = todos;
    if (activeCategory !== 'All') result = result.filter(t => t.category === activeCategory);
    if (filter === 'active') result = result.filter(t => !t.completed);
    else if (filter === 'completed') result = result.filter(t => t.completed);
    return result;
  }, [todos, filter, activeCategory]);

  return (
    <div className="app" id="app">
      <Sidebar
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categoryCounts={categoryCounts}
        totalTodos={todos.length}
        activeCount={activeCount}
        completedCount={completedCount}
        completionRate={completionRate}
        onClearCompleted={clearCompleted}
      />
      <MainPanel
        todos={filteredTodos}
        filter={filter}
        onFilterChange={setFilter}
        onAdd={addTodo}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        activeCategory={activeCategory}
        activeCount={activeCount}
        totalCount={todos.length}
        completionRate={completionRate}
      />
    </div>
  );
}
