import React from 'react';
import classes from './BiensDrawer.module.css';
import {createPortal} from 'react-dom';

const BiensDrawer = ({bien,onClose}) => {
    if(!bien) return null; 


    return  createPortal(
        <div className={classes.container}>

            <header className={classes.header}>
                <h1>Shtib.</h1>
                <button onClick={onClose}>X</button>
            </header>
            
        <section className={classes.imgDescription}>

           <div className={classes.image}>
            <img src="/img/app2.jpg" alt="bien2" />
           </div>

           <div className={classes.description}>
           <h1>Description</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nemo rem amet eveniet harum recusandae molestiae perferendis obcaecati? Aspernatur.</p>


            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nemo rem amet eveniet harum recusandae molestiae perferendis obcaecati? Aspernatur.</p>

           </div>

        </section>
            
        </div>, 
            document.getElementById('bien')
    );
};

export default BiensDrawer;