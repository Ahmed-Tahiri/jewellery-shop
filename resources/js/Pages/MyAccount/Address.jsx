import { useForm, usePage } from "@inertiajs/react";
import { AddressCard } from "../../Components/MyAccount/Address";
import { FormTextInput } from "../../Shared/FormTextInput";
import { useCallback, useState } from "react";
import { FaCheck } from "react-icons/fa6";

export default function Address() {

    let [isPrimary, setIsPrimary] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        country: "",
        town: "",
        state: "",
        zipcode: "",
        street: "",
        is_primary: isPrimary,
    });

    const inputChangeHandler = useCallback((e) => { setData(e.target.name, e.target.value); }, [setData]);
    const submitHandler = (e) => {
        e.preventDefault();
        post("/myaccount/address", {
            onSuccess: () => {
                setIsPrimary(false);
                setData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    country: "",
                    town: "",
                    state: "",
                    zipcode: "",
                    street: "",
                    is_primary: isPrimary,
                });
            },
        });
    };


    let { addresses } = usePage().props;


    return (
        <div className="lg:w-6/8 md:w-5/7 w-10/12">
            <div className="w-full flex flex-col gap-y-5">
                {Array.isArray(addresses) && addresses.length > 0 ? (<div className="flex flex-col p-2 divide-y divide-gray-300 border-[1px] border-gray-300 shadow-sm">
                    {addresses.map((address, idx) => <AddressCard key={`AddressNo.${idx + 1}`} city={address.city} id={address.id} street={address.street} />)}
                </div>) : ''}
                <div className="w-full flex items-center justify-start"><h5 className="font-poppins text-semi-black font-medium text-base md:text-xl">Add new Addresses</h5></div>
                <div className="w-full">
                    <form onSubmit={submitHandler} className="w-full flex flex-col items-start">
                        <div className="w-full flex flex-col items-start gap-y-5">
                            <div className="w-full flex md:flex-row flex-col gap-5">
                                <div className="w-full md:w-1/2">
                                    <FormTextInput label={'First Name *'} type={'text'} name={'first_name'} id={'fName'} inputChangeHandler={inputChangeHandler} error={errors.first_name} data={data.first_name} placeholder={'Enter First Name'} />
                                </div>
                                <div className=" w-full md:w-1/2">
                                    <FormTextInput label={'Last Name *'} type={'text'} name={'last_name'} id={'lName'} inputChangeHandler={inputChangeHandler} error={errors.last_name} data={data.last_name} placeholder={'Enter Last Name'} />
                                </div>
                            </div>
                            <div className="w-full flex md:flex-row flex-col gap-5">
                                <div className="w-full md:w-1/2">
                                    <FormTextInput label={'Country *'} type={'text'} name={'country'} id={'country'} inputChangeHandler={inputChangeHandler} error={errors.country} data={data.country} placeholder={'Enter Country'} />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <FormTextInput label={'State *'} type={'text'} name={'state'} id={'state'} inputChangeHandler={inputChangeHandler} error={errors.state} data={data.state} placeholder={'Enter State'} />
                                </div>

                            </div>
                            <div className="w-full flex md:flex-row flex-col gap-5">
                                <div className="w-full md:w-1/2">
                                    <FormTextInput label={'City *'} type={'text'} name={'city'} id={'city'} inputChangeHandler={inputChangeHandler} error={errors.city} data={data.city} placeholder={'Enter City'} />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <FormTextInput label={'Zip Code *'} type={'text'} name={'zipcode'} id={'zipCode'} inputChangeHandler={inputChangeHandler} error={errors.zipcode} data={data.zipcode} placeholder={'Enter Zip Code'} />
                                </div>
                            </div>

                            <div className="w-full">
                                <FormTextInput label={'Street Address *'} type={'text'} name={'street'} id={'street'} inputChangeHandler={inputChangeHandler} error={errors.street} data={data.street} placeholder={'Enter Street Address'} />
                            </div>

                            <div className="w-full">
                                <FormTextInput label={'Email *'} type={'email'} name={'email'} id={'email'} inputChangeHandler={inputChangeHandler} error={errors.email} data={data.email} placeholder={'Enter Email'} />
                            </div>
                            <div className="w-full">
                                <FormTextInput label={'Phone *'} type={'text'} name={'phone'} id={'phone'} inputChangeHandler={inputChangeHandler} error={errors.phone} data={data.phone} placeholder={'Enter Phone'} />
                            </div>
                            <div className="w-full flex items-center justify-between -mt-3 mb-3">
                                <div className="flex flex-row gap-x-1 items-center mt-1">
                                    <label htmlFor="is_primary" className="relative flex flex-row items-center gap-x-2 cursor-pointer select-none">
                                        <div className="relative flex flex-row items-center">
                                            <input
                                                type="checkbox"
                                                id="is_primary"
                                                name="is_primary"
                                                checked={isPrimary}
                                                onChange={(e) => {
                                                    setIsPrimary(e.target.checked);
                                                    setData((prev) => ({ ...prev, is_primary: e.target.checked }));
                                                }}
                                                className="appearance-none h-[18px] w-[18px] border-2 border-zinc rounded  bg-transparent checked:bg-zinc checked:border-zinc" />
                                            <span className={`absolute top-[2px] left-[2px] flex items-center justify-center w-[14px] h-[14px] ${isPrimary ? "opacity-100" : "opacity-0"} transition-opacity duration-150`} > <FaCheck className="text-white text-xs" />   </span>
                                        </div>
                                        <span className="text-zinc font-poppins text-sm font-semibold">Set as primary address</span>
                                    </label>

                                </div>
                            </div>
                            <div>
                                <button type="submit" disabled={processing} className={`md:text-base text-sm font-poppins w-40 md:w-50 shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer py-2  px-3 text-center ${processing ? 'opacity-50' : 'opacity-100'}`}>
                                    {processing ? 'Adding Address...' : 'Add Address'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}