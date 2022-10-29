import React from 'react';
import Hero from './Hero';
import ContactCard from './ContactCard';
import { useState } from 'react';

const Home = ({ contacts, onDelete }) => {
  return (
    <>
      <Hero />
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Home;
