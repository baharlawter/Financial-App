import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <h1 className="logo">Financial App</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/calculator">Mortgage Calculator</Link>
        <Link to="/search">Search</Link>
      </nav>
    </header>
  );
}

export default Header;
