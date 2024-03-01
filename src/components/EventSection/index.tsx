import { Box } from "@mui/material";
import { ContainerEventSection } from "./styles";

export const EventSection = () => {
  return (
    <ContainerEventSection>
      <Box display={"flex"} justifyContent={"center"} width={"100%"}>
        <Box width={"40%"}>
          <img src={"/forwhatevent.png"} alt={'event'} />
          <img src={"/textcontent.png"} alt={'content'} />
          <img src={"/img-bottom.png"} alt={'img bottom'} className="img-bottom" />
        </Box>
        <Box width={"60%"} className="box-halo">
            <img src={'/halo.png'} alt={'halo'} className="halo-img" />
            <img src={'/legend-halo.png'} alt={'halo'} />
        </Box>
      </Box>
    </ContainerEventSection>
  );
};
