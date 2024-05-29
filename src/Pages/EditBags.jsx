import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditBags = () => {
  const bag = useLoaderData();

  const [title, setTitle] = useState(bag.title);
  const [price, setPrice] = useState(bag.price);
  const [brand, setBrand] = useState(bag.brand);
  const [id, setId] = useState(bag.id);
  const [description, setDescription] = useState(bag.description);
  const [image_url, setImageURL] = useState(bag.image_url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };

    await fetch(`http://localhost:3000/bags/${bag.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-emerald-800 text-center">
        Update a Product
      </h1>

      <div className="my-10 mx-5 ">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100  text-emerald-800 text-bold p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-800 rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-900 rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-900 rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-900 rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-900 rounded-lg"
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-1/3 items-center bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  text-white text-xl mb-3"
              type="submit"
              value="Update Bag"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press update if you are sure to update.</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  text-white text-xl">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBags;
