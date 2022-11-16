import React from "react";
import Myimg from "./img/search_16px.png";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FormSelect, FloatingLabel, Form } from "react-bootstrap";

const Deneme = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="p-2" md="6" lg="3" sm="6" xs="6">
            <FloatingLabel controlId="floatingSelectGrid">
              <Form.Select aria-label="Floating label select example">
                <option>All Quotes</option>
                <option value="In Progress">In Progress</option>
                <option value="Approved">Approved</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col className="p-2" md="6" lg="5" xs="6" sm="6">
            <Form>
              <Form.Check type="radio" value="ascending" label="ascending" name="formHorizontalRadios" id="formHorizontalRadios1" />
              <Form.Check type="radio" value="descdending" label="descending" name="formHorizontalRadios" id="formHorizontalRadios2" />
            </Form>
          </Col>
          <Col className="p-2" md="12" lg="4" xs="12" sm="12">
            <InputGroup>
              <InputGroup.Text id="btnGroupAddon">
                <img className="ml-18" src={Myimg} alt="Logo" />
              </InputGroup.Text>
              <FormControl size="lg" type="text" placeholder="Search" />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Deneme;
