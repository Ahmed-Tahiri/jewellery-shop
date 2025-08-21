import { LandingCard } from "./LandingCard";
import EarringImg from './../../images/earrings.png';
import NecklaceImg from './../../images/necklace.png';
import RingImg from './../../images/rings.png';
import { Link } from "@inertiajs/react";
export let Landing = () => {


    return (
        <section className="w-full py-2 px-20">
            <div className="w-full h-180 flex flex-row items-center justify-between gap-x-6">
                <div className="flex w-5/10 bg-powder-gray h-full shadow flex-col justify-between items-center">
                    <div className="w-full flex flex-col gap-y-6 p-6">
                        <div className="w-full flex items-center justify-center">
                            <h4 className="font-poppins font-medium text-3xl text-mustard uppercase">New Collection</h4>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <h3 className="font-mod20 font-medium text-5xl text-semi-black ">Modern Earrings</h3>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <p className="font-poppins font-normal text-base text-semi-black text-center w-6/10">Discover elegant and chic designs with bold, timeless and dazzling modern earrings.</p>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <div className="flex items-center justify-center"><Link href={'#'} className="w-34 p-2.5 border-2 border-zinc font-poppins font-semibold font-base cursor-pointer" as={'button'}>SHOP NOW</Link></div>
                        </div>
                    </div>
                    <div className="overflow-hidden w-full h-100">
                        <div className="w-full flex items-end justify-end h-full">
                            <img src={EarringImg} className="object-cover h-full" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-5/10 items-center justify-center h-full gap-y-6">
                    <LandingCard heading='Modern Necklace' img={NecklaceImg} description={`Explore graceful and modern pieces that blend elegance, charm and contemporary beauty.`} link={'#'} />
                    <LandingCard heading='Modern Rings' img={RingImg} description={`Embrace unique and stunning styles with radiant, sleek and fashionable modern rings.`} link={'#'} color="bg-mustard" />
                </div>
            </div>
        </section>
    );

}


