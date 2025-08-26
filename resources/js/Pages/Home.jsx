import { Landing } from "../Components/Landing";
import { LandingServices } from "../Components/LandingServices";
import { SaleHeading } from "../Components/SaleHeading";
import { Footer } from "../Shared/Footer";
import { Header } from "../Shared/Header";

export default function Home() {
    return (
        <section className="w-full">
            <SaleHeading />
            <Header />
            <Landing />
            <LandingServices />
            <Footer />
        </section>
    );
}