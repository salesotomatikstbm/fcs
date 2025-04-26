




import ServiceBanner from "@/components/banner/ServiceBanner";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import ServiceSeven from "@/components/services/ServiceSeven";
import ServiceList from "@/components/services/ServiceList";
import SolutionCounter from "@/components/services/SolutionCounter";
import LargeImage from "@/components/large-video/LargeImage";
import FeatureTwo from "@/components/feature/FeatureTwo";
import CtaFive from "@/components/cta/CtaFive";
import TestimonialsFive from "@/components/testimonials/TestimonialsFive";
import CtaSix from "@/components/cta/CtaSix";
import Item1 from "@/components/services/Item1";
import ServicesPage from "@/components/services/ServicesPage";
import CtaFour from "@/components/cta/CtaFour";


export default function Home() {
    return (
        <div className='#'>
            <HeaderTwo />
            <ServiceBanner />
          <ServicesPage />
  
           <CtaFour />
            <FooterOne />
            <BackToTop />
        </div>
    );
}
