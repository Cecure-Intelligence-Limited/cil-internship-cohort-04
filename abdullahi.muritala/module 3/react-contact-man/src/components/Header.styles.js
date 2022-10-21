import styled from 'styled-components';

const Header = styled.header`
  background-color: #343a40;
  color: #ffffff;
  padding: 10px 30px;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
  }
`;

export default Header;
