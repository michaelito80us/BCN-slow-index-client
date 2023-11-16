import logo1 from "../assets/images/logo-1.png"
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="navbar bg-secondary">
      <NavLink to="/">
        <img className="h-10 rounded-l m-2" src={logo1} alt="logo" />
      </NavLink>

    </div>
  )
}

export default Nav