import { AboutLanding } from "../Components/AboutLanding";
import { Categories } from "../Components/Categories";
import { Landing } from "../Components/Landing";
import { SaleHeading } from "../Components/SaleHeading";
import { Services } from "../Components/Services";
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
            <Footer />
        </section>
    );
}