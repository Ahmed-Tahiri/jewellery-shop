import { IoSparklesSharp } from "react-icons/io5";
import MainLayout from "../../Layouts/MainLayout";
import ContactImg from './../../../images/Contactimg.jpg';
import { ContactForm } from "../../Components/ContactForm";
import { PiMapPinLight } from "react-icons/pi";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { ContactMap } from "../../Components/ContactMap";

let ContactDataCard = ({ label, data, icon }) => {
    return <div className="flex-1 w-full flex items-center justify-center flex-col gap-y-5 bg-powder-gray p-10 shadow-sm min-h-60">
        <div className="relative inline-flex items-center justify-center">
            {icon}
            <span className="w-4 h-4 absolute top-5 right-4 bg-mustard rounded-full shadow-xs" />
        </div>
        <div className="flex flex-col items-center gap-y-2">
            <p className="font-poppins text-xl font-medium text-semi-black text-center">{label}</p>
            <p className="font-poppins text-sm font-medium text-dark-gray text-center">{data}</p>
        </div>
    </div>
}
export default function Contact() {

    let contactDetails = [
        {
            label: 'Address',
            data: 'Warehouse #5, Industrial Zone, I-9/3, Islamabad, Pakistan',
            icon: <PiMapPinLight className="text-6xl text-zinc relative z-10" />
        },
        {
            label: 'Phone',
            data: '+0123-456-789',
            icon: <TbPhoneCall className="text-6xl text-zinc relative z-10" />
        },
        {
            label: 'Email',
            data: 'example@gmail.com',
            icon: <HiOutlineEnvelope className="text-6xl text-zinc relative z-10" />
        },
    ];
    return <>
        <div className="flex relative bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20 overflow-hidden">
            <div className="w-full flex flex-row items-start justify-between  max-w-7xl gap-x-20 ">
                <div className="w-6/10 flex flex-col items-center justify-center">
                    <div className="w-full flex flex-col gap-y-3">
                        <p className="font-poppins text-3xl text-semi-black font-medium">Get in Touch</p>
                        <p className="font-poppins text-base text-semi-black">Your email address will not be published. Required fields are marked* </p>
                        <div className="w-full mt-5"><ContactForm /></div>
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
        <div className="flex bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20 overflow-hidden">
            <div className="w-full flex flex-row items-start justify-center  max-w-7xl gap-x-10">
                {contactDetails.map((contact, idx) => <ContactDataCard key={`contactDataCard${idx + 1}`} label={contact.label} icon={contact.icon} data={contact.data} />)}
            </div>
        </div>
        <div className="flex bg-white justify-center max-w-7xl mx-auto items-center py-10 mb-20  overflow-hidden shadow-sm">
            <ContactMap />
        </div>
    </>
}

Contact.layout = page => (
    <MainLayout heading="Contact Us" breadcrumb={'Home / Contact Us'}>
        {page}
    </MainLayout>
);
