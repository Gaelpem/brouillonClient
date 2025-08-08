import React, { useEffect, useState } from 'react';

import classes from './Heure.module.css'

const Heure = () => {

    const[time, setTime] = useState({
        heures : 0, 
        minutes : 0, 
        secondes : 0
    })
    
    // recuperer l'heure actuelle et mettre à jourl'etat avec des nombres 
    function handleHeures(){
        const date =  new Date(); 

        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()

   setTime({
     heures : h, 
     minutes : m, 
     secondes : s
   })

    }


    let  ht =  time.heures 
    let mt  = time.minutes 
    let st  = time.secondes

     ht  = ht  < 10 ? "0" + ht  : ht; 
     mt   =  mt  < 10 ? "0" + mt  : mt;
     st    = st  < 10 ? "0" + st  : st ;

     const afficheHeure = `${ht} : ${mt} : ${st}`


    useEffect(()=>{
            
         handleHeures()
        const timer = setInterval(handleHeures, 1000)



     return() => clearInterval(timer)
      
    }, [])

    return (
        <div>
            <h4 className={classes.heures}>{afficheHeure} - Paris,fr</h4>
        </div>
    );
};

export default Heure;