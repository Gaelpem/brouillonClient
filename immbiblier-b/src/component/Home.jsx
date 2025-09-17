import React from 'react';

import Footer from './Footer';
import Biens from '../pages/biens';
import biensData from '../data/biens.json';
import img1  from '../assets/img1.jpg'; 
import classes from './Home.module.css'
import BiensList from '../pages/BiensList';

const Home = () => {
    return (
        <>

       <section className={classes.section1}>
       <h1>Seigfried Vigier</h1>
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
           <BiensList biens = {biensData}/>
        </section>


        <footer>
            <Footer/>
        </footer>
        </>
    );
};

export default Home;