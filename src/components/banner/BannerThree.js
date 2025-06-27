"use client"
import React from 'react'
import { ReactSVG } from 'react-svg';
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function BannerThree() {
  useEffect(() => {
    AOS.init({
      disableMutationObserver: true,
      once: true,
    });
  }, []);
  return (
    <div>
      {/* banner area start */}
      <div className="rts-banner-three-area rts-section-gap bg-banner-three ">
        <div className="container pb--180 pb_sm--0">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-three-wrapper">
                {/* <img src="assets/images/home.png" alt="banner" />
                <span className="pre-title" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">First Choice Supplies</span> */}
                <h1 className="title" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Everything Your Business Needs, Delivered</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner-content-wrapper-three">
                <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Welcome to First Choice Supplies General Trading LLC — a brand that redefines office essentials, workspace solutions, corporate gifts, education partnerships, and creative video production in the UAE! With a legacy of excellence since 2014, we take pride in transforming workspaces and ideas into reality.
                </p>
                <a
                  href="/free-consultation"
                  className="rts-btn btn-primary" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
                >
                  Contact Now
                  <ReactSVG
                    src="assets/images/service/icons/13.svg"
                    alt="arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="round-shape">
          <img src="assets/images/banner/shape/07.png" alt="banner" />
        </div>
        <div className="right-shape wow move-left">
          <img src="assets/images/banner/04.png" alt="banner" />
        </div>
        <div className="top-shape wow move-right">
          <img src="assets/images/banner/05.png" alt="banner" />
        </div>
      </div>
      {/* banner area end */}
      <div
        className="alrge-video-area  mt-dec-banner-3"
        style={{ zIndex: 2 }}
      >
        <div className="container-large">
          <div className="row">
            <div className="col-lg-12 mt--70">
              <div className="image--large-video jarallax v3">
                <img
                  className="jarallax-img"
                  src="assets/images/banner/03.webp"
                  alt="large"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerThree