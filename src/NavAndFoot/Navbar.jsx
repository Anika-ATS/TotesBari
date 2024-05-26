import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-emerald-900 py-5 px-10 opacity-80">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            {/* {NavItems} */}
          </ul>
        </div>
        <div className="flex justify-between ">
          {/* <img className='w-14 h-14 p-2 space-x-3 rounded-full  '
                src={logo} alt="" /> */}

          <a className="btn btn-ghost py-2 normal-case text-base-100">
            <span className="text-3xl ">TotesBari</span>
          </a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1"></ul>
      </div>
      <div className="navbar-end flex flex-row">
        <div className="flex justify-between  ">
          <div className="avatar w-1/2 mt-2 pe-3">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {/* <img className='w-[50px] h-[50px]' src={user.photo} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="bg-red-300">
    //   <div className="navbar bg-base-100">
    //     <div className="flex-1">
    //       <a className="btn btn-ghost text-xl">daisyUI</a>
    //     </div>
    //     <div className="flex-none gap-2">
    //       <div className="form-control">
    //         <input
    //           type="text"
    //           placeholder="Search"
    //           className="input input-bordered w-24 md:w-auto"
    //         />
    //       </div>
    //       <div className="dropdown dropdown-end">
    //         <div
    //           tabIndex={0}
    //           role="button"
    //           className="btn btn-ghost btn-circle avatar"
    //         >
    //           <div className="w-10 rounded-full">
    //             <img
    //               alt="Tailwind CSS Navbar component"
    //               src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    //             />
    //           </div>
    //         </div>
    //         <ul
    //           tabIndex={0}
    //           className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
    //         >
    //           <li>
    //             <a className="justify-between">
    //               Profile
    //               <span className="badge">New</span>
    //             </a>
    //           </li>
    //           <li>
    //             <a>Settings</a>
    //           </li>
    //           <li>
    //             <a>Logout</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
