import { Box, Paper, Typography } from '@mui/material';
import Stepper from '../../components/stepper';
import { AppTheme } from '../../hooks/app-theme';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

export function Home() {

    const theme = AppTheme();

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={6}
            sx={{ marginBottom: "75px" }}
        >
            <Stepper />
            <Box
                component={Paper}
                height="100%"
                width="90%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap={6}
                padding={2}
            >
                <Typography
                    variant='h5'
                    fontFamily={theme.font.principal}
                    fontWeight={600}
                    color={theme.color.preto}
                >
                    Entregas em Itajaí em região
                </Typography>

                <Typography
                    fontFamily={theme.font.principal}
                    color={theme.color.preto}
                >
                    De segunda a sexta das 8:00 as 19:00
                </Typography>
                <Typography
                    fontFamily={theme.font.principal}
                    color={theme.color.preto}
                >
                    E aos sabados das 9:00 as 16:00
                </Typography>
            </Box>
            <Box
                marginTop={5}
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
                height="100%"
                width="90%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap={6}
                padding={2}
            >
                <Typography
                    variant='h5'
                    fontFamily={theme.font.principal}
                    fontWeight={600}
                    color={theme.color.preto}
                >
                    Entre em contato e solicite um orçamento através do WhatsApp
                </Typography>
                <Box
                    sx={{ textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', height: '50px', gap: '10px', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                >
                    <Link
                        to="https://api.whatsapp.com/send?phone=554799330022"
                    >
                        <Typography
                            color={theme.color.preto}
                        >
                            clique aqui  {' '}
                        </Typography>
                        <WhatsAppIcon
                            sx={{ color: 'green' }}
                        />
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}