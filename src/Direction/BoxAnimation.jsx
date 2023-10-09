import React from "react";
import "./boxAnimation.css";

const BoxAnimation = () => {
  return (
    <>
      <div className="main-container">
        <div className="container2">
          <div className="box2">Right</div>
        </div>
        <div className="container3">
          <div className="box3">Bottom</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <div className="container1">
          <div className="box1">top</div>
        </div>
      </div>
      <div class="containerr">
        content
        <div class="boxx">left</div>
      </div>
    </>
  );
};

export default BoxAnimation;
