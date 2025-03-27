import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const BT = styled.div`
 display: flex;
 gap:10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoFPR = styled.img`
  width: 150px;
  margin-right: 20px;
  margin-left: 50px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const DigimonCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.02);
    box-shadow: 4px 4px 15px rgba(255, 255, 255, 0.3);
  }

  &:hover .choose-button {
    opacity: 1;
    visibility: visible;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: auto;
  margin-right: 15px;
  border-radius: 10px;
`;

export const DigimonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
`;

export const ChooseButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  margin-left: 10px;
  transform: translateY(-50%);
  background: black;
  color: white;
  border: 2px solid black;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s, background 0.3s;
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
  color: #75759d;
  min-width: 200px;
  margin-left: 100px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
  color: #75759d;
  min-width: 250px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: transparent;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: #007bff;
  }
`;

export const ArrowLeft = styled(FaArrowLeft)`
  margin-right: 5px;
`;

export const Button1 = styled.button`
  position: fixed;
  bottom: 20px;
  right: 100px;
  padding: 10px 20px;
  background: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

export const Button2 = styled.button`
  position: fixed;
  bottom: 20px;
  right: 250px;
  padding: 10px 20px;
  background: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

export const ArrowRight = styled(FaArrowRight)`
  margin-left: 5px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: black;
`;