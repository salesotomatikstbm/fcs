import React from 'react'
import CtaOne from '../cta/CtaOne'

const Abouthead = () => {
  return (
    <div>
    {/* why choose us banner area  */}
    {/* <div className="banner-why-choose-us">
        <div className="container">
          <div className="col-lg-12 mt--50">
            <div className="who-we-are-card p-5 rounded-3 shadow-lg" 
                 style={{
                   background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                   borderLeft: '5px solid #3f51b5'
                 }}>
              <h1 className="title mb-4" style={{color: '#2c3e50'}}>Who we are</h1>
              <div className="animated-text">
                <h2 className="title fs-3" style={{lineHeight: '1.6', color: '#34495e'}}>
                  At <span style={{color: '#3f51b5', fontWeight: 'bold'}}>First Choice Supplies</span>, we don't just deliver products — we deliver <span style={{textDecoration: 'underline'}}>solutions that work</span>! 
                  <br /><br />
                  From premium office supplies to cutting-edge robotics education and stunning LED facade lighting projects, we cater to diverse business needs with innovation and excellence.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div> */}
            {/* why choose us banner area end */}
            {/* luminos solution key */}



            <CtaOne />
            <div className="luminos-solution-key-feature mt--50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="luminos-main-solutioin-key">
                                <h3 className="title">Our Clients Include:</h3>
                                <div className="check-wrapper">
                                    <div className="single-check">
                                        <img src="assets/images/service/01.svg" alt="service" />
                                        <p>Corporate Offices
                                        </p>
                                    </div>
                                    <div className="single-check">
                                        <img src="assets/images/service/01.svg" alt="service" />
                                        <p>Government Institutions
                                        </p>
                                    </div>
                                    <div className="single-check">
                                        <img src="assets/images/service/01.svg" alt="service" />
                                        <p>Schools & Educational Bodies
                                        </p>
                                    </div>
                                    <div className="single-check">
                                        <img src="assets/images/service/01.svg" alt="service" />
                                        <p>Banks & Financial Institutions
                                        </p>
                                    </div>
                                    <div className="single-check">
                                        <img src="assets/images/service/01.svg" alt="service" />
                                        <p>Retail Outlets
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="tag-wrapper">
                                    <div className="single-tag">
                                        <span>Risk Assessment</span>
                                    </div>
                                    <div className="single-tag">
                                        <span>IT Solutions</span>
                                    </div>
                                    <div className="single-tag">
                                        <span>Consulting Services</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="thumbnail-main-wrapper-choose-us">
                                <img src="assets/images/service/09.webp" alt="service" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* luminos solution key end */}



    </div>
  )
}

export default Abouthead