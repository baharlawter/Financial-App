import "./App.css";
import MortgageCalculator from "./MortgageCalculator/MortgageCalculator";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <p>Hello</p>
      <Header />

      <Routes>
        <Route path="/" element={<p>Hello</p>} />
        <Route path="/calculator" element={<MortgageCalculator />} />
      </Routes>
    </>
  );
}

export default App;
