import React from 'react';
import classes from './BiensDrawer.module.css';
import { createPortal } from 'react-dom';

const BiensDrawer = ({ bien, onClose }) => {
  if (!bien) return null; // sécurité

  return createPortal(
    <div className={classes.container}>

        <header className={classes.header}>
          <h1>Shtib.</h1>
          <button onClick={onClose}>[X]</button>
        </header>

        <section className={classes.imgDescription}>

          <div className={classes.image}>
            <img src={bien.image}/>
            <img src={bien.image1}/>
          </div>

          <div className={classes.description}>
            <h1>Description</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorem nihil excepturi aut suscipit deleniti, tempora quaerat in dolore facere error laboriosam.</p>
          </div>
        </section>
  
    </div>,
    document.getElementById('bien') // assure-toi que ce noeud existe dans index.html
  );
};

export default BiensDrawer;
