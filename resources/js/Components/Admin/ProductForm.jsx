import { usePage } from "@inertiajs/react";
import { DropDown } from "../../Shared/Admin/DropDown";
import { FormTextArea } from "../../Shared/FormTextArea";
import { FormTextInput } from "../../Shared/FormTextInput";
import { FormNumInput } from "../../Shared/FormNumInput";
import { ColorPicker } from "../../Shared/Admin/ColorPicker";
import { useEffect, useState } from "react";
import { ProductDimensions } from "../../Shared/Admin/ProductDimensions";


export let ProductForm = ({ errors, data, inputChangeHandler, setData, setCanEdit }) => {
    const { metals, metal_purities, color_tones, finishes, statuses } = usePage().props;
    const [colors, setColors] = useState(color_tones);

    useEffect(() => { data.stock_quantity > 0 ? setData('stock_status', 'in stock') : setData('stock_status', 'out of stock') }, [data.stock_quantity]);

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
                        <div className="w-full flex flex-col gap-y-3">
                            <DropDown data={metals} setOption={(metal) => setData('metal_type', metal)} dropDownLabel="Choose Metal" inputLabel="Metal Type *" setCanEdit={setCanEdit} />
                            {errors.metal_type && (<span className="text-red-700 font-poppins text-sm ">{errors.metal_type}</span>)}
                        </div>
                        <div className="w-full flex flex-col gap-y-3">
                            <DropDown data={metal_purities} setOption={(purity) => setData('metal_purity', purity)} dropDownLabel="Choose Metal Purity" inputLabel="Metal Purity (optional)" setCanEdit={setCanEdit} />
                            {errors.metal_purity && (<span className="text-red-700 font-poppins text-sm ">{errors.metal_purity}</span>)}
                        </div>
                        <div className="w-full flex flex-col gap-y-3">
                            <DropDown data={finishes} setOption={(finish) => setData('finish', finish)} dropDownLabel="Choose Finish" inputLabel="Product Finish *" setCanEdit={setCanEdit} />
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
                        <ProductDimensions inputChangeHandler={inputChangeHandler} errors={errors} data={data.dimensions} setData={setData} setCanEdit={setCanEdit} />
                        <FormNumInput label={'Product Weight (grams) *'} name={'weight_grams'} id={'weightGrams'} placeholder={'Enter Product Weight In Grams'} data={data.weight_grams} inputChangeHandler={inputChangeHandler} error={errors.weight_grams} pattern={"^(0|[1-9]\d*)$"} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 w-1/2">

                <div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-3">
                    <h6 className="font-poppins text-lg font-medium">Additional Information</h6>
                    <div className="w-full mt-5">
                        <div className="w-full flex items-start justify-start flex-col gap-y-3">
                            <FormTextArea label={'Long Description *'} name={'long_description'} id={'longDescription'} placeholder={'Write Long Description Here...'} data={data.long_description} inputChangeHandler={inputChangeHandler} error={errors.long_description} rows={9} />
                            <FormNumInput label={'Estimated Delivery Time (optional)'} name={'lead_time_days'} id={'leadingTimeDays'} placeholder={'Enter Time In Days'} data={data.lead_time_days} inputChangeHandler={inputChangeHandler} error={errors.lead_time_days} pattern={"^(0|[1-9]\d*)$"} />
                        </div>
                    </div>
                </div>
                <div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-3">
                    <h6 className="font-poppins text-lg font-medium">Product Status</h6>
                    <div className="w-full mt-5">
                        <div className="w-full flex items-start justify-start flex-col gap-y-3">
                            <div className="w-full flex flex-col gap-y-1">

                                <DropDown data={statuses} setOption={(status) => setData('status', status)} dropDownLabel="Choose Status" inputLabel="Status *" setCanEdit={setCanEdit} />
                                {errors.status && (<span className="text-red-700 font-poppins text-sm ">{errors.status}</span>)}
                            </div>
                            <FormNumInput label={'Stock Quantity *'} name={'stock_quantity'} id={'stockQuantity'} placeholder={'Enter Stock Quantity'} data={data.stock_quantity} inputChangeHandler={inputChangeHandler} error={errors.stock_quantity} pattern={"^(0|[1-9]\d*)$"} />
                            <h6 className="w-full sm:text-lg text-base font-poppins font-medium text-semi-black">Stock Status</h6>
                            <div className=" flex w-full items-center gap-x-3">
                                <label className="flex text-sm font-poppins font-medium text-semi-black cursor-pointer gap-x-1">
                                    <input type="radio" name={`stock_status`} value="in stock" checked={data.stock_status === 'in stock'} onChange={(e) => { setData('stock_status', e.target.value); setCanEdit(true) }} />{" "}
                                    <span>In Stock</span>
                                </label>
                                <label className="flex text-sm font-poppins font-medium text-semi-black cursor-pointer gap-x-1">
                                    <input type="radio" name={`stock_status`} value="out of stock" checked={data.stock_status === 'out of stock'} onChange={(e) => { setData('stock_status', e.target.value); setCanEdit(true) }} /> {" "}
                                    <span>Out Of Stock</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}