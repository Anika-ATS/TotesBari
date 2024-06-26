import React from "react";
import { useEffect, useState } from "react";

import SingleBagCardDash from "../Componants/DashboardSinglebag/SingleBagCardDash";

// import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

const AllBags = () => {
  const [bags, setBags] = useState([]);
  useEffect(() => {
    fetchBags();
  }, []);

  const fetchBags = async () => {
    const response = await fetch("http://localhost:3000/bags");
    const data = await response.json();
    setBags(data);
  };

  // useEffect(() => {
  //   fetch("http://localhost:3000/bags/")
  //     .then((res) => res.json())
  //     .then((data) => setBags(data));
  // }, []);

  const handleDeleteProduct = (id) => {
    setBags(bags.filter((bag) => bag.id !== id));
  };

  return (
    <div className="mx-20 me-5 ">
      <h1 className="text-3xl  p-2 font-bold text-center mx-16 mb-5 mt-3 text-emerald-900">
        All Produts
      </h1>
      {/* className=" grid grid-cols-2 gap-10" */}
      <div className=" flex flex-wrap gap-10">
        {bags.map((bag) => (
          // <SingleProductCardDashboard
          <SingleBagCardDash
            key={bag.id}
            bag={bag}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBags;
