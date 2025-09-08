import { FormTextInput } from "../../Shared/FormTextInput";
import { FormNumInput } from "../../Shared/FormNumInput";
import { useEffect, useState } from "react";
import { ProductFeatures } from "./ProductFeatures";
import { FaCheck } from "react-icons/fa6";


export let ProductForm = ({ errors, data, inputChangeHandler, setData, setCanEdit }) => {

    let [isDefault, setIsDefault] = useState(false);
    useEffect(() => { data.stock_quantity > 0 ? setData('stock_status', 'in stock') : setData('stock_status', 'out of stock') }, [data.stock_quantity]);

    return (<div className="flex w-full flex-col gap-y-5">
        <div className="flex w-full gap-5">
            <div className="w-1/2  flex flex-col gap-5">
                <div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-3">
                    <h6 className="font-poppins text-lg font-medium">Basic Information</h6>
                    <div className="w-full mt-5">
                        <div className="w-full flex items-start justify-start flex-col gap-y-3">
                            <FormTextInput label={'Product SKU *'} name={'sku'} id={'productSku'} placeholder={'Enter Product SKU'} data={data.sku} inputChangeHandler={inputChangeHandler} type={'text'} error={errors.sku} />
                        </div>
                    </div>
                </div>
                <div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-3">
                    <h6 className="font-poppins text-lg font-medium">Product Status</h6>
                    <div className="w-full mt-5">
                        <div className="w-full flex items-start justify-start flex-col gap-y-3">
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
                            <div className="flex flex-row gap-x-1 items-center mt-4 mb-2">
                                <label htmlFor="remember" className="relative flex flex-row items-center md:gap-x-2 gap-x-1 cursor-pointer select-none">
                                    <div className="relative flex flex-row items-center">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            name="remember"
                                            checked={isDefault}
                                            onChange={(e) => {
                                                setIsDefault(e.target.checked);
                                                setData((prev) => ({ ...prev, is_default: e.target.checked }));
                                            }}
                                            className="appearance-none md:h-[18px] md:w-[18px] w-[15px] h-[15px] border-2 border-zinc rounded  bg-transparent checked:bg-zinc checked:border-zinc" />
                                        <span className={`absolute top-[2px] left-[2px] flex items-center justify-center w-[14px] h-[14px] ${isDefault ? "opacity-100" : "opacity-0"} transition-opacity duration-150`} > <FaCheck className="text-white text-xs" />   </span>
                                    </div>
                                    <span className="text-semi-black font-poppins text-base font-medium">Set as Default Variant</span>
                                </label>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-5">
                    <h6 className="font-poppins text-lg font-medium">Product Pricing</h6>
                    <div className="flex flex-col items-start gap-y-3 w-full">
                        <FormTextInput label={'Cost *'} name={'cost'} id={'cost'} placeholder={'Enter Product Cost'} error={errors.cost} type={'text'} inputChangeHandler={inputChangeHandler} data={data.cost} />
                        <FormTextInput label={'Price *'} name={'price'} id={'price'} placeholder={'Enter Product Sale Price'} error={errors.price} type={'text'} inputChangeHandler={inputChangeHandler} data={data.price} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 w-1/2">
                <ProductFeatures data={data} setData={setData} setCanEdit={setCanEdit} inputChangeHandler={inputChangeHandler} />
            </div>
        </div>
    </div>);
}