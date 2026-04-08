export default function HistoryPanel({ history }) {
  return (
    <div className="history-panel">
      <div className="input-box">
        <h5>History</h5>
        {history.length === 0 ? (
          <p className="history-empty">No history yet.</p>
        ) : (
          <ul className="history-list">
            {history.map((h, i) => (
              <li key={i} className="history-item">
                <span className="history-op">[{h.operation}]</span>
                {h.inputValue} {h.inputUnit} → {h.resultValue?.toFixed(4)} {h.resultUnit}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}