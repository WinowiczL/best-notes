import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: ${({theme}) => theme.primary};
  width: 220px; 
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: "Montserrat",serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  padding: 0;
  
  ${({ secondary }) => (
  secondary && css`
    background-color: hsl(0, 0%, 90%);
    width: 105px;
    height: 30px;
    font-size: 10px;
    `
)}
`;
