import React from "react";
import { Outlet, Link } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-2 bg-gradient-to-r from-[#64d9b9] to-[#1d2939] min-h-screen p-12">
        <ul>
          <li className="mt-10 p-4 text-white text-xl  w-full font-mono font-bold">
            <Link to={"home"}>
              <a>Dashboard</a>
            </Link>
          </li>
          <li className=" p-4 text-white text-xl  w-full font-mono font-bold">
            <Link to={"all-products"}>
              <a>All Products</a>
            </Link>
          </li>
          <li className=" p-4 text-white text-xl  w-full font-mono font-bold">
            <Link to={"add-products"}>
              <a> Product</a>
            </Link>
          </li>
          <li className=" p-4 text-white text-xl  w-full font-mono font-bold">
            <Link to={"/"}>
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
