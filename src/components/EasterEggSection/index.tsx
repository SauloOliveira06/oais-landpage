import { Box } from "@mui/material";
import {
  ContainerEasterEgg,
  Img,
  ImgCardTrybo,
  OverlayGlass,
  Title,
} from "./styles";
import { EasterEgg } from "../../assets/VectorEasterEgg";
import { VectorTextTrybo } from "../../assets/VectorTextTrybo";
import { VectorEntrarNoJogo } from "../../assets/VectorEntrarNoJogo";

export const EasterEggSection = () => {
  return (
    <ContainerEasterEgg>
      <div className="imagem-com-overlay">
        <Img src={"/nave.jpg"} alt={"nave-background"} />
      </div>
      <Box position={"absolute"} paddingTop={"2em"}>
        <Box display={"flex"} justifyContent={"center"}>
          <EasterEgg />
        </Box>
        <Box>
          <Title>SAVE THE DATE - 18 DE SETEMBRO ÀS 20 HORAS</Title>
        </Box>
      </Box>
      <Box position={"absolute"} display={"flex"} marginTop={"20em"}>
        <OverlayGlass>
          <div className="imagem-com-overlay-trybo">
            <img src={"/cardtrybo2.png"} alt={"card-1"} />
          </div>
        </OverlayGlass>
        <ImgCardTrybo src={"/cardtrybo.png"} alt={"card-2"} />
        <OverlayGlass>
          <Box position={"absolute"} zIndex={"3"} paddingTop={"1em"}>
            <VectorTextTrybo />
          </Box>
          <div className="imagem-com-overlay-trybo">
            <img src={"/cardtrybo2.png"} alt={"card-3"} />
          </div>
          <Box
            position={"absolute"}
            zIndex={"3"}
            bottom={0}
            left={0}
            style={{ transform: "translate(47px, -100px)" }}
          >
            <Box style={{ transform: "translate(53px, 43px)" }}>
              <VectorEntrarNoJogo />
            </Box>
            <img src={"/ButtonEnterGame.svg"} alt={"button"} />
          </Box>
        </OverlayGlass>
      </Box>
    </ContainerEasterEgg>
  );
};
