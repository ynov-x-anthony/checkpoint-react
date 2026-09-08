import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        className={({ isActive }) => `primary-btn btn${isActive ? " active" : ""}`}
        to="/"
        end
      >
        🏠 Home
      </NavLink>
      <NavLink
        className={({ isActive }) => `primary-btn btn${isActive ? " active" : ""}`}
        to="/macarons"
      >
        🍬 My macarons
      </NavLink>
      <NavLink
        className={({ isActive }) => `secondary-btn btn${isActive ? " active" : ""}`}
        to="/instructions"
      >
        📖 Instructions
      </NavLink>
    </nav>
  );
}

export default NavBar;
