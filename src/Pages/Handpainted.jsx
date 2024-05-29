import React from "react";

const Handpainted = () => {
  return (
    <div>
      <h1 className="text-3xl  p-2 font-bold text-center mx-16 mb-5 mt-3 text-emerald-900">
        Hand Magic Series
      </h1>
      <div className="flex flex-wrap ">
        <div
          className="mx-10 mb-5 p-5 card w-96 bg-gradient-to-r from-[#64d9b9] to-[#1d2939] shadow-xl 
    mb-2 mt-2 border border-black "
        >
          <figure>
            <img
              className="object-fit-cover mt-5 animate-pulse"
              style={{ height: "14rem" }}
              src="https://i.etsystatic.com/44388088/r/il/6355e3/5746173685/il_fullxfull.5746173685_ex93.jpg"
              alt="bags"
            />
          </figure>
          <div className="card-body  text-center">
            <h2 className=" text-center  text-white font-serif ">
              Bonolota
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <h1 className="text-xl font-semibold text-white font-serif ">
              {" "}
              Brand :CRaft.BD
            </h1>
            <h1 className="text-xl  font-semibold text-white font-serif">
              250 BDT
            </h1>
            <p className="text-white font-serif">
              It's our casual outing jute made small hand painted purse
              collection.
            </p>
            {/* <div className="card-actions justify-end">
          <div className="badge badge-outline bg-white text-emerald-800 font-bold p-5 mt-5">
            <Link to={`/bags/${id}`}>See Details</Link>
          </div>
    
        </div> */}
          </div>
        </div>

        <div
          className="mx-10 mb-5 p-5 card w-96 bg-gradient-to-r from-[#64d9b9] to-[#1d2939] shadow-xl 
    mb-2 mt-2 border border-black "
        >
          <figure>
            <img
              className="object-fit-cover mt-5 animate-pulse"
              style={{ height: "14rem" }}
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHIRfnOvop6k1aXQ2o6WMEg_qEKr5IfWcCw_SbauqJnFmOxchEsouaFs4EqbET4whwuf3djZkONyqgfcS4phz1_FTHgYsCRxPHi-bib2xERVQTa6snBXGJGGkUgzPm057BcyqSYLQ_u-Fz/s2048/Line+art+embroidered+tote+bag.jpg"
              alt="bags"
            />
          </figure>
          <div className="card-body  text-center">
            <h2 className=" text-center  text-white font-serif ">
              Boho
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <h1 className="text-xl font-semibold text-white font-serif ">
              {" "}
              Brand :CRaft.BD
            </h1>
            <h1 className="text-xl  font-semibold text-white font-serif">
              200 BDT
            </h1>
            <p className="text-white font-serif">
              It's our casual outing jute made small hand painted purse
              collection.
            </p>
            {/* <div className="card-actions justify-end">
          <div className="badge badge-outline bg-white text-emerald-800 font-bold p-5 mt-5">
            <Link to={`/bags/${id}`}>See Details</Link>
          </div>
    
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handpainted;
