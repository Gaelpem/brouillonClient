import React, { useState } from 'react';
import classes from './MainNavigation.module.css'
import ContactDrawer from './ContactDrawer';
import img1  from '../assets/img1.jpg'; 

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
     
        <div className={classes.header}>
            <h1 className={classes.logo}>Shtib.</h1>
            <nav>

                <li>home</li>
                <li>about</li>
            </nav>

            <button onClick={openContact}>contact</button>
            {showConctact && <ContactDrawer onClose={CloseContact}/>}
            
        </div>

        <section className={classes.section1}>

            <div className={classes.description}>
                <h2>Seigfried Vigier</h2>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque deleniti libero expedita quaerat commodi non voluptas dolore. Quis exercitationem rem incidunt, error id dolore praesentium, maxime min</p>
                
            </div>

        </section>

        <section className={classes.section2}>

       <img src={img1}  alt="image" />

        </section>

        </>

        
    );
};

export default MainNavigation;