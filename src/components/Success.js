import React from "react";
import ellipse2 from "./images/Ellipse2.png";
export const Success = () => {
  return (
    <div className="card w-75 mx-auto">
        <div className="card-body card-img-overlay">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      <img className="card-img zindex-fixed" src={ellipse2} />
    </div>
  );
};
