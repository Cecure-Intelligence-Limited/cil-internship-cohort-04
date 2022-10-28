import React, { useContext, useEffect, useState } from "react";
import Contact from "./Contact";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPenToSquare,
//   faAngleDoubleDown,
//   faXmark,
// } from "@fortawesome/free-solid-svg-icons";
import { ContactsContext } from "../context/ContactsContext";
import { Link, useNavigate } from "react-router-dom";

const ContactList = () => {
  const { contactList, setContactList } = useContext(ContactsContext);
  let { loading, contacts, errorMessage } = contactList;

  let history = useNavigate();

  const handleDelete = (id) => {
    let index = contacts
      .map((e) => {
        return e.id;
      })
      .indexOf(id);

    contacts.splice(index, 1);

    history("/");
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        contacts.map((contact, index) => (
          <Contact
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
          />
        ))
      )}
    </>
  );
};

export default ContactList;
