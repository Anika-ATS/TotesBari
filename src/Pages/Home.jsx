import React from "react";
import Banner from "../Componants/Home/Banner";
import Bags from "../Componants/Home/Bags";
import About from "../Pages/About";
import Accordian from "../Componants/Home/Accordian";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Bags data={data}></Bags>

      <Accordian></Accordian>
    </div>
  );
};

export default Home;
