import { IoCloseOutline } from "react-icons/io5";
import MainLayout from "../../Layouts/MainLayout";
import { ProductQuantityComponent } from "../../Shared/ProductQuantityComponent";
import FormatPKR from "../../Utilities/FormatPKR";

export const SummaryDataComponent = ({ heading, data }) => {
    return <div className="flex w-full items-center justify-between">
        <p className="font-poppins text-light-gray font-medium text-base">{heading}</p>
        <p className="font-poppins text-base text-semi-black font-medium">{data}</p>
    </div>
}

export let removeFromCart = () => { }
export default function Cart() {

    return (<section className="flex bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-10  max-w-7xl ">
            <div className="w-full flex flex-row items-start justify-between gap-x-7">
                <div className="w-8/11">
                    <table className="w-full">
                        <thead className="bg-mustard">

                            <tr>
                                <th className="font-poppins text-zinc font-medium text-start py-3 px-6">Product</th>
                                <th className="font-poppins text-zinc font-medium text-start py-3 px-2">Price</th>
                                <th className="font-poppins text-zinc font-medium text-start py-3 px-2">Quantity</th>
                                <th className="font-poppins text-zinc font-medium text-start py-3 px-2">Subtotal</th>
                            </tr>

                        </thead>
                        <tbody className="">
                            <tr>
                                <td className="px-2 py-5">
                                    <div className="flex flex-row gap-x-3 items-center">
                                        <div><button onClick={() => removeFromCart(1)} className="p-2 cursor-pointer"><IoCloseOutline className="text-semi-black text-2xl" /></button></div>
                                        <div className="flex gap-x-3 items-center">
                                            <div className="w-18 aspect-square bg-powder-gray rounded-xs overflow-hidden"><img src="https://png.pngtree.com/png-clipart/20231003/original/pngtree-white-pearl-bracelet-png-image_13229454.png" alt="product Image" className=" rounded-xs w-full aspect-square" /></div>
                                            <div className="flex flex-col items-start gap-y-1">
                                                <p className="text-xl font-poppins text-semi-black font-medium">Diamond Earring</p>
                                                <p className="font-poppins text-dark-gray font-normal text-sm">Earrings</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Price</td>
                                {/* <td><ProductQuantityComponent /></td> */}
                                <td>Subtotal</td>
                            </tr>
                        </tbody>
                    </table>
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
                    <p className="py-4">
                        <SummaryDataComponent heading={'Total'} data={FormatPKR(3570)} />
                    </p>
                    <div className="flex w-full flex-col gap-y-3 py-4">
                        <button className="p-3 text-white bg-zinc w-full font-poppins cursor-pointer text-base hover:bg-zinc-dark shadow-sm">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </section>)

}
Cart.layout = page => (<MainLayout heading={'Shopping Cart'} breadcrumb={'Home / Shopping Cart'}>{page}</MainLayout>);