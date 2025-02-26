import { createContext, useState, useEffect } from "react";
import { shoe_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url ="http://localhost:4000";
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // ✅ Handles undefined case
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId] || prev[itemId] <= 1) {
        const updatedCart = { ...prev };
        delete updatedCart[itemId]; 
        return updatedCart;
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

    const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
  let itemInfo = shoe_list.find((product)=>product._id === item);
      totalAmount += itemInfo.price * cartItems[item];
      }
    
    }
    return totalAmount;
    }

  const contextValue = {
    shoe_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
