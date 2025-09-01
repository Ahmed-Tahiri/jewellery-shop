import { useEffect, useState } from "react";
import { AdminSectionSubHeading } from "../../../Shared/Admin/AdminSectionHeading";
import { Link, useForm } from "@inertiajs/react";
import { FormTextInput } from "../../../Shared/FormTextInput";
import { FormTextArea } from "../../../Shared/FormTextArea";
import { SubCategory } from "../../../Components/Admin/SubCategory";

export default function Create() {


    const [canAdd, setCanAdd] = useState(false);
    const [subcategories, setSubcategories] = useState([]);
    let { post, errors, data, setData, reset } = useForm({
        name: '',
        description: '',
        sub_categories: subcategories
    });

    let inputChangeHandler = (e) => {
        const updated = { ...data, [e.target.name]: e.target.value };
        setData(e.target.name, e.target.value);

        const hasAnyValue = Object.values(updated).some(
            (val) => val && val.toString().trim() !== ""
        );
        setCanAdd(hasAnyValue);
    }
    useEffect(() => {
        setData('sub_categories', subcategories);
    }, [subcategories]);
    let formSubmitHandler = (e) => {
        e.preventDefault();
        post(route('admin.categories'), {
            onSuccess: () => route('admin.categories')
        });
    }

    return (
        <section className="w-full min-h-170">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <AdminSectionSubHeading heading={'Add Category'} />
                    <div className="flex flex-row items-center justify-end">{
                        canAdd ? (
                            <div className="flex flex-row items-center justify-end gap-x-3">
                                <div>
                                    <Link className="cursor-pointer flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={'/admin/categories'} onClick={() => reset()}>Cancel</Link>
                                </div>
                                <div>
                                    <button className="cursor-pointer flex items-center justify-center font-poppins text-base bg-mustard text-white p-2 min-w-24" form="categoryForm">Save</button>
                                </div>
                            </div>
                        ) :
                            (<Link className="flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={'/admin/categories'} onClick={() => reset()}>Cancel</Link>)
                    }
                    </div>
                </div>
                <div className="w-full flex gap-5 flex-row items-start justify-between">
                    <div className="w-6/10 p-5 bg-white rounded shadow flex flex-col gap-y-3">
                        <h6 className="font-poppins text-lg font-medium">Category Information</h6>
                        <div className="w-full mt-5">
                            <form id="categoryForm" onSubmit={formSubmitHandler} className="w-full flex items-start justify-start flex-col gap-y-3">
                                <FormTextInput label={'Name *'} name={'name'} id={'name'} placeholder={'Enter Category Name'} data={data.name} inputChangeHandler={inputChangeHandler} type={'text'} error={errors.name} />
                                <FormTextArea label={'Description *'} name={'description'} id={'description'} placeholder={'Write Description Here...'} data={data.description} inputChangeHandler={inputChangeHandler} error={errors.description} />
                            </form>
                        </div>
                    </div>
                    <SubCategory canAdd={canAdd} subcategories={subcategories} setSubcategories={setSubcategories} />
                </div>
            </div>
        </section>
    );

}