import { AdminSectionSubHeading } from "../../../Shared/Admin/AdminSectionHeading";
import { Link, } from "@inertiajs/react";
import { ItemData } from "../../../Components/Admin/ItemData";
import { format } from "date-fns";
import { route } from "ziggy-js";


export default function ProductDiscountShow({ discount, product }) {

    const createdAtFormatted = discount.created_at ? format(new Date(discount.created_at), "EEEE, do MMMM yyyy p") : "N/A";
    const updatedAtFormatted = discount.updated_at ? format(new Date(discount.updated_at), "EEEE, do MMMM yyyy p") : "N/A";
    const startDateFormatted = discount.start_date ? format(new Date(discount.start_date), "EEEE, do MMMM yyyy p") : "N/A";
    const endDateFormatted = discount.end_date ? format(new Date(discount.end_date), "EEEE, do MMMM yyyy p") : "N/A";

    return (
        <section className="w-full min-h-170">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <AdminSectionSubHeading heading={"Discount Information"} />
                    <div className="flex flex-row items-center justify-end">
                        <Link className="flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={route("admin.discounts.products.list")} >Back</Link>
                    </div>
                </div>

                <div className="w-full flex gap-5 flex-row items-start justify-between">
                    <div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-3">
                        <div className="w-full flex flex-col items-start gap-y-4">
                            <h2 className="font-poppins w-full text-xl font-medium text-semi-black pb-3 border-b-[1px] border-gray-300">Overview</h2>
                            <div className="w-full flex flex-row gap-x-5 justify-between items-center border-1 border-gray-300 rounded p-2 ">
                                <div className="flex flex-col w-full  py-2 px-3 gap-y-2">
                                    <ItemData heading={'Name:'} data={discount.name} />
                                    <ItemData heading={'Product SKU:'} data={product.sku} />
                                    <ItemData heading={'Discount Percentage:'} data={`${discount.discount_percent}%`} />
                                    <ItemData heading={'Limitation:'} data={discount.limitation ?? 'Unlimited'} />
                                    <ItemData heading={'Start Date:'} data={startDateFormatted} />
                                    <ItemData heading={'End Date:'} data={endDateFormatted} />
                                    <ItemData heading={'Created at:'} data={createdAtFormatted} />
                                    <ItemData heading={'Last update at:'} data={updatedAtFormatted} />
                                </div>
                            </div>
                            <div className="w-full flex gap-x-2 justify-end">
                                <Link href={route('admin.discounts.products.edit', [discount.id, product.id])} className="min-w-25  font-poppins p-2 bg-zinc text-white text-center shadow-sm cursor-pointer  hover:bg-zinc-dark transition-colors ease-linear duration-200">Edit</Link>
                                <Link method="delete" as={'button'} href={route('admin.discounts.products.destroy', discount.id)} className="min-w-25  font-poppins p-2 bg-mustard text-white hover:bg-mustard-dark text-center shadow-sm cursor-pointer transition-colors ease-linear duration-200">Delete</Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}