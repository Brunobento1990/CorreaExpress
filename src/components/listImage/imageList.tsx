import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { AppTheme } from "../../hooks/app-theme";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface props {
  data: any[];
}

export default function ImageListCustom(props: props) {

  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("sm"));
  const themeApp = AppTheme();
  const width = lgUp ? "450px" : "100%";
  const col = lgUp ? 2 : 1;

  return (
    <ImageList
      cols={col}
      sx={{ width: 700, height: 450, maxWidth: width, marginBottom: "75px" }}
    >
      {props.data.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={`data:image/jpg;base64,${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`data:image/jpg;base64,${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            position="below"
            sx={{
              color: themeApp.color.preto,
              fontFamily: themeApp.font.principal,
              fontWeight: "700",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
