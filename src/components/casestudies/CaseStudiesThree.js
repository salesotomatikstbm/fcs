import React from 'react';

function CaseStudiesThree() {
  return (
    <div>
      {/* rts case studies area start */}
      <div className="rts-case-studies-area rts-section-gapBottom mt_sm--30">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2>Our Vision & Mission</h2>
            </div>
          </div>

          <div className="row align-items-stretch g-4">
            {/* Vision Column - Left Side */}
            <div className="col-md-6">
              <div className="h-100 bg-light p-4 rounded">
                <h3 className="text-primary mb-3">Vision:</h3>
                <h1>To be the trusted name in simplifying solutions for corporates.</h1>
              </div>
            </div>

            {/* Mission Column - Right Side */}
            <div className="col-md-6">
              <div className="h-100 bg-light p-4 rounded">
                <h3 className="text-primary mb-3">Mission:</h3>
                <p className="mb-3">Our mission is to empower businesses with:</p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <span className="text-primary me-2">•</span>
                    <span>A seamless blend of innovation</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <span className="text-primary me-2">•</span>
                    <span>On-time delivery</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <span className="text-primary me-2">•</span>
                    <span>Dedicated support</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <span className="text-primary me-2">•</span>
                    <span>Out-of-the-box thinking</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <span className="text-primary me-2">•</span>
                    <span>Precise execution</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="text-primary me-2">•</span>
                    <span>Enduring partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts case studies area end */}
    </div>
  );
}

export default CaseStudiesThree;
