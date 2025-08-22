
import { usePage } from "@inertiajs/react";
import { Sidebar } from "../../Shared/Admin/Sidebar";

export default function Dashboard() {
    const { auth } = usePage().props || {};
    const adminName = auth?.firstName || "Admin";


    return (
        <section className="w-full h-screen min-h-170">
            <div className="w-full flex flex-row h-full">
                <Sidebar />
                <div className="bg-powder-gray min-h-full flex-1"></div>
            </div>
        </section>
    );
}
