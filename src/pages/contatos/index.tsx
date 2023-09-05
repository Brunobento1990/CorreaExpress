import { Box, Paper, Typography } from '@mui/material';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { AppTheme } from '../../hooks/app-theme';

export function Contatos() {

    const theme = AppTheme();

    return (
        <Box
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
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
                    <DeliveryDiningIcon />
                    <Typography
                        variant='h5'
                        fontFamily={theme.font.principal}
                        fontWeight={600}
                        color={theme.color.preto}
                    >
                        Serviços
                    </Typography>
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    flexDirection='row'
                    gap={5}
                >
                    <Typography
                        fontFamily={theme.font.principal}
                        fontWeight={600}
                        color={theme.color.preto}
                    >
                        Delivery
                    </Typography>
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    flexDirection='row'
                    gap={5}
                >
                    <Typography
                        fontFamily={theme.font.principal}
                        fontWeight={600}
                        color={theme.color.preto}
                    >
                        Entrega de documentos, pequenas mercadorias e entragas rápidas
                    </Typography>
                </Box>
            </Box>
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