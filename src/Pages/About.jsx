import React from "react";
import Ab from "../assets/img/aboutus.webp";
import MarqueeBag from "./MarqueeBag";
const About = () => {
  return (
    <div>
      <MarqueeBag></MarqueeBag>
      <div className="hero min-h-screen  p-6 bg-gradient-to-r from-[#64d9b9] to-[#1d2939] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Ab}
            className="animate-bounce mt-8  max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold text-white">Our Thoughts!</h1>
            <p className="py-6 font-serif text-white animate-pulse">
              Welcome to EcoTote Bags, your go-to destination for stylish,
              sustainable, and eco-friendly tote bags. Our mission is to provide
              high-quality reusable bags that help reduce plastic waste and
              promote a greener lifestyle.EcoTote Bags is your destination for
              stylish, eco-friendly tote bags designed to reduce plastic waste
              and promote sustainable living. Our collection of high-quality,
              reusable bags ensures durability and functionality, allowing you
              to carry your essentials while making a positive environmental
              impact. Founded by Jane Doe, a passionate advocate for
              sustainability with over a decade of experience in the
              eco-friendly products industry, EcoTote Bags is driven by a
              commitment to the planet.Join us in our mission to make the world
              a cleaner, greener place—one tote bag at a time.
            </p>
            {/* <button className="btn btn-primary"></button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
