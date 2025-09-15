import { SaleHeading } from './../Components/SaleHeading';
import { Header } from './../Shared/Header';
import { Footer } from './../Shared/Footer';
import { Services } from "../Components/Services";
import { MobileHeader } from '../Shared/MobileHeader';
import { PageHeading } from '../Shared/PageHeading';


export default function MainLayout({ children, heading, breadcrumb }) {

    return (
        <section className="w-full relative">
            <SaleHeading />
            <Header />
            <MobileHeader />
            <PageHeading heading={heading} breadcrumb={breadcrumb} />
            <main className="w-full">
                {children}
            </main>
            <Services />
            <Footer />
        </section>
    );
}
