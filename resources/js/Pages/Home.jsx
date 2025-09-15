import { AboutLanding } from "../Components/AboutLanding";
import { BestProducts } from "../Components/BestProducts";
import { Categories } from "../Components/Categories";
import { FAQ } from "../Components/FAQs";
import { HomeFollowSection } from "../Components/HomeFollowSection";
import { SaleSection } from "../Components/HomeSaleSection";
import { Landing } from "../Components/Landing";
import { NewArrivals } from "../Components/NewArrivals";
import { SaleHeading } from "../Components/SaleHeading";
import { Services } from "../Components/Services";
import { TrendyDesigns } from "../Components/TrendyDesigns";
import { Footer } from "../Shared/Footer";
import { Header } from "../Shared/Header";
import { MobileHeader } from "../Shared/MobileHeader";

export default function Home() {
    return (
        <section className="w-full relative">
            <SaleHeading />
            <MobileHeader />
            <Header />
            <Landing />
            <Services />
            <Categories />
            <AboutLanding />
            {/* <section className="py-20 px-5 md:px-10 lg:px-15 xl:px-20 "> 
             </section> */}
            <BestProducts />
            <NewArrivals />
            <SaleSection />
            <TrendyDesigns />
            <HomeFollowSection />
            <FAQ />
            <Footer />
        </section>
    );
}