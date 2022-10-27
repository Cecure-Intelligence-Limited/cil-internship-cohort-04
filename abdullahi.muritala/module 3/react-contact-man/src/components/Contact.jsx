import React, { useContext, useState } from 'react';
import { Card, StyledButton, DelButton, TopDiv, StyledUl, StyledListItem } from './Contact.styles';
import { TbArrowsDown, TbEditCircle } from 'react-icons/tb';
import { TiDelete } from 'react-icons/ti';
import { ContactContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Contact = (props) => {
  const { name, email, phone, id } = props;
  const [toggle, setToggle] = useState(false);
  const { deleteContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const toggleDetails = () => {
    setToggle((prev) => !prev);
  };

  const handleDelete = (event) => {
    deleteContact(event);
  };

  const handleEdit = (event) => {
    const targetContactId = event.currentTarget.dataset.id;
    navigate(`edit/${targetContactId}`);
  };
  return (
    <Card>
      <TopDiv>
        <div>
          <span>{name}</span>
          <StyledButton onClick={toggleDetails}>
            <TbArrowsDown />
          </StyledButton>
        </div>
        <div>
          <StyledButton onClick={handleEdit} data-id={id}>
            <TbEditCircle />
          </StyledButton>
          <DelButton onClick={handleDelete} data-id={id}>
            <TiDelete />
          </DelButton>
        </div>
      </TopDiv>
      <StyledUl toggle={toggle}>
        <StyledListItem>Email: {email}</StyledListItem>
        <StyledListItem>Phone: {phone}</StyledListItem>
      </StyledUl>
    </Card>
  );
};

export default Contact;
