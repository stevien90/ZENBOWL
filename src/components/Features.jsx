import React from "react";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";

function Features(props) {
  return (
    <div className="container px-4 py-5 full-width-container" id="features">
      <h2>{props.title}</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <div className="feature-image">{props.featureImageOne}</div>
          </div>
          <h3 className="fs-2 text-body-emphasis">{props.featureTitleOne}</h3>
          <p>{props.featureDesriptionOne}</p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <div className="feature-image">{props.featureImageTwo}</div>
          </div>
          <h3 className="fs-2 text-body-emphasis">{props.featureTitleTwo}</h3>
          <p>{props.featureDesriptionTwo}</p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <div className="feature-image">{props.featureImageThree}</div>
          </div>
          <h3 className="fs-2 text-body-emphasis">{props.featureTitleThree}</h3>
          <p>{props.featureDesriptionThree}</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
