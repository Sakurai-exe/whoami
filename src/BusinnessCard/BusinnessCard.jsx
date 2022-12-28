import React from "react";
import styles from "./BusinnessCardS.module.css";

const BusinnessCard = () => (
	<div className={styles.BusinnessCard}>
		<div className={styles.cardСontainer}>
			<div className={styles.businesscardWrapper}>
				<div className={styles.front}>
					<h1>Denis Kan</h1>
					<hr />
					<p>WEB developer</p>
				</div>
				<div className={styles.back}>
					<p>
						Telephone:
						<br />
						+7(985)-561-05-66
					</p>
					<p>
						Email:
						<br />
						denblaze@mail.ru
					</p>
					<p>
						Telegram:
						<br />
						@sakuraiexe
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default BusinnessCard;
