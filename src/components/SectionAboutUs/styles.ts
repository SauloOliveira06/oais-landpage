import styled from "styled-components";

export const ContainerAboutUs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: auto;
`;

export const OverlayImg = styled.div`
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
`;

export const ImgBackground = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentAboutUs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;

  h1 {
    font-family: "Times New Roman";
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0.375em;
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 460px;
  height: 386px;
  /* position: absolute; */
  margin-top: 10em;
`;

export const DivProfile = styled.div`
  width: 180px;
`;

export const DivBackGreen = styled.div`
  width: 100%;
  height: 30px;
  padding-bottom: 5px;

  p {
    font-family: "Open 24 Display St", sans-serif;
    background-color: #01f225;
    text-align: center;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0em;
    margin-top: auto;
    box-shadow: rgba(60, 250, 113, 0.7) 0px 5px 15px;
  }
`;

export const DivPic = styled.div`
  border: 1px solid #01f225;
  height: 317px;
`;

export const ImgAbout = styled.img`
  object-fit: cover;
  width: 178px;
  height: auto;
`;

export const DivBiography = styled.div`
  width: 100%;
`;

export const DivBackGreenBiography = styled.div`
  width: auto;
  height: 30px;
  padding-left: 10px;

  svg {
    float: right;
    transform: translate(0px, -47px);
  }

  p {
    font-family: "Open 24 Display St", sans-serif;
    background-color: #01f225;
    text-align: start;
    padding-left: 15px;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0em;
    margin-top: auto;
    box-shadow: rgba(60, 250, 113, 0.7) 0px 5px 15px;
  }
`;

export const DivContentText = styled.div`
  border: 1px solid #01f225;
  background-color: #181818;
  margin: 6px 0 0 10px;
  height: 163px;

  p {
    padding: 10px;
    font-family: "Arial";
    font-size: 12px;
    font-weight: 300;
    line-height: 17px;
    letter-spacing: -0.01em;
    text-align: left;
  }
`;

export const DivSkills = styled.div`
  border: 1px solid #01f225;
  background-color: #181818;
  height: 19px;
  padding: 15px;
  margin: 10px 0 2px 10px;

  svg {
    /* position: absolute; */
    /* transform: translateY(-4px); */
    padding-left: 10px;
  }
`;
