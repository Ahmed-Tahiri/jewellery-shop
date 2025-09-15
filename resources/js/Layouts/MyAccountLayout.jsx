import { Navbar } from "../Components/MyAccount/Navbar";
import MainLayout from './MainLayout';

export default function MyAccountLayout({ children }) {

    return (
        <MainLayout heading="My Account" breadcrumb="Home / My Account">
            <section className="px-5 md:px-10 lg:px-15 xl:px-20 py-15">
                <div className="w-full max-w-7xl mx-auto flex flex-row gap-x-4 md:gap-x-6 lg:gap-x-8">
                    <Navbar />
                    {children}
                </div>
            </section>
        </MainLayout>
    );
}
