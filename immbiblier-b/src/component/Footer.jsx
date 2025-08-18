import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.containerFooter}>

            <div className={classes.container}>

                <div className={classes.menuContact}>

                    <div className={classes.menu}>
                         <h1>Menu</h1>
                        <p>home</p>
                        <p>about</p>
                    </div>



                    <div className={classes.contact}>
                         <h1>Contact</h1>
                        <p>E-mail: seigfried@gmail.com</p>
                        <p>Phone: +33 7 99 88 11 22</p>
                        <p>Paris, France</p>
                        </div>

                </div>

            <div className={classes.droitLogo}>
                <p>©Tous Droits Réservés</p>
                <div className={classes.trait}></div>
                <h1>Shtib.</h1>
            </div>




            </div>
            
        </div>
    );
};

export default Footer;