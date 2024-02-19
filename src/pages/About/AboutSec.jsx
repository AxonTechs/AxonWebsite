import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Asserts/Style/AboutSec.scss"

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
  <h3 className='About-Color2'>
    <a href='/' className=' mx-2'>Home</a> | <a href='/about' className=' About-Color2 link mx-2'>About</a>
  </h3>
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
  
<section class="pg-inner">
    <div class="container">
        <div class="col-md-8 col-lg-12 col-md-offset-2 col-sm-12">
            <div class="tabs-links d-flex justify-content-center align-items-center">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item active">
                        <a class="nav-link " id="a-bit-of-history-tab" data-toggle="tab" href="#a-bit-of-history" role="tab" aria-controls="a-bit-of-history" aria-selected="true">A bit of history</a>
                    </li>

                    
                    <li class="nav-item ">
                        <a class="nav-link " id="what-we-do-tab" data-toggle="tab" href="#what-we-do" role="tab" aria-controls="what-we-do" aria-selected="true">What we do</a>
                    </li>

                    </ul>
            </div>
	          <div class="tab-content pg-about text-center">
                    <div class="tab-pane  wow active in   animated" data-wow-delay="0.3s" id="a-bit-of-history" role="tabpanel" aria-labelledby="a-bit-of-history-tab"><p>AXON is a company that puts its focus on efficiency, innovation, and quality. The team at AXON includes passionate, creative, young, and bright-minded individuals who use state-of-the-art technology to bring clients results that help grow businesses, no matter how big or small they are. We have pride in ourselves for making good use of work ethic, integrity, and bringing end results. Throughout our time of working, AXON has been able to create and provide stunning designs and IT solutions while providing our clients promising results, to attain a better online existence.</p>
                  </div>

                    
                    <div class="tab-pane  " data-wow-delay="0.3s" id="what-we-do" role="tabpanel" aria-labelledby="what-we-do-tab"><p>Offering top-notch services regarding Web Application Development and Security, Mobile Application Development, Search Engine Optimization/App Store Optimization, UI/UX, 2D/3D modeling, Social media Marketing, Content writing; we at AXON will ensure that your bond with us prospers while we utilize our skills at best to serve your IT needs. It’s not in our nature to stall our friends and that’s only one of our ‘USP’, that our team puts their best efforts to meet your deadlines. It’s our job to keep you posted about your work’s progress and providing IT solutions with the best results in the quickest possible time is like our passion.</p>
              </div>

                    </div>        </div>
    </div>
</section>








  </>
  )
}
 