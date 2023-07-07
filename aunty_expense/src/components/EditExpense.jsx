import React, { useState } from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editNewExpense } from "../slice/usersSlice";

const EditExpense = (props) => {
  const [date, setDate] = useState(props.expInfo.date);
  const [time, setTime] = useState(props.expInfo.time);
  const [cate, setCate] = useState(props.expInfo.cate);
  const [amount, setAmount] = useState(props.expInfo.amount);
  const expense = props.expInfo;
  const dispatch = useDispatch();
  console.log(cate);

  const submitChange = (e) => {
    e.preventDefault();
    const newData = {
      id: expense.id,
      date,
      time,
      cate,
      amount,
    };
    dispatch(editNewExpense({ id: expense.id, newData }));
    props.closeModal();
  };
  return (
    <Form>
      <Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={date}
            autoComplete="off"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />{" "}
        </Form.Group>
      </Row>
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
      </Row>
      <Row>
        <Button className="add" onClick={submitChange}>
          SAVE CHANGES
        </Button>
      </Row>
    </Form>
  );
};

export default EditExpense;
