
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import image_4 from "./image_4.jpg";
import image4 from "./image4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import img9 from "./img9.jpg";
import img10 from "./img10.jpg";
import img11 from "./img11.jpg";
import img12 from "./img12.jpg";



export const products = [
  {
    _id: "001",
    name: "Women's T-shirt",
    description: "A lightweight, breathable cotton T-shirt for everyday wear.",
    price: 250,
    image: [img1],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1683103200, // April 2024
    bestseller: true,
  },
  {
    _id: "002",
    name: "Men's Polo Shirt",
    description: "A casual and stylish polo shirt made with soft fabric.",
    price: 300,
    image: [img2],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1690845600, // August 2024
    bestseller: false,
  },
  {
    _id: "003",
    name: "Kids Denim Jacket",
    description: "Trendy denim jacket for kids with a comfortable fit.",
    price: 400,
    image: [img3],
    category: "Kids",
    subCategory: "Outerwear",
    sizes: ["XS", "S", "M"],
    date: 1677816000, // March 2024
    bestseller: true,
  },
  {
    _id: "004",
    name: "Maxi Dress",
    description: "Elegant and flowy maxi dress, perfect for outings.",
    price: 550,
    image: [img4, image_4, image4],
    category: "Women",
    subCategory: "Dresses",
    sizes: ["M", "L", "XL"],
    date: 1679932800, // March 2024
    bestseller: true,
  },
  {
    _id: "005",
    name: "Hoodie",
    description: "Warm and cozy hoodie for chilly days.",
    price: 600,
    image: [img5],
    category: "Men",
    subCategory: "Outerwear",
    sizes: ["L", "XL", "XXL"],
    date: 1688268000, // July 2024
    bestseller: false,
  },
  {
    _id: "006",
    name: "Kids Graphic Tee",
    description: "Fun graphic T-shirt that kids will love.",
    price: 150,
    image: [img6],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M"],
    date: 1693447200, // August 2024
    bestseller: true,
  },
  {
    _id: "007",
    name: "Women's Cardigan",
    description: "Soft, knitted cardigan to keep you warm and stylish.",
    price: 500,
    image: [img7],
    category: "Women",
    subCategory: "Outerwear",
    sizes: ["S", "M", "L"],
    date: 1685690400, // June 2024
    bestseller: false,
  },
  {
    _id: "008",
    name: "Men's Joggers",
    description: "Comfortable joggers for daily activities or lounging.",
    price: 350,
    image: [img8],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1696024800, // September 2024
    bestseller: true,
  },
  {
    _id: "009",
    name: "Kids Shorts",
    description: "Soft and durable shorts perfect for playtime.",
    price: 180,
    image: [img9],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["XS", "S", "M"],
    date: 1683103200, // April 2024
    bestseller: false,
  },
  {
    _id: "010",
    name: "Skirt",
    description: "A stylish, high-waist skirt for a trendy look.",
    price: 220,
    image: [img10],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 1680424800, // March 2024
    bestseller: true,
  },
  {
    _id: "011",
    name: "Men's Formal Shirt",
    description: "Classic formal shirt suitable for office wear.",
    price: 450,
    image: [img11],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1688268000, // July 2024
    bestseller: false,
  },
  {
    _id: "012",
    name: "Kids Hoodie",
    description: "Cozy and soft hoodie to keep kids warm in winter.",
    price: 320,
    image: [img12],
    category: "Kids",
    subCategory: "Outerwear",
    sizes: ["XS", "S", "M"],
    date: 1690845600, // August 2024
    bestseller: true,
  },
];
