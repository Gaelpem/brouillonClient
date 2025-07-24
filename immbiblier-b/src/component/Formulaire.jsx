import React from 'react';
import classes from './Formulaire.module.css'
const Formulaire = () => {
    return (
       <section className={classes.container}>

           <div className={classes.formulaire}>


                <form className={classes.formContainer}>

                 <div className={classes.info1}>

                 <label htmlFor="" className={classes.label}>Prenom :</label>
                 <input type="text" />

                 <label htmlFor="" className={classes.label}>Nom :</label>

                 <input type="text" />

                 </div>

                 <div className={classes.info2}>

                 
                 <label htmlFor="" className={classes.label}>E-mail :</label>
                 <input type="email" />

                 <label htmlFor="" className={classes.label}>Message:</label>
                 <textarea >

                 </textarea>
                 <button className={classes.button}>Envoyer</button>



                 </div>


               

                </form>
         
              </div>
              
         
       </section>
    );
};

export default Formulaire;