import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Header.css'
const Header = ({currentPage,setcurrentPage}) => {
  return (
    <>
    <Row className='d-flex justify-content-center m-3'>
        <Col xs={10} sm={8} md={6} lg={6} className="d-flex align-items-center flex-column m-3">

        <div className='heading m-3 fw-bold'> <img src="images/Edenlogo.png" alt="logo"></img>Eden</div>
    </Col>
    </Row>
    <Row className='d-flex justify-content-center m-3'>
        <Col xs={10} sm={8} md={6} lg={6} className="d-flex align-items-center flex-column ">

        <div className='d-flex justify-content-center align-items-center'>

            <div className='circle activepage' onClick={()=>setcurrentPage(1)}>1</div> 
            <div className='line activepage'></div> 
            <div className={currentPage>=2 ? "line activepage" : "line"}></div> 
            <div className={currentPage>=2 ? "circle activepage" : "circle"} onClick={()=>setcurrentPage(2)}>2</div> 
            <div className={currentPage>=2 ? "line activepage" : "line"}></div> 
            <div className={currentPage>=3 ? "line activepage" : "line"}></div> 
            <div className={currentPage>=3 ? "circle activepage" : "circle"} onClick={()=>setcurrentPage(3)}>3</div> 
            <div className={currentPage>=3 ? "line activepage" : "line"}></div> 
            <div className={currentPage>=4 ? "line activepage" : "line"}></div> 
            <div className={currentPage>=4 ? "circle activepage" : "circle"} onClick={()=>setcurrentPage(4)}>4</div> 
            
        </div>
        </Col>
        </Row>
        </>
  )
}

export default Header