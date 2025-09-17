import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import BienDetail, {loader as loaderDetail} from './pages/BienDetail';
import Home from './component/Home';
import Biens,{loader as biensLoader} from './pages/biens';

const router = createBrowserRouter([
  {
    path : '/', 
    element : <Root/>, // main layout : navigation
    children : [
      {index : true, element : <Home/>},
      {path : 'biens', element : <Biens/>, loader: biensLoader},
      {path: '/bienDetail/:id', element : <BienDetail/>, loader: loaderDetail}
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