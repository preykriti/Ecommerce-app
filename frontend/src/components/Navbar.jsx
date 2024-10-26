// import React from 'react'
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-4 px-4 font-medium bg-slate-200">
      <h1 className="font-bold  text-2xl text-slate-700">SHOPPY</h1>
      <ul className="hidden sm:flex gap-5 text-sm text-slate-700 ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-slate-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-slate-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-slate-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-slate-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <SearchIcon className="cursor-pointer" />
        <div className="group relative">
          <AccountCircleIcon className="cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <ShoppingBagOutlinedIcon />
          <p className="absolute right-[-5px] bottom-[5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <MenuIcon
          onClick={() => {
            setVisible(true);
          }}
          sx={{ display: { xs: "block", sm: "none" } }}
        />
      </div>
      {/* sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <ArrowBackIosIcon />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b border-tjjj py-2 border-slate-300 pl-3"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b py-2 border-slate-300 pl-3"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b py-2 border-slate-300 pl-3"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b py-2 border-slate-300 pl-3"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// {
//     _id: "aaa",
//     name: "Women Tshirt",
//     description: "A lighweight, cotton tshirt",
//     price: 200,
//     image: [img1.png],
//     category: "Women",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L"],
//     date: 1234455,
//     bestseller: true,
// }
