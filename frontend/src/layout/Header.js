import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = ({ onSidebarMobileOpen }) => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <AppBar
                elevation={5}
                sx={{
                    backgroundColor: theme.palette.primary.default,
                    color: theme.palette.common.white
                }}
            >
                <Toolbar sx={{ minHeight: 70 }}>
                    <IconButton
                        color='inherit'
                        onClick={onSidebarMobileOpen}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon fontSize='medium' />
                    </IconButton>
                    <Link href='/' style={{ textDecoration: 'none' }}>
                        <Box sx={{ display: { md: 'inline', xs: 'none' } }}>
                            <IconButton size='large' disabled>
                                <CameraAltIcon 
                                    style={{ 
                                        color: theme.palette.common.white, 
                                        height: 50, 
                                        width: 30 
                                    }} 
                                />
                                <Typography 
                                    component='h1'
                                    variant='h2' 
                                    sx={{ 
                                        flexGrow: 1,
                                        color: theme.palette.common.white,
                                        fontFamily:'"Libre Baskerville"',
                                        fontWeight: 'bold',
                                        textDecoration: 'none',
                                        marginLeft: '10px'
                                    }}
                                >
                                    Dog Breeds Classification
                                </Typography>
                            </IconButton>
                        </Box>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                        <Button
                            component='a'
                            color='primary'
                            href='/'
                            size='small'
                            variant='text'
                            sx={{
                                color: theme.palette.common.white,
                                fontSize: theme.typography.subtitle1,
                                fontWeight: 'medium',
                                mr: 2,
                                '& svg': {
                                    mr: 0.5
                                },
                            }}
                        >
                            <HomeOutlinedIcon /> Home
                        </Button>
                        <Button
                            component='a'
                            color='primary'
                            href='/classifier'
                            size='small'
                            variant='text'
                            sx={{
                                color: theme.palette.common.white,
                                fontSize: theme.typography.subtitle1,
                                fontWeight: 'medium',
                                mr: 2,
                                '& svg': {
                                    mr: 0.5
                                },
                            }}
                        >
                            <InsertPhotoOutlinedIcon /> Image Classifier
                        </Button>
                        <Divider
                        orientation='vertical'
                        sx={{ 
                            height: 32, 
                            mx: 2,
                            display: { lg: 'flex', md: 'none', xs: 'none' } 
                        }} 
                        />
                    <Box sx={{ display: { lg: 'flex', md: 'none', xs: 'none' } }}>
                        <IconButton 
                            aria-label='LinkedIn' 
                            color='primary'
                            href='https://www.linkedin.com/in/chi-han-lin-498310126/'
                            target='_blank'
                            sx={{
                                color: theme.palette.common.white,
                                fontSize: theme.typography.subtitle1,
                                fontWeight: 'medium',
                                mr: 2,
                                '& svg': {
                                    mr: 0.5
                                },
                            }}
                        >
                            <LinkedInIcon fontSize='large' />
                        </IconButton>
                        <IconButton 
                            aria-label='Instagram' 
                            color='primary'
                            href='https://www.instagram.com/chihan.lin/'
                            target='_blank'
                            sx={{
                                color: theme.palette.common.white,
                                fontSize: theme.typography.subtitle1,
                                fontWeight: 'medium',
                                mr: 2,
                                '& svg': {
                                    mr: 0.5
                                },
                            }}
                        >
                            <InstagramIcon fontSize='large' />
                        </IconButton>
                    </Box>
                    <Divider />
                    </Toolbar>
                <Divider />
            </AppBar>
        </React.Fragment>
    );
};

export default Header;