import React from "react";

const Card = ({ image, title, info, alt }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-info">{info}</p>
      </div>
    </div>
  );
};

export default Card;
