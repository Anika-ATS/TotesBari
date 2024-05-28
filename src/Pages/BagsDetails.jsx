import React from "react";
import { useLoaderData } from "react-router-dom";
const BagsDetails = () => {
  const bag = useLoaderData();

  const { brand, description, image_url, price, title } = bag;

  return (
    <div className="mx-72 p-3 mb-5 me-5 ">
      <div className="  card w-96 bg-gradient-to-r from-[#64d9b9] to-[#1d2939] shadow-xl mb-5 border border-black ">
        <h1 className="mx-auto p-5 text-4xl text-center font-serif text-white font-semibold">
          {title}
        </h1>

        <figure>
          {" "}
          <img
            className="p-10 object-fit-cover mt-5 h-[400px]"
            // className="object-fit-cover mt-5"
            // style={{ height: "20rem" }}
            src={image_url}
            alt="product image"
          />{" "}
        </figure>

        <h3 className="p-3 text-xl text-white font-semibold">{price} BDT</h3>
        <h3 className="p-3 text-xl text-white font-semibold">{brand}</h3>
        <p className="p-3 text-lg text-white font-light">{description}</p>
      </div>
    </div>
  );
};

export default BagsDetails;
