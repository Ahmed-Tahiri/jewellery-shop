import { useCallback, useEffect, useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { DropDown } from "../../../Shared/Admin/DropDown";
import { FormTextInput } from "../../../Shared/FormTextInput";
import { AdminSectionSubHeading } from "../../../Shared/Admin/AdminSectionHeading";
import { ProductForm } from "../../../Components/Admin/UpdateProductForm";
import { route } from "ziggy-js";
export default function Edit({ product }) {

    const [canAdd, setCanAdd] = useState(false);
    const [parentCategory, setParentCategory] = useState(product.category.id ?? null);
    const [relatedSubCategories, setRelatedSubCategories] = useState([]);
    const { categories, subcategories, statuses } = usePage().props;
    let { put, errors, data, setData, reset } = useForm({
        name: product.name ?? '',
        sku: product.sku ?? '',
        short_description: product.shortDescription ?? '',
        long_description: product.longDescription ?? '',
        lead_time_days: product.estimatedDeliveryTime ?? '',
        subcategory: product.subcategory.id ?? '',
        status: product.status.id ?? '',
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
        put(route('admin.products.update', product.id));
    }

    useEffect(() => setRelatedSubCategories(subcategories.filter(cat => cat.parent_id === parentCategory)), [parentCategory]);

    return (
        <section className="w-full min-h-170">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <AdminSectionSubHeading heading={"Edit Product"} />
                    <div className="flex flex-row items-center justify-end">{
                        canAdd ? (
                            <div className="flex flex-row items-center justify-end gap-x-3">
                                <div>
                                    <Link className="cursor-pointer flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={route('admin.products')} onClick={() => reset()}>Cancel</Link>
                                </div>
                                <div>
                                    <button className="cursor-pointer flex items-center justify-center font-poppins text-base bg-mustard text-white p-2 min-w-24" form="productForm">Save</button>
                                </div>
                            </div>
                        ) :
                            (<Link className="flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={route('admin.products')} onClick={() => reset()}>Cancel</Link>)
                    }
                    </div>
                </div>
                <div className="w-full flex gap-5 flex-row items-start justify-between">
                    <form encType="multipart/form-data" id="productForm" onSubmit={formSubmitHandler} className="w-full  flex-row flex items-start justify-between  gap-5">
                        <div className="w-7/10">
                            <ProductForm
                                errors={errors}
                                data={data}
                                inputChangeHandler={inputChangeHandler}
                                setCanEdit={setCanAdd}
                                setData={setData}
                            />
                        </div>
                        <div className="w-3/10 flex flex-col gap-5">
                            <div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-5">
                                <h6 className="font-poppins text-lg font-medium">Category</h6>
                                <div className="flex flex-col items-start gap-y-3 w-full">
                                    {errors.subcategory && (<span className="text-red-700 font-poppins text-sm ">{errors.subcategory}</span>)}
                                    <DropDown setOption={(cat) => setParentCategory(cat)} data={categories} inputLabel="Parent *" dropDownLabel="Choose Parent Category" setCanEdit={setCanAdd} existingOption={product.category} />
                                    <DropDown data={relatedSubCategories} setOption={(cat) => setData('subcategory', cat)} inputLabel="Sub *" dropDownLabel="Choose Parent To Load Sub" setCanEdit={setCanAdd} existingOption={product.subcategory} />
                                </div>
                            </div>
                            <div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-3">
                                <h6 className="font-poppins text-lg font-medium">Product Status</h6>
                                <div className="w-full mt-5">
                                    <div className="w-full flex items-start justify-start flex-col gap-y-3">
                                        <div className={`w-full flex flex-col gap-y-1"`}>
                                            <DropDown data={statuses} setOption={(status) => setData('status', status)} dropDownLabel="Choose Status" inputLabel="Status *" setCanEdit={setCanAdd} existingOption={product.status} />
                                            {errors.status && (<span className="text-red-700 font-poppins text-sm ">{errors.status}</span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}