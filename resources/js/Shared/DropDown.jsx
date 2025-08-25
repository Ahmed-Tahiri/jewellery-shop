import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

export const DropDown = ({ customerGender = "Select", onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [gender, setGender] = useState(customerGender || "Select");
    const wrapperRef = useRef(null);

    useEffect(() => {
        setGender(customerGender ?? "Select");
    }, [customerGender]);


    useEffect(() => {
        function handleDocClick(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleDocClick);
        return () => document.removeEventListener("mousedown", handleDocClick);
    }, []);
    let keyDownHandler = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen((s) => !s);
        } else if (e.key === "Escape") {
            setIsOpen(false);
        }
    }
    const optionHandler = (newGender) => {
        setGender(newGender);
        setIsOpen(false);
        if (onChange) onChange(newGender);
    };

    return (
        <div ref={wrapperRef} className="w-full flex flex-col items-start">
            <button type="button" aria-haspopup="listbox" aria-expanded={isOpen} className="border-2 font-poppins border-gray-300 shadow-xs w-full p-2 text-semi-black outline-0 focus:border-light-gray focus:border-[3px] cursor-pointer flex items-center justify-between font-medium transition-all ease-linear duration-200" onClick={() => setIsOpen((s) => !s)} onKeyDown={keyDownHandler} >
                <span className="flex px-2 text-base">{gender}</span>
                {isOpen ? (<FaChevronDown className="text-lg text-semi-black transition-all ease-linear duration-200" />)
                    : (<FaChevronRight className="text-lg text-semi-black transition-all ease-linear duration-200" />)}
            </button>
            <input type="hidden" name="gender" value={gender} />
            <div className={`${isOpen ? "block" : "hidden"} transition-all ease-linear duration-200 w-full`}>
                <ul role="listbox" aria-activedescendant={gender} className="w-full flex flex-col gap-y-1 mt-1">
                    {["Male", "Female", "Other"].map((g) => (
                        <li key={g} role="option" aria-selected={gender === g}>
                            <button type="button" onClick={() => optionHandler(g)} className="w-full text-left border-2 py-1 bg-white border-gray-300 px-2 cursor-pointer hover:bg-mustard transition-colors ease-linear duration-200">{g} </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
