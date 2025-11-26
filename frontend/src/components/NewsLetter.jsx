import { useState } from "react";
import { toast } from "react-toastify";


const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    toast.success("Subscribed to newsletter successfully!");
    setEmail("");
  };
  return (
    <div className="text-center m-3">
      <p className="text-xl font-bold p-2">Subscribe now & get 20% off</p>
      <p className="text-slate-600 text-xs">
        Join our newsletter to get exclusive discounts, product updates, and special offers.
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 border flex items-center gap-3 mx-auto my-3 pl-3">
        <input
          className=" w-full sm:flex-1"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email"
        ></input>
        <button
          type="submit"
          className="bg-slate-900 text-white text-xs px-9 py-3"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsLetter