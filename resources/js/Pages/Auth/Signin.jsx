import { Link, useForm } from "@inertiajs/react";
import { PasswordField } from "../../Shared/PasswordField";
import { FormTextInput } from "../../Shared/FormTextInput";
import { AuthLayout } from "../../Shared/AuthLayout";

export default function Signup() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const inputChangeHandler = (e) => { setData(e.target.name, e.target.value); };
    const submitHandler = (e) => {
        e.preventDefault();
        post("/signin", {
            onSuccess: () => {
                reset("password");
            },
        });
    };

    return (
        <AuthLayout heading='Sign In' description="Please fill you detail to access your account.">
            <div className="w-full flex flex-col">
                <form className="w-full flex flex-col gap-y-5" onSubmit={submitHandler}>
                    <div className="flex flex-col items-start justify-start  w-full gap-y-2">
                        <FormTextInput type={'email'} data={data.email} label={'Email *'} placeholder={'Enter Email Address'} error={errors.email} name={'email'} id={'email'} inputChangeHandler={inputChangeHandler} />
                        <div><span className="text-red-700 text-sm font-poppins -mt-1">{errors.auth}</span></div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-10">
                        <PasswordField data={data.password} inputChangeHandler={inputChangeHandler} error={errors.password} label={'Password *'} />
                    </div>
                    <div className="w-full"><button type="submit" className="w-full p-2 bg-zinc text-white font-poppins text-base shadow-md font-normal cursor-pointer hover:bg-zinc-dark disabled:opacity-50" disabled={processing}> {processing ? "Signing in..." : "Sign In"}</button></div>
                </form>
                <div className="w-full text-center mt-3"><p className="font-poppins text-base text-semi-black font-medium">Don't have an account? <Link href={'/signup'} className="text-zinc underline hover:cursor-pointer hover:font-semibold active:text-mustard">Sign Up</Link></p></div>
            </div>
        </AuthLayout>
    );
}