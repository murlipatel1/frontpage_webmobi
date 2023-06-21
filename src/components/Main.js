import React from "react";
import main from "./images/main.png";
export const Main = () => {
  return (
    <>
      {/* <div className='bg-info'>Main</div> */}
      <div className="card bg-info h-50 bg-none">
        <div className="card-body card-img-overlay">
          <div className="mt-4">
            <div className="text-center h2">Welcome To</div>
            <div className="text-center text-primary h2">Incubyte</div>
          </div>
          <h5 className="card-text text-center">
            Buliding Bridges to success in the tech ecosystem.
          </h5>
          <div className="bg-info mx-0" style={{marginTop:"30rem"}}>
            <h2 className="text-white">About Us</h2>
            <p className="text-white h4">With over 3 years of experience , we at Incubyte apecialize in setting up captive development ceters for growing startups, addressing key challenges key challenges and providing tailor-made solutions for your business needs.</p>
            </div>
        </div>
        <img
          className="card-img w-auto "
          style={{ height: "50%" }}
          src={main}
        />
      </div>
    </>
  );
};
