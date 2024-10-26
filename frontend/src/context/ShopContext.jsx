import { createContext } from "react";
import { products } from "../assets/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    const currency = "Rs.";
    const delivery = 100;
    const value={
        products, currency, delivery
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>

    )
}
export default ShopContextProvider;