import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "./../../assets/crown.svg";

import "./navigation.styles.scss";
import { UserContext } from "../../context/User.context";
import { signOutUser } from "../../utils/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  // setCurrentUser(null);
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
            <span className="nav-links" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              <div>SIGN IN</div>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
