import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/boards">Boards</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
