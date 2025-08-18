import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const products = [
        {
            id: 1,
            title: "Diamond Ring",
            price: "$500",
            image:
                "https://goldsmith.store/wp-content/uploads/2023/11/Kuldsormus-briljandiga-1-scaled.jpeg",
        },
        {
            id: 2,
            title: "Gold Necklace",
            price: "$350",
            image:
                "https://static.malabargoldanddiamonds.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/u/punonk006_c1_1.jpg",
        },
        {
            id: 3,
            title: "Silver Earrings",
            price: "$120",
            image:
                "https://m.media-amazon.com/images/I/41ASGBoi0zL._UY1100_.jpg",
        },
    ];

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

            {isOpen && (
                <div className="sm:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
                    <a href="#about" className="text-gray-600 hover:text-gray-900 transition" onClick={() => setIsOpen(false)} >About Us</a>
                    <a href="#feedback" className="text-gray-600 hover:text-gray-900 transition" onClick={() => setIsOpen(false)}>Feedback</a>
                    <a href="#category" className="text-gray-600 hover:text-gray-900 transition" onClick={() => setIsOpen(false)}>Category</a>
                    {auth ? <div className="sm:hidden mt-5"><Link className="px-4 sm:px-5 sm:py-1 py-2 rounded-lg bg-yellow-600 text-white text-sm sm:text-base font-medium shadow hover:bg-yellow-700 transition" method='post' href={'/logout'} > Logout </Link></div> : ''}
                </div>

            )}

            <section className="flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    Discover Our Exclusive Jewellery Collection
                </h2>
                <p className="text-gray-600 max-w-2xl mb-6 text-sm sm:text-base"> Elegant designs crafted with love and precision. Perfect for every occasion. </p>
                <button className="px-5 sm:px-6 py-2 sm:py-3 bg-yellow-600 text-white rounded-xl shadow hover:bg-yellow-700 transition text-sm sm:text-base">
                    Shop Now
                </button>
            </section>

            <section id="new-arrivals" className="px-4 sm:px-8 py-12 sm:py-16 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-8 text-center">
                    New Arrivals
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col">
                            <img src={product.image} alt={product.title} className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4"
                            />
                            <h4 className="text-base sm:text-lg font-semibold text-gray-700">{product.title}</h4>
                            <p className="text-yellow-700 font-medium text-sm sm:text-base">{product.price}</p>
                            <button className="mt-3 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition text-sm sm:text-base self-start">View Details</button>
                        </div>
                    ))}
                </div>
            </section>


            <footer className="text-center py-4 bg-white shadow mt-10 text-gray-500 text-sm sm:text-base">© {new Date().getFullYear()} Jewellery Shop. All rights reserved.</footer>
        </div>
    );
}