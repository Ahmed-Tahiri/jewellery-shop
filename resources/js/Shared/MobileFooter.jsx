import { Link } from "@inertiajs/react"
import { FooterDropDown } from "./FooterDropDown"
import JewelleryLogo from './../../images/JewelleryLogo.png';


export let MobileFooter = ({ footerLink, contactInfo, socialLinks }) => {
    return <div className="flex md:hidden w-full flex-col gap-y-3">
        {footerLink.map((link, idx) => <FooterDropDown key={`footerDropDown${idx + 1}`} links={link.links} title={link.name} />)}

        <div className="w-full flex justify-between p-2">
            <div className="w-[45%]">
                <div className="w-full flex flex-col justify-center items-start gap-y-3">
                    <div className="w-full flex items-center justify-start">
                        <img src={JewelleryLogo} alt="jewellery logo" className="w-8/10 sm:w-6/10" />
                    </div>

                    <div className="w-full">
                        <p className="font-poppins text-xs text-start text-light-gray">Timeless jewellery, crafted with elegance and love. Celebrate beauty, style, and confidence with unique designs made to sparkle forever.</p>
                    </div>

                </div>
            </div>
            <div className="flex items-end flex-col w-[50%] gap-y-3">
                <h6 className="font-poppins text-base text-start text-semi-black">Contact Info</h6>
                <ul className="flex flex-col items-end w-full gap-y-1">
                    {contactInfo.map((info, idx) => <li className="w-8/10 flex justify-end" key={`FooterContactLink${idx + 1}`}><Link className="py-1 text-xs sm:text-sm text-end inline-block" href={info.path}>{info.name}</Link></li>)}
                </ul>
            </div>
        </div>
        <div className="flex w-full flex-row justify-between  items-center gap-x-2 p-2 sm:w-[40%]">
            {socialLinks.map((link, idx) => <div key={`footerSocialLink${idx + 1}`}><Link href={link.path} className="inline-block p-2 bg-mustard shadow">{link.icon}</Link></div>)}
        </div>
        <div className="flex border-t-[1px] border-gray-300 py-3 px-2 w-full items-center justify-start">
            <p className="font-poppins text-semi-black font-medium text-xs sm:text-sm flex flex-col sm:flex-row items-start gap-1"><span>Copyright &copy; {new Date().getFullYear()} <Link href='/' className="text-mustard hover:underline">Jewellery Website Design</Link>. </span> <span>All Rights Reserved.</span></p>
        </div>
    </div>
}