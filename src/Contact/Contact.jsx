import React, { useRef } from "react";
import styles from "./Contact.module.css";
import BusinnessCard from "../BusinnessCard/BusinnessCard";
import emailjs from "emailjs-com";
import tgLogo from "../Images/LogosPNG/tg.png";
import instLogo from "../Images/LogosPNG/inst.png";
import vkLogo from "../Images/LogosPNG/vk.png";
import gitLogo from "../Images/LogosPNG/github.png";

const Contact = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_8px4lda",
				"template_nrzg1zk",
				form.current,
				"iDRKEkSo8yILNw9Nb"
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
		e.target.reset();
		alert("Thank you!");
	};

	return (
		<div className={styles.Contact}>
			<div className={styles.Wrapper}>
				<h2>Contact me</h2>
				<p>
					If you have other request or question, don’t <br />
					hesitate to use the form.
				</p>
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" required placeholder="Name" name="name" />
					<input type="email" required placeholder="Email" name="email" />
					<input type="text" required placeholder="Subject" name="subject" />
					<textarea required placeholder="..." name="message" />
					<input className={styles.FormButton} type="submit" value="Send" />
				</form>
			</div>
			<div className={styles.MobileVisitCard}>
				<h1>Denis Kan</h1>
				<hr />
				<p>
					WEB developer
					<br />
					Phone: +7(985)-561-05-66
					<br />
					Email: denblaze@mail.ru
				</p>
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
			</div>
			<div className={styles.BusinnessCardWrap}>
				<BusinnessCard />
			</div>
		</div>
	);
};

export default Contact;
