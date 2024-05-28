import React from "react";
import { useEffect, useState } from "react";
import SingleBag from "../Componants/Home/SingleBag";
// import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

const AllBags = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bags/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   const handleDeleteProduct = (id) => {
  //     setProducts(products.filter((product) => product.id !== id));
  //   };

  return (
    <div className="mx-10 me-5 ">
      <h1 className="text-3xl p-2 font-bold text-center mx-16 mb-3 mt-3 text-emerald-900">
        All Produts
      </h1>
      <div className=" grid grid-cols-2 gap-32">
        {products.map((bag) => (
          // <SingleProductCardDashboard
          <SingleBag
            key={bag.id}
            bag={bag}
            //   onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBags;
