/* eslint-disable react/prop-types */
import React from "react";
import SingleBag from "./SingleBag";

const Bags = ({ data }) => {
  return (
    <div>
      <h1 className=" mt-5 font-bold text-center text-emerald-900 text-3xl font-serif">
        Totes
      </h1>
      <div className="mx-24 mt-5 mb-10 me-10 grid grid-cols-2 gap-3 p-2">
        {/* data.slice(0, 4).map */}
        {data.map((bag) => (
          <SingleBag key={bag.id} bag={bag}></SingleBag>
        ))}
      </div>
    </div>
  );
};

export default Bags;
