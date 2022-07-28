import React, { useState } from "react";
import BurgerMenuS from "./BurgerMenuS.module.css";
import { NavLink } from "react-router-dom";

function BurgerMenu() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className={BurgerMenuS.BurgerMenu}>
      <div
        className={
          isActive ? `${BurgerMenuS.WrapperOpen}` : `${BurgerMenuS.Wrapper}`
        }
        onClick={toggleClass}
      >
        <div className={BurgerMenuS.Burger}>
          <div
            className={
              isActive ? `${BurgerMenuS.TopBarOpen}` : `${BurgerMenuS.TopBar}`
            }
          ></div>
          <div
            className={
              isActive ? `${BurgerMenuS.BarOpen}` : `${BurgerMenuS.Bar}`
            }
          ></div>
          <div
            className={
              isActive
                ? `${BurgerMenuS.BottomBarOpen}`
                : `${BurgerMenuS.BottomBar}`
            }
          ></div>
        </div>
      </div>

      <div
        className={
          isActive
            ? `${BurgerMenuS.BurgerListOpen}`
            : `${BurgerMenuS.BurgerList}`
        }
      >
        <ul>
          <li>
            <NavLink
              to="/Hello"
              className={BurgerMenuS.NavBarLink}
              onClick={toggleClass}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={BurgerMenuS.NavBarLink}
              onClick={toggleClass}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Skills"
              className={BurgerMenuS.NavBarLink}
              onClick={toggleClass}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={BurgerMenuS.NavBarLink}
              onClick={toggleClass}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
