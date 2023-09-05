import { ReactNode } from "react";
import NavCustom from "../../components/nav/navCustom";
import Box from "@mui/material/Box";

interface OutletProps {
    children: ReactNode;
};

export function MainLayout(props: OutletProps){
    return(
        <Box
            component="main"
            width="100%"
            height="100%"
            sx={{ minHeight: "100vh" }}
        >
            {props.children}
            <NavCustom/>
        </Box>
    )
}