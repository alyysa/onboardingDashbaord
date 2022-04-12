import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import ContentB from '../ContentA/ContentA';
import ContentC from '../ContentB/ContentB';
import ContentA from '../ContentC/ContentC';
import ContentD from '../ContentD/ContentD';
import Header from '../Header/Header';
import './Container.css';
//import logo from '../../../public/Edenlogo.png'


const Cointainer = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [displayname , setdisplayname] = useState('');
  return (
    <Container>
        <Header currentPage={currentPage} setcurrentPage={setcurrentPage}/>
        {currentPage === 1 && <ContentA setdisplayname={setdisplayname} setcurrentPage={setcurrentPage}/>}
        {currentPage === 2 && <ContentB setcurrentPage={setcurrentPage}/>}
        {currentPage === 3 && <ContentC setcurrentPage={setcurrentPage}/>}
        {currentPage === 4 && <ContentD displayname={displayname} />}
    </Container>
  )
}

export default Cointainer