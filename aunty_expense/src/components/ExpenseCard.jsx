import React from "react";
import { Card } from "react-bootstrap";

const ExpenseCard = () => {
  return (
    <Card className="carddis">
      <Card.Body>
        <Card.Title className="cardtit">Food and drinks</Card.Title>
        <div className="cardinfo">
          {" "}
          <Card.Subtitle className="mb-2  ">23/07/2000</Card.Subtitle>{" "}
          <Card.Subtitle className="mb-2  ">07:30am</Card.Subtitle>
        </div>
        <Card.Text>
          <h1 className="amount">GH₵100.00 </h1>
        </Card.Text>
        <Card.Link href="#">
          <button className="butts">
            <i className="bx bxs-edit edit"></i>
          </button>
          <button className="butts">
            <i class="bx bxs-x-circle delete"></i>
          </button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ExpenseCard;
