import MainLayout from "../../../Layouts/MainLayout";
import FormatPKR from "../../../Utilities/FormatPKR";
import { CartProductCard } from "../../../Components/CartProductCard";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { SummaryDataComponent } from "../../../Components/SummaryData";


export let removeFromCart = () => { }
export default function Cart() {

    return (<section className="flex bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-10  max-w-7xl ">
            <div className="w-full flex flex-row items-start justify-between gap-x-7">
                <div className="w-8/11 flex flex-col gap-y-7 items-start">
                    <div className="w-full">
                        <table className="w-full">
                            <thead className="bg-mustard">
                                <tr>
                                    <th className="font-poppins text-zinc font-medium text-start py-3 px-6">Product</th>
                                    <th className="font-poppins text-zinc font-medium text-start py-3 px-2">Price</th>
                                    <th className="font-poppins text-zinc font-medium text-start py-3 px-2">Quantity</th>
                                    <th className="font-poppins text-zinc font-medium text-start py-3 px-2">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody >
                                <CartProductCard />
                                <CartProductCard />
                                <CartProductCard />
                                <CartProductCard />
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center">
                        <div className="w-6/10 flex gap-x-2 items-center justify-start">
                            <div className="w-6/10">
                                <input className="border-2 font-poppins border-gray-300 shadow-xs w-full sm:p-2 p-1.5 text-semi-black outline-0  focus:border-light-gray focus:border-[3px]  transition-all ease-linear duration-200 text-sm sm:text-base h-11" placeholder="Coupon Code" type="text" name="discount_code" id="DiscountCode" />
                            </div>
                            <div className="w-3/10"><button type="button" className="p-2 h-11 text-white bg-zinc w-full font-poppins cursor-pointer text-base hover:bg-zinc-dark shadow-sm">Apply Coupon</button></div>
                        </div>
                        <div><button className="text underline text-zinc font-medium cursor-pointer text-base p-1 transition-colors ease-linear duration-200 hover:text-zinc-dark">Clear Shopping Cart</button></div>
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
                        <Link as={'button'} href={route('checkout.address')} className="p-3 text-white bg-zinc w-full font-poppins cursor-pointer text-base hover:bg-zinc-dark shadow-sm">Proceed to Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>)

}
Cart.layout = page => (<MainLayout heading={'Shopping Cart'} breadcrumb={'Home / Shopping Cart'}>{page}</MainLayout>);