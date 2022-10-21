import React, { useState } from 'react';
import Header from './Header.styles';
import StyledLink from './Link.styles';
import { Ul, Nav, Hamburger } from './Menu.styles';
import Container from './Container.styles';
import {
  AiOutlineQuestionCircle as About,
  AiOutlineHome as Home,
  AiOutlineFileAdd as Add,
} from 'react-icons/ai';

const AppHeader = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
    console.log(toggle);
  };

  return (
    <Header>
      <Container>
        <StyledLink to="/">Contact Manager</StyledLink>
        <Hamburger onClick={toggleMenu} />
        <Nav toggle={toggle}>
          <Ul>
            <li>
              <StyledLink to="/">
                <Home /> Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/add">
                <Add /> Add
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/about">
                <About /> About
              </StyledLink>
            </li>
          </Ul>
        </Nav>
      </Container>
    </Header>
  );
};

export default AppHeader;
