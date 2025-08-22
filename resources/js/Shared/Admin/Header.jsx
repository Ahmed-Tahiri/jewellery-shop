import { format } from "date-fns";
import { LuCalendarDays } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { AdminName } from "./AdminName";

let FormattedDate = () => {
    const date = new Date();
    const formatted = format(date, "EEEE, do MMMM");
    return <p className="flex items-center justify-center gap-x-1"><span><LuCalendarDays className="text-light-gray text-lg" /></span><span className="text-light-gray text-sm text-medium font-poppins">{formatted}</span></p>
}
let NotificationIcon = ({ count = '0' }) => {
    return <div>
        <button type="button" className="p-1 relative cursor-pointer">
            <span><FaBell className="text-2xl text-zinc" /></span>
            <span className="absolute flex items-center justify-center p-1 bg-mustard text-white font-poppins rounded-full h-4 w-4 text-xs -top-0.5 -right-0.5">{count}</span>
        </button>
    </div>
}

let AdminProfileSection = () => {

    return (
        <div className="flex flex-row gap-x-1.5">
            <div className="flex flex-col items-end justify-center">
                <h6 className="font-poppins font-semibold text-semi-black text-base"><AdminName /></h6>
                <p className="font-poppins text-light-gray -mt-0.5 text-sm">Shop Owner</p>
            </div>
            <div className="flex items-center justify-center">
                <button className="w-18 flex items-center justify-end gap-x-1 cursor-pointer">
                    <div className="rounded-full h-12 w-12 overflow-hidden flex items-center justify-center shadow"><img src="https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png" alt="Profile Picture" />
                    </div>
                    <span><FaCaretDown className="text-light-gray text-base" /></span>
                </button>
            </div>
        </div>
    );
}
export let Header = () => {
    return <header className="w-full bg-white shadow py-3 px-5">
        <div className="w-full flex flex-row items-center justify-end">
            <div className=""></div>
            <div className="gap-x-7 flex flex-row items-center justify-between py-0">
                <FormattedDate />
                <NotificationIcon count="0" />
                <AdminProfileSection />
            </div>
        </div>
    </header>
}