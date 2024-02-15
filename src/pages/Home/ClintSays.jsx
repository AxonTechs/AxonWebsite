import React from 'react'
import { Container } from 'react-bootstrap'
import "../../Asserts/Style/ClintSays.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GoDash } from "react-icons/go";
import ScrollAnimation from 'react-awesome-reveal';


export default function ClintSays() {
  return (
   <>  
   <div className=' testimonial bk'>  
   <Container>
   <ScrollAnimation animateIn="fadeIn" duration={400} offset={1000} triggerOnce={true}> 
  <div>
   <h3 className=' Clintsays d-flex justify-content-center'> WHAT CLIENT SAYS?</h3>
  </div>
   <div className=' d-flex justify-content-center align-items-center '>
  <img src="https://axontechs.com/wp-content/uploads/2021/07/blabs.png" alt="" /> 
  </div>
  <div>
    <p className=' d-flex justify-content-center align-items-center Outstanding'>
        Outstanding experience. The team works great and always on time with deadline Great experience with custom WordPress development.
    </p>
</div> 

<div>
<h4 className='d-flex justify-content-center align-items-center Blabs'> BLABS SRL - WEB AGENCY CATAINA </h4> 
 <h1 className='d-flex justify-content-center align-items-center DoubleQou'> <RiDoubleQuotesL /> </h1>
</div> 
<h1 className='d-flex justify-content-center align-items-center Dash'> <GoDash className='display-1' /></h1>
</ScrollAnimation> 
   </Container>
   </div>
   </>
  )
}
