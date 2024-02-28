import styled from "styled-components";

export const BackgroundBody = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  top: 13%;
`;

export const TitleBody = styled.p`
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  width: 100%;
  color: #fff;
  font-size: 32px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: auto;
  z-index: 1;
`;

export const SubTitleBody = styled.p`
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  color: #73ff01;
  font-size: 32px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: auto;
  z-index: 1;
`;

export const Mask = styled.div`
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
    height: 160vh;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  background: radial-gradient(
    63.23% 42.65% at 50% 50%,
    #2c2c2c 0%,
    #141414 100%
  );

  .vector-left-top-card {
    position: absolute;
    transform: translate(-8px, -9px);
  }
  .vector-base-ball {
    position: absolute;
    transform: translate(95px, -25px);
  }
  .vector-top-right-card {
    position: absolute;
    transform: translate(174px, -9px);
  }
`;

export const CardMagic = styled.div`
  width: 290px;
  height: 750px;
  border: 3px solid #9b8e7a;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
    width: 100%;
    object-fit: cover;
    height: 350px;
    border-bottom: 3px solid #9b8e7a;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  svg {
    position: absolute;
    bottom: 0;
    transform: translate(-5px, 13px);
  }
`;

export const TextCard = styled.p`
  font-family: "Times New Roman";
  font-size: 19px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  width: 260px;
`;

export const FooterDate = styled.div`
  background: linear-gradient(139.64deg, #e2a163 22.89%, #332121 159.1%);
  height: 50px;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FooterText = styled.p`
  font-family: "Times New Roman";
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: #2c2c2c;
`;

export const BallPurple = styled.img`
  position: absolute;
  transform: translate(123px, -55px);
`;

export const BallYellow = styled.img`
  position: absolute;
  transform: translate(123px, -55px);
`;

export const BallRed = styled.img`
  position: absolute;
  transform: translate(123px, -55px);
`;
