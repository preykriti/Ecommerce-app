// import React from 'react'

import { useState } from "react"

const Login = () => {
  const [currentPage, setCurrentPage]= useState("SIGN UP");

  return (
    <form className="flex justify-center flex-col ">
      <div className="flex justify-center items-center">
        <p>{currentPage}</p>
        <hr className="h-[2px] bg-black w-8" />
      </div>
      <input placeholder="Name" className="border"></input>
      
    </form>
  );
}

export default Login