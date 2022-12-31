import React from "react";
import styles from "./GreetingsRS.module.css";
import profileImg from "../Images/profile-img.png";

function GreetingsR() {
	return (
		<div className={styles.GreetingsR}>
			<img
				src={profileImg}
				alt="profile pic"
				className={`${styles.profileImg} ${styles.Animation}`}
			/>
		</div>
	);
}

export default GreetingsR;
