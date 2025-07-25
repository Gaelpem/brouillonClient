import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigations = () => {
    return (

        <div className='nav-bar'>
                
            <ul className='link'>

            <NavLink to="/" className={({isActive}) => isActive ? "active" : ""} >
               <li>home-</li>
            </NavLink>

            <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""} >
               <li>about-</li>
            </NavLink>

            <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""} >
               <li>contact</li>
            </NavLink>

            </ul>

        </div>

    );
};

export default Navigations;