import "./App.css";
import MortgageCalculator from "./MortgageCalculator/MortgageCalculator";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
      </Routes>
    </>
  );
}

export default App;
