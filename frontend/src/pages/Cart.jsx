// import React from 'react'

import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

useEffect(()=>{
  const tempData = [];
  for(const items in cartItems){
    for (const item in cartItems[items]){
      if(cartItems[items][item]>0){
        tempData.push({
          _id: items,
          size: item,
          quantity: cartItems[items][item]
        })
      }
    }
  }
  // console.log(tempData);
  setCartData(tempData);
},[cartItems])


  return (
    <div className="border-t">
      <div className="mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.map((item, index)=>{
            const productData = products.find((product)=>product._id === item._id);
            return (
              <div
                key={index}
                className=" py-4 border-t border-b grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image[0]}
                    className="w-16 sm:w-20"
                    alt=""
                  />

                  <p className="sm:text-lg text-xs font-medium">
                    {productData.name}
                  </p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Cart;
