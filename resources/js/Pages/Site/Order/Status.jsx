import { Timeline } from "../../../Components/Timeline"
import MainLayout from "../../../Layouts/MainLayout"



let ProductCard = () => {
    return (<div className="py-5 w-full">
        <div className="flex flex-row gap-x-2 items-center">
            <div className="w-16 aspect-square bg-powder-gray rounded-xs overflow-hidden">
                <img src="https://png.pngtree.com/png-clipart/20231003/original/pngtree-white-pearl-bracelet-png-image_13229454.png" alt="product Image" className=" rounded-xs w-full aspect-square" />
            </div>
            <div className="flex flex-col items-start gap-y-0.5">
                <p className="text-base font-poppins text-semi-black font-medium">Diamond Earring</p>
                <p className="font-poppins text-dark-gray font-normal text-sm"><span>Earring</span> | <span>4 Qty.</span></p>
            </div>
        </div>
    </div>)
}
export default function Status() {
    return <section className="flex bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-10  max-w-7xl ">
            <div className="w-full flex items-start flex-col gap-y-1">
                <p className="font-poppins text-semi-black font-semibold text-xl">Order Status</p>
                <p className="font-poppins text-semi-black text-base font-normal">Order ID: <span>#SDGTI1252D</span></p>
            </div>
            <Timeline />
            <div className="flex flex-col items-start w-full border-[1px] border-gray-300 px-5 divide-y-[1px] divide-gray-300">
                <h3 className="font-poppins w-full text-base font-medium text-semi-black py-5">Products</h3>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    </section>
}
Status.layout = page => (<MainLayout heading={'Track Your Order'} breadcrumb={'Home / Track Your Order'}>{page}</MainLayout>)