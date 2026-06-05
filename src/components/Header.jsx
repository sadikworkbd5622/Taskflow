
export default function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="header" id="app-header">
      <div className="header__ornament">
        <span className="header__line" />
        <span className="header__diamond">✦</span>
        <span className="header__line" />
      </div>
      <h1 className="header__title">My To-Do List</h1>
      <p className="header__subtitle">Organize your day with elegance</p>
      <p className="header__date">{today}</p>
    </header>
  );
}
