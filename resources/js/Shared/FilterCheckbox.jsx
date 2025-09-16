import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

export let FilterCheckbox = ({ label, id, name, setData }) => {


    const [isChecked, setIsChecked] = useState(false);
    return (<div className="w-full flex items-center justify-between -mt-3 mb-3">
        <div className="flex flex-row gap-x-1 items-center mt-1">
            <label htmlFor={id} className="relative flex flex-row items-center gap-x-1 cursor-pointer select-none">
                <div className="relative flex flex-row items-center">
                    <input
                        type="checkbox"
                        id={id}
                        name={name}
                        checked={isChecked}
                        onChange={(e) => {
                            setIsChecked(e.target.checked);
                            setData((prev) => ({ ...prev, [name]: e.target.checked }));
                        }}
                        className="appearance-none h-[16px] w-[16px] border-[1px] border-dark-gray rounded-sm  bg-transparent checked:bg-zinc checked:border-zinc" />
                    <span className={`absolute top-[2px] left-[2px] flex items-center justify-center w-[12px] h-[12px] ${isChecked ? "opacity-100" : "opacity-0"} transition-opacity duration-150`} > <FaCheck className="text-white text-xs" />   </span>
                </div>
                <span className="text-dark-gray font-poppins text-[15px] mt-0.25 font-medium">{label}</span>
            </label>

        </div>
    </div>)
}