import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import FormatPKR from './../../Utilities/FormatPKR';
import { Link } from "@inertiajs/react";
export let VariantCard = ({ variant, product }) => {
    return (
        <div className="flex p-2 flex-col gap-3 bg-white shadow w-75 rounded-xs relative" >
            {variant.is_default === 1 && (<p className="absolute bg-mustard text-zinc font-medium font-poppins p-2 text-base top-3 right-3">Default</p>)}
            <div className="w-full bg-powder-gray">
                <img src={`/storage/${variant.primary_image.url}`} className="object-fit w-full" />
            </div>
            <div className="flex flex-col gap-y-2 items-start w-full">
                <h6 className="font-poppins font-medium text-lg text-semi-black">{variant.sku}</h6>
                <div className="flex w-full flex-col gap-y-1">
                    <p className="font-poppins text-semi-black">{FormatPKR(variant.price)}</p>
                    {variant.stock_status === 'in stock' ? <div className="flex justify-between w-full items-center gap-x-1">
                        <p className="font-poppins bg-green-200 text-green-700 px-2 py-1 shadow-xs capitalize">{variant.stock_status}</p>
                        <p className="font-poppins text-base bg-gray-100 text-gray-900 px-2 py-1  shadow-xs">
                            Stock Quantity: {variant.stock_quantity}
                        </p>
                    </div> :
                        (<div className="flex justify-between w-full items-center gap-x-1">  <p className="font-poppins bg-red-200 text-red-700 px-2 py-1 shadow-xs capitalize">{variant.stock_status}</p> </div>)}
                </div>
            </div>
            <div className="w-full flex gap-x-2 justify-end mt-5">
                <Link href={route('admin.products.variants.show', [product.id, variant.id])} className="flex items-center justify-center flex-1 font-poppins p-2 bg-light-gray text-white text-center shadow-sm cursor-pointer  hover:bg-zinc-700 transition-colors ease-linear duration-200">  <FaEye className="text-2xl" /></Link>
                <Link href={route('admin.products.variants.edit', [product.id, variant.id])} className="flex items-center justify-center flex-1 font-poppins p-2 bg-zinc text-white text-center shadow-sm cursor-pointer  hover:bg-zinc-dark transition-colors ease-linear duration-200">  <FaEdit className="text-2xl" /></Link>
                <Link method="delete" as={'button'} href={route('admin.products.variants.destroy', [product.id, variant.id])} className="flex items-center justify-center flex-1  font-poppins p-2 bg-mustard text-white hover:bg-mustard-dark text-center shadow-sm cursor-pointer transition-colors ease-linear duration-200"><RiDeleteBin5Line className="text-2xl" /></Link>
            </div>
        </div>)
}