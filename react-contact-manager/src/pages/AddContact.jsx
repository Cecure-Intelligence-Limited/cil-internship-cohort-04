import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactsContext } from "../context/ContactsContext";
import PropTypes from "prop-types";

const AddContact = () => {
  AddContact.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    email: PropTypes.string,
    phone: PropTypes.string,
  };

  const { contactList, setContactList } = useContext(ContactsContext);
  const { lastContactID } = useContext(ContactsContext);
  let { loading, contacts, errorMessage } = contactList;

  // console.log(lastContactID);

  const [lastId, setLastId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  let history = useNavigate();

  let contactIDs = [];
  contacts.map((contact) => contactIDs.push(contact.id));

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contactIDs);
    // setLastId(contactIDs[contactIDs.length - 1]);
    let nextId = contactIDs[contactIDs.length - 1] + 1;

    console.log(nextId);

    let contactName = name;
    let contactEmail = email;
    let contactPhone = phone;

    if (contactName === "" || contactEmail === "" || contactPhone === "") {
      alert("Please complete contact details");
      return;
    }

    contacts.unshift({
      id: nextId,
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
    });

    contactIDs.push(nextId);

    history("/");
    // console.log(lastId);
    // if (!contactIDs.includes(nextId)) setLastId(nextId);
    // console.log(lastId);
  };

  return (
    <>
      <div className="container">
        <div
          className="card bg-light mb-3 me-auto ms-auto "
          style={{ maxWidth: "1140px" }}
        >
          <div className="card-header">
            <b>Add Contact</b>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-2">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  className="form-control form-control-lg mt-1"
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Enter your name..."
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control form-control-lg mt-1"
                  type="email"
                  placeholder="Enter your email..."
                  required
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="phone">Phone</label>
                <input
                  className="form-control form-control-lg mt-1"
                  type="text"
                  placeholder="Enter your phone..."
                  required
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <input
                type="submit"
                className="btn btn-block btn-dark w-100 mt-3"
                onClick={(e) => handleSubmit(e)}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContact;
