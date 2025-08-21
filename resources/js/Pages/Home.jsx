import { Landing } from "../Components/Landing";
import { SaleHeading } from "../Components/SaleHeading";
import { Header } from "../Shared/Header";

export default function Home() {
    return (
        <section className="w-full">
            <SaleHeading />
            <Header />
            <Landing />

        </section>
    );
}