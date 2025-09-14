import React, { useState } from 'react';
import classes from './MainNavigation.module.css'
import ContactDrawer from './ContactDrawer';

import Heure from './Heure';

import { NavLink } from 'react-router-dom';



const MainNavigation = () => {
     const [showConctact, setShowContact] = useState(false)
       
     function openContact(){
        setShowContact(true)
     }

     function CloseContact(){
        setShowContact(false)
     }
    return (
        <>
        <header className={classes.header}>
           
            <h1 className={classes.logo}>Shtib.</h1>

            <Heure/>
            <nav>
               <NavLink to = "/" className={classes.link}>home</NavLink>

            </nav>

            <button className = {classes.btn} onClick={openContact}>contact <span className={classes.changeColor}>US</span></button>


            {showConctact && <ContactDrawer onClose={CloseContact}/>}
            
        </header>

        </>

        
    );
};

export default MainNavigation;