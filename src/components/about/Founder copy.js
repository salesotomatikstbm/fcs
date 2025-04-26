import React from 'react'

const Founder = () => {
    return (
        <div className="container py-5 ">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="inner-content rts-section-gapTop">
                        <div className="top text-center mb-5">
                            <h1 className="title display-3 fw-bold mb--8">
                                Director and Founder's Message
                            </h1>
                         
                        </div>

                        {/* Founder 1 */}
                        <div className="row align-items-center mb-5 g-4 founder-card p-5 rounded-4 shadow-sm" style={{
                            backgroundColor: '#f8f9fa',
                            borderLeft: '5px solid #3f51b5'
                        }}>
                            <div className="col-md-3 text-center">
                                <img
                                    src="assets/images/about/ANIL NAIR.png"
                                    alt="Anil Nair"
                                    className="img-fluid rounded-circle mb-4 shadow"
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                        objectFit: 'cover',
                                        border: '5px solid white'
                                    }}
                                />
                                <h2 className="fw-bold fs-1" style={{color: '#3f51b5'}}>Anil Nair</h2>
                                <p className="text-muted fs-5">Position</p>
                            </div>
                            <div className="col-md-9">
                                <div className="message-content p-4">
                                    <p className="fs-4" style={{lineHeight: '1.8', color: '#212529'}}>
                                        At First Choice Supplies, our clients are at the heart of everything we do. With a deep understanding of sales and marketing dynamics, my team and I work tirelessly to ensure we provide solutions tailored to your business needs. We strive to deliver exceptional value and build strong, lasting client relationships by leveraging innovative marketing strategies.
                                    </p>
                                    <p className="fs-4" style={{lineHeight: '1.8', color: '#212529'}}>
                                        We look forward to continuing our partnership and contributing to your success.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Founder 2 */}
                        <div className="row align-items-center mb-5 g-4 founder-card p-5 rounded-4 shadow-sm" style={{
                            backgroundColor: '#f8f9fa',
                            borderLeft: '5px solid #e91e63'
                        }}>
                            <div className="col-md-3 text-center">
                                <img
                                    src="assets/images/about/KANNAN K V.png"
                                    alt="Kannan K V"
                                    className="img-fluid rounded-circle mb-4 shadow"
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                        objectFit: 'cover',
                                        border: '5px solid white'
                                    }}
                                />
                                <h2 className="fw-bold fs-1" style={{color: '#e91e63'}}>Kannan K V</h2>
                                <p className="text-muted fs-5">Position</p>
                            </div>
                            <div className="col-md-9">
                                <div className="message-content p-4">
                                    <p className="fs-4" style={{lineHeight: '1.8', color: '#212529'}}>
                                        Operations excellence is the backbone of First Choice Supplies. My role is to ensure that every process runs smoothly, from logistics to customer service, ensuring a seamless experience for all our clients. We take pride in our ability to meet your unique requirements with precision and care.
                                    </p>
                                    <p className="fs-4" style={{lineHeight: '1.8', color: '#212529'}}>
                                        We focus on process improvement and customer service excellence to ensure that FCS remains your trusted supply partner.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Founder 3 */}
                        <div className="row align-items-center mb-5 g-4 founder-card p-5 rounded-4 shadow-sm" style={{
                            backgroundColor: '#f8f9fa',
                            borderLeft: '5px solid #4caf50'
                        }}>
                            <div className="col-md-3 text-center">
                                <img
                                    src="assets/images/about/MOHAMED ALI J.png"
                                    alt="Mohamed Ali J"
                                    className="img-fluid rounded-circle mb-4 shadow"
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                        objectFit: 'cover',
                                        border: '5px solid white'
                                    }}
                                />
                                <h2 className="fw-bold fs-1" style={{color: '#4caf50'}}>Mohamed Ali J</h2>
                                <p className="text-muted fs-5">Position</p>
                            </div>
                            <div className="col-md-9">
                                <div className="message-content p-4">
                                    <p className="fs-4" style={{lineHeight: '1.8', color: '#212529'}}>
                                        Welcome to First Choice Supplies, where we aim to deliver unparalleled service and quality products to meet your business needs. At FCS, we believe in the power of partnerships and are committed to building lasting relationships through trust, reliability, and innovation.
                                    </p>
                                    <p className="fs-4" style={{lineHeight: '1.8', color: '#212529'}}>
                                        With over 15 years of experience in the trading and supply industry, I am proud to lead First Choice Supplies on a journey of excellence. Our goal has always been to provide our clients with innovative solutions, ensuring their success and growth. We focus on supply chain optimization, client-centric approaches, and continuous improvement to exceed expectations.
                                    </p>
                                    <p className="fs-4 ">
                                        Thank you for trusting us as your preferred partner.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founder