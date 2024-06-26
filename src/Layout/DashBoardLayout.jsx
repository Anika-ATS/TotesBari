import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { LuLampDesk } from "react-icons/lu";

const DashBoardLayout = () => {
  return (
    <div className="">
      <div className="grid grid-cols-10">
        <div className="col-span-2 bg-gradient-to-r from-[#64d9b9] to-[#1d2939] min-h-screen p-12">
          <ul>
            <div className="flex mt-32 items-center   text-white mb-5 gap-2">
              <LuLampDesk size={32} className="" />
              <li className="  text-white text-2xl  w-full font-mono font-bold">
                <Link to={"home"}>
                  {" "}
                  <a>Dashboard</a>
                </Link>
              </li>
            </div>

            <div className="flex items-center    text-white mb-3 gap-2">
              <BiSolidShoppingBags size={32} />
              <li className="  text-white text-2xl  w-full font-mono font-bold">
                <Link to={"dashboard/all-bags"}>All Bags</Link>
              </li>
            </div>

            <div className="flex items-center     text-white mb-3 gap-2">
              <PiHandbagSimpleFill size={28} />

              <li className=" p-2 text-white text-2xl  w-full font-mono font-bold">
                <Link to={"dashboard/add-bags"}>Add Bag</Link>
              </li>
            </div>

            <div className="flex items-center     text-white mb-3 gap-2">
              <FaHome size={28} />
              <li className="  text-2xl  w-full font-mono font-bold">
                <Link to={"/"}>
                  <a>Home</a>
                </Link>
              </li>
            </div>
          </ul>
        </div>

        <div className="col-span-8 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
