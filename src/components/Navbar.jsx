import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <NavLink to="/">
        <div>
          <img src="#" alt="logo" />
        </div>
      </NavLink>
      <div>
        <NavLink>
          <div>
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink>
          <div>
            <FaShoppingCart />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
