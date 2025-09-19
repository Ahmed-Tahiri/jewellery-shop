import { Link } from "@inertiajs/react"
import { route } from "ziggy-js"

export let OrderCard = () => {


    let productName = 'Diamond Earring Full SET Hot New Ful Fll sak kklslaklaskl';
    const productNameModified = productName.length > 16 ? `${productName.substring(0, 15)}...` : productName;
    return <div className="w-full flex flex-row justify-between  py-3  ">
        <p className="font-poppins text-semi-black font-medium px-3 text-start flex-1 max-w-34">#SDGTI1252D</p>
        <div className="flex flex-col gap-y-2 items-start flex-1 px-3 border-s max-w-66 border-gray-800/15">

            <div className="flex flex-row gap-x-2 items-center ">
                <div className="max-w-16 min-w-16 aspect-square bg-powder-gray rounded-xs overflow-hidden">
                    <img src="https://png.pngtree.com/png-clipart/20231003/original/pngtree-white-pearl-bracelet-png-image_13229454.png" alt="product Image" className=" rounded-xs w-full aspect-square" />
                </div>
                <div className="flex flex-col items-start gap-y-0.5">
                    <p className="text-base font-poppins text-semi-black font-medium">{productNameModified}</p>
                    <p className="font-poppins text-dark-gray font-normal text-sm"> <span>4 Qty.</span></p>
                </div>
            </div>
            <div className="flex flex-row gap-x-2 items-center ">
                <div className="max-w-16 min-w-16 aspect-square bg-powder-gray rounded-xs overflow-hidden">
                    <img src="https://png.pngtree.com/png-clipart/20231003/original/pngtree-white-pearl-bracelet-png-image_13229454.png" alt="product Image" className=" rounded-xs w-full aspect-square" />
                </div>
                <div className="flex flex-col items-start gap-y-0.5">
                    <p className="text-base font-poppins text-semi-black font-medium">{productNameModified}</p>
                    <p className="font-poppins text-dark-gray font-normal text-sm"> <span>4 Qty.</span></p>
                </div>
            </div>
        </div>
        <p className="font-poppins text-semi-black font-medium px-3 text-start flex-1 border-s border-gray-800/15">Cash On Delivery</p>
        <div className=""><Link href={route('order.track.status')} className="bg-zinc inline-block p-3 text-white font-poppins shadow-xs">Track Order</Link></div>
    </div>
}
export default function Orders() {
    return (<div className="lg:w-6/8 md:w-5/7 w-10/12 flex flex-col items-start gap-y-7">
        <div className="w-full flex flex-col items-start gap-y-5">
            <div className="w-full  border-[1px] border-gray-300">
                <div className="w-full flex flex-row justify-between bg-mustard py-3 px-3 items-center">
                    <p className="font-poppins text-semi-black font-medium px-3 text-start flex-1 max-w-34">Order ID</p>
                    <p className="font-poppins text-semi-black font-medium px-3 text-start flex-1 border-s border-gray-800/15  max-w-66">Products</p>
                    <p className="font-poppins text-semi-black font-medium px-3 text-start flex-1 border-s border-gray-800/15">Payment Method</p>
                    <p className="font-poppins text-semi-black font-medium px-3 text-start flex-1"></p>
                </div>

                <div className="flex flex-col w-full items-start  gap-y-3 divide-y divide-gray-300 px-3">
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                </div>
            </div>
        </div>
    </div>)
}