import React from 'react';
import "../../Asserts/Style/RequstQuote.css";
import { Button } from 'react-bootstrap';
import ScrollAnimation from 'react-awesome-reveal';

const RequestQuote = () => {
  return (
    <>
      <section className="req-quote bgg" style={{backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/32/721/217/black-gray-leather-texture-wallpaper-preview.jpg)'}}>
        <div className="container">
          <div className="row"> 
            <div className="col-lg-12 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
            <ScrollAnimation animateIn="bounceIn" duration={400} offset={1000} triggerOnce={true}> 
              <h1 className="NextProject">
                LET’S WORK TOGETHER ON YOUR NEXT PROJECT
              </h1>
              <div className="row">
                <div className="col-lg-12 col-sm-offset-2">
                  <Button className=" byth btn-default btn-outline" href="https://axontechs.com/contact/" target="_self">
                    Request a free quote
                  </Button>
                </div> 
              </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestQuote;
