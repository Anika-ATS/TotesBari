import React from "react";
import B1 from "../../assets/img/toteB.avif";
const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${B1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-10 py-10 "></div>
        <div className="hero-content text-center text-neutral-content"></div>
      </div>
    </div>
  );
};

export default Banner;
