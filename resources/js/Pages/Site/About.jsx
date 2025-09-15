import { AboutLanding } from "../../Components/AboutLanding";
import MainLayout from "../../Layouts/MainLayout";
import { SectionDescription } from "../../Shared/SectionDesctiptionText";
import { SectionMainHeading } from "../../Shared/SectionMainHeading";
import { SectionSubHeading } from "../../Shared/SectionSubHeading";
import { LiaGem } from "react-icons/lia";
import { AiOutlineGold } from "react-icons/ai";
import { OurTeam } from "../../Components/OurTeam";

export default function About() {
    return <>
        <AboutLanding />
        <section className="flex flex-row  bg-powder-gray justify-start items-center  overflow-hidden gap-x-8">
            <div className="w-5/12 aspect-square shadow-xs relative ">
                <div className="w-full"><img className="w-full aspect-square object-cover" src="https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyfHxqZXdlbHJ5JTIwY29sbGVjdGlvbnxlbnwwfHx8fDE3MjU4ODQ2ODV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=576&h=720&q=100" alt="About Page Rings Image" /></div>
                <div className="w-full aspect-square p-2 absolute top-0 left-0">
                    <div className="border-2 aspect-square border-white z-10" />
                </div>
            </div>
            <div className="w-7/12 flex flex-col items-start gap-y-10 p-5 pe-5 md:pe-10 lg:pe-15 xl:pe-20">
                <div className="flex flex-col items-start gap-y-5 w-full">
                    <SectionSubHeading heading={'Our Product Quality'} />
                    <SectionMainHeading heading={'The Most Exquisite and Luxurious Designer Jewellery'} />
                    <SectionDescription message={'Crafted with passion and precision, our premium designer jewellery delivers exceptional quality, refined elegance, and an everlasting touch of pure luxury.'} />
                </div>
                <div className="w-full flex flex-row gap-x-10">
                    <div className="flex-1 flex gap-y-4 flex-col items-start">
                        <div className="relative">
                            <AiOutlineGold className="text-6xl text-zinc relative z-20" />
                            <span className="inline-block h-10 w-10 bg-mustard shadow-xs rounded-full absolute bottom-1 right-0 z-10"></span>
                        </div>
                        <div className="flex flex-col gap-y-3 items-start">
                            <h4 className="font-poppins text-xl font-medium text-semi-black">Gold Purity</h4>
                            <p className="font-poppins text-sm text-semi-black">Our jewellery is crafted with the finest gold, ensuring purity, brilliance, and lasting value in every piece.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex gap-y-4 flex-col items-start">
                        <div className="relative">
                            <LiaGem className=" text-6xl text-zinc relative z-20" />
                            <span className="inline-block h-10 w-10 bg-mustard shadow-xs rounded-full absolute bottom-1 right-0 z-10"></span>
                        </div>
                        <div className="flex flex-col gap-y-3 items-start">
                            <h4 className="font-poppins text-xl font-medium text-semi-black">Certified Diamond</h4>
                            <p className="font-poppins text-sm text-semi-black">Each diamond is ethically sourced and certified for authenticity, offering unmatched brilliance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <OurTeam />
    </>

}

About.layout = page => (
    <MainLayout heading="About Us" breadcrumb={'Home / About Us'}>
        {page}
    </MainLayout>
);
