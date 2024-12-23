import React from 'react';
import { Box, Button, styled, Typography, useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import img from '../img/Business.jpg'
import checkImg from '../img/check.png'
import logoImg from '../img/conseil.png'

  
const Header = () => {
    const theme = useTheme();

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: 1,
        paddingLeft: theme.spacing(8),
        zIndex: 1,
        color: '#fff',
        textAlign: { xs: 'center', md: 'left' },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    const PackSection = styled(Box)(({ theme }) => ({
        flex: 1,
        zIndex: 1,
        padding: theme.spacing(4),
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '4px solid #fff',
        borderRadius: theme.shape.borderRadius,
        color: '#fff',
        textAlign: 'center',
        width: { xs: '100%', md: '50%' },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    }));

    return (
        <CustomBox component='header'>
            <BoxText component='section' 
                sx={{
                    marginTop: { md: '-8rem' },
                }}
            >
                <Typography
                    variant='h1'
                    component='h1'
                    sx={{
                        fontWeight: 700,
                        color: '#fff',
                        fontSize: { xs: '2rem', md: '4rem' },
                    }}
                >
KAMOUNI CONSULTING                </Typography>

                <Typography
                    variant='body2'
                    component='p'
                    sx={{
                        py: 2,
                        width: { xs: '100%', md: '50%' },
                        textAlign: 'left', // Align text to the left
                        lineHeight: 1.6,
                        color: '#fff',
                        fontSize: { xs: '0.8rem', md: '0.875rem' },
                        marginLeft: { xs: 0, md: '0' }, // Push text to the right on medium and larger screens
                        marginRight: { xs: 'auto', md: 0 }, // Push text to the left on medium and larger screens
                    }}
                >
                   KAMOUNI CONSULTING est un cabinet d’ingénierie financière, comptable, fiscale, d’expertise Comptable  qui fournit des prestations pluridisciplinaires de conseil en gestion, d’organisation de structures, d’audit institutionnel et financier, de mise en place de système informatisé de gestion, dans divers secteurs d’activités économiques.
                </Typography>

                <Button
                    component={Link}
                    to={'/about'}
                    variant='outlined'
                    sx={{
                        px: { xs: 2, md: 4 },
                        py: { xs: 0.5, md: 1 },
                        fontSize: { xs: '0.75rem', md: '0.9rem' },
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#fff',
                        borderColor: '#fff',
                        '&:hover': {
                            color: '#343a55',
                            borderColor: '#343a55',
                        },
                    }}
                >
                    Explore
                </Button>
            </BoxText>
        </CustomBox>
    );
}

export default Header;