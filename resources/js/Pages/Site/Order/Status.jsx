import { Timeline } from "../../../Components/Timeline"
import MainLayout from "../../../Layouts/MainLayout"

export default function Status() {
    return <section className="flex bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-10  max-w-7xl ">
            <div className="w-full flex items-start flex-col gap-y-1">
                <p className="font-poppins text-semi-black font-semibold text-xl">Order Status</p>
                <p className="font-poppins text-semi-black text-base font-normal">Order ID: <span>#SDGTI1252D</span></p>
            </div>
            <Timeline />
        </div>
    </section>
}
Status.layout = page => (<MainLayout heading={'Track Your Order'} breadcrumb={'Home / Track Your Order'}>{page}</MainLayout>)