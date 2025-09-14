import React from 'react';
import { Link, useParams } from 'react-router-dom';
import biensData from "../data/biens.json"
import classes  from "./BienDetail.module.css"

const BienDetail = () => {
    const {id} = useParams()
    const bien = biensData.find((b)=> b.id === parseInt(id,10))
    if(!bien){
       return  (
        <div className={classes.introuvalble}>
          <p>Biens introuvalble</p>
          <Link to = '/'>retour</Link>
        </div>
        )
    }
    return (
       
        <section className={classes.imgDescription}>

          <div className={classes.image}>

           <div className={classes.imgPrincipal}>
           <img src={bien.image}/>
           </div>
             
             <div className={classes.items}>
             <img src={bien.image1}  />
             <img src={bien.image2}  />
             <img src={bien.image3}  />
             </div>


          </div>

          <div className={classes.description}>
            <h1>Description</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorem nihil excepturi aut suscipit deleniti, tempora quaerat in dolore facere error laboriosam.</p>
          </div>
        </section>
    );
};

export default BienDetail;