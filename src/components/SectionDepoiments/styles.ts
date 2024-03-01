import styled from "styled-components";

export const ContainerSectionDepoiments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translateY(-150%);
`;

export const TitleDepoiments = styled.h1`
  font-family: "Times New Roman";
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0.375em;
  text-align: center;
`;

export const CardDepoiments = styled.div`
  position: relative;
  display: inline-block;
  width: 368px;
  height: 330px;
  border: 3px solid #8a8e91;
  border-top-right-radius: 17px;
  border-top-left-radius: 17px;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 55px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(34, 60, 34, 0.97);
    border-top-right-radius: 17px;
    border-top-left-radius: 17px;
    border-bottom-left-radius: 17px;
    border-bottom-right-radius: 55px;
  }

  img {
    object-fit: cover;
    width: 368px;
    height: 330px;
    border-top-right-radius: 17px;
    border-top-left-radius: 17px;
    border-bottom-left-radius: 17px;
    border-bottom-right-radius: 55px;
  }

  .blackwhite-class {
    position: absolute;
    z-index: -1;
  }

  .box-avatar {
    padding: 30px 30px 0 30px;
    .pic-avatar {
      width: 57px;
      height: 57px;
      z-index: 1;
    }
    h5 {
      margin: 0;
      padding-left: 18px;
      z-index: 1;
    }
    p {
      margin: 0;
      padding-left: 18px;
      color: #929292;
      z-index: 1;
    }
    .avatar-info {
      padding-top: 5px;
    }
  }
  .paragraph-card {
    font-family: "Arial";
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    position: absolute;
    z-index: 10;
    padding: 30px 30px 0 30px;
  }
`;

export const BoxShadow = styled.div`
  box-shadow: rgba(0, 0, 0, 1) 0 715px 112px 171px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  transform: translateY(-98%);
`;
