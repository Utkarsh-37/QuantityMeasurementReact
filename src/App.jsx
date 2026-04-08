import { useState } from "react";
import Header from "./components/Header";
import TypeSelector from "./components/TypeSelector";
import ActionSelector from "./components/ActionSelector";
import ArithmeticOperator from "./components/ArithmeticOperator";
import InputPanel from "./components/InputPanel";
import HistoryPanel from "./components/HistoryPanel";
import { UNITS_BY_TYPE } from "./constants/units";
import { apiConvert, apiCompare, apiAdd, apiSubtract, apiDivide } from "./api/quantityApi";
import "./App.scss";

export default function App() {
  const [type, setType]           = useState("length");
  const [action, setAction]       = useState("Comparison");
  const [operator, setOperator]   = useState("Add");

  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit]   = useState("");
  const [toValue, setToValue]     = useState("");
  const [toUnit, setToUnit]       = useState("");
  const [result, setResult]       = useState("");
  const [resultUnit, setResultUnit] = useState("");

  const [history, setHistory]     = useState([]);
  const [error, setError]         = useState("");

  const units = UNITS_BY_TYPE[type] || [];

  // Reset fields when type or action changes
  const handleTypeChange = (t) => {
    setType(t);
    setFromValue(""); setFromUnit("");
    setToValue("");   setToUnit("");
    setResult("");    setError("");
  };

  const handleActionChange = (a) => {
    setAction(a);
    setFromValue(""); setToValue("");
    setResult("");    setError("");
  };

  const buildDTO = () => ({
    inputValue:           parseFloat(fromValue) || 0,
    inputUnit:            fromUnit,
    inputMeasurementType: type.toUpperCase(),
    targetValue:          parseFloat(toValue) || 0,
    targetUnit:           toUnit,
    targetMeasurementType: type.toUpperCase(),
  });

  const handleSubmit = async () => {
    setError("");
    if (!fromUnit || !toUnit) { setError("Please select both units."); return; }
    if (!fromValue)           { setError("Please enter a value."); return; }

    try {
      let res;
      const dto = buildDTO();

      if (action === "Conversion") {
        res = await apiConvert(dto);
        setResult(res.data.resultValue);
        setResultUnit(res.data.resultUnit);
      } else if (action === "Comparison") {
        res = await apiCompare(dto);
        setResult(res.data.resultValue === 1 ? "✅ Equal" : "❌ Not Equal");
        setResultUnit("");
      } else if (action === "Arithmetic") {
        if (!toValue) { setError("Please enter the second value."); return; }
        if (operator === "Add")      res = await apiAdd(dto);
        else if (operator === "Subtract") res = await apiSubtract(dto);
        else if (operator === "Divide")   res = await apiDivide(dto);
        setResult(res.data.resultValue);
        setResultUnit(res.data.resultUnit);
      }

      setHistory((prev) => [res.data, ...prev].slice(0, 20));
    } catch (e) {
      setError(e.response?.data?.message || "Something went wrong. Check units/values.");
    }
  };

  const showSecondInput = action === "Arithmetic" || action === "Comparison";
  const showOperator    = action === "Arithmetic";

  return (
    <div className="app-wrapper">
      <Header />

      <div className="container">
        <TypeSelector selected={type} onSelect={handleTypeChange} />
        <ActionSelector selected={action} onSelect={handleActionChange} />
        {showOperator && <ArithmeticOperator selected={operator} onSelect={setOperator} />}

        <div className="panels-row">
          <InputPanel
            label="FROM"
            value={fromValue}
            onChange={setFromValue}
            unit={fromUnit}
            onUnitChange={setFromUnit}
            units={units}
          />

          {showSecondInput ? (
            <InputPanel
              label="TO (2nd value)"
              value={toValue}
              onChange={setToValue}
              unit={toUnit}
              onUnitChange={setToUnit}
              units={units}
            />
          ) : (
            <div style={{ flex: 1 }}>
              <label className="panel-label">TO</label>
              <div className="input-box">
                <div className="result-display">
                  {result !== "" ? `${result} ${resultUnit}` : "Result"}
                </div>
                <select
                  className="unit-select"
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                >
                  <option value="">-- Select Unit --</option>
                  {units.map((u) => (
                    <option key={u} value={u}>{u}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {showSecondInput && result !== "" && (
          <div className="result-banner">
            Result: <strong>{result} {resultUnit}</strong>
          </div>
        )}

        {error && <div className="error-banner">{error}</div>}

        <button className="submit-btn" onClick={handleSubmit}>
          {action === "Comparison" ? "Compare" : action === "Conversion" ? "Convert" : "Calculate"}
        </button>

        <HistoryPanel history={history} />
      </div>
    </div>
  );
}