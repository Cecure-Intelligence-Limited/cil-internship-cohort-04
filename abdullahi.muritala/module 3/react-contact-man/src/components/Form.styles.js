import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > input[type='submit'] {
    padding: 10px 20px;
    background: #343a40;
    color: #ffffff;
  }
`;

export const Wrapper = styled.div`
  padding: 20px 30px;
  max-width: 720px;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  > input {
    padding: 10px 20px;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
`;
