import React, { useState } from 'react';
import { Container, BotoesTopo, Menu, BemVindo, Escolha, Mundo, FPR, DigimonCardContainer } from './styled';
import Busca from '../../Components/Procurar';
import { BotoesTodos } from '../../Components/BtTela';
import DigimonCardComponent from '../../Components/DigimonCard';

const HomeSabedoria = () => {
  const [digimon, setDigimon] = useState(null);
  const background = '/assets/sabedoria.png'; // Defina o fundo da página atual

  const handleDigimonFetch = (fetchedDigimon) => {
    setDigimon(fetchedDigimon);
  };

  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <BotoesTopo>
        <BotoesTodos />
      </BotoesTopo>

      <Menu>
        <FPR src="/assets/FPRBranco.png" alt="Logo FPR" />
        <BemVindo>Bem vindo ao FPR DIGIMON</BemVindo>
        <Escolha>Escolha o seu Digimon</Escolha>
        <Mundo>
          O Universo Digimon é um mundo digital onde vivem os Digimons, criaturas virtuais que formam laços com parceiros humanos. 
          Juntos, eles enfrentam desafios e vilões para proteger tanto o Mundo Digital quanto o mundo real.
        </Mundo>
        <Busca 
            onDigimonFetch={handleDigimonFetch} 
            currentBackground={background}
        />
      </Menu>

      {digimon && (
        <DigimonCardContainer>
          <DigimonCardComponent digimon={digimon} />
        </DigimonCardContainer>
      )}
    </Container>
  );
};

export default HomeSabedoria;