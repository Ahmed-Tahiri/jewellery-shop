import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Footer } from "../Components/Footer";
import { Landing } from "../Components/Landing";
import { NewArrival } from "../Components/NewArrival";
import { MobileNav } from "../Components/MobileNav";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="flex justify-between items-center px-4 sm:px-8 py-4 shadow bg-white">
                {auth ? <div className="hidden sm:flex "><Link method='post' href={'/logout'} className="px-4 sm:px-5 py-2 rounded-lg bg-yellow-600 text-white text-sm sm:text-base font-medium shadow hover:bg-yellow-700 transition" > Logout </Link></div> : ''}
                <div className="flex items-center gap-6">
                    <button className="sm:hidden text-2xl text-gray-700" onClick={() => setIsOpen(!isOpen)} >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <nav className="hidden sm:flex gap-6 text-sm sm:text-base">
                        <a href="#about" className="text-gray-600 hover:text-gray-900 transition">  About Us   </a>
                        <a href="#feedback" className="text-gray-600 hover:text-gray-900 transition"> Feedback </a>
                        <a href="#category" className="text-gray-600 hover:text-gray-900 transition"> Category</a>
                    </nav>
                </div>

                {auth ? (
                    <h1 className="text-base sm:text-lg font-semibold text-gray-700">  Welcome {auth.firstName}!   </h1>
                ) : (
                    <div className="flex gap-3 sm:gap-4">
                        <Link href="/signup" className="px-4 sm:px-5 py-2 rounded-lg bg-yellow-600 text-white text-sm sm:text-base font-medium shadow hover:bg-yellow-700 transition" > Signup </Link>
                        <Link href="/login" className="px-4 sm:px-5 py-2 rounded-lg border border-yellow-600 text-yellow-600 text-sm sm:text-base font-medium shadow hover:bg-yellow-600 hover:text-white transition" >Login</Link>
                    </div>
                )}
            </header>

            {isOpen && (<MobileNav open={isOpen} setIsOpen={setIsOpen} />)}
            <Landing />
            <NewArrival />
            <Footer />
        </div>
    );
}