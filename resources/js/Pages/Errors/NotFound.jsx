import { Error } from "../../Components/Error";
import { SaleHeading } from "../../Components/SaleHeading";
import { Footer } from "../../Shared/Footer";
import { Header } from "../../Shared/Header";

export default function NotFound() {

    return <section className="w-full">
        <SaleHeading />
        <Header />
        <Error code={'404'} message={'Oops! Page not Found'} description={'The Page you are looking for cannot be found. take a break before trying again'} />
        <Footer />
    </section>

}