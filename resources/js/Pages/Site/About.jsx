import { AboutLanding } from "../../Components/AboutLanding";
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