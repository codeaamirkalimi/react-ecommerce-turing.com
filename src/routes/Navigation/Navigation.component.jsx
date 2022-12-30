import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "./../../assets/crown.svg";

import "./navigation.styles.scss";
import { UserContext } from "../../context/User.context";
import { signOutUser } from "../../utils/firebase.utils";
import CartIconComponent from "../../components/Cart/CartIcon.component";
import CartDropDownComponent from "../../components/Cart/CartDropDown.component";
import { CartContext } from "../../context/Cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            <div>SHOP</div>
          </Link>
          {currentUser ? (
            <span className="nav-links" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
          <CartIconComponent />
        </div>
        {isCartOpen && <CartDropDownComponent />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
