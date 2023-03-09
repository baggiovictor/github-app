import styled from 'styled-components';

export const InputSearch = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-size: 16px;

  &:focus {
    outline: none;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    color: #bbb;
  }
`;
