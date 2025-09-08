import { GiBigDiamondRing } from "react-icons/gi";
import Cropper from "react-easy-crop";
import { useCallback, useState } from "react";
import getCroppedImg from "../../Utilities/CropImage";
import { usePage } from "@inertiajs/react";


export let ProductMainImage = ({ onImageCropped, setCanEdit }) => {

    let { url } = usePage();
    let cleanUrl = url.split('?')[0];
    const { errors } = usePage().props;
    const [imageSrc, setImageSrc] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [showCropper, setShowCropper] = useState(false);
    const [primaryImgError, setPrimaryImgError] = useState(false);
    const [zoom, setZoom] = useState(1);
    const [crop, setCrop] = useState({ x: 0, y: 0 });

    const photoDeleteHandler = () => {
        setImageSrc(null);
        setCroppedAreaPixels(null);
        setCroppedImage(null);
        setShowCropper(false);
    }
    const onFileChange = async (e) => {

        const file = e.target.files[0];
        const maxSize = 3 * 1024 * 1024;
        if (file.size > maxSize) {
            setPrimaryImgError(true);
            e.target.value = "";
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
                setShowCropper(true);
                setPrimaryImgError(false);
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

            setCroppedImage(previewUrl);
            setShowCropper(false);
            onImageCropped(croppedBlob);
        } catch (e) {
            errors.image = 'Please select valid image';
        }
    }, [imageSrc, croppedAreaPixels]);

    return (<div className="w-full flex items-center justify-center flex-col gap-y-5">
        {(errors.primary_image || primaryImgError) && <div className="flex flex-col items-center w-full gap-y-1">
            {errors.primary_image && (<div><span className="text-red-700 font-poppins text-sm -mt-1">{errors.primary_image}</span></div>)}
            {primaryImgError && (<div><span className="text-red-700 font-poppins text-sm -mt-1">Image is too large! Max allowed size is 3 MB.</span></div>)}
        </div>}
        <div className="border-2 border-gray-300 shadow-xs  bg-white h-97 w-84 p-2 flex flex-col items-center gap-y-3">
            {
                showCropper ? (
                    <div className="relative bg-white flex items-center justify-center h-80 w-80">
                        <div className=" bg-white flex flex-col w-full h-full">
                            <div className="flex-1 w-full h-full bg-white">
                                <Cropper
                                    image={imageSrc}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={1}
                                    onCropChange={setCrop}
                                    onZoomChange={setZoom}
                                    onCropComplete={onCropComplete}
                                    className="w-full h-full bg-white"
                                />
                            </div>
                        </div>
                    </div>
                ) : <div className={`flex h-80 w-80  ${croppedImage ? '' : 'p-3'} flex-col justify-between items-center`}>

                    <div className="flex w-full h-full items-center flex-col gap-y-5">
                        {croppedImage ? (<div className="w-full h-full bg-white"><img src={croppedImage} alt="Cropped" className="w-full h-full object-cover" /></div>) :
                            (<><div className="w-full flex items-center justify-center"><GiBigDiamondRing className="text-light-gray text-7xl" /></div>
                                <p className="font-poppins text-sm text-light-gray text-center w-full">Please upload primary image with a <strong>transparent background</strong> and <strong>1:1 ratio </strong>(e.g., 800×800, 1000×1000) in JPG, JPEG, or PNG format. Max size <strong>2MB</strong>.</p>
                            </>)}
                    </div>
                </div>
            }
            <div className="w-full">
                {showCropper ?
                    (<div className="flex justify-between items-center gap-2 w-full">
                        <button type="button" className="px-4 flex-1 py-2 bg-mustard text-white shadow-sm text-sm font-poppins cursor-pointer ease-linear transition-colors duration-200 hover:bg-mustard-dark" onClick={() => { setShowCropper(false); errors.image = null }} > Cancel</button>
                        <button type="button" className="px-4 flex-1 py-2 bg-zinc text-white shadow-sm text-sm font-poppins cursor-pointer ease-linear transition-colors duration-200 hover:bg-zinc-dark" onClick={showCroppedImage}>  Save </button>
                    </div>) :
                    (<div className="flex w-full flex-row items-center justify-between gap-x-2">
                        <div className="flex-1 flex items-center justify-center">
                            <label htmlFor="image" className="min-w-38 flex-1 text-center shadow-sm text-sm p-2 bg-zinc text-white font-poppins cursor-pointer hover:bg-zinc-dark transition-colors ease-linear duration-200">
                                {!croppedImage ? 'Add Product Image' : 'Change Photo'}
                            </label>
                            <input type="file" accept="image/png, image/jpeg, image/jpg, image/webp" name="image" id="image" className="hidden" onChange={onFileChange} />
                        </div>
                        {croppedImage && <button type="button" onClick={photoDeleteHandler} className="flex-1 text-center shadow-sm text-sm p-2 bg-mustard text-white font-poppins cursor-pointer hover:bg-mustard-dark transition-colors ease-linear duration-200 min-w-38">Delete Photo</button>}
                    </div>)
                }
            </div>
        </div>
    </div>
    );
}