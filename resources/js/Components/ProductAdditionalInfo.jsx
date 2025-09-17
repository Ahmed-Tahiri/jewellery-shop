import { useState } from "react"

export let ProductAdditionalInfo = ({ product }) => {


    const [descriptionSectionIsVisible, setDescriptionSectionIsVisible] = useState(true);
    const descriptionBtnHandler = () => {
        setDescriptionSectionIsVisible(true);

    }
    const additionalInfoBtnHandler = () => {
        setDescriptionSectionIsVisible(false);
    }

    return <div className="w-full flex flex-col items-center">
        <div className="w-full border-b-2 border-gray-300  gap-x-15 flex flex-row justify-center items-center">
            <div><button onClick={descriptionBtnHandler} className={`py-2 border-b-[3px] ${descriptionSectionIsVisible ? 'border-zinc' : 'border-transparent'} font-poppins font-medium text-xl text-zinc cursor-pointer hover:border-zinc`}>Description</button></div>
            <div><button onClick={additionalInfoBtnHandler} className="py-2 border-b-[3px] border-transparent font-poppins font-medium text-xl text-zinc cursor-pointer hover:border-zinc ease-linear transition-colors duration-200">Additional Information</button></div>
        </div>
        <div className="w-full">
            <div className={`w-full py-5 overflow-hidden whitespace-pre-wrap text-semi-black font-poppins ${descriptionSectionIsVisible ? 'block' : 'hidden'}`}>
                {product.longDescription}
            </div>
        </div>
    </div>
}