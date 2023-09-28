import React, { useState } from "react";
import "./style.css";
// import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const BoxAnimation = () => {
  const [hoveredModule, setHoveredModule] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredModule(index);
  };

  const handleMouseLeave = () => {
    setHoveredModule(null);
  };

  return (
    <div className="my-16">
      <div className="mb-5">
        <h1 className="text-center text-[40px] font-semibold text-[#031B59]">
          Our Portfolio
        </h1>
        <p className="text-center text-[#808080]">
          The stories of some of our favourite projects, which inspired us to go
          above and beyond to meet Deeporion-level standards.
        </p>
      </div>
      <div className="flex justify-center flex-wrap">
        <div
          className={`module module0  mid ${
            hoveredModule === 0 ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <h2>OKAGE INU</h2>
          <p>
            This is a cutting edge blockchain development studio bridging the
            gap between Web2 to Web3.
          </p>

          <button>
            {/* <HiOutlineArrowSmallRight /> */}
          </button>
        </div>
        <div
          className={`module module1 mid ${
            hoveredModule === 1 ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <h2>Resume.io</h2>
          <p>
            This is a resume builder website. Users can build their resume from
            the available templates.
          </p>
          <button>
            {/* <HiOutlineArrowSmallRight /> */}
          </button>
        </div>
        <div
          className={`module module2 mid ${
            hoveredModule === 2 ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <h2>Stc</h2>
          <p>
            The company offers landline and fixed infrastructure, mobile and
            data services and also offers mobile, broadband.
          </p>
          <button>
            {/* <HiOutlineArrowSmallRight /> */}
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-wrap">
        <div
          className={`module  module3 mid ${
            hoveredModule === 3 ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <h2>Unified</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature
          </p>
          <button>
            {/* <HiOutlineArrowSmallRight /> */}
          </button>
        </div>
        <div
          className={`module module4 mid ${
            hoveredModule === 4 ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          <h2>tpv360</h2>
          <p>
            They are providing the client with multiple users management system
            where they can create multiple users in a particular client.
          </p>
          <button>
            {/* <HiOutlineArrowSmallRight /> */}
          </button>
        </div>
        <div
          className={`module module5 mid ${
            hoveredModule === 5 ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        >
          <h2>Festum</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature
          </p>
          <button>
            {/* <HiOutlineArrowSmallRight /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoxAnimation;
