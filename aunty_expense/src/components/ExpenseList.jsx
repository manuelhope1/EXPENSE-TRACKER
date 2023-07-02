import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import ExpenseCard from "./ExpenseCard";

const ExpenseList = () => {
  return (
    <Container>
      <Row className="explist">
        <Col md="3">
          <ExpenseCard />
        </Col>{" "}
        <Col md="3">
          <ExpenseCard />
        </Col>{" "}
        <Col md="3">
          <ExpenseCard />
        </Col>
      </Row>
    </Container>
  );
};

export default ExpenseList;
