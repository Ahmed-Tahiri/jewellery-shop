import { AdminName } from "../../Shared/Admin/AdminName";
import { BusinessAnalytics } from "../../Components/Admin/BusinessAnalytics";
import { TopProducts } from "../../Components/Admin/TopProducts";
import { RecentCustomers } from "../../Components/Admin/RecentCustomer";

export default function Dashboard() {
    return (
        <section className="w-full min-h-170 ">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-col justify-center items-start">
                    <h2 className="font-poppins text-4xl text-zinc-dark font-semibold">Dashboard</h2>
                    <p className="font-poppins text-light-gray ">Welcome back dear, <AdminName />!</p>
                </div>
                <BusinessAnalytics />
                <TopProducts />
                <RecentCustomers />
            </div>
        </section>
    );
}
