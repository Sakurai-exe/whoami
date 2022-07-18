import { NavLink } from "react-router-dom";
import NavBarS from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={NavBarS.NavBar}>
      <div className={NavBarS.NavBarLink}>
        <NavLink
<<<<<<< HEAD
          to="/Greetings/Hello"
=======
          to="/Hello"
>>>>>>> 27c4700 (adaptive for 1024 or ipad pro)
          className={({ isActive }) =>
            isActive ? NavBarS.active : NavBarS.notActive
          }
        >
          Home
        </NavLink>
      </div>

      <div className={NavBarS.NavBarLink}>
        <NavLink
<<<<<<< HEAD
          to="/Header/NavBar/About/About"
=======
          to="/About"
>>>>>>> 27c4700 (adaptive for 1024 or ipad pro)
          className={({ isActive }) =>
            isActive ? NavBarS.active : NavBarS.notActive
          }
        >
          About
        </NavLink>
      </div>
      <div className={NavBarS.NavBarLink}>
        <NavLink
<<<<<<< HEAD
          to="/Header/NavBar/Skills/Skills"
=======
          to="/Skills"
>>>>>>> 27c4700 (adaptive for 1024 or ipad pro)
          className={({ isActive }) =>
            isActive ? NavBarS.active : NavBarS.notActive
          }
        >
<<<<<<< HEAD
          skills
=======
          Skills
>>>>>>> 27c4700 (adaptive for 1024 or ipad pro)
        </NavLink>
      </div>
      <div className={NavBarS.NavBarLink}>
        <NavLink
<<<<<<< HEAD
          to="/Header/NavBar/Contact/Contact"
=======
          to="/Contact"
>>>>>>> 27c4700 (adaptive for 1024 or ipad pro)
          className={({ isActive }) =>
            isActive ? NavBarS.active : NavBarS.notActive
          }
        >
<<<<<<< HEAD
          contact
=======
          Contact
>>>>>>> 27c4700 (adaptive for 1024 or ipad pro)
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
