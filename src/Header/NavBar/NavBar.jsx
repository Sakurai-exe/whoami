import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => (
	<div className={styles.NavBar}>
		<div className={styles.NavBarLink}>
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive ? styles.active : styles.notActive
				}
			>
				Home
			</NavLink>
		</div>

		<div className={styles.NavBarLink}>
			<NavLink
				to="/About"
				className={({ isActive }) =>
					isActive ? styles.active : styles.notActive
				}
			>
				About
			</NavLink>
		</div>
		<div className={styles.NavBarLink}>
			<NavLink
				to="/Skills"
				className={({ isActive }) =>
					isActive ? styles.active : styles.notActive
				}
			>
				Skills
			</NavLink>
		</div>
		<div className={styles.NavBarLink}>
			<NavLink
				to="/Contact"
				className={({ isActive }) =>
					isActive ? styles.active : styles.notActive
				}
			>
				Contact
			</NavLink>
		</div>
	</div>
);

export default NavBar;
