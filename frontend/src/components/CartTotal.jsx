// import React from 'react'

import { ShopContext } from "../context/ShopContext"
import { useContext } from "react"
import Title from "./Title"

const CartTotal = () => {
    const {currency, delivery, getCartAmount}= useContext(ShopContext)
  return (
    <div>
      <div className="text-2xl mt-3">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 text-sm mt-2">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr></hr>
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery}.00</p>
        </div>
        <hr></hr>

        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount()+delivery}.00
          </b>
        </div>
      </div>
    </div>
  );
}

export default CartTotal