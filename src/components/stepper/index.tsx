import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { srcBanner } from '../banners/logo';
import { banner1 } from '../banners/banner1';
import { banner2 } from '../banners/banner2';
import { useState } from "react"

export default function Stepper() {
    
    const [banners] = useState([srcBanner, banner1, banner2]);
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const lgUp = useMediaQuery(theme.breakpoints.up('sm'));

    setTimeout(() => {
        if(activeStep === banners.length - 1){
            setActiveStep(0)
        }else{
            setActiveStep(activeStep + 1)
        }
    }, 2000)

    return (
        <Box
            component="img"
            alt="entrega"
            sx={{
                height: 350,
                maxHeight: lgUp ? 350 : 300,
                display: 'block',
                overflow: 'hidden',
                width: '100%',
                borderRadius: 0,
                marginTop: -5
            }}
            src={`data:image/jpeg;base64,${banners[activeStep]}`}
        />
    );
}
