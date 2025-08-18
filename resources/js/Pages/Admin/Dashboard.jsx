import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { RecentOrders } from "../../Components/RecentOrders";
import { QuickActions } from "../../Components/QuickActions";
import { MobileDrawer } from "../../Components/MobileDrawer";
import { MobileHeader } from "../../Components/MobileHeader";
import { Stats } from "../../Components/Stats";
import { DesktopHeader } from "../../Components/DesktopHeader";
import { DesktopSidebar } from "../../Components/DesktopSidebar";

export default function Dashboard() {
    const { auth } = usePage().props || {};
    const adminName = auth?.firstName || "Admin";

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
            <DesktopSidebar adminName={adminName} />
            <main className="flex-1">
                <MobileHeader adminName={adminName} />
                <div className="p-4 md:p-6 ">
                    <DesktopHeader adminName={adminName} />
                    <Stats />
                    <div className="flex flex-col lg:flex-row gap-6 md:pb-10">
                        <RecentOrders />
                        <QuickActions />
                    </div>
                </div>
            </main>
        </div>
    );
}
