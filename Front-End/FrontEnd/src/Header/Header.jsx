import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Mortgage Calculator</Link>
      </nav>
    </header>
  );
}

export default Header;
