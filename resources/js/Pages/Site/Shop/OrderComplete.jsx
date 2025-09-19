import MainLayout from "../../../Layouts/MainLayout";

export default function OrderComplete() {
    return (<section className="flex bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-10  max-w-7xl ">

        </div>
    </section>);
}
OrderComplete.layout = page => (<MainLayout heading={'Order Completed'} breadcrumb={'Home / Order Completed'}>{page}</MainLayout>)