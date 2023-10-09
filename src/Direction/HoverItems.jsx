import React, { useState } from "react";
import "./hoverItems.css"; // Import your CSS file

function HoverItems() {
  const directions = ["top", "right", "bottom", "left"];
  const [hoverDirections, setHoverDirections] = useState(Array(6).fill(""));

  const getHoverDirection = (event) => {
    const item = event.currentTarget;
    const w = item.offsetWidth;
    const h = item.offsetHeight;
    const x =
      (event.clientX - item.getBoundingClientRect().left - w / 2) *
      (w > h ? h / w : 1);
    const y =
      (event.clientY - item.getBoundingClientRect().top - h / 2) *
      (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return directions[d];
  };

  const handleMouseEnter = (event, index) => {
    const dir = getHoverDirection(event);
    const newHoverDirections = [...hoverDirections];
    newHoverDirections[index] = `mouseenter ${dir}`;
    setHoverDirections(newHoverDirections);
  };

  const handleMouseLeave = (index) => {
    const newHoverDirections = [...hoverDirections];
    newHoverDirections[index] = "";
    setHoverDirections(newHoverDirections);
  };

  return (
    <div className="layout">
      {Array.from({ length: 6 }, (_, i) => (
        <div
          className={`hover ${hoverDirections[i]}`}
          onMouseEnter={(event) => handleMouseEnter(event, i)}
          onMouseLeave={() => handleMouseLeave(i)}
          key={i}
        >
          <div className="content">Item {i + 1}</div>
          <div className="overlay"></div>
        </div>
      ))}
    </div>
  );
}

export default HoverItems;
