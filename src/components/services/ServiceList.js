import React from 'react';

function ServiceList() {
  return (
    <>
      {/* service-we-provide-area start */}
      <div className="rts-service-provide-area rts-section-gap">
        <div className="container-s-float">
          <div className="row">
            <div className="col-lg-12">
              {/* Vision Box */}
              <div
                className="single-service-list wow fadeInUp d-flex align-items-start "
                data-wow-offset={120}
                data-wow-delay=".6s"
              >
               
                <div className="main-information-area flex-grow-1 ms-5">
                  <h3 className="title">Vision :</h3>
                  <p className="disc">
                    To be the trusted name in simplifying solutions for corporates.
                  </p>
                </div>
                <a href="#" className="arrow-btn ms-auto">
                  <img src="assets/images/service/icons/13.svg" alt="arrow" />
                </a>
              </div>

              {/* Mission Box */}
              <div
                className="single-service-list wow fadeInUp d-flex align-items-start"
                data-wow-offset={120}
                data-wow-delay=".8s"
              >
                
                <div className="main-information-area flex-grow-1 ms-5">
                  <h3 className="title">Mission :</h3>
                  <p className="disc">
                    Our mission is to empower businesses with a seamless blend of innovation, on-time delivery, dedicated support, out-of-the-box thinking, precise execution and enduring partnerships.
                  </p>
                </div>
                <a href="#" className="arrow-btn ms-auto">
                  <img src="assets/images/service/icons/13.svg" alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service-we-provide-area end */}
    </>
  );
}

export default ServiceList;
