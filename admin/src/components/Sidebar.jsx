import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="w-1/5 min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-sm">
        <NavLink className="flex items-center rounded-lg gap-3 px-3 py-2 border border-r-0 border-gray-300" to="/add">
          <IoIosAddCircle />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink className="flex items-center gap-3 px-3 py-2 border border-r-0 border-gray-300" to="/list">
          <IoIosAddCircle />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink className="flex items-center gap-3 px-3 py-2 border border-r-0 border-gray-300" to="/orders">
          <IoIosAddCircle />
          <p className="hidd en md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
