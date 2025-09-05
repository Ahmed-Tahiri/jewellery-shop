import { usePage } from "@inertiajs/react";
import { DropDown } from "../../Shared/Admin/DropDown";
import { FormTextArea } from "../../Shared/FormTextArea";
import { FormTextInput } from "../../Shared/FormTextInput";
import { FormNumInput } from "../../Shared/FormNumInput";
import { ColorPicker } from "../../Shared/Admin/ColorPicker";
import { useState } from "react";


export let ProductForm = ({ errors, data, inputChangeHandler, setData, setCanEdit }) => {
    const { metals, metal_purities, color_tones } = usePage().props;
    const [colors, setColors] = useState(color_tones);

    return (<div className="flex w-full flex-col gap-y-5">

        <div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-3">
            <h6 className="font-poppins text-lg font-medium">Basic Information</h6>
            <div className="w-full mt-5">
                <div className="w-full flex items-start justify-start flex-col gap-y-3">
                    <FormTextInput label={'Product Name *'} name={'name'} id={'productName'} placeholder={'Enter Product Name'} data={data.name} inputChangeHandler={inputChangeHandler} type={'text'} error={errors.name} />
                    <FormTextInput label={'Product SKU *'} name={'sku'} id={'productSku'} placeholder={'Enter Product SKU'} data={data.sku} inputChangeHandler={inputChangeHandler} type={'text'} error={errors.sku} />
                    <FormTextArea label={'Short Description *'} name={'short_description'} id={'shortDescription'} placeholder={'Write Short Description Here...'} data={data.short_description} inputChangeHandler={inputChangeHandler} error={errors.short_description} rows={6} />
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-between items-start gap-5">
            <div className="w-1/2 p-5 bg-white rounded shadow flex flex-col gap-y-3">
                <h6 className="font-poppins text-lg font-medium">Features</h6>
                <div className="w-full mt-5">
                    <div className="w-full flex items-start justify-start flex-col gap-y-3">
                        <FormNumInput label={'Product Weight (grams) *'} name={'weight_grams'} id={'weightGrams'} placeholder={'Enter Product Weight In Grams'} data={data.weight_grams} inputChangeHandler={inputChangeHandler} type={'number'} error={errors.weight_grams} pattern={"^(0|[1-9]\d*)$"} />
                        <DropDown data={metals} setOption={(metal) => setData('metal_type', metal)} dropDownLabel="Choose Metal" inputLabel="Metal Type *" setCanEdit={setCanEdit} />
                        <DropDown data={metal_purities} setOption={(purity) => setData('metal_purity', purity)} dropDownLabel="Choose Metal Purity" inputLabel="Metal Purity (optional)" setCanEdit={setCanEdit} />


                        <div className="w-full">
                            <ColorPicker colors={colors} value={data.color_tone} onChange={(name) => setData('color_tone', name)}
                                onAddColor={(newColor) => setColors([...colors, { id: colors.length + 1, ...newColor }])}
                            />
                            <p className="mt-4 text-base font-poppins text-semi-black font-normal"> Selected color: <strong>{data.color_tone}</strong>  </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 p-5 bg-white rounded shadow flex flex-col gap-y-3">
                <h6 className="font-poppins text-lg font-medium">Additional Information</h6>
                <div className="w-full mt-5">
                    <div className="w-full flex items-start justify-start flex-col gap-y-3">
                        <FormTextArea label={'Long Description *'} name={'long_description'} id={'longDescription'} placeholder={'Write Long Description Here...'} data={data.long_description} inputChangeHandler={inputChangeHandler} error={errors.long_description} rows={9} />
                        <FormNumInput label={'Estimated Delivery Time (optional)'} name={'lead_time_days'} id={'leadingTimeDays'} placeholder={'Enter Time In Days'} data={data.lead_time_days} inputChangeHandler={inputChangeHandler} type={'number'} error={errors.lead_time_days} pattern={"^(0|[1-9]\d*)$"} />
                    </div>
                </div>
            </div>

        </div>
    </div>);
}