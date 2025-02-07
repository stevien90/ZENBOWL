import React from "react";

const Offers = () => {
  return (
    <section className="newsletter-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="display-4 mb-4">Stay Updated</h2>
            <p className="lead mb-5">
              Subscribe to our newsletter for the latest news, updates, and
              exclusive offers.
            </p>
            <form className="newsletter-form">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  required
                />
                <button className="btn btn-primary btn-lg" type="submit">
                  Subscribe
                </button>
              </div>
              <div className="form-check text-start">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="privacyCheck"
                  required
                />
                <label className="form-check-label" htmlFor="privacyCheck">
                  I agree to the{" "}
                  <a href="#" className="text-decoration-none">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
