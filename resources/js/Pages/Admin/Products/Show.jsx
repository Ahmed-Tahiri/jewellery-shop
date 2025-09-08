import { Link } from "@inertiajs/react";
import { AdminSectionSubHeading } from "../../../Shared/Admin/AdminSectionHeading";

export default function Show({ product }) {

    return <section className="w-full min-h-170">
        <div className="w-full flex flex-col gap-y-8">
            <div className="w-full flex flex-row justify-between items-center">
                <AdminSectionSubHeading heading={"Product Information"} />
                <div className="flex flex-row items-center justify-end">
                    <Link className="flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24 transition-colors ease-linear duration-200 hover:bg-zinc-700" href={route("admin.products")} >Back</Link>
                </div>
            </div>
            <div>
                <div className="flex flex-row items-start justify-between shadow">
                    <div className="flex flex-row p-5 gap-x-5 w-full bg-white rounded"></div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
                <AdminSectionSubHeading heading={"Product Variants"} />
                <div className="flex flex-row items-center justify-end">
                    <Link className="flex items-center justify-center font-poppins text-base bg-mustard text-white p-2 min-w-36 transition-colors ease-linear duration-200 hover:bg-mustard-dark" href={route("admin.products.variants.create", product.id)} >Add Variant</Link>
                </div>
            </div>
        </div>
    </section>

}