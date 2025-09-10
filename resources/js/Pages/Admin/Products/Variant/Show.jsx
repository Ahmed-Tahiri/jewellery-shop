import { Link } from "@inertiajs/react";
import { AdminSectionSubHeading } from "../../../../Shared/Admin/AdminSectionHeading";
import { ItemData } from "../../../../Components/Admin/ItemData";
import { format } from "date-fns";
import { route } from "ziggy-js";
import { ProductImagesCarousel } from "../../../../Shared/ProductImagesCarousel";
import FormatPKR from "../../../../Utilities/FormatPKR";

export default function Show({ product, variant }) {
    const createdAtFormatted = variant.createdAt ? format(new Date(variant.createdAt), "EEEE, do MMMM yyyy p") : "N/A";
    const updatedAtFormatted = variant.updatedAt ? format(new Date(variant.updatedAt), "EEEE, do MMMM yyyy p") : "N/A";

    return (<section className="w-full min-h-170">
        <div className="w-full flex flex-col gap-y-8">
            <div className="w-full flex flex-row justify-between items-center">
                <AdminSectionSubHeading heading={"variant Information"} />
                <div className="flex flex-row items-center justify-end">
                    <Link className="flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24 transition-colors ease-linear duration-200 hover:bg-zinc-700" href={route("admin.products")} >Back</Link>
                </div>
            </div>
            <div>
                <div className="flex flex-row items-start justify-between shadow">
                    <div className="flex w-full flex-col gap-y-5 p-5 bg-white rounded">
                        <div className="flex flex-row  gap-x-5 w-full">
                            <div className="w-114">
                                <ProductImagesCarousel images={variant.images} />
                            </div>
                            <div className="w-7/10  px-2 border-s-2 border-gray-300 rounded-xs">
                                <div className="flex flex-col gap-y-3">

                                    <ItemData heading={'variant SKU (Stock Keeping Unit):'} data={variant.sku} />
                                    <ItemData heading={'Size:'} data={variant.size} />
                                    <ItemData heading={'Weight (grams):'} data={variant.weight} />
                                    <div className="flex flex-col gap-y-0.5">
                                        <p className="font-poppins text-base font-medium text-semi-black">{`Dimensions (mm):`}</p>
                                        <p className="font-poppins text-base font-normal text-light-gray break-words whitespace-pre-line">Height: {variant.dimensions.height ?? 'N/A'}</p>
                                        <p className="font-poppins text-base font-normal text-light-gray break-words whitespace-pre-line">Width: {variant.dimensions.width ?? 'N/A'}</p>
                                        <p className="font-poppins text-base font-normal text-light-gray break-words whitespace-pre-line">Length: {variant.dimensions.length ?? 'N/A'}</p>
                                        <p className="font-poppins text-base font-normal text-light-gray break-words whitespace-pre-line">Diameter: {variant.dimensions.diameter ?? 'N/A'}</p>
                                    </div>
                                    <ItemData heading={'Metal:'} data={variant.metal} />
                                    <ItemData heading={'Metal Purity:'} data={variant.metalPurity} />
                                    <ItemData heading={'Color Tone:'} data={variant.color} />
                                    <ItemData heading={'Finish:'} data={variant.finish} />
                                    <ItemData heading={'Cost Price:'} data={FormatPKR(variant.cost)} />
                                    <ItemData heading={'Selling Price:'} data={FormatPKR(variant.price)} />
                                    <ItemData heading={'Stock Status:'} data={variant.stockStatus} />
                                    <ItemData heading={'Stock Quantity:'} data={variant.stockQuantity} />
                                    <ItemData heading={'Created At:'} data={createdAtFormatted} />
                                    <ItemData heading={'Last Updated At:'} data={updatedAtFormatted} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex gap-x-2 justify-end">
                            <Link href={route('admin.products.variants.edit', [product, variant.id])} className="min-w-25  font-poppins p-2 bg-zinc text-white text-center shadow-sm cursor-pointer  hover:bg-zinc-dark transition-colors ease-linear duration-200">Edit</Link>
                            <Link method="delete" as={'button'} href={route('admin.products.variants.destroy', [product, variant.id])} className="min-w-25  font-poppins p-2 bg-mustard text-white hover:bg-mustard-dark text-center shadow-sm cursor-pointer transition-colors ease-linear duration-200">Delete</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}