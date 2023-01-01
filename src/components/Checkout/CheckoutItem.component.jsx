import "./CheckoutItem.style.scss";
import {useContext} from "react";
import {CartContext} from "../../context/Cart.context";

const CheckoutItemComponent = (props) => {
    const {cartItem} = props;
    const {name, imageUrl, price, quantity} = cartItem;
    const {addItemToCart, remoteItemFromCart} = useContext(CartContext);
    const increaseItem = (cartItem) => {
        console.log({cartItem});
        addItemToCart(cartItem);
    };
    const decreaseItem = (cartItem) => remoteItemFromCart(cartItem);

    return (
        <div className="checkout-item-container"}>
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
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
            <div className="remove-button">&#10005;</div>
        </div>
    );
};

export default CheckoutItemComponent;
