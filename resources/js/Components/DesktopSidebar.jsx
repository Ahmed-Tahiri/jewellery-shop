import { FaChevronLeft, FaChevronRight, FaBoxOpen, FaShoppingCart, FaTags, FaLayerGroup, FaUserCircle } from "react-icons/fa";
import { NavItem } from "./NavItem";
import { useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { Link } from "@inertiajs/react";
export let DesktopSidebar = ({ adminName }) => {


    const [open, setOpen] = useState(true);

    return (
        <aside
            className={`hidden md:flex flex-col bg-white shadow-md transition-all duration-200 ease-in-out ${open ? "w-64" : "w-20"}`}   >
            <div className="flex items-center justify-between px-4 py-4 border-b">
                <div className="flex items-center gap-3">
                    <div className={`${open ? "h-10 w-10" : "h-7 w-7"} rounded-md bg-yellow-600 flex items-center justify-center text-white font-bold`}> J</div>
                    {open && <h2 className="text-lg font-semibold text-gray-800 whitespace-nowrap">Jewellery Admin</h2>}
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="p-2 rounded-md hover:bg-gray-100 text-gray-600 ml-1"
                    aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
                >
                    {open ? <FaChevronLeft /> : <FaChevronRight />}
                </button>
            </div>

            <nav className="flex-1 px-2 py-4 space-y-1">
                <NavItem open={open} to="" icon={FaBoxOpen} label="Products" />
                <NavItem open={open} to="" icon={FaShoppingCart} label="Orders" />
                <NavItem open={open} to="" icon={FaTags} label="Categories" />
                <NavItem open={open} to="" icon={FaLayerGroup} label="Sub-categories" />
            </nav>

            <div className="p-4 border-t">
                <div className={`flex items-center gap-3 ${open ? "" : "justify-center"}`}>
                    <div>
                        <Link className="cursor-pointer px-4 flex flex-row gap-x-2 sm:px-5 sm:py-2 py-2 rounded-lg bg-yellow-600 text-white text-sm sm:text-base font-medium shadow hover:bg-yellow-700 transition" method='post' href={'/logout'} > <FaPowerOff className="text-2xl text-white" /> {open && (<span>Logout </span>)}</Link>
                    </div>
                </div>
            </div>
        </aside>
    );
}