import React from "react";

function Banner(props) {
  return (
    <div className="promo-bar">
      <div className="promo-bar-wrapper">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Banner;
