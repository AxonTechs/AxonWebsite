import React from 'react'
import { Card, Col, Container, Row} from 'react-bootstrap'
import "../../Asserts/Style/Strategy.css";


export default function Strategy() {
  return (
  <>
  <div className=' px-2 mid2'> 
  
  <Container>  
  <Row> 
      <Col md={3}>
      <Card className="strategy">
      <div className=' d-flex justify-content-center align-items-center circle-container '> 
      <h3> 100%</h3>
      </div>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-item-center'>STRAGEGY</Card.Title>
        <Card.Text  className='d-flex justify-content-center align-item-center'> EXPERT, 10 YEARS</Card.Text>
      </Card.Body>
    </Card>
      </Col>

      <Col md={3}>
      <Card className="strategy">
      <div className=' d-flex justify-content-center align-items-center circle-container '> 
      <h3> 100%</h3>
      </div>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-item-center'>DESIGN</Card.Title>
        <Card.Text  className='d-flex justify-content-center align-item-center'> EXPERT, 10 YEARS</Card.Text>
      </Card.Body>
    </Card>
      </Col>


      <Col md={3}>
      <Card className="strategy">
      <div className=' d-flex justify-content-center align-items-center circle-container '> 
      <h3> 100%</h3>
      </div>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-item-center'>DEVELOPMENT</Card.Title>
        <Card.Text  className='d-flex justify-content-center align-item-center'> EXPERT, 10 YEARS</Card.Text>
      </Card.Body>
    </Card>
      </Col>


      <Col md={3}>
      <Card  className="strategy">
      <div className=' d-flex justify-content-center align-items-center circle-container '> 
      <h3> 100%</h3>
      </div>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-item-center'>MARKETING</Card.Title>
        <Card.Text  className='d-flex justify-content-center align-item-center'> EXPERT, 10 YEARS</Card.Text>
      </Card.Body>
    </Card>
      </Col>

    </Row> 
  </Container>
  
  </div>
  
  
  </>
  )
}
