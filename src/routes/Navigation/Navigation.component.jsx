import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div>Logo</div>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            <div>Shop</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
