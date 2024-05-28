import React from "react";
import { Link } from "react-router-dom";
// import B1 from "../../assets/img/B1.webp";
const SingleBag = (data) => {
  const { id, title, brand, price, description, image_url } = data.bag;
  return (
    <div>
      <div
        className="card w-96 bg-gradient-to-r from-[#64d9b9] to-[#1d2939] shadow-xl 
      mb-2 mt-2 border border-black "
      >
        <figure>
          <img
            className="object-fit-cover mt-5"
            style={{ height: "14rem" }}
            src={image_url}
            alt="bags"
          />
        </figure>
        <div className="card-body  text-center">
          <h2 className=" text-center  text-white font-serif ">
            {title}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <h1 className="text-xl font-semibold text-white font-serif ">
            {" "}
            Brand :{""}
            {brand}
          </h1>
          <h1 className="text-xl  font-semibold text-white font-serif">
            {price} BDT
          </h1>
          <p className="text-white font-serif">{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline bg-white text-emerald-800 font-bold p-5 mt-5">
              <Link to={`/bags/${id}`}>See Details</Link>
            </div>
            {/* <div className="badge badge-outline">Products</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBag;
