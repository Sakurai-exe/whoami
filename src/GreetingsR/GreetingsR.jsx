import React from "react";
import GreetingsRS from "./GreetingsRS.module.css";
import profileImg from "../Images/profile-img.png";

function GreetingsR() {
	return (
		<div className={GreetingsRS.GreetingsR}>
			<img
				src={profileImg}
				alt="profile pic"
				className={`${GreetingsRS.profileImg} ${GreetingsRS.Animation}`}
			/>
		</div>
	);
}

export default GreetingsR;
