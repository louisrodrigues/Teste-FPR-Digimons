import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  position: relative; /* Para que o card seja posicionado em relação a este container */
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 8px;
  width: 450px;
  height: 40px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-image: url('/assets/lupa.png');
  background-repeat: no-repeat;
  background-position: 420px center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Alinha os botões nas extremidades */
  width: 100%; /* Faz com que o contêiner ocupe toda a largura disponível */
  margin-top: 10px; /* Espaçamento entre o input e os botões */
`;

export const Button = styled.button`
  padding: 8px 15px;
  background-color: #4CAF50;
  width: 226px; /* Largura fixa para os botões */
  height: 43px;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export const DigimonCard = styled.div`
  position: absolute; /* Remove o card do fluxo normal */
  top: 60px; /* Ajuste a posição vertical conforme necessário */
  left: 0; /* Alinha o card à esquerda do container */
  margin-left: 470px; /* Espaçamento à direita do input */
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: inline-block;
  text-align: center;

  /* Responsividade para telas menores que 800px */
  @media (max-width: 800px) {
    position: relative; /* Retorna ao fluxo normal */
    margin-left: 0; /* Remove o espaçamento à direita do input */
    margin-top: 10px; /* Espaçamento acima do card */
    top: auto; /* Reseta a posição vertical */
  }
`;

export const Img = styled.img`
  width: 150px;
  height: auto;
`;