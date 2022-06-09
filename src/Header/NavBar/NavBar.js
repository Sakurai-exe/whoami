import { NavLink } from "react-router-dom";
import NavBarS from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={NavBarS.NavBar}>
      <div className={NavBarS.NavBarLink}>
        <NavLink
          to="/Greetings/Greetings"
          className={({ isActive }) =>
            isActive ? NavBarS.active : NavBarS.notActive
          }
        >
          Home
        </NavLink>
      </div>

      <div className={NavBarS.NavBarLink}>
        <NavLink
          to="/Header/NavBar/About/About"
          className={({ isActive }) =>
            isActive ? NavBarS.active : NavBarS.notActive
          }
        >
          about
        </NavLink>
      </div>
      <div className={NavBarS.NavBarLink}>
        <NavLink
          to="/Header/NavBar/Skills/Skills"
          className={({ isActive }) =>
            isActive ? NavBarS.active : NavBarS.notActive
          }
        >
          skills
        </NavLink>
      </div>
      <div className={NavBarS.NavBarLink}>
        <NavLink
          to="/Header/NavBar/Contact/Contact"
          className={({ isActive }) =>
            isActive ? NavBarS.active : NavBarS.notActive
          }
        >
          contact
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
