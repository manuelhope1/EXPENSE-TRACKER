import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const TrackBoard = () => {
  const state = useSelector((state) => {
    return state.expenseReducer;
  });

  const [lastExp, setLastExp] = useState("");

  useEffect(() => {
    if (state.expenses.length === 0) {
      setLastExp("None");
    } else {
      const lastExpense = state.expenses[state.expenses.length - 1];
      setLastExp(lastExpense.cate);
    }
  }, [state.expenses]);

  return (
    <Container className="track">
      <Row>
        <Col md="5" className="records">
          <div className="total">
            <h1>{state.expenses.length}</h1>
            <h6>Expenses</h6>
          </div>
        </Col>
        <Col md="7" className="records">
          <div className="lasttran">
            <h4>Last Expense</h4>
            <span>{lastExp}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TrackBoard;
