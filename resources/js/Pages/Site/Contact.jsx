import { IoSparklesSharp } from "react-icons/io5";
import MainLayout from "../../Layouts/MainLayout";
import ContactImg from './../../../images/Contactimg.jpg';
import { ContactForm } from "../../Components/ContactForm";


export default function Contact() {
    return <>
        <div className="flex relative bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20 overflow-hidden">
            <div className="w-full flex flex-row items-start justify-between  max-w-7xl gap-x-20 ">
                <div className="w-6/10 flex flex-col items-center justify-center">
                    <div className="w-full flex flex-col gap-y-3">
                        <p className="font-poppins text-3xl text-semi-black font-medium">Get in Touch</p>
                        <p className="font-poppins text-base text-semi-black">Your email address will not be published. Required fields are marked* </p>
                        <div className="w-full"><ContactForm /></div>
                    </div>
                </div>
                <div className="w-4/10 relative h-150">
                    <span className="absolute -bottom-13 right-14 z-20"><IoSparklesSharp className="text-mustard text-9xl rotate-270" /></span>
                    <div className="w-full h-full"><img src={ContactImg} alt="Contact Section Image" className="w-full h-full object-cover shadow-xs" /></div>
                    <div className="w-full h-full absolute top-0 left-0 bg-transparent p-3 z-10">
                        <div className="w-full h-full border-2 border-white bg-transparent"></div>
                    </div>
                </div>


            </div>
        </div>
    </>

}

Contact.layout = page => (
    <MainLayout heading="Contact Us" breadcrumb={'Home / Contact Us'}>
        {page}
    </MainLayout>
);
