
import { AboutLanding } from "../../Components/AboutLanding";
import { Navbar } from "../../Components/MyAccount/Navbar";
import { NewArrivals } from "../../Components/NewArrivals";
import { SaleSlider } from "../../Components/SaleSlider";
import MainLayout from "../../Layouts/MainLayout";

export default function About() {
    return <>
        <AboutLanding />

    </>

}

About.layout = page => (
    <MainLayout heading="About Us" breadcrumb={'Home / About Us'}>
        {page}
    </MainLayout>
);