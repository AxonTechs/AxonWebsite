import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "../../Asserts/Style/BlogSec.css"

export default function BlogSec() {
  return (
  <>
  <hr></hr>

   
<Container>
<Row>
<Col lg={6}>
 <div>
  <h3 className='Blog-Color'> PORTFOLIO</h3> 
 </div>
 </Col> 

 <Col lg={6}> 
 <div>
 <h3 className='About-Color2'>
    <a href='/' className=' mx-2'>Home</a> | <a href='/blog' className=' About-Color2 link mx-2'>Blog</a>
  </h3>
</div> 

 </Col>
</Row>

<div className='mx-1 my-3'>
 <Row> 
      <Col> 
        <Card className='LatestCard'>
          <Card.Img src="https://axontechs.com/wp-content/uploads/2021/07/c3-scaled.jpg" />
          <Card.Body>
            <Card.Title className='d-flex justify-content-start align-items-start  BabyShower'>BY ADMIN | 4TH JULY 2021</Card.Title>
            <Card.Text className= "d-flex justify-content-start align-items-start SetTil"> HELLO WORLD </Card.Text> 
            <div>
            <Card.Title className= "d-flex justify-content-start align-items-start BabyShower WordPress"> Welcome to WordPress. This is your First Post. Edit or delete it, then start it writing</Card.Title>
          </div> 
          <a href="https://axontechs.com/hello-world/" class="btn btn-primary btn-outline btn-more">Read More</a>
          </Card.Body> 
        </Card> 
      </Col>
    </Row>
    </div>
    </Container> 
  
  </>
  )
}
