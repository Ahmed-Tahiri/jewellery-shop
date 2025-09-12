import { CodeDiscounts } from "../../../Components/Admin/CodeDiscounts";
import { ProductDiscounts } from "../../../Components/Admin/ProductDiscounts";
import { AdminSectionHeading } from "../../../Shared/Admin/AdminSectionHeading";


export default function Index({ codeDiscounts, productDiscounts }) {

    return (<section className="w-full min-h-170 ">
        <div className="w-full flex flex-col gap-y-8">
            <div className="w-full flex flex-col justify-center items-start">
                <AdminSectionHeading heading={'Discounts'} />
            </div>
            <CodeDiscounts discounts={codeDiscounts} />
            <ProductDiscounts discounts={productDiscounts} />
        </div>
    </section>
    );
}