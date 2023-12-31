import React from "react";
import "./directionBox.css";
const DirectionBox = () => {
  return (
    <>
      <h1>DirectionBox</h1>
      <div style={{display:"flex" , justifyContent:"center"}}>
        <div class="box">
          <div class="drop"></div>
          <div class="activator northwest"></div>
          <div class="activator north"></div>
          <div class="activator northeast"></div>
          <div class="activator east"></div>
          <div class="activator southeast"></div>
          <div class="activator south"></div>
          <div class="activator southwest"></div>
          <div class="activator west"></div>
          <div class="overlay northwest">Northwest</div>
          <div class="overlay north">North</div>
          <div class="overlay northeast">Northeast</div>
          <div class="overlay east">East</div>
          <div class="overlay southeast">Southeast</div>
          <div class="overlay south">South</div>
          <div class="overlay southwest">Southwest</div>
          <div class="overlay west">West</div>
        </div>
      </div>
    </>
  );
};

export default DirectionBox;
