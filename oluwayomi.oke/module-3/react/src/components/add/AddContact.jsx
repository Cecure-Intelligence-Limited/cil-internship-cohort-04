import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

const AddContact = () => {
	const navigate = useNavigate();

	const URL = "http://localhost:3500/contacts";

	const [values, setValues] = useState({
		fullname: "",
		email: "",
		phone: "",
	});

	const onChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const uid = uuid();
	const smallid = uid.slice(0, 8);

	const handlesubmit = async (e) => {
		e.preventDefault();

		const request = {
			id: smallid,
			...values,
		};
		const res = await axios.post(URL, request);
		const contact = res.data;

		setValues(contact);
		// console.log(contact)

		navigate("/");
	};

	return (
		<Contact
			onSubmit={handlesubmit}
			value={values.name}
			onChange={onChange}
			title="Add Contact"
		/>
	);
};

export default AddContact;
