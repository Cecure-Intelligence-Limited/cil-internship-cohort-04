import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Add from './components/Add';
import EditContact from './components/EditContact';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const contactsFromServer = await fetchContacts();
      setContacts(contactsFromServer);
    };
    getContacts();
    fibonacci(18);
  }, []);

  const fibonacci = (number) => {
    let n1 = 0,
      n2 = 1,
      nextTerm;
    for (let i = 1; i <= number; i++) {
      console.log(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
  };

  const fetchContacts = async () => {
    const res = await fetch('http://localhost:5000/contacts');
    const data = await res.json();
    return data;
  };
  const fetchContact = async (id) => {
    const res = await fetch(`http://localhost:5000/contacts/${id}`);
    const data = await res.json();
    return data;
  };

  //Add Contact

  const addContact = async (contact) => {
    const res = await fetch('http://localhost:5000/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    });
    const newContact = await res.json();
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newContact = { id, ...contact };
    setContacts([...contacts, newContact]);
    toast.success('Contact Added Successfully');
  };

  // Updating Edited Contact

  const editContact = async (editedContact, index, id) => {
    // const contactToBeEdited = await fetchContact(id);
    const res = await fetch(`http://localhost:5000/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedContact),
    });
    const data = await res.json();
    contacts.splice(index, 1, data);
    setContacts(contacts);
    toast.success('Contact Updated Successfully');
  };

  // const updateContact = (editedContact, index) => {
  //   contacts.splice(index, 1, editedContact);
  //   setContacts(contacts);
  //   console.log(contacts);
  // };

  //Delete Contact

  const deleteContact = async (id) => {
    await fetch(`http://localhost:5000/contacts/${id}`, {
      method: 'DELETE',
    });
    setContacts(contacts.filter((contact) => contact.id !== id));
    toast.success('Contact Delete Successfully');
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home contacts={contacts} onDelete={deleteContact} />}
        />
        <Route
          path="/edit/:id"
          element={
            <EditContact
              contacts={contacts}
              // editContact={editContact}
              editContact={editContact}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/add" element={<Add addContact={addContact} />} />
      </Routes>
      <Footer />
      {/* </div> */}
    </Router>
  );
};

export default App;
