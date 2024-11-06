// import React from 'react'

import { useState } from "react";

const Login = () => {
  const [currentPage, setCurrentPage] = useState("SIGN UP");

  return (
    <form className="flex items-center flex-col gap-2 mt-16 w-[80%] sm:w-[30%] m-auto">
      <div className="flex items-center gap-2 mb-3">
        <p className="text-3xl font-bold text-slate-400">{currentPage}</p>
        <hr className="h-[2px] bg-slate-400 w-10" />
      </div>
      {currentPage === "LOGIN" ? (
        ""
      ) : (
        <input
          placeholder="Name"
          type="text"
          className="border border-slate-800 w-full px-3 py-1.5"
        ></input>
      )}
      <input
        placeholder="Email"
        type="email"
        className="border border-slate-800 w-full px-3 py-1.5"
      ></input>
      <input
        placeholder="Password"
        type="password"
        className="border border-slate-800 w-full px-3 py-1.5"
      ></input>
      <div className="flex w-full justify-between text-xs text-slate-600">
        <p className="">Forgot your password?</p>
        {
          currentPage === "SIGN UP" ? (
            <p
              onClick={() => setCurrentPage("LOGIN")}
              className="cursor-pointer"
            >
              Login Here
            </p>
          ) : (
            <p
              onClick={() => setCurrentPage("SIGN UP")}
              className="cursor-pointer"
            >
              Create an account
            </p>
          )
        }
      </div>
       <button>{currentPage==="SIGN UP"? "SIGN UP" :"SIGN IN"}</button>
      

    </form>
  );
};

export default Login;
