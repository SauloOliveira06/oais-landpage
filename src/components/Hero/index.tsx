import { Box } from "@mui/material";
import { VectorBottomLeft } from "../../assets/VectorBottomLeft";
import { VectorBottomRight } from "../../assets/VectorBottomRight";
import { VectorTopRight } from "../../assets/VectorTopLeft";
import { VectorTopLeft } from "../../assets/VectorTopRight";
import {
  BackgroundHero,
  Container,
  DivBoxShadow,
  GlobalStyles,
  StyledButtonBorder,
  StyledButtonEnterTheGame,
  Subtitle,
  TextNecessarySkills,
} from "./styles";

export const Hero = () => {
  return (
    <Container>
      <GlobalStyles />
      <BackgroundHero src={"/HeroBackground.jpg"} alt={"hero"} />
      <Box display={'flex'} justifyContent={'center'}>
        <StyledButtonBorder>
          <div className="container">
            <p>APRENDA AS</p>
            <div className="quadrado canto-superior-esquerdo"></div>
            <div className="quadrado canto-superior-direito"></div>
            <div className="quadrado canto-inferior-esquerdo"></div>
            <div className="quadrado canto-inferior-direito"></div>
          </div>
        </StyledButtonBorder>
        <TextNecessarySkills>habilidades necessárias</TextNecessarySkills>
        <Subtitle>que os outros cursos de design não te ensinam</Subtitle>
        <StyledButtonEnterTheGame>
          <div className="container">
            <div className="quadrado canto-superior-esquerdo">
              <VectorTopLeft />
            </div>
            <div className="quadrado canto-superior-direito">
              <VectorTopRight />
            </div>
            <div className="quadrado canto-inferior-esquerdo">
              <VectorBottomLeft />
            </div>
            <div className="quadrado canto-inferior-direito">
              <VectorBottomRight />
            </div>

            <button>ENTRAR NO JOGO</button>
          </div>
        </StyledButtonEnterTheGame>
      </Box>
      <DivBoxShadow />
    </Container>
  );
};
