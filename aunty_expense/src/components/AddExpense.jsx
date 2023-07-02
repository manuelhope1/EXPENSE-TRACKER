import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const AddExpense = () => {
  return (
    <Form>
      <Row>
        <Col md="6">
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" autoComplete="off" />{" "}
            </Form.Group>
          </Row>
        </Col>
        <Col md="6">
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" name="time" autoComplete="off" />{" "}
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          {" "}
          <Form.Select aria-label="Default select example">
            <option>Category of Expense</option>
            <option value="1">Food and Drink</option>
            <option value="2">Accomodation</option>
            <option value="3">Transportation</option>
            <option value="4">Housing and Rent</option>
            <option value="4">Miscellaneous</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              name="date"
              autoComplete="off"
              placeholder="Enter Amount"
            />{" "}
          </Form.Group>
        </Col>
        <Col md="6">
          <Button className="add">RECORD</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddExpense;
