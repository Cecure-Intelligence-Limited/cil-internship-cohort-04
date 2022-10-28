import { Outlet } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import styles from "./layout.module.css";
import Navbar from "../navbar/Navbar";

const Layout = () => {
	return (
		<>
			<Navbar />

			<main>
				<Outlet />
			</main>

			<footer className={styles.footer}>
				<p className={styles.copy}>
					<AiOutlineCopyrightCircle /> 2022.
				</p>
				<p>'Yomi Oke</p>
			</footer>
		</>
	);
};

export default Layout;
