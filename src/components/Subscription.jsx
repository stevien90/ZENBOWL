import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="mt-5">
          <div className="d-style btn btn-brc-tp border-2 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-3 shadow-sm sub-box">
            {/*Basic Plan*/}
            <div className="row align-items-center sub-text">
              <div className="col-12 col-md-4">
                <h4 className="pt-3 text-170 text-600 text-primary-d1 letter-spacing sub-title">
                  Have A Taste
                </h4>
              </div>

              <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                <li>
                  <span>
                    <span className="text-110">First Time Customer Price</span>
                  </span>
                </li>

                <li className="mt-25">
                  <span className="text-110">4 Bowls</span>
                </li>

                <li className="mt-25">
                  <span className="text-110">$6.50 per bowl</span>
                </li>
              </ul>

              <div className="col-12 col-md-4 text-center sub-btn">
                <Link
                  to="/under-construction"
                  className="f-n-hover btn btn-primary px-4 py-25 w-75 text-600"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="d-style bgc-white btn btn-brc-tp btn-outline-green btn-h-outline-green btn-a-outline-green w-100 my-2 py-3 shadow-sm border-2 sub-box">
            {/*Pro Plan  */}
            <div className="row align-items-center sub-text">
              <div className="col-12 col-md-4">
                <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing sub-title">
                  By The Bundle
                </h4>
              </div>

              <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                <li>
                  <span>
                    <span className="text-110">BEST VALUE</span>
                  </span>
                </li>

                <li className="mt-25">
                  <span className="text-110">16 Bowls</span>
                </li>

                <li className="mt-25">
                  <span className="text-110">$90 under $6 per Bowl</span>
                </li>
              </ul>

              <div className="col-12 col-md-4 text-center">
                <Link
                  to="/under-construction"
                  className="f-n-hover btn btn-success btn-raised px-4 py-25 w-75 text-600"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="d-style btn btn-brc-tp border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 py-3 shadow-sm sub-box">
            {/* Premium Plan */}
            <div className="row align-items-center sub-text">
              <div className="col-12 col-md-4">
                <h4 className="pt-3 text-170 text-600 text-purple-d1 letter-spacing sub-title">
                  Bundle Plan
                </h4>
              </div>

              <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                <li>
                  <span>
                    <span className="text-110">SUBSCRIBE</span>
                  </span>
                </li>

                <li className="mt-25">
                  <span className="text-110">16 Bowls</span>
                </li>

                <li className="mt-25">
                  <span className="text-110">
                    $15 off First Order & $2 off Future Orders
                  </span>
                  <p className="text-110">5 Day Reminder - Cancel Anytime</p>
                </li>
              </ul>

              <div className="col-12 col-md-4 text-center">
                <Link
                  to="/under-construction"
                  className="f-n-hover btn btn-danger px-4 py-25 w-75 text-600"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscription;
