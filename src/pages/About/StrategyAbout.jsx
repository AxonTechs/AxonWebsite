import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "../../Asserts/Style/StrategyAbout.css"
import { RiEmotionHappyLine } from "react-icons/ri";
import { VscFiles } from "react-icons/vsc";
import { IoMdPeople } from "react-icons/io";
import { FiClock } from "react-icons/fi";

export default function StrategyAbout() {
  return (
   <>
    <>
  <div className=' px-2 mid3'> 
  
  <Container>  
  <Row>  
      <Col md={3}>
      <Card className="strategy">
      <div className=' d-flex justify-content-center align-items-center  '> 
      <h1> <VscFiles/></h1>
      </div>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-item-center'>2,2500</Card.Title>
        <Card.Text  className='d-flex justify-content-center align-item-center'> PROJECT FINISHED </Card.Text>
      </Card.Body>
    </Card>
      </Col>

      <Col md={3}>
      <Card className="strategy">
      <div className=' d-flex justify-content-center align-items-center '> 
      <h1> <RiEmotionHappyLine/></h1>
      </div>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-item-center'>2,000</Card.Title>
        <Card.Text  className='d-flex justify-content-center align-item-center'> HAPPY CLIENT</Card.Text>
      </Card.Body>
    </Card>
      </Col>


      <Col md={3}>
      <Card className="strategy">
      <div className=' d-flex justify-content-center align-items-center '> 
      <h1>  <IoMdPeople/></h1>
      </div>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-item-center'>650</Card.Title>
        <Card.Text  className='d-flex justify-content-center align-item-center'> HAPPY PEOPLE</Card.Text>
      </Card.Body>
    </Card>
      </Col>


      <Col md={3}>
      <Card  className="strategy">
      <div className=' d-flex justify-content-center align-items-center '> 
      <h1> <FiClock /></h1>
      </div>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-item-center'>10,500,000</Card.Title>
        <Card.Text  className='d-flex justify-content-center align-item-center'> HAPPY HOUR</Card.Text>
      </Card.Body>
    </Card>
      </Col>
    </Row>  
 
  </Container>
  
  </div>
  
  
  </>
   
   </>
  )
}
