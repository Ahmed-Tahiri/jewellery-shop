import { FormDateTimeInput } from "../../Shared/FormDateTimeInput";
import { FormNumInput } from "../../Shared/FormNumInput";
import { FormTextInput } from "../../Shared/FormTextInput";

export let DiscountForm = ({ errors, data, inputChangeHandler }) => {

    return (
        <div className="flex w-full flex-col gap-y-5">
            <div className="flex w-full gap-5">
                <div className="w-full flex flex-row gap-5">
                    <div className="w-7/10 p-5 bg-white rounded shadow flex flex-col gap-y-3">
                        <h6 className="font-poppins text-lg font-medium">Discount Information</h6>
                        <div className="w-full mt-5">
                            <div className="w-full flex items-start justify-start flex-col gap-y-3">
                                <FormTextInput label={'Discount Name *'} name={'name'} id={'productName'} placeholder={'Enter Discount Name'} data={data.name} inputChangeHandler={inputChangeHandler} type={'text'} error={errors.name} />
                                <FormTextInput label={'Discount Code *'} name={'code'} id={'discountCode'} placeholder={'Enter Discount Code'} data={data.code} inputChangeHandler={inputChangeHandler} type={'text'} error={errors.code} />
                                <FormNumInput label={'Discount Percentage *'} name={'discount'} id={'discount'} placeholder={'Enter Discount Percentage'} data={data.discount} inputChangeHandler={inputChangeHandler} error={errors.discount} />
                            </div>
                        </div>
                    </div>

                    <div className="w-3/10 bg-white flex p-5 flex-col gap-y-3">
                        <h6 className="font-poppins text-lg font-medium">Discount Limitations</h6>
                        <div className="w-full mt-5">
                            <div className="w-full flex items-start justify-start flex-col gap-y-3">
                                <FormNumInput label={'Limitation'} name={'limitation'} id={'limitation'} placeholder={'Enter Discount Limitation'} data={data.limitation} inputChangeHandler={inputChangeHandler} error={errors.limitation} />
                                <span className="-mt-2 text-sm text-light-gray font-poppins">Keep limitations blank for unlimited discounts</span>
                                <FormDateTimeInput label={'Start Date *'} name={'start_date'} data={data.start_date} id={'DiscountStartTime'} error={errors.start_date} inputChangeHandler={inputChangeHandler} />
                                <FormDateTimeInput label={'End Date *'} name={'end_date'} data={data.end_date} id={'DiscountEndTime'} error={errors.end_date} inputChangeHandler={inputChangeHandler} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}