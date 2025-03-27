import React, { useState, useEffect } from "react";
import axios from "axios";
import { BotoesTodos } from '../../Components/BtTela';
import {
  Container,
  HeaderContainer,
  LogoContainer,
  LogoFPR,
  FiltersContainer,
  Button,
  DigimonCard,
  Img,
  Grid,
  Select,
  Input,
  Overlay,
  Modal,
  ChooseButton,
  DigimonInfo,
  ArrowLeft,
  ArrowRight,
  BT,
  Button1,
  Button2
} from "./styled";

const MostrarTodos = () => {
  const [digimons, setDigimons] = useState([]);
  const [filteredDigimons, setFilteredDigimons] = useState([]);
  const [visibleDigimons, setVisibleDigimons] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [search, setSearch] = useState("");
  const [selectedDigimon, setSelectedDigimon] = useState(null);

  useEffect(() => {
    const fetchDigimons = async () => {
      try {
        const response = await axios.get("https://digimon-api.vercel.app/api/digimon");
        setDigimons(response.data);
        setFilteredDigimons(response.data);
        setVisibleDigimons(response.data.slice(0, 12));
      } catch (error) {
        console.error("Erro ao buscar Digimons", error);
      }
    };

    fetchDigimons();
  }, []);

  useEffect(() => {
    setVisibleDigimons(filteredDigimons.slice(page * 12, (page + 1) * 12));
  }, [page, filteredDigimons]);

  const handleLevelChange = (e) => {
    const level = e.target.value;
    setSelectedLevel(level);
    setPage(0);

    if (level === "") {
      setFilteredDigimons(digimons);
    } else {
      const filtered = digimons.filter((digi) => digi.level === level);
      setFilteredDigimons(filtered);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setPage(0);

    const filtered = digimons.filter((digi) =>
      digi.name.toLowerCase().includes(value)
    );

    setFilteredDigimons(filtered);
  };

  const handleSelectDigimon = (digimon) => {
    setSelectedDigimon(digimon);
  };

  const closeModal = () => {
    setSelectedDigimon(null);
  };

  return (
    <Container>
      <HeaderContainer>
        <LogoContainer>
          <LogoFPR src="/assets/FPRBranco.png" alt="Logo FPR" />
          <FiltersContainer>
            <Select onChange={handleLevelChange} value={selectedLevel}>
              <option value="">Todos os Níveis</option>
              <option value="In Training">In Training (Em Treinamento)</option>
              <option value="Rookie">Rookie (Inicial)</option>
              <option value="Champion">Champion (Campeão)</option>
              <option value="Ultimate">Ultimate</option>
              <option value="Mega">Mega</option>
              <option value="Fresh">Fresh</option>
            </Select>
            <Input
              type="text"
              placeholder="Buscar Digimon pelo nome..."
              value={search}
              onChange={handleSearchChange}
            />
          </FiltersContainer>
        </LogoContainer>
        <BT>
        <BotoesTodos />
        </BT>
      </HeaderContainer>

      <Grid>
        {visibleDigimons.map((digimon) => (
          <DigimonCard key={digimon.name}>
            <Img src={digimon.img} alt={digimon.name} />
            <ChooseButton className="choose-button" onClick={() => handleSelectDigimon(digimon)}>
              Escolher
            </ChooseButton>
            <DigimonInfo>
              <h3>{digimon.name}</h3>
              <p>Nível: {digimon.level}</p>
            </DigimonInfo>
          </DigimonCard>
        ))}
      </Grid>

      <div style={{ marginTop: '20px' }}>
        {page > 0 && (
          <Button2 onClick={() => setPage(page - 1)}>
            <ArrowLeft /> Anterior
          </Button2>
        )}
        {filteredDigimons.length > (page + 1) * 12 && (
          <Button1 onClick={() => setPage(page + 1)}>
            Próximo <ArrowRight />
          </Button1>
        )}
      </div>

      {selectedDigimon && (
        <Overlay onClick={closeModal}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h2>Você escolheu {selectedDigimon.name}!</h2>
            <Img src={selectedDigimon.img} alt={selectedDigimon.name} />
            <p>Nível: {selectedDigimon.level}</p>
            <Button onClick={closeModal}>Fechar</Button>
          </Modal>
        </Overlay>
      )}
    </Container>
  );
};

export default MostrarTodos;