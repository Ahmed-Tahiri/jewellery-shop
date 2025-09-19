import { FaCheck } from "react-icons/fa6"
import { HiOutlineClipboardCheck, HiOutlineClipboardList } from "react-icons/hi";
import { GoPackage } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { LuPackageCheck } from "react-icons/lu";
import { useState } from "react";

export let Timeline = () => {


    const [isPlaced, setIsPlaced] = useState(true);
    const [isAccepted, setIsAccepted] = useState(true);
    const [isInProgress, setIsInProgress] = useState(false);
    const [isOnTheWay, setIsOnTheWay] = useState(false);
    const [isDelivered, setIsDelivered] = useState(false);


    return (<div className="w-full flex items-center flex-col gap-y-5 justify-center p-5 border-[1px] border-gray-300">
        <div className="flex flex-row w-full items-center justify-between px-3">

            <div className="flex flex-col gap-y-1 items-center max-w-36">
                {isPlaced && <div className="relative"><span className="absolute top-5 -right-3 h-3.5 w-3.5 bg-mustard rounded-full inline-block z-10"></span> </div>}
                <span className="z-30"><HiOutlineClipboardList className={`${isPlaced ? 'text-semi-black' : 'text-light-gray'}  text-3xl`} /></span>
                <p className={`font-poppins ${isPlaced ? 'text-semi-black' : 'text-light-gray'}  font-medium text-sm`}>Order Placed</p>
            </div>

            <div className="flex flex-col gap-y-1 items-center max-w-36">
                {isAccepted && <div className="relative"><span className="absolute top-5 -right-3 h-3.5 w-3.5 bg-mustard rounded-full inline-block z-10"></span> </div>}
                <span className="z-30"><HiOutlineClipboardCheck className={`${isAccepted ? 'text-semi-black' : 'text-light-gray'}   text-3xl`} /></span>
                <p className={`font-poppins ${isAccepted ? 'text-semi-black' : 'text-light-gray'} font-medium text-sm`}>Accepted</p>
            </div>

            <div className="flex flex-col gap-y-1 items-center max-w-36">
                {isInProgress && <div className="relative"> <span className="absolute top-5 -right-3 h-3.5 w-3.5 bg-mustard rounded-full inline-block z-10"></span> </div>}
                <span className="z-30"><GoPackage className={`${isInProgress ? 'text-semi-black' : 'text-light-gray'}   text-3xl`} /></span>
                <p className={`font-poppins ${isInProgress ? 'text-semi-black' : 'text-light-gray'} font-medium text-sm`}>In Progress</p>
            </div>

            <div className="flex flex-col gap-y-1 items-center max-w-36">
                {isOnTheWay && <div className="relative"> <span className="absolute top-5 -right-3 h-3.5 w-3.5 bg-mustard rounded-full inline-block z-10"></span> </div>}
                <span className="z-30"><TbTruckDelivery className={`${isOnTheWay ? 'text-semi-black' : 'text-light-gray'}  text-3xl`} /></span>
                <p className={`font-poppins ${isOnTheWay ? 'text-semi-black' : 'text-light-gray'}  font-medium text-sm`}>On the Way</p>
            </div>

            <div className="flex flex-col gap-y-1 items-center max-w-36">
                {isDelivered && <div className="relative"><span className="absolute top-5 -right-3 h-3.5 w-3.5 bg-mustard rounded-full inline-block z-10"></span></div>}
                <span className="z-30"><LuPackageCheck className={`${isDelivered ? 'text-semi-black' : 'text-light-gray'}  text-3xl`} /></span>
                <p className={`font-poppins ${isDelivered ? 'text-semi-black' : 'text-light-gray'} font-medium text-sm`}>Delivered</p>
            </div>

        </div>
        <div className="w-full flex flex-row items-center justify-between px-10">
            <div className={`h-6 w-6 ${isPlaced ? 'bg-zinc' : 'bg-gray-300'} rounded-sm flex items-center justify-center`}><FaCheck className="text-white text-lg" /></div>
            <div className={`flex-1 h-1.25 ${isAccepted ? 'bg-zinc' : 'bg-gray-300'}`}></div>
            <div className={`h-6 w-6 ${isAccepted ? 'bg-zinc' : 'bg-gray-300'} rounded-sm flex items-center justify-center`}><FaCheck className="text-white text-lg" /></div>
            <div className={`flex-1 h-1.25 ${isInProgress ? 'bg-zinc' : 'bg-gray-300'}`}></div>
            <div className={`h-6 w-6 ${isInProgress ? 'bg-zinc' : 'bg-gray-300'} rounded-sm flex items-center justify-center`}><FaCheck className="text-white text-lg" /></div>
            <div className={`flex-1 h-1.25 ${isOnTheWay ? 'bg-zinc' : 'bg-gray-300'}`}></div>
            <div className={`h-6 w-6 ${isOnTheWay ? 'bg-zinc' : 'bg-gray-300'} rounded-sm flex items-center justify-center`}><FaCheck className="text-white text-lg" /></div>
            <div className={`flex-1 h-1.25 ${isDelivered ? 'bg-zinc' : 'bg-gray-300'}`}></div>
            <div className={`h-6 w-6 ${isDelivered ? 'bg-zinc' : 'bg-gray-300'} rounded-sm flex items-center justify-center`}><FaCheck className="text-white text-lg" /></div>

        </div>
        <div className="flex flex-row w-full items-center justify-between px-3">

            <div className="flex flex-col gap-y-0 items-center max-w-36">
                <span className={`font-poppins ${isPlaced ? 'text-semi-black' : 'text-light-gray'} text-sm font-medium`}>20 June 2024</span>
                <p className={`font-poppins ${isPlaced ? 'text-semi-black' : 'text-light-gray'} text-sm font-medium`}>11:00 AM</p>
            </div>
            <div className="flex flex-col gap-y-0 items-center max-w-36">
                <span className={`font-poppins ${isAccepted ? 'text-semi-black' : 'text-light-gray'} text-sm font-medium`}>20 June 2024</span>
                <p className={`font-poppins ${isAccepted ? 'text-semi-black' : 'text-light-gray'} text-sm font-medium`}>11:00 AM</p>
            </div>
            <div className="flex flex-col gap-y-0 items-center max-w-36">
                <span className={`font-poppins ${isInProgress ? 'text-semi-black' : 'text-light-gray'} text-sm font-medium`}>Expected</span>
                <p className={`font-poppins ${isInProgress ? 'text-semi-black' : 'text-light-gray'} text-sm font-medium`}>21 June 2025</p>
            </div>
            <div className="flex flex-col gap-y-0 items-center max-w-36">
                <span className={`font-poppins ${isOnTheWay ? 'text-semi-black' : 'text-light-gray'} text-sm font-medium`}>Expected</span>
                <p className={`font-poppins ${isOnTheWay ? 'text-semi-black' : 'text-light-gray'} text-sm font-medium`}>22,23 June 2025</p>
            </div>
            <div className="flex flex-col gap-y-0 items-center max-w-36">
                <span className={`font-poppins ${isDelivered ? 'text-semi-black' : 'text-light-gray'} text-sm font-medium`}>Expected</span>
                <p className={`font-poppins ${isDelivered ? 'text-semi-black' : 'text-light-gray'} text-sm font-medium`}>24 June 2025</p>
            </div>
        </div>
    </div>)
}

