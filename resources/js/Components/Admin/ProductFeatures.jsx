import { usePage } from "@inertiajs/react";
import { DropDown } from "../../Shared/Admin/DropDown"
import { useState } from "react";
import { ColorPicker } from "../../Shared/Admin/ColorPicker";
import { FormNumInput } from "../../Shared/FormNumInput";
import { ProductDimensions } from "../../Shared/Admin/ProductDimensions";

export let ProductFeatures = ({ data, setData, setCanEdit, inputChangeHandler }) => {
    const { metals, metal_purities, color_tones, finishes, errors } = usePage().props;
    const existingMetal = usePage().props?.variant?.metal ?? null;
    const existingMetalPurity = usePage().props?.variant?.metalPurity ?? null;
    const existingFinish = usePage().props?.variant?.finish ?? null;
    const [colors, setColors] = useState(color_tones);

    return (<div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-3">
        <h6 className="font-poppins text-lg font-medium">Features</h6>
        <div className="w-full mt-5">
            <div className="w-full flex items-start justify-start flex-col gap-y-3">
                <div className="w-full flex flex-col gap-y-3">
                    <DropDown data={metals} setOption={(metal) => setData('metal_type', metal)} dropDownLabel="Choose Metal" inputLabel="Metal Type *" setCanEdit={setCanEdit} existingOption={existingMetal} />
                    {errors.metal_type && (<span className="text-red-700 font-poppins text-sm ">{errors.metal_type}</span>)}
                </div>
                <div className="w-full flex flex-col gap-y-3">
                    <DropDown data={metal_purities} setOption={(purity) => setData('metal_purity', purity)} dropDownLabel="Choose Metal Purity" inputLabel="Metal Purity (optional)" setCanEdit={setCanEdit} existingOption={existingMetalPurity} />
                    {errors.metal_purity && (<span className="text-red-700 font-poppins text-sm ">{errors.metal_purity}</span>)}
                </div>
                <div className="w-full flex flex-col gap-y-3">
                    <DropDown data={finishes} setOption={(finish) => setData('finish', finish)} dropDownLabel="Choose Finish" inputLabel="Product Finish *" setCanEdit={setCanEdit} existingOption={existingFinish} />
                    {errors.finish && (<span className="text-red-700 font-poppins text-sm ">{errors.finish}</span>)}
                </div>
                <div className="w-full flex flex-col items-start">
                    <ColorPicker colors={colors} value={data.color_tone} onChange={(color) => setData('color_tone', color)}
                        onAddColor={(newColor) => setColors([...colors, { id: colors.length + 1, ...newColor }])}
                    />
                    <p className="mt-4 text-base font-poppins text-semi-black font-normal"> Selected color: <strong>{data.color_tone.name}</strong>  </p>
                    {errors["color_tone.id"] && (<span className="text-red-700 font-poppins text-sm ">{errors["color_tone.id"]}</span>)}
                </div>
                <FormNumInput label={"Product size (if applicable)"} name={'size'} id={'size'} placeholder={'Enter Size'} data={data.size} inputChangeHandler={inputChangeHandler} error={errors.size} pattern={"^(0|[1-9]\d*)$"} />
                <ProductDimensions inputChangeHandler={inputChangeHandler} errors={errors} data={data} setData={setData} setCanEdit={setCanEdit} />
                <FormNumInput label={'Product Weight (grams) *'} name={'weight_grams'} id={'weightGrams'} placeholder={'Enter Product Weight In Grams'} data={data.weight_grams} inputChangeHandler={inputChangeHandler} error={errors.weight_grams} pattern={"^(0|[1-9]\d*)$"} />
            </div>
        </div>
    </div>);
}