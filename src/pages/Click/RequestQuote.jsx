import React from 'react';
import "../../Asserts/Style/RequstQuote.css";
import { Button } from 'react-bootstrap';

const RequestQuote = () => {
  return (
    <>
      <section className="req-quote bgg" style={{backgroundImage: 'url(https://axontechs.com/wp-content/uploads/2021/07/req-quote-bg.png)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center wow fadeIn" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn'}}>
              <h1 className="NextProject">
                LET’S WORK TOGETHER ON YOUR NEXT PROJECT
              </h1>
              <div className="row">
                <div className="col-lg-12 col-sm-offset-2 wow bounceIn" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'bounceIn'}}>
                  <Button className=" byth btn-default btn-outline" href="https://axontechs.com/contact/" target="_self">
                    Request a free quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestQuote;
