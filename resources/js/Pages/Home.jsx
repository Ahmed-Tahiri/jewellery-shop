import { AboutLanding } from "../Components/AboutLanding";
import { BestProducts } from "../Components/BestProducts";
import { Categories } from "../Components/Categories";
import { HomeFollowSection } from "../Components/HomeFollowSection";
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
            <BestProducts />
            <NewArrivals />
            <TrendyDesigns />
            <HomeFollowSection />
            <Footer />
        </section>
    );
}