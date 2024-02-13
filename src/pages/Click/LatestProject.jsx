import React from 'react'
import "../../Asserts/Style/LatestProject.css";
import {  Card, Col, Container, Row } from 'react-bootstrap';

export default function LatestProject() {
  return (
 <>
  <Container>
  <div className='col-lg-12 d-flex justify-content-center align-items-center my-4'>
  <h1 className='Latest'> LATEST PROJECT</h1> 
  </div>
  </Container> 
  <div className='mx-1 my-3'>
 <Row>
      <Col>
        <Card className='LatestCard'>
          <Card.Img src="https://axontechs.com/wp-content/uploads/2021/07/settilone.jpg" />
          <Card.Body>
            <Card.Title className='d-flex justify-content-center align-items-center SetTil'>SET'TIL ONE </Card.Title>
            <Card.Text className= "d-flex justify-content-center align-items-center BabyShower"> BABY SHOWER </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>


 
 
 
 
 
 
 
 
 
 
 
 
 
 </>
  )
}





       
   