import { Link, useForm } from "@inertiajs/react";
import { FormTextInput } from "../../Shared/FormTextInput";
import { AuthLayout } from "../../Shared/AuthLayout";
import { DropDown } from "../../Shared/DropDown";
import { useEffect } from "react";

export default function SignupComplete() {
    const { data, setData, post, processing, errors, reset } = useForm({
        phone: "",
        gender_id: "",
    });

    useEffect(() => {
        setData("gender_id", data.gender_id || "");
    }, [data.gender_id, setData]);
    const inputChangeHandler = (e) => { setData(e.target.name, e.target.value); };
    const submitHandler = (e) => {
        e.preventDefault();
        post("/signup/complete", {
            onSuccess: () => {
                reset("password", "password_confirmation");
            },
        });
    };


    return (
        <AuthLayout heading='Complete Your Profile' description="Don't worry, only you can see your personal data.">
            <div className="w-full flex flex-col">
                <form className="w-full flex flex-col gap-y-5" onSubmit={submitHandler}>

                    <div className="flex flex-col items-start justify-start  w-full gap-y-2">
                        <FormTextInput type={'text'} data={data.email} label={'Phone *'} placeholder={'Enter Phone Number'} error={errors.phone} name={'phone'} id={'phone'} inputChangeHandler={inputChangeHandler} />
                    </div>
                    <div className="w-full flex flex-col gap-y-2">
                        <p className="text-lg font-poppins font-medium text-semi-black">Gender *</p>
                        <DropDown customerGender={data.gender_id} setGender={(id) => setData('gender_id', id)} />
                        {errors.gender_id && (<span className="text-red-700 text-sm -mt-1">{errors.gender_id}</span>)}
                    </div>

                    <div className="w-full"><button type="submit" className="w-full p-2 bg-zinc text-white font-poppins text-base shadow-md font-normal cursor-pointer hover:bg-zinc-dark disabled:opacity-50" disabled={processing}> {processing ? "Signing up..." : "Sign Up"}</button></div>
                </form>
                <div className="w-full text-center mt-3"><p className="font-poppins text-base text-semi-black font-medium">Already have an account? <Link href={'/signin'} className="text-zinc underline hover:cursor-pointer hover:font-semibold active:text-mustard">Sign In</Link></p></div>
            </div>
        </AuthLayout>
    );
}