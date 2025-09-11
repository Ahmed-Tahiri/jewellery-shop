import { useCallback, useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { ProductMainImage } from "../../../../Shared/Admin/ProductMainImage";
import { SecondaryImgList } from "../../../../Shared/Admin/SecondaryImageList";
import { AdminSectionSubHeading } from "../../../../Shared/Admin/AdminSectionHeading";
import { ProductForm } from "../../../../Components/Admin/VariantProductForm";
import { route } from "ziggy-js";

export default function Edit({ variant, product }) {

    const [canAdd, setCanAdd] = useState(false);
    const [secondaryUploadError, setSecondaryUploadError] = useState(false);
    const [secondaryImgs, setSecondaryImgs] = useState(variant?.secondaryImages ?? []);
    const [croppedImage, setCroppedImage] = useState(null);
    console.log(Boolean(variant.isDefault));
    let { post, errors, data, setData, reset } = useForm({
        sku: variant.sku ?? '',
        is_default: Boolean(variant.isDefault) ?? false,
        stock_quantity: variant.stockQuantity ?? '',
        stock_status: variant.stockStatus ?? '',
        metal_type: variant.metal.id ?? '',
        metal_purity: variant.metalPurity.id ?? '',
        color_tone: variant.color ?? '',
        finish: variant.finish.id ?? '',
        size: variant.size ?? '',
        weight_grams: variant.weightGrams ?? '',
        dimensions: '',
        height_mm: variant.height_mm ?? '',
        width_mm: variant.width_mm ?? '',
        length_mm: variant.length_mm ?? '',
        diameter_mm: variant.diameter_mm ?? '',
        price: variant.price ?? '',
        cost: variant.cost ?? '',
        primary_image: variant?.primaryImage?.url ?? null,
        secondary_images: variant?.secondaryImages ?? [],
    });
    let inputChangeHandler = useCallback((e) => {
        const updated = { ...data, [e.target.name]: e.target.value };
        setData(e.target.name, e.target.value);

        const hasAnyValue = Object.values(updated).some(
            (val) => val && val.toString().trim() !== ""
        );
        setCanAdd(hasAnyValue);
    }, [setData, data])
    let formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(data.is_default);

        post(route('admin.products.variants.update', [product, variant.id]), {
            data: data,
            forceFormData: true,
        });
    }

    useEffect(() => {
        if (croppedImage) { setData('primary_image', croppedImage) } else { setData('primary_image', variant?.primaryImage?.url ?? null) };
    }, [croppedImage, variant?.primaryImage?.url]);

    useEffect(() => {
        setData("secondary_images", secondaryImgs);
    }, [secondaryImgs]);

    return (
        <section className="w-full min-h-170">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <AdminSectionSubHeading heading={"Edit Product Variant"} />
                    <div className="flex flex-row items-center justify-end">{
                        canAdd ? (
                            <div className="flex flex-row items-center justify-end gap-x-3">
                                <div>
                                    <Link className="cursor-pointer flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={route('admin.products.show', product)} onClick={() => reset()}>Cancel</Link>
                                </div>
                                <div>
                                    <button className="cursor-pointer flex items-center justify-center font-poppins text-base bg-mustard text-white p-2 min-w-24" form="productVariantUpdateForm">Save</button>
                                </div>
                            </div>
                        ) :
                            (<Link className="flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={route('admin.products.show', product)} onClick={() => reset()}>Cancel</Link>)
                    }
                    </div>
                </div>
                <div className="w-full flex gap-5 flex-row items-start justify-between">
                    <form encType="multipart/form-data" id="productVariantUpdateForm" onSubmit={formSubmitHandler} className="w-full  flex-row flex items-start justify-between  gap-5">
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
                                <ProductMainImage onImageCropped={(blob) => setCroppedImage(blob)} setCanEdit={setCanAdd} primaryImg={data.primary_image} />
                                <div className="p-2 w-full flex items-start justify-start gap-y-2 flex-col">
                                    {errors.secondary_images && (<span className="text-red-700 font-poppins text-sm -mt-1">{errors.secondary_images}</span>)}
                                    {Object.keys(errors).map((key) => (key.startsWith("secondary_images.") && (<span key={key} className="text-red-700 font-poppins text-sm -mt-1"> {errors[key]}  </span>)))}
                                    {secondaryUploadError && (<div><span className="text-red-700 font-poppins text-sm mb-3">Image is too large! Max allowed size is 2MB.</span></div>)}
                                    <SecondaryImgList setSecondaryImgs={setSecondaryImgs} setCanEdit={setCanAdd} initialImages={data.secondary_images} setError={setSecondaryUploadError} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}