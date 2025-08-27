import { Link, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter, FaYoutube } from "react-icons/fa6";

export let SaleHeading = () => {


    const { auth } = usePage().props
    { auth === null ? 'flex' : 'hidden' }
    let heading = useRef();
    const messages = [
        "👋 Welcome back! Exclusive deals await you",
        "💎 Enjoy your member discount on select items",
        "🚚 Fast & Free Shipping for loyal customers",
        "✨ Early Access: Shop our newest jewellery first",
        "🎁 Earn reward points with every purchase",
        "🔥 Limited Edition pieces available only for members",
        "❤️ Thank you for being part of our jewellery family",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <div className={`w-full bg-zinc py-3 px-3 relative top-0 sm:px-6 md:px-10 lg:px-20  items-center justify-center`}>
            <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-center md:justify-between gap-x-3">
                <div className="text-white font-poppins text-base md:block hidden"><p>Call Us: <span>+123-456-789</span></p></div>
                <div><h6 ref={heading} className="font-poppins text-white text-xs md:text-base flex md:flex-row flex-col items-center gap-1">{auth === null ? (<><span>Sign up and GET 25% OFF for your first order.</span> <Link href={'/signup'} className="underline text-mustard">Signup up now</Link></>) : <span>{messages[index]}</span>}</h6></div>
                <div className="lg:flex hidden flex-row justify-end items-center gap-x-2">
                    <div className="p-1 bg-mustard rounded-full">
                        <Link href={'#'}><FaFacebookF className="text-zinc text-lg" /></Link>
                    </div>
                    <div className="p-1 bg-mustard rounded-full">
                        <Link href={'#'}><FaXTwitter className="text-zinc text-lg" /></Link>
                    </div>
                    <div className="p-1 bg-mustard rounded-full">
                        <Link href={'#'}><FaPinterestP className="text-zinc text-lg" /></Link>
                    </div>
                    <div className="p-1 bg-mustard rounded-full">
                        <Link href={'#'}><FaInstagram className="text-zinc text-lg" /></Link>
                    </div>
                    <div className="p-1 bg-mustard rounded-full">
                        <Link href={'#'}><FaYoutube className="text-zinc text-lg" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
