import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faAngleDoubleDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Contact = ({ index, contact, handleDelete }) => {
  Contact.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    email: PropTypes.string,
    phone: PropTypes.string,
  };

  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleEdit = (id, name, email, phone) => {
    localStorage.setItem("Id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);
  };

  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "800px", marginTop: "20px" }}
      >
        <div className="card card-body mb-1 p-4">
          <h4
            style={{
              fontSize: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              {contact.name}
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                fixedWidth
                size="xs"
                color="red"
                cursor="pointer"
                onClick={handleDetails}
              />
            </div>
            <small
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a className="nav-link float-right" href="/contact/edit/1">
                <Link to={`/contact/edit/${contact.id}`}>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={(e) =>
                      handleEdit(
                        contact.id,
                        contact.name,
                        contact.email,
                        contact.phone
                      )
                    }
                  />
                </Link>
              </a>
              <FontAwesomeIcon
                icon={faXmark}
                color="red"
                cursor="pointer"
                className="ms-3"
                onClick={() => handleDelete(contact.id)}
              />
            </small>
          </h4>
          {showDetails && (
            <ul className="list-group">
              <li className="list-group-item">
                <b>Email:</b> {contact.email}
              </li>
              <li className="list-group-item">
                <b>Phone:</b> {contact.phone}
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
