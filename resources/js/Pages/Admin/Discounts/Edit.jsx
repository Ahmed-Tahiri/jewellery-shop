import { Link, useForm } from "@inertiajs/react";
import { AdminSectionSubHeading } from "../../../Shared/Admin/AdminSectionHeading";
import { DiscountForm } from "../../../Components/Admin/DiscountForm";
import { useCallback, useState } from "react";

export default function Edit({ discount }) {

    const [canAdd, setCanAdd] = useState(false);
    let { put, errors, data, setData, reset } = useForm({
        name: discount?.name ?? '',
        code: discount?.code ?? '',
        discount: discount?.discount_percent ?? '',
        limitation: discount?.limitation ?? '',
        start_date: discount?.start_date ?? '',
        end_date: discount?.end_date ?? '',
    });

    let inputChangeHandler = useCallback((e) => {
        const updated = { ...data, [e.target.name]: e.target.value };
        setData(e.target.name, e.target.value);

        const hasAnyValue = Object.values(updated).some(
            (val) => val && val.toString().trim() !== ""
        );
        setCanAdd(hasAnyValue);
    }, [setData]);
    let formSubmitHandler = (e) => {
        e.preventDefault();

        put(route('admin.discounts.update', discount.id), {
            onSuccess: () => reset(),
        });
    }
    return (
        <section className="w-full min-h-170">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <AdminSectionSubHeading heading={"Edit Discount"} />
                    <div className="flex flex-row items-center justify-end">{
                        canAdd ? (
                            <div className="flex flex-row items-center justify-end gap-x-3">
                                <div>
                                    <Link className="cursor-pointer flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={route('admin.discounts')} onClick={() => reset()}>Cancel</Link>
                                </div>
                                <div>
                                    <button className="cursor-pointer flex items-center justify-center font-poppins text-base bg-mustard text-white p-2 min-w-24" form="productForm">Save</button>
                                </div>
                            </div>
                        ) :
                            (<Link className="flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={route('admin.discounts')} onClick={() => reset()}>Cancel</Link>)
                    }
                    </div>
                </div>
                <div className="w-full flex gap-5 flex-row items-start justify-between">
                    <form encType="multipart/form-data" id="productForm" onSubmit={formSubmitHandler} className="w-full  flex-row flex items-start justify-between  gap-5">
                        <div className="w-full">
                            <DiscountForm
                                errors={errors}
                                data={data}
                                inputChangeHandler={inputChangeHandler}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}