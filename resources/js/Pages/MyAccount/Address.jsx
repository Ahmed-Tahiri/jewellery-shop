import { useForm, usePage } from "@inertiajs/react";
import { AddressCard } from "../../Components/MyAccount/Address";
import { FormTextInput } from "../../Shared/FormTextInput";
import { useCallback, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { AddressForm } from "../../Components/AddressForm";

export default function Address() {

    let [isPrimary, setIsPrimary] = useState(false);
    let { addresses } = usePage().props;
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
                reset();
            },
        });
    };

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
                            <AddressForm data={data} errors={errors} setData={setData} />
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