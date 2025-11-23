import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem.jsx";
import Title from "./Title";

const LatestCollection = () => {
  const [latestProduct, setLatestProduct] = useState([]);
  const { products } = useContext(ShopContext);
  //  console.log(products);
  useEffect(() => {
    setLatestProduct(products.slice(0, 9));
  }, [products]);

  return (
    <div>
      <div className="mb-5">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="text-center text-sm text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          corporis a! Ipsam.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-2">
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
