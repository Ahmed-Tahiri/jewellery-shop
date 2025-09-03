import { useEffect, useState } from "react";
import { SecondaryImgCard } from "./SecondaryImageCard";


export const SecondaryImgList = ({ setSecondaryImgs, setCanEdit, initialImages = [] }) => {
    const [images, setImages] = useState([...initialImages, null]);

    useEffect(() => setSecondaryImgs(images.filter((img) => img !== null)), [images]);

    const handleImageChange = (index, blob) => {
        setImages((prev) => {
            const updated = [...prev];
            updated[index] = blob;

            if (index === prev.length - 1) {
                updated.push(null);
            }
            return updated;
        });
    };

    const handleImageDelete = (index) => {
        setImages((prev) => {
            const updated = [...prev];
            updated.splice(index, 1);

            if (!updated.includes(null)) {
                updated.push(null);
            }
            return updated;
        });
    };

    return (
        <div className="flex gap-3 flex-wrap">
            {images.map((img, idx) => (
                <SecondaryImgCard
                    key={idx}
                    setCanEdit={setCanEdit}
                    file={img}
                    onImageChange={(blob) => handleImageChange(idx, blob)}
                    onImageDelete={() => handleImageDelete(idx)}
                />
            ))}
        </div>
    );
};
