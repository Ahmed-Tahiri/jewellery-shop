import { FaChevronDown, FaChevronRight, FaRegCalendarCheck } from "react-icons/fa6";
import JewelleryLogo from './../../../images/JewelleryLogo.png';
import { NavLink } from "../../Components/Admin/NavLink";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { LuClipboardCheck, LuSquareArrowOutUpRight } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";

export let Sidebar = () => {

    const ordersList = [
        {
            title: 'Manage Orders',
            path: '/admin/orders',
            icon: <LuSquareArrowOutUpRight className="text-light-gray text-xl" />,
        },
        {
            title: 'Complete Orders',
            path: '/admin/orders/complete',
            icon: <FaRegCalendarCheck className="text-light-gray text-xl" />,
        },
        {
            title: 'Cancel Orders',
            path: '/admin/orders/cancel',
            icon: <MdOutlineCancel className="text-light-gray text-xl" />,
        },
    ];

    const [orderListIsOpen, setOrderListIsOpen] = useState(false);
    return (<div className="w-[18%] h-full shadow bg-white">
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full py-2 px-3">
                <img src={JewelleryLogo} alt="jewellery logo" className="w-[75%]" />
            </div>
            <div className="w-full py-2 px-3 flex">
                <nav className="py-5 w-full">
                    <ul className="w-full flex flex-col gap-y-3">
                        <li className="w-full">
                            <Link className="inline-block p-2 font-medium bg-mustard shadow rounded w-full font-poppins text-white text-base hover:bg-mustard-light" href={'/admin'}><span className="flex px-8">Dashboard</span></Link>
                        </li>
                        <li className="w-full flex flex-col items-start">
                            <button className="cursor-pointer flex items-center justify-between  p-2 font-medium  rounded w-full font-poppins text-semi-black hover:scale-105 transition-all ease-linear duration-200" onClick={() => setOrderListIsOpen(!orderListIsOpen)}>
                                <p className="flex">
                                    <LuClipboardCheck className="text-2xl text-semi-black" />
                                    <span className="flex px-2 text-base"> All Orders</span>
                                </p>{orderListIsOpen ? <FaChevronDown className="text-lg text-semi-black transition-all ease-linear duration-200" /> : (<FaChevronRight className="text-lg text-semi-black transition-all ease-linear duration-200" />)}
                            </button>
                            <div className={`w-full py-3 px-5 ${orderListIsOpen ? 'block' : 'hidden'} transition-all ease-linear duration-200`}>
                                <ul className="w-full flex flex-col gap-y-5">
                                    {ordersList.map((link, idx) => <NavLink key={`OrderLink${idx + 1}`} title={link.title} path={link.path} icon={link.icon} />)}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>);
}