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
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const checkIfItemExistInCart = cartItems.find(
    (item) => item.id === itemToRemove.id
  );

  // check if only 1 item left then remove that item
  if (checkIfItemExistInCart === 1 && checkIfItemExistInCart.length > 0)
    return cartItems.filter((item) => {
      return item.id !== itemToRemove.id;
    });

  return cartItems.map((item) => {
    return item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};

const removeItemCheckout = (cartItems, itemToRemove) => {
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
  removeItemFromCart: () => {},
  totalPrice: 0,
  deleteItemOnCheckout: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setTotalItems(totalCartCount);
  }, [cartItems]);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setTotalItems(totalItems + 1);
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
    setTotalItems(totalItems - 1);
  };

  const deleteItemOnCheckout = (productToRemove) => {
    setCartItems(removeItemCheckout(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    totalItems,
    removeItemFromCart,
    totalPrice,
    deleteItemOnCheckout,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
