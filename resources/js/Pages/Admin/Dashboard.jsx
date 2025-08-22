import { AdminName } from "../../Shared/Admin/AdminName";
import { MdPendingActions } from "react-icons/md";
import { AnalyticsCard } from "../../Shared/Admin/AnalyticsCard";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { LuPackage, LuPackageCheck, LuPackageX } from "react-icons/lu";
import { TbTruckReturn, TbTruckDelivery } from "react-icons/tb";


let analyticIconsData = [
    {
        title: 'Pending',
        count: '3',
        icon: <MdPendingActions className="text-zinc text-2xl" />
    },
    {
        title: 'Confirmed',
        count: '10',
        icon: <FaRegCheckCircle className="text-zinc text-2xl" />
    },
    {
        title: 'Packaging',
        count: '7',
        icon: <LuPackage className="text-zinc text-2xl" />
    },
    {
        title: 'Out For Delivery',
        count: '11',
        icon: <TbTruckDelivery className="text-zinc text-2xl" />
    },
    {
        title: 'Delivered',
        count: '43',
        icon: <LuPackageCheck className="text-zinc text-2xl" />
    },
    {
        title: 'Canceled',
        count: '9',
        icon: <LuPackageX className="text-zinc text-2xl" />
    },
    {
        title: 'Returned',
        count: '1',
        icon: <TbTruckReturn className="text-zinc text-2xl" />
    },
    {
        title: 'Failed To Deliver',
        count: '5',
        icon: <FaRegTimesCircle className="text-zinc text-2xl" />
    },
];
export default function Dashboard() {
    return (
        <section className="w-full min-h-170 ">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-col justify-center items-start">
                    <h2 className="font-poppins text-4xl text-zinc-dark font-semibold">Dashboard</h2>
                    <p className="font-poppins text-light-gray ">Welcome back dear, <AdminName />!</p>
                </div>
                <div className="flex w-full bg-white shadow rounded flex-col gap-y-5 p-5">
                    <h4 className="font-poppins text-lg font-medium text-semi-black">Business Analytics</h4>
                    <div className="flex flex-row flex-wrap gap-7 items-center">
                        {analyticIconsData.map((analysis, idx) => <AnalyticsCard key={`BusinessAnalyticsCard${idx + 1}`} title={analysis.title} count={analysis.count} icon={analysis.icon} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
