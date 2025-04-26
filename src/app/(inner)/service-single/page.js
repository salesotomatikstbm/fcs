
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import FeatureTwo from "@/components/feature/FeatureTwo";
import ServiceSingle from "@/components/banner-service/ServiceSingle";
import TestimonialsFive from "@/components/testimonials/TestimonialsFive";
import CtaSix from "@/components/cta/CtaSix";
import SingleDetails from "@/components/service-component/SingleDetails";
import MoreSolutions from "@/components/service-component/MoreSolution";
import HeaderOne from "@/components/header/HeaderTwo";
import GiftPromoDetails from "@/components/services/GiftPromoDetails";
import CtaFour from "@/components/cta/CtaFour";

export default function Home() {
    return (
        <div className='#'>

            <HeaderOne />
            <GiftPromoDetails />
            {/* <HeaderTwo />
            <ServiceSingle />
            <SingleDetails />
            <MoreSolutions/>


            <FeatureTwo />
            <TestimonialsFive />
            <CtaSix /> */}
            <CtaFour />
            <FooterOne />
            <BackToTop />
        </div>
    );
}
