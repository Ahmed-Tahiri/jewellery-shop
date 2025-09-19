import { Link } from "@inertiajs/react";
import { SummaryDataComponent } from "../../../Components/SummaryData";
import MainLayout from "../../../Layouts/MainLayout";
import FormatPKR from "../../../Utilities/FormatPKR";
import { route } from "ziggy-js";
import { FaMoneyCheck } from "react-icons/fa6";

export default function Payment() {

    return (<section className="flex bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-10  max-w-7xl ">
            <div className="w-full flex flex-row items-start justify-between gap-x-7">
                <div className="w-8/11 flex flex-col gap-y-7 items-start">
                    <div className="w-full flex flex-col gap-y-3">
                        <h3 className="w-full font-poppins font-semibold text-semi-black text-xl">Choose from Existing</h3>
                        <div className="w-full flex items-start gap-y-2 flex-col">
                            <label htmlFor="paymentMethod" className=" cursor-pointer hover:bg-powder-gray transition-colors ease-linear duration-200 flex w-full flex-row gap-x-5 items-center justify-start border-[1px] border-gray-300 p-4"><input checked
                                value={'cod'} type="radio" name="checkoutPayment" id={`paymentMethod`} className="cursor-pointer h-5 w-5" />
                                <p className="flex flex-row items-center gap-x-3"><FaMoneyCheck className="text-green-800 text-3xl" /><span className="font-poppins text-base text-semi-black font-medium capitalize">Cash on Delivery</span></p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-3/11 border-[1px] border-gray-300 px-3 shadow-xs">
                    <h6 className="font-poppins text-base font-medium text-semi-black py-3">Order Summary</h6>
                    <div className="flex w-full flex-col gap-y-4 py-4  border-y-2 border-gray-300">
                        <SummaryDataComponent heading={'Items'} data={9} />
                        <SummaryDataComponent heading={'Sub Total'} data={FormatPKR(3670)} />
                        <SummaryDataComponent heading={'Shipping'} data={FormatPKR(0)} />
                        <SummaryDataComponent heading={'Taxes'} data={FormatPKR(0)} />
                        <SummaryDataComponent heading={'Coupon Discount'} data={`-${FormatPKR(100)}`} />
                    </div>
                    <div className="py-4">
                        <SummaryDataComponent heading={'Total'} data={FormatPKR(3570)} />
                    </div>
                    <div className="flex w-full flex-col gap-y-3 py-4">
                        <Link as={'button'} method="post" href={route('checkout.order.submit')} type="submit" form="checkoutAddressForm" className="p-3 text-white bg-zinc w-full font-poppins cursor-pointer text-base hover:bg-zinc-dark shadow-sm">Place Order</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}
Payment.layout = page => <MainLayout heading={'Checkout'} breadcrumb={'Home / Shopping Cart / Payment'}>{page}</MainLayout>