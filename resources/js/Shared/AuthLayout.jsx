import JewelleryLogo from './../../images/JewelleryLogo.png';
import { AuthPageSlider } from './AuthPageSlider';
export let AuthLayout = ({ heading, description, children }) => {
    const slidesData = [
        {
            img:
                `https://images.pexels.com/photos/21263448/pexels-photo-21263448.jpeg?_gl=1*1aj9cgb*_ga*ODAwMTM2Njc2LjE3NTU2OTA1NzE.*_ga_8JE65Q40S6*czE3NTU2OTA1NzAkbzEkZzEkdDE3NTU2OTE4OTgkajU5JGwwJGgw`,
            quote:
                "This jewelry looks so elegant and eye-catching. The quality feels amazing for the price. I’m really impressed and would definitely recommend it!",
            name: "Emily Jackson",
            role: "Happy Customer",
        },
        {
            img:
                `https://images.pexels.com/photos/8856198/pexels-photo-8856198.jpeg?_gl=1*5lp17v*_ga*ODAwMTM2Njc2LjE3NTU2OTA1NzE.*_ga_8JE65Q40S6*czE3NTU2OTA1NzAkbzEkZzEkdDE3NTU2OTA3NjIkajU5JGwwJGgw`,
            quote:
                "I was amazed at how elegant this piece looks in person. The shine is subtle yet very classy. It’s definitely my new favorite accessory!",
            name: "Olivia Rose",
            role: "Happy Customer",
        },
        {
            img:
                `https://images.pexels.com/photos/26840477/pexels-photo-26840477.jpeg?_gl=1*1oi627h*_ga*ODAwMTM2Njc2LjE3NTU2OTA1NzE.*_ga_8JE65Q40S6*czE3NTU2OTA1NzAkbzEkZzEkdDE3NTU2OTEwMTQkajU5JGwwJGgw`,
            quote:
                "The design is so delicate and beautiful. It shines perfectly under any light, making it look luxurious. I feel really confident wearing this piece!",
            name: "Yuna Jiwoo",
            role: "Happy Customer",
        },
        {
            img:
                `https://images.pexels.com/photos/15983835/pexels-photo-15983835.jpeg?_gl=1*1b6c5yk*_ga*ODAwMTM2Njc2LjE3NTU2OTA1NzE.*_ga_8JE65Q40S6*czE3NTU2OTA1NzAkbzEkZzEkdDE3NTU2OTA4ODQkajU5JGwwJGgw`,
            quote:
                "The craftsmanship is really impressive for the price. It feels lightweight yet durable, perfect for daily wear. I’ve already had a few friends ask where I bought it!",
            name: "Hannah Grace",
            role: "Happy Customer",
        },

    ];
    return (<section className="w-full min-h-[730px] h-screen bg-white flex justify-center items-center px-2 lg:px-0">
        <div className="w-full h-full flex flex-row justify-center lg:justify-between">
            <AuthPageSlider slidesData={slidesData} />
            <div className="py-7 px-5 sm:px-10 xl:15 2xl:px-30 w-full lg:w-[55%] max-w-[800px] h-full flex flex-col gap-y-7 items-center justify-start lg:justify-center">
                <div className="w-full h-8 lg:h-9 flex justify-start items-center"><img src={JewelleryLogo} className="h-full" alt="Jewellery Logo" /></div>
                <div className="w-full flex flex-col gap-y-10">
                    <div className="w-full flex flex-col gap-y-4">
                        <h2 className="font-poppins text-semi-black sm:text-[28px] text-2xl lg:text-3xl font-semibold whitespace-nowrap">{heading}</h2>
                        <p className="font-poppins text-light-gray md:text-sm text-[13px] lg:text-base font-normal">{description}</p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    </section>);
};