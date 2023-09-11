import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <NavLink to="/">
        <div>
          <img src={logo} alt="logo" />
        </div>
      </NavLink>
      <div>
        <NavLink to="/">
          <div>
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink to="/cart">
          <div>
            <FaShoppingCart />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
