// Busca.js
import React, { useState } from "react";
import axios from "axios";
import { Container, Input, Button, InputContainer, ButtonContainer } from "./styled";
import NavigationButton from '../../Components/NavigationButton';

const Busca = ({ onDigimonFetch, currentBackground }) => { // Recebe o background atual como prop
  const [search, setSearch] = useState("");

  const fetchDigimon = async () => {
    try {
      const response = await axios.get(
        `https://digimon-api.vercel.app/api/digimon/name/${search}`
      );
      onDigimonFetch(response.data[0]);
    } catch (error) {
      console.error("Erro ao buscar Digimon", error);
      onDigimonFetch(null);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchDigimon();
    }
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="Digite o nome do DIGIMON"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={fetchDigimon}>ESCOLHA SEU DIGIMON</Button>
        <NavigationButton 
          link="/Todos" 
          label="Mostrar Todos" 
          background={currentBackground} // Passa o background da tela atual
        />
      </ButtonContainer>
    </Container>
  );
};

export default Busca;