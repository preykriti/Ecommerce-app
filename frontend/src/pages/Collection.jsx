// import React from 'react'

import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(()=>{
    console.log(category)
  },[category])

  const toggelCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=> item !== e.target.value))
    }
    else{
      setCategory(prev=> [...prev, e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productsCopy = products.slice();
    if(category.length >0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    setFilterProducts(productsCopy)
  }

  useEffect(()=>{
    applyFilter()
,[category]  })

  return (
    <div className="flex flex-col sm:flex-row mt-10 mx-2 gap-1 sm:gap-10">
      {/* filters */}
      <div className="flex flex-col gap-4 sm:gap10 sm:w-1/4">
        
          <p onClick={() => setShowFilter(!showFilter)} className="text-xl flex items-center">
            FILTERS
            <ArrowForwardIosIcon
              sx={{
                display: { xs: "block", sm: "none" },
                transform: showFilter ? "rotate(90deg)" : "rotate(0deg)",
              }}
            />
          </p>
      

        {/* categories */}
        <div className={`border p-3 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="font-bold pb-2">CATEGORIES</p>
          <p className="">
            <input className="mr-2" type="checkbox" onChange={toggelCategory} value={"Men"} />
            Men
          </p>
          <p>
            <input className="mr-2" type="checkbox" onChange={toggelCategory} value={"Women"} />
            Women
          </p>
          <p>
            <input className="mr-2" type="checkbox" onChange={toggelCategory} value={"Kids"} />
            Kids
          </p>
        </div>
        {/* type */}
        <div className={`border p-3 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="font-bold pb-2">TYPE</p>
          <p className="">
            <input className="mr-2" type="checkbox" value={"Topwear"} />
            Topwear
          </p>
          <p>
            <input className="mr-2" type="checkbox" value={"Bottomwear"} />
            Bottomwear
          </p>
          <p>
            <input className="mr-2" type="checkbox" value={"Outerwear"} />
            Outerwear
          </p>
        </div>
      </div>

      {/* all collection */}
      <div className="flex-1 sm:w-3/4">
        <div className="flex text-xs justify-between items-center gap-5">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* sorting box */}
          <select className="border border-slate-400 h-8">
            <option value="Relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 ">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
