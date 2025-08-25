import { Link, usePage } from "@inertiajs/react";



let NavLink = ({ path, title }) => {

    let { url } = usePage();
    let activePath = url.split('?')[0];
    return <li className="w-full"><Link href={path} className={`flex p-3 border-1 border-gray-300 shadow-xs w-full font-poppins text-lg ${activePath === path ? 'bg-mustard' : 'bg-white'} transition-colors ease-linear duration-200 hover:bg-mustard font-medium`}>{title}</Link></li>;
}
export let Navbar = () => {
    let navLinks = [
        {
            title: 'Personal Information',
            path: '/myaccount',
        },
        {
            title: 'My Orders',
            path: '/myaccount/orders',
        },
        {
            title: 'Manage Addresses',
            path: '/myaccount/addresses',
        },
        {
            title: 'Password Manager',
            path: '/myaccount/password',
        },
        {
            title: 'Logout',
            path: '/myaccount/logout',
        },

    ];
    return <div className="w-2/9">
        <ul className="flex flex-col items-start gap-y-3 w-full">
            {navLinks.map((link, idx) => <NavLink key={`myAccountNav${idx + 1}`} path={link.path} title={link.title} />)}
        </ul>
    </div>
}