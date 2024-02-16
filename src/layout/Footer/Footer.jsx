import React from "react";
import "../../Asserts/Style/footer.css";
import { Container } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import ScrollAnimation from 'react-awesome-reveal';



const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="f-item-links">
          <Container> 
          <ScrollAnimation animateIn="fadeIn" duration={400} offset={1000} triggerOnce={true}>    
            <div className="row">
              <div className="col-md-4 col-lg-4 F-color Text-sizee">
                <h4 className="About">ABOUT US</h4>
                <div>
                  <p>
                    AXON has offered satisfactory services at the hands of
                    professionals from web and application design, technical
                    support, project management, and security management. Our
                    capabilities and skills cover all the technological needs
                    that were required of us by our happy clients.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-lg-2 F-color Text-sizee">
                <h4 className="About">COMPANT</h4>
                <div>
                <p><a className="White_color" href="http://localhost:3000/">HOME</a></p>
                <p><a className="White_color" href="http://localhost:3000/about">ABOUT</a></p>
                <p><a className="White_color" href="http://localhost:3000/portfolio"> POTFOLIO</a></p>
                <p><a className="White_color" href="http://localhost:3000/blog"> BLOG</a></p>
                <p><a className="White_color" href="http://localhost:3000/career"> CAREER</a></p>
                <p><a className="White_color" href="http://localhost:3000/contact"> CONTACT</a></p>
                </div>
              </div>

              <div className="col-md-4 col-lg-3 F-color Text-sizee">
                <h4 className="About">SERVICE</h4>
                <div>
                  <p> WEB APP DEVELOPMENT</p>
                  <p> MOBILE APP DEVELOPMENT </p>
                  <p> GAME DEVELOPMENT </p>
                  <p> SEARCH ENGINE OPTMIZE</p>
                </div>
              </div>

              <div className="col-md-4 col-lg-2 F-color Text-sizee">
                <h4 className="About">CONTACT</h4>
                <div>
                  <p>
                    <b> Wapda Town Lahore, Pakistan </b>
                  </p>
                  <p>
                    <b>Mob(PK):(92)331 400 256</b>
                  </p>
                  <p>
                    {" "}
                    <b>Email:info@axontechs.com </b>
                  </p>
                </div>
              </div>
            </div>
            </ScrollAnimation> 
            <hr className="Mline"></hr>
            <ScrollAnimation animateIn="fadeIn" duration={400} offset={1000} triggerOnce={true}>  
            <div className="col-lg-12 d-flex justify-content-center align-items-center">
              <img
                src="https://axontechs.com/wp-content/uploads/2021/09/fullWhiteLogo.png"
                class="img-responsive logo"
                alt="Axon Technologies"
              />
            </div>
            <div className="social-links d-flex justify-content-center align-items-center mt-3">
              <a href="/" target="_blank">
                <i>
                  <FaFacebookF />
                </i>
              </a>
              <a href="/" target="_blank">
                <i>
                <RiInstagramLine />
                </i>
              </a>
              <a href="/" target="_blank">
                <i>
                <IoLogoLinkedin />
                </i>
              </a> 
            </div> 
            <div className="d-flex justify-content-center align-items-center mt-4 Last-text">
              <p> Copyright © <b> AXON TECHNOLOGIES 2021</b> All Rights Reserved. </p>  
         </div> 
         </ScrollAnimation> 
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
