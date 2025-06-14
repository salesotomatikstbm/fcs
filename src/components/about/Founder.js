import React from 'react'

const Founder = () => {
    return (
        <div className="rts-team-area mb--50">
        <div className="container mb--50">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-team-left title-between-wrapper">
                        <h2 className="title  text-white">Our Leadership Team</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-5">
                <div
                    className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up"
                >
                    <div className="single-team-style-one">
                        <a href="#" className="thumbnail">
                            <img src="assets/images/about/ANIL NAIR.png" alt="team" />
                        </a>
                        <div className="inner-content">
                            <a href="#">
                                <h3 className="title  text-white">Anil Nair</h3>
                            </a>
                            <span className="deg  text-white">Director</span>
                        </div>
                    </div>
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300"
                >
                    <div className="single-team-style-one">
                        <a href="#" className="thumbnail">
                            <img src="assets/images/about/KANNAN K V.png" alt="team" />
                        </a>
                        <div className="inner-content">
                            <a href="#">
                                <h3 className="title  text-white">Kannan K V</h3>
                            </a>
                            <span className="deg  text-white">Director</span>
                        </div>
                    </div>
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="500"
                >
                    <div className="single-team-style-one">
                        <a href="#" className="thumbnail">
                            <img src="assets/images/about/MOHAMED ALI J.png"  alt="team" />
                        </a>
                        <div className="inner-content">
                            <a href="#">
                                <h3 className="title text-white" >Mohamed Ali J</h3>
                            </a>
                            <span className="deg  text-white">Director</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Founder