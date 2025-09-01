import React, { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import { router, usePage } from "@inertiajs/react";


export let AvatarUploader = ({ avatar, adminFirstName }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [showCropper, setShowCropper] = useState(false);
    const [avatarIsForbidden, setAvatarIsForbidden] = useState(false);
    const { errors } = usePage().props;
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const fileInputRef = useRef(null);
    const onCropComplete = useCallback((_, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
                setShowCropper(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const getCroppedImg = (imageSrc, crop) => {
        return new Promise((resolve) => {
            const image = new Image();
            image.src = imageSrc;
            image.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                canvas.width = crop.width;
                canvas.height = crop.height;

                ctx.drawImage(
                    image,
                    crop.x,
                    crop.y,
                    crop.width,
                    crop.height,
                    0,
                    0,
                    crop.width,
                    crop.height
                );

                canvas.toBlob((blob) => {
                    resolve(blob);
                }, "image/jpeg");
            };
        });
    };

    const handleUpload = async () => {
        if (!imageSrc || !croppedAreaPixels) return;

        const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
        const file = new File([croppedBlob], "avatar.jpg", { type: "image/jpeg" });

        const formData = new FormData();
        formData.append("avatar", file);

        router.post("/admin/profile/avatar", formData, {
            forceFormData: true,
            onSuccess: () => {
                setShowCropper(false);
                setImageSrc(null);
                setIsSuccessful(true);
            },
        });
    };

    const handleCancel = () => {
        setShowCropper(false);
        setImageSrc(null);
        setCroppedAreaPixels(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        router.reload({ only: [], preserveScroll: true });
    }
    const avatarErrorHandle = () => {
        setAvatarIsForbidden(true);
    }
    return (
        <div className="space-y-4">
            {errors.avatar && <div className="w-full md:w-60 flex justify-center items-center"><span className="font-poppins text-red-700 text-sm">{errors.avatar}</span></div>}
            <div className={`${isSuccessful ? 'flex' : 'hidden'} w-60 justify-center items-center`}><span className="font-poppins text-green-700 text-sm">Avatar Updated Successfully</span></div>
            {showCropper ? (
                <div>
                    <div className="relative w-full h-64 bg-white  shadow">
                        <Cropper
                            image={imageSrc}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>

                    <div className="flex gap-2 mt-2 w-64 flex-row justify-evenly">
                        <button onClick={handleCancel} className="shadow px-4 py-2 bg-light-gray text-white font-poppins  cursor-pointer flex-1 transition-colors ease-linear duration-200 hover:bg-dark-gray md:text-base text-sm"> Cancel </button>
                        <button onClick={handleUpload} className="shadow px-4 py-2 bg-mustard text-white font-poppins  cursor-pointer flex-1 transition-colors ease-linear duration-200 hover:bg-mustard-dark md:text-base text-sm" > Upload </button>
                    </div>
                </div>
            ) : avatar && !avatarIsForbidden ? (<div><img src={avatar} alt="admin picture" className="h-60 w-60 object-cover shadow" onError={avatarErrorHandle} /></div>) : (
                <div className="p-2 h-60 w-60 flex items-center justify-center shadow bg-mustard">
                    <span className="font-poppins text-semi-black text-[6rem] font-medium"> {adminFirstName[0]}  </span>
                </div>
            )}
            {!showCropper && <>  <label htmlFor="avatar" className="w-60 bg-zinc inline-block text-center  font-poppins  text-white py-2 px-2 cursor-pointer shadow hover:bg-zinc-dark transition-colors ease-linear duration-200 md:text-base text-sm">{avatar ? 'Change Avatar' : 'Upload Avatar'} </label>
                <input ref={fileInputRef} type="file" name="avatar" id="avatar" accept="image/*" onChange={handleFileChange} className="hidden" /></>}
        </div>
    );
};
