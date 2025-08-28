import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
export let PasswordField = ({ label, inputChangeHandler, data, error = null, name = "password", id = "password", placeholder = "Enter Password" }) => {

    let [passIsVisible, setPassIsVisible] = useState(false);
    return <div className="w-full group">
        <div className="flex flex-col items-start justify-start  w-full gap-y-2">
            <label className="sm:text-lg text-base font-poppins font-medium text-semi-black" htmlFor={id}>{label}</label>
            <div className="border-gray-300 flex items-center justify-between w-full border-2  shadow-xs group-focus-within:border-light-gray group-focus-within:border-[3px] transition-all ease-linear duration-200">
                <input value={data} onChange={inputChangeHandler} type={`${passIsVisible ? 'text' : 'password'}`} name={name} id={id} className="font-poppins  p-2 text-semi-black outline-0 border-0 text-sm sm:text-base" placeholder={placeholder} />
                <div className="w-10 me-1"><button type="button" className="cursor-pointer w-full flex items-center justify-center transition-all ease-linear duration-200" onClick={() => setPassIsVisible(!passIsVisible)}>{passIsVisible ? (<AiOutlineEyeInvisible className="text-zinc hover:text-light-gray text-xl md:text-2xl" />) : (<AiOutlineEye className="text-zinc hover:text-light-gray text-xl md:text-2xl" />)}</button></div>
            </div>
            {error && (<span className="text-red-700 text-sm -mt-1">{error}</span>)}
        </div>
    </div>
}