import { useEffect, useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { AdminSectionSubHeading } from "../../../../Shared/Admin/AdminSectionHeading";
import { FormTextInput } from "../../../../Shared/FormTextInput";
import { FormTextArea } from '../../../../Shared/FormTextArea';
import { CategoryImg } from "../../../../Components/Admin/CategoryImg";


export default function Edit() {

    let { category } = usePage().props;
    const [canEdit, setCanEdit] = useState(false);
    const [croppedImage, setCroppedImage] = useState(null);
    let { post, put, errors, data, setData, reset } = useForm({
        name: category?.name ?? '',
        description: category?.description ?? '',
        image: category?.image ?? null
    });

    let inputChangeHandler = (e) => {
        const updated = { ...data, [e.target.name]: e.target.value };
        setData(e.target.name, e.target.value);

        const hasAnyValue = Object.values(updated).some(
            (val) => val && val.toString().trim() !== ""
        );
        setCanEdit(hasAnyValue);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const onError = (errs) => console.log(errs);

        if (croppedImage) {

            const fd = new FormData();
            fd.append('_method', 'PUT');
            fd.append('name', data.name);
            fd.append('description', data.description);
            fd.append('image', croppedImage, 'image.jpg');

            post(route('admin.categories.update.post', category.id), fd, {
                onError,
                preserveState: true,
            });
            return;
        }


        put(route('admin.categories.update', category.id), {
            name: data.name,
            description: data.description,
        }, { onError, preserveState: true });
    };

    useEffect(() => { setData('image', croppedImage); }, [croppedImage]);
    return (
        <section className="w-full min-h-170">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <AdminSectionSubHeading heading={'Edit Category'} />
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

                    <CategoryImg onImageCropped={(blob) => setCroppedImage(blob)} setCanEdit={setCanEdit} />
                </div>
            </div>
        </section>
    );

}