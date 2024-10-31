import { ShopContext } from "../context/ShopContext"
import { useContext, useEffect, useState } from "react"
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from "react-router-dom";

const Search = () => {
    const {search, setSearch, showSearch, setShowSearch}= useContext(ShopContext);
    const [visible, setVisible]=useState(false);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    },[location])

  return showSearch && setVisible ? (
    <div className="border-b text-center">
        <div className="border border-slate-500 inline-flex justify-center items-center px-5 py-1 w-1/2 sm:w-23 mx-3 my-5 rounded-full">
            <input value={search} placeholder="Search" onChange={(e)=>setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" />
            <SearchIcon/>
        </div>
        <CloseIcon className="cursor-pointer" onClick={()=>setShowSearch(false)}/>
    </div>
  ): null;
}

export default Search