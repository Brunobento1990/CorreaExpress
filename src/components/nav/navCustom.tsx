import { useState } from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function NavCustom() {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        sx={{ backgroundColor: "#dad3d3"}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Início" icon={<HomeIcon />} />
        <BottomNavigationAction label="Contatos" icon={<ContactPhoneIcon />} />
        <BottomNavigationAction label="Endereço" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
