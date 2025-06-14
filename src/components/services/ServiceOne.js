"use client"
import React from 'react';

function ServiceOne() {
    return (
        <div>
            {/* solution expertise */}
            <div className="solution-expertice-area rts-section-gap bg-solution ">
                <div className="top-left wow slideInLeft">
                    <img
                        loading="lazy"
                        rel="preload"
                        src="assets/images/service/icons/02.png"
                        alt="service"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-2">
                                <h2 className="title">Prime Projects</h2>
                                <p>
                                    Offers a unified platform that fosters innovation while providing end-to-end data management. See how we help your team solve today's biggest challenges.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-0 mt--70">

                        {/* 1. Expo 2020 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="single-solution-style-one border-left">
                                <div className="right-draw">
                                    <img src="assets/images/service/icons/01.png" alt="icons" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/service/icons/01.svg" alt="service" />
                                </div>
                                <h2 className="title">Expo 2020</h2>
                                <p className="disc">
                                    Complete solutions and supply of queue and crowd management barriers to ensure smooth visitor flow.
                                </p>
                            </div>
                        </div>

                        {/* 2. Dubai Police Schools */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="single-solution-style-one">
                                <div className="right-draw">
                                    <img src="assets/images/service/icons/01.png" alt="icons" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/service/icons/02.svg" alt="service" />
                                </div>
                                <h2 className="title">Dubai Police Schools</h2>
                                <p className="disc">
                                    Supply of customised school bags and kits to enhance learning experiences for students.
                                </p>
                            </div>
                        </div>

                        {/* 3. PPE Supply During COVID-19 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="single-solution-style-one">
                                <div className="right-draw">
                                    <img src="assets/images/service/icons/01.png" alt="icons" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/service/icons/03.svg" alt="service" />
                                </div>
                                <h2 className="title">PPE Supply During COVID-19</h2>
                                <p className="disc">
                                    One of the first respondents and suppliers of PPE to the Health Authority during the pandemic.
                                </p>
                            </div>
                        </div>

                        {/* 4. Facade Lighting for National Day (FAB) */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="single-solution-style-one border-left border-bottom-1">
                                <div className="right-draw">
                                    <img src="assets/images/service/icons/01.png" alt="icons" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/service/icons/04.svg" alt="service" />
                                </div>
                                <h2 className="title">Facade Lighting – FAB HQ</h2>
                                <p className="disc">
                                    Stunning lighting installation for FAB Headquarters on UAE National Day celebrations.
                                </p>
                            </div>
                        </div>

                        {/* 5. Pavilion Expo 2020 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="single-solution-style-one border-bottom-1">
                                <div className="right-draw">
                                    <img src="assets/images/service/icons/01.png" alt="icons" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/service/icons/05.svg" alt="service" />
                                </div>
                                <h2 className="title">Pavilion Expo 2020</h2>
                                <p className="disc">
                                    Built interactive pavilions to represent innovation, sustainability, and global culture.
                                </p>
                            </div>
                        </div>

                        {/* 6. Silver Falcon */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="single-solution-style-one border-bottom-1">
                                <div className="right-draw">
                                    <img src="assets/images/service/icons/01.png" alt="icons" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/service/icons/06.svg" alt="service" />
                                </div>
                                <h2 className="title">Silver Falcon</h2>
                                <p className="disc">
                                    Produced impactful corporate videos and creative campaigns through visual storytelling partnerships.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* solution expertise end */}
        </div>
    )
}

export default ServiceOne;
