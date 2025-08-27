import { Link } from "@inertiajs/react";
export let LandingCard = ({ heading, description, img, link, bgColor = 'bg-powder-gray', textColor = 'text-mustard' }) => {
    return (
        <div className={`flex  w-full xl:h-[50%] shadow flex-col sm:flex-row justify-between items-end sm:items-start gap-y-5 relative ${bgColor}`}>
            <div className="w-full lg:w-[67%]">
                <div className="w-full flex flex-col gap-y-6 p-6">
                    <div className="w-full flex items-center justify-start">
                        <h4 className={`font-poppins font-medium text-base sm:text-[23px] xl:text-[26px] uppercase ${textColor}`}>New Collection</h4>
                    </div>
                    <div className="w-full flex items-center justify-start">
                        <h3 className="font-mod20 font-medium text-2xl sm:text-4xl  xl:text-5xl text-semi-black ">{heading}</h3>
                    </div>
                    <div className="w-full flex items-center justify-start">
                        <p className="font-poppins font-normal text-base text-semi-black text-start  w-9/10  xl:w-8/10">{description}</p>
                    </div>
                    <div className="w-full flex items-center justify-start">
                        <div className="flex items-center justify-center"><Link href={link} className="xl:w-34 lg:w-30 sm:w-28 w-28 p-2.5 border-2 border-zinc font-poppins font-semibold font-base cursor-pointer" as={'button'}>SHOP NOW</Link></div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden flex justify-end items-end  h-90  sm:h-full">
                <div className="w-full flex items-end justify-end h-full">
                    <img src={img} className="object-cover h-90" />
                </div>
            </div>
        </div>
    );
}


