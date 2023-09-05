import { useState } from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { AppTheme } from "../../hooks/app-theme";

export default function NavCustom() {

  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const theme = AppTheme();

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        sx={{ backgroundColor: theme.color.cinza }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Início"
          icon={<HomeIcon
            sx={{ color: theme.color.laranja }}
          />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label="Contatos"
          icon={<ContactPhoneIcon
            sx={{ color: theme.color.laranja }}
          />}
          onClick={() => navigate("/contatos")}
        />
        {/* <BottomNavigationAction
          label="Endereço"
          icon={<LocationOnIcon
            sx={{ color: theme.color.laranja }}
          />}
          onClick={() => navigate("/localizacao")}
        /> */}
      </BottomNavigation>
    </Paper>
  );
}
