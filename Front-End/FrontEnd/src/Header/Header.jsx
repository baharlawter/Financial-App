import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Financial App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Mortgage Calculator</Link>
      </nav>
    </header>
  );
}

export default Header;
