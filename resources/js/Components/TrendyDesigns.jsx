import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import { SectionMainHeading } from "../Shared/SectionMainHeading"
import { SectionSubHeading } from "../Shared/SectionSubHeading"
import { ShopCategoryCard } from "./ShopCategoryCard"

export let TrendyDesigns = () => {



    return (<div className="flex bg-powder-gray justify-center items-center py-30 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-14  max-w-7xl gap-10 ">
            <div className="w-full flex flex-col items-center justify-center gap-y-4">
                <SectionSubHeading heading={'New Collection'} />
                <SectionMainHeading heading={'Trendy Design Collections'} />
            </div>

        </div>
    </div>)
}