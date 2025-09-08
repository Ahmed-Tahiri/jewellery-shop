import { GiBigDiamondRing } from "react-icons/gi";
import Cropper from "react-easy-crop";
import { useCallback, useState } from "react";
import getCroppedImg from "../../Utilities/CropImage";
import { usePage } from "@inertiajs/react";

export let CategoryImg = ({ onImageCropped, setCanEdit }) => {

    let { url } = usePage();
    let cleanUrl = url.split('?')[0];
    const { category } = usePage().props;
    const [categoryImg, setCategoryImg] = useState(category?.image ?? null);
    const [imageSrc, setImageSrc] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [showCropper, setShowCropper] = useState(false);
    const [categoryImgError, setCategoryImgError] = useState(false);
    const [zoom, setZoom] = useState(1);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const { errors } = usePage().props;

    const onFileChange = async (e) => {

        const file = e.target.files[0];
        const maxSize = 3 * 1024 * 1024;
        if (file.size > maxSize) {
            setCategoryImgError(true);
            e.target.value = "";
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
                setShowCropper(true);
            };
            reader.readAsDataURL(file);
        }
        setCanEdit(true);
    };

    const onCropComplete = useCallback((_, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
            const previewUrl = URL.createObjectURL(croppedBlob);
            setCategoryImg(null);
            setCroppedImage(previewUrl);
            setShowCropper(false);
            onImageCropped(croppedBlob);
        } catch (e) {
            errors.image = 'Please select valid image';
        }
    }, [imageSrc, croppedAreaPixels]);


    return (
        <div className="w-3/10 p-5 bg-white rounded shadow flex flex-col gap-y-5">
            <h6 className="font-poppins text-lg font-medium">{`${cleanUrl === '/admin/categories/create' ? 'Upload Category Image' : 'Update Category Image'}`}</h6>
            <div className="w-full flex items-center justify-center flex-col gap-y-5">
                {(errors.image || categoryImgError) && <div className="flex flex-col items-center w-full gap-y-1">
                    {errors.image && (<div><span className="text-red-700 font-poppins text-sm -mt-1">{errors.image}</span></div>)}
                    {categoryImgError && (<div><span className="text-red-700 font-poppins text-sm -mt-1">Image is too large! Max allowed size is 3 MB.</span></div>)}
                </div>}
                {
                    showCropper ? (
                        <div className="relative bg-white flex items-center justify-center h-75 w-56">
                            <div className=" bg-white flex flex-col w-full h-full">
                                <div className="flex-1 w-full h-full bg-white">
                                    <Cropper
                                        image={imageSrc}
                                        crop={crop}
                                        zoom={zoom}
                                        aspect={3 / 4}
                                        onCropChange={setCrop}
                                        onZoomChange={setZoom}
                                        onCropComplete={onCropComplete}
                                        className="w-full h-full bg-white"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : <div className={`flex w-56 h-75 shadow-sm border-2 border-gray-300 ${croppedImage || categoryImg ? '' : 'p-3'} flex-col justify-between items-center`}>

                        <div className="flex w-full h-full items-center flex-col gap-y-5">
                            {croppedImage ? (<div className="w-full h-full bg-white"><img src={croppedImage} alt="Cropped" className="w-full h-full" /></div>) : categoryImg ? (<div className="w-full h-full bg-white"><img src={`/storage/${categoryImg}`} alt="Cropped" className="w-full h-full" /></div>) :
                                (<>
                                    <div className="w-full flex items-center justify-center"><GiBigDiamondRing className="text-light-gray text-7xl" /></div>
                                    <p className="font-poppins text-sm text-light-gray text-center w-full">Please upload an image with a <strong>3:4 ratio </strong>(e.g., 600×800, 750×1000) in JPG, JPEG, or PNG format.</p>
                                </>)}
                        </div>
                    </div>
                }
                <div className="">
                    {showCropper ?
                        (<div className="flex justify-between items-center gap-2 w-56">
                            <button className="px-4 flex-1 py-2 bg-mustard text-white shadow-sm text-sm font-poppins cursor-pointer ease-linear transition-colors duration-200 hover:bg-mustard-dark" onClick={() => { setShowCropper(false); errors.image = null }} > Cancel</button>
                            <button className="px-4 flex-1 py-2 bg-zinc text-white shadow-sm text-sm font-poppins cursor-pointer ease-linear transition-colors duration-200 hover:bg-zinc-dark" onClick={showCroppedImage}>  Save </button>
                        </div>) :
                        (<form className="w-full flex items-center justify-center">
                            <label htmlFor="image" className="w-56 text-center shadow-sm text-sm p-2 bg-zinc text-white font-poppins cursor-pointer hover:bg-zinc-dark transition-colors ease-linear duration-200">
                                {!croppedImage ? `${cleanUrl === '/admin/categories/create' ? 'Add Category Image' : 'Update Category Image'}` : 'Change Category Image'}
                            </label>
                            <input type="file" accept="image/png, image/jpeg, image/jpg, image/webp" name="image" id="image" className="hidden" onChange={onFileChange} />
                        </form>)
                    }
                </div>
            </div>
        </div>
    );
}