import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { TiDeleteOutline } from 'react-icons/ti';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactCard = ({ contact, onDelete }) => {
  const navigate = useNavigate();
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <div className="w-[800px] m-auto border divide-[#111011] mb-[1rem] mt-2">
      <div className=" flex items-center p-5 justify-between mt-2">
        <div className=" flex items-center  space-x-4">
          <h1>{contact.name}</h1>
          <BsChevronDoubleDown
            className="text-[red]"
            onClick={() => setMoreInfo(!moreInfo)}
          />
        </div>
        <div className=" flex items-center  space-x-4 ">
          <FiEdit
            onClick={() => {
              navigate(`edit/${contact.id}`);
              // editContact(contact.id);
            }}
          />
          <TiDeleteOutline
            className="text-[red]"
            onClick={() => onDelete(contact.id)}
          />
        </div>
      </div>

      {moreInfo && (
        <div className="p-5 ">
          <p className="border divide-[#111011] py-1.5">
            <strong>Email: </strong>
            {contact.email}
          </p>
          <p className="border divide-[#111011] py-1.5">
            <strong>Phone: </strong>
            {contact.phoneNumber}
          </p>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default ContactCard;
