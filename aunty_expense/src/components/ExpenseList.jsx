import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import ExpenseCard from "./ExpenseCard";

const ExpenseList = () => {
  const state = useSelector((state) => {
    return state.expenseReducer;
  });
  return (
    <Container>
      <Row className="explist">
        {state.expenses.map((expense, index) => {
          return <ExpenseCard expInfo={expense} key={index} />;
        })}
      </Row>
    </Container>
  );
};

export default ExpenseList;
