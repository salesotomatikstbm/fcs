
import BannerThree from "@/components/banner/BannerThree";
import BackToTop from "@/components/common/BackToTop";

import HeaderTwo from "@/components/header/HeaderTwo";

import ServiceThree from "@/components/services/ServiceThree";

import Project from "@/components/casestudies/Project";

import FeatureTwo from "@/components/feature/FeatureTwo";
import FooterOne from "@/components/footer/FooterOne";
import ServiceList from "@/components/services/ServiceList";
import ServiceFive from "@/components/services/ServiceFive";
import Wedo from "@/components/whatwe-do/Wedo";
import ServiceOne from "@/components/services/ServiceOne";
import CtaFour from "@/components/cta/CtaFour";
import Clint from "@/components/about/Clint";

export default function Home() {
    return (
        <div className='#'>

            <HeaderTwo />
            <BannerThree />
            {/* <ServiceList /> */}
          <Wedo />
            <ServiceThree />
            {/* <ServiceFive /> */}
            {/* <FeatureTwo /> */}
            <Clint />
            <ServiceOne />
            {/* <Project /> */}
            <CtaFour />
        <FooterOne />
            <BackToTop />
        </div>
    );
}
