import React from 'react';
import BiensList from './BiensList';
import biensData from "../data/biens.json";
import { useLoaderData } from 'react-router-dom';

export async function loader(){
  return biensData 
}

const Biens = () => {
   const biens = useLoaderData()
    return (
      <>
         <BiensList biens = {biens}/>
      </>
    )
};

export default Biens;

