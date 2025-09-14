import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../component/MainNavigation';

const Root = () => {
    
    return (
        <div>
            <MainNavigation/>
            <Outlet/>

        </div>
    );
};

export default Root;