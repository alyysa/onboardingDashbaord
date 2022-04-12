import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import PersonIcon  from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import './ContentA.css';
import { purple } from '@mui/material/colors';
const ContentA = ({setcurrentPage}) => {
const [currenttab, setcurrenttab] = useState(1);


  return (
      <>
      <Row className='d-flex justify-content-center m-3'>
        <Col xs={12} sm={12} md={9}  xl={6} className="d-flex align-items-center flex-column">
        <h2 className='head1 my-3'>How are you planning to use Eden?</h2>
        <p className='head2 my-3'>We'll streamline your setup experience accordingly.</p>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center my-3'>
        <Col xs={5} sm={4} md={3} xl={2} 
        className={"d-flex flex-column box1 p-3 rounded my-3 " +
        (currenttab === 1 ? "purpleclass" : "nonpurpleclass")
    }
        onClick={()=>setcurrenttab(1)}
    >
        <PersonIcon fontSize='large' className='m-2' />
        <div className='fw-bold m-2'>For myself</div>
        <div className='m-2'> Write better. Think more Clearing. Stay organized</div>
        </Col>
        <Col xs={1} sm={1} md={1} xl={1}>
        </Col >
        <Col xs={5} sm={4} md={3} xl={2}  className={"d-flex flex-column box1 p-3 rounded my-3 " +
        (currenttab === 2 ? "purpleclass" : "nonpurpleclass")
    }
    onClick={()=>setcurrenttab(2)}

    >
        <GroupsIcon fontSize='large' className='m-2' />
        <div className='fw-bold m-2'>With my team</div>
        <div className='m-2'> Wikis, docs, tasks & projects, all in one place</div>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center p-0 my-3'>
            <Col xs={11} sm={9} md={7}  xl={5} className="d-flex justify-content-center p-0 my-3">
            <Button className='button1 w-100 my-3 ' onClick={()=>setcurrentPage(3)}> Create Workspace</Button>
            </Col>
      </Row>
      </>
  )
}

export default ContentA