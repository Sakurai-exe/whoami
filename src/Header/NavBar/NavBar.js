import { NavLink } from "react-router-dom";
import NavBarS from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={NavBarS.NavBar}>
      <div className={NavBarS.NavBarLink}>
        <NavLink
          to="/Hello"
          className={({ isActive }) =>
            isActive ? NavBarS.active : NavBarS.notActive
          }
        >
          Home
        </NavLink>
      </div>

      <div className={NavBarS.NavBarLink}>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? NavBarS.active : NavBarS.notActive
          }
        >
          About
        </NavLink>
      </div>
      <div className={NavBarS.NavBarLink}>
        <NavLink
          to="/Skills"
          className={({ isActive }) =>
            isActive ? NavBarS.active : NavBarS.notActive
          }
        >
          Skills
        </NavLink>
      </div>
      <div className={NavBarS.NavBarLink}>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? NavBarS.active : NavBarS.notActive
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
