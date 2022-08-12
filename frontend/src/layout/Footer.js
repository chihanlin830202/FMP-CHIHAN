import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Box
                backgroundColor={theme.palette.primary.main}
                position='fixed'
                bottom='0'
                left='0'
                width='100%'
            >
                <Box
                    backgroundColor={theme.palette.primary.main}
                    position='relative'
                    padding={theme.spacing(1)}
                >
                    <Grid container spacing={0}>
                        <Hidden mdDown>
                            <Grid container item xs={12} md={4}>
                                <List
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: 0
                                    }}
                                >
                                    <ListItemButton component='a' href='#'>
                                        <ListItemText 
                                            primary={
                                                <Typography 
                                                    variant='body2'
                                                    color={theme.palette.text.secondary}
                                                >
                                                    Privacy Policy
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                    <ListItemButton component='a' href='#'>
                                        <ListItemText 
                                            primary={
                                                <Typography 
                                                    variant='body2'
                                                    color={theme.palette.text.secondary}
                                                >
                                                    Terms of Use
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                </List>
                            </Grid>
                        </Hidden>
                        <Grid container item xs={12} md={4} justifyContent='center'>
                            <List>
                                <ListItemButton>
                                    <ListItemText 
                                        primary={
                                            <Typography 
                                                variant='body2'
                                                color={theme.palette.text.secondary}
                                            >
                                                Copyright &copy; {new Date().getFullYear()} Chi-Han.Lin FMP.
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            </List>
                        </Grid>

                        <Grid container item xs={12} md={4} justifyContent='center'>
                            <List>
                                <ListItemButton>
                                    <ListItemText 
                                        primary={
                                            <Typography 
                                                variant='body2'
                                                color={theme.palette.text.secondary}
                                            >
                                                Image by
                                                {' '}
                                                <Link 
                                                    href='https://www.freepik.com/author/starline'
                                                    alt='starline'
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    color={theme.palette.text.secondary}
                                                >
                                                    starline
                                                </Link>
                                                {' '}
                                                on
                                                {' '} 
                                                <Link 
                                                    href='https://www.freepik.com/free-vector/technological-background-with-circuit-lines-diagram-blue-color_9106760.htm#page=2&query=digital%20technology%20background&position=5&from_view=search#position=5&page=2&query=digital%20technology%20background'
                                                    alt='Unsplash'
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    color={theme.palette.text.secondary}
                                                >
                                                    freepik
                                                </Link>.
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Footer;