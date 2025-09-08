import { BiEditAlt } from "react-icons/bi";
import { FormTextInput } from './../../Shared/FormTextInput';
import { Link, useForm, usePage } from "@inertiajs/react";
import { DropDown } from "../../Shared/DropDown";
import { useEffect, useState } from "react";
export default function Index() {

    const { customer, temp_avatar } = usePage().props;
    const [isForbidden, setIsForbidden] = useState(false);
    const { data, setData, put, processing, errors } = useForm({
        first_name: customer?.first_name ?? "",
        last_name: customer?.last_name ?? "",
        email: customer?.email ?? "",
        phone: customer?.phone ?? "",
        gender_id: customer?.gender.id ?? "",
    });

    const inputChangeHandler = (e) => { setData(e.target.name, e.target.value); };
    const [isSuccessful, setIsSuccessful] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        put("/myaccount", {
            onSuccess: () => {
                setIsSuccessful(true);
            },
        });
    };
    useEffect(() => {
        setData("gender_id", data.gender_id || "");
    }, [data.gender_id, setData]);
    return (
        <div className="lg:w-6/8 md:w-5/7 w-10/12 flex flex-col items-start gap-y-7">
            <div className={`${isSuccessful ? 'block' : 'hidden'}`}>
                <span className="text-green-700 font-poppins text-sm">Profile Updated Successfully</span>
            </div>
            <div className="relative w-30">
                {(temp_avatar || customer.avatar) && !isForbidden ? (
                    <div className="shadow overflow-hidden  w-20 h-20 md:w-25 md:h-25 lg:h-30 lg:w-30  rounded-full">
                        <img
                            src={temp_avatar ? temp_avatar : customer.avatar}
                            alt="customer profile picture"
                            className="h-full w-full object-cover"
                            onError={() => setIsForbidden(true)}
                        />
                    </div>
                ) : (
                    <div className="shadow overflow-hidden w-20 h-20 md:w-25 md:h-25 lg:h-30 lg:w-30 rounded-full bg-mustard flex items-center justify-center">
                        <span className="lg:text-6xl text-4xl font-poppins font-semibold text-semi-black">
                            {customer.first_name[0]}
                        </span>
                    </div>
                )}
                <Link href={'myaccount/avatar'} className="lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5 absolute bg-zinc rounded-full lg:bottom-1 lg:right-0 border-2 md:right-5 bottom-2 right-10 border-white text-center"><BiEditAlt className="text-white lg:text-xl md:text-base text-sm md:ms-0.5 ms-[1px]" /></Link>
            </div>
            <div className="w-full">
                <form onSubmit={submitHandler} className="w-full flex flex-col items-start">

                    <div className="w-full flex flex-col items-start gap-y-5">
                        <div className="w-full flex md:flex-row flex-col gap-5">
                            <div className="w-full md:w-1/2">
                                <FormTextInput label={'First Name *'} type={'text'} name={'first_name'} id={'fName'} inputChangeHandler={inputChangeHandler} error={errors.first_name} data={data.first_name} placeholder={'Please Enter First Name'} />
                            </div>
                            <div className="w-full md:w-1/2">
                                <FormTextInput label={'Last Name *'} type={'text'} name={'last_name'} id={'lName'} inputChangeHandler={inputChangeHandler} error={errors.last_name} data={data.last_name} placeholder={'Please Enter Last Name'} />
                            </div>
                        </div>

                        <div className="w-full">
                            <FormTextInput label={'Email *'} type={'email'} name={'email'} id={'email'} inputChangeHandler={inputChangeHandler} error={errors.email} data={data.email} placeholder={'Please Enter Email'} />
                        </div>
                        <div className="w-full">
                            <FormTextInput label={'Phone *'} type={'text'} name={'phone'} id={'phone'} inputChangeHandler={inputChangeHandler} error={errors.phone} data={data.phone} placeholder={'Please Enter Phone'} />
                        </div>
                        <div className="w-full">
                            <p className="sm:text-lg text-base font-poppins font-medium text-semi-black">Gender *</p>
                            <DropDown
                                customerGender={data.gender_id}
                                setGender={(id) => setData("gender_id", id)}
                            />
                            {errors.gender_id && (<span className="text-red-700 font-poppins text-sm -mt-1">{errors.gender_id}</span>)}
                        </div>
                        <div>
                            <button type="submit" disabled={processing} className={`md:text-base text-sm font-poppins w-40 md:w-50 shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer py-2  px-3 text-center ${processing ? 'opacity-50' : 'opacity-100'}`}>
                                {processing ? 'Updating...' : 'Update Changes'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}