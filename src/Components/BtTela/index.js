import React from "react";
import { AmorArea, AmorIcon, AmizadeArea, AmizadeIcon, ConfiancaArea,ConfiancaIcon,CoragemArea,CoragemIcon,EsperancaArea,EsperancaIcon,LuzArea,LuzIcon,SabedoriaArea,SabedoriaIcon,SinceridadeArea,SinceridadeIcon } from "./styled";
import { useHistory } from "react-router-dom"; 

export const Amor = ({ icon, link }) =>{

    const history = useHistory();

    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push( link )
    }

    return(
        <AmorArea href={link} onClick={handleLinkClick} >
            <AmorIcon src={icon} />
            Amor
        </AmorArea>
    );

}

export const Amizade = ({ icon, link }) =>{

    const history = useHistory();

    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push( link )
    }

    return(
        <AmizadeArea href={link} onClick={handleLinkClick} >
            <AmizadeIcon src={icon} />
            Amizade
        </AmizadeArea>
    );

}

export const Confianca = ({ icon, link }) =>{

    const history = useHistory();

    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push( link )
    }

    return(
        <ConfiancaArea href={link} onClick={handleLinkClick} >
            <ConfiancaIcon src={icon} />
            Confiança
        </ConfiancaArea>
    );

}

export const Coragem = ({ icon, link }) =>{

    const history = useHistory();

    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push( link )
    }

    return(
        <CoragemArea href={link} onClick={handleLinkClick} >
            <CoragemIcon src={icon} />
            Coragem
        </CoragemArea>
    );

}

export const Esperanca = ({ icon, link }) =>{

    const history = useHistory();

    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push( link )
    }

    return(
        <EsperancaArea href={link} onClick={handleLinkClick} >
            <EsperancaIcon src={icon} />
            Esperança
        </EsperancaArea>
    );

}

export const Luz = ({ icon, link }) =>{

    const history = useHistory();

    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push( link )
    }

    return(
        <LuzArea href={link} onClick={handleLinkClick} >
            <LuzIcon src={icon} />
            Luz
        </LuzArea>
    );

}

export const Sabedoria = ({ icon, link }) =>{

    const history = useHistory();

    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push( link )
    }

    return(
        <SabedoriaArea href={link} onClick={handleLinkClick} >
            <SabedoriaIcon src={icon} />
            Sabedoria
        </SabedoriaArea>
    );

}

export const Sinceridade = ({ icon, link }) =>{

    const history = useHistory();

    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push( link )
    }

    return(
        <SinceridadeArea href={link} onClick={handleLinkClick} >
            <SinceridadeIcon src={icon} />
            Sinceridade
        </SinceridadeArea>
    );

}

export const BotoesTodos =()=>{
    return (
        <>
            <Amor icon="/assets/logoAmor.png" link="/HomeAmor"/>
            <Amizade icon="/assets/logoAmizade.png" link="/HomeAmizade"/>
            <Confianca icon="/assets/logoConfianca.png" link="/HomeConfianca"/>
            <Coragem icon="/assets/logoCoragem.png" link="/HomeCoragem"/>
            <Esperanca icon="/assets/logoEsperanca.png" link="/HomeEsperanca"/>
            <Luz icon="/assets/logoLuz.png" link="/HomeLuz"/>
            <Sabedoria icon="/assets/logoSabedoria.png" link="/HomeSabedoria"/>
            <Sinceridade icon="/assets/logoSinceridade.png" link="/HomeSinceridade"/>
        </>

    );

}

