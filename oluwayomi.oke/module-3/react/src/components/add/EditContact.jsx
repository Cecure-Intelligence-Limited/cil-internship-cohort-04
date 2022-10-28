import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	useNavigate,
	useParams,
} from "react-router-dom";

import styles from "./contact.module.css";

const EditContact = () => {
	const { editId } = useParams();

	const navigate = useNavigate();

	const [values, setValues] = useState({
		fullname: "",
		email: "",
		phone: "",
	});

	const URL = "http://localhost:3500/contacts";

	useEffect(() => {
		const fetchContacts = async () => {
			try {
				const res = await axios.get(
					`${URL}/${editId}`
				);
				const data = res.data;

				setValues(data);
				// console.log(data)
			} catch (error) {
				console.log(error.stack);
			}
		};

		fetchContacts();
	}, [editId]);

	const onChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});

		// console.log(values)
	};

	const handleUpdate = async (e) => {
		e.preventDefault();

		await axios.put(`${URL}/${editId}`, {
			...values,
		});
		// const updatedContact = res.data;

		// console.log(updatedContact);
		navigate("/");
	};

	return (
		<form
			autoComplete="off"
			className={styles.formContainer}
			onSubmit={handleUpdate}>
			<p className={styles.formHeading}>
				Edit Contact
			</p>

			<div className={styles.formText}>
				<label htmlFor="fullname">Name</label>
				<input
					type="text"
					name="fullname"
					id="fullname"
					placeholder="Enter your name..."
					value={values.fullname}
					onChange={onChange}
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter your email..."
					value={values.email}
					onChange={onChange}
				/>

				<label htmlFor="phone">Phone</label>
				<input
					type="text"
					name="phone"
					id="phone"
					placeholder="Enter your phone..."
					value={values.phone}
					onChange={onChange}
				/>

				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default EditContact;
