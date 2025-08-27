
import { Link } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
export let FooterDropDown = ({ links, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleDocClick(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleDocClick);
        return () => document.removeEventListener("mousedown", handleDocClick);
    }, []);

    return (
        <div ref={wrapperRef} className="w-full flex flex-col items-start">
            <button type="button" aria-expanded={isOpen} className=" font-poppins shadow-xs w-full p-2 text-semi-black cursor-pointer flex items-center justify-between font-medium transition-all ease-linear duration-200" onClick={() => setIsOpen((s) => !s)} >
                <span className="flex px-1.5 sm:px-2 sm:text-base text-sm">
                    {title}
                </span>
                {isOpen ? (<FaChevronDown className="text-lg text-semi-black transition-all ease-linear duration-200" />)
                    : (<FaChevronRight className="text-lg text-semi-black transition-all ease-linear duration-200" />)}
            </button>
            <div className={`${isOpen ? "block" : "hidden"} transition-all ease-linear duration-200 w-full`}>
                <ul className="w-full flex flex-col gap-y-1 mt-1">
                    {links.map((link, idx) => (
                        <li key={`footerLink${link}${idx + 1}`} className="w-full px-2">
                            <Link href={link.path} className="py-2 border-b-[1px] border-gray-300 inline-block w-full">{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

