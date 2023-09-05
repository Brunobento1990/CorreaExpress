import { Box, Paper, Typography } from "@mui/material";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HomeIcon from "@mui/icons-material/Home";
import { AppTheme } from "../../hooks/app-theme";
import InstagramIcon from "@mui/icons-material/Instagram";

export function Contatos() {
  const theme = AppTheme();

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography
        variant="h5"
        fontFamily={theme.font.principal}
        fontWeight={600}
        marginTop={3}
        color={theme.color.preto}
      >
        Contatos
      </Typography>
      <Box
        marginTop={2}
        display="flex"
        alignItems="start"
        justifyItems="center"
        flexDirection="column"
        width="90%"
        component={Paper}
        gap={2}
        padding={2}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          gap={5}
        >
          <AttachEmailIcon />
          <Typography
            color={theme.color.preto}
            fontWeight={500}
            fontFamily={theme.font.principal}
          >
            Email : correayuri2023@gmail.com
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          gap={5}
        >
          <ContactPhoneIcon />
          <Typography
            color={theme.color.preto}
            fontWeight={500}
            fontFamily={theme.font.principal}
          >
            Telefone : 55 47 9933-0022
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          gap={5}
        >
          <InstagramIcon />
          <Typography
            color={theme.color.preto}
            fontWeight={500}
            fontFamily={theme.font.principal}
          >
            instagram : @correa_express
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          gap={5}
        >
          <HomeIcon />
          <Typography
            color={theme.color.preto}
            fontWeight={500}
            fontFamily={theme.font.principal}
          >
            Endereço : R. Fábio Cesário Pereira, 345 - São Judas, Itajaí - SC,
            88303-490, Brasil
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
