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
                        {/* Projects Counter */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-counter-up-one border-top border-left">
                                <div className="icon-area">
                                    <FaProjectDiagram size={40} />
                                </div>
                                <p>Projects</p>
                                <h3 className="title">
                                    <span className="counter">100</span>+
                                </h3>
                            </div>
                        </div>

                        {/* Services Counter */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-counter-up-one border-top">
                                <div className="icon-area">
                                    <FaTools size={40} />
                                </div>
                                <p>Services</p>
                                <h3 className="title">
                                    <span className="counter">16</span>+
                                </h3>
                            </div>
                        </div>

                        {/* Clients Counter */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-counter-up-one border-top">
                                <div className="icon-area">
                                    <FaUsers size={40} />
                                </div>
                                <p>Clients</p>
                                <h3 className="title">
                                    <span className="counter">100</span>+
                                </h3>
                            </div>
                        </div>

                        {/* Experience Counter */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-counter-up-one border-top">
                                <div className="icon-area">
                                    <FaCalendarAlt size={40} />
                                </div>
                                <p>Experience</p>
                                <h3 className="title">
                                    <span className="counter">14</span>
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