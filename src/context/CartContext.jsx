import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const exists = cart.find((item) => item.name === pizza.name);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.name === pizza.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, quantity: 1, id: Date.now() }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .filter((item) => !(item.id === id && item.quantity === 1))
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
    );
  };

  const removePizza = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removePizza,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
