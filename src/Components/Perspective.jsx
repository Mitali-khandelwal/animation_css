import React, { useEffect } from 'react';
import { TweenMax } from 'gsap'; // Import the GSAP library if not already imported
import './perspective.scss'
function Perspective() {
  useEffect(() => {
    // Find and store references to the boxes
    const boxes = document.querySelectorAll(".boxes");

    // Attach event listeners
    boxes.forEach((box) => {
      box.addEventListener("mouseenter", handleMouseEnter);
      box.addEventListener("mouseleave", handleMouseLeave);
    });

    // Remove event listeners when the component is unmounted
    return () => {
      boxes.forEach((box) => {
        box.removeEventListener("mouseenter", handleMouseEnter);
        box.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Helper function to determine the closest edge
  function closestEdge(x, y, w, h) {
    // ... (same as your original closestEdge function)
  }

  // Mouse enter event handler
  function handleMouseEnter(e) {
    const box = e.currentTarget;
    const x = e.pageX - box.offsetLeft;
    const y = e.pageY - box.offsetTop;
    const edge = closestEdge(x, y, box.clientWidth, box.clientHeight);
    const overlay = box.childNodes[1];
    const image = box.childNodes[0];

    switch (edge) {
      case "left":
        overlay.style.top = "0%";
        overlay.style.left = "-100%";
        TweenMax.to(overlay, 0.5, { left: "0%" });
        TweenMax.to(image, 0.5, { scale: 1.2 });
        break;
      // ... (handle other cases similarly)
    }
  }

  // Mouse leave event handler
  function handleMouseLeave(e) {
    const box = e.currentTarget;
    const x = e.pageX - box.offsetLeft;
    const y = e.pageY - box.offsetTop;
    const edge = closestEdge(x, y, box.clientWidth, box.clientHeight);
    const overlay = box.childNodes[1];
    const image = box.childNodes[0];

    switch (edge) {
      case "left":
        TweenMax.to(overlay, 0.5, { left: "-100%" });
        TweenMax.to(image, 0.5, { scale: 1.0 });
        break;
      // ... (handle other cases similarly)
    }
  }

  return (
    <div className="container cf">
      {/* Your HTML content with boxes */}
    </div>
  );
}

export default Perspective;
