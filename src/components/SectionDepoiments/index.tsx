import { Box } from "@mui/material";
import {
  BoxShadow,
  CardDepoiments,
  ContainerSectionDepoiments,
  TitleDepoiments,
} from "./styles";

export const SectionDepoiments = () => {
  return (
    <ContainerSectionDepoiments>
      <BoxShadow></BoxShadow>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        marginBottom={"5em"}
      >
        <TitleDepoiments>O QUE NOSSOS ALUNOS DIZEM:</TitleDepoiments>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        gap={"30px"}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <CardDepoiments>
            <img
              src={"/blackwhite.jpg"}
              alt={"blackwhite"}
              className="blackwhite-class"
            />
            <Box display={"flex"} className="box-avatar">
              <img src={"/pic1.png"} alt={"pic1"} className="pic-avatar" />
              <Box
                display={"flex"}
                flexDirection={"column"}
                className="avatar-info"
              >
                <h5>Matheus Ferreira</h5>
                <p>Design Gráfico</p>
              </Box>
            </Box>
            <p className="paragraph-card">
              Eu entendi o jogo e como trabalhar de verdade, sem hackzinhos. O
              primeiro ponto que mudou minha chave foi essa interação e contato
              com os outros alunos e professores. Posso dizer que vocês foram
              fundamentais pra me gerar 10k por mês. E mês retrasado 13k.
              Agradeço por tudo. E agora comprei um carro aos 17 anos!
            </p>
          </CardDepoiments>
          <Box display={"flex"} justifyContent={"center"} paddingTop={"3em"}>
            <img
              src={"/button_nintendo.png"}
              alt="nintend"
              style={{ width: "200px" }}
            />
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <CardDepoiments>
            <img
              src={"/blackwhite.jpg"}
              alt={"blackwhite"}
              className="blackwhite-class"
            />
            <Box display={"flex"} className="box-avatar">
              <img src={"/pic2.png"} alt={"pic2"} className="pic-avatar" />
              <Box
                display={"flex"}
                flexDirection={"column"}
                className="avatar-info"
              >
                <h5>Aldo Freitas</h5>
                <p>Web Designer</p>
              </Box>
            </Box>
            <p className="paragraph-card">
              Desde entrei na trybo minha vida mudou radicalmente. Além de muito
              aprendizado com as aulas e sacadas, o maior diferencial foi o
              grupo do WhatsApp. A interação, network, dúvidas, orientações,
              resenha. Desde que entrei na trybo meu faturamento aumentou 3x.
              Atualmente, em média, 17k/mês.
            </p>
          </CardDepoiments>
          <Box display={"flex"} justifyContent={"center"} paddingTop={"3em"}>
            <img
              src={"/button_nintendo.png"}
              alt="nintend"
              style={{ width: "200px" }}
            />
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <CardDepoiments>
            <img
              src={"/blackwhite.jpg"}
              alt={"blackwhite"}
              className="blackwhite-class"
            />
            <Box display={"flex"} className="box-avatar">
              <img src={"/pic3.png"} alt={"pic3"} className="pic-avatar" />
              <Box
                display={"flex"}
                flexDirection={"column"}
                className="avatar-info"
              >
                <h5>Carlos</h5>
                <p>Design Gráfico</p>
              </Box>
            </Box>
            <p className="paragraph-card">
              Eu entendi o jogo e como trabalhar de verdade, sem hackzinhos. O
              primeiro ponto que mudou minha chave foi essa interação e contato
              com os outros alunos e professores. Posso dizer que vocês foram
              fundamentais pra me gerar 10k por mês. E mês retrasado 13k.
              Agradeço por tudo. E agora comprei um carro aos 17 anos!
            </p>
          </CardDepoiments>
          <Box display={"flex"} justifyContent={"center"} paddingTop={"3em"}>
            <img
              src={"/button_nintendo.png"}
              alt="nintend"
              style={{ width: "200px" }}
            />
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <CardDepoiments>
            <img
              src={"/blackwhite.jpg"}
              alt={"blackwhite"}
              className="blackwhite-class"
            />
            <Box display={"flex"} className="box-avatar">
              <img src={"/pic4.png"} alt={"pic4"} className="pic-avatar" />
              <Box
                display={"flex"}
                flexDirection={"column"}
                className="avatar-info"
              >
                <h5>Paulo Junior</h5>
                <p>Design Gráfico</p>
              </Box>
            </Box>
            <p className="paragraph-card">
              Eu acabei encontrando uma família no Discord, aonde fiz amigos que
              posso confiar sem nunca nem ter visto na vida, a frase “você e a
              média das 5 pessoas que você convive” nunca fez tanto sentido na
              vida, hoje faturo mais de 10k mensal, atendendo clientes
              espalhados aí pelo Brasilzão e uma cliente de Portugal.
            </p>
          </CardDepoiments>
          <Box display={"flex"} justifyContent={"center"} paddingTop={"3em"}>
            <img
              src={"/button_nintendo.png"}
              alt="nintend"
              style={{ width: "200px" }}
            />
          </Box>
        </Box>
      </Box>
    </ContainerSectionDepoiments>
  );
};
