import React, {useState} from "react";
import "./Home.css";
import Card from "./Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./Add";

const Home = () =>{


  const [contacts, setContacts] = useState([{
    name: "Ekene Udeozor",
    email: "ekeneudeozor@gmail.com",
    phone: "08163xxxxx",
    id: "1"
  },
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    id: "2"
  },
  {
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    id: "3"
  }
  ]);


  const deleteContact=(id) => {
   console.log("delete", id);
  setContacts(contacts.filter((contact) => contact.id !== id));
  }

const saveContact = (contactData) =>{
  const newContactData = {
    ...contactData, id: String(Math.random())
  }

  setContacts([...contacts, newContactData]);
  // console.log(contactData);
}


  return <div className="home">
  <div className="home-description">
  <div className="home-title">
  <h1>Contact Manager</h1>
  </div>
  <h3>This is a portfolio project to showcase knowledge of:</h3>
  <ol type="I">
  <li>React Components and JSX.</li>
  <li>React Router.</li>
  <li>Component state management.</li>
  <li>Context api for global state management.</li>
  <li>Making asynchronous calls to the Json placeholder fake rest api using "async/await".</li>
  </ol>
  </div>

  {contacts.length !== 0 ? contacts.map((contact)=> {
    return <Card onDelete={deleteContact} key={contact.id} id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} />;
  }) : ("No contacts. Why not add one?😊")}
  <Add onSaveContact={saveContact}/>

  </div>
}

export default Home;
