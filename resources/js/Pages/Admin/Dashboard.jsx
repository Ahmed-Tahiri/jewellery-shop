
import { usePage } from "@inertiajs/react";
import { Sidebar } from "../../Shared/Admin/Sidebar";

export default function Dashboard() {
    const { auth } = usePage().props || {};
    const adminName = auth?.firstName || "Admin";


    return (
        <section className="w-full min-h-screen h-screen">
            <div className="w-full flex flex-row h-full">
                <Sidebar />
                <div className="w-[82%] bg-powder-gray min-h-full"></div>
            </div>
        </section>
    );
}
