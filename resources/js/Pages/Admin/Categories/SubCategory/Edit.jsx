import { useCallback, useEffect, useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { AdminSectionSubHeading } from "../../../../Shared/Admin/AdminSectionHeading";
import { FormTextInput } from "../../../../Shared/FormTextInput";
import { FormTextArea } from '../../../../Shared/FormTextArea';
import { ParenCategoryDropDown } from "../../../../Components/Admin/ParentCategoryDropDown";
import { route } from "ziggy-js";

export default function Edit() {

    let { subcategory, categories } = usePage().props;
    const [parent, setParent] = useState(subcategory?.parent_id) ?? null;
    const [canEdit, setCanEdit] = useState(false);
    let existingParent = categories.find(cat => cat.id === subcategory.parent_id);
    let { put, errors, data, setData, reset } = useForm({
        name: subcategory?.name ?? '',
        description: subcategory?.description ?? '',
        parent_id: parent,
    });

    let inputChangeHandler = useCallback((e) => {
        const updated = { ...data, [e.target.name]: e.target.value };
        setData(e.target.name, e.target.value);

        const hasAnyValue = Object.values(updated).some(
            (val) => val && val.toString().trim() !== ""
        );
        setCanEdit(hasAnyValue);
    }, [setData, data])

    useEffect(() => {
        setData('parent_id', parent);
        setCanEdit(true)
    }, [parent])

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const onError = (errs) => console.log(errs);
        put(route('admin.subcategories.update', subcategory.id),
            { onError, preserveState: true }
        );
    };

    return (
        <section className="w-full min-h-170">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <AdminSectionSubHeading heading={'Edit Sub Category'} />
                    <div className="flex flex-row items-center justify-end">{
                        canEdit ? (
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
                    <div className="w-7/10 p-5 bg-white rounded shadow flex flex-col gap-y-3">
                        <h6 className="font-poppins text-lg font-medium">Category Information</h6>
                        <div className="w-full mt-5">
                            <form encType="multipart/form-data" id="categoryForm" onSubmit={formSubmitHandler} className="w-full flex items-start justify-start flex-col gap-y-3">
                                <FormTextInput label={'Name *'} name={'name'} id={'name'} placeholder={'Enter Category Name'} data={data.name} inputChangeHandler={inputChangeHandler} type={'text'} error={errors.name} />
                                <FormTextArea label={'Description *'} name={'description'} id={'description'} placeholder={'Write Description Here...'} data={data.description} inputChangeHandler={inputChangeHandler} error={errors.description} />
                            </form>
                        </div>
                    </div>
                    <div className="w-3/10 p-5 bg-white rounded shadow flex flex-col gap-y-3 min-h-111">
                        <h6 className="font-poppins text-lg font-medium text-semi-black"> Select Parent Category  </h6>
                        <div className="w-full mt-5">
                            <ParenCategoryDropDown categories={categories} setParent={setParent} existingParent={existingParent} setCanEdit={setCanEdit} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}