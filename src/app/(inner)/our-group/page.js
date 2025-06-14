"use client"
import BackToTop from "@/components/common/BackToTop";
import HeaderTwo from "@/components/header/HeaderTwo";
import CtaFour from "@/components/cta/CtaFour"
import FooterOne from "@/components/footer/FooterOne";
export default function Home() {
    const styling = {
        backgroundImage: `url(assets/images/career/03.webp)`,
    };
    return (
        <div className='#'>
            <HeaderTwo />

            <>


                <div className="company-values-area rts-section-gapTop">
                    <div className="container">




                        {/* NEW SECTION: Our Group of Companies */}
                        <div className="row ">
                            <div className="col-lg-12">
                                <div className="title-between-area-wrapper-main">
                                    <div className="title-left-area">
                                        <h2 className="title">Our Group of Companies</h2>
                                    </div>
                                    <p className="disc" style={{ textAlign: "justify" }}>
                                        We take pride in our group of companies, each playing a strategic role in driving our collective vision forward. With diverse expertise across technology, supply chain, trading, media, and automation, our subsidiaries work in synergy to deliver quality, innovation, and excellence across multiple industries. This integrated approach empowers us to offer comprehensive solutions, meet dynamic market demands, and continuously exceed client expectations on a global scale.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Group Companies Grid */}
                        <div className="row g-5 mt--30">
  {/* Otomatiks UAE */}
  <div className="col-lg-4 wow fadeInUp" data-wow-delay=".1s">
    <div className="single-values-in-action">
      <div className="information">
        <div className="icon">
          <a
            href="https://www.otomatiks.com" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets/images/partner/otomatiks.jpg"
              alt="Otomatiks UAE"
              style={{ width: "150px", height: "150px", objectFit: "contain" }}
            />
          </a>
        </div>
        <h6 className="title">Otomatiks UAE</h6>
        <p style={{ textAlign: "justify" }}>
          A technology driven solutions provider delivering smart automation, robotics, and industrial innovation tailored for the UAE market.
        </p>
      </div>
    </div>
  </div>

  {/* Al Rowad Supplies Company Ltd */}
  <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
    <div className="single-values-in-action">
    
      <div className="information">
          <div className="icon">
        <a
          href="https://www.alrowadsupplies.com" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/partner/Al Rowad Supplies.jpg"
            alt="Al Rowad"
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
          />
        </a>
      </div>
        <h6 className="title">Al Rowad Supplies Company Ltd</h6>
        <p style={{ textAlign: "justify" }}>
          A trusted leader in logistics and general trading, offering tailored supply chain solutions and dependable procurement services.
        </p>
      </div>
    </div>
  </div>

  {/* Heed Frames */}
  <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
    <div className="single-values-in-action">
      
      <div className="information">
        <div className="icon">
        <a
          href="https://www.heedframes.com" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/images/partner/Heed Frames.jpg"
            alt="Heed Frames"
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
          />
        </a>
      </div>
        <h6 className="title">Heed Frames</h6>
        <p style={{ textAlign: "justify" }}>
          A creative powerhouse specializing in media production, corporate branding, and digital content strategy for impactful storytelling.
        </p>
      </div>
    </div>
  </div>
</div>


                    </div>
                </div>




            </>



            <CtaFour />
            <FooterOne />
            <BackToTop />
        </div>
    );
}
