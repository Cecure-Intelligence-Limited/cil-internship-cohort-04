import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Ul = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Nav = styled.nav`
  ${(props) => {
    if (props.toggle) {
      return `
        display: block;
        width: 100%;

        @media screen and (min-width: 768px) {
          width: initial;
        }
      `;
    } else {
      return `
        @media screen and (max-width: 768px) {
        display: none;
  }
      `;
    }
  }}
`;

export const Hamburger = styled(GiHamburgerMenu)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
