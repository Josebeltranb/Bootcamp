"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {FloatingLabel, FormCheck, FormControl, FormGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Register() {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Form>
            <FormGroup className="mb-3" controlId="emailId">
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <FormControl type="text" placeholder="Ingese el email"/>
              </FloatingLabel>
            </FormGroup>

            <FormGroup className="mb-3" controlId="firstnameId">
              <FloatingLabel
                controlId="firstnameId"
                label="Nombre(s)"
                className="mb-3"
              >
                <FormControl type="text" placeholder="Ingrese el nombre"/>
              </FloatingLabel>
            </FormGroup>

            <FormGroup className="mb-3" controlId="lastnameId">
              <FloatingLabel
                controlId="lastnameId"
                label="Apellido(s)"
                className="mb-3"
              >
                <FormControl type="text" placeholder="Ingrese Apellido"/>
              </FloatingLabel>
            </FormGroup>

            <FormGroup className="mb-3" controlId="phoneId">
              <FloatingLabel
                controlId="phoneId"
                label="Telefono"
                className="mb-3"
              >
                <FormControl type="text" placeholder="Ingrese Apellido"/>
              </FloatingLabel>
            </FormGroup>

            <FormGroup className="mb-3" controlId="passwordId">
              <FloatingLabel
                controlId="passwordId"
                label="Password"
                className="mb-3"
              >
                <FormControl type="password" placeholder="Password"/>
              </FloatingLabel>
            </FormGroup>
            <FormGroup className="mb-3" controlId="formBasicCheckbox">
              <FormCheck type="checkbox" label="Acepto terminos y condiciones"/>
            </FormGroup>
            <Button variant="primary" type="button">
              Crear cuenta
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}