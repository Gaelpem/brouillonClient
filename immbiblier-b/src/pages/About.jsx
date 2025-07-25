import React from 'react';
import Navigations from '../component/Navigations';
import Logo from '../component/Logo';

const About = () => {
    return (
        <header className='header-about'>
            
        <div className='about-link'>
        <Logo/>
            <Navigations/>
        </div>
        </header>
    );
};

export default About;