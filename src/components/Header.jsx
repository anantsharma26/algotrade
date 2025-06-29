import { useState } from "react";
import { Link, Links, NavLink } from "react-router-dom";

const Header = () => {
  const [menuactive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuactive);
  };

  return (
    <header>
      <div className="container">
        <div className={`${menuactive ? "active" : ""} main-head`}>
          <div className="brand">
            <Link>
              <img src="logo.svg" alt="logo" />
            </Link>
          </div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/strategies">Strategies</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/wiki">Wiki</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </nav>
          <div className="mobile-menu">
            <div className="toggle-btn" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
