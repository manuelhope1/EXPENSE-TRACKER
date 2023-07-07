import React, { useState } from "react";
import { Card, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteNewExpense } from "../slice/usersSlice";
import EditExpense from "./EditExpense";

const ExpenseCard = (props) => {
  const dispatch = useDispatch();
  const expense = props.expInfo;
  const deleteExpense = (e) => {
    e.preventDefault();
    dispatch(deleteNewExpense(expense.id));
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditExpense expInfo={props.expInfo} closeModal={handleClose} />
        </Modal.Body>
      </Modal>
      <Col sm="12" md="6" lg="4">
        <Card className="carddis">
          <Card.Body>
            <Card.Title className="cardtit">{props.expInfo.cate}</Card.Title>
            <div className="cardinfo">
              {" "}
              <Card.Subtitle className="mb-2  ">
                {props.expInfo.date}
              </Card.Subtitle>{" "}
              <Card.Subtitle className="mb-2  ">
                {props.expInfo.time}
              </Card.Subtitle>
            </div>
            <div>
              <h1 className="amount">GH₵{props.expInfo.amount} </h1>
            </div>
            <Card.Link href="#">
              <button className="butts" onClick={handleShow}>
                <i className="bx bxs-edit edit"></i>
              </button>
              <button className="butts" onClick={deleteExpense}>
                <i className="bx bxs-x-circle delete"></i>
              </button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ExpenseCard;
