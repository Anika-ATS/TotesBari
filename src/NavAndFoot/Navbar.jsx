import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //  bg-emerald-900 py-5 px-10 opacity-80
    <div className="navbar  bg-emerald-900 py-5 px-10 opacity-80">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-white"
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
              <Link to="/about">
                {" "}
                <a>About</a>
              </Link>
            </li>

            <li>
              <Link to="/dashboard">
                <a>DashBoard</a>
              </Link>
            </li>

            <li>
              <Link to="/login">
                <a>Login</a>
              </Link>
            </li>
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
            <Link to="/about">
              {" "}
              <a>About</a>
            </Link>
          </li>

          <li>
            <Link to="/dashboard">
              <a>DashBoard</a>
            </Link>
          </li>

          <li>
            <Link to="/login">
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
