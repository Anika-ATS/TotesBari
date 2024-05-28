import React from "react";
import Marquee from "react-fast-marquee";
import Ab from "../assets/img/aboutus.webp";
import bb from "../assets/img/bb.jpg";
import cb from "../assets/img/cb.jpg";
import db from "../assets/img/db.jpg";
import eb from "../assets/img/eb.jpg";
import fb from "../assets/img/fb.jpg";
const MarqueeBag = () => {
  return (
    <div>
      {/* <h1 className="text-danger text-center mb-3 text-emerald-800">Totes</h1> */}
      <Marquee speed={60}>
        <div className="flex flex-row mt-4 mb-4 ">
          <div className="card w-72 ">
            <figure>
              <img style={{ height: "14rem" }} src={Ab} alt="Bags" />
            </figure>
          </div>

          <div className="card w-72 ">
            <figure>
              <img style={{ height: "14rem" }} src={bb} alt="Bags" />
            </figure>{" "}
          </div>

          <div className="card w-72 ">
            <figure>
              <img style={{ height: "14rem" }} src={cb} alt="Bags" />
            </figure>{" "}
          </div>

          <div className="card w-72 ">
            <figure>
              <img style={{ height: "14rem" }} src={db} alt="Bags" />
            </figure>{" "}
          </div>

          <div className="card w-72 ">
            <figure>
              <img style={{ height: "14rem" }} src={eb} alt="Bags" />
            </figure>{" "}
          </div>

          <div className="card w-72 ">
            <figure>
              <img style={{ height: "14rem" }} src={fb} alt="Bags" />
            </figure>{" "}
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeBag;
