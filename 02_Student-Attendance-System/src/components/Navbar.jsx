import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav>
      <div>
        <div className="nav-brand">
          <span className="nav-brand-text">My App</span>
        </div>
        <div className="nav-links">
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Students
          </Link>
          <Link to="/counter" className={isActive("/counter") ? "active" : ""}>
            Counter
          </Link>
          <Link to="/users" className={isActive("/users") ? "active" : ""}>
            Users
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
