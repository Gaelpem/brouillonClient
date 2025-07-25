import React, {useEffect, useState } from 'react';

const Heure = () => {
    const [heureActuelle, setHeure]  = useState({
        heure: '', 
        min : '',
        sec : ''
    })
    
    function mettreHeure() {
        const date = new Date(); 
        setHeure({
            heure : date.getHours(), 
            min :  date.getMinutes(), 
            sec : date.getSeconds()
        })
    }
    useEffect(() => {
      const id = setInterval(()=>{
        mettreHeure()
      },1000); 
       // Nettoyage : stoppe l’intervalle quand le composant est démonté
  return () => clearInterval(id);
      }, []);

     let afficheHeures = ''; 
     
   let h = heureActuelle.heure < 10 ? '0' + heureActuelle.heure :heureActuelle.heure  
    let min  = heureActuelle.min < 10 ? '0' + heureActuelle.min : heureActuelle.min 
     let sec  = heureActuelle.sec < 10 ? '0' + heureActuelle.sec : heureActuelle.sec   
     
    afficheHeures = h + ':' + min + ':' + sec; 

    return (
        <div>
            <p>{afficheHeures}</p>
        </div>
    );
};

export default Heure;