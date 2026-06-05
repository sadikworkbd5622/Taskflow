export default function Footer({ remaining, completedCount, onClearCompleted }) {
  return (
    <footer className="footer" id="app-footer">
      <p className="footer__stats">
        <span className="footer__stats-count">{remaining}</span>
        {' '}task{remaining !== 1 ? 's' : ''} remaining
      </p>
      {completedCount > 0 && (
        <button
          id="clear-completed-btn"
          className="footer__clear"
          onClick={onClearCompleted}
        >
          Clear {completedCount} completed
        </button>
      )}
      <p className="footer__branding">Crafted with care ✦</p>
    </footer>
  );
}
