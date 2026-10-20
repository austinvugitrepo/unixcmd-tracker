export default function Header({ view, onChangeView }) {
  return (
    <header className="header">
      <h1>Unix Command Study Tracker</h1>
      <nav>
        <button
          type="button"
          className={view === "dashboard" ? "active" : ""}
          onClick={() => onChangeView("dashboard")}
        >
          Dashboard
        </button>
        <button
          type="button"
          className={view === "about" ? "active" : ""}
          onClick={() => onChangeView("about")}
        >
          About
        </button>
      </nav>
    </header>
  );
}
