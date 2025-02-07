import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Construction = () => {
  return (
    <div>
      <NavBar />
      <div className="container my-5">
        <div className="p-5 text-center rounded-3 big-square">
          <img
            src="https://i.imgur.com/m5UiuwV.png"
            alt="Rice bowl"
            width="300"
          />
          <h1 className="text-body-emphasis">Under Construction</h1>
          <p className="col-lg-8 mx-auto fs-5 textbox">
            We're currently working hard to complete the final touches on this
            site. We truly appreciate your patience and understanding. Please
            check back with us soon for the full experience. In the meantime,
            feel free to press the button below to return to the homepage and
            continue exploring. Thank you for your support!
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <Link to="/" className="btn btn-warning btn-lg px-4 rounded-pill">
              Run!
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Construction;
