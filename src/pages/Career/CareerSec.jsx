import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "../../Asserts/Style/CareerSec.css"

export default function CareerSec() {
  return (
  <>
   <hr />

<Container>
  <Row>
    <Col lg={6}>
      <div>
        <h3 className='Career-Color'> CAREER</h3>
      </div>
    </Col>

    <Col lg={6}>
      <div>
        <h3 className='Career-Color2'> Home | Career </h3>
      </div>
    </Col>
  </Row> 
</Container>  

<div className='Career-Background'>
<Container>
<Col className=' d-flex justify-content-end align-items-end' lg= {11}>
<Card className='Career-Card'>
      <Card.Body>
        <Card.Title><h2>PEOPLE 'JUST LIKE YOU' WORK HERE </h2></Card.Title>
        <Card.Text>
        Are you looking for a job, or do you want to make a career? If you are looking for a company that adds up something meaningful in your life, gives you an opportunity to challenge yourself and learn new skills, then AXON Technologies is the right place for you..
        </Card.Text>
      </Card.Body>
    </Card>

</Col>

</Container>



</div>
  
  
  </>
  )
}
