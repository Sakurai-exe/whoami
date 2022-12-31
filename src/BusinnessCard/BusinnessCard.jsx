import React from "react";
import styles from "./BusinnessCardS.module.css";

const BusinnessCard = () => (
	<div className={styles.BusinnessCard}>
		<div className={styles.cardСontainer}>
			<div className={styles.businesscardWrapper}>
				<div className={styles.front}>
					<h1>Denis Kan</h1>
					<hr />
					<span>WEB developer</span>
				</div>
				<div className={styles.back}>
					<h3>
						Telephone:
						<br />
						+7(985)-561-05-66
					</h3>
					<br />
					<h3>
						Email:
						<br />
						denblaze@mail.ru
					</h3>
					<br />
					<h3>
						Telegram:
						<br />
						@sakuraiexe
					</h3>
				</div>
			</div>
		</div>
	</div>
);

export default BusinnessCard;
