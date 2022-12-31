import { createContext, useEffect, useState } from "react";

/**
 * function check if item is already present in cartItems if not add otherwise update quantity
 * @param {Array} cartItems
 * @param {Object} itemToAdd
 */
const addCartItem = (cartItems, itemToAdd) => {
  const checkIfItemExistInCart = cartItems.find(
    (item) => item.id === itemToAdd.id
  );

  if (checkIfItemExistInCart) {
    return cartItems.map((item) => {
      return item.id === itemToAdd.id
        ? { ...item, quantity: item["quantity"] + 1 }
        : item;
    });
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const checkIfItemExistInCart = cartItems.find(
    (item) => item.id === itemToRemove.id
  );

  if (checkIfItemExistInCart)
    return cartItems.filter((item) => {
      return item.id !== itemToRemove.id;
    });
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalItems: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setTotalItems(totalItems + 1);
  };

  const remoteItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
    setTotalItems(totalItems - 1);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    totalItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
