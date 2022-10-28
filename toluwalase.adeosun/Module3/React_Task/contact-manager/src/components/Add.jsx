import React from 'react';
import { useState } from 'react';

const Add = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !phoneNumber || !email) {
      alert('Please add a task');
      return;
    }
    addContact({ name, phoneNumber, email });
    setName('');
    setEmail('');
    setPhoneNumber('');
  };
  return (
    <form className="max-w-[1140px] m-auto bg-[rgba(0,0,0,.03)] ">
      <h1 className="bg-[rgba(0,0,0,.03)] text-base font-bold border-[rgba(0,0,0,.125)] py-3 px-7 my-[2rem]">
        Add Contact
      </h1>
      <div className=" flex flex-col py-5 w-[95%] m-auto">
        <label className="mb-[0.5rem] text-base">Name</label>
        <input
          className="py-[0.75rem] px-[1rem] text-xl rounded-[0.3rem]"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Name"
        />
      </div>
      <div className="flex flex-col py-5 w-[95%] m-auto">
        <label className="mb-[0.5rem] text-base">Email</label>
        <input
          className="py-[0.75rem] px-[1rem] text-xl rounded-[0.3rem]"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col py-5 w-[95%] m-auto">
        <label className="mb-[0.5rem] text-base">Phone Number</label>
        <input
          className="py-[0.75rem] px-[1rem] text-xl rounded-[0.3rem]"
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
        />
      </div>
      <div className="flex flex-col py-5 w-[95%] m-auto">
        <input
          className="py-[0.75rem] px-[1rem] text-xl rounded-[0.3rem] bg-[#343a40] text-[white]"
          type="button"
          value="Submit"
          placeholder="Enter your phone number"
          onClick={onSubmit}
        />
      </div>
    </form>
  );
};

export default Add;
