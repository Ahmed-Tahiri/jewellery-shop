import { AboutLanding } from "../../Components/AboutLanding";
import MainLayout from "../../Layouts/MainLayout";

export default function About() {
    return <section className="w-full relative h-100  px-5 md:px-10 lg:px-15 xl:px-20 py-15 ">
        <AboutLanding />
    </section>
}

About.layout = page => (
    <MainLayout heading="About Us" breadcrumb={'Home / About Us'}>
        {page}
    </MainLayout>
);