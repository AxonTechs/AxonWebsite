import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Asserts/Style/AboutSec.css"

export default function AboutSec() {
  return (
  <> 
  <hr></hr>
  <Container>
  <Row>
   <Col lg={6}>
    <div>
     <h3 className='About-Color'> About</h3> 
    </div>
    </Col> 

    <Col lg={6}>
    <div>
     <h3 className='About-Color2'> Home / About </h3> 
    </div>
    </Col>
   </Row>
  </Container> 

<div className='About-Back-Color'> 
<Container>
<div className=''>
<p className='Axon-brings'> AXON brings together a team of individuals who are enthusiastic and passionate about their skills and talents. AXON thrives on a challenge and complexity drives our team working at AXON to get it done. If a project has a specific problem, our IT engineers and consultants will see it through and deliver a fix. AXON has the experience and awareness to understand your efforts in establishing a business and ensures that your efforts do not go wasted in rubble.</p>

</div>


</Container>

</div>
  
  </>
  )
}
 