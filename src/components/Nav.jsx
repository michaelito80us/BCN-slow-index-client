import logo1 from "../assets/logo-1.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-accent">
      <NavLink to="/">
        <img className="m-2 h-10 rounded-l" src={logo1} alt="logo" />
        <div className="text-xl text-secondary">Barcelona Slow Index</div>
      </NavLink>
    </div>
  );
};

export default Nav;
