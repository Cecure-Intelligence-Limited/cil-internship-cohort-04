import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import InfoContext from "../context/InfoContext";

const UpdateInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { infoEdit, updateInfo } = useContext(InfoContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (infoEdit.edit === true) {
      setName(infoEdit.info.name);
      setEmail(infoEdit.info.email);
      setPhone(infoEdit.info.phone);
    }
  }, [infoEdit]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("please add a contact");
      return;
    }
    const newInfo = { name, email, phone };

    if (infoEdit.edit === true) {
      updateInfo(infoEdit.info.id, newInfo);
    }

    setName("");
    setEmail("");
    setPhone("");
    navigate("/");
  };

  return (
    <form className="container" onSubmit={onSubmit}>
      <div className="card text-dark bg-light">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="Add Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Add Task"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              placeholder="Add Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="mb-2">
            <input
              type="submit"
              value="Update Contact"
              className="form-control"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateInfo;
