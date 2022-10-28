import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Edit = ({ contacts, editContact }) => {
  const navigate = useNavigate();
  const [currentContact, setCurrentContact] = useState({
    name: '',
    id: 0,
    phoneNumber: '',
    email: '',
  });

  const params = useParams();
  const contactId = parseInt(params.id);

  useEffect(() => {
    const defaultValue = contacts.find((contact) => contact.id === contactId);
    setCurrentContact(defaultValue);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!currentContact) {
      alert('Please add a task');
    }

    const index = contacts.findIndex((contact) => contact.id === contactId);
    // console.log(currentContact, index);
    editContact(currentContact, index, contactId);
    navigate('/');
  };

  const handleChange = (event) => {
    event.preventDefault();
    setCurrentContact({
      ...currentContact,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="max-w-[1140px] m-auto bg-[rgba(0,0,0,.03)] ">
      <h1 className="bg-[rgba(0,0,0,.03)] text-base font-bold border-[rgba(0,0,0,.125)] py-3 px-7 my-[2rem]">
        Add Contact
      </h1>
      <div className=" flex flex-col py-5 w-[95%] m-auto">
        <label className="mb-[0.5rem] text-base">Name</label>
        <input
          name="name"
          className="py-[0.75rem] px-[1rem] text-xl rounded-[0.3rem]"
          type="text"
          value={currentContact.name}
          onChange={handleChange}
          placeholder="Enter your Name"
        />
      </div>
      <div className="flex flex-col py-5 w-[95%] m-auto">
        <label className="mb-[0.5rem] text-base">Email</label>
        <input
          name="email"
          className="py-[0.75rem] px-[1rem] text-xl rounded-[0.3rem]"
          type="email"
          value={currentContact.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col py-5 w-[95%] m-auto">
        <label className="mb-[0.5rem] text-base">Phone Number</label>
        <input
          className="py-[0.75rem] px-[1rem] text-xl rounded-[0.3rem]"
          type="text"
          name="phoneNumber"
          value={currentContact.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
      </div>
      <div className="flex flex-col py-5 w-[95%] m-auto">
        <input
          className="py-[0.75rem] px-[1rem] text-xl rounded-[0.3rem] bg-[#343a40] text-[white]"
          type="button"
          value="Update"
          placeholder="Enter your phone number"
          onClick={onSubmit}
        />
      </div>
    </form>
  );
};

export default Edit;
