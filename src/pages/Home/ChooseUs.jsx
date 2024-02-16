import React from 'react';
import "../../Asserts/Style/ChooseUs.css";
import { Button } from 'react-bootstrap';
import ScrollAnimation from 'react-awesome-reveal';
import { RiEmotionHappyLine } from "react-icons/ri";
import { VscFiles } from "react-icons/vsc";
import { IoMdPeople } from "react-icons/io";
import { FiClock } from "react-icons/fi";



export default function ChooseUs() {
  return (
    <> 
      <section className="why-us bggg">
        <div className="container">
        <ScrollAnimation animateIn="bounceIn" duration={400} offset={1000} triggerOnce={true}>
          <div className="row"> 
            <div className="col-md-4 col-sm-12"> 
              <div className="sec-item">
                <h2 className="sec-title-inv">WHY CHOOSE US?</h2>
                <p className="sub-title-inv">
                  AXON is a full-fledged solution to IT development and design needs for businesses seeking to change the look of their online presence, or a business starting fresh. It is not in the nature of AXON to complicate matters with its clients. We prioritize reputation and credibility over everything else. Hence, we develop, we design, and we deliver on time.
                  <br />
                  Simply put, we deliver and you grow.
                </p>
                <Button className="btn btn-more" href="https://axontechs.com/about/" target="_self">Read More</Button>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="sec-count text-center">
                <div className="row">
                  <div className="col-sm-3">
                  <div>
                      <VscFiles className="Icons-Size  d-flex justify-content-center align-items-center " />
                      <h1 className="counter"style={{ textAlign: "center" }}>2,000</h1>
                      <p>PROJECTS FINISHED</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div>
                      <RiEmotionHappyLine className="Icons-Size  d-flex justify-content-center align-items-center " />
                      <h1 className="counter" style={{ textAlign: "center" }}>2,000</h1>
                      <p>HAPPY CLIENTS</p>
                    </div>
                  </div>
                  <div className="col-sm-3 wow zoomIn">
                  <div>
                      <IoMdPeople className="Icons-Size  d-flex justify-content-center align-items-center " />
                      <h1 className="counter" style={{ textAlign: "center" }}>2,000</h1>
                      <p>PEOPLE TEAM</p>
                    </div>
                  </div>
                  <div className="col-sm-3 wow zoomIn">
                  <div>
                      <FiClock  className="Icons-Size  d-flex justify-content-center align-items-center " />
                      <h1 className="counter" style={{ textAlign: "center" }}>2,000</h1>
                      <p>HOURS OF WORK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          </ScrollAnimation>
        </div>
      </section> 
    </>
  );
}
