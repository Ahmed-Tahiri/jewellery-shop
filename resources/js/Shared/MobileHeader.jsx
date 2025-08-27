
import { AiOutlineMenu } from "react-icons/ai";
import { GoHeart, GoPerson } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "./NavLink";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "@inertiajs/react";
import { useState } from "react";
export let MobileHeader = () => {
    let [navIsOpen, setNavIsOpen] = useState(false);
    let navLinks = [
        { name: "Home", link: '/' },
        { name: "Shop", link: '/shop' },
        { name: "Earring", link: '/earring' },
        { name: "Necklaces", link: '/necklaces' },
        { name: "About Us", link: '/about' },
        { name: "Contact Us", link: '/contact' },
    ];
    let navIconsMobile = [
        { name: <GoHeart className='text-zinc text-xl  sm:text-2xl' />, link: '#' },
        { name: <HiOutlineShoppingBag className='text-zinc text-xl  sm:text-2xl' />, link: '#' },
        { name: <GoPerson className='text-zinc text-xl  sm:text-2xl' />, link: '/myaccount' },
    ]
    return <>

        <div className={`w-8/10 flex fixed top-0 left-0 min-h-[630px] h-screen bg-white z-50 md:hidden ${navIsOpen ? "translate-x-0" : "-translate-x-full"} flex-col items-start justify-start  gap-y-0 transition-all ease-linear duration-200`}>
            <div className='w-full items-center justify-start mt-2 p-2'><button className='flex flex-row items-center gap-x-1' onClick={() => setNavIsOpen(false)}><MdOutlineClose className='text-zinc text-3xl' /></button></div>
            <div className='w-full p-2 overflow-y-scroll h-[500px]'>
                <nav className='w-full flex flex-row items-center justify-center'>
                    <ul className='w-full flex flex-col items-start justify-center'>
                        {navLinks.map((nav, idx) => <NavLink key={`nav-link-${idx + 1}`} link={nav.link} name={nav.name} onClick={() => setNavIsOpen(false)} />)}
                    </ul>
                </nav>
            </div>
        </div>
        <div className="w-full bg-transparent py-2 px-3 sm:px-7 flex md:hidden items-center justify-between mb-3">
            <div className='flex items-center gap-x-2'>
                <div><button><AiOutlineMenu className='text-xl sm:text-2xl text-zinc' onClick={() => setNavIsOpen(true)} /></button></div>
                <div><button><RiSearch2Line className='text-zinc text-xl  sm:text-2xl' /></button></div>
            </div>

            <div>
                <div className='w-full flex flex-row items-center justify-end sm:gap-x-4 gap-x-2'>
                    {navIconsMobile.map((icon, idx) => <div key={`navIcon${idx + 1}`}><Link href={icon.link}>{icon.name}</Link></div>)}
                </div>
            </div>

        </div>
    </>
}