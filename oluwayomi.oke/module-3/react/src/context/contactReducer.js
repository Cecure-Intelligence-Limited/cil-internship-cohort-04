import {
	CONTACTS_LOADING,
	CONTACTS_LOAD_SUCCESS,
} from "../actionTypes";

const contacts = (state, { payload, type }) => {
	switch (type) {
		case CONTACTS_LOADING: {
			return {
				...state,
				contacts: {
					...state.contacts,
				},
			};
		}
		case CONTACTS_LOAD_SUCCESS: {
			return {
				...state,
				contacts: {
					...state.contacts,
					data: payload,
				},
			};
		}
		default:
			return state;
	}
};

export default contacts;
