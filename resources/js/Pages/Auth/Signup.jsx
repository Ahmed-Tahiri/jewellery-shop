import { Link, useForm } from "@inertiajs/react";
import { PasswordField } from "../../Shared/PasswordField";
import { FormTextInput } from "../../Shared/FormTextInput";
import { AuthLayout } from "../../Shared/AuthLayout";

export default function Signup() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const inputChangeHandler = (e) => { setData(e.target.name, e.target.value); };
    const submitHandler = (e) => {
        e.preventDefault();
        post("/signup", {
            onSuccess: () => {
                reset("password", "password_confirmation");
            },
        });
    };


    return (
        <AuthLayout heading='Sign Up' description="Complete the signup form to create your account and discover jewellery that suits your style.">
            <div className="w-full flex flex-col">
                <form className="w-full flex flex-col gap-y-5" onSubmit={submitHandler}>
                    <div className="flex flex-col md:flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start  w-full md:w-5/10 gap-y-2">
                            <FormTextInput type={'text'} data={data.first_name} label={'First Name *'} placeholder={'Enter First Name'} error={errors.first_name} name={'first_name'} id={'fName'} inputChangeHandler={inputChangeHandler} />
                        </div>
                        <div className="flex flex-col items-start justify-start  w-full md:w-5/10 gap-y-2">
                            <FormTextInput type={'text'} data={data.last_name} label={'Last Name *'} placeholder={'Enter Last Name'} error={errors.last_name} name={'last_name'} id={'lName'} inputChangeHandler={inputChangeHandler} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start  w-full gap-y-2">
                        <FormTextInput type={'email'} data={data.email} label={'Email *'} placeholder={'Enter Email Address'} error={errors.email} name={'email'} id={'email'} inputChangeHandler={inputChangeHandler} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-10">
                        <PasswordField data={data.password} inputChangeHandler={inputChangeHandler} error={errors.password} label={'Password *'} />
                        <PasswordField data={data.password_confirmation} inputChangeHandler={inputChangeHandler} label={'Confirm Password *'} name="password_confirmation" id="passwordConfirmation" placeholder="Re-enter Your Password" />
                    </div>
                    <div className="w-full"><button type="submit" className="w-full p-2 bg-zinc text-white font-poppins text-base shadow-md font-normal cursor-pointer hover:bg-zinc-dark disabled:opacity-50" disabled={processing}> {processing ? "Signing up..." : "Sign Up"}</button></div>
                </form>
                <div className="w-full text-center mt-3"><p className="font-poppins text-base text-semi-black font-medium">Already have an account? <Link href={route('signin')} className="text-zinc underline hover:cursor-pointer hover:font-semibold active:text-mustard">Sign In</Link></p></div>
            </div>
        </AuthLayout>
    );
}