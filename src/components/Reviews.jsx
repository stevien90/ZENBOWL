import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Reviews = () => {
  return (
    <section>
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-xl-8 text-center container-title-info">
          <h2 className="mb-2 pt-5">Our Customers Speak for Us!</h2>
          <p className="mb-4 pb-2 mb-md-3 pb-md-0">
            See the reviews from people who experience our food delivery
            firsthand!
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="d-flex justify-content-center mb-0"></div>
          <h5 className="mb-3 name">Maria Sutherland</h5>

          <p className="px-xl-3 review-text-box">
            All of the ZENBOWL that we have tried have been great! We haven't
            had a single item that wasn't good quality and great tasting!
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0 star">
            <li>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="d-flex justify-content-center mb-0"></div>
          <h5 className="mb-3 name">Olivia Carter</h5>

          <p className="px-xl-3 review-text-box">
            The meals are incredibly delicious and fresh. The delivery service
            has been excellent as well!
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0 star">
            <li>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="d-flex justify-content-center mb-0"></div>
          <h5 className="mb-3 name">Liam Brooks</h5>

          <p className="px-xl-3 review-text-box">
            The food is delicious and the fact that it’s so easy just throw it
            in the microwave for three minutes and it’s done so convenient
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0 star">
            <li>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
