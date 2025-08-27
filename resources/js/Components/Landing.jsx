import { LandingCard } from "./LandingCard";
import EarringImg from './../../images/earrings.png';
import NecklaceImg from './../../images/necklace.png';
import RingImg from './../../images/rings.png';
import { Link } from "@inertiajs/react";
export let Landing = () => {


    return (
        <section className="w-full py-2   px-5 md:px-10 lg:px-15 xl:px-20 flex items-center justify-center ">
            <div className="w-full min-h-180 xl:h-180 flex flex-col xl:flex-row items-center justify-between gap-6 max-w-7xl overflow-hidden">
                <div className="flex w-full xl:w-5/10 bg-powder-gray h-full shadow flex-col sm:flex-row xl:flex-col justify-between items-center">
                    <div className="w-full  flex flex-col gap-y-2 sm:gap-y-4 xl:gap-y-6 p-6">
                        <div className="w-full flex items-center justify-start xl:justify-center">
                            <h4 className="font-poppins font-medium text-base sm:text-[23px] xl:text-[26px] text-mustard uppercase">New Collection</h4>
                        </div>
                        <div className="w-full flex items-center justify-start xl:justify-center">
                            <h3 className="font-mod20 font-medium text-2xl sm:text-4xl  xl:text-5xl text-semi-black ">Modern Earrings</h3>
                        </div>
                        <div className="w-full flex items-center justify-start xl:justify-center">
                            <p className="font-poppins font-normal text-sm sm:text-base text-semi-black text-start xl:text-center w-9/10 xl:w-6/10">Discover elegant and chic designs with bold, timeless and dazzling modern earrings.</p>
                        </div>
                        <div className="w-full flex items-center justify-start xl:justify-center">
                            <div className="flex items-center justify-center"><Link href={'#'} className="xl:w-34 lg:w-30 sm:w-28 w-28  p-2.5 border-2 border-zinc font-poppins font-semibold font-base cursor-pointer" as={'button'}>SHOP NOW</Link></div>
                        </div>
                    </div>
                    <div className="overflow-hidden w-full h-100">
                        <div className="w-full flex items-end justify-end h-full">
                            <img src={EarringImg} className="object-cover h-full" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full xl:w-5/10 items-center justify-center h-full gap-y-6 my-5">
                    <LandingCard heading='Modern Necklace' img={NecklaceImg} description={`Graceful modern pieces with timeless charm and elegance.`} link={'#'} />
                    <LandingCard heading='Modern Rings' img={RingImg} description={`Unique styles with radiant, sleek and fashionable designs.`} link={'#'} bgColor="bg-mustard" textColor="text-semi-black" />
                </div>
            </div>
        </section>
    );

}


