import { Container } from "react-bootstrap";
import React from 'react';

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>  
        
      </h1>
      <h6> El lugar de los pasteles felices</h6>
      <p className="cake">🎂</p>
    </Container>
  );
};
