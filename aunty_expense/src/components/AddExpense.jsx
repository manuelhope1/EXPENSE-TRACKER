import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewExpense } from "../slice/usersSlice";
import { v4 } from "uuid";

const AddExpense = () => {
  const id = v4();
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [cate, setCate] = useState("");
  const [amount, setAmount] = useState("");
  const submitChange = (e) => {
    e.preventDefault();
    const newExpense = {
      date,
      time,
      cate,
      amount,
      id,
    };
    dispatch(addNewExpense(newExpense));
    setDate("");
    setTime("");
    setCate("");
    setAmount("");
    console.log(newExpense);
  };

  return (
    <Form>
      <Row>
        <Col md="6">
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                autoComplete="off"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
              />{" "}
            </Form.Group>
          </Row>
        </Col>
        <Col md="6">
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                autoComplete="off"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                value={time}
              />{" "}
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          {" "}
          <Form.Select
            aria-label="Default select example"
            name="cate"
            autoComplete="off"
            onChange={(e) => {
              setCate(e.target.value);
            }}
            value={cate}>
            <option>Category of Expense</option>
            <option value="Food and Drink">Food and Drink</option>
            <option value="Accomodation">Accomodation</option>
            <option value="Transportation">Transportation</option>
            <option value="Housing and Rent">Housing and Rent</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              name="amount"
              autoComplete="off"
              placeholder="Enter Amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={amount}
            />{" "}
          </Form.Group>
        </Col>
        <Col md="6">
          <Button className="add" onClick={submitChange}>
            RECORD
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddExpense;
