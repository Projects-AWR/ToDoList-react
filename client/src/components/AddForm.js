import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export class AddForm extends Component {
  render() {
    return (
      <Form style={{ width: '100%', margin: '1rem' }}>
        <Form.Group controlId="exampleForm.ControlInput1" >
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="add title" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Task</Form.Label>
          <Form.Control as="textarea" placeholder="add note" rows={7} />
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Time needed</Form.Label>
          <Form.Control type="range" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
    )
  }
}

export default AddForm
