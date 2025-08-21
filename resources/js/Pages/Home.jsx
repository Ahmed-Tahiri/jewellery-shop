import { Landing } from "../Components/Landing";
import { SaleHeading } from "../Components/SaleHeading";
import { Footer } from "../Shared/Footer";
import { Header } from "../Shared/Header";

export default function Home() {
    return (
        <section className="w-full">
            <SaleHeading />
            <Header />
            <Landing />
            <Footer />
        </section>
    );
}