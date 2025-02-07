import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div class="container footer-container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <Link to="/" class="nav-link px-2 text-body-secondary">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <a href="#features" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li class="nav-item">
              <Link
                to="/under-construction"
                class="nav-link px-2 text-body-secondary"
              >
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/subscription"
                class="nav-link px-2 text-body-secondary"
              >
                FAQs
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/under-construction"
                class="nav-link px-2 text-body-secondary"
              >
                About
              </Link>
            </li>
          </ul>
          <p class="text-center text-body-secondary">© 2025 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
