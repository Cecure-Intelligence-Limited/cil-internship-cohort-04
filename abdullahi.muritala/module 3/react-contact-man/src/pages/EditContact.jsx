/* eslint-disable eqeqeq */
import React, { useContext, useEffect, useState } from 'react';
import Container from '../components/Container.styles';
import { StyledH2 } from '../components/Home.styles';
import { StyledForm, Wrapper, FormControl } from '../components/Form.styles';
import { ContactContext } from '../App';
import { useParams } from 'react-router-dom';

const EditContact = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const { editContact, contactList } = useContext(ContactContext);
  const { id } = useParams();

  useEffect(() => {
    const targetContact = contactList.find((contact) => contact.id == id);

    if (targetContact) {
      setContactName(targetContact.name);
      setContactEmail(targetContact.email);
      setContactPhone(targetContact.phone);
    }
  }, [contactList, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    editContact(id, contactName, contactEmail, contactPhone);
  };

  return (
    <Container>
      <Wrapper>
        <StyledH2>Edit Contact</StyledH2>
        <StyledForm onSubmit={handleSubmit}>
          <FormControl>
            <label htmlFor="contactName">Name</label>
            <input
              type="text"
              name="contactName"
              id="contactName"
              required
              placeholder="Enter contact's Name"
              value={contactName}
              onChange={(event) => setContactName(event.target.value)}
            />
          </FormControl>
          <FormControl>
            <label htmlFor="contactEmail">Email</label>
            <input
              type="email"
              name="contactEmail"
              id="contactEmail"
              required
              placeholder="Enter contact's Email"
              value={contactEmail}
              onChange={(event) => setContactEmail(event.target.value)}
            />
          </FormControl>
          <FormControl>
            <label htmlFor="contactPhone">Phone</label>
            <input
              type="text"
              name="contactPhone"
              id="contactPhone"
              required
              placeholder="Enter contact's Phone Number"
              value={contactPhone}
              onChange={(event) => setContactPhone(event.target.value)}
            />
          </FormControl>
          <input type="submit" value="Update" />
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default EditContact;
