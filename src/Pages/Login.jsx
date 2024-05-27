import React from "react";
import login from "../assets/img/login.jpg";
import { Link } from "react-router-dom";

// import { Carousel } from "react-responsive-carousel";
const Login = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${login})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div className=" font-bold w-[300px] h-[10px]  hover:-translate-y-5 ">
            <div className="mx-24  group card w-[400px] h-[300px] shadow-4xl">
              {/* form start */}

              <div className=" mx-10 mt-24 card flex-shrink-0 w-full max-w-sm shadow-4xl  ">
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
                        <label className="label">
                          <label className="font-bold"> Forgot password?</label>

                          <label
                            // onClick={handleResetPassword}
                            className=" mx-2 font-bold text-[#1d2939] hover:link"
                          >
                            Reset now
                          </label>
                        </label>
                      </div>

                      <div className="form-control mt-6">
                        <input
                          className=" mx-auto btn btn-outline outline-[#1d2939]   text-white h-[50px] w-3/4 bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  "
                          type="submit"
                          value="Login"
                        />

                        <h1 className=" text-[#1d2939] font-bold mt-3 text-center">
                          <Link
                            className="w-full hover:link  text-[#1d2939]  text-center"
                            to="/signin"
                          >
                            Click here to create a new account
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-10 hero min-h-screen ">
          <div className=" mt-12 mb-10  rounded-lg hero-content ">
            <div className="">
              <div className="border bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  font-seif  font-bold text-center text-white rounded-md fade-in-word animate-pulse ">
                <p className="text-3xl">Explore TotesWorld !</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
