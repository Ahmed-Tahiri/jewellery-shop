import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { router } from "@inertiajs/react";

export let AvatarUploader = ({ avatar, bgColor, adminFirstName }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [showCropper, setShowCropper] = useState(false);

    // ✅ Add state for crop & zoom
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);

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

        router.post("/admin/avatar", formData, {
            forceFormData: true,
            onSuccess: () => {
                setShowCropper(false);
                setImageSrc(null);
            },
        });
    };

    return (
        <div className="space-y-4">
            {avatar ? (
                <img
                    src={avatar}
                    alt="admin picture"
                    className="h-60 w-60 rounded-lg object-cover shadow"
                />
            ) : (
                <div
                    className="p-2 h-60 w-60 flex items-center justify-center rounded-lg shadow"
                    style={{ backgroundColor: bgColor }}
                >
                    <span className="font-poppins text-semi-black text-[6rem] font-medium">
                        {adminFirstName[0]}
                    </span>
                </div>
            )}

            <input type="file" accept="image/*" onChange={handleFileChange} />

            {showCropper && (
                <div>
                    <div className="relative w-full h-64 bg-black">
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

                    <div className="flex gap-2 mt-2">
                        <button
                            onClick={handleUpload}
                            className="px-4 py-2 bg-green-600 text-white rounded"
                        >
                            Upload
                        </button>
                        <button onClick={() => {
                            setShowCropper(false);
                            setImageSrc(null);
                        }}
                            className="px-4 py-2 bg-red-600 text-white rounded">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
