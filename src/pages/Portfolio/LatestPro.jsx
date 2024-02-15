import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "../../Asserts/Style/LatestPro.css"
import { GoDash } from "react-icons/go";

export default function LatestPro() {
  return (
   <>
   
   <Container> 
  <div className='col-lg-12 d-flex justify-content-center align-items-center my-4'>
  <h1 className='Latest'> PROJECTS</h1> 
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
   
    <div> 
<h1 className='d-flex justify-content-center align-items-center Dash'> <GoDash className='display-1' /></h1>
<h5 className='d-flex justify-content-center align-items-center Blabs'> WE'D LOVE TO HEAR ABOUT YOUR PROJECT</h5> 

<div className='d-flex justify-content-center align-items-items my-4'>
<a class="btn btn-primary btn-outline btn-big " href="https://axontechs.com/contact/">Start Now</a>
</div>
</div> 

   
   
   
   
   
   
   
   </>
  )
}
