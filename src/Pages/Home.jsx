import React from "react";
import Banner from "../Componants/Home/Banner";
import Bags from "../Componants/Home/Bags";
import About from "../Pages/About";
import Accordian from "../Componants/Home/Accordian";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Bags></Bags>

      <Accordian></Accordian>
    </div>
  );
};

export default Home;
