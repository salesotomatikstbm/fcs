"use client"
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ReactSVG } from 'react-svg';

export default function Home() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "your_service_id", // Replace with your Service ID
                "your_template_id", // Replace with your Template ID
                form.current,
                "your_public_key" // Replace with your Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send the message. Please try again later.");
                }
            );
    };

    return (
        <div className='#'>
            <HeaderTwo />

            <>
                {/* contact banner areas start */}
                <div className="contact-page-banner jarallax bg_iamge"></div>
                {/* contact banner areas end */}

                <div className="contact-area-form-wrapper rts-section-gapTop">
                    <div className="container-contact">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center-title-bg-white">
                                    <h2 className="title">Get in touch</h2>
                                    <p>We’d love to hear from you. Please fill out this form.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <form
                                    ref={form}
                                    onSubmit={sendEmail}
                                    className="contact-form"
                                    id="contact-form"
                                >
                                    <div className="half-input-wrapper">
                                        <div className="single">
                                            <label htmlFor="name">First name<span style={{ color: 'red' }}> *</span></label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="first_name"
                                                placeholder="First name"
                                                required
                                            />
                                        </div>
                                        <div className="single">
                                            <label htmlFor="last">Last name<span style={{ color: 'red' }}> *</span></label>
                                            <input
                                                type="text"
                                                id="last"
                                                name="last_name"
                                                placeholder="Last name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="single">
                                        <label htmlFor="phone">Phone<span style={{ color: 'red' }}> *</span></label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder=""
                                            pattern="^[0-9+\-]+$"
                                        />
                                    </div>

                                    <div className="single">
                                        <label htmlFor="service">Service<span style={{ color: 'red' }}> *</span></label>
                                        <select
                                            id="service"
                                            name="service"
                                            required
                                        >
                                            <option value="">-- Select a service --</option>
                                            <option value="Office Supplies & Smart Solutions">Office Supplies & Smart Solutions</option>
                                            <option value="Corporate Gifting & Merchandise">Corporate Gifting & Merchandise</option>
                                            <option value="Branding & Marketing Solutions">Branding & Marketing Solutions</option>
                                            <option value="Event Management">Event Management</option>
                                            <option value="Healthcare & General Supplies">Healthcare & General Supplies</option>
                                            <option value="Hospitality Specialist">Hospitality Specialist</option>
                                            <option value="Workspace & Wellness">Workspace & Wellness</option>
                                                <option value="General Trading">General Trading</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>

                                    <div className="single">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Leave us a message..."
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="rts-btn btn-primary">
                                        Send message
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rts-google-map-area rts-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="google-map-wrapper">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d17440.971924783542!2d55.32686843209241!3d25.259587666751155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d25.264347899999997!2d55.3344397!4m5!1s0x3e5f5cdd326b4687%3A0x8e34a16398be72fa!2s24%2018%20St%20-%20Al%20Khabaisi%20-%20Dubai%20-%20United%20Arab%20Emirates!3m2!1d25.2642062!2d55.334346999999994!5e0!3m2!1sen!2sin!4v1745389209845!5m2!1sen!2sin"
                                        width={600}
                                        height={500}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rts-location-contact-area pt--70">
                    <div className="container">
                        <div className="row section-seperator-b pb--90 g-5">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-location-area-contact">
                                    <div className="icon">
                                        <i className="fa-sharp fa-regular fa-location-dot" />
                                    </div>
                                    <p>Phone</p>
                                    <span>
                                        <a href="tel:+971555867611">+971 55 586 7611</a>
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-location-area-contact">
                                    <div className="icon">
                                        <i className="fa-sharp fa-regular fa-location-dot" />
                                    </div>
                                    <p>Email</p>
                                    <span>
                                        <a href="mailto:mohamed@firstchoicestationery.ae">
                                            mohamed@firstchoicestationery.ae
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-location-area-contact">
                                    <div className="icon">
                                        <i className="fa-sharp fa-regular fa-location-dot" />
                                    </div>
                                    <p>Address</p>
                                    <span>
                                        Opp. DBC Building G5, Al Muhairi Plaza, Al Kabaisi, Deira, Dubai, UAE
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            <FooterOne />
            <BackToTop />
        </div>
    );
}
