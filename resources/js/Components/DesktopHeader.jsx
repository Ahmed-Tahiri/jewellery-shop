import { FaSearch } from "react-icons/fa";

export let DesktopHeader = ({ adminName }) => {
    return <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 flex items-center gap-3">
            <div className="relative w-full">
                <input type="text" placeholder="Search products or orders..." className="pl-10 pr-4 py-2 rounded-md border border-gray-200 bg-white text-sm w-full md:w-80" />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
            <div className="text-sm text-gray-600">Welcome back,&nbsp;<span className="font-medium text-gray-800">{adminName}</span></div>
            <div className="h-9 w-9 rounded-full bg-yellow-600 flex items-center justify-center text-white">{adminName.charAt(0)}</div>
        </div>
    </div>;
}