import { Link, usePage } from "@inertiajs/react";
import { MdPersonOutline } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { GrMap } from "react-icons/gr";
import { IoKeyOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";


let NavLink = ({ path, title, icon }) => {

    let { url } = usePage();
    let activePath = url.split('?')[0];
    return <li className="w-full"><Link href={path} className={` p-2 md:p-3 flex  text-center md:justify-start justify-center flex-row border-1 border-gray-300 shadow-xs w-full font-poppins text-lg ${activePath === path ? 'bg-mustard' : 'bg-white'} transition-colors ease-linear duration-200 hover:bg-mustard font-medium`}><span className="hidden md:block w-full text-start md:text-base whitespace-nowrap lg:text-lg">{title}</span><span className="block md:hidden">{icon}</span></Link></li>;
}
export let Navbar = () => {
    let navLinks = [
        {
            title: 'Personal Information',
            path: '/myaccount',
            icon: <MdPersonOutline className="text-xl text-semi-black sm:text-3xl" />,
        },
        {
            title: 'My Orders',
            path: '/myaccount/orders',
            icon: <BsBoxSeam className="text-xl text-semi-black sm:text-3xl" />,
        },
        {
            title: 'Manage Addresses',
            path: '/myaccount/address',
            icon: <GrMap className="text-xl text-semi-black sm:text-3xl" />,
        },
        {
            title: 'Password Manager',
            path: '/myaccount/password',
            icon: <IoKeyOutline className="text-xl text-semi-black sm:text-3xl" />,
        },
        {
            title: 'Logout',
            path: '/myaccount/logout',
            icon: <FiLogOut className="text-xl text-semi-black sm:text-3xl" />,
        },

    ];
    return <div className="md:w-2/7 lg:w-2/8 w-2/12">
        <ul className="flex flex-col items-start gap-y-3 w-10 sm:w-15 md:w-full">
            {navLinks.map((link, idx) => <NavLink key={`myAccountNav${idx + 1}`} path={link.path} title={link.title} icon={link.icon} />)}
        </ul>
    </div>
}