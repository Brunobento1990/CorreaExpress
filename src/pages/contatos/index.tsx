import { Box, Paper, Typography } from "@mui/material";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HomeIcon from "@mui/icons-material/Home";
import { AppTheme } from "../../hooks/app-theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ortomedica } from "../../components/banners/imgClientes/ortomedica";
import { eficacia } from "../../components/banners/imgClientes/eficacia";
import { materiaprima } from "../../components/banners/imgClientes/materiaprima";
import ImageListCustom from "../../components/listImage/imageList";
import { diarinho } from "../../components/banners/imgClientes/diarinho";
import { unica } from "../../components/banners/imgClientes/unica";
import { farmagnus } from "../../components/banners/imgClientes/farmagnus";
import { Link } from "react-router-dom";

const imgs = [
  {
    img: eficacia,
    title: "Eficácia",
  },
  {
    img: ortomedica,
    title: "Ortomédica",
  },
  {
    img: materiaprima,
    title: "Matéria prima suplementos",
  },
  {
    img: diarinho,
    title: "Diarinho",
  },
  {
    img: unica,
    title: "Única lingerie",
  },
  {
    img: farmagnus,
    title: "Drogarias Farmagnus",
  },
];

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
          <Link
            to="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=correayuri2023@gmail.com"
          >
            <Typography
              color={theme.color.preto}
              fontWeight={500}
              fontFamily={theme.font.principal}
            >
              Email : correayuri2023@gmail.com
            </Typography>
          </Link>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          gap={5}
        >
          <ContactPhoneIcon />
          <Link to="https://api.whatsapp.com/send?phone=554799330022">
            <Typography
              color={theme.color.preto}
              fontWeight={500}
              fontFamily={theme.font.principal}
            >
              WhatsApp : 47 9933-0022
            </Typography>
          </Link>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          gap={5}
        >
          <InstagramIcon />
          <Link to="https://instagram.com/correaexpress_?igshid=NjIwNzIyMDk2Mg==">
            <Typography
              color={theme.color.preto}
              fontWeight={500}
              fontFamily={theme.font.principal}
            >
              instagram : @correa_express
            </Typography>
          </Link>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          gap={5}
        >
          <HomeIcon />
          <Link
            to="https://goo.gl/maps/8w83GpyNiBhSVCfr9"
          >
            <Typography
              color={theme.color.preto}
              fontWeight={500}
              fontFamily={theme.font.principal}
            >
              Endereço : R. Fábio Cesário Pereira, 345 - São Judas, Itajaí - SC,
              88303-490, Brasil
            </Typography>
          </Link>
        </Box>
      </Box>
      <Typography
        color={theme.color.preto}
        variant="h4"
        marginTop={3}
        fontWeight={600}
        fontFamily={theme.font.principal}
      >
        Nossos clientes
      </Typography>
      <ImageListCustom data={imgs} />
    </Box>
  );
}
