import React, { useState } from 'react';
import classes from './MainNavigation.module.css'
import ContactDrawer from './ContactDrawer';
import img1  from '../assets/img1.jpg'; 
import Heure from './Heure';
import Biens from './Biens.Jsx';
import Footer from './Footer';


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

            <Heure/>
            <nav>

                <li className={classes.link}><a href="#">home</a></li>
                <li className={classes.link}><a href="#">about</a></li>
            </nav>

            <button className = {classes.btn} onClick={openContact}>contact <span className={classes.changeColor}>US</span></button>


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
        <section className={classes.section3}>
            <Biens/>
        </section>

        <footer>
            <Footer/>
        </footer>

        </>

        
    );
};

export default MainNavigation;