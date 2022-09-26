import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home.jsx";
import Contacto from "./views/Contacto.jsx";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />      
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
