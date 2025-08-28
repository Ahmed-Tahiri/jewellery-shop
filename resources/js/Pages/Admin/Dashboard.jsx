import { AuthFName } from "../../Shared/AuthData";
import { BusinessAnalytics } from "../../Components/Admin/BusinessAnalytics";
import { TopProducts } from "../../Components/Admin/TopProducts";
import { RecentCustomers } from "../../Components/Admin/RecentCustomer";
import { AdminSectionHeading } from "../../Shared/Admin/AdminSectionHeading";

export default function Dashboard() {
    return (
        <section className="w-full min-h-170 ">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-col justify-center items-start">
                    <AdminSectionHeading heading={'Dashboard'} />
                    <p className="font-poppins text-light-gray text-sm sm:text-base">Welcome back dear, <AuthFName />!</p>
                </div>
                <BusinessAnalytics />
                <TopProducts />
                <RecentCustomers />
            </div>
        </section>
    );
}
