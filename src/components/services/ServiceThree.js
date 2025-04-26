import React from 'react';
import { FaGift, FaPenFancy, FaPeopleArrows, FaRobot, FaImage, FaMedkit, FaShoppingBag, FaPrint } from 'react-icons/fa';

function ServiceThree() {
    return (
        <div>
            {/* rts service area start */}
            <div className="rts-service-area rts-section-gap bg-dark-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-main-wrapper-center-three">
                                <h2 className="title">Our Services</h2>
                                <p>
                                    We've got everything you need to power up your workspace and brand. Check out our key offerings.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 mt--80">
                        {/* Customized Gifts & Promotional Products */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <div className="single-service-three">
                                <div className="icon">
                                    <FaGift size={40} />
                                </div>
                                <h5 className="title">Smart Office Solutions</h5>
                                <p className="disc">
                                Equip your workspace with eco-friendly stationery, efficient storage, and modern office equipment.         </p>
                            </div>
                        </div>

                        {/* Office Supplies & Stationery Solutions */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div className="single-service-three bg-light-3">
                                <div className="icon">
                                    <FaPenFancy size={40} />
                                </div>
                                <h5 className="title">Workplace Wellness Solutions</h5>
                                <p className="disc">
                                Boost workplace well-being and productivity with our wellness and support solutions.    </p>
                            </div>
                        </div>

                        {/* Event Management Services */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            <div className="single-service-three">
                                <div className="icon">
                                    <FaPeopleArrows size={40} />
                                </div>
                                <h5 className="title">Corporate Branding & Marketing Solutions</h5>
                                <p className="disc">
                                Make an impression with powerful branding, retail POS solutions, and professional event support.
                                </p>
                            </div>
                        </div>

                        {/* Educational Partnerships (Otomatiks Activity Center) */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                            <div className="single-service-three bg-light-3">
                                <div className="icon">
                                    <FaRobot size={40} />
                                </div>
                                <h5 className="title">Printing & Communication Services</h5>
                                <p className="disc">
                                Deliver your message with high-quality print materials tailored for every business need.
                                </p>
                            </div>
                        </div>

                        {/* Corporate Branding Solutions */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div className="single-service-three bg-light-3">
                                <div className="icon">
                                    <FaImage size={40} />
                                </div>
                                <h5 className="title">Custom Gifting & Merchandise</h5>
                                <p className="disc">
                                Build connections with customized gifts, branded merchandise, and school-specific solutions.
                                </p>
                            </div>
                        </div>

                        {/* Healthcare & Surgical Consumables */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <div className="single-service-three">
                                <div className="icon">
                                    <FaMedkit size={40} />
                                </div>
                                <h5 className="title">Healthcare & General Supplies</h5>
                                <p className="disc">
                                Trusted medical and general trading products to support diverse operational needs.
                                </p>
                            </div>
                        </div>

                        {/* Retail & POS Marketing Solutions */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div className="single-service-three bg-light-3">
                                <div className="icon">
                                    <FaShoppingBag size={40} />
                                </div>
                                <h5 className="title"> Otomatiks
                                </h5>
                                <p className="disc">
                                Hands-on learning experiences. We collaborate with institutions for activity-based programs through Otomatiks.          </p>
                            </div>
                        </div>

                        {/* Printing & Packaging Solutions */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <div className="single-service-three">
                                <div className="icon">
                                    <FaPrint size={40} />
                                </div>
                                <h5 className="title"> Event  Management</h5>
                                <p className="disc">
                                    From planning to execution – we handle it all for corporate events, seminars, and cultural programs.            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service area end */}
        </div>
    )
}

export default ServiceThree;