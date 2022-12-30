import "./CartDropDown.style.scss";
import ButtonComponent from "../Button/Button.component";

const CartDropDownComponent = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <ButtonComponent>CHECKOUT</ButtonComponent>
      </div>
    </div>
  );
};

export default CartDropDownComponent;
