import { IoCloseOutline } from "react-icons/io5";
import { ProductQuantityComponent } from "../Shared/ProductQuantityComponent";
import FormatPKR from "../Utilities/FormatPKR";
export let CartProductCard = () => {
    return <tr className="border-b-[1px] border-gray-300">
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
        <td className="font-poppins text-base text-semi-black font-medium  py-5 px-2 text-start">{FormatPKR(320)}</td>
        <td className="font-poppins text-base text-semi-black font-medium  py-5 px-2 text-start"><ProductQuantityComponent /></td>
        <td className="font-poppins text-base text-semi-black font-medium  py-5 px-2 text-start">{FormatPKR(320)}</td>
    </tr>
}