import React from 'react'
import ReactDOM from 'react-dom/client'
import { Delivery } from './components/delivery/Delivery'
import { Footer } from './components/footer/Footer'
import { Nav } from './components/nav/Nav'
import { Products } from './components/products/Products'
import { Schedule } from './components/schedule/Schedule'
import { Viewmain } from './components/viewmain/Viewmain'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav menuArr={["INICIO", "PROMOS", "SALSAS", "CARTA", "AYUDA"]}/>
    <Viewmain contactArr={["WhatsApp", "Facebook", "Llamanos"]}/>
    <Delivery/>
    <Schedule/>
    <Products/>
    <Footer/>
  
  </React.StrictMode>
)
