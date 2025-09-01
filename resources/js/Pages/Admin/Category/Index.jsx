import { CategorySection } from "../../../Components/Admin/Category";
import { AdminSectionHeading } from "../../../Shared/Admin/AdminSectionHeading";


export default function Index() {

    return (
        <section className="w-full min-h-170 ">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-col justify-center items-start">
                    <AdminSectionHeading heading={'Categories'} />
                </div>
                <CategorySection />
            </div>
        </section>
    );

}