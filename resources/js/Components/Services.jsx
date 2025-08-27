import { MdOutlineLocalShipping } from "react-icons/md";
import { PiHeadsetLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
let Service = ({ name, description, icon }) => {
    return <div className="flex flex-row items-center justify-start gap-x-5">
        <div className="relative ">
            <div className="h-8 w-8 bg-mustard rounded-full absolute top-2.5 -right-0.5 -z-10 shadow"></div>
            <div className="z-50">{icon}</div>
        </div>
        <div className="flex flex-col items-start justify-center">
            <h2 className="font-poppins font-semibold text-base text-semi-black">{name}</h2>
            <p className="font-poppins text-sm  font-normal text-light-gray">{description}</p>
        </div>
    </div>
}
export let Services = () => {
    let services = [
        {
            name: "Free Shipping",
            description: "Free shipping for order above 5000 PKR",
            icon: <MdOutlineLocalShipping className="text-zinc text-[42px]" />
        },
        {
            name: "Flexible Payment",
            description: "Multiple secure payment options",
            icon: <IoWalletOutline className="text-zinc text-[42px]" />
        },
        {
            name: "24x7 Support",
            description: "We support online all days",
            icon: <PiHeadsetLight className="text-zinc text-[42px]" />
        },
    ]
    return <div className="flex justify-center items-center py-10 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col md:flex-row items-start justify-start md:justify-between md:items-center max-w-7xl gap-10 lg:gap-0">
            {services.map((service, idx) => <Service key={`landingService${idx + 1}`} name={service.name} description={service.description} icon={service.icon} />)}
        </div>
    </div>
}