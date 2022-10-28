import { createContext, useReducer } from "react";
import contacts from "./contactReducer";
import contactsInitialState from "./contactsInitialState";

export const ContactListContext = createContext();

export const ContactListContextProvider = ({
	children,
}) => {
	const [
		contactsState,
		contactsDispatch,
	] = useReducer(contacts, contactsInitialState);

	return (
		<ContactListContext.Provider
			value={(contactsState, contactsDispatch)}>
			{children}
		</ContactListContext.Provider>
	);
};
