import React from "react";
import styles from "./App.module.scss";
import Header from "./Header/Header";
import Hello from "./Greetings/Hello";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import GreetingsR from "./GreetingsR/GreetingsR";
import { Route, Routes, Navigate } from "react-router-dom";

export const App = () => (
	<div className={styles.App}>
		<div className={styles.container}>
			<Header />
			<Routes>
				<Route path="/whoami" element={[<Hello />, <GreetingsR />]} />
				<Route path="/About" element={<About />} />
				<Route path="/Skills" element={<Skills />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
		</div>
	</div>
);
