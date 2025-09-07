import { useEffect, useState } from "react";
import { FormNumInput } from "../FormNumInput";




export let ProductDimensions = ({ data, errors, inputChangeHandler }) => {


    return (
        <div className=" flex flex-col gap-y-3 my-5">
            <h6 className="sm:text-lg text-base font-poppins font-medium text-semi-black">Dimensions *</h6>
            {errors.dimensions && (<span className="text-red-700 font-poppins text-sm -mt-1">{errors.dimensions}</span>)}
            <p className="text-light-gray font-poppins text-start text-sm -mt-3">
                Fill the dimension(s) relevant to the product.
                Example: use <b>Length</b> for necklaces, <b>Diameter</b> for rings.
                Leave others blank if not applicable.
            </p>
            <div className="flex flex-col gap-y-4 w-full">
                <div className="flex items-center gap-x-3">
                    <FormNumInput label={'Height(mm)'} name={'height_mm'} id={'productHeight'} placeholder={'Enter Height'} data={data.height_mm} error={errors.height_mm} inputChangeHandler={inputChangeHandler} />
                </div>
                <div className="flex items-center gap-x-3">
                    <FormNumInput label={'Width(mm)'} name={'width_mm'} id={'productWidth'} placeholder={'Enter Width'} data={data.width_mm} error={errors.width_mm} inputChangeHandler={inputChangeHandler} />
                </div>
                <div className="flex items-center gap-x-3">
                    <FormNumInput label={'Length(mm)'} name={'length_mm'} id={'productLength'} placeholder={'Enter Length'} data={data.length_mm} error={errors.length_mm} inputChangeHandler={inputChangeHandler} />
                </div>
                <div className="flex items-center gap-x-3">
                    <FormNumInput label={'Diameter(mm)'} name={'diameter_mm'} id={'productDiameter'} placeholder={'Enter Diameter'} data={data.diameter_mm} error={errors.diameter_mm} inputChangeHandler={inputChangeHandler} />
                </div>
            </div>
        </div>
    );
}
