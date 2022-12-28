import React, { useState } from "react";
import styles from "./BurgerMenuS.module.css";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};
	return (
		<div className={styles.BurgerMenu}>
			<div
				className={isActive ? `${styles.WrapperOpen}` : `${styles.Wrapper}`}
				onClick={toggleClass}
			>
				<div className={styles.Burger}>
					<div
						className={isActive ? `${styles.TopBarOpen}` : `${styles.TopBar}`}
					></div>
					<div
						className={isActive ? `${styles.BarOpen}` : `${styles.Bar}`}
					></div>
					<div
						className={
							isActive ? `${styles.BottomBarOpen}` : `${styles.BottomBar}`
						}
					></div>
				</div>
			</div>

			<div
				className={
					isActive ? `${styles.BurgerListOpen}` : `${styles.BurgerList}`
				}
			>
				<ul>
					<li>
						<NavLink
							to="/Hello"
							className={styles.NavBarLink}
							onClick={toggleClass}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/About"
							className={styles.NavBarLink}
							onClick={toggleClass}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/Skills"
							className={styles.NavBarLink}
							onClick={toggleClass}
						>
							Skills
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/Contact"
							className={styles.NavBarLink}
							onClick={toggleClass}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default BurgerMenu;
