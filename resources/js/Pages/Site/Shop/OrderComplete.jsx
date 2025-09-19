import { FaCheck } from "react-icons/fa6";
import MainLayout from "../../../Layouts/MainLayout";
import { format } from "date-fns";
import FormatPKR from "../../../Utilities/FormatPKR";


const OrderTableHeader = ({ title, data }) => {
    return (<div className="px-5 flex-1 flex flex-col items-start gap-y-1">
        <p className="font-poppins text-dark-gray font-normal">{title}</p>
        <p className="font-poppins text-semi-black font-medium text-lg">{data}</p>
    </div>)
}

const OrderAmountCard = ({ title, data }) => {
    return <div className="w-full items-center justify-between flex flex-row">
        <p className="font-poppins text-semi-black font-medium" >{title}</p>
        <p className="font-poppins text-semi-black font-medium" >{FormatPKR(data)}</p>
    </div>
}
const OrderCompleteProductCard = () => {
    return (
        <div className="flex w-full justify-between items-center flex-row">
            <div className="flex flex-row gap-x-2 items-center">
                <div className="w-16 aspect-square bg-powder-gray rounded-xs overflow-hidden">
                    <img src="https://png.pngtree.com/png-clipart/20231003/original/pngtree-white-pearl-bracelet-png-image_13229454.png" alt="product Image" className=" rounded-xs w-full aspect-square" />
                </div>
                <div className="flex flex-col items-start gap-y-0.5">
                    <p className="text-base font-poppins text-semi-black font-medium">Diamond Earring</p>
                    <p className="font-poppins text-dark-gray font-normal text-sm">Earrings</p>
                </div>
            </div>
            <p className="font-poppins font-medium text-semi-black">{FormatPKR(1280)}</p>
        </div>
    )
}
export default function OrderComplete() {
    let currentDate = new Date();
    const formattedDate = format(currentDate, 'dd MMMM yyyy');
    return (<section className="flex bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-10  max-w-7xl ">
            <div className="flex flex-col w-full gap-y-5 items-center">
                <div className="h-14 w-14 bg-mustard rounded-full shadow-xs flex items-center justify-center">
                    <FaCheck className="text-zinc-dark text-4xl" />
                </div>
                <div className="flex flex-col gap-y-2 items-center w-full">
                    <h4 className="font-poppins text-3xl font-semibold text-semi-black">Your order is completed!</h4>
                    <p className="font-poppins text-lg text-dark-gray">Thank you. Your Order has been received.</p>
                </div>
            </div>
            <div className="w-full flex flex-col gap-y-5">
                <div className="bg-mustard flex py-5 divide-x-[1px] divide-gray-800/14">
                    <OrderTableHeader data={'#SGDT1254FD'} title={'Order ID'} />
                    <OrderTableHeader data={'Cash On Delivery'} title={'Payment Method'} />
                    <OrderTableHeader data={'TR542SSFE'} title={'Transaction ID'} />
                    <OrderTableHeader data={formattedDate} title={'Estimated Delivery Date'} />
                    <div className="px-3 flex-1 flex justify-end items-center">
                        <button className="text-center cursor-pointer p-3 bg-zinc text-white font-poppins hover:bg-zinc-dark transition-colors ease-linear duration-200">Download Invoice</button>
                    </div>
                </div>
                <div className="px-4 flex flex-col items-center border-[1px] border-gray-300 divide-y-[1px] divide-gray-300">
                    <p className="w-full items-start py-4 font-poppins text-xl font-medium text-semi-black">Order Details</p>
                    <div className="w-full flex flex-col gap-y-2 py-4 items-start">
                        <div className="flex flex-row justify-between w-full items-center">
                            <p className="font-poppins text-semi-black font-medium" >Products</p>
                            <p className="font-poppins text-semi-black font-medium" >Sub Total</p>
                        </div>
                        <div className="flex flex-col gap-y-4 w-full">
                            <OrderCompleteProductCard />
                            <OrderCompleteProductCard />
                            <OrderCompleteProductCard />
                        </div>
                    </div>
                    <div className="flex flex-col  py-4 gap-y-4 w-full">
                        <OrderAmountCard data={0} title={'Shipping'} />
                        <OrderAmountCard data={0} title={'Taxes'} />
                        <OrderAmountCard data={100} title={'Coupon Discount'} />
                    </div>
                    <div className="flex flex-col  py-4 gap-y-4 w-full">
                        <OrderAmountCard data={3570} title={'Total'} />
                    </div>
                </div>
            </div>
        </div>
    </section>);
}
OrderComplete.layout = page => (<MainLayout heading={'Order Completed'} breadcrumb={'Home / Order Completed'}>{page}</MainLayout>)