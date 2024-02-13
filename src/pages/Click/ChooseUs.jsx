import React from 'react';
import "../../Asserts/Style/ChooseUs.css";
import { Button } from 'react-bootstrap';
export default function ChooseUs() {
  return (
    <> 
      <section className="why-us bggg">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 wow fadeIn" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeIn" }}>
              <div className="sec-item">
                <h2 className="sec-title-inv">WHY CHOOSE US?</h2>
                <p className="sub-title-inv">
                  AXON is a full-fledged solution to IT development and design needs for businesses seeking to change the look of their online presence, or a business starting fresh. It is not in the nature of AXON to complicate matters with its clients. We prioritize reputation and credibility over everything else. Hence, we develop, we design, and we deliver on time.
                  <br />
                  Simply put, we deliver and you grow.
                </p>
                <Button className="btn btn-default btn-more" href="https://axontechs.com/about/" target="_self">Read More</Button>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="sec-count text-center">
                <div className="row">
                  <div className="col-sm-3 wow zoomIn" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "zoomIn" }}>
                    <div className="item">
                      <i className="icon-layers"></i>
                      <h1 className="counter" data-decimal-delimiter="," data-thousand-delimiter="," data-value="225" style={{ textAlign: "center" }}>2,250</h1>
                      <p>PROJECTS FINISHED</p>
                    </div>
                  </div>
                  <div className="col-sm-3 wow zoomIn" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "zoomIn" }}>
                    <div className="item">
                      <i className="icon-happy"></i>
                      <h1 className="counter" data-decimal-delimiter="," data-thousand-delimiter="," data-value="200" style={{ textAlign: "center" }}>2,000</h1>
                      <p>HAPPY CLIENTS</p>
                    </div>
                  </div>
                  <div className="col-sm-3 wow zoomIn" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "zoomIn" }}>
                    <div className="item">
                      <i className="icon-profile-male"></i>
                      <h1 className="counter" data-decimal-delimiter="," data-thousand-delimiter="," data-value="65" style={{ textAlign: "center" }}>650</h1>
                      <p>PEOPLE TEAM</p>
                    </div>
                  </div>
                  <div className="col-sm-3 wow zoomIn" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "zoomIn" }}>
                    <div className="item">
                      <i className="icon-clock"></i>
                      <h1 className="counter" data-decimal-delimiter="," data-thousand-delimiter="," data-value="1050000" style={{ textAlign: "center" }}>10,500,000</h1>
                      <p>HOURS OF WORK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}
