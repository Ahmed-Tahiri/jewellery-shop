import React from "react";
import { Sidebar } from "../Shared/Admin/Sidebar";
import { Header } from "../Shared/Admin/Header";

export default function AdminLayout({ children }) {
    return (
        <section className="w-full h-screen min-h-170">
            <div className="w-full flex flex-row h-full">
                <aside className="z-50 w-64 fixed flex-shrink-0 left-0 top-0 bottom-0">
                    <Sidebar />
                </aside>

                <div className="flex-1 ms-64 flex flex-col">
                    <div className="fixed top-0 left-64 right-0 z-40">
                        <Header />
                    </div>
                    <main className="flex-1 overflow-auto p-6 mt-[72px] bg-powder-gray">
                        {children}
                    </main>
                </div>
            </div>
        </section>
    );
}


