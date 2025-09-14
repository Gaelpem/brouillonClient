import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root';
import BienDetail from './pages/BienDetail';
import Home from './component/Home';


const router = createBrowserRouter([
  {
    path : '/', 
    element : <Root/>, 
    children : [
      {index : true, element : <Home/>},
      {path: '/bienDetail/:id', element : <BienDetail/>}
    ]
  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router = {router}/>
        
    </div>
  );
};

export default App;