import React, {  useRef } from 'react';
import {createPortal} from 'react-dom'
import classes from './ContactDrawer.module.css'

const ContactDrawer = ({onClose}) => {
    // on cree 3 ref pour accéder à des element du DOM 

    
    const prenomRef = useRef()


    const nomRef = useRef()


    const emailRef = useRef()

    function handleSend(e){
        e.preventDefault()
        const nom = nomRef.current.value
    const prenom = prenomRef.current.value
    const email = emailRef.current.value

    console.log( "Nom", nom);
    console.log("Prenom", prenom);
    console.log("email", email);
    }
  


     return createPortal(

    
    
        <div className={classes.transparentDrop}>



        <aside className={classes.contact}>
              
              <div className={classes.btnContact}>
              <h1>Contact-</h1>

              <button onClick={onClose}>X</button>

              </div>
           

           <h2>Une demande particulère?<span className={classes.changeColor}> Parlons-en.</span></h2>
        
          

        <div className={classes.inputContainer}>

    

            <label htmlFor="prenom">Prénom</label>

            <input type="text"  ref={prenomRef} idù="prenom" />

            <label htmlFor="noom">Nom</label>

            <input type="text"  ref={nomRef} idù="nom" />

            <label htmlFor="noom">E-mail</label>

            <input type="text"  ref={emailRef} idù="nom" />

    
            </div>
             
             <div className={classes.btnContainer}>
               <div></div>
               <button onClick={handleSend}>Send</button>
               </div>

               
            
        </aside>


        </div>, 

        document.getElementById('contact')
       
     )
};

export default ContactDrawer;