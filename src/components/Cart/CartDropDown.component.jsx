import "./CartDropDown.style.scss";
import ButtonComponent from "../Button/Button.component";
import CartItemComponent from "./CartItem.component";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

const CartDropDownComponent = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItemComponent key={item.id} cartItem={item} />;
        })}
        <ButtonComponent>CHECKOUT</ButtonComponent>
      </div>
    </div>
  );
};

export default CartDropDownComponent;
