import React from 'react';
import Navigations from '../component/Navigations';
import '../Home.css'
import Logo from '../component/Logo';

const Home = () => {
    return (
       <header className='header-home'>

        <div className='home-link'>
        <Logo/>
            <Navigations/>
        </div>

         <div className='section2'>
               
         </div>
        </header>
    );
};

export default Home;