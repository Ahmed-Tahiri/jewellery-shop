import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { LuExpand } from "react-icons/lu";
import { IoOpen } from "react-icons/io5";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Link } from "@inertiajs/react";
import { GoArrowRight } from "react-icons/go";
import { getDiscount } from "../Utilities/getDiscount";
import { useMemo } from "react";
import FormatPKR from "../Utilities/FormatPKR";
import { route } from "ziggy-js";



export let NewArrivalJewelleryCard = ({ productData }) => {
    console.log(productData);
    const price = productData?.price ?? 0;
    const discountPercentage = productData?.discount.discount_percent ?? 0;

    const discountedPrice = useMemo(
        () => getDiscount(price, discountPercentage),
        [price, discountPercentage]
    );
    return (<div className="flex-1 max-w-1/2 flex flex-row gap-x-3 p-2 shadow-xs border-[0.5px] border-gray-300">
        <Link href={route('shop.product.show', { category: productData?.category.toLowerCase(), slug: productData?.slug })} className="w-[45%] aspect-square bg-powder-gray relative shadow-xs rounded-xs">
            <span className="bg-mustard p-2 min-w-20 inline-block absolute top-3 left-3 text-sm font-poppins font-medium text-zinc text-center">{discountPercentage}% off</span>
            <img src={`/storage/${productData?.img.url}`} className="object-cover w-full aspect-square" alt="Product Image" />
            <div className={`flex w-full h-full p-2 aspect-square absolute bg-transparent bottom-0 left-0 pointer-events-none flex-col gap-y-5 items-end justify-between`}>
                <div className="h-full flex flex-col gap-y-1.5 p-1 pointer-events-auto">
                    <div><button className="p-1.5 bg-white shadow-xs rounded-full cursor-pointer transition-all ease-linear duration-200 group" >
                        <GoHeartFill className='text-red-500 text-2xl group-hover:block hidden' /> <GoHeart className='text-semi-black text-2xl group-hover:hidden' />
                    </button></div>
                    <div><button className="p-1.5 bg-white shadow-xs rounded-full cursor-pointer group">
                        <HiShoppingBag className='text-zinc text-2xl group-hover:block hidden' />  <HiOutlineShoppingBag className='text-semi-black text-2xl group-hover:hidden' />
                    </button></div>
                    <div><button className="p-1.5 bg-white shadow-xs rounded-full cursor-pointer group" >
                        <IoOpen className='text-mustard text-2xl group-hover:block hidden' /> <LuExpand className='text-semi-black text-2xl group-hover:hidden' />
                    </button></div>
                </div>

            </div>
        </Link>
        <div className="flex flex-col w-[55%] gap-y-2 items-start py-6">
            <div className="w-full justify-between flex flex-row items-center">
                <p className="text-dark-gray font-poppins font-medium">{productData?.category}</p>
                <p className="flex flex-row gap-x-1"><FaStar className="text-2xl text-mustard" /><span className="font-poppins text-semi-black font-semibold text-lg">4.9</span></p>
            </div>
            <p className="text-semi-black font-poppins text-xl font-semibold">Gold Earring</p>
            <div className="mt-3 flex w-full justify-start items-center flex-row gap-x-2"><span className="text-xl font-poppins font-semibold text-semi-black">{FormatPKR(price)}</span><span className="text-lg font-poppins font-medium text-dark-gray line line-through">{FormatPKR(discountedPrice)}</span></div>
            <p className="font-poppins text-dark-gray text-[15px]">{productData.shortDescription}</p>
            <Link href={route('shop.product.show', { category: productData?.category.toLowerCase(), slug: productData?.slug })} className="mt-5 flex w-full flex-row gap-x-2 items-center justify-start font-poppins text-zinc font-medium hover:font-semibold transition-all ease-linear duration-200">Shop Now <GoArrowRight className="text-2xl" /></Link>
        </div>
    </div>);
}