import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import AddPhotoAlternate from '@mui/icons-material/AddPhotoAlternate';
import Send from '@mui/icons-material/Send';
import GetApp from '@mui/icons-material/GetApp';
import DescriptionItem from './DescriptionItem';



const Description = () => {
    const theme = useTheme();

    return (
        
        <Box
            maxWidth={{ sm: 720, md: 1236 }}
            width={1}
            margin='0 auto'
            paddingTop={2}
        >
            <Box
                data-aos='fade-up'
                backgroundColor={theme.palette.background.transparent}
                paddingTop={2}
            >
                <Container
                    maxWidth='lg'
                    display='flex'
                    sx={{
                        alignItems: 'center',
                        flexDirection: 'column',
                        px: {
                            md: '15px !important'
                        }
                    }}
                >
                    <Typography
                        data-aos='fade-up'
                        align='left'
                        color={theme.palette.text.primary}
                        variant='h4'
                        marginBottom='15px'
                    >
                        A step-by-step guide
                    </Typography>
                    <Grid container spacing={4} data-aos='fade-up'>
                        <DescriptionItem 
                            icon={<AddPhotoAlternate style={{ height: 25, width: 25 }} />}
                            title='Select an Image'
                            subtitle='Upload a desire image from local album or drag-and-drop it into the provided dropzone.'
                        />
                        <DescriptionItem 
                            icon={<Send style={{ height: 25, width: 25 }} />}
                            title='Send the Image'
                            subtitle='Press the Send Image button to send the image to the machine learning model for classification.'
                        />
                        <DescriptionItem 
                            icon={<GetApp style={{ height: 25, width: 25 }} />}
                            title='Get the Result'
                            subtitle='The result is printed on the screen and you have an option to go to wikipedia for more information.'
                        />
                    </Grid>
                </Container>
            </Box>
        </Box>
        
    );
};

export default Description;