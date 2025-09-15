import { Navbar } from "../Components/MyAccount/Navbar";
import MainLayout from './MainLayout';

export default function MyAccountLayout({ children }) {

    return (
        <MainLayout heading="My Account" breadcrumb="Home / My Account">
            <div className="w-full flex flex-row gap-x-4 md:gap-x-6 lg:gap-x-8 max-w-7xl mx-auto">
                <Navbar />
                {children}
            </div>
        </MainLayout>
    );
}