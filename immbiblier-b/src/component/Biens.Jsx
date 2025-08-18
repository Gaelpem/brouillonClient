import React, { useState } from 'react';
import classes from './Biens.module.css'
import BiensDrawer from './BiensDrawer';

export const biens = [
    { id: 1,location: "Paris, France",description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas assumenda commodi cumque exercitationem ab nam, nihil, rerumrepellendus  saepe.",
    image: "/img/app1.jpg" },


    { id: 2,location: "Nice, France",description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas assumenda commodi cumque exercitationem ab nam, nihil, rerum repellendus saepe.",
    image: "/img/app2.jpg",},

    { id: 3, location: "Paris, France", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas assumenda commodi cumque exercitationem ab nam, nihil, rerum repellendus saepe.",image: "/img/app3.jpg"},
  ];


const Biens = () => {
   
    const [showBien, setShow] =  useState(false)

    function openBien(){
        setShow(true)
    }

    function CloseBien(){
        setShow(false)
    }

    const [biens2] = useState(biens); 

     
    
        
        
  
    return (
        <div>

             <ul className={classes.bienContainer}>

                  {biens2.map((bien)=>(
                    <li key={bien.id} className={classes.items}>
                        <div className={classes.image}>
                            <img src={bien.image} alt={bien.location} loading="lazy" />
                        </div>

                        <div className={classes.localisationDescrip}>
                               <div className={classes.localisation}>
                                <h1>Localisation</h1>
                                <h2>{bien.location}</h2>
                               </div>

                             
                               <div className={classes.description}>
                                {bien.description}
                               </div>

                               <button onClick={openBien}>[Voir plus...]</button>
                          
                        </div>


                    </li>
                  ))}
                </ul>

                {showBien && (
        <BiensDrawer
          bien={showBien}
          onClose={CloseBien}
        />
      )}
 

                
        </div>
    );
};

export default Biens;