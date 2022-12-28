import React from "react";
import styles from "./HelloS.module.css";
import { useSpring, animated } from "react-spring";

const Hello = () => {
	const fadeIn = useSpring({
		config: { mass: 5, tension: 2000, friction: 200 },
		opacity: 1,
		height: 80,
		from: { opacity: 0, height: 0 },
	});

	return (
		<div className={styles.Hello}>
			<div className={styles.Wrapper}>
				<animated.div style={fadeIn}>
					<div className={styles.Hey}>Hi there, I'm</div>
				</animated.div>
				<div className={styles.MyName}>Denis Kan</div>
				<div className={styles.Profession}>
					Web <br />
					developer
				</div>
				<div className={styles.NearFuture}>in the near future...</div>
				<div className={`${styles.Quote} ${styles.Animation}`}>
					Maybe not today, not tomorrow. <br />
					But someday I'll become a cool <br />
					Senior developer.
				</div>
			</div>
		</div>
	);
};

export default Hello;
