import { Swiper, SwiperSlide } from "swiper/react";
import { SectionMainHeading } from "../Shared/SectionMainHeading";
import { SectionSubHeading } from "../Shared/SectionSubHeading";
import { JewelleryCard } from "./JewelleryCard";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";
import { useState } from "react";
import { usePage } from "@inertiajs/react";


export let BestProducts = () => {
    const [progress, setProgress] = useState(0);
    const { products } = usePage().props;
    return (
        <div className="flex  bg-powder-gray justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20 overflow-hidden">

            <div className="w-full flex flex-col items-start justify-between  max-w-7xl gap-y-10 ">
                <div className="flex w-full items-end justify-between gap-x-7">
                    <div className="flex flex-col gap-y-5">
                        <SectionSubHeading heading={'Our Products'} />
                        <SectionMainHeading heading={'Our Best Selling Products'} />
                    </div>
                    <div className="flex gap-x-2 items-center justify-start">
                        <div><button className="p-2 min-w-14 font-medium shadow-xs font-poppins bg-zinc hover:bg-zinc text-white cursor-pointer border-[0.5px] border-gray-300 transition-colors ease-linear duration-200">All</button></div>
                        <div><button className="p-2 min-w-14 font-medium shadow-xs font-poppins hover:bg-zinc hover:text-white text-zinc cursor-pointer border-[0.5px] border-gray-300 transition-colors ease-linear duration-200">Earring</button></div>
                        <div><button className="p-2 min-w-14 font-medium shadow-xs font-poppins hover:bg-zinc hover:text-white text-zinc cursor-pointer border-[0.5px] border-gray-300 transition-colors ease-linear duration-200">Ring</button></div>
                        <div><button className="p-2 min-w-14 font-medium shadow-xs font-poppins hover:bg-zinc hover:text-white text-zinc cursor-pointer border-[0.5px] border-gray-300 transition-colors ease-linear duration-200">Necklaces</button></div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-y-7">
                    <div className="w-full">

                        <Swiper
                            modules={[A11y, Autoplay]}
                            slidesPerView={4}
                            spaceBetween={10}
                            a11y={{ enabled: true }}
                            onProgress={(swiper, p) => setProgress(p)}
                        >
                            {products.map((product, idx) => (<SwiperSlide key={`BestProductsSlide${product.id}`}>
                                <JewelleryCard isLimited={product?.discount?.end_date ?? null} productData={product} />
                            </SwiperSlide>))}

                        </Swiper>
                    </div>
                    <div className="w-full h-1 bg-gray-200 overflow-hidden mt-1" aria-hidden="true">
                        <div className="h-full bg-gradient-to-r from-zinc to-zinc-dark transition-all ease-linear duration-150" style={{ width: `${Math.min(Math.max(progress, 0), 1) * 100}%` }} />
                    </div>
                </div>
            </div>

        </div>
    )
}
