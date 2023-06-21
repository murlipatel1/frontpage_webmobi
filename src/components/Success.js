import React from "react";
import ellipse2 from "./images/Ellipse2.png";
export const Success = () => {
  return (
    <>
      <div className="card bg-primary h-50 bg-none">
        <div className="card-body card-img-overlay">
          <h3 className="card-title text-center">Special title treatment</h3>
          <h5 className="card-text text-center">
            With supporting text below as a natural lead-in to additional
            content.
          </h5>
        </div>
        <img
          className="card-img w-auto "
          style={{ height: "50%" }}
          src={ellipse2}
        />
      </div>
      <section class="scale-up ">
        <h1 class="scale-up-heading text-center">
          <b>Ready To Scale Up?</b>
        </h1>
        <p class="scale-up-details text-center">
          Experience the Incubyte advantage today. Let us help you navigate the
          challenges and scale up your operations smoothly and efficiently.
        </p>
        <div class="d-grid gap-2 col-2 mx-auto">
          <button class="btn btn-primary btn-lg" type="button">
            Contact Us
          </button>
        </div>
      </section>
      <p class="copyright text-center my-4">&copy; 2023 Incubyte</p>
    </>
  );
};
