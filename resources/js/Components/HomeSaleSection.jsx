import { Link } from "@inertiajs/react";
import { SectionMainHeading } from "../Shared/SectionMainHeading";
import { SectionSubHeading } from "../Shared/SectionSubHeading";
import { BsOctagonFill, BsOctagon } from "react-icons/bs";
import SaleImage from './../../images/SalePageImg.jpg';
import { SaleSlider } from "./SaleSlider";




export let SaleSection = () => {


    return (<div className="flex flex-col relative bg-white justify-between items-center py-20  overflow-hidden">
        <SaleSlider message={'Festival Sale! Upto 25% Off'} />
        <div className="flex flex-row items-center w-full gap-x-5">
            <div className="w-5/11 relative h-150">
                <div className="w-full h-full"><img src={SaleImage} alt="About Section Image" className="w-full h-full object-cover shadow-xs" /></div>
                <div className="w-full h-full absolute top-0 left-0 bg-transparent p-3 z-10">
                    <div className="w-full h-full border-2 border-white bg-transparent"></div>
                </div>
            </div>
            <div className="w-6/11 flex flex-col items-start justify-start gap-y-14 max-w-7xl  px-10 relative">
                <div className="absolute -top-20 right-30">
                    <div className="relative">
                        <BsOctagonFill className="text-[110px] z-10 text-zinc absolute top-0 right-0" />
                        <BsOctagon className="text-[110px] z-20 text-white absolute top-0 right-0 rotate-25  " />
                        <span className="inline-block z-30 text-center absolute top-5 right-7 font-mod20 text-mustard text-3xl sale">25% OFF</span>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-y-3">
                    <div className="w-9/10 flex flex-col gap-y-5">
                        <SectionSubHeading heading={'Festival Sale Offers'} />
                        <SectionMainHeading heading={'Upto 25% Off All Jewellery Favorites - Limited Time!'} />
                        <p className="flex-1 text-semi-black font-poppins text-base">Our jewellery is crafted with passion, blending timeless artistry with modern elegance. Each piece tells a story of beauty, dedication, and soulful craftsmanship.</p>
                        <div><Link className="shadow-xs inline-block text-center min-w-36 p-2 bg-mustard font-poppins text-zinc font-medium text-lg hover:bg-mustard-light transition-colors ease-linear duration-200 mt-7">Shop Now</Link></div>
                    </div>

                </div>
            </div>
        </div>
        <SaleSlider message={'Festival Sale! Upto 25% Off'} />
    </div>)
}