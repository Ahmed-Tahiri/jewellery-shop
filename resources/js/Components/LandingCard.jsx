import { Link } from "@inertiajs/react";
export let LandingCard = ({ heading, description, img, link, bgColor = 'bg-powder-gray', textColor = 'text-mustard' }) => {
    return (<div className={`flex w-full h-[50%] shadow flex-row justify-between items-start gap-y-5 relative ${bgColor}`}>
        <div className="w-[67%]">
            <div className="w-full flex flex-col gap-y-6 p-6">
                <div className="w-full flex items-center justify-start">
                    <h4 className={`font-poppins font-medium text-[26px] uppercase ${textColor}`}>New Collection</h4>
                </div>
                <div className="w-full flex items-center justify-start">
                    <h3 className="font-mod20 font-medium text-5xl text-semi-black ">{heading}</h3>
                </div>
                <div className="w-full flex items-center justify-start">
                    <p className="font-poppins font-normal text-base text-semi-black text-start w-8/10">{description}</p>
                </div>
                <div className="w-full flex items-center justify-start">
                    <div className="flex items-center justify-center"><Link href={link} className="w-34 p-2.5 border-2 border-zinc font-poppins font-semibold font-base cursor-pointer" as={'button'}>SHOP NOW</Link></div>
                </div>
            </div>
        </div>
        <div className="overflow-hidden w-[33%] flex items-end h-full absolute right-0">
            <div className="w-full flex items-end justify-end">
                <img src={img} alt="Jewellery Image" className="w-full object-cover" />
            </div>
        </div>
    </div>);
}