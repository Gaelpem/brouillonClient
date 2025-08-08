import React, { useEffect, useState } from 'react'; 
// Import des hooks React : useState pour stocker l'heure, useEffect pour gérer l'intervalle

import classes from './Heure.module.css' 
// Import des styles CSS du composant

const Heure = () => {

    // État pour stocker les valeurs brutes de l'heure (heures, minutes, secondes)
    const [time, setTime] = useState({
        heures : 0, 
        minutes : 0, 
        secondes : 0
    })
    
    // Fonction qui récupère l'heure actuelle et met à jour l'état avec des nombres
    function handleHeures(){
        const date = new Date(); // Récupère la date/heure actuelle

        // Extraction des heures, minutes et secondes depuis l'objet Date
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        // Mise à jour de l'état avec les valeurs brutes (nombres)
        setTime({
            heures : h, 
            minutes : m, 
            secondes : s
        });
    }

    // Création de variables locales à partir de l'état actuel
    let ht = time.heures;
    let mt = time.minutes;
    let st = time.secondes;

    // Formatage pour ajouter un 0 devant si inférieur à 10
    ht = ht < 10 ? "0" + ht : ht;
    mt = mt < 10 ? "0" + mt : mt;
    st = st < 10 ? "0" + st : st;

    // Chaîne finale affichée dans le JSX
    const afficheHeure = `${ht} : ${mt} : ${st}`;

    // useEffect : lancé une seule fois au montage du composant
    useEffect(() => {
        handleHeures(); // Appel initial pour éviter d'afficher 00:00:00 à l'ouverture
        const timer = setInterval(handleHeures, 1000); // Appel toutes les secondes

        // Nettoyage : on supprime l'intervalle si le composant est démonté
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            {/* Affichage de l'heure formatée avec le style CSS associé */}
            <h4 className={classes.heures}>{afficheHeure} - <span className={classes.changeColor}>Paris,fr</span></h4>
        </div>
    );
};

export default Heure;
