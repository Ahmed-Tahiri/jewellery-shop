import { FaBars } from "react-icons/fa6"
import { MobileDrawer } from "./MobileDrawer"
import { useState } from "react";

export let MobileHeader = ({ adminName }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    return <div className="md:hidden w-full">
        <div className="flex items-center justify-between px-4 py-3 bg-white shadow">
            <div className="flex items-center gap-3">
                <button onClick={() => setMobileOpen(true)} className="p-2 rounded-md text-gray-700" aria-label="Open menu"  >
                    <FaBars className="text-xl text-yellow-600" />
                </button>

                <div className="h-8 w-8 rounded-md bg-yellow-600 flex items-center justify-center text-white font-bold">J</div>
                <div className="text-base font-semibold text-gray-800">Jewellery Admin</div>
            </div>

            <div className="flex items-center gap-3">
                <div className="text-sm text-gray-700 truncate">{adminName}</div>
            </div>
        </div>
        <MobileDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </div>
}