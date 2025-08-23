import { format } from "date-fns";
import { LuCalendarDays } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { AuthAvatar, AuthEmail, AuthFName, AuthLName } from "../AuthData";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import randomColor from "randomcolor";

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

let AdminProfileOption = ({ isOpen, setIsOpen }) => {
    const [avatarIsForbidden, setAvatarIsForbidden] = useState(false);

    const avatarErrorHandle = () => {
        setAvatarIsForbidden(true);
    }
    const bgColor = randomColor({ luminosity: 'light' });
    return (
        <div className={`${isOpen ? 'block' : 'hidden'} top-10 right-3 w-60 absolute bg-white shadow p-2 rounded transition-all ease-linear duration-200`}>
            <div className='flex flex-row gap-x-3 items-center justify-start border-b-[1px] border-gray-300 py-1 w-full'>
                {AuthAvatar() && !avatarIsForbidden ? <div className="rounded-full h-6 w-6 overflow-hidden flex items-center justify-center shadow"><img onError={avatarErrorHandle} src={AuthAvatar()} alt="Profile Picture" />
                </div> : <div className={`rounded-full h-6 w-6 overflow-hidden flex items-center justify-center shadow`} style={{ backgroundColor: bgColor }}><span className="font-poppins text-base font-bold text-semi-black">{AuthFName()[0]}</span></div>}
                <div className='flex flex-col items-start justify-center'>
                    <p className='font-poppins text-semi-black text-xs font-semibold'><AuthFName /> <AuthLName /></p>
                    <p className='font-poppins text-light-gray text-[10px]'>{<AuthEmail />}</p>
                </div>
            </div>
            <div className="w-full  border-b-[1px] border-gray-300 flex items-center justify-start">
                <Link onClick={() => setIsOpen(!isOpen)} href='/admin/profile' className="inline-block text-semi-black font-medium font-poppins text-sm py-1 hover:text-mustard transition-colors ease-linear duration-200 w-full">My Profile</Link>
            </div>
            <div className="w-full  flex items-center justify-start">
                <Link onClick={() => setIsOpen(!isOpen)} href='/admin/profile/password' className="inline-block text-semi-black font-medium font-poppins text-sm py-1 hover:text-mustard transition-colors ease-linear duration-200 w-full">Change Password</Link>
            </div>
        </div>
    );
}
let AdminProfileSection = () => {

    let [optionsIsOpen, setOptionIsOpen] = useState(false);
    const [avatarIsForbidden, setAvatarIsForbidden] = useState(false);
    const bgColor = randomColor({ luminosity: 'light' });

    const avatarErrorHandle = () => {
        setAvatarIsForbidden(true);
    }
    return (
        <div className="flex flex-row gap-x-1.5">
            <div className="flex flex-col items-end justify-center">
                <h6 className="font-poppins font-semibold text-semi-black text-base"><AuthFName /> <AuthLName /></h6>
                <p className="font-poppins text-light-gray -mt-0.5 text-sm">Shop Owner</p>
            </div>
            <div className="flex items-center justify-center relative">
                <button onClick={() => setOptionIsOpen(!optionsIsOpen)} className="w-18 flex items-center justify-end gap-x-1 cursor-pointer">
                    {AuthAvatar() && !avatarIsForbidden ?
                        <div className="rounded-full h-12 w-12 overflow-hidden flex items-center justify-center shadow"><img onError={avatarErrorHandle} src={AuthAvatar()} alt="Profile Picture" />
                        </div> : <div className={`rounded-full h-12 w-12 overflow-hidden flex items-center justify-center shadow`} style={{ backgroundColor: bgColor }}><span className="font-poppins text-4xl font-semibold text-semi-black">{AuthFName()[0]}</span></div>}
                    <span className="transition-all ease-linear duration-200">{optionsIsOpen ? <FaCaretUp className="text-light-gray text-base" /> : <FaCaretDown className="text-light-gray text-base" />}</span>
                </button>
                <AdminProfileOption isOpen={optionsIsOpen} setIsOpen={setOptionIsOpen} />
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