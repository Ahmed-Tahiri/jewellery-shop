import { Link } from "@inertiajs/react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter, FaYoutube } from "react-icons/fa6";

export let SaleHeading = () => {
    return (
        <div className="w-full bg-zinc py-3 px-20">
            <div className="w-full flex flex-row justify-between items-center">
                <div className="text-white font-poppins text-base"><p>Call Us: <span>+123-456-789</span></p></div>
                <div><h6 className="font-poppins text-white text-base">Sign up and GET 25% OFF for your first order. <Link href={'/signup'} className="underline text-mustard">Signup up now</Link></h6></div>
                <div className="flex flex-row justify-end items-center gap-x-2">
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
