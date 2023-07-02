
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import AddExpense from './components/AddExpense'
import TrackBoard from './components/TrackBoard';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <>
      <Container>
        <h1 className='header'>EXPENSES TRACKER</h1>
        <Row>
          <Col md="6" > <AddExpense /> </Col>
          <Col md="6"><TrackBoard /></Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "30px" }}><ExpenseList /></Container>
    </>
  );
}

export default App;
