import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { NavLink } from "../../Components/Admin/NavLink";

export let SidebarDropdown = ({ title, icon, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="w-full flex flex-col items-start">
            <button className="cursor-pointer flex items-center justify-between p-3 font-medium rounded w-full font-poppins text-semi-black hover:scale-105 transition-all ease-linear duration-200" onClick={() => setIsOpen(!isOpen)} >
                <p className="flex items-center">
                    {icon}
                    <span className="flex px-2 text-base">{title}</span>
                </p>
                {isOpen ? (<FaChevronDown className="text-lg text-semi-black transition-all ease-linear duration-200" />) : (<FaChevronRight className="text-lg text-semi-black transition-all ease-linear duration-200" />)}
            </button>

            <div className={`w-full py-3 px-5 ${isOpen ? "block" : "hidden"} transition-all ease-linear duration-200`}  >
                <ul className="w-full flex flex-col gap-y-5">
                    {links.map((link, idx) => (
                        <NavLink key={`${title}Link${idx + 1}`} title={link.title} path={link.path} icon={link.icon} />
                    ))}
                </ul>
            </div>
        </li>
    );
}
