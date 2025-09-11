import { Link } from "@inertiajs/react";
import { AdminSectionSubHeading } from "../../../Shared/Admin/AdminSectionHeading";
import { ProductImagesCarousel } from "../../../Shared/ProductImagesCarousel";
import { ItemData } from "../../../Components/Admin/ItemData";
import { format } from "date-fns";
import { VariantCard } from "../../../Components/Admin/VariantCard";
import { route } from "ziggy-js";


export default function Show({ product, productImages }) {

    const createdAtFormatted = product.createdAt ? format(new Date(product.createdAt), "EEEE, do MMMM yyyy p") : "N/A";
    const updatedAtFormatted = product.updatedAt ? format(new Date(product.updatedAt), "EEEE, do MMMM yyyy p") : "N/A";

    return (<section className="w-full min-h-170">
        <div className="w-full flex flex-col gap-y-8">
            <div className="w-full flex flex-row justify-between items-center">
                <AdminSectionSubHeading heading={"Product Information"} />
                <div className="flex flex-row items-center justify-end">
                    <Link className="flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24 transition-colors ease-linear duration-200 hover:bg-zinc-700" href={route("admin.products")} >Back</Link>
                </div>
            </div>
            <div>
                <div className="flex flex-row items-start justify-between shadow">
                    <div className="flex w-full flex-col gap-y-5 p-5 bg-white rounded">
                        <div className="flex flex-row  gap-x-5 w-full">
                            <div className="w-114">
                                <ProductImagesCarousel images={productImages} />
                            </div>
                            <div className="w-7/10  px-2 border-s-2 border-gray-300 rounded-xs">
                                <div className="flex flex-col gap-y-3">
                                    <ItemData heading={'Product Name:'} data={product.name} />
                                    <ItemData heading={'Product SKU (Stock Keeping Unit):'} data={product.sku} />
                                    <ItemData heading={'Product Category:'} data={product.category} />
                                    <ItemData heading={'Product Subcategory:'} data={product.subcategory} />
                                    <ItemData heading={'Short Description:'} data={product.shortDescription} />
                                    <ItemData heading={'Long Description:'} data={product.longDescription} />
                                    <ItemData heading={'Estimated Delivery Time:'} data={product.estimatedDeliverTime} />
                                    <ItemData heading={'Discount:'} data={`${product.discount}%`} />
                                    <ItemData heading={'Status:'} data={product.status} />
                                    <ItemData heading={'Created At:'} data={createdAtFormatted} />
                                    <ItemData heading={'Last Updated At:'} data={updatedAtFormatted} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex gap-x-2 justify-end">
                            <Link href={route('admin.products.edit', product.id)} className="min-w-25  font-poppins p-2 bg-zinc text-white text-center shadow-sm cursor-pointer  hover:bg-zinc-dark transition-colors ease-linear duration-200">Edit</Link>
                            <Link method="delete" as={'button'} href={route('admin.products.destroy', product.id)} className="min-w-25  font-poppins p-2 bg-mustard text-white hover:bg-mustard-dark text-center shadow-sm cursor-pointer transition-colors ease-linear duration-200">Delete</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col gap-5">
                <div className="w-full flex flex-row justify-between items-center">
                    <AdminSectionSubHeading heading={"Product Variants"} />
                    <div className="flex flex-row items-center justify-end">
                        <Link className="flex items-center justify-center font-poppins text-base bg-mustard text-white p-2 min-w-36 transition-colors ease-linear duration-200 hover:bg-mustard-dark" href={route("admin.products.variants.create", product.id)} >Add Variant</Link>
                    </div>
                </div>
                <div className="flex flex-row gap-10 justify-start flex-wrap">
                    {product.variants.map((variant, idx) => <VariantCard key={`productVariantCard${variant.id}`} product={product} variant={variant} />)}
                </div>
            </div>

        </div>
    </section>);
}