import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import "../../Asserts/Style/ContactSec.css"
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactSec() { 
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
        console.log('Form Data:', formData);
      };
  return (
    <>
      <hr />

      <Container>
        <Row>
          <Col lg={6}>
            <div>
              <h3 className='Contact-Color'> CONTACT</h3>
            </div>
          </Col>

          <Col lg={6}>
          <div>
        <h3 className='About-Color2'>
        <a href='/' className=' mx-2'>Home</a> | <a href='/contact' className=' About-Color2 link mx-2'>Contact</a>
       </h3>
    </div> 
          </Col>
        </Row> 
      </Container>  

      <Container>
     <Row>
    
 
     <Col lg={5}>
     <Card className="ContactCard">
      <Card.Body> 
      <FaHome className='fahome' />
        <Card.Title className='Office-card'>OFFICE ADDRESS</Card.Title>
        <Card.Text>
         <p className='Headquater-card'> Headquater: Wapda Town Lahore, Pakistan</p>
        </Card.Text> 
        <FaPhoneAlt className='fahome' />
        <Card.Title className="Office-card">PHONE NUMBER</Card.Title>
        <Card.Text>
        <p className='Headquater-card'> (+92) 311 4000 256</p>
        </Card.Text>
        <MdOutlineEmail className='fahome' />
         <Card.Title className="Office-card">EMAIL</Card.Title>
        <Card.Text>
        <p className='Headquater-card'> info@axontechs.com</p>
        </Card.Text> 
      </Card.Body>
    </Card>
          </Col>

      <Col lg= {6}> 
      <Card className='Subcard'>
      <Form onSubmit={handleSubmit}>
        <div className='d-flex justify-content-between'> 
      <Form.Group controlId="formName">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className=" Text-color"
        />
      </Form.Group>

      <Form.Group controlId="formName">
        <Form.Label></Form.Label>
        <Form.Control
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className=" Text-color"
        />
      </Form.Group>
      </div>
      <Form.Group controlId="formSubject">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder=" Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className=" Text-color"
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className=" Text-color"
        />
      </Form.Group>
     <div className=' d-flex justify-content-end align-items-end '>
      <a href="/" className="btn btn-primary btn-outline btn-more SendMessage">SEND MESSAGE</a>
      </div>
    </Form>
    </Card>
      </Col>

     </Row>


      </Container>

    </>
  );
}
