import { Link } from "@inertiajs/react"
import JewelleryLogo from './../../images/JewelleryLogo.png';
import { FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter, FaYoutube } from "react-icons/fa6";
export let Footer = () => {


    const footerLink = [
        {
            name: "Company",
            links: [
                { name: 'About Us', link: '/about' },
                { name: 'Blog', link: '/blog' },
                { name: 'Contact Us', link: '/contact' },
                { name: 'Career', link: '/career' },
            ]
        },
        {
            name: "Customer Services",
            links: [
                { name: 'My Account', link: '/account' },
                { name: 'Track Your Order', link: '/track' },
                { name: 'Return', link: '/return' },
                { name: 'FAQ', link: '/faq' },
            ]
        },
        {
            name: "Our Information",
            links: [
                { name: 'Privacy', link: '/privacy' },
                { name: 'User Terms & Conditions', link: '/terms' },
                { name: 'Return Policy', link: '/policy/return' },
            ]
        },
    ];


    const contactInfo = ['+0123-456-789', 'example@gmail.com', 'Warehouse #5, Industrial Zone, I-9/3, Islamabad, Pakistan'];

    return <footer className="px-20 py-15 w-full">
        <div className="w-full">
            <div className="w-full py-8 flex flex-row items-center justify-between gap-x-15">
                <div className="w-[22%] flex flex-col justify-center items-start gap-y-5">
                    <div className="w-1/2 flex items-center justify-start">
                        <img src={JewelleryLogo} alt="jewellery logo" className="w-full" />
                    </div>

                    <div className="w-full">
                        <p className="font-poppins text-sm text-light-gray">Timeless jewellery, crafted with elegance and love. Celebrate beauty, style, and confidence with unique designs made to sparkle forever.</p>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-x-3">
                        <div><Link href={'#'} className="inline-block p-2 bg-mustard shadow"><FaFacebookF className="text-zinc text-lg" /></Link></div>
                        <div><Link href={'#'} className="inline-block p-2 bg-mustard shadow"><FaXTwitter className="text-zinc text-lg" /></Link></div>
                        <div><Link href={'#'} className="inline-block p-2 bg-mustard shadow"><FaPinterestP className="text-zinc text-lg" /></Link></div>
                        <div><Link href={'#'} className="inline-block p-2 bg-mustard shadow"><FaInstagram className="text-zinc text-lg" /></Link></div>
                        <div><Link href={'#'} className="inline-block p-2 bg-mustard shadow"><FaYoutube className="text-zinc text-lg" /></Link></div>

                    </div>
                </div>
                <div className="w-[78%] flex flex-row justify-between items-start gap-x-2">
                    {footerLink.map((section, idx) => <div className="w-[25%] flex flex-col justify-between items-start gap-y-5" key={`footerLinkContainer${idx + 1}`}>

                        <h3 className="font-poppins font-medium text-lg">{section.name}</h3>
                        <ul className="w-full flex flex-col gap-y-3 items-start justify-between">
                            {section.links.map((link, index) => <li key={`footerSectionLink${index + 1}`}><Link href={link.link} className="inline-block text-sm text-light-gray font-medium hover:underline">{link.name}</Link></li>)}

                        </ul>
                    </div>

                    )}
                    <div className=" flex flex-col justify-between items-start gap-y-5 w-[25%]">
                        <h3 className="font-poppins font-medium text-lg">Contact Info</h3>
                        <ul className="w-full flex flex-col gap-y-3 items-start justify-between">
                            {contactInfo.map((name, index) => <li key={`footerSectionLink${index + 1}`}><Link href={'#'} className="inline-block text-sm text-light-gray font-medium hover:underline">{name}</Link></li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex border-t-[1px] border-light-gray py-8 w-full items-center justify-center">
                <div className="w-full flex items-center justify-start">
                    <p className="font-poppins text-semi-black font-medium text-base">Copyright &copy; {new Date().getFullYear()} <Link href='/' className="text-mustard hover:underline">Jewellery Website Design</Link>. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
}