// DigimonCard.js
import React from 'react';
import { DigimonCard, Img } from './styled'; // Ajuste o caminho conforme necessário

const DigimonCardComponent = ({ digimon }) => {
  return (
    <DigimonCard>
      <h2>{digimon.name}</h2>
      <Img src={digimon.img} alt={digimon.name} />
      <p>Nível: {digimon.level}</p>
    </DigimonCard>
  );
};

export default DigimonCardComponent;