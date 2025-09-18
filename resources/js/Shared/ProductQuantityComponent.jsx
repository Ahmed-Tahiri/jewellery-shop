import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export let ProductQuantityComponent = () => {
    const [cartQuantity, setCartQuantity] = useState(1);
    let cartIncHandler = () => { setCartQuantity(prev => prev + 1); }
    let cartDecHandler = () => { if (cartQuantity > 1) { setCartQuantity(prev => prev - 1); } }
    return <div className="flex flex-row items-center">
        <button onClick={cartDecHandler} className=" flex items-center justify-center cursor-pointer h-11 aspect-square border-[1px] border-gray-300 shadow-xs hover:bg-mustard text-dark-zinc"><FiMinus className="text-xl text-zinc-dark" /></button>
        <input readOnly={true} value={cartQuantity} className="cursor-default border-t-[1px] border-b-[1px] font-poppins border-gray-300 shadow-xs h-11 w-10 text-center aspect-square flex items-center justify-center text-zinc-dark outline-0  transition-all ease-linear duration-200 text-base" />
        <button onClick={cartIncHandler} className=" flex items-center justify-center cursor-pointer h-11 aspect-square border-[1px] border-gray-300 shadow-xs hover:bg-mustard text-dark-zinc"><FiPlus className="text-xl text-zinc-dark" /></button>
    </div>
}