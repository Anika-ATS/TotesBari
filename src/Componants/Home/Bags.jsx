import React from "react";
import SingleBag from "./SingleBag";

const Bags = () => {
  return (
    <div>
      <h1 className=" mt-5 font-bold text-center text-emerald-900 text-3xl font-serif">
        Totes
      </h1>
      <div className="flex gap-3 m-10 p-2">
        <SingleBag></SingleBag>
        <SingleBag></SingleBag>
        <SingleBag></SingleBag>
      </div>
    </div>
  );
};

export default Bags;
