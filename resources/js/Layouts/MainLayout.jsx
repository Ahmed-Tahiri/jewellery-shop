import { SaleHeading } from './../Components/SaleHeading';
import { Header } from './../Shared/Header';
import { Footer } from './../Shared/Footer';
import { Services } from "../Components/Services";
import { MobileHeader } from '../Shared/MobileHeader';
import { PageHeading } from '../Shared/PageHeading';


export default function MainLayout({ children, heading, breadcrumb }) {

    return (
        <section className="w-full">
            <SaleHeading />
            <Header />
            <MobileHeader />
            <PageHeading heading={heading} breadcrumb={breadcrumb} />
            <main className="w-full px-5 md:px-10 lg:px-15 xl:px-20 py-15 max-w-7xl mx-auto">
                {children}
            </main>
            <Services />
            <Footer />
        </section>
    );
}
