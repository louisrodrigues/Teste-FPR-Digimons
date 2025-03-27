import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/assets/coragem.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 80px;
    position: relative;
    overflow: auto;

    /* Resolução 1920px (Full HD) */
    @media (min-width: 1920px) {
        padding: 60px 100px;
        background-size: cover;
    }

    /* Resolução 1366px (HD) */
    @media (max-width: 1366px) {
        padding: 40px 60px;
    }

    /* Tablet e mobile - card abaixo do conteúdo */
    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: flex-start;
        padding: 20px;
        height: auto;
        min-height: 100vh;
    }

    @media (max-aspect-ratio: 16/9) {
        overflow-y: auto;
    }
`;

export const BotoesTopo = styled.div`
    position: absolute;
    top: 20px;
    right: 40px;
    display: flex;
    gap: 10px;

    @media (min-width: 1920px) {
        top: 30px;
        right: 50px;
    }

    @media (max-width: 1366px) {
        top: 15px;
        right: 30px;
    }

    @media (max-width: 800px) {
        position: relative;
        top: auto;
        right: auto;
        justify-content: flex-end;
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const Menu = styled.div`
    width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    /* 1920px */
    @media (min-width: 1920px) {
        width: 600px;
        gap: 25px;
    }

    /* 1366px */
    @media (max-width: 1366px) {
        width: 450px;
        gap: 15px;
    }

    /* Mobile - centralizado */
    @media (max-width: 800px) {
        width: 100%;
        align-items: center;
        text-align: center;
        margin-top: 20px;
    }
`;

export const BemVindo = styled.div`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 18px;

    @media (min-width: 1920px) {
        font-size: 20px;
    }

    @media (max-width: 1366px) {
        font-size: 16px;
    }

    @media (max-width: 800px) {
        font-size: 15px;
    }
`;

export const Escolha = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 50px;
    margin-bottom: 10px;

    @media (min-width: 1920px) {
        font-size: 55px;
    }

    @media (max-width: 1366px) {
        font-size: 40px;
    }

    @media (max-width: 800px) {
        font-size: 32px;
        margin-bottom: 15px;
    }
`;

export const Mundo = styled.p`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 16px;
    line-height: 1.4;
    max-width: 500px;

    @media (min-width: 1920px) {
        font-size: 18px;
        max-width: 550px;
    }

    @media (max-width: 1366px) {
        font-size: 14px;
        max-width: 400px;
    }

    @media (max-width: 800px) {
        font-size: 13px;
        max-width: 90%;
    }
`;

export const FPR = styled.img`
    width: 180px;
    height: auto;
    margin-bottom: 15px;

    @media (min-width: 1920px) {
        width: 200px;
    }

    @media (max-width: 1366px) {
        width: 150px;
    }

    @media (max-width: 800px) {
        width: 130px;
    }
`;

export const DigimonCardContainer = styled.div`
    /* Desktop - lado direito */
    position: absolute;
    right: 600px;
    bottom: 220px;
    width: 300px;
    height: 400px;

    /* 1920px */
    @media (min-width: 1920px) {
        right: 800px;
        bottom: 220px;
        width: 320px;
        height: 420px;
    }

    /* 1366px */
    @media (max-width: 1366px) {
        right: 600px;
        bottom: 220px;
        width: 280px;
        height: 380px;
    }
            @media (max-width: 1000px) {
        right: 450px;
        bottom: 220px;
        width: 280px;
        height: 380px;
    }

    /* Mobile - abaixo do conteúdo */
    @media (max-width: 750px) {
        position: relative;
        right: auto;
        bottom: auto;
        width: 100%;
        max-width: 300px;
        height: auto;
        margin: 30px auto 0;
        padding: 0 20px;
    }
`;