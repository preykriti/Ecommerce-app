const Title = ({ text1, text2 }) => {
  return (
    <h1 className="text-3xl font-bold tracking-wide text-slate-900">
      {text1}{" "}
      <span className="text-indigo-700 font-medium tracking-tight">
        {text2}
      </span>
    </h1>
  );
};

export default Title;
