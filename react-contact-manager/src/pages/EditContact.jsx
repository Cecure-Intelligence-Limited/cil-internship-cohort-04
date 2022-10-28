import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactsContext } from "../context/ContactsContext";

const EditContact = () => {
  const { contactList, setContactList } = useContext(ContactsContext);
  let { loading, contacts, errorMessage } = contactList;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState(null);

  let history = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem("Name"));
    setEmail(localStorage.getItem("Email"));
    setPhone(localStorage.getItem("Phone"));
  }, []);
  console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let index = id - 1;

    let currentContact = contacts[index];

    console.log(currentContact);
    currentContact.name = name;
    currentContact.email = email;
    currentContact.phone = phone;

    history("/");
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
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className="form-control form-control-lg mt-1"
                  type="text"
                  placeholder="Enter your name..."
                  required
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="invalid-feedback">Name is required..</div>
              </div>
              <div className="form-group mt-2">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control form-control-lg mt-1"
                  type="email"
                  placeholder="Enter your email..."
                  required
                  value={email}
                  name="email"
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
                  value={phone}
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Update"
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

export default EditContact;
