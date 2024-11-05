
const Title = ({text1, text2}) => {
  return (
      <div className="gap-2 flex items-center  ">
        <h1 className="text-slate-900" >{text1} <span className="font-medium text-slate-500">{text2}</span></h1>
        <p className="border-none bg-slate-950 h-[2px] w-8 sm:w-11"></p>
      </div>

  );
}

export default Title