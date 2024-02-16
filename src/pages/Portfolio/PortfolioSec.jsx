import React from 'react'
import "../../Asserts/Style/PortfolioSec.css"
import { Col, Container, Row } from 'react-bootstrap'

export default function PortfolioSec() {
  return (
   <>
   <hr></hr>

   
   <Container>
  <Row>
   <Col lg={6}>
    <div>
     <h3 className='Portfolio-Color'> PORTFOLIO</h3> 
    </div>
    </Col> 

    <Col lg={6}>
    <div>
  <h3 className='About-Color2'>
    <a href='/' className=' mx-2'>Home</a> | <a href='/portfolio' className=' About-Color2 link mx-2'>Portfolio</a>
  </h3>
</div>

    </Col>
   </Row>
  </Container> 

<div className='Portfolio-Back-Color'> 
<Container>
<div>
<h1 className='Axon-brings'> OVER 200</h1>
<h1 className='Axon-brings'> HAPPY CLIENT WORLDWIDE</h1>

<div className='col-md-8 fortunate my-5 '>
<p className='Axon-brings2 '> We’re fortunate to work with fantastic clients from across the globe in over 11 countries on development,      design & marketing projects.</p>
</div>
</div>
</Container>
</div>
   


   
   
   
   
   
   
   
   </>
  )
}
