// import React from 'react'
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    // console.log(tempData);
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t">
      <div className="mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="border-t border-b grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex py-2 items-start gap-6">
                <img
                  src={productData.image[0]}
                  className="w-16 sm:w-20"
                  alt=""
                />
                <div>
                  <p className="sm:text-lg text-xs font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-3">
                    <p>
                      {currency} {productData.price}
                    </p>
                    <p className="border py-2 sm:px-3 sm:py-1  bg-slate-300">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="border sm:max-w-20 max-w-10 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              ></input>
              <DeleteOutlineOutlinedIcon
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="cursor-pointer"
              />
            </div>
          );
        })}
      </div>
      
      <div className="justify-end flex ">
        <div className="sm:w-[450px] w-full">
          <CartTotal />
          <div className="w-full text-end">
            <button className="bg-black text-white text-sm py-3 px-8 my-8">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
