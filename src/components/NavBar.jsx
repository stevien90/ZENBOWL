import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://i.imgur.com/m5UiuwV.png"
              alt="Logo"
              width="100"
              height="auto"
              className="d-inline-block align-text-top"
            />
          </Link>

          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/subscription">
            Subscribe
          </Link>
          <Link className="navbar-brand" to="/under-construction">
            Contact
          </Link>
          <Link className="navbar-brand" to="/under-construction">
            <ShoppingCartIcon />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
