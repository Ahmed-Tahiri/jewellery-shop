import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { TbPencil } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";

export let SecondaryImgCard = ({ setCanEdit, img, onImageChange, onImageDelete, setError, uniqueID }) => {

    const [preview, setPreview] = useState(null);
    useEffect(() => {
        if (img?.file instanceof Blob) {
            setPreview(URL.createObjectURL(img.file));
        } else if (img?.url) {
            setPreview(`/storage/${img.url}`);
        } else {
            setPreview(null);
        }
    }, [img]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        const maxSize = 2 * 1024 * 1024;
        if (selectedFile.size > maxSize) {
            setError(true);
            e.target.value = "";
            return;
        }

        onImageChange(selectedFile);
        setCanEdit(true);
        setError(false);
    };


    const handleDelete = () => {
        setPreview(null);
        onImageDelete();
        setCanEdit(true);
    };

    return (
        <div className="w-16 flex flex-col gap-y-1.5">
            <div className="h-16 w-16 border-2 border-gray-300 shadow-xs flex items-center justify-center">
                {preview ? (<img src={preview} alt="Preview" className="h-full w-full object-cover" />) :
                    (<div className="w-full h-full flex items-center justify-center">
                        <label htmlFor="image-upload" className="h-8 w-8 flex items-center justify-center text-center shadow-sm text-sm p-2 bg-zinc text-white font-poppins cursor-pointer hover:bg-zinc-dark transition-colors ease-linear duration-200" >  <FaPlus className="text-xl" /></label>
                        <input type="file" accept="image/png, image/jpeg, image/jpg, image/webp" id="image-upload" className="hidden" onChange={handleFileChange} />
                    </div>)}
            </div>

            {preview && (
                <div className="w-full flex flex-row justify-between gap-x-1.5">
                    <div encType="multipart/div-data" className="flex items-center justify-center">
                        <label htmlFor={`editBtn${uniqueID}`} className="h-6 w-7 flex items-center justify-center text-center shadow-xs text-sm p-[1px] bg-zinc text-white font-poppins cursor-pointer hover:bg-zinc-dark transition-colors ease-linear duration-200" > <TbPencil className="text-2xl text-white" /> </label>
                        <input type="file" accept="image/png, image/jpeg, image/jpg, image/webp" id={`editBtn${uniqueID}`} className="hidden" onChange={handleFileChange} />
                    </div>
                    <button type="button" onClick={handleDelete} className="h-6 w-7 flex items-center justify-center text-center shadow-xs text-sm p-1 bg-mustard text-white font-poppins cursor-pointer hover:bg-mustard-dark transition-colors ease-linear duration-200" ><RiDeleteBin5Line className="text-2xl text-white" /> </button>
                </div>
            )}
        </div>
    );
};
