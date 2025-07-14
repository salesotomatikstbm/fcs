"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import the required module
import "swiper/css"; // Swiper core styles
import "swiper/css/autoplay"; // Autoplay module styles (optional)

// Now the BrandArea component
const BrandArea = () => {
    const brandImages = [
        "assets/images/brand/1.png",
    "assets/images/brand/2.png",
    "assets/images/brand/3.png",
    "assets/images/brand/4.png",
    "assets/images/brand/5.png",
    "assets/images/brand/6.png",
    "assets/images/brand/7.png",
    "assets/images/brand/8.png",
    "assets/images/brand/9.png",
    "assets/images/brand/10.png",
    "assets/images/brand/11.png",
    "assets/images/brand/12.png",
    "assets/images/brand/13.png",
    "assets/images/brand/14.png",
    "assets/images/brand/15.png",
    "assets/images/brand/16.png",
    "assets/images/brand/17.png",
    "assets/images/brand/18.png",
    "assets/images/brand/19.png",
    "assets/images/brand/20.png",
    "assets/images/brand/21.png",
    "assets/images/brand/22.png",
    "assets/images/brand/23.png",
    "assets/images/brand/24.png",
    "assets/images/brand/25.png",
    "assets/images/brand/26.png",
    "assets/images/brand/27.png",
    "assets/images/brand/28.png",
    "assets/images/brand/29.png",
    "assets/images/brand/30.png",
    "assets/images/brand/31.png",
    "assets/images/brand/32.png",
    "assets/images/brand/33.png",
    "assets/images/brand/34.png",
    "assets/images/brand/35.png",
    "assets/images/brand/36.png",
    "assets/images/brand/37.png",
    "assets/images/brand/38.png"

    ];

return (
    <div className="rts-brand-area-start pt--80 rts-section-gapBottom" dir="ltr">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="brand-area-main-wrapper">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={5}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 5 },
                            }}
                        >
                            {brandImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="single-brand">
                                        <img src={image} alt={`brand-${index + 1}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default BrandArea;
