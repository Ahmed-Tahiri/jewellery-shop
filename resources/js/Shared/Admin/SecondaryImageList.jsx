import { useEffect, useState } from "react";
import { SecondaryImgCard } from "./SecondaryImageCard";
import { v4 as uuid } from "uuid";

export const SecondaryImgList = ({ setSecondaryImgs, setCanEdit, initialImages = [], setError }) => {

    const normalizeImages = (initialImages) =>
        initialImages.map((img) => ({
            _key: uuid(),
            id: img.id ?? null,
            url: img.url ?? null,
            file: null,
        }));

    const [images, setImages] = useState([
        ...normalizeImages(initialImages),
        null
    ]);
    useEffect(() => setSecondaryImgs(images.filter((img) => img !== null)), [images]);

    const handleImageChange = (index, blob) => {
        setImages(prev => {
            console.log(index);
            const updated = [...prev];
            const old = updated[index];
            console.log("clicked index:", index);

            updated[index] = {
                ...old,
                file: blob,
                url: null,
            };

            if (index === prev.length - 1 && updated.length < 6) {
                updated.push(null);
            }
            return updated;
        });
    };


    const handleImageDelete = (index) => {
        setImages(prev => {
            const updated = [...prev];
            updated.splice(index, 1);

            if (!updated.includes(null) && updated.length < 6) {
                updated.push(null);
            }
            return updated;
        });
    };

    return (
        <div className="flex gap-3 flex-wrap">
            {images.map((img, idx) => (
                <SecondaryImgCard
                    key={img?._key ?? `placeholder-${idx}`}
                    setCanEdit={setCanEdit}
                    img={img}
                    onImageChange={(blob) => handleImageChange(idx, blob)}
                    onImageDelete={() => handleImageDelete(idx)}
                    setError={setError}
                    uniqueID={uuid()}
                />
            ))}
        </div>
    );
};
