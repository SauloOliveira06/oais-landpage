import styled, { createGlobalStyle } from "styled-components";
import Open24DisplaySt from "../../fonts/Open24DisplaySt.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open 24 Display St';
    src: url(${Open24DisplaySt}) format('truetype');
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const BackgroundHero = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  height: 80vh;
`;

export const StyledButtonBorder = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 90%;
  left: 41%;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 250px;
    height: 35px;
    border: 1px solid #73ff01;
    text-align: center;

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0.5em;
      text-align: center;
      color: #ffffff;
    }
  }

  .quadrado {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #73ff01;
  }

  .canto-superior-esquerdo {
    top: -5px;
    left: -5px;
  }

  .canto-superior-direito {
    top: -5px;
    right: -5px;
  }

  .canto-inferior-esquerdo {
    bottom: -5px;
    left: -5px;
  }

  .canto-inferior-direito {
    bottom: -5px;
    right: -5px;
  }
`;

export const TextNecessarySkills = styled.h1`
  display: flex;
  justify-content: center;
  top: 92%;
  left: 30%;
  font-family: "Open 24 Display St", sans-serif;
  font-size: 50px;
  font-weight: normal;
  position: absolute;
  color: #ffffff;
  letter-spacing: 0.1em;
  z-index: 2;
`;

export const Subtitle = styled.p`
  display: flex;
  justify-content: center;
  top: 103%;
  left: 24%;
  position: absolute;
  font-size: 20px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0.4em;
  text-align: center;
  color: #5dd528;
  z-index: 2;
`;

export const DivBoxShadow = styled.div`
  box-shadow: rgba(0, 0, 0, 1) 0 350px 70px 40px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const StyledButtonEnterTheGame = styled.div`
  display: flex;
  justify-content: center;
  top: 116%;
  left: 41%;
  position: absolute;
  z-index: 2;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
  }

  .canto-superior-esquerdo {
    top: -2px;
    left: 185px;
  }

  .quadrado {
    position: absolute;
  }

  .canto-superior-direito {
    top: -10px;
    right: 241px;
  }

  .canto-inferior-esquerdo {
    bottom: -6px;
    left: -4px;
  }

  .canto-inferior-direito {
    bottom: -7px;
    right: 0px;
  }

  button {
    width: 250px;
    height: 50px;
    border: 0.83px;
    background: linear-gradient(270deg, #009c10 -1.58%, #a1ff39 100.18%);
    color: #000000;
    border-top-left-radius: 7px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 7px;
  }
`;
