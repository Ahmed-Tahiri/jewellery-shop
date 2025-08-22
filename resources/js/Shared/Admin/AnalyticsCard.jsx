import { AnalyticsIcon } from "./AnalyticsIcon";

export let AnalyticsCard = ({ icon, count, title }) => {
    return (
        <div className="flex flex-row items-center justify-between bg-powder-gray rounded min-w-40 shadow-sm w-[23%]">
            <div className="flex w-8/10 flex-row gap-x-2 py-3 ps-3 rounded-s ">
                <AnalyticsIcon icon={icon} />
                <p className="font-poppins font-medium text-base text-semi-black">{title}</p>
            </div>
            <span className="text-poppins inline-block p-3 bg-mustard rounded-e rounded-s-xl text-lg text-semi-black">{count}</span>
        </div>
    );
}