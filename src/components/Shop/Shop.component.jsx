import { useContext } from "react";
import { ProductContext } from "../../context/Product.context";
import ProductCardComponent from "../ProductCard/ProductCard.component";
import "./Shop.style.scss";

const ShopComponent = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCardComponent key={product.id} product={product} />;
      })}
    </div>
  );
};
export default ShopComponent;
