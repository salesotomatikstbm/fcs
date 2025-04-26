"use client"
import React from 'react'
import { 
  FaCity,          // Dubai Municipality
  FaSchool,        // Abu Dhabi Education Council
  FaUniversity,    // Emirates NBD (using University as bank alternative)
  FaHospital,      // Dubai Health Authority
  FaShoppingBag,   // Majid Al Futtaim Group
  FaGraduationCap, // GEMS Education
  FaHotel,         // Rotana Hotels
  FaBriefcase      // Al Tayer Group
} from 'react-icons/fa'

function ServiceFive() {
  return (
    <div>
      {/* innovative solution area start */}
      <div className="innovative-solution rts-section-gap bg-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-4-center">
                <h2 className="title">Our Clients</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            {/* Client 1 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <FaCity size={48} />
                </div>
                <div className="info">
                  <h4 className="title">Dubai Municipality</h4>
                </div>
              </div>
            </div>

            {/* Client 2 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <FaSchool size={48} />
                </div>
                <div className="info">
                  <h4 className="title">Abu Dhabi Education Council</h4>
                </div>
              </div>
            </div>

            {/* Client 3 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <FaUniversity size={48} />
                </div>
                <div className="info">
                  <h4 className="title">Emirates NBD</h4>
                </div>
              </div>
            </div>

            {/* Client 4 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <FaHospital size={48} />
                </div>
                <div className="info">
                  <h4 className="title">Dubai Health Authority</h4>
                </div>
              </div>
            </div>

            {/* Client 5 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <FaShoppingBag size={48} />
                </div>
                <div className="info">
                  <h4 className="title">Majid Al Futtaim Group</h4>
                </div>
              </div>
            </div>

            {/* Client 6 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <FaGraduationCap size={48} />
                </div>
                <div className="info">
                  <h4 className="title">GEMS Education</h4>
                </div>
              </div>
            </div>

            {/* Client 7 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <FaBriefcase size={48} />
                </div>
                <div className="info">
                  <h4 className="title">Al Tayer Group</h4>
                </div>
              </div>
            </div>

            {/* Client 8 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <div className="single-service-area-wrapper">
                <div className="icon">
                  <FaHotel size={48} />
                </div>
                <div className="info">
                  <h4 className="title">Rotana Hotels</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceFive