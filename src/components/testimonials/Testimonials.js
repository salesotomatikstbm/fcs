"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Founder from "../about/Founder";
import "swiper/css";

function Testimonials() {
    return (
        <div className="">
            <div className="testimonials-area-start rts-section-gapTop bg-solution position-relative">
                <div className="shape-top-right wow slideInLeft" data-wow-offset={160}>
                    <img
                        loading="lazy"
                        rel="preload"
                        src="assets/images/testimonials/03.png"
                        alt="testimopnials"
                        className="img-fluid"
                    />
                </div>
                <div className="container">
                    <Founder />
                    <div className="row  rts-section-gapBottom">
                        <div className="col-lg-12">
                            <div className="swiper mySwiper-Testimonials" dir="ltr">
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        576: { slidesPerView: 1, spaceBetween: 20 },
                                        768: { slidesPerView: 1, spaceBetween: 30 },
                                        992: { slidesPerView: 2, spaceBetween: 40 },
                                    }}
                                    speed={1000}
                                >
                                    <SwiperSlide>
                                        <div className="h-100">
                                            <div className="single-testimonials-area-one p-4 h-100 d-flex flex-column" style={{ minHeight: '400px' }}>
                                                <p className="disc mb-4" style={{ flex: '1 1 auto', overflow: 'hidden' }}>
                                                    At First Choice Supplies, our clients are at the heart of everything we do. With a deep understanding of sales and marketing dynamics, my team and I work tirelessly to ensure we provide solutions tailored to your business needs. We strive to deliver exceptional value and build strong, lasting client relationships by leveraging innovative marketing strategies. We look forward to continuing our partnership and contributing to your success.
                                                </p>
                                                <div className="author-wrapper d-flex align-items-center mt-auto">
                                                    <div className="avatar me-3">
                                                        <img
                                                            src="assets/images/about/ANIL NAIR.png"
                                                            alt="testimonails-avatar"
                                                            className="rounded-circle"
                                                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                    <div className="information">
                                                        <h6 className="title mb-1">Anil Nair</h6>
                                                        <span className="desig text-muted">Position</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100">
                                            <div className="single-testimonials-area-one p-4 h-100 d-flex flex-column" style={{ minHeight: '400px' }}>
                                                <p className="disc mb-4" style={{ flex: '1 1 auto', overflow: 'hidden' }}>
                                                    Operations excellence is the backbone of First Choice Supplies. My role is to ensure that every process runs smoothly, from logistics to customer service, ensuring a seamless experience for all our clients. We take pride in our ability to meet your unique requirements with precision and care. We focus on process improvement and customer service excellence to ensure that FCS remains your trusted supply partner.
                                                </p>
                                                <div className="author-wrapper d-flex align-items-center mt-auto">
                                                    <div className="avatar me-3">
                                                        <img
                                                            src="assets/images/about/KANNAN K V.png"
                                                            alt="testimonails-avatar"
                                                            className="rounded-circle"
                                                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                    <div className="information">
                                                        <h6 className="title mb-1">Kannan K V</h6>
                                                        <span className="desig text-muted">Position</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100">
                                            <div className="single-testimonials-area-one p-4 h-100 d-flex flex-column" style={{ minHeight: '400px' }}>
                                                <p className="disc mb-4" style={{ flex: '1 1 auto', overflow: 'hidden' }}>
                                                Welcome to First Choice Supplies!
We are dedicated to delivering top-quality products and outstanding service to support your business needs. At FCS, we believe in strong partnerships built on trust, reliability, and innovation.
With over 15 years of experience, I’m proud to lead our journey toward excellence. Our goal is to offer smart solutions that help our clients succeed and grow. We focus on improving supply chains, putting clients first, and constantly finding better ways to serve you.     </p>
                                                <div className="author-wrapper d-flex align-items-center mt-auto">
                                                    <div className="avatar me-3">
                                                        <img
                                                            src="assets/images/about/MOHAMED ALI J.png"
                                                            alt="testimonails-avatar"
                                                            className="rounded-circle"
                                                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                    <div className="information">
                                                        <h6 className="title mb-1">Mohamed Ali J</h6>
                                                        <span className="desig text-muted">Position</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;