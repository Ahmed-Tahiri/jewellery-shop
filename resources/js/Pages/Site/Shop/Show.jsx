import MainLayout from "../../../Layouts/MainLayout";


export default function Show({ product }) {


}

Show.layout = page => {
    const category = page.props?.product?.category ?? 'Shop';
    const breadcrumb = `Home / Shop / ${category} / Shop Details`;
    return (
        <MainLayout heading="Shop" breadcrumb={breadcrumb}>
            {page}
        </MainLayout>
    );
};