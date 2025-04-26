"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProjectsArea = () => {
    return (
        <>
            {/* rts projects area start */}
            <div className="rts-project-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-style-5-title-between">
                                <h2 className="title">Projects</h2>
                                <p className="disc">
                                    Offers a unified platform that fosters innovation while providing
                                    end-to-end data management. See how we help your team solve
                                    today's biggest challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--45">
                        <div className="col-lg-12">
                            <div className="swiper-project-main-wrapper" dir="ltr">
                                {/* Swiper */}
                                <div className="swiper mySwiper-project-5">
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        loop={true}
                                        autoplay={{
                                            delay: 500,
                                            disableOnInteraction: false,
                                        }}
                                        navigation={{
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }}
                                        pagination={{
                                            el: ".swiper-pagination",
                                            clickable: true,
                                        }}
                                        breakpoints={{
                                            // When the viewport is >= 640px
                                            240: {
                                                slidesPerView: 1,
                                                spaceBetween: 30,
                                            },
                                            // When the viewport is >= 768px
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 30,
                                            },
                                            // When the viewport is >= 1024px
                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                            },
                                        }}
                                        modules={[Navigation, Pagination, Autoplay]}
                                        speed={1000}
                                    >
                                        <SwiperSlide>
                                            <div className="single-project-area-5">
                                                <a href="#" className="thumbnail">
                                                    <img
                                                        src="assets/images/case-studies/15.webp"
                                                        alt="case-studies"
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <div className="inner">
                                                        <div className="left-content">
                                                        <a href="#">
                                                                <h4 className="title">Expo 2020 Projects</h4>
                                                            </a>
                                                            <ul>
                                                                <li>Fabrication and supply of customized crowd barriers for Al Wasl Plaza.</li>
                                                                <li>Supply of queue barriers with customized ribbons for multiple pavilions.</li>
                                                            </ul>
                                                          
                                                           
                                                        </div>
                                                        <div className="icon-area">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/service/icons/13.svg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" className="over_link" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-project-area-5">
                                                <a href="#" className="thumbnail">
                                                    <img
                                                        src="assets/images/case-studies/16.webp"
                                                        alt="case-studies"
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <div className="inner">
                                                        <div className="left-content">
                                                        <a href="#">
                                                                <h4 className="title">Dubai Police School Kits</h4>
                                                            </a>
                                                            <ul>
                                                                <li>Design and supply of customized school bags and kits.</li>
                                                            </ul>
                                                           
                                                        </div>
                                                        <div className="icon-area">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/service/icons/13.svg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" className="over_link" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-project-area-5">
                                                <a href="#" className="thumbnail">
                                                    <img
                                                        src="assets/images/case-studies/17.webp"
                                                        alt="case-studies"
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <div className="inner">
                                                        <div className="left-content">
                                                        <a href="#">
                                                                <h4 className="title">National Day Celebrations (FAB)</h4>
                                                            </a>
                                                            <ul>
                                                                <li>Source and install laser lighting for the FAB HQ.</li>
                                                            </ul>
                                                          
                                                        </div>
                                                        <div className="icon-area">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/service/icons/13.svg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" className="over_link" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-project-area-5">
                                                <a href="#" className="thumbnail">
                                                    <img
                                                        src="assets/images/case-studies/17.webp"
                                                        alt="case-studies"
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <div className="inner">
                                                        <div className="left-content">
                                                        <a href="#">
                                                                <h4 className="title">PPE Supply During COVID-19</h4>
                                                            </a>
                                                            <ul>
                                                                <li>PPE products supplied to FAB, Noon, Cleveland Clinic, and during the pandemic.</li>
                                                            </ul>
                                                           
                                                        </div>
                                                        <div className="icon-area">
                                                            <a href="#">
                                                                <img
                                                                    src="assets/images/service/icons/13.svg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" className="over_link" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mt--80">
                            <div className="pagination-navigation-wrapper position-relative">
                                <div className="navigation">
                                    <div className="swiper-button-next">
                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                    </div>
                                    <div className="swiper-button-prev">
                                        <i className="fa-sharp fa-light fa-arrow-left" />
                                    </div>
                                </div>
                                <div className="pagination-2">
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts projects area end */}
        </>
    );
};

export default ProjectsArea;