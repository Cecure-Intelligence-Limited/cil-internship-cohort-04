import styled from 'styled-components';

export const Card = styled.div`
  padding: 10px 30px;
  margin-bottom: 30px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  max-width: 720px;
`;

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
`;

export const DelButton = styled(StyledButton)`
  color: #dc3545;
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledUl = styled.ul`
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0;

  ${(props) => {
    if (props.toggle) {
      return `
        display: block;
      `;
    } else {
      return `
        display: none;
      `;
    }
  }}
`;

export const StyledListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;
