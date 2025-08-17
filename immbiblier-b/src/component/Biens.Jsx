import React, { useState } from 'react';
import classes from './Biens.module.css'

export const BIENS = [
    { id: 1,location: "Paris, France",image: "/img/app1.jpg" },
    { id: 2,location: "Nice, France",image: "/img/app2.jpg",},
    { id: 3, location: "Marseille, France", image: "/img/app3.jpg"},
  ];


const Biens = () => {
  
    const [showBien, setShowBien] = useState(false)
      function handleShow(){
        setShowBien(prev=>prev.concat{
            mf
        })
      }
    return (
        <div>
            <ul>
                <li></li>
            </ul>
            
        </div>
    );
};

export default Biens;