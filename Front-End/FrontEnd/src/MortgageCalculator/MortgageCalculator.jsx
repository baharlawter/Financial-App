function MortgageCalculator() {
  return (
    <>
      {/* const r = annualRate / 100 / 12; const n = years * 12; return (principal *
      (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1); */}
      <input type="number" placeholder="Loan Amount" />
      <input type="number" placeholder="Interest Rate (%)" />
      <input type="number" placeholder="Years" />
      <button>Calculate</button>
    </>
  );
}
export default MortgageCalculator;
