// Todos.js
import React, { useEffect, useState } from 'react';
import { Container } from './styled';
import MostrarTodos from '../../Components/MostrarTodos';
import { useLocation } from 'react-router-dom';

const Todos = () => {
  const [background, setBackground] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Tenta pegar o background da URL primeiro
    const params = new URLSearchParams(location.search);
    const bgFromUrl = params.get('bg');
    
    if (bgFromUrl) {
      setBackground(decodeURIComponent(bgFromUrl));
      localStorage.setItem('lastBackground', decodeURIComponent(bgFromUrl));
    } else {
      // Se não tiver na URL, pega do localStorage
      const lastBackground = localStorage.getItem('lastBackground');
      if (lastBackground) {
        setBackground(lastBackground);
      }
    }
  }, [location.search]);

  return (
    <>
      <Container style={{ backgroundImage: `url(${background})` }}>
        <MostrarTodos/>
      </Container>
    </>
  );
};

export default Todos;