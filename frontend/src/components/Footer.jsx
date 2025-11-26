import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-24 bg-slate-900 text-white">
      <div className="mx-6 py-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
          <div>
            <p className="font-bold text-2xl mb-4">SHOPPY<span className="font-extralight">-corner</span></p>
            <p className="text-sm text-slate-300 w-full md:w-2/3 leading-relaxed">
              Shoppy corner is your friendly neighborhood online store, offering
              stylish fashion, quality accessories, and everyday essentials at
              prices everyone can afford. Our goal is to make online shopping
              simple, reliable, and enjoyable for every customer. We focus on
              delivering products that combine value and quality, while keeping
              the shopping experience smooth and hassle-free. Shoppy brings a
              curated collection straight to your fingertips.
            </p>
          </div>

          <div>
            <p className="font-bold mb-4">COMPANY</p>
            <ul className="text-sm text-slate-300 flex flex-col gap-2">
              <li className="hover:text-indigo-500 transition cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-indigo-500 transition cursor-pointer">
                <Link to="/about">About Us</Link>
              </li>
              <li>FAQ</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-4">GET IN TOUCH</p>
            <ul className="text-sm text-slate-300 flex flex-col gap-2">
              <li className="hover:text-indigo-500 transition cursor-pointer">
                +01-5000000
              </li>
              <li className="hover:text-indigo-500 transition cursor-pointer">
                contact@shoppy.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <p className="text-center text-xs text-slate-400 py-4">
          © {currentYear} shoppy.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
