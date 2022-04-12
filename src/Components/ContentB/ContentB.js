import React from 'react'
import {  Button , Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import './ContentB.css';
const ContentB = ({setcurrentPage}) => {
  return (
    <>
    <Row className='d-flex justify-content-center my-3 p-0'>
      <Col xs={12} sm={12} md={9}  xl={6} className="d-flex align-items-center flex-column">
      <h2 className='head1 my-3'>Lets set up a home for all your work</h2>
      <p className='head2 my-3'>You can always create another workspace later.</p>
      </Col>
    </Row>  

    <Row className='d-flex justify-content-center my-3'>
      <Col xs={11} sm={9} md={7}  xl={4} className="d-flex flex-column px-0">
    
      <Form.Label className='fw-bold' htmlFor="basic-url">Workspace name</Form.Label>
      <InputGroup  className="w-100 my-2">
        <FormControl 
            placeholder='Eden'
            aria-label='Eden'
            aria-describedby='name-input'
            />

      </InputGroup>
      </Col>
    </Row> 

    <Row className='d-flex justify-content-center my-3 px-0 '>
      <Col xs={11} sm={9} md={7}  xl={4} className="d-flex flex-column px-0">
    
      <Form.Label className='fw-bolder' htmlFor="basic-url">Workspace URL <span className='fw-light text1'>(optional)</span></Form.Label>
      
      <InputGroup  className="my-2 text-secondary">
      <InputGroup.Text id="url-input">www.eden.com/</InputGroup.Text>
        <FormControl 
            placeholder='Example'
            aria-label='Example'
            aria-describedby='url-input'
            />

      </InputGroup>
      </Col>
    </Row>   

    <Row className='d-flex justify-content-center  my-3'>
            <Col xs={11} sm={9} md={7}  xl={4} className="d-flex justify-content-center px-0 my-3">
            <Button className='button1 w-100 my-3' onClick={()=>setcurrentPage(4)}> Create Workspace</Button>
            </Col>
      </Row>
    </>
  )
}

export default ContentB