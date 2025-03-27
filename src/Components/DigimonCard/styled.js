import styled from "styled-components";

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
  background-color: white; /* Fundo branco para o card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para dar profundidade */

  /* Responsividade para telas menores que 800px */
  @media (max-width: 800px) {
    position: relative; /* Retorna ao fluxo normal */
    margin-left: 0; /* Remove o espaçamento à direita do input */
    margin-top: 10px; /* Espaçamento acima do card */
    top: auto; /* Reseta a posição vertical */
  }
`;

export const Img = styled.img`
  width: 150px; /* Largura da imagem do Digimon */
  height: auto; /* Mantém a proporção da imagem */
  margin-bottom: 10px; /* Espaçamento abaixo da imagem */
`;