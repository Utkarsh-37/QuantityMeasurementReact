const TYPES = [
  { key: "length",      label: "Length",      icon: "📏" },
  { key: "weight",      label: "Weight",      icon: "⚖️" },
  { key: "temperature", label: "Temperature", icon: "🌡️" },
  { key: "volume",      label: "Volume",      icon: "💧" },
];

export default function TypeSelector({ selected, onSelect }) {
  return (
    <div>
      <p className="section-title">CHOOSE TYPE</p>
      <div className="card-grid">
        {TYPES.map((t) => (
          <div
            key={t.key}
            className={`type-card ${selected === t.key ? "active" : ""}`}
            onClick={() => onSelect(t.key)}
          >
            <div className="card-icon">{t.icon}</div>
            <p>{t.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}