import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const {
    getCartCount,
    setShowSearch,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  return (
    <div className="flex items-center justify-between py-5 px-6 font-medium bg-slate-900 text-white">
      <Link to="/">
        <h1 className="font-bold text-2xl tracking-tight">
          SHOPPY
          <span className="text-indigo-500 font-extralight">-corner</span>
        </h1>
      </Link>

      <ul className="hidden sm:flex gap-8 text-sm text-slate-200">
        <NavLink to="/" className="flex flex-col items-center gap-1 group">
          <p className="group-hover:text-indigo-500 transition">HOME</p>
          <hr className="w-0 group-hover:w-full border-none h-[2px] bg-indigo-700 transition-all duration-300" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 group"
        >
          <p className="group-hover:text-indigo-500 transition">COLLECTION</p>
          <hr className="w-0 group-hover:w-full border-none h-[2px] bg-indigo-700 transition-all duration-300" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1 group">
          <p className="group-hover:text-indigo-500 transition">ABOUT</p>
          <hr className="w-0 group-hover:w-full border-none h-[2px] bg-indigo-700 transition-all duration-300" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 group"
        >
          <p className="group-hover:text-indigo-500 transition">CONTACT</p>
          <hr className="w-0 group-hover:w-full border-none h-[2px] bg-indigo-700 transition-all duration-300" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <SearchIcon
          className="cursor-pointer hover:text-indigo-700 transition"
          onClick={() => setShowSearch(true)}
        />
        <div className="group relative">
          <AccountCircleIcon
            onClick={() => (token ? null : navigate("/login"))}
            className="cursor-pointer hover:text-indigo-700 transition"
          />

          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-800 text-slate-200 rounded-lg shadow-xl">
                <p className="cursor-pointer hover:text-indigo-700 transition">
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-indigo-700 transition"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:text-indigo-700 transition"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative hover:text-indigo-700 transition">
          <ShoppingBagOutlinedIcon />
          <p className="absolute right-[-5px] bottom-[5px] w-4 text-center leading-4 bg-indigo-700 text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <MenuIcon
          onClick={() => setVisible(true)}
          className="cursor-pointer hover:text-indigo-700 transition"
          sx={{ display: { xs: "block", sm: "none" } }}
        />
      </div>

      {/* sidebar menu for small screen */}
      <div
        className={`absolute z-10 top-0 right-0 bottom-0 overflow-hidden bg-slate-300 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-slate-800">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer hover:text-indigo-700 transition"
          >
            <ArrowBackIosIcon />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b border-t py-3 border-slate-700 pl-4 hover:bg-slate-400  transition"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b py-3 border-slate-700 pl-4 hover:bg-slate-400 transition"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b py-3 border-slate-700 pl-4 hover:bg-slate-400 transition"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b py-3 border-slate-700 pl-4 hover:bg-slate-400 transition"
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
