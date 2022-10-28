import styles from "./home.module.css";
import ContactCard from "./ContactCard";

const Home = () => {
	return (
		<div className={styles.homeWrapper}>
			<div className={styles.infoContainer}>
				<h4>Contact Manager</h4>
				<p className={styles.info}>
					This is a portfolio project to showcase
					knowledge of:
				</p>

				<ol className={styles.infoList}>
					<li>React Components and JSX.</li>
					<li>React Router.</li>
					<li>Component state management.</li>
					<li>
						Context api for global state management.
					</li>
					<li>
						Making asynchronous calls to the Json
						placeholder fake rest api using
						"async/await"
					</li>
				</ol>
			</div>

			<ContactCard />
		</div>
	);
};

export default Home;
