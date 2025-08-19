import React from 'react';
import classes from './BiensDrawer.module.css';
import { createPortal } from 'react-dom';

const BiensDrawer = ({ bien, onClose }) => {
  if (!bien) return null; // sécurité

  return createPortal(
    <div className={classes.container}>

        <header className={classes.header}>
          <h1>Shtib.</h1>
          <button onClick={onClose}>X</button>
        </header>

        <section className={classes.imgDescription}>
          <div className={classes.image}>
            {/* on utilise les données du bien sélectionné */}
            <img src={bien.image} alt={bien.location} />
          </div>

          <div className={classes.description}>
            <h1>Description</h1>
            <p>{bien.description}</p>
          </div>
        </section>
  
    </div>,
    document.getElementById('bien') // assure-toi que ce noeud existe dans index.html
  );
};

export default BiensDrawer;
