import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="navbar  bg-emerald-800 py-5 px-10 opacity-80">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-emerald-900 text-white rounded-box w-52 "
          >
            <li>
              <Link to="/">
                {" "}
                <a>Home</a>
              </Link>
            </li>
            {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}

            <li>
              <Link to="/Handpainted">
                {" "}
                <a>Handpainted Bags</a>
              </Link>
            </li>

            <li>
              <Link to="/Kids">
                {" "}
                <a>Kids Bag</a>
              </Link>
            </li>

            <li>
              <Link to="/Adult">
                {" "}
                <a>Adult Section</a>
              </Link>
            </li>

            <li>
              <Link to="/Gallery">
                {" "}
                <a>Gallery</a>
              </Link>
            </li>

            <li>
              <Link to="/aboutUs">
                {" "}
                <a>Team</a>
              </Link>
            </li>

            {user && (
              <li>
                <Link to="/dashboard">
                  <a>DashBoard</a>
                </Link>
              </li>
            )}

            {!user && (
              <>
                <li>
                  <Link to="/login">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link to="/signin">
                    <a>Register</a>
                  </Link>
                </li>
              </>
            )}

            {user && (
              <li>
                <button onClick={handleLogout} className="btn">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-base-100 text-2xl font-serif font-bold">
          TotesWorld
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-white  menu menu-horizontal px-1">
          <li>
            <Link to="/">
              {" "}
              <a>Home</a>
            </Link>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <Link to="/Handpainted">
              {" "}
              <a>Handpainted Bags</a>
            </Link>
          </li>

          <li>
            <Link to="/Kids">
              {" "}
              <a>Kids Bag</a>
            </Link>
          </li>

          <li>
            <Link to="/Adult">
              {" "}
              <a>Adult Section</a>
            </Link>
          </li>

          <li>
            <Link to="/Gallery">
              {" "}
              <a>Gallery</a>
            </Link>
          </li>

          <li>
            <Link to="/aboutUs">
              {" "}
              <a>Team</a>
            </Link>
          </li>

          {/* 
          <li>
            <Link to="/about">
              {" "}
              <a>About</a>
            </Link>
          </li> */}

          {/* if user here */}
          {user && (
            <li>
              <Link to="/dashboard">
                <a>DashBoard</a>
              </Link>
            </li>
          )}

          {!user && (
            <>
              <li>
                <Link to="/login">
                  <a>Login</a>
                </Link>
              </li>

              <li>
                <Link to="/signin">
                  <a>Register</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <button
            onClick={handleLogout}
            className=" text-white font-serif font-bold me-5"
          >
            Logout
          </button>
        )}
        <div className="avatar">
          <div className="w-12 rounded-full border-2 border-black">
            <img src={user?.photoURL || "/public/placeholder.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
