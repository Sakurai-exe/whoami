import React from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import ContactNav from "./ContactNav/ContactNav";
import HeaderS from "./Header.module.css";
import NavBar from "./NavBar/NavBar";

const Header = () => (
	<div className={HeaderS.Header}>
		<NavBar />
		<ContactNav />
		<BurgerMenu />
	</div>
);

export default Header;
