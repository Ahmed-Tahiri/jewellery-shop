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
            <main className="w-full px-20 py-15">
                <div className="w-full flex flex-row gap-x-8 max-w-7xl mx-auto">
                    <Navbar />
                    {children}
                </div>
            </main>
            <LandingServices />
            <Footer />
        </section>
    );
}