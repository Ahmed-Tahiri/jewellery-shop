import { SectionMainHeading } from "../Shared/SectionMainHeading";
import { SectionSubHeading } from "../Shared/SectionSubHeading";
import { IoSparklesSharp } from "react-icons/io5";
import AboutImage from './../../images/AboutImg.jpg';
import AboutMiniImg from './../../images/AboutMiniImg.jpg';
import PlantImage from './../../images/plants.png';

export let AboutLanding = () => {
    const aboutData = [
        { count: 104, label: 'Categories' },
        { count: 1485, label: 'Products' },
        { count: 99, label: 'Satisfied Customer' },
    ];

    return (<div className="flex relative bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20 overflow-hidden">
        <div className="absolute top-10 -left-20 h-40 z-50"><img className="h-40 transform-scale-y-[-1] rotate-320" src={PlantImage} alt="Leaf Image for design" /></div>
        <div className="absolute bottom-44 -right-20 h-40 z-50"><img className="h-50 transform-scale-y-[-1] rotate-245" src={PlantImage} alt="Leaf Image for design" /></div>
        <div className="w-full flex flex-row items-start justify-between  max-w-7xl gap-x-20 ">
            <div className="w-4/10 relative h-150">
                <span className="absolute bottom-10 -left-14 z-20"><IoSparklesSharp className="text-mustard text-9xl rotate-270" /></span>
                <div className="w-full h-full"><img src={AboutImage} alt="About Section Image" className="w-full h-full object-cover shadow-xs" /></div>
                <div className="w-full h-full absolute top-0 left-0 bg-transparent p-3 z-10">
                    <div className="w-full h-full border-2 border-white bg-transparent"></div>
                </div>
            </div>

            <div className="w-6/10 flex flex-col items-center justify-center gap-y-14">
                <div className="w-full flex flex-col gap-y-3">
                    <div className="flex flex-row items-center justify-between w-full gap-x-3">
                        <div className="flex flex-col gap-y-5">
                            <SectionSubHeading heading={'About Us'} />
                            <SectionMainHeading heading={'The Art and Soul Behind Our Jewellery'} />
                        </div>
                        <div className="w-58 h-44 bg-red-400 relative shadow-xs">
                            <img src={AboutMiniImg} alt="About Mini img" className="w-full h-full object-cover aspect-square" />
                            <div className="w-full h-full absolute top-0 left-0 bg-transparent p-2 z-10">
                                <div className="w-full h-full border-2 border-white bg-transparent"></div>
                            </div>
                        </div>
                    </div>
                    <p className="flex-1 text-semi-black font-poppins text-base">Our jewellery is crafted with passion, blending timeless artistry with modern elegance. Each piece tells a story of beauty, dedication, and soulful craftsmanship.</p>
                </div>
                <div className="w-full flex flex-row bg-zinc shadow-sm">
                    {aboutData.map((data, idx) => (<div key={`AboutDataCard${idx + 1}`} className="flex-1 flex flex-col p-5  items-center justify-center">
                        <div className={`w-full flex flex-col gap-y-3 items-start justify-center ${data.label !== "Satisfied Customer" ? 'border-e-[0.5px]  border-gray-300' : ''}`}>
                            <p className="font-mod20 text-mustard text-4xl"> {data.label === "Satisfied Customer" ? `${data.count}%` : data.count}</p>
                            <p className="font-poppins text-white text-base">{data.label}</p>
                        </div>
                    </div>))}
                </div>

                <div className="flex flex-col gap-y-3 items-start w-full">
                    <p className="font-signature text-4xl text-semi-black">Jenny Alexander</p>
                    <div className="flex flex-row gap-x-2 items-center justify-start"><span className="font-poppins text-lg text-light-gray">Jenny Alexander</span><span className="inline-block h-1.5 w-1.5 bg-mustard rounded-full"></span><span className="font-poppins text-lg text-light-gray">Founder</span></div>
                </div>
            </div>
        </div>
    </div>)
}