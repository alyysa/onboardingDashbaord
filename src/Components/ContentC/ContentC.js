import React from 'react';
import {  Button , Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import './ContentC.css';
const ContentC = ( {setcurrentPage ,setdisplayname} ) => {
  return (
    <>
    <Row className='d-flex justify-content-center my-3 p-0'>
      <Col xs={12} sm={12} md={9}  xl={6} className="d-flex align-items-center flex-column">
      <h1 className=' head3 my-3'>Welcome! First things first...</h1>
      <p className=' head4 fs-5 my-3'>You can always change them later</p>
      </Col>
    </Row>  

    <Row className='d-flex justify-content-center my-3'>
      <Col xs={11} sm={9} md={7}  xl={4} className="d-flex flex-column px-0 my-3">
    
      <Form.Label className='labeltext fw-bold' htmlFor="basic-url">Full Name</Form.Label>
      <InputGroup  className="my-1">
        <FormControl 
            placeholder='Steve Jobs'
            aria-label='Steve Jobs'
            aria-describedby='fullname-input'
            />

      </InputGroup>
      </Col>
    </Row> 

    <Row className='d-flex justify-content-center my-3 px-0 '>
      <Col xs={11} sm={9} md={7}  xl={4} className="d-flex flex-column px-0 my-3">
    
      <Form.Label className='fw-bolder labeltext' htmlFor="basic-url">Display Name</Form.Label>
      
      <InputGroup  className="my-1 text-secondary">
        <FormControl 
            placeholder='Steve'
            aria-label='Steve'
            aria-describedby='displayname-input'
            onChange={(e)=>setdisplayname(e.target.value)}
            />

      </InputGroup>
      </Col>
    </Row>   

    <Row className='d-flex justify-content-center  my-3'>
            <Col xs={11} sm={9} md={7}  xl={4} className="d-flex justify-content-center px-0 my-3">
            <Button className='button1 w-100 my-3' onClick={()=>setcurrentPage(2)}> Create Workspace</Button>
            </Col>
      </Row>
    </>
  )
}

export default ContentC