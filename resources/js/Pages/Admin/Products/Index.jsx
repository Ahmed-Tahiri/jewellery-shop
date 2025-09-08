import { AllProducts } from "../../../Components/Admin/AllProducts";
import { AdminSectionHeading } from "../../../Shared/Admin/AdminSectionHeading";

export default function Index({ products }) {


    return (
        <section className="w-full min-h-170 ">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-col justify-center items-start">
                    <AdminSectionHeading heading={'Products'} />
                </div>
                <AllProducts products={products} />
            </div>
        </section>
    )

}