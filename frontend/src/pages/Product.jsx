// import React from 'react'

import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const {productId} =useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");


  const fetchProductData = async()=>{
    products.map((item)=>{
      if(item._id===productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    }  
    )
  }

  useEffect(()=>{
    fetchProductData();
  },[productId]);

  return productData ? (
    <div className="border-t-1  transition-opacity ease-in duration-500 opacity-100 border-slate-300 mt-2 gap-4">
      {/* about product */}
      <div className="flex sm:flex-row flex-col gap-12">
        {/* product image */}
        <div className="flex sm:flex-row flex-col-reverse gap-4 flex-1">
          <div className="flex flex-row sm:flex-col sm:w-[15%] overflow-x-auto sm:overflow-y-scroll gap-2 w-full sm:justify-normal justify-center">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full cursor-pointer flex-shrink-0"
              />
            ))}
          </div>
          <div>
            <img
              className="w-full h-auto max-h-[80vh] object-contain"
              src={image}
              alt=""
            />
          </div>
        </div>

        {/* product names and description */}
        <div className="flex-1 ">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
          <div className="flex gap-1 mt-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon style={{ opacity: 0.5 }} />
            <p className="pl-2">(130)</p>
          </div>
          <p className="text-3xl mt-2">
            {currency} {productData.price}
          </p>

          <p className="text-slate-500 mt-2">{productData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-1 mb-4">
              {productData.sizes.map((item, index) => (
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-slate-300 ${item ===size ? 'border-pink-500': ''}`} key={index}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className="bg-black text-white py-3 px-6 text-xs active:bg-slate-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5"></hr>
          <div className="text-slate-500 flex flex-col gap-1 text-sm mt-5">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* product description and review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-2 text-sm">Description</b>
          <p className="border px-5 py-2 text-sm">Reviews(122)</p>
        </div>
       
        <div className="text-sm text-slate-500 flex flex-col gap-3 border px-5 py-5">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa tempora praesentium vitae qui perferendis excepturi distinctio fugiat cumque rerum quia reiciendis possimus quod esse cum necessitatibus, consequuntur quis magnam maiores! Omnis earum voluptates nam, excepturi architecto ipsum expedita saepe!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima ratione voluptas tenetur, maxime assumenda ipsa earum aperiam. Sequi, quibusdam porro quas voluptates earum facilis accusantium quasi, exercitationem et inventore alias minus tempora dolores esse.</p>
        </div>
      </div>

      {/* related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
