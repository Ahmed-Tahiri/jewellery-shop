import { Link } from '@inertiajs/react';
import JewelleryLogo from './../../images/JewelleryLogo.png';
import { RiSearch2Line } from "react-icons/ri";
import { GoHeart, GoHeartFill, GoPerson, GoPersonFill } from "react-icons/go";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi2";
import { NavLink } from './NavLink';


export let Header = () => {


    let navLinks = [
        { name: "Home", link: '/' },
        { name: "Shop", link: '/shop' },
        { name: "Earring", link: '/earring' },
        { name: "Necklaces", link: '/necklaces' },
        { name: "About Us", link: '/about' },
        { name: "Contact Us", link: '/contact' },
    ];

    return (<>

        <div className="w-full bg-white py-7 px-10 lg:px-15 xl:px-20 hidden md:flex items-center justify-center flex-col">
            <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-between lg:gap-x-5 ">
                <div className="w-30 flex items-center justify-start">
                    <Link className='w-full' href={'/'}> <img src={JewelleryLogo} alt='JewelleryLogo' className='w-full' /></Link>
                </div>
                <div className='w-6/10 hidden lg:flex flex-row items-center justify-center'>
                    <nav className='w-full flex flex-row items-center justify-center'>
                        <ul className='w-full flex flex-row items-center justify-center gap-x-7'>
                            {navLinks.map((nav, idx) => <NavLink key={`nav-link-${idx + 1}`} link={nav.link} name={nav.name} />)}
                        </ul>
                    </nav>
                </div>
                <div>
                    <div className='w-full flex flex-row items-center justify-end gap-x-6'>
                        <div>
                            <Link href='#'>
                                <RiSearch2Line className='text-zinc text-2xl' />
                            </Link>
                        </div>
                        <div>
                            <Link href='/wishlist' className='group'>
                                <GoHeartFill className='text-red-500 text-2xl hidden group-hover:block' /> <GoHeart className='text-zinc text-2xl group-hover:hidden' />
                            </Link>
                        </div>
                        <div>
                            <Link href='/cart' className='group'>
                                <HiShoppingBag className='text-2xl text-zinc hidden group-hover:block' /><HiOutlineShoppingBag className='text-zinc text-2xl group-hover:hidden' />
                            </Link>
                        </div>
                        <div>
                            <Link href='/myaccount' className='group'>
                                <GoPersonFill className='text-2xl text-mustard hidden group-hover:block' /> <GoPerson className='text-zinc text-2xl group-hover:hidden' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full   sm:flex lg:hidden flex-row items-center justify-center'>
                <nav className='w-full flex flex-row  items-center justify-center'>
                    <ul className='w-full flex flex-row items-center justify-center  gap-x-6'>
                        {navLinks.map((nav, idx) => <NavLink key={`nav-link-${idx + 1}`} link={nav.link} name={nav.name} />)}
                    </ul>
                </nav>
            </div>
        </div>
    </>

    );
}