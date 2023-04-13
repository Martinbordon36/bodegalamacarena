import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Lamacarena from './components/Lamacarena';
import NuestrosProductos from './components/NuestrosProductos';
import Prensa from './components/Prensa';
import Contacto from './components/Contacto';


const router = createBrowserRouter([
{
  path: '/',
  element: <Header />,
},

{
  index: true,
  element: <App />
},
{
  path: '/lamacarena',
  element: <Lamacarena />
},
{
  path: '/nuestros-productos',
  element: <NuestrosProductos />
},
{
  path: '/prensa',
  element: <Prensa />
},
{
  path: '/contacto',
  element: <Contacto />,
}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
