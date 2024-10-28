import pic1 from "../assets/pic1.jpg"

const Banner = () => {
  return (
    <div className="border border-slate-200 mt-3 flex flex-col sm:flex-row ">
      {/* left side */}
      <div className="items-center justify-center py-10 sm:py-0 w-full sm:w-1/2 bg-slate-200 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <p className="w-8 h-[2px] bg-slate-900 md:w-11"></p>
          <p>OUR BEST SELLER</p>
        </div>
        <h1 className="text-3xl">LATEST ARRIVALS</h1>
        <div className="flex items-center gap-2">
          <p>SHOP NOW</p>
          <p className="w-8 h-[2px] bg-slate-900 md:w-11"></p>
        </div>
      </div>
      {/* right side */}
      <img className="w-full sm:w-1/2 " src={pic1} alt="latest arrival" />
    </div>
  );
}

export default Banner