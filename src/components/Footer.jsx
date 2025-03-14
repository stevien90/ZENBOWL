import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container footer-container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-secondary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/under-construction"
                className="nav-link px-2 text-body-secondary"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/subscription"
                className="nav-link px-2 text-body-secondary"
              >
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/under-construction"
                className="nav-link px-2 text-body-secondary"
              >
                About
              </Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2025 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
