import "./CartDropDown.style.scss";
import ButtonComponent from "../Button/Button.component";
import CartItemComponent from "./CartItem.component";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { useNavigate } from "react-router-dom";

const CartDropDownComponent = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const checkOutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItemComponent key={item.id} cartItem={item} />;
        })}
        <ButtonComponent type="button" onClick={checkOutHandler}>
          CHECKOUT
        </ButtonComponent>
      </div>
    </div>
  );
};

export default CartDropDownComponent;
