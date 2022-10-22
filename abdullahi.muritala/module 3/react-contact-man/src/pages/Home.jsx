import React from 'react';
import { Wrapper } from '../components/Home.styles';
import Container from '../components/Container.styles';
import ProjectDescription from '../components/ProjectDescription';
import Contacts from '../components/Contacts';

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <ProjectDescription />
        <Contacts />
      </Wrapper>
    </Container>
  );
};

export default Home;
