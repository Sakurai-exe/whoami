import styles from "./Skills.module.css";
import React from "react";

const Skills = () => (
	<div className={styles.Skills}>
		<div className={styles.NamePage}>SKILLS</div>
		<div className={`${styles.Frontend} ${styles.BlockStyles}`}>
			<h3>Frontend</h3>
			It's important to make a first impression. A comfortable and beautiful UI
			is what I love and want to do this all my life.
			<ul>
				<li>HTML & CSS</li>
				<li>JavaScript</li>
				<li>React & Redux</li>
				<li>Photoshop/Figma</li>
			</ul>
		</div>
		<div className={`${styles.Backend} ${styles.BlockStyles}`}>
			<h3>Backend</h3>
			Don't judge a book by its cover. Therefore, it is very important to have a
			fast, safe and functional backend.
			<ul>
				<li>Java (my first technology)</li>
				<li>SQL: MySQL/PostgreSQL</li>
				<li>Node.js (coming soon)</li>
			</ul>
		</div>
	</div>
);

export default Skills;
