import { Link } from '@inertiajs/react';
import JewelleryLogo from './../../images/JewelleryLogo.png';
import { RiSearch2Line } from "react-icons/ri";
import { GoHeart, GoPerson } from "react-icons/go";
import { NavLink } from './NavLink';
import { HiOutlineShoppingBag } from "react-icons/hi2";
export let Header = () => {


    let navLinks = [
        { name: "Home", link: '/' },
        { name: "Shop", link: '/shop' },
        { name: "Earring", link: '/earring' },
        { name: "Necklaces", link: '/necklaces' },
        { name: "About Us", link: '/about' },
        { name: "Contact Us", link: '/contact' },
        { name: "Blogs", link: '/blog' },
    ];
    let navIcons = [
        { name: <RiSearch2Line className='text-zinc text-2xl' />, link: '#' },
        { name: <GoHeart className='text-zinc text-2xl' />, link: '#' },
        { name: <HiOutlineShoppingBag className='text-zinc text-2xl' />, link: '#' },
        { name: <GoPerson className='text-zinc text-2xl' />, link: '#' },
    ]
    return (
        <div className="w-full bg-white py-7 px-20">
            <div className="w-full flex flex-row items-center justify-between gap-x-3">
                <div className="w-30 flex items-center justify-start">
                    <Link className='w-full' href={'/'}> <img src={JewelleryLogo} alt='JewelleryLogo' className='w-full' /></Link>
                </div>
                <div className='w-6/10 flex flex-row items-center justify-center'>
                    <nav className='w-full flex flex-row items-center justify-center'>
                        <ul className='w-full flex flex-row items-center justify-center gap-x-10'>
                            {navLinks.map((nav, idx) => <NavLink key={`nav-link-${idx + 1}`} link={nav.link} name={nav.name} />)}

                        </ul>
                    </nav>
                </div>
                <div>
                    <div className='w-full flex flex-row items-center justify-end gap-x-8'>

                        {navIcons.map((icon, idx) => <div key={`navIcon${idx + 1}`}><Link href={icon.link}>{icon.name}</Link></div>)}
                    </div>

                </div>
            </div>
        </div>
    );
}