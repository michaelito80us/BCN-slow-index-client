import logo1 from "../assets/logo-1.png"
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="navbar bg-accent">
      <NavLink to="/">
        <img className="h-10 m-2 rounded-l" src={logo1} alt="logo" />
      </NavLink>

    </div>
  )
}

export default Nav
