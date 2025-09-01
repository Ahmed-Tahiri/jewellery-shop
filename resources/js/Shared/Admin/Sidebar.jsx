import JewelleryLogo from './../../../images/JewelleryLogo.png';
import { FaRegCalendarCheck } from "react-icons/fa6";
import { LuSquareArrowOutUpRight, LuClipboardList, LuPackagePlus } from "react-icons/lu";
import { AiOutlineProduct, AiOutlineUnorderedList } from "react-icons/ai";
import { BsBoxes, BsCashCoin } from "react-icons/bs";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { TbCategory2, TbHexagonalPrismPlus } from "react-icons/tb";
import { MdOutlineSpaceDashboard, MdOutlineCancel, MdOutlineLogout, MdOutlineClose } from "react-icons/md";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { RiCoupon3Line } from "react-icons/ri";
import { NavLi } from "./NavLi";
import { SidebarDropdown } from "./SidebarDropDown";
import { Link } from "@inertiajs/react";
import { useNav } from "../../Context/AdminNavbarContext";

export let Sidebar = () => {


    const { setNavIsOpen } = useNav();

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
    const productList = [
        {
            title: 'Manage Products',
            path: '/admin/products',
            icon: <AiOutlineUnorderedList className="text-light-gray text-xl" />,
        },
        {
            title: 'Add Product',
            path: '/admin/products/create',
            icon: <HiOutlineViewGridAdd className="text-light-gray text-xl" />,
        },
        {
            title: 'Manage Inventory',
            path: '/admin/inventory',
            icon: <BsBoxes className="text-light-gray text-xl" />,
        },
    ];
    const categoryList = [
        {
            title: 'Manage Categories',
            path: '/admin/categories',
            icon: <AiOutlineUnorderedList className="text-light-gray text-xl" />,
        },

        {
            title: 'Add Category',
            path: '/admin/categories/create',
            icon: <LuPackagePlus className="text-light-gray text-xl" />,
        },
        {
            title: 'Add Sub Category',
            path: '/admin/subcategories/create',
            icon: <TbHexagonalPrismPlus className="text-light-gray text-xl" />,
        },
    ];

    return (
        <div className="w-full h-full shadow bg-white">
            <div className="w-full flex flex-col items-center justify-between h-full">
                <div className='w-full flex lg:hidden items-center justify-start mt-2 p-2'>
                    <button className='flex flex-row items-center gap-x-1' onClick={() => setNavIsOpen(false)}><MdOutlineClose className='text-zinc text-3xl' /></button>
                </div>
                <div className="w-full hidden sm:flex pb-2 pt-3  px-3 flex-row gap-x-2">
                    <img src={JewelleryLogo} alt="jewellery logo" className="w-[65%]" />
                </div>
                <div className="w-full mt-2 flex flex-1 ">
                    <nav className="py-5 w-full flex h-[550px] overflow-y-auto overflow-x-hidden">
                        <ul className="w-full flex flex-col gap-y-0 px-3">
                            <NavLi title={'Dashboard'} path={'/admin'} icon={<MdOutlineSpaceDashboard className="text-2xl text-semi-black" />} />
                            <SidebarDropdown title="Products" icon={<AiOutlineProduct className="text-2xl text-semi-black" />} links={productList} />
                            <SidebarDropdown title="Orders" icon={<LuClipboardList className="text-2xl text-semi-black" />} links={ordersList} />
                            <SidebarDropdown title="Categories" icon={<TbCategory2 className="text-2xl text-semi-black" />} links={categoryList} />
                            <NavLi path={'/admin/discounts'} title={'Discounts'} icon={<RiCoupon3Line className="text-2xl text-semi-black" />} />
                            <NavLi path={'/admin/customers'} title={'Customers'} icon={<HiOutlineFaceSmile className="text-2xl text-semi-black" />} />
                            <NavLi path={'/admin/payment'} title={'Payment'} icon={<BsCashCoin className="text-2xl text-semi-black" />} />
                        </ul>
                    </nav>
                </div>
                <div className="w-full py-3  px-3 flex items-center justify-center lg:pb-0 pb-5">
                    <Link href={'/logout'} as={'button'} method="post" className="w-full py-2 px-3 cursor-pointer flex gap-x-3 items-center justify-start font-poppins font-medium transition-all ease-linear duration-200 hover:scale-105"><span><MdOutlineLogout className="text-semi-black text-2xl" /></span><span>Logout</span></Link>
                </div>
            </div>
        </div>
    );
}