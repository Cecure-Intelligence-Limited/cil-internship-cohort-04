import React from "react";
import styles from "./about.module.css";

const About = () => {
	return (
		<div className={styles.wrapper}>
			<h3>About Us</h3>
			<p>
				This is an app created to manage contacts. It
				could be seen and used as a backup for your
				contacts.
			</p>
			<i>...Version 1.0.0</i>
		</div>
	);
};

export default About;
