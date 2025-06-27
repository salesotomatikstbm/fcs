"use client";

import React, { useEffect } from "react";
import Rellax from "rellax";
import {
  FaProjectDiagram,
  FaTools,
  FaUsers,
  FaCalendarAlt
} from 'react-icons/fa';

function AboutBanner() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            new Rellax(".rellax", { speed: 5 });
        }
    }, []);

    const styling = {
        backgroundImage: `url(assets/images/about/01.webp)`,
    };

    return (
        <div className="about-banner-container">
            {/* Banner Area */}
            <div className="about-banner-area-bg jarallax" style={styling}></div>

            {/* Counter Area */}
            <div className="counter-up-wrapper mt-dec-80">
                <div className="container">
                    <div className="row g-0">

                        {/* Contracts */}
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-counter-up-one border-top border-left">
                                <div className="icon-area">
                                    <FaProjectDiagram size={40} />
                                </div>
                                <p>Contracts (AED) Million</p>
                                <h3 className="title">
                                    <span className="counter">100</span>+ 
                                </h3>
                            </div>
                        </div>

                        {/* Expertise */}
                        {/* <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-counter-up-one border-top">
                                <div className="icon-area">
                                    <FaTools size={40} />
                                </div>
                                <p>Years of Expertise </p>
                                <h3 className="title">
                                    <span className="counter">50</span>+ 
                                </h3>
                            </div>
                        </div> */}

                        {/* Years of Excellence */}
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-counter-up-one border-top">
                                <div className="icon-area">
                                    <FaCalendarAlt size={40} />
                                </div>
                                <p>Years of Excellence</p>
                                <h3 className="title">
                                    <span className="counter">12</span>+ 
                                </h3>
                            </div>
                        </div>

                        {/* Clients */}
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-counter-up-one border-top">
                                <div className="icon-area">
                                    <FaUsers size={40} />
                                </div>
                                <p>Clients</p>
                                <h3 className="title">
                                    <span className="counter">1000</span>+
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutBanner;
