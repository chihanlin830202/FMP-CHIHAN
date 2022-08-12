import 'regenerator-runtime';
import React from 'react';
import Head from 'next/head';

import CustomDivider from '../components/CustomDivider';
import Description from '../components/Description';
import Hero from '../components/Hero';
import Spacer from '../components/Spacer';
import { useTheme } from '@emotion/react';


const Home = () => {
    return (
        <React.Fragment>
            <Head>
                <title>
                    Chi's Classicfication App
                </title>
            </Head>
            <Hero />
            {/* <CustomDivider /> */}
            {/* <Description /> */}
            {/* <Spacer sx={{ pt: 20}} /> */}
        </React.Fragment>
    );
};

export default Home;