import React, {useState} from "react";
import "./Card.css";


const Card = (props) =>{

   const deleteCard = () =>{
     props.onDelete(props.id);
   }

const[contactDetails, setContactDetails] = useState(false);

const showContactDetails = () =>{
  setContactDetails(!contactDetails);
}


  return <div className="contacts-box">
  <span className="contact-name">{props.name}</span>
  <i onClick={deleteCard} className="fa-solid fa-x trash-icon"></i>
  <i onClick={showContactDetails} class="fa fa-angle-double-down arrow-icon" aria-hidden="true"></i>
  {contactDetails && <div>
  <p><span className="contacts-email">Email:</span><span> {props.email}</span></p>
  <p><span className="contacts-email">Phone:</span><span> {props.phone}</span></p>
  </div>}

  </div>
}

export default Card;
