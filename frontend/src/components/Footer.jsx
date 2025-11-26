import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mx-3 mt-24">
      <hr></hr>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]  my-10 gap-14">
        <div className="">
          <p className="font-bold  text-2xl text-slate-700 mb-4">SHOPPY</p>
          <p className="text-xs w-full md:w-2/3">
            Shoppy is your friendly neighborhood online store, offering stylish
            fashion, quality accessories, and everyday essentials at prices
            everyone can afford. Our goal is to make online shopping simple,
            reliable, and enjoyable for every customer. We focus on delivering
            products that combine value and quality, while keeping the shopping
            experience smooth and hassle-free. Shoppy brings a curated
            collection straight to your fingertips.
          </p>
        </div>

        <div>
          <p className="text-slate-700 font-bold mb-4">COMPANY</p>
          <ul className="text-xs text-slate-700 flex flex-col gap-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>FAQ</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-slate-700 font-bold mb-4">GET IN TOUCH</p>
          <ul className="text-xs text-slate-700 flex flex-col gap-1">
            <li>+01-5000000</li>
            <li>contact@shoppy.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="text-center text-xs py-3">
           © {currentYear} shoppy.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
