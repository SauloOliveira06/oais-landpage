import { Box } from "@mui/material";
import {
  BackgroundBody,
  BallPurple,
  BallRed,
  BallYellow,
  CardContainer,
  CardMagic,
  ContainerBody,
  FooterDate,
  FooterText,
  Mask,
  SubTitleBody,
  TextCard,
  TitleBody,
} from "./styles";
import { VectorBottomCard } from "../../assets/VectorBottomCard";
import { VectorLeftTopCard } from "../../assets/VectorTopCard";
import { VectorTopRightCard } from "../../assets/VectorTopRightCard";
import { VectorBaseBall } from "../../assets/VectorBaseBall";
import { VectorStart } from "../../assets/VectorStart";
import { VectorJump } from "../../assets/VectorJump";
import { VectorQuestions } from "../../assets/VectorQuestions copy";

export const BodyPage = () => {
  return (
    <ContainerBody>
      <Box display={"flex"} flexDirection={"column"} position={"absolute"}>
        <TitleBody>
          Esqueça essas promessas de faturar 10k por mês, essa é a parte fácil,
        </TitleBody>
        <SubTitleBody>o difícil é escalar e se manter no game.</SubTitleBody>
      </Box>
      <Mask>
        <div className="imagem-com-overlay">
          <BackgroundBody src={"/wow.jpg"} alt={"wow img"} />
        </div>
      </Mask>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={"50px"}
        position={"absolute"}
        top={"15%"}
      >
        <CardContainer>
          <div className="vector-left-top-card">
            <VectorLeftTopCard />
          </div>
          <div className="vector-base-ball">
            <VectorBaseBall />
          </div>
          <div className="vector-top-right-card">
            <VectorTopRightCard />
          </div>
          <BallPurple src={"/ball-1.png"} />
          <CardMagic>
            <img src={"/img-1.jpg"} alt={"hero 1"} />
            <Box display={"flex"} flexDirection={"column"} marginTop={"50px"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                position={"relative"}
                marginBottom={"20px"}
              >
                <VectorStart />
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <TextCard>
                  Tire as suas dúvidas com quem joga no modo Hard. Sua chance de
                  ter uma consultoria grátis e aprender tudo o que os outros
                  cursos de Design não te ensinam.
                </TextCard>
              </Box>
            </Box>
            <FooterDate>
              <FooterText>DIA 15/09 - ÀS 20H</FooterText>
            </FooterDate>
            <VectorBottomCard />
          </CardMagic>
        </CardContainer>
        <CardContainer>
          <div className="vector-left-top-card">
            <VectorLeftTopCard />
          </div>
          <div className="vector-base-ball">
            <VectorBaseBall />
          </div>
          <div className="vector-top-right-card">
            <VectorTopRightCard />
          </div>
          <BallYellow src={"/ball-2.png"} />
          <CardMagic>
            <img src={"/img-2.jpg"} alt={"hero 2"} />
            <Box display={"flex"} flexDirection={"column"} marginTop={"50px"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                position={"relative"}
                marginBottom={"20px"}
              >
                <VectorJump />
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <TextCard>
                  Aprenda as skills para você passar para o nível medium e dar
                  um grande salto no seu faturamento. Como um Designer de
                  Lançamentos pode faturar mais de 30k reais por mês? A resposta
                  para essa fase estará aqui.
                </TextCard>
              </Box>
            </Box>
            <FooterDate>
              <FooterText>DIA 16/09 - ÀS 20H</FooterText>
            </FooterDate>
            <VectorBottomCard />
          </CardMagic>
        </CardContainer>
        <CardContainer>
          <div className="vector-left-top-card">
            <VectorLeftTopCard />
          </div>
          <div className="vector-base-ball">
            <VectorBaseBall />
          </div>
          <div className="vector-top-right-card">
            <VectorTopRightCard />
          </div>
          <BallRed src={"/ball-3.png"} />
          <CardMagic>
            <img src={"/img-3.jpg"} alt={"hero 3"} />
            <Box display={"flex"} flexDirection={"column"} marginTop={"50px"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                position={"relative"}
                marginBottom={"20px"}
              >
                <VectorQuestions />
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <TextCard>
                  Tire as suas dúvidas com quem joga no modo Hard. Sua chance de
                  ter uma consultoria grátis e aprender tudo o que os outros
                  cursos de Design não te ensinam.
                </TextCard>
              </Box>
            </Box>
            <FooterDate>
              <FooterText>DIA 17/09 - ÀS 20H</FooterText>
            </FooterDate>
            <VectorBottomCard />
          </CardMagic>
        </CardContainer>
      </Box>
    </ContainerBody>
  );
};
