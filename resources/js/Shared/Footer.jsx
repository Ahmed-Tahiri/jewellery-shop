import { Link } from "@inertiajs/react"
import JewelleryLogo from './../../images/JewelleryLogo.png';
import { FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FooterNavContainer } from "./FooterNavContainer";
import { MobileFooter } from "./MobileFooter";
export let Footer = () => {


    const footerLink = [
        {
            name: "Company",
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Career', path: '/career' },
            ]
        },
        {
            name: "Customer Services",
            links: [
                { name: 'My Account', path: '/account' },
                { name: 'Track Your Order', path: '/track' },
                { name: 'Return', path: '/return' },
                { name: 'FAQ', path: '/faq' },
            ]
        },
        {
            name: "Our Information",
            links: [
                { name: 'Privacy', path: '/privacy' },
                { name: 'User Terms & Conditions', path: '/terms' },
                { name: 'Return Policy', path: '/policy/return' },
            ]
        },
    ];

    const socialLinks = [
        {
            icon: <FaFacebookF className="text-zinc text-lg" />,
            path: '#'
        },
        {
            icon: <FaXTwitter className="text-zinc text-lg" />,
            path: '#'
        },
        {
            icon: <FaPinterestP className="text-zinc text-lg" />,
            path: '#'
        },
        {
            icon: <FaInstagram className="text-zinc text-lg" />,
            path: '#'
        },
        {
            icon: <FaFacebookF className="text-zinc text-lg" />,
            path: '#'
        },
        {
            icon: <FaYoutube className="text-zinc text-lg" />,
            path: '#'
        },
    ];
    const contactInfo = [{ name: '+0123-456-789', path: '#' }, { name: 'example@gmail.com', path: '#' }, { name: 'Warehouse #5, Industrial Zone, I-9/3, Islamabad, Pakistan', path: '#' }];

    return <footer className="w-full bg-powder-gray flex items-center justify-center p-2 md:p-5">
        <div className="bg-white w-full flex items-center justify-center px-0 md:px-15">
            <div className="bg-white hidden max-w-7xl md:block">
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
                                {socialLinks.map((link, idx) => <div key={`footerSocialLink${idx + 1}`}><Link href={link.path} className="inline-block p-2 bg-mustard shadow">{link.icon}</Link></div>)}
                            </div>
                        </div>
                        <div className="w-[78%] flex flex-row justify-between items-start gap-x-2">
                            {footerLink.map((section, idx) => <FooterNavContainer key={`footerSection${idx + 1}`} heading={section.name} links={section.links} />)}
                            <FooterNavContainer heading={'Contact Info'} links={contactInfo} />
                        </div>
                    </div>
                    <div className="flex border-t-[1px] border-light-gray py-8 w-full items-center justify-center">
                        <div className="w-full flex items-center justify-start">
                            <p className="font-poppins text-semi-black font-medium text-base">Copyright &copy; {new Date().getFullYear()} <Link href='/' className="text-mustard hover:underline">Jewellery Website Design</Link>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            <MobileFooter socialLinks={socialLinks} footerLink={footerLink} contactInfo={contactInfo} />
        </div>
    </footer>
}
