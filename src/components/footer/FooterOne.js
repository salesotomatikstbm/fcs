"use client";
import React from 'react';
import Link from 'next/link';

function FooterOne() {
    return (
        <div>
            {/* rts footer area start */}
            <div className="rts-footer-area rts-section-gapTop pb--80 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="logo-area">
                                <Link href="/#" className="logo">
                                    <img src="/assets/images/logo/logo.png" alt="logo" />
                                </Link>
                                <p className="disc">
                                    Everything your business needs, Delivered.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="row g-5">
                                {/* Company Links */}
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Company</p>
                                        <ul>
                                            <li><Link href="/about">About us</Link></li>
                                            <li><Link href="/service">Service</Link></li>
                                            
                                            <li><Link href="/our-customers">Our Customers</Link></li>
                                            <li><Link href="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Services Links */}
                                {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Services</p>
                                        <ul>
                                            <li><Link href="">Office Supplies & Stationery</Link></li>
                                            <li><Link href="">Customized Gifts & Promotional Items</Link></li>
                                            <li><Link href="">Workspace Solutions</Link></li>
                                            <li><Link href="">Educational Partnerships</Link></li>
                                            <li><Link href="">LED & Facade Lighting Projects</Link></li>
                                            <li><Link href="">Video & Ad Shooting Division</Link></li>
                                        </ul>
                                    </div>
                                </div> */}

                                {/* Contact Details + Map */}
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Contact</p>
                                        <ul>
                                            <li><i className="fa fa-phone" /> <a href="tel:+971555867611">+971 55 586 7611</a></li>
                                            <li><i className="fa fa-envelope" /> <a href="mailto:mohamed@firstchoicestationery.ae">mohamed@firstchoicestationery.ae</a></li>
                                            <li><i className="fa fa-map-marker-alt" /> Opp. DBC Building G5, Al Muhairi Plaza, Al Kabaisi, Deira, Dubai, UAE</li>
                                        </ul>
                                        <div className="footer-map mt-3">
                                            <iframe
                                                src="https://www.google.com/maps?q=Deira,+Dubai,+UAE&output=embed"
                                                width="100%"
                                                height="150"
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts footer area end */}

            {/* rts copyright area start */}
            <div className="rts-copyright-area-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-wrapper">
                                <p>© 2025 First Choice Supplies. All rights reserved.</p>
                                <div className="social-copyright-area">
                                    <ul>
                                        <li aria-label="Visit our Facebook page"><Link href="/#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                        <li aria-label="Visit our Twitter page"><Link href="/#"><i className="fa-brands fa-twitter" /></Link></li>
                                        <li aria-label="Visit our Youtube page"><Link href="/#"><i className="fa-brands fa-youtube" /></Link></li>
                                        <li aria-label="Visit our Linkedin page"><Link href="/#"><i className="fa-brands fa-linkedin" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts copyright area end */}
        </div>
    );
}

export default FooterOne;
