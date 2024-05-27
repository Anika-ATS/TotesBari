import React from "react";
import signin from "../assets/img/sign-in-hand.jpg";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${signin})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div className=" font-bold w-[300px] h-[10px]  hover:-translate-y-5 ">
            <div className="mx-24  group card w-[400px] h-[300px] shadow-4xl"></div>
          </div>
        </div>

        <div className=" hero min-h-screen ">
          <div className=" mt-10 mb-10  rounded-lg hero-content ">
            <div className="">
              {/* form start */}

              <div className="ms-96 mt-20 card flex-shrink-0 w-full max-w-sm shadow-4xl  ">
                <form>
                  <div className="h-auto card flex-shrink-3 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          name="email"
                          // ref={emailRef}
                          required
                          className="input input-bordered"
                        />
                        {/* {errors.email && (
                        <span className="text-red-600">
                          Please fill up this field{" "}
                        </span> */}
                        {/* )} */}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          name="password"
                          required
                          className="input input-bordered"
                        />
                      </div>

                      <div className="form-control mt-6">
                        <input
                          className=" mx-auto btn btn-outline outline-[#1d2939]   text-white h-[50px] w-3/4 bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  "
                          type="submit"
                          value="Complete"
                        />

                        <h1 className=" text-[#1d2939] font-bold mt-3 text-center">
                          <Link
                            className="w-full hover:link  text-[#1d2939]  text-center"
                            to="/login"
                          >
                            If you are a member, than Login please !
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/*         
              <div className="text-center lg:text-left">
                <div className="card mx-auto w-96 ">
                  <div className="card w-56 h-[350px] mb-3 hover:-translate-y-5"></div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SignUp;
