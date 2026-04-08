export default function InputPanel({
  label, value, onChange,
  unit, onUnitChange,
  units, readOnly = false,
}) {
  return (
    <div style={{ flex: 1 }}>
      <label className="panel-label">{label}</label>
      <div className="input-box">
        <input
          type="number"
          className="input-number"
          placeholder={readOnly ? "Result" : "Enter value"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          readOnly={readOnly}
        />
        <select
          className="unit-select"
          value={unit}
          onChange={(e) => onUnitChange(e.target.value)}
        >
          <option value="">-- Select Unit --</option>
          {units.map((u) => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
      </div>
    </div>
  );
}