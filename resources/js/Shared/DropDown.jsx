import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

export const DropDown = ({ customerGender, setGender }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const options = [
        { id: 1, label: "Male" },
        { id: 2, label: "Female" },
        { id: 3, label: "Other" },
    ]


    const [selected, setSelected] = useState(
        options.find(opt => opt.id === Number(customerGender)) || null
    );
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
        setSelected(opt);
        setGender(opt.id);
        setIsOpen(false);
    }


    return (
        <div ref={wrapperRef} className="w-full flex flex-col items-start">
            <button type="button" aria-haspopup="listbox" aria-expanded={isOpen} className="border-2 font-poppins border-gray-300 shadow-xs w-full p-2 text-semi-black outline-0 focus:border-light-gray focus:border-[3px] cursor-pointer flex items-center justify-between font-medium transition-all ease-linear duration-200" onClick={() => setIsOpen((s) => !s)} >
                <span className="flex px-1.5 sm:px-2 sm:text-base text-sm">
                    {selected ? selected.label : "Select Gender"}
                </span>
                {isOpen ? (<FaChevronDown className="text-lg text-semi-black transition-all ease-linear duration-200" />)
                    : (<FaChevronRight className="text-lg text-semi-black transition-all ease-linear duration-200" />)}
            </button>
            <div className={`${isOpen ? "block" : "hidden"} transition-all ease-linear duration-200 w-full`}>
                <ul role="listbox" aria-activedescendant={customerGender} className="w-full flex flex-col gap-y-1 mt-1">
                    {options.map((g) => (
                        <li key={g.id} role="option" aria-selected={customerGender === g.id}>
                            <button type="button" onClick={() => optionHandler(g)} className="w-full text-left border-2 py-1 bg-white border-gray-300 px-2 cursor-pointer hover:bg-mustard transition-colors ease-linear duration-200 sm:text-base text-sm">{g.label} </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
