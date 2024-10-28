

const NewsLetter = () => {
    const onSubmitHandler = (event) => {
      event.preventDefault();
    };
  return (
    <div className="text-center m-3">
      <p className="text-xl font-bold p-2">Subscribe now & get 20% off</p>
      <p className="text-slate-600 text-xs">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, a.
      </p>
      <form className="w-full sm:w-1/2 border flex items-center gap-3 mx-auto my-3 pl-3">
        <input
          className=" w-full sm:flex-1"
          type="email"
          placeholder="Enter your email"
        ></input>
        <button
          onSubmit={onSubmitHandler}
          type="submit"
          className="bg-black text-white text-xs px-9 py-3"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsLetter