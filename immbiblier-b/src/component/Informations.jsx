import React from 'react';
import classes from './Informations.module.css'

const Informations = () => {
    return (
        <aside className={classes.container}>
              <div className={classes['titre']}>
                  <h3 className={classes.titre}>General informations.</h3>
              </div>

              <div className={classes.informations}>
                <p>tél : +33 7 99 88 11 22</p>
                <p>e-mail: seigfriedvigier@gmail.com</p>
                <p>Paris, France</p>
              </div>


        </aside>
    );
};

export default Informations;