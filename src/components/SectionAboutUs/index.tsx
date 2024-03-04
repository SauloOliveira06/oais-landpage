import { Box } from "@mui/material";
import { IconFigma } from "../../assets/IconFigma";
import { IconIlustrator } from "../../assets/IconIlustrator";
import { IconPhotoshop } from "../../assets/IconPhotoshop";
import { ProgressSvg } from "../../assets/ProgressSvg";
import { VectorClose } from "../../assets/VectorClose";
import {
  CardContainer,
  ContainerAboutUs,
  ContentAboutUs,
  DivBackGreen,
  DivBackGreenBiography,
  DivBiography,
  DivContentText,
  DivPic,
  DivProfile,
  DivSkills,
  ImgAbout,
  ImgBackground,
  OverlayImg,
} from "./styles";
import { ProgressSvgLarge } from "../../assets/ProgressSvgLarge";
import { ProgressSvgSmall } from "../../assets/ProgressSvgSmall";

export const SectionAboutUs = () => {
  return (
    <ContainerAboutUs>
      <OverlayImg>
        <ImgBackground src={"/nave.jpg"} alt={"background"} />
      </OverlayImg>
      <ContentAboutUs>
        <h1>QUEM SOMOS</h1>
      </ContentAboutUs>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        position={"absolute"}
        gap={"50px"}
      >
        <CardContainer>
          <DivProfile>
            <DivBackGreen>
              <p>ELIAS PABLO</p>
            </DivBackGreen>
            <DivPic>
              <ImgAbout src={"/About1.jpg"} />
            </DivPic>
            <DivBackGreen>
              <p>ACESSO NEGADO</p>
            </DivBackGreen>
          </DivProfile>
          <DivBiography>
            <DivBackGreenBiography>
              <p>BIOGRAFIA</p>
              <VectorClose />
            </DivBackGreenBiography>
            <DivContentText>
              <p>
                Desenvolveu um estilo de criativos utilizado por todo mercado.
                Seus trabalhos já foram expostos nos maiores encontros de
                estrategistas do Brasil. Especialista em manipulação para
                lançamentos. Já participou de projetos com grandes players do
                mercado como; Lucas Rosa, Priscila Zillo e Marcelo Kimura.
              </p>
            </DivContentText>
            <DivSkills>
              <Box
                display={"flex"}
                alignItems={"center"}
                style={{ transform: "translateY(-6px)" }}
              >
                <Box>
                  <IconIlustrator />
                </Box>
                <Box>
                  <ProgressSvg />
                </Box>
              </Box>
            </DivSkills>
            <DivSkills>
              <Box
                display={"flex"}
                alignItems={"center"}
                style={{ transform: "translateY(-6px)" }}
              >
                <Box>
                  <IconPhotoshop />
                </Box>
                <Box>
                  <ProgressSvgLarge />
                </Box>
              </Box>
            </DivSkills>
            <DivSkills>
              <Box
                display={"flex"}
                alignItems={"center"}
                style={{ transform: "translateY(-6px)" }}
              >
                <Box>
                  <IconFigma />
                </Box>
                <Box>
                  <ProgressSvgSmall />
                </Box>
              </Box>
            </DivSkills>
          </DivBiography>
        </CardContainer>

        <CardContainer>
          <DivProfile>
            <DivBackGreen>
              <p>THIAGO MEDEIROS</p>
            </DivBackGreen>
            <DivPic>
              <ImgAbout src={"/About2.jpg"} />
            </DivPic>
            <DivBackGreen>
              <p>ACESSO NEGADO</p>
            </DivBackGreen>
          </DivProfile>
          <DivBiography>
            <DivBackGreenBiography>
              <p>BIOGRAFIA</p>
              <VectorClose />
            </DivBackGreenBiography>
            <DivContentText>
              <p>
                Largou a CLT e de empreender para apostar tudo no Design. Em
                2021 participou de mais de 50 lançamentos, na maioria deles de 6
                dígitos. Trabalhou em projetos do O Novo Mercado e Experts como
                Bruno Damásio, Stella Sadério, Luana Carolina, Gabi Pazos, Ana
                Jannuzzi entre outros.
              </p>
            </DivContentText>
            <DivSkills>
              <Box
                display={"flex"}
                alignItems={"center"}
                style={{ transform: "translateY(-6px)" }}
              >
                <Box>
                  <IconIlustrator />
                </Box>
                <Box>
                  <ProgressSvg />
                </Box>
              </Box>
            </DivSkills>
            <DivSkills>
              <Box
                display={"flex"}
                alignItems={"center"}
                style={{ transform: "translateY(-6px)" }}
              >
                <Box>
                  <IconPhotoshop />
                </Box>
                <Box>
                  <ProgressSvgLarge />
                </Box>
              </Box>
            </DivSkills>
            <DivSkills>
              <Box
                display={"flex"}
                alignItems={"center"}
                style={{ transform: "translateY(-6px)" }}
              >
                <Box>
                  <IconFigma />
                </Box>
                <Box>
                  <ProgressSvgSmall />
                </Box>
              </Box>
            </DivSkills>
          </DivBiography>
        </CardContainer>

        <CardContainer>
          <DivProfile>
            <DivBackGreen>
              <p>LÉO MENEZES</p>
            </DivBackGreen>
            <DivPic>
              <ImgAbout src={"/About3.jpg"} />
            </DivPic>
            <DivBackGreen>
              <p>ACESSO NEGADO</p>
            </DivBackGreen>
          </DivProfile>
          <DivBiography>
            <DivBackGreenBiography>
              <p>BIOGRAFIA</p>
              <VectorClose />
            </DivBackGreenBiography>
            <DivContentText>
              <p>
                Entrou no design para poder sair com a namorada e ajudar sua
                família após seu pai ter sido assaltado e perdido seu principal
                meio de trabalho. Em 2021, ele saiu de um salário mensal de 500
                reais para +10K. Além de realizar seu sonho de comprar um
                Macbook e um novo carro pro seu pai.
              </p>
            </DivContentText>
            <DivSkills>
              <Box
                display={"flex"}
                alignItems={"center"}
                style={{ transform: "translateY(-6px)" }}
              >
                <Box>
                  <IconIlustrator />
                </Box>
                <Box>
                  <ProgressSvg />
                </Box>
              </Box>
            </DivSkills>
            <DivSkills>
              <Box
                display={"flex"}
                alignItems={"center"}
                style={{ transform: "translateY(-6px)" }}
              >
                <Box>
                  <IconPhotoshop />
                </Box>
                <Box>
                  <ProgressSvgLarge />
                </Box>
              </Box>
            </DivSkills>
            <DivSkills>
              <Box
                display={"flex"}
                alignItems={"center"}
                style={{ transform: "translateY(-6px)" }}
              >
                <Box>
                  <IconFigma />
                </Box>
                <Box>
                  <ProgressSvgSmall />
                </Box>
              </Box>
            </DivSkills>
          </DivBiography>
        </CardContainer>
      </Box>
    </ContainerAboutUs>
  );
};
