import React, { Component } from 'react'
import './style/App.css'
import MyNavbar from './components/Navbar';
import AddForm from './components/AddForm';
import VerticalBar from './components/VerticalBar';
import { Container, Row, Col } from 'react-bootstrap'
class App extends Component {
  render() {
    return (
      <>
        <MyNavbar />
        <div className="h1">Create your TODO list</div>

        <Container >
          <Row  >
            <Col sm={1} > <VerticalBar /></Col>
            <Col sm={3}>  <AddForm /> </Col>
            <Col sm={3}><div className="vl"></div></Col>
          </Row>
        </Container>


      </>


    )
  }
}

export default App

