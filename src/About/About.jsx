import styles from "./About.module.css";
import Spaceman from "../Images/spaceman.png";
import React, { useEffect } from "react";

const About = () => {
	useEffect(() => {
		document.body.style.overflow = "hidden";
	}, []);
	return (
		<div className={styles.About}>
			<div className={styles.NamePage}>ABOUT</div>
			<div className={styles.Content}>
				I'm sure that I'll give all my life to web development. I Never looked
				for hidden reasons for this decision. I've enough desire and
				inspiration, and of course, perseverance.
				<br />
				If you've these three things, you will definitely reach a high level in
				any profession.
				<br />
				<br /> I think that I'll be able to find like-minded people.
				<br />
				<br />
				Hobby - Work <br />
				Work - Hobby
			</div>
			<div className={`${styles.SpaceMan} ${styles.bounce}`}>
				<img src={Spaceman} alt="spaceman" width="80%" />
			</div>
		</div>
	);
};

export default About;
