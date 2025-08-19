import { Link, usePage } from "@inertiajs/react";

export let MobileNav = ({ setIsOpen }) => {
    const { auth } = usePage().props;
    return (
        <div className="sm:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition" onClick={() => setIsOpen(false)} >About Us</a>
            <a href="#feedback" className="text-gray-600 hover:text-gray-900 transition" onClick={() => setIsOpen(false)}>Feedback</a>
            <a href="#category" className="text-gray-600 hover:text-gray-900 transition" onClick={() => setIsOpen(false)}>Category</a>
            {auth ? <div className="sm:hidden mt-5"><Link className="px-4 sm:px-5 sm:py-1 py-2 rounded-lg bg-yellow-600 text-white text-sm sm:text-base font-medium shadow hover:bg-yellow-700 transition" method='post' href={'/logout'} > Logout </Link></div> : ''}
        </div>
    );
}