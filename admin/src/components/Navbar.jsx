import React from "react";

const Navbar = () => {
  return (
    <div className="flex text-center items-center justify-between py-2 px-4 border-gray-300">
      <div className="flex text-center flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-slate-700 ">SHOPPY</h1>
        <p className="text-gray-500 text-sm ">Admin Panel</p>
      </div>
      <button className="px-5 py-2 text-white bg-gray-600 sm:px-7 sm:py2 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
