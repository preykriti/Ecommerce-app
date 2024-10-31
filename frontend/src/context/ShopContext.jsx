import { createContext, useState } from "react";
import { products } from "../assets/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    const currency = "Rs.";
    const delivery = 100;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const value={
        products, currency, delivery, search, setSearch, showSearch, setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>

    )
}
export default ShopContextProvider;