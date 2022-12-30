import { createContext, useState } from "react";

import PRODUCTS from "./../data/shop-data.json";

export const ProductContext = createContext({ products: [] });

export const ProductProvider = ({ children }) => {
  // manage state
  const [products, setProducts] = useState(PRODUCTS);
  // pass value
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
