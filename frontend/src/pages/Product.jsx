// import React from 'react'

import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const Product = () => {
  const {productId} =useParams();
  const {products} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");


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
    <div className="flex flex-row border-t-1 border border-slate-300 mt-2 gap-4">
      {/* about product */}
      <div className="flex sm:flex-col flex-row justify-between gap-4">
        {/* product image */}
        <div className="flex sm:flex-row flex-col-reverse">
          <div className="">
           { productData.image.map((item,index)=>{
              <img src={item} key={index}/>
           })}
          </div>
          <div>
            <img className="w-full h-auto max-h-[80vh] object-contain" src={image} alt="" />
          </div>
        </div>

        {/* product names and description */}
        <div></div>
      </div>

      {/* product description and review */}
      <div></div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
