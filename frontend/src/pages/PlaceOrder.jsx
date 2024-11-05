//import React from 'react'

import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext";


const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {navigate} = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between">
      {/* left side */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px] my-10">
        <div className="text-xl sm:text-2xl ">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-slate-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-slate-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-slate-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Enter your email"
        />
        <input
          className="border border-slate-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-slate-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-slate-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-slate-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-slate-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-slate-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* right side */}
      <div className="mt-8 ">
        <div className=" min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* payment method selection */}
          <div className="flex gap-3 flex-col lg:flex-row mt-3">
            <div onClick={()=>setMethod("esewa")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "esewa"? "bg-green-400": ""}`}></p>
              <img className="h-4 mx-4" src={assets.esewa_logo} alt="" />
            </div>
            <div onClick={()=>setMethod("khalti")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "khalti"? "bg-green-400": ""}`}></p>
              <img className="h-4 mx-4" src={assets.khalti_logo} alt="" />
            </div>
            <div onClick={()=>setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod"? "bg-green-400": ""}`}></p>
              <p className="text-sm font-medium text-slate-500"> CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate("/orders")} className="bg-black text-white px-12 py-2">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder