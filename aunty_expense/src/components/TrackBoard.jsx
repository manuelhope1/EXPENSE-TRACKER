import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TrackBoard = () => {
  return (
    <Container className="track">
      <Row>
        <Col md="5" className="records">
          <div className="total">
            <h1>0</h1>
            <h6>Expenses</h6>
          </div>
        </Col>
        <Col md="7" className="records">
          <div className="lasttran">
            <h4>Last Expense</h4>
            <ul>
              <l1>None</l1>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TrackBoard;
