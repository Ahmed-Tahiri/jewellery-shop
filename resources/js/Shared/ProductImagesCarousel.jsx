import { useState, useRef } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export let ProductImagesCarousel = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const mainSwiperRef = useRef(null);

    const handlePrev = () => { if (mainSwiperRef.current) mainSwiperRef.current.slidePrev(); };

    const handleNext = () => { if (mainSwiperRef.current) mainSwiperRef.current.slideNext(); };

    const swipeHandler = (swiper) => {
        mainSwiperRef.current = swiper;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    }

    const slideChangeHandler = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    }

    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="relative  flex">
                <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center z-10 px-4">
                    <button onClick={handlePrev} className={`cursor-pointer h-12 w-12 flex justify-center items-center shadow-xs ${isBeginning ? "bg-zinc text-white" : "bg-mustard text-zinc"}`}>
                        <FaChevronLeft className="text-2xl" />
                    </button>
                    <button onClick={handleNext} className={`cursor-pointer h-12 w-12 flex justify-center items-center shadow-xs  ${isEnd ? "bg-zinc text-white" : "bg-mustard text-zinc"}`} >
                        <FaChevronRight className="text-2xl" />
                    </button>
                </div>
                <div className=" flex-1 overflow-hidden">
                    <Swiper
                        modules={[Navigation, Thumbs]}
                        onSwiper={swipeHandler}
                        onSlideChange={slideChangeHandler}
                        thumbs={{ swiper: thumbsSwiper }}
                        slidesPerView={1}
                        className="w-full"
                    >
                        {images.map((img, idx) => (
                            <SwiperSlide key={`MainSlide-${idx}`} className="w-20">
                                <img src={`/storage/${img.url}`} alt={`Product Main Image ${idx + 1}`} className="w-full aspect-square object-contain bg-powder-gray rounded-xs shadow" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="flex items-center justify-center flex-1">
                <div className="w-full">
                    <Swiper
                        modules={[Thumbs]}
                        onSwiper={setThumbsSwiper}
                        slidesPerView={4}
                        spaceBetween={10}
                        watchSlidesProgress
                        className="w-full"
                    >
                        {images.map((img, idx) => (
                            <SwiperSlide key={`Thumb-${idx}`}>
                                <img src={`/storage/${img.url}`} alt={`Thumbnail ${idx + 1}`} className="cursor-pointer border border-gray-200 hover:border-mustard rounded-xs shadow-xs" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>);
}
