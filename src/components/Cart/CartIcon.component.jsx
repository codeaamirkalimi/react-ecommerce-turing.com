import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import "./CartIcon.style.scss";
import { CartContext } from "../../context/Cart.context";
import { useContext } from "react";

const CartIconComponent = () => {
  const { isCartOpen, setIsCartOpen, totalItems } = useContext(CartContext);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container">
      <ShoppingIcon onClick={toggleCartOpen} className="shopping-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIconComponent;
