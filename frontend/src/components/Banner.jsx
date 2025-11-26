import { Link } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";

const Banner = () => {
  return (
    <div className="mt-6 relative h-96 sm:h-[500px] rounded-lg overflow-hidden">
      <img
        src={pic1}
        alt="latest arrival"
        className="w-full h-full object-cover"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent"></div>

      {/*left side content */}
      <div className="absolute inset-0 flex items-center px-8 sm:px-16">
        <div className="max-w-lg">
          <div className="inline-block bg-indigo-700 text-white px-3 py-1 rounded text-xs tracking-widest mb-4">
            NEW COLLECTION
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-wide text-white leading-tight mb-4">
            SUMMER
            <br />
            <span className="text-indigo-500 font-light">ESSENTIALS</span>
          </h1>
          <p className="text-slate-200 mb-6 text-lg">
            Fresh styles for the season ahead
          </p>
          <Link
            to="/collection"
            className="inline-block bg-white text-slate-900 px-8 py-3 rounded-md font-medium tracking-wide hover:bg-slate-100 transition"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
