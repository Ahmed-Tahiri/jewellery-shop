
import { usePage } from "@inertiajs/react";
import { Sidebar } from "../../Shared/Admin/Sidebar";
import { Header } from "../../Shared/Admin/Header";

export default function Dashboard() {
    return (
        <section className="w-full h-screen min-h-170">
            <div className="w-full flex flex-row h-full">
                <Sidebar />
                <div className="bg-powder-gray min-h-full flex-1">
                    <Header />
                </div>
            </div>
        </section>
    );
}
