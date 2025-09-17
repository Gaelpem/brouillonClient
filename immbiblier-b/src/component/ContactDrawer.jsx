import React, {  useRef, useState } from 'react';
import {createPortal} from 'react-dom'
import classes from './ContactDrawer.module.css'

const ContactDrawer = ({onClose}) => {
    // on cree 3 ref pour accéder à des element du DOM 

    const [error,  setError] = useState(true)

    const prenomRef = useRef()
    const nomRef = useRef()
    const emailRef = useRef()

    function handleSend(e){
        e.preventDefault()

       // on met le focus sur prenom car c'est le premier input
       prenomRef.current.focus()
 
         //  On récupère les valeurs des champs
       const prenom = prenomRef.current.value
       const nom = nomRef.current.value
       const email = emailRef.current.value
     
       if(!prenom || !nom || !email){
          setError(false)
       }

    }

  
     return createPortal(
    
        <div className={classes.transparentDrop}>
    
        <aside className={classes.contact}>


            <div className={classes.btnEspace}>
            <div></div>
        <button onClick={onClose}>X</button>
               </div>
               <h1>Contact-</h1>
               <h2>Une demande particulère?<span className={classes.changeColor}> Parlons-en.</span></h2>
               <div className={classes.inputContainer}>

            <label htmlFor="prenom">Prénom</label>

            <input type="text"  ref={prenomRef} id="prenom" />


            <label htmlFor="nom">Nom</label>

            <input type="text"  ref={nomRef} id="nom" />

            <label htmlFor="email">E-mail</label>

            <input type="text"  ref={emailRef} id="email" />

    
            </div>
             
             <div className={classes.btnContainer}>
               <div></div>
                   
                   <div className={classes.btnArrow}>

               <button onClick={handleSend}>Envoyer
               </button>
                </div>

               </div>
               {!error && <p style={{color : "red",
                fontWeight  : 300}}>Vous devez remplir tous les champs avant d'envoyer.</p>}
        </aside>

        </div>, 

        document.getElementById('contact')
       
     )
};

export default ContactDrawer;