import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export let AuthPageSlider = ({ slidesData }) => {

    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const onSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex ?? swiper.activeIndex ?? 0);
    };

    const onSwiperInit = (swiper) => {
        swiperRef.current = swiper;
        setActiveIndex(swiper.realIndex ?? swiper.activeIndex ?? 0);
    };

    const goToPage = (pageIndex) => {
        if (!swiperRef.current) { return };

        if (typeof swiperRef.current.slideToLoop === "function") {
            swiperRef.current.slideToLoop(pageIndex);
        } else {
            swiperRef.current.slideTo(pageIndex);
        }
    };

    return (
        <div className="relative w-[45%] min-h-full hidden lg:block">
            <div className="w-full h-full shadow">
                <Swiper
                    modules={[Navigation, Autoplay, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    onSwiper={onSwiperInit}
                    onSlideChange={onSlideChange}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={false}
                    a11y={{ enabled: true }}

                    className="w-full h-full"
                >
                    {slidesData.map((slide, idx) => (
                        <SwiperSlide key={idx}>

                            <div className="relative h-full  w-full overflow-hidden">
                                <img src={slide.img} alt={slide.name} className="h-full w-full object-cover" />

                                <div className="absolute bottom-10 left-10 glass-box p-3 text-white w-[85%] flex flex-col gap-4">
                                    <p className="font-poppins text-base font-light text-start italic"> “{slide.quote}” </p>
                                    <div>
                                        <p className="font-medium font-poppins text-lg"> {slide.name} </p>
                                        <p className="font-light font-poppins text-sm"> {slide.role}   </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <nav className="left-10 mt-4 w-[85%] flex items-center bg-transparent absolute bottom-5 z-50" role="navigation" aria-label="Pagination" >
                    <div className="w-full flex gap-x-2">
                        {Array.from({ length: slidesData.length }).map((_, pageIdx) => {
                            const isActive = activeIndex === pageIdx;
                            return (<button key={pageIdx} onClick={() => goToPage(pageIdx)} type="button" aria-label={`Go to slide ${pageIdx + 1}`} aria-current={isActive ? "page" : undefined} className={`flex-1 cursor-pointer  text-sm py-0.75 transition-colors duration-150 focus:outline-none ${isActive ? "bg-mustard" : "bg-white/50"}`} />);
                        })}
                    </div>
                </nav>
            </div>
        </div>
    );
}
