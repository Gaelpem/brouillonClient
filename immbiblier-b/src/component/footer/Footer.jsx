import React from 'react';
import classes from './Footer.module.css'
import Heure from '../Heure';
const Footer = () => {
    return (
        <footer  className={classes.containerFooter}>

            <div className={classes.miniContainer}>
                          
              <div className={classes.menuContainer}>
                  <p style={{color : 'grey'}}>Menu</p> 
                  <p>home</p>
                  <p>about</p>
                  <p>contact</p>
              </div>
                      <div className={classes.heure}>
                            <Heure/>
                      </div> 
    
            <div className={classes.copyrates}>
                <p>©2025</p>
            </div>


            </div>


            <div className={classes.logo}>
                  <h1 className={classes.charac}>Shtib. </h1>
            </div>
        </footer>
    );
};

export default Footer;