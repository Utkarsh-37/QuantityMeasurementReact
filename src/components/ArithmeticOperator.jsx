const OPS = [
  { symbol: "+", label: "Add" },
  { symbol: "-", label: "Subtract" },
  { symbol: "/", label: "Divide" },
];

export default function ArithmeticOperator({ selected, onSelect }) {
  return (
    <div className="action-row" style={{ marginTop: "12px" }}>
      {OPS.map((op) => (
        <button
          key={op.symbol}
          className={`action-btn ${selected === op.label ? "active" : ""}`}
          onClick={() => onSelect(op.label)}
        >
          {op.symbol}
        </button>
      ))}
    </div>
  );
}