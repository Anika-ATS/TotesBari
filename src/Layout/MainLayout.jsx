import React from "react";
import Navbar from "../NavAndFoot/Navbar";
import Footer from "../NavAndFoot/Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
