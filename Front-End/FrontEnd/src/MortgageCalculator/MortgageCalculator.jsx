import { useState } from "react";

function MortgageCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  function calculate() {
    const P = Number(principal);
    const r = Number(rate) / 100 / 12;
    const n = Number(years) * 12;

    const payment = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

    setMonthlyPayment(payment.toFixed(2));
  }

  return (
    <>
      <input
        type="number"
        placeholder="Loan Amount"
        onChange={(e) => setPrincipal(e.target.value)}
      />

      <input
        type="number"
        placeholder="Interest Rate (%)"
        onChange={(e) => setRate(e.target.value)}
      />

      <input
        type="number"
        placeholder="Years"
        onChange={(e) => setYears(e.target.value)}
      />

      <button onClick={calculate}>Calculate</button>

      {monthlyPayment && <p>Monthly Payment: ${monthlyPayment}</p>}
    </>
  );
}

export default MortgageCalculator;
