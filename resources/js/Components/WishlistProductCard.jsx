import { IoCloseOutline } from "react-icons/io5";

export let WishlistProductCard = () => {



    let addToCartHandler = (id) => {
        //
    }
    let removeFromWishlist = (id) => {
        //
    }

    return (<tr className=" border-b-[1px] border-gray-300">
        <td className="px-2 py-5">
            <div className="flex flex-row gap-x-3 items-center">
                <div><button onClick={() => removeFromWishlist(1)} className="p-2 cursor-pointer"><IoCloseOutline className="text-semi-black text-2xl" /></button></div>
                <div className="flex gap-x-3 items-center">
                    <div className="w-18 aspect-square bg-powder-gray rounded-xs overflow-hidden"><img src="https://png.pngtree.com/png-clipart/20231003/original/pngtree-white-pearl-bracelet-png-image_13229454.png" alt="product Image" className=" rounded-xs w-full aspect-square" /></div>
                    <div className="flex flex-col items-start gap-y-1">
                        <p className="text-xl font-poppins text-semi-black font-medium">Diamond Earring</p>
                        <p className="font-poppins text-dark-gray font-normal text-sm">Earrings</p>
                    </div>
                </div>
            </div>
        </td>
        <td className="font-poppins text-base text-semi-black font-medium  py-5 px-2">Rs 600.00</td>
        <td className="font-poppins text-base text-semi-black font-medium  py-5 px-2">18 June 2024</td>
        <td className="font-poppins text-base text-green-600 font-medium  py-5 px-2">Instock</td>

        <td onClick={() => addToCartHandler(1)} className="text-end"><button className="p-3 min-w-36 bg-zinc text-white font-poppins hover:bg-zinc-dark transition-colors ease-linear duration-200 cursor-pointer">Add to Cart</button></td>
    </tr>);
}