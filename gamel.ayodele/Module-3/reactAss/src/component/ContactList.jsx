import { dropDown, deleteImg, editImg } from "./Image";
import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import InfoContext from "../context/InfoContext";

const ContactList = ({ info }) => {
  const [showText, setShowText] = useState(false);
  const { deleteInfo, editInfo } = useContext(InfoContext);
  return (
    <div className="container" style={{ maxWidth: "900px" }}>
      <div className="card card-body mb-4">
        <div className="colon">
          <h3>
            {info.name}{" "}
            <button onClick={() => setShowText(!showText)}>
              <img src={dropDown} className="img" alt="img" />
            </button>{" "}
          </h3>
          <div className="sub-colon">
            <Link to="/update">
              <button onClick={() => editInfo(info)}>
                <img src={editImg} className="img" alt="img" />
              </button>
            </Link>
            <button onClick={() => deleteInfo(info.id)}>
              <img src={deleteImg} className="img" alt="img" />
            </button>
          </div>
        </div>

        {showText && (
          <ul className="list-group">
            <li className="list-group-item">Email: {info.email}</li>
            <li className="list-group-item">Phone: {info.phone}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContactList;
