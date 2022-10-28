import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { SlNote } from "react-icons/sl";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

const ContactCard = () => {
	const URL = "http://localhost:3500/contacts";

	const [contacts, setContacts] = useState([]);
	const [isActive, setIsActive] = useState(false);

	const fetchContacts = async () => {
		try {
			const res = await axios.get(URL);
			const data = res.data;

			// console.log(data)
			setContacts(data.reverse());
		} catch (error) {
			console.log(error.stack);
		}
	};

	useEffect(() => {
		fetchContacts();
	}, []);

	const handleDropdown = (id) => {
		console.log(id)
		
		setIsActive(!isActive);
	};

	const handleDelete = async (id) => {
		await axios.delete(`${URL}/${id}`);
		// .then();

		fetchContacts();
	};

	return (
		<ul className={styles.namesContainer}>
			{contacts.map(
				({ fullname, email, phone, id }) => (
					<li key={id}>
						<div className={styles.carousel}>
							<div className={styles.nameDiv}>
								<p className={styles.name}>
									{fullname}
								</p>
								<HiOutlineChevronDoubleDown
									className={styles.iconRed}
									onClick={() => handleDropdown(id)}
								/>
							</div>

							<div className={styles.nameDiv}>
								<Link to={`edit/${id}`}>
									<SlNote
										className={styles.iconNote}
									/>
								</Link>

								<p
									className={styles.iconRed}
									onClick={() => handleDelete(id)}>
									X
								</p>
							</div>
						</div>

						{isActive && (
							<div className={styles.extraInfo}>
								<p>
									<span>Email:</span> {email}
								</p>
								<p>
									<span>Phone:</span> {phone}
								</p>
							</div>
						)}
					</li>
				)
			)}
		</ul>
	);
};

export default ContactCard;
