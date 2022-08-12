import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container } from '@mui/system';

import HeroButtons from '../components/HeroButtons';

const Hero = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(
        theme.breakpoints.up('md'),
        { defaultMatches: true }
    );

    return (
        <Box
            maxWidth={{ sm: 720, md: 1236 }}
            width={1}
            margin='0 auto'
            paddingTop={30}
            backgroundColor={theme.palette.background.default}
            style={{backgroundImage: "url(/images/ScrollGroup3.png)",
            backgroundSize: "cover",
            minHeight: "1000px",
            maxWidth: "100%",
            position: "relative"
            }}

        >
            <Grid container spacing={4} marginTop='0px'>
                <Grid 
                    item 
                    xs={12} 
                    md={6}
                >
                    <Box data-aos={isMd ? 'fade-right' : 'fade-up'} marginBottom='0px' style={{ position: 'relative', zIndex: '1' }}  >
                        <Box marginBottom={2}>
                            <Typography
                                align='center'
                                color={theme.palette.text.white}
                                variant='h1'
                                marginTop='00px'
                            >
                                Select an Image for Classification
                            </Typography>
                        </Box>
                        <Box marginBottom={3}>
                            <Typography
                                align='center'
                                color={theme.palette.text.secondary}
                                variant='h4'
                                paddingTop={3}
                                paddingBottom={3}
                                marginBottom='15px'
                            >
                                The App Is Dedicated To Classifying The Dog Breed <br></br>And Providing Information On Wikipedia With Just One Click Away.
                            </Typography>
                        </Box>
                        <HeroButtons />
                    </Box>
                </Grid>
               
            </Grid>
        </Box>
    );
};

export default Hero;