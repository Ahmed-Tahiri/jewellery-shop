import { SaleHeading } from './../Components/SaleHeading';
import { Header } from './../Shared/Header';
import { Footer } from './../Shared/Footer';
import { Navbar } from "../Components/MyAccount/Navbar";
import { Services } from "../Components/Services";
import { MobileHeader } from '../Shared/MobileHeader';
import { PageHeading } from '../Shared/PageHeading';


export default function MyAccountLayout({ children }) {
    return (
        <section className="w-full">
            <SaleHeading />
            <Header />
            <MobileHeader />
            <PageHeading heading={'My Account'} breadcrumb={'Home / My Account'} />
            <main className="w-full px-5 md:px-10 lg:px-15 xl:px-20 py-15">
                <div className="w-full flex flex-row gap-x-4 md:gap-x-6 lg:gap-x-8 max-w-7xl mx-auto">
                    <Navbar />
                    {children}
                </div>
            </main>
            <Services />
            <Footer />
        </section>
    );
}