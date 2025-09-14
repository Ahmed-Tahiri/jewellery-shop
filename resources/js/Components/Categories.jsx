import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import { SectionMainHeading } from "../Shared/SectionMainHeading"
import { SectionSubHeading } from "../Shared/SectionSubHeading"
import { ShopCategoryCard } from "./ShopCategoryCard"

export let Categories = () => {


    const categories = [
        {
            name: 'Earrings',
            link: '#',
            url: 'https://tyaani.com/cdn/shop/files/OE00018MODEL.jpg?v=1745575371&width=1100'
        },
        {
            name: 'Necklace',
            link: '#',
            url: 'https://www.noho.com.pk/wp-content/uploads/2022/06/KARLIE-TENNIS-NECKLACE-GOLD-1.jpeg'
        },
        {
            name: 'Rings',
            link: '#',
            url: 'https://shop.kenanddanadesign.com/cdn/shop/files/WESBITEEMI_cropped.webp?v=1720162233'
        },
        {
            name: 'Bracelets',
            link: '#',
            url: 'https://www.noho.com.pk/wp-content/uploads/2022/04/JEMMA-TENNIS-BRACELET-GOLD-1.jpeg'
        },
        {
            name: 'Anklets',
            link: '#',
            url: 'https://www.collectionary.store/wp-content/uploads/2024/08/4-3-300x369.png'
        },
        {
            name: 'Customized',
            link: '#',
            url: 'https://i.etsystatic.com/17431768/r/il/b3e1cc/3362412108/il_570xN.3362412108_m4gc.jpg'
        },

    ];

    return (<div className="flex bg-powder-gray justify-center items-center py-30 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-14  max-w-7xl gap-10 ">
            <div className="w-full flex flex-col items-center justify-center gap-y-4">
                <SectionSubHeading heading={'Our Categories'} />
                <SectionMainHeading heading={'Shop By Category'} />
            </div>
            <div className="w-full">
                <Swiper
                    modules={[A11y, Autoplay]}
                    slidesPerView={5}
                    spaceBetween={5}
                    loop={true}
                    freeMode={true}
                    speed={3000}
                    autoplay={{ delay: 0, disableOnInteraction: false, }}
                    a11y={{ enabled: true }}
                >
                    {categories.map((cat, idx) => (<SwiperSlide key={`HomeCategoryCardSlide${idx + 1}`}><ShopCategoryCard image={cat.url} name={cat.name} link={cat.link} /></SwiperSlide>))}
                </Swiper>

            </div>
        </div>
    </div>)
}