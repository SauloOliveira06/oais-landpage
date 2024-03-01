import styled from "styled-components";

export const ContainerEasterEgg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: auto;

  .imagem-com-overlay {
    position: relative;
    display: inline-block;
  }

  .imagem-com-overlay::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .imagem-com-overlay img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    height: 250vh;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-family: "Times New Roman";
  font-size: 30px;
  font-weight: 400;
  line-height: 39px;
  letter-spacing: 0.015em;
  text-align: center;
`;

export const ImgCardTrybo = styled.img`
  width: 390px;
  height: 694px;
  object-fit: cover;
`;

export const OverlayGlass = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 4em;

  .imagem-com-overlay-trybo {
    position: relative;
    display: inline-block;
  }

  .imagem-com-overlay-trybo::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    width: 318px;
    height: 565px;
  }

  .imagem-com-overlay-trybo img {
    width: 318px;
    height: 565px;
    object-fit: cover;
  }
`;
