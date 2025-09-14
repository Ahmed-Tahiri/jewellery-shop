import { SectionMainHeading } from "../Shared/SectionMainHeading";
import { SectionSubHeading } from "../Shared/SectionSubHeading";
import { JewelleryCard } from "./JewelleryCard";
import TrendyDesignImg from './../../images/TrendyDesignImg.jpg';

export let TrendyDesigns = () => {

    return (<div className="flex bg-powder-gray justify-center items-center py-30 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-14  max-w-7xl gap-10 ">
            <div className="w-full flex flex-col items-center justify-center gap-y-4">
                <SectionSubHeading heading={'New Collection'} />
                <SectionMainHeading heading={'Trendy Design Collections'} />
            </div>
            <div className='w-full gap-x-5 flex items-start justify-between'>
                <div className="w-3/12 h-210 relative">
                    <img src={TrendyDesignImg} alt="Trendy Design Section Image" className="h-full object-cover" />
                    <div className="absolute top-0 left-0 h-full w-full p-2"><div className="h-full w-full border-2 border-white"></div></div>
                </div>
                <div className="w-9/12 flex flex-row flex-wrap items-start justify-start gap-5">
                    <JewelleryCard />
                    <JewelleryCard />
                    <JewelleryCard />
                    <JewelleryCard />
                    <JewelleryCard />
                    <JewelleryCard />
                </div>
            </div>
        </div>
    </div>)
}