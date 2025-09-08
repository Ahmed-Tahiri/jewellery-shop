import { useEffect, useState } from "react";
import { AdminSectionSubHeading } from "../../../Shared/Admin/AdminSectionHeading";
import { Link, useForm, usePage } from "@inertiajs/react";
import { ProductMainImage } from "../../../Shared/Admin/ProductMainImage";
import { SecondaryImgList } from "../../../Shared/Admin/SecondaryImageList";
import { ProductForm } from "../../../Components/Admin/ProductForm";
import { DropDown } from "../../../Shared/Admin/DropDown";
import { FormNumInput } from "../../../Shared/FormNumInput";
import { FormTextInput } from "../../../Shared/FormTextInput";
export default function Create() {

    const [canAdd, setCanAdd] = useState(false);
    const [parentCategory, setParentCategory] = useState(null);
    const [relatedSubCategories, setRelatedSubCategories] = useState([]);
    const { categories, subcategories } = usePage().props;
    const [secondaryUploadError, setSecondaryUploadError] = useState(false);
    const [secondaryImgs, setSecondaryImgs] = useState([]);
    const [croppedImage, setCroppedImage] = useState(null);

    let { post, errors, data, setData, reset } = useForm({
        name: '',
        sku: '',
        short_description: '',
        long_description: '',
        lead_time_days: '',
        subcategory: '',
        status: '',
        stock_quantity: '',
        stock_status: '',
        metal_type: '',
        metal_purity: '',
        color_tone: '',
        finish: '',
        size: '',
        weight_grams: '',
        dimensions: '',
        height_mm: '',
        width_mm: '',
        length_mm: '',
        diameter_mm: '',
        price: '',
        cost: '',
        primary_image: null,
        secondary_images: secondaryImgs
    });

    let inputChangeHandler = (e) => {
        const updated = { ...data, [e.target.name]: e.target.value };
        setData(e.target.name, e.target.value);

        const hasAnyValue = Object.values(updated).some(
            (val) => val && val.toString().trim() !== ""
        );
        setCanAdd(hasAnyValue);
    }
    let formSubmitHandler = (e) => {
        e.preventDefault();

        if (croppedImage) {
            setData('primary_image', croppedImage);
        }

        post(route('admin.products.post'), {
            data: data,
            forceFormData: true,
        });
    }
    useEffect(() => setData('primary_image', croppedImage), [croppedImage]);
    useEffect(() => setData('secondary_images', secondaryImgs), [secondaryImgs]);
    useEffect(() => setRelatedSubCategories(subcategories.filter(cat => cat.parent_id === parentCategory)), [parentCategory]);

    return (
        <section className="w-full min-h-170">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <AdminSectionSubHeading heading={"Add Product"} />
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
                                <h6 className="font-poppins text-lg font-medium">Product Images</h6>
                                <ProductMainImage onImageCropped={(blob) => setCroppedImage(blob)} setCanEdit={setCanAdd} />
                                <div className="p-2 w-full flex items-start justify-start gap-y-2 flex-col">
                                    {errors.secondary_images && (<span className="text-red-700 font-poppins text-sm -mt-1">{errors.secondary_images}</span>)}
                                    {Object.keys(errors).map((key) => (key.startsWith("secondary_images.") && (<span key={key} className="text-red-700 font-poppins text-sm -mt-1"> {errors[key]}  </span>)))}
                                    {secondaryUploadError && (<div><span className="text-red-700 font-poppins text-sm mb-3">Image is too large! Max allowed size is 2MB.</span></div>)}
                                    <SecondaryImgList setSecondaryImgs={setSecondaryImgs} setCanEdit={setCanAdd} initialImages={[]} setError={setSecondaryUploadError} />
                                </div>
                            </div>
                            <div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-5">
                                <h6 className="font-poppins text-lg font-medium">Category</h6>
                                <div className="flex flex-col items-start gap-y-3 w-full">
                                    {errors.subcategory && (<span className="text-red-700 font-poppins text-sm ">{errors.subcategory}</span>)}
                                    <DropDown setOption={(cat) => setParentCategory(cat)} data={categories} inputLabel="Parent *" dropDownLabel="Choose Parent Category" setCanEdit={setCanAdd} />
                                    <DropDown data={relatedSubCategories} setOption={(cat) => setData('subcategory', cat)} inputLabel="Sub *" dropDownLabel="Choose Parent To Load Sub" setCanEdit={setCanAdd} />
                                </div>
                            </div>
                            <div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-5">
                                <h6 className="font-poppins text-lg font-medium">Product Pricing</h6>
                                <div className="flex flex-col items-start gap-y-3 w-full">
                                    <FormTextInput label={'Cost *'} name={'cost'} id={'cost'} placeholder={'Enter Product Cost'} error={errors.cost} type={'text'} inputChangeHandler={inputChangeHandler} data={data.cost} />
                                    <FormTextInput label={'Price *'} name={'price'} id={'price'} placeholder={'Enter Product Sale Price'} error={errors.price} type={'text'} inputChangeHandler={inputChangeHandler} data={data.price} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}