import React from 'react';
import { FaBuilding, FaUniversity, FaHospital, FaShoppingCart, FaSchool, FaUsers, FaHotel } from 'react-icons/fa';
import BrandArea from '../brand/Brand';

const Client = () => {
  return (
    <div className="single-large-case-studies-area-details ">
      <div className="container">

        <div className="keybenefits-area rts-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="benefits-area-title-wrapper">
                  <h3 className="title">Our Clients</h3>
                </div>
              </div>
            </div>

<BrandArea />


            {/* <div className="row g-0 mt--35">
              <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="100">
                <div className="single-benefits-area-wrapper bg-light text-center p-4">
                  <FaBuilding size={40} />
                  <h5 className="title mt-3">Dubai Municipality</h5>
                </div>
              </div>
              <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="200">
                <div className="single-benefits-area-wrapper text-center p-4">
                  <FaUniversity size={40} />
                  <h5 className="title mt-3">Abu Dhabi Education Council</h5>
                </div>
              </div>
              <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="300">
                <div className="single-benefits-area-wrapper bg-light text-center p-4">
                  <FaUniversity size={40} />
                  <h5 className="title mt-3">Emirates NBD</h5>
                </div>
              </div>
              <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="400">
                <div className="single-benefits-area-wrapper text-center p-4">
                  <FaHospital size={40} />
                  <h5 className="title mt-3">Dubai Health Authority</h5>
                </div>
              </div>
              <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="100">
                <div className="single-benefits-area-wrapper text-center p-4">
                  <FaShoppingCart size={40} />
                  <h5 className="title mt-3">Majid Al Futtaim Group</h5>
                </div>
              </div>
              <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="200">
                <div className="single-benefits-area-wrapper bg-light text-center p-4">
                  <FaSchool size={40} />
                  <h5 className="title mt-3">GEMS Education</h5>
                </div>
              </div>
              <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="300">
                <div className="single-benefits-area-wrapper text-center p-4">
                  <FaUsers size={40} />
                  <h5 className="title mt-3">Al Tayer Group</h5>
                </div>
              </div>
              <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="400">
                <div className="single-benefits-area-wrapper bg-light text-center p-4">
                  <FaHotel size={40} />
                  <h5 className="title mt-3">Rotana Hotels</h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Client;
