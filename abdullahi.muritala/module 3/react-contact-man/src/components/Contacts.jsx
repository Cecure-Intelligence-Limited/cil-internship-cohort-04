import React, { useContext } from 'react';
import { ContactContext } from '../App';
import Contact from './Contact';

const Contacts = () => {
  const { contactList } = useContext(ContactContext);
  return contactList.length
    ? contactList.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
        />
      ))
    : '';
};

export default Contacts;
