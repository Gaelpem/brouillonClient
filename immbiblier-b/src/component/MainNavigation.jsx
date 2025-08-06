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

            <button className = {classes.btn} onClick={openContact}>contact US</button>
            {showConctact && <ContactDrawer onClose={CloseContact}/>}
            
        </div>

        <section className={classes.section1}>

       
                <h2>Seigfried Vigier</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae, dolorum ipsam quam nam enim eos perferendis facere saepe tenetur sunt cum vel excepturi voluptatum cumque. Earum eligendi beatae odit.</p>


        </section>

        <section className={classes.section2}>
        

         <div className={classes.imageWrapper}>

           <img src={img1}  alt="image" />

          <h1>Studio, Paris</h1>
          <h3>75010 - rue des petites écuries </h3>
     </div>
        </section>

        </>

        
    );
};

export default MainNavigation;