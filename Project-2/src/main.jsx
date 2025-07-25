import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,createRoutesFromElements,Route } from 'react-router-dom';
import App from './App';
import FormSuccess from './Components/FormSuccess/FormSuccess'; 
import './index.css';


 


const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>} >
       <Route path="/form-success" element={<FormSuccess/>}/>
      </Route>
    )
  )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
