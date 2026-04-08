const ACTIONS = ["Comparison", "Conversion", "Arithmetic"];

export default function ActionSelector({ selected, onSelect }) {
  return (
    <div>
      <p className="section-title">CHOOSE ACTION</p>
      <div className="action-row">
        {ACTIONS.map((a) => (
          <button
            key={a}
            className={`action-btn ${selected === a ? "active" : ""}`}
            onClick={() => onSelect(a)}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}