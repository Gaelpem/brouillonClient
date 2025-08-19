import React, { useState } from 'react';
import classes from './Biens.module.css';
import BiensDrawer from './BiensDrawer';

export const biens = [
  { id: 1, location: "Paris, France", description: "Lorem ipsum dolor…", image: "/img/app1.jpg" },
  { id: 2, location: "Nice, France",  description: "Lorem ipsum dolor…", image: "/img/app2.jpg" },
  { id: 3, location: "Paris, France", description: "Lorem ipsum dolor…", image: "/img/app3.jpg" },
];

const Biens = () => {
  const [biens2] = useState(biens);
  const [selectedBien, setSelectedBien] = useState(null); // objet du bien cliqué

  function openBien(bien) {
    setSelectedBien(bien);        // on mémorise l’item cliqué
  }
  function closeBien() {
    setSelectedBien(null);        // on ferme
  }

  return (
    <div>
      <ul className={classes.bienContainer}>
        {biens2.map((bien) => (
          <li key={bien.id} className={classes.items}>
            <div className={classes.image}>
              <img src={bien.image} alt={bien.location} />
            </div>

            <div className={classes.localisationDescrip}>
              <div className={classes.localisation}>
                <h1>Localisation</h1>
                <h2>{bien.location}</h2>
              </div>

              <div className={classes.description}>
                {bien.description}
              </div>

              {/*  on passe le bine cliqué */}
              <button onClick={() => openBien(bien)}>[Voir plus...]</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Un seul Drawer, avec le bon objet */}
      {selectedBien && (
        <BiensDrawer
          bien={selectedBien}
          onClose={closeBien}
        />
      )}
    </div>
  );
};

export default Biens;
