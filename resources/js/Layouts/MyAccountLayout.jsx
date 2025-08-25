import { LandingServices } from "../Components/LandingServices";
import { SaleHeading } from './../Components/SaleHeading';
import { Header } from './../Shared/Header';
import { Footer } from './../Shared/Footer';
import Index from "../Pages/MyAccount/Index";
import { SectionHeading } from "../Shared/SectionHeading";

export default function MyAccountLayout() {
    return (
        <section className="w-full">
            <SaleHeading />
            <Header />
            <SectionHeading heading={'My Account'} breadcrumb={'Home / My Account'} />
            <main className="w-full">
                <Index />
            </main>
            <LandingServices />
            <Footer />
        </section>
    );
}