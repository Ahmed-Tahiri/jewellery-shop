import { useEffect, useState } from "react"

export let ProductAdditionalInfo = ({ product }) => {


    const [descriptionSectionIsVisible, setDescriptionSectionIsVisible] = useState(true);
    const [additionalInfoIsVisible, setAdditionalInfoIsVisible] = useState(false);
    const [purities, setPurities] = useState(null);
    const [colors, setColors] = useState(null);
    const [metals, setMetals] = useState(null);
    const [weight, setWeight] = useState(null);
    const [sizes, setSizes] = useState(null);
    const [finishes, setFinishes] = useState(null);
    const descriptionBtnHandler = () => {
        setDescriptionSectionIsVisible(true);
        setAdditionalInfoIsVisible(false);
    }
    const additionalInfoBtnHandler = () => {
        setDescriptionSectionIsVisible(false);
        setAdditionalInfoIsVisible(true);
    }
    const renderAdditionalInfo = (arr) => arr.length > 1 ? arr.join(", ") : arr[0] || "";
    useEffect(() => {
        let uniqueMetals = [...new Set(product.variants.map((variant) => variant.metal.name))];
        let uniquePurities = [...new Set(product.variants.map((variant) => variant.metal_purity.purity))];
        let uniqueFinishes = [...new Set(product.variants.map((variant) => variant.finish.name))];
        let uniqueWeight = [...new Set(product.variants.map((variant) => `${Number(variant.weight_grams)}g`))];
        let uniqueSizes = [...new Set(product.variants.map((variant) => variant.size))];
        let uniqueColors = [...new Set(product.variants.map((variant) => variant.color_tone.name))];
        setMetals(uniqueMetals);
        setPurities(uniquePurities);
        setColors(uniqueColors);
        setSizes(uniqueSizes);
        setFinishes(uniqueFinishes);
        setWeight(uniqueWeight);
    }, [product.variants]);

    return <div className="w-full flex gap-y-2 flex-col items-center">
        <div className="w-full border-b-2 border-gray-300  gap-x-15 flex flex-row justify-center items-center">
            <div><button onClick={descriptionBtnHandler} className={`py-2 border-b-[3px] ${descriptionSectionIsVisible ? 'border-zinc' : 'border-transparent'} font-poppins font-medium text-xl text-zinc cursor-pointer hover:border-zinc`}>Description</button></div>
            <div><button onClick={additionalInfoBtnHandler} className={`py-2 border-b-[3px]  ${additionalInfoIsVisible ? 'border-zinc' : 'border-transparent'}  font-poppins font-medium text-xl text-zinc cursor-pointer hover:border-zinc ease-linear transition-colors duration-200`}>Additional Information</button></div>
        </div>
        <div className="w-full">
            <div className={`w-full py-5 overflow-hidden whitespace-pre-wrap text-semi-black font-poppins ${descriptionSectionIsVisible ? 'block' : 'hidden'}`}>
                {product.longDescription}
            </div>
            <div className={`w-full py-5 ${additionalInfoIsVisible ? 'block' : 'hidden'}`}>
                <table className="w-full border-[1px] border-gray-300">
                    <thead className="bg-mustard border-[1px] border-gray-300">
                        <tr className="">
                            <th className="font-poppins text-zinc-dark font-medium  py-3 px-6 w-40 text-start">Feature</th>
                            <th className="font-poppins text-zinc-dark font-medium  py-3 px-6 text-start">Description</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even:bg-powder-gray">
                            <td className="py-3 font-poppins font-medium text-semi-black px-6 text-start">Material</td>
                            <td className="py-3 font-poppins font-medium text-semi-black px-6 text-start">{renderAdditionalInfo(metals)}</td>
                        </tr>
                        <tr className="even:bg-powder-gray">
                            <td className="py-3 font-poppins font-medium text-semi-black px-6 text-start">Purity</td>
                            <td className="py-3 font-poppins font-medium text-semi-black px-6 text-start">{renderAdditionalInfo(purities)}</td>
                        </tr>
                        <tr className="even:bg-powder-gray">
                            <td className="py-3 font-poppins font-medium text-semi-black px-6 text-start">Finish</td>
                            <td className="py-3 font-poppins font-medium text-semi-black px-6 text-start">{renderAdditionalInfo(finishes)}</td>
                        </tr>
                        <tr className="even:bg-powder-gray">
                            <td className="py-3 font-poppins font-medium text-semi-black px-6 text-start">Size</td>
                            <td className="py-3 font-poppins font-medium text-semi-black px-6 text-start">{renderAdditionalInfo(sizes)}</td>
                        </tr>
                        <tr className="even:bg-powder-gray">
                            <td className="py-3 font-poppins font-medium text-semi-black px-6 text-start">Weight</td>
                            <td className="py-3 font-poppins font-medium text-semi-black px-6 text-start">{renderAdditionalInfo(weight)}</td>
                        </tr>
                        <tr className="even:bg-powder-gray">
                            <td className="py-3 font-poppins font-medium text-semi-black px-6 text-start">Color</td>
                            <td className="py-3 font-poppins font-medium text-semi-black px-6 text-start">{renderAdditionalInfo(colors)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}