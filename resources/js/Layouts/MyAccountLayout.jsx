import { LandingServices } from "../Components/LandingServices";
import { SaleHeading } from './../Components/SaleHeading';
import { Header } from './../Shared/Header';
import { Footer } from './../Shared/Footer';
import { SectionHeading } from "../Shared/SectionHeading";
import { Navbar } from "../Components/MyAccount/Navbar";


export default function MyAccountLayout({ children }) {
    return (
        <section className="w-full">
            <SaleHeading />
            <Header />
            <SectionHeading heading={'My Account'} breadcrumb={'Home / My Account'} />
            <main className="w-full px-20 py-15 flex flex-row gap-x-5">
                <Navbar />
                {children}
            </main>
            <LandingServices />
            <Footer />
        </section>
    );
}