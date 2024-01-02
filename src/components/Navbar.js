import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  
  const [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <img
          src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=2000"
          className="logo-img"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
          <li>
            <Link to="/ordernow">Order</Link>
          </li>
          <li>Add to Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
