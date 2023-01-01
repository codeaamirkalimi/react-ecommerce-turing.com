import "./CheckoutItem.style.scss";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

const CheckoutItemComponent = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemOnCheckout } =
    useContext(CartContext);
  const increaseItem = () => addItemToCart(cartItem);
  const decreaseItem = () => removeItemFromCart(cartItem);
  const deleteItem = () => deleteItemOnCheckout(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItem}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={increaseItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItemComponent;
