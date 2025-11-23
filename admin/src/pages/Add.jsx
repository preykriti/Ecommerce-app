import React, { useState } from "react";
import { assets } from "../assets/assets";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({token}) => {
  const [images, setImages] = useState([null, null, null, null]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  const onSubmit = async (e) => {
    console.log("Submitting form");
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestseller", bestseller);

      images.forEach((img, index)=>{
        if(img){
          formData.append(`image${index+1}`, img);
        }
      });
      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}});
      
      if(response.data.success){
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setCategory("");
        setSubCategory("");
        setPrice("");
        setSizes([]);
        setImages([null, null, null, null]);
        setBestseller(false);
      }else{
        toast.error(response.data.message);
      }

    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full items-start">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2 md:gap-4">
          {images.map((img, index) => (
            <label key={index} htmlFor={`image${index}`}>
              <img
                className="w-30 border border-dashed border-gray-400 hover:cursor-pointer"
                src={!img ? assets.upload_img : URL.createObjectURL(img)}
                alt="Upload"
              />
              <input
                onChange={(e) => handleImageChange(e, index)}
                type="file"
                id={`image${index}`}
                hidden
                accept="image/*"
              />
            </label>
          ))}
        </div>
      </div>

      {/* product input fields */}
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className=" w-full max-w-[500px] rounded-md px-3 py-2 "
          placeholder="Enter product name"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          className=" w-full max-w-[500px] rounded-md px-3 py-2 "
          placeholder="Enter product description"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2"
          >
            <option value="">Select category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product sub category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full px-3 py-2"
          >
            <option value="">Select category</option>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
            <option value="Summerwear">Summerwear</option>
            <option value="Footwear">Footwear</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className=" w-full sm:w-[120px] px-3 py-2 "
            type="number"
            placeholder="Enter product price"
            required
          />
        </div>
      </div>
      <div>
        <p>Product Sizes</p>
        <div className="flex gap-3 mt-2">
          {["XS","S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
            >
              <p
                className={`px-3 py-1 cursor-pointer ${
                  sizes.includes(size)
                    ? "bg-slate-500 text-white"
                    : "bg-slate-200"
                }`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          id="bestseller"
          name="bestseller"
          value="bestseller"
          checked={bestseller}
          onChange={(e) => setBestseller(e.target.checked)}
        />
        <label className="ml-2" htmlFor="bestseller">Mark as Bestseller</label>
      </div>

      <button
        type="submit"
        className="bg-slate-900 text-white px-5 py-2 rounded-md"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
