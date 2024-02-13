import React from 'react'
import {  Card, Col, Container, Row } from 'react-bootstrap'
import { FaDesktop } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { FaPaintbrush } from "react-icons/fa6";
import { IoBluetoothSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import "../../Asserts/Style/Premium.css";

export default function PremiumTech() {
  return (
  <>
  <div className='px-2 mid'> 
  <Container>
  <div  className='class="col-md-12 col-md-offset-1 col-sm-12 text-center wow fadeInUp" '> 
  <h1 className='secc-title'> WE CREATE PREMIUM TECHNOLOGY, DESIGN, WEB  MOBILE APPS SOLUTIONS. </h1> 
  </div>

  <Row className="mt-4">
          <Col lg={3}  className=" web ">
            <Card className=" border-0 hover-effect Card1">
              <Card.Body>
              <div className="Desktop">
                <FaDesktop />
                </div>
                <Card.Subtitle className="mb-2 ">
                  <p className=' WebApp'> WEB APP DEVELOPMENT</p> 
                </Card.Subtitle>
                <div>
                  <Card.Text className="text-muted CTTT">
                    <p className="Building">  Building and designing a great web application is not just about coding. It takes much more than the efforts of the developers.</p>
                  </Card.Text> 
                </div>
              </Card.Body>
            </Card>
          </Col> 


          <Col lg={3}  className=" web ">
            <Card className=" border-0 hover-effect Card1">
              <Card.Body>
              <div className="Desktop">
              <CiMobile1 />
                </div>
                <Card.Subtitle className="mb-2 ">
                  <p className='WebApp '> MOBILE APP DEVELOPMENT</p> 

                </Card.Subtitle>
                <div>
                  <Card.Text className="text-muted CTTT">
                    <p className="Building">  Building and designing a great web application is not just about coding. It takes much more than the efforts of the developers.</p>
                  </Card.Text> 
                </div>
              </Card.Body>
            </Card>
          </Col> 

          <Col lg={3}  className=" web ">
            <Card className=" border-0 hover-effect Card1">
              <Card.Body>
              <div className="Desktop">
              <MdOutlineSecurity />
                </div>
                <Card.Subtitle className="mb-2  mx-4">
                  <p className='WebApp '> WEB & MOBILE APP </p> 

                </Card.Subtitle>
                <div>
                  <Card.Text className="text-muted CTTT">
                    <p className="Building">  Building and designing a great web application is not just about coding. It takes much more than the efforts of the developers.</p>
                  </Card.Text> 
                </div>
              </Card.Body>
            </Card>
          </Col> 


          <Col lg={3}  className=" web ">
            <Card className=" border-0 hover-effect Card1">
              <Card.Body>
              <div className="Desktop">
              <IoGameController />
                </div>
                <Card.Subtitle className="mb-2 mx-4">
                  <p className='WebApp '> GAME DEVELOPMENT</p> 

                </Card.Subtitle>
                <div>
                  <Card.Text className="text-muted CTTT">
                    <p className="Building">  Building and designing a great web application is not just about coding. It takes much more than the efforts of the developers.</p>
                  </Card.Text> 
                </div>
              </Card.Body>
            </Card>
          </Col> 

          <Col lg={3}  className=" web2 ">
            <Card className=" border-0 hover-effect Card1">
              <Card.Body>
              <div className="Desktop">
              <FaPaintbrush />
                </div>
                <Card.Subtitle className="mb-2  mx-5">
                  <p className='WebApp '> UI/UX DESIGN</p> 
                </Card.Subtitle>
                <div>
                  <Card.Text className="text-muted CTTT">
                    <p className="Building">  Building and designing a great web application is not just about coding. It takes much more than the efforts of the developers.</p>
                  </Card.Text> 
                </div>
              </Card.Body>
            </Card>
          </Col> 

          <Col lg={3}  className=" web2 ">
            <Card className=" border-0 hover-effect Card1">
              <Card.Body>
              <div className="Desktop">
              <IoBluetoothSharp />
                </div>
                <Card.Subtitle className="mb-2 mx-5 ">
                  <p className='WebApp '>BLE SOLUTIONS</p> 
                </Card.Subtitle>
                <div>
                  <Card.Text className="text-muted CTTT">
                    <p className="Building">  Building and designing a great web application is not just about coding. It takes much more than the efforts of the developers.</p>
                  </Card.Text> 
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}  className=" web2 ">
            <Card className=" border-0 hover-effect Card1">
              <Card.Body>
              <div className="Desktop">
              <IoSearch />

                </div>
                <Card.Subtitle className="mb-2 ">
                  <p className='WebApp '> SEARCH ENGINE OPTIMIZE</p> 

                </Card.Subtitle>
                <div>
                  <Card.Text className="text-muted CTTT">
                    <p className="Building">  Building and designing a great web application is not just about coding. It takes much more than the efforts of the developers.</p>
                  </Card.Text> 
                </div>
              </Card.Body>
            </Card>
          </Col> 


          <Col lg={3}  className=" web2 ">
            <Card className=" border-0 hover-effect Card1">
              <Card.Body>
              <div className="Desktop">
              <CiSettings />
                </div>
                <Card.Subtitle className="mb-2  ">
                  <p className='WebApp '> APP STORE OPTIMIZATION</p> 

                </Card.Subtitle>
                <div>
                  <Card.Text className="text-muted CTTT">
                    <p className="Building">  Building and designing a great web application is not just about coding. It takes much more than the efforts of the developers.</p>
                  </Card.Text> 
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>


  </Container>
  
  </div>
  
  </>
  )
}
