import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import NuestrosProductos from './components/NuestrosProductos';
import Prensa from './components/Prensa';
import Contacto from './components/Contacto';
import Vino from './components/Vino';
import Tinkunacotorrontes from './components/Tinkunacotorrontes';
import Lamaca from './components/LaMaca';


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
  element: <Lamaca/>
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
},
{
  path: '/tinkunaco-malbec',
  element: <Vino />,
},
{
  path: '/tinkunaco-torrontes',
  element: <Tinkunacotorrontes />
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
