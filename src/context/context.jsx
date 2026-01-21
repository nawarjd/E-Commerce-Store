import { createContext, useEffect, useState } from "react";

// Create the context with a default value
export const StoreContext = createContext(null);

// Create a provider component
export const StoreProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [navHeight, setNavHeight] = useState(0);


  const addToCart = (id, title, image, price, discountPercentage, quantity) => {
    let newItem = {
      id: id,
      title: title,
      image: image,
      price: price,
      discountPercentage: discountPercentage,
      quantity: quantity,
    };
    setCartProduct((prev) => [...prev, newItem]);
    alert("Product added to cart!");
  };

    useEffect(() => {
    const nav = document.querySelector('nav');
    if (nav) {
      setNavHeight(nav.getBoundingClientRect().height);
    }
  }, []);

  // The value prop holds the data and functions to be shared
  const value = {
    addToCart,
    cartProduct,
    setCartProduct,
    quantity,
    setQuantity,
    navHeight,
    setNavHeight
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
