import { Sidebar } from "../Shared/Admin/Sidebar";
import { Header } from "../Shared/Admin/Header";
import { NavProvider, useNav } from "../Context/AdminNavbarContext";

export default function AdminLayout({ children }) {
    return (
        <NavProvider>
            <InnerLayout>{children}</InnerLayout>
        </NavProvider>
    );
}

function InnerLayout({ children }) {
    const { navIsOpen } = useNav();

    return (
        <section className="w-full h-screen min-h-170">
            <div className="w-full flex flex-row h-full">
                <aside
                    className={`${navIsOpen ? "translate-x-0" : "-translate-x-full"} 
                        z-50 w-4/5 sm:w-7/10 md:w-4/10 lg:w-70 fixed flex-shrink-0 
                        left-0 top-0 bottom-0 transition-transform ease-linear 
                        duration-200 lg:translate-x-0 lg:pb-0`}
                >
                    <Sidebar />
                </aside>

                <div className="flex-1 lg:ms-70 flex flex-col w-full lg:w-auto">
                    <div className="fixed top-0 left-0 lg:left-70 right-0 z-40">
                        <Header />
                    </div>
                    <main className="flex-1 overflow-auto p-6 mt-12 md:mt-15 lg:mt-18 bg-powder-gray">
                        {children}
                    </main>
                </div>
            </div>
        </section>
    );
}
