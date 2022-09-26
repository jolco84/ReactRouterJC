import { Container } from "react-bootstrap";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4 justify-content-center text-center">Cuentanos, ¿en que te podemos ayudar?</h1>
      <Form className="text-center">
      <Form.Group className="mb-3 justify-content-center" controlId="formBasicEmail">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />        
      </Form.Group>

      <Form.Group className="mb-3 justify-content-center" controlId="formBasicTextArea">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
    </Container>
  );
};
