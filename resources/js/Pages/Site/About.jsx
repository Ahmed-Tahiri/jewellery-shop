import MainLayout from "../../Layouts/MainLayout";

export default function About() {
    return <div>Hello</div>
}

About.layout = page => (
    <MainLayout heading="About Us" breadcrumb={'Home / About Us'}>
        {page}
    </MainLayout>
);