import React from 'react';
import { StyledH2, StyledOl, SpecsContainer } from './Home.styles';

const ProjectDescription = () => {
  return (
    <SpecsContainer>
      <StyledH2>Contact Manager</StyledH2>
      <p>This is a portfolio project to showcase knowledge of:</p>
      <StyledOl>
        <li>React Components and JSX</li>
        <li>React Router</li>
        <li>Component state management</li>
        <li>Context api for global state management</li>
        <li>Making asynchronous calls to the JSON placeholder fake RESR API using 'async/await'</li>
        <li>Modular component styling with styled components</li>
      </StyledOl>
    </SpecsContainer>
  );
};

export default ProjectDescription;
