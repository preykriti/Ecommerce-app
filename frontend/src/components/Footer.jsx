const Footer = () => {
  return (
    <div className="mx-3">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] mt-40 my-10 gap-14">
        <div className="">
          <p className="font-bold  text-2xl text-slate-700 mb-4">SHOPPY</p>
          <p className="text-xs w-full md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            maiores tempore alias similique. Molestiae error debitis ea illo
            tempora nesciunt dolores quidem? Adipisci natus molestias commodi
            pariatur totam enim! At dolor tenetur, error rerum dicta eum
            possimus, perspiciatis odio enim aut iste, cupiditate magni adipisci
            facere itaque sapiente. Doloremque, inventore.
          </p>
        </div>

        <div>
          <p className="text-slate-700 font-bold mb-4">COMPANY</p>
          <ul className="text-xs text-slate-700 flex flex-col gap-1">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-slate-700 font-bold mb-4">GET IN TOUCH</p>
          <ul className="text-xs text-slate-700 flex flex-col gap-1">
            <li>+01-5200001</li>
            <li>contact@shoppy.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr/>
        <p className="text-center text-xs py-2">Copyright 2024@ shoppy.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
