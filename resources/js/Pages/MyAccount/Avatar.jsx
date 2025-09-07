import React, { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import { router, usePage } from "@inertiajs/react";

export default function Avatar() {
    const { temp_avatar, errors, auth } = usePage().props;

    let avatar = temp_avatar ? `/storage/temp_avatars/${temp_avatar}` : auth.avatar;

    const [imageSrc, setImageSrc] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [showCropper, setShowCropper] = useState(false);
    const [avatarIsForbidden, setAvatarIsForbidden] = useState(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
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

        router.post("/myaccount/avatar", formData, {
            forceFormData: true,
            onSuccess: () => {
                setShowCropper(false);
                setImageSrc(null);
                router.visit("/myaccount");
            },
        });
    };

    const handleCancel = () => {
        router.post("/myaccount/avatar/cancel", {}, {
            onSuccess: () => {
                setShowCropper(false);
                setImageSrc(null);
                setCroppedAreaPixels(null);
                if (fileInputRef.current) fileInputRef.current.value = "";
                router.visit("/myaccount");
            }
        });
    };

    const avatarErrorHandle = () => {
        setAvatarIsForbidden(true);
    };

    return (
        <div className="space-y-4 flex flex-col sm:items-start items-center w-full">
            {errors.avatar && (
                <div className="lg:w-60 w-full flex justify-center items-center">
                    <span className="font-poppins text-red-700 text-sm">{errors.avatar}</span>
                </div>
            )}

            {showCropper ? (
                <div className="flex w-full flex-col items-center">
                    <div className="relative h-30 w-30 sm:h-40 sm:w-40 md:h-46 md:w-46 lg:h-60 lg:w-60  bg-white rounded-full shadow overflow-hidden">
                        <Cropper image={imageSrc}
                            crop={crop}
                            zoom={zoom}
                            cropShape="round"
                            aspect={1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>

                    <div className="flex gap-2 mt-5  w-full md:w-46 lg:w-60  flex-row justify-center">
                        <button onClick={handleCancel} className="md:text-base text-sm shadow px-4 py-2 border-2 border-zinc text-zinc font-poppins cursor-pointer md:flex-1 hover:bg-zinc-dark hover:text-white hover:border-zinc-dark transition " >  Cancel  </button>
                        <button onClick={handleUpload} className="border-2 border-zinc shadow px-4 py-2 bg-zinc text-white font-poppins cursor-pointer md:flex-1 hover:bg-zinc-dark hover:border-zinc-dark transition md:text-base text-sm"> Upload</button>
                    </div>
                </div>
            ) : avatar && !avatarIsForbidden ? (
                <div className="h-30 w-30 sm:h-40 sm:w-40 md:h-46 md:w-46 lg:h-60 lg:w-60  overflow-hidden shadow rounded-full">
                    <img src={avatar} alt="profile avatar" className="h-30 w-30 sm:h-40 sm:w-40 md:h-46 md:w-46 lg:h-60 lg:w-60  object-cover" onError={avatarErrorHandle} />
                </div>
            ) : (
                <div className="p-2 h-30 w-30 sm:h-40 sm:w-40 md:h-46 md:w-46 lg:h-60 lg:w-60 flex items-center justify-center rounded-full shadow bg-mustard">
                    <span className="font-poppins text-semi-black text-5xl sm:text-7xl md:text-8xl  font-medium">
                        {auth.firstName[0]}
                    </span>
                </div>
            )}

            {!showCropper && (
                <>
                    <label htmlFor="avatar" className="block sm:w-40 md:w-46 lg:w-60 md:text-base text-sm text-center border-2 border-zinc shadow px-4 py-2 bg-zinc text-white font-poppins cursor-pointer transition hover:bg-zinc-dark hover:border-zinc-dark"
                    > {avatar ? "Change Avatar" : "Upload Avatar"}</label>
                    <input ref={fileInputRef} type="file" name="avatar" id="avatar" accept="image/png, image/jpeg, image/jpg, image/webp" onChange={handleFileChange} className="hidden" />
                </>
            )}
        </div>
    );
}
