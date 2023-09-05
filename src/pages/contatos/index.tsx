import { Box, Paper, Typography } from '@mui/material';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';
import { AppTheme } from '../../hooks/app-theme';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

export function Contatos() {
    return (
        <Box
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Box
                marginTop={10}
                display='flex'
                alignItems='start'
                justifyItems='center'
                flexDirection='column'
                width='90%'
                component={Paper}
                gap={2}
                padding={2}
            >

                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    flexDirection='row'
                    gap={5}
                >
                    <AttachEmailIcon />
                    <Typography>
                        Email : correayuri2023@gmail.com
                    </Typography>
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    flexDirection='row'
                    gap={5}
                >
                    <ContactPhoneIcon />
                    <Typography>
                        Telefone : 55 47 9933-0022
                    </Typography>
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    flexDirection='row'
                    gap={5}
                >
                    <HomeIcon />
                    <Typography>
                        Endereço : R. Fábio Cesário Pereira, 345 - São Judas, Itajaí - SC, 88303-490, Brasil
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}