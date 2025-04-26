"use client";
import React, { useEffect } from 'react';
import AOS from "aos";
import { ReactSVG } from 'react-svg';
import "aos/dist/aos.css";

function CtaFour() {
  useEffect(() => {
    AOS.init({
      disableMutationObserver: true,
      once: true,
    });
  }, []);

  return (
    <div>
      <>
        {/* rts call to action area start */}
        <div className="rts-call-to-action-area-about rts-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2
                  className="title"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Enquire Now
                </h2>
                <p
                  className="disc"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Reach out to us today to explore how our services can support your goals.
                  Let’s discuss your needs and find the right solution for your business.
                </p>
                <a
                  href="/contact"
                  className="rts-btn btn-primary"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  Enquire Now
                  <ReactSVG src="assets/images/service/icons/13.svg" alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* rts call to action area end */}
      </>
    </div>
  );
}

export default CtaFour;
