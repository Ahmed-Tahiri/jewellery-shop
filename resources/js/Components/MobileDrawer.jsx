import { FaChevronLeft, FaPowerOff } from "react-icons/fa6";
import { NavItem } from "./NavItem";
import { FaBoxOpen, FaLayerGroup, FaShoppingCart, FaTags } from "react-icons/fa";
import { Link } from "@inertiajs/react";

export let MobileDrawer = ({ mobileOpen, setMobileOpen }) => {
    return mobileOpen && (
        <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
            <aside className="absolute left-0 top-0 h-full w-64 bg-white shadow-md p-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-yellow-600 flex items-center justify-center text-white font-bold">J</div>
                        <div className="font-semibold">Admin</div>
                    </div>
                    <button className="p-2" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                        <FaChevronLeft />
                    </button>
                </div>
                <div className="flex flex-col justify-between h-[95%]">

                    <nav className="flex flex-col gap-2">
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
                </div>
            </aside>
        </div>
    );

}