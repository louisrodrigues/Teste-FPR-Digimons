// NavigationButton.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const NavigationButton = ({ link, label, background }) => {
  const history = useHistory();

  const handleClick = () => {
    // Adiciona o background como parâmetro na rota
    const routeWithBackground = background 
      ? `${link}?bg=${encodeURIComponent(background)}`
      : link;
    
    history.push(routeWithBackground);
  };

  return (
    <Button onClick={handleClick}>
      {label}
    </Button>
  );
};

export default NavigationButton;