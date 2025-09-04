import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
export let DropDown = ({ data, setOption, dropDownLabel = '', inputLabel = '', setCanEdit, existingOption = null }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const [selected, setSelected] = useState(existingOption ?? null);
    useEffect(() => {
        function handleDocClick(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleDocClick);
        return () => document.removeEventListener("mousedown", handleDocClick);
    }, []);

    const optionHandler = (opt) => {
        setIsOpen(false);
        setSelected(opt);
        setOption(opt.id);
        setCanEdit(true);
    }

    return (<>

        <h6 className="w-full sm:text-lg text-base font-poppins font-medium text-semi-black">{inputLabel}</h6>
        <div ref={wrapperRef} className="w-full flex flex-col items-start" key={Date.now()}>
            <button type="button" aria-haspopup="listbox" aria-expanded={isOpen} className="border-2 font-poppins border-gray-300 shadow-xs w-full p-2 text-semi-black outline-0 focus:border-light-gray focus:border-[3px] cursor-pointer flex items-center justify-between font-medium transition-all ease-linear duration-200" onClick={() => setIsOpen((s) => !s)} >
                <span className="flex px-1.5 sm:px-2 sm:text-base text-sm">
                    {selected ? selected.name : dropDownLabel}
                </span>
                {isOpen ? (<FaChevronDown className="text-lg text-semi-black transition-all ease-linear duration-200" />)
                    : (<FaChevronRight className="text-lg text-semi-black transition-all ease-linear duration-200" />)}
            </button>
            <div className={`${isOpen ? "block" : "hidden"} transition-all ease-linear duration-200 w-full`}>
                <ul role="listbox" className="w-full flex flex-col gap-y-1 mt-1">
                    {data.map((dt, idx) => (
                        <li key={`${Date.now()}Option${idx}`} role="option">
                            <button type="button" onClick={() => optionHandler(dt)} className="w-full text-left border-2 py-1 bg-white border-gray-300 px-2 cursor-pointer hover:bg-mustard transition-colors ease-linear duration-200 sm:text-base text-sm">{dt.name} </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>);

}


