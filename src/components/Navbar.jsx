import { Navbar, Container } from "react-bootstrap";
// importar el componente Link de la libreria react-router-dom
import { Link } from "react-router-dom";
import React from 'react';


export default function Navigation() {
  return (
    
      <Navbar bg="danger">
        <Container className="justify-content-start">
          
          {/* Hacemos uso del componente Links para indicar adonde ir al seleccionar cada opcion */}
          <Link to="/" className="text-white ms-3 text-decoration-none ">
            Home 🏠
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            Contacto 📙 
          </Link>
        </Container>
        <Navbar.Brand className="text-white ms-3 justify-content-end">Happy Cake 🍰</Navbar.Brand>
      </Navbar>
    
  );
}
