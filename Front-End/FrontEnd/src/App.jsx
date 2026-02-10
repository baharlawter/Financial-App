import "./App.css";
import MortgageCalculator from "./MortgageCalculator/MortgageCalculator";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </>
  );
}

export default App;
