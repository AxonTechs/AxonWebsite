import React from 'react'
import "../../Asserts/Style/PortfolioSec.scss"
import { Col, Container, Row } from 'react-bootstrap'

export default function PortfolioSec() {
  return (
   <>
   <hr></hr>

   
   <Container>
  <Row>
   <Col lg={6} >
    <div>
     <h3 className='Portfolio-Color'> PORTFOLIO</h3> 
    </div>
    </Col> 

    <Col lg={6}>
    <div>
  <h3 className='About-Color2 col-sm-6 col-lg-12 col-md-12'>
    <a href='/' className=' mx-2'>Home</a> | <a href='/portfolio' className=' About-Color2 link mx-2'>Portfolio</a>
  </h3>
</div>

    </Col>
   </Row>
  </Container> 

<div className='Portfolio-Back-Color'> 
<Container>
<div>
<h1 className='Axon-brings d-flex justify-content-center align-items-center'> OVER 200</h1>
<h1 className='Axon-brings d-flex justify-content-center align-items-center'> HAPPY CLIENT WORLDWIDE</h1>

<div className='my-5 d-flex justify-content-center align-items-center'> 
<p className='Axon-brings2 d-flex justify-content-center align-items-center col-lg-8'> We’re fortunate to work with fantastic clients from across the globe in over 11 countries on development, design & marketing projects.</p>
</div>
</div>
</Container>
</div>
   


   
   
   
   
   
   
   
   </>
  )
}
