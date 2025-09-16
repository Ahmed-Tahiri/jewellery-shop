import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi2";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { LuExpand } from "react-icons/lu";
import { IoOpen } from "react-icons/io5";
import Earrings from './../../images/cardEarrings.png';
import FormatPKR from "../Utilities/FormatPKR";
import SaleCountdown from "./SaleCountDown";
import { Link } from "@inertiajs/react";
import { useMemo, useState } from "react";
import { route } from "ziggy-js";


export let JewelleryCard = ({ isLimited = null, bgColor = 'bg-white', productData }) => {
    console.log(productData);
    let [wishListIconHovered, setWishListIconHovered] = useState(false);
    let [shoppingBagIconHovered, setShoppingBagIconHovered] = useState(false);
    let [previewIconHovered, setPreviewIconHovered] = useState(false);
    let [shoppingCardIsHovered, setShoppingCardIsHovered] = useState(false);
    const price = productData?.price ?? 0;
    const discountPercentage = productData?.discount ?? 0;

    const discountedPrice = useMemo(() => {
        if (!discountPercentage) return price;
        return price - (price * (discountPercentage / 100));
    }, [price, discountPercentage]);

    return (<div className="w-64 flex flex-col gap-y-3">
        <Link href={route('shop.product.show', { category: productData.category.toLowerCase(), slug: productData.slug })} onMouseEnter={() => setShoppingCardIsHovered(true)} onMouseLeave={() => setShoppingCardIsHovered(false)} className={`w-full aspect-square ${bgColor} relative shadow-sm rounded-t-sm`}>
            <span className="bg-mustard p-2 min-w-20 inline-block absolute top-3 left-3 text-sm font-poppins font-medium text-zinc text-center">{productData?.discount}% off</span>
            <img src={`/storage/${productData?.img.url}`} className="object-cover w-full aspect-square" alt="Product Image" />
            <div className={`${shoppingCardIsHovered ? 'flex' : 'hidden'} w-full h-full p-2 aspect-square absolute bg-transparent bottom-0 left-0 pointer-events-none flex-col gap-y-5 items-end justify-between`}>
                <div className="h-full flex flex-col gap-y-1.5 p-1 pointer-events-auto">
                    <div><button className="p-1.5 bg-white shadow-xs rounded-full cursor-pointer transition-all ease-linear duration-200" onMouseEnter={() => setWishListIconHovered(true)} onMouseLeave={() => setWishListIconHovered(false)}>
                        {wishListIconHovered ? (<GoHeartFill className='text-red-500 text-2xl' />) : (<GoHeart className='text-semi-black text-2xl' />)}
                    </button></div>
                    <div><button className="p-1.5 bg-white shadow-xs rounded-full cursor-pointer" onMouseEnter={() => setShoppingBagIconHovered(true)} onMouseLeave={() => setShoppingBagIconHovered(false)}>
                        {shoppingBagIconHovered ? <HiShoppingBag className='text-zinc text-2xl' /> : <HiOutlineShoppingBag className='text-semi-black text-2xl' />}
                    </button></div>

                    <div><button className="p-1.5 bg-white shadow-xs rounded-full cursor-pointer" onMouseEnter={() => setPreviewIconHovered(true)} onMouseLeave={() => setPreviewIconHovered(false)}>
                        {previewIconHovered ? <IoOpen className='text-mustard text-2xl' /> : <LuExpand className='text-semi-black text-2xl' />}
                    </button></div>
                </div>
                {isLimited && <SaleCountdown target={'2025-09-15 15:37:19'} />}
            </div>
        </Link>
        <div className="flex flex-col w-full gap-y-1 items-start">
            <div className="w-full justify-between flex flex-row items-center">
                <p className="text-dark-gray font-poppins font-medium">{productData?.category}</p>
                <p className="flex flex-row gap-x-1"><FaStar className="text-2xl text-mustard" /><span className="font-poppins text-semi-black font-semibold text-lg">4.9</span></p>
            </div>
            <p className="text-semi-black font-poppins text-lg font-semibold">{productData?.name}</p>
            <div className="mt-3 flex w-full justify-start items-center flex-row gap-x-2">
                <span className="text-lg font-poppins font-semibold text-semi-black">{FormatPKR(discountedPrice)}</span>
                <span className="text-base font-poppins font-medium text-dark-gray line line-through">{FormatPKR(price)}</span>
            </div>
        </div>
    </div>);
}