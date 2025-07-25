// Logo.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Logo.css'; 

const Logo = () => {
  const location = useLocation(); // ← récupère le chemin actuel

  // On définit la classe CSS selon le chemin
  const logoClass = location.pathname === '/' 
    ? 'logo-white' 
    : location.pathname === '/about'
    ? 'logo-black' 
    : 'logo-default'; 
     location.pathname ==='/contact'
    ? 'logo-black'
    : 'logo-default'

  return (
    <div className={logoClass}>
   
      <h1 style={{ fontSize : '1.8rem', 
               fontWeight : 400}}>Shtib.</h1>
    </div>
  );
};

export default Logo;
