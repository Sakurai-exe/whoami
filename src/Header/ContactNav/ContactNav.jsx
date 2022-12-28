import React from "react";
import styles from "./ContactNav.module.css";
import tgLogo from "../../Images/LogosSVG/tg.svg";
import instLogo from "../../Images/LogosSVG/inst.svg";
import vkLogo from "../../Images/LogosSVG/vk.svg";
import gitLogo from "../../Images/LogosSVG/github.svg";

const ContactNav = () => (
	<div className={styles.ContactNav}>
		<div className={styles.logo}>
			<a
				href="https://t.me/sakuraiexe"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img src={tgLogo} alt="Telegram" />
			</a>
		</div>
		<div className={styles.logo}>
			<a
				href="https://www.instagram.com/sakuraiexe/"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img
					src={instLogo}
					alt="Instagram"
					title="Instagram признан на территории РФ экстремистским и запрещен."
				/>
			</a>
		</div>
		<div className={styles.logo}>
			<a
				href="https://vk.com/id729849257"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img src={vkLogo} alt="VK" />
			</a>
		</div>
		<div className={styles.logo}>
			<a
				href="https://github.com/Sakurai-exe"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img src={gitLogo} alt="Github" />
			</a>
		</div>
	</div>
);

export default ContactNav;
