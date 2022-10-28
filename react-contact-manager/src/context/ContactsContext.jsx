import React, { createContext, useContext } from "react";

export const ContactsContext = createContext(null);

// export function useContacts() {
//   return useContext(ContactsContext);
// }

// export function ContactsProvider({ children }) {
//   return (
//     <ContactsContext.Provider value={{}}>{children}</ContactsContext.Provider>
//   );
// }
