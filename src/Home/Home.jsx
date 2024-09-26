// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css';

import logo from '../assets/Logo.svg';

const Home = () => {
    return (
        <div className={'home-container'}>

            <img
                src={logo}
                alt="logo"
                className={'logo'}
                // width={50}
                // height={50}
            />

        </div>
    );
};

export default Home;