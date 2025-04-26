
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import BannerCaseStudies from "@/components/banner/BannerCaseStudies";
import CtaFour from "@/components/cta/CtaFour";
import BrandArea from "@/components/brand/Brand";
import FooterTwo from "@/components/footer/FooterTwo";
import Project from "@/components/casestudies/Project";
import ServiceOne from "@/components/services/ServiceOne";
import Testimonials from "@/components/testimonials/Testimonials";
import TestimonialsCustomer from "@/components/testimonials/TestimonialsCustomer";
import Customerhero from "@/components/about/Customerhero";
export default function Home() {
    return (
        <div className='#'>
            <HeaderTwo />
            <Customerhero />
           <BrandArea />
          
           {/* <Project /> */}
           <ServiceOne />
<TestimonialsCustomer />
         <CtaFour />
         <FooterOne />
            <BackToTop />
        </div>
    );
}


