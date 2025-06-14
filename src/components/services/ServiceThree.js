import React from 'react';
import {
    FaGift,
    FaPenFancy,
    FaPeopleArrows,
    FaRobot,
    FaImage,
    FaMedkit,
    FaShoppingBag,
    FaPrint
} from 'react-icons/fa';

function ServiceThree() {
    const iconStyle = { color: 'black' };

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
                                    We offer comprehensive solutions to meet your corporate, branding, event, and trading needs. Explore our diverse range of services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 mt--80">

                        {/* 1. Office Supplies and Smart Solutions */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <div className="single-service-three">
                                <div className="icon">

                                    <img src="assets/images/icons/1.png" alt="service" />
                                </div>
                                <h5 className="title">Office Supplies & Smart Solutions</h5>
                                <p className="disc">
                                    Eco-friendly stationery, modern office machines, IT supplies, pantry items, and custom office solutions.
                                </p>
                            </div>
                        </div>

                        {/* 2. Corporate Gifting & Promotional Merchandise */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div className="single-service-three bg-light-3">
                                <div className="icon">
                                    <img src="assets/images/icons/2.png" alt="service" />
                                </div>
                                <h5 className="title">Corporate Gifting & Merchandise</h5>
                                <p className="disc">
                                    Diaries, eco gifts, VIP items, tech-based products, wearables, and fully branded custom gifts.
                                </p>
                            </div>
                        </div>

                        {/* 3. Corporate Branding & Marketing Solutions */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            <div className="single-service-three">
                                <div className="icon">
                                    <img src="assets/images/icons/3.png" alt="service" />
                                </div>
                                <h5 className="title">Branding & Marketing Solutions</h5>
                                <p className="disc">
                                    Logo design, signage, flyers, uniforms, hoardings, and retail displays to elevate brand presence.
                                </p>
                            </div>
                        </div>

                        {/* 4. Event Management */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                            <div className="single-service-three bg-light-3">
                                <div className="icon">
                                    <img src="assets/images/icons/4.png" alt="service" />
                                </div>
                                <h5 className="title">Event Management</h5>
                                <p className="disc">
                                    Concept to execution: corporate events, public functions, seminars, and personal celebrations.
                                </p>
                            </div>
                        </div>

                        {/* 5. Healthcare & General Supplies */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <div className="single-service-three">
                                <div className="icon">
                                    <img src="assets/images/icons/5.png" alt="service" />
                                </div>
                                <h5 className="title">Healthcare & General Supplies</h5>
                                <p className="disc">
                                    Trusted source for non-medical healthcare products, PPE, and customized supply needs.
                                </p>
                            </div>
                        </div>

                        {/* 6. Hospitality Specialist */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div className="single-service-three bg-light-3">
                                <div className="icon">
                                    <img src="assets/images/icons/6.png" alt="service" />
                                </div>
                                <h5 className="title">Hospitality Specialist</h5>
                                <p className="disc">
                                    Supplies for hotels, décor, kitchen equipment, landscaping, and tailored hospitality solutions.
                                </p>
                            </div>
                        </div>

                        {/* 7. Workspace & Wellness Solutions */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            <div className="single-service-three">
                                <div className="icon">
                                    <img src="assets/images/icons/7.png" alt="service" />
                                </div>
                                <h5 className="title">Workspace & Wellness</h5>
                                <p className="disc">
                                    Ergonomic furniture, green décor, air purifiers, waste solutions, and well-being enhancements.
                                </p>
                            </div>
                        </div>

                        {/* 8. General Trading */}
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                            <div className="single-service-three bg-light-3">
                                <div className="icon">
                                    <img src="assets/images/icons/8.png" alt="service" />
                                </div>
                                <h5 className="title">General Trading</h5>
                                <p className="disc">
                                    We source and deliver anything — global procurement for any challenge or unique need.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* rts service area end */}
        </div>
    );
}

export default ServiceThree;
