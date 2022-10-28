/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { CONTACTS_LOADING, CONTACTS_LOAD_SUCCESS } from "../actionTypes";

const URL = "http://localhost:3500/contacts";

export default async (dispatch) => {
	dispatch({
		type: CONTACTS_LOADING,
	});

	try {
		const res = await axios.get(URL);
		const data = res.data;

		console.log(data);

		dispatch({
			type: CONTACTS_LOAD_SUCCESS,
			payload: data,
		});

		// setContacts(data.reverse());
	} catch (error) {
		console.log(error.stack);
	}
};
