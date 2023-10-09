import React from "react";
import Box1 from "./Box1";
import BoxAnimation from "./BoxAnimation";
import DirectionBox from "./DirectionBox";

const Animations = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "100px",
          width: "100vw",
        }}
      >
        <Box1 />
      </div>
      <div>{/* <BoxAnimation/> */}</div>
      <div
        style={{
          marginTop: "100px",
        }}
      >
        <DirectionBox />
      </div>

      <div
        style={{
          marginTop: "100px",
        }}
      >
      </div>
    </div>
  );
};

export default Animations;
