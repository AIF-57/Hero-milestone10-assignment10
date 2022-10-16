import { useEffect, useState } from "react"
import { loadCartDb } from "./useCartDB";

const useCart = services => {
    const [cartItems,setCartItems] = useState([]);
    useEffect(() => {
        const loadDB = loadCartDb()
        const savedItems = [];
        for(const id in loadDB){
            const savedItem = services.find(service => service.id === id);
            if(savedItem){
                savedItems.push(savedItem);
            };
        };
        setCartItems(savedItems)
    },[services]);
    return{
        cartItems,
        setCartItems
    }
    
};
export default useCart;