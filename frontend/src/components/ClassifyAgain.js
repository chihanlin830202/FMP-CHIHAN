import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme, useMediaQuery } from '@mui/material';
import SendIcon from '@mui/icons-material/SendToMobile';


const ClassifyAgain = ({ submitOnClick, classificationResult }) => {
    const theme = useTheme();
    const isMd = useMediaQuery(
        theme.breakpoints.up('md'),
        { defaultMatches: true }
    );
    
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Box marginTop={4}>
                    <Box
                        display='flex'
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        alignItems='center'
                        justifyContent='center'
                        marginTop={4}
                    >
                        <Button 
                            variant='contained'
                            color='primary'
                            size='large'
                            startIcon={<SendIcon />}
                            fullWidth={isMd ? false : true}
                            disableElevation={true}
                            onClick={submitOnClick}
                            sx={{
                                padding: '10px 25px',
                                marginRight: '15px',
                                fontSize: '18px',
                                border: '1px solid transparent',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: theme.palette.primary.main,
                                    border: '2px solid ' + theme.palette.primary.main
                                }
                            }}
                        >
                            Try Again
                        </Button>
                        <Button 
                            variant='contained'
                            color='primary'
                            size='large'
                            href={'https://en.wikipedia.org/wiki/' + classificationResult}
                            startIcon={<SendIcon />}
                            fullWidth={isMd ? false : true}
                            disableElevation={true}
                            sx={{
                                padding: '10px 25px',
                                marginRight: '15px',
                                fontSize: '18px',
                                border: '1px solid transparent',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: theme.palette.primary.main,
                                    border: '2px solid ' + theme.palette.primary.main
                                }
                            }}
                        >
                            go to wikipedia
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </React.Fragment>
    );
};



export default ClassifyAgain;