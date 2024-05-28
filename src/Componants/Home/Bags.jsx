/* eslint-disable react/prop-types */
import React from "react";
import SingleBag from "./SingleBag";

const Bags = ({ data }) => {
  return (
    <div className="bg-base-300">
      <h1 className=" my-8 font-bold text-center text-emerald-900 text-3xl font-serif">
        Totes
      </h1>
      <div className="mx-28 mt-5 mb-5 me-10 grid grid-cols-2 gap-2  p-5">
        {/* data.slice(0, 4).map */}
        {data.map((bag) => (
          <SingleBag key={bag.id} bag={bag}></SingleBag>
        ))}
      </div>
    </div>
  );
};

export default Bags;
