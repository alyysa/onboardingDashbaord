import React from 'react'
import {  Button , Col , Row } from 'react-bootstrap';
import './ContentD.css';
import DoneIcon from '@mui/icons-material/Done';
const ContentD = ({displayname}) => {
  return (
      <>
      <Row className='d-flex justify-content-center my-5 p-0'>
        <Col className="d-flex align-items-center flex-column my-3">
        <div className='doneicon my-3'><DoneIcon /></div>
        </Col>
        </Row>
      <Row className='d-flex justify-content-center mt-5 p-0'>
      <Col xs={12} sm={12} md={9}  xl={6} className="d-flex align-items-center flex-column">
      <h1 className=' head3 my-3'>Congratulations, {displayname ? displayname : <span>Eren</span>}!</h1>
      <p className=' head2 my-3'>You have completed onboarding, you can start using Eden!</p>
      </Col>
    </Row> 

    <Row className='d-flex justify-content-center '>
            <Col xs={11} sm={9} md={7}  xl={4} className="d-flex justify-content-center px-0 ">
            <Button className='button1 w-100 my-3'> Launch Eden</Button>
            </Col>
      </Row>
      </>
  )
}

export default ContentD