/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const SingleBagCardDash = (data) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, brand, price, description, image_url } = data.bag;

  //   delete

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/bags/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // onDelete(id);
      });
  };

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
          <div className="card-actions justify-end  ">
            <div className="p-5 badge badge-outline bg-white text-emerald-800 font-bold  mt-5 me-9">
              <Link to={`/bags/${id}`}>See Details</Link>
            </div>
            <div className="p-5  badge badge-outline bg-white text-emerald-800 font-bold  mt-5">
              <Link to={`/bags/${id}`}>Edit</Link>
            </div>

            <div className=" p-5 badge badge-outline mt-5  bg-white text-rose-800 font-bold ">
              {/* <button onClick={handleDelete}>Delete</button> */}
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Delete
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press delete if you are sure to delete.
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn" onClick={handleDelete}>
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBagCardDash;