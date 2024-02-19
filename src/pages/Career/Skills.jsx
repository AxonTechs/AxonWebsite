import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import "../../Asserts/Style/Skills.scss"
import { GoDash } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { FaAngleDown } from 'react-icons/fa';
export default function Skills() {
    const selectPosition = (position) => {
    console.log(`Selected position: ${position}`);
      }; 

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform any actions with the form data here, like sending it to a server.
        console.log('Form Data:', formData);
      };
  return (
  <> 
  
<Container> 
    <Row>
<Col lg={4}>
<Card className='skills-card my-4'>
      <Card.Body>
        <Card.Title> <h1 className='Ol-color'>01</h1></Card.Title> 
        <div> 
        <h1 className='Dash2'> <GoDash className='display-2' /></h1>
        </div>
        <Card.Text> 
            <div>
            <sapn className='HTML'>HTML/CSS AND GRAPHIC DESIGN </sapn> 
            <span className='Experience'> Experience: 2+Years</span>
            </div> 
            <span className='Experience'> Qualification: BS or Equivalent</span>
        </Card.Text> 
        <div className="apply-for-job ">
      <button
        onClick={() => selectPosition('HTML/CSS_AND_GRAPHIC_DESIGN')}
        className="btn btn-primary btn-outline btn-big my-3">
        Apply
      </button> 
    </div>
      </Card.Body>
    </Card>
</Col>

<Col lg={4}>
<Card className='skills-card my-4'>
      <Card.Body>
        <Card.Title> <h5 className='Ol-color'>Skills</h5></Card.Title>
        <Card.Text> 
            <div>
            <h6 className='Dott'><GoDotFill /></h6>  
            <span className='Coding'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div>  
            <div>
            <h6 className='Dott2'><GoDotFill /></h6>  
            <span className='Coding2'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div>  
            <div>
            <h6 className='Dott3'><GoDotFill /></h6>  
            <span className='Coding3'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div> 
            <div>
            <h6 className='Dott4'><GoDotFill /></h6>  
            <span className='Coding4'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div>
            <div>
            <h6 className='Dott5'><GoDotFill /></h6>  
            <span className='Coding5'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div>
        </Card.Text>  
      </Card.Body> 
    </Card>  
</Col> 

<Col lg={4}>

<Card className="SkillsCard"> 
<div className='SUPERHEROES'>
<span><strong>SUPERHEROES</strong> APPLY HERE</span>
</div> 
<div className='GetBack my-2'>
<span> We will get back to you within 48Hours</span>
</div>
<Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNamee">
        <Form.Label> Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label className='mt-2'> Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formSubject">
      <Form.Label className='mt-2'>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </Form.Group> 

      <Form.Group controlId="formPosition">
  <Form.Label className='mt-2'>Position</Form.Label>
  <div className="position-relative">
    <Form.Control
      as="select"
      name="position"
      value={formData.position}
      onChange={handleChange}
    >
      <option value="" able>---</option>
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="manager">Manager</option>
    </Form.Control>
    <FaAngleDown className="position-absolute" style={{ right: '8px', top: '50%', transform: 'translateY(-50%)' }} />
  </div>
</Form.Group>

      <Form.Group controlId="formMessage">
      <Form.Label className='mt-2'>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </Form.Group> 

     <Button className="mx-auto d-block my-3" variant="primary" type="submit">
      Submit
    </Button>
    </Form>
   
    </Card>
</Col>
 


<Col lg={4}>
<Card className='skills-card my-5'>
      <Card.Body>
        <Card.Title> <h1 className='Ol-color'>02</h1></Card.Title> 
        <div> 
        <h1 className='Dash2'> <GoDash className='display-2' /></h1>
        </div>
        <Card.Text> 
            <div>
            <sapn className='HTML'>HTML/CSS AND GRAPHIC DESIGN </sapn> 
            <span className='Experience'> Experience: 2+Years</span>
            </div> 
            <span className='Experience'> Qualification: BS or Equivalent</span>
        </Card.Text> 
        <div className="apply-for-job ">
      <button
        onClick={() => selectPosition('HTML/CSS_AND_GRAPHIC_DESIGN')}
        className="btn btn-primary btn-outline btn-big my-3">
        Apply
      </button> 
    </div>
      </Card.Body>
    </Card>
</Col>  



<Col lg={4}>
<Card className='skills-card my-5'>
      <Card.Body>
        <Card.Title> <h5 className='Ol-color'>Skills</h5></Card.Title>
        <Card.Text> 
            <div>
            <h6 className='Dott'><GoDotFill /></h6>  
            <span className='Coding'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div>  
            <div>
            <h6 className='Dott2'><GoDotFill /></h6>  
            <span className='Coding2'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div>  
            <div>
            <h6 className='Dott3'><GoDotFill /></h6>  
            <span className='Coding3'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div> 
            <div>
            <h6 className='Dott4'><GoDotFill /></h6>  
            <span className='Coding4'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div>
            <div>
            <h6 className='Dott5'><GoDotFill /></h6>  
            <span className='Coding5'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div>
        </Card.Text>  
      </Card.Body> 
    </Card>  
</Col>  
</Row> 
<Row>
<Col lg={4}>
<Card className='skills-card my-5'>
      <Card.Body>
        <Card.Title> <h1 className='Ol-color'>03</h1></Card.Title> 
        <div> 
        <h1 className='Dash2'> <GoDash className='display-2' /></h1>
        </div>
        <Card.Text> 
            <div>
            <sapn className='HTML'>HTML/CSS AND GRAPHIC DESIGN </sapn> 
            <span className='Experience'> Experience: 2+Years</span>
            </div> 
            <span className='Experience'> Qualification: BS or Equivalent</span>
        </Card.Text> 
        <div className="apply-for-job ">
      <button
        onClick={() => selectPosition('HTML/CSS_AND_GRAPHIC_DESIGN')}
        className="btn btn-primary btn-outline btn-big my-3">
        Apply
      </button> 
    </div>
      </Card.Body>
    </Card>
</Col>  

<Col lg={4}>
<Card className='skills-card Skiz'>
      <Card.Body>
        <Card.Title> <h5 className='Ol-color'>Skills</h5></Card.Title>
        <Card.Text> 
            <div>
            <h6 className='Dott'><GoDotFill /></h6>  
            <span className='Coding'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div>  
            <div>
            <h6 className='Dott2'><GoDotFill /></h6>  
            <span className='Coding2'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div>  
            <div>
            <h6 className='Dott3'><GoDotFill /></h6>  
            <span className='Coding3'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div> 
            <div>
            <h6 className='Dott4'><GoDotFill /></h6>  
            <span className='Coding4'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div>
            <div>
            <h6 className='Dott5'><GoDotFill /></h6>  
            <span className='Coding5'>Experience hand coding with HTML, CSS and JavaScript. </span>
            </div>
        </Card.Text>  
      </Card.Body> 
    </Card>  
</Col>  

</Row>




</Container>

  

  </>
  )
}
