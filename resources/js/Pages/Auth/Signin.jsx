import { Link, useForm } from "@inertiajs/react";
import { PasswordField } from "../../Shared/PasswordField";
import { FormTextInput } from "../../Shared/FormTextInput";
import { AuthLayout } from "../../Shared/AuthLayout";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";

export default function Signin() {
    let [rememberMe, setRememberMe] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: rememberMe
    });

    const inputChangeHandler = (e) => { setData(e.target.name, e.target.value); };
    const submitHandler = async (e) => {
        e.preventDefault();
        post("/signin", {
            onSuccess: () => {
                reset("password");
            },
        });
    };

    useEffect(() => { }, [errors.retry_after])
    return (
        <AuthLayout heading='Sign In' description="Please fill you detail to access your account.">
            <div className="w-full flex flex-col">
                <form className="w-full flex flex-col gap-y-5" onSubmit={submitHandler}>
                    <div className="flex flex-col items-start justify-start  w-full gap-y-2">
                        <FormTextInput type={'email'} data={data.email} label={'Email *'} placeholder={'Enter Email Address'} error={errors.email} name={'email'} id={'email'} inputChangeHandler={inputChangeHandler} />
                        {errors.auth && (<div><span className="text-red-700 text-sm font-poppins -mt-1">{errors.auth}</span></div>)}
                        {errors.retry_after && (<div><span className="text-red-700 text-sm font-poppins -mt-1">{errors.retry_after}</span></div>)}
                        {errors.retry_block && (<div><span className="text-red-700 text-sm font-poppins -mt-1">{errors.retry_block}</span></div>)}
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-10">
                        <PasswordField data={data.password} inputChangeHandler={inputChangeHandler} error={errors.password} label={'Password *'} />
                    </div>
                    <div className="w-full flex items-center justify-between -mt-3 mb-3">
                        <div className="flex flex-row gap-x-1 items-center mt-1">
                            <label htmlFor="remember" className="relative flex flex-row items-center gap-x-2 cursor-pointer select-none">
                                <div className="relative flex flex-row items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        name="remember"
                                        checked={rememberMe}
                                        onChange={(e) => {
                                            setRememberMe(e.target.checked);
                                            setData((prev) => ({ ...prev, remember: e.target.checked }));
                                        }}
                                        className="appearance-none h-[18px] w-[18px] border-2 border-zinc rounded  bg-transparent checked:bg-zinc checked:border-zinc" />
                                    <span className={`absolute top-[2px] left-[2px] flex items-center justify-center w-[14px] h-[14px] ${rememberMe ? "opacity-100" : "opacity-0"} transition-opacity duration-150`} > <FaCheck className="text-white text-xs" />   </span>
                                </div>
                                <span className="text-zinc font-poppins text-sm font-semibold">Remember me</span>
                            </label>

                        </div>
                        <div><Link className="text-zinc font-poppins text-sm font-semibold underline" href={'/password'}>Forgot Password?</Link></div>
                    </div>
                    <div className="w-full"><button type="submit" className="w-full p-2 bg-zinc text-white font-poppins text-base shadow-md font-normal cursor-pointer hover:bg-zinc-dark disabled:opacity-50" disabled={processing}> {processing ? "Signing in..." : "Sign In"}</button></div>
                </form>
                <div className="w-full text-center mt-3"><p className="font-poppins text-base text-semi-black font-medium">Don't have an account? <Link href={'/signup'} className="text-zinc underline hover:cursor-pointer hover:font-semibold active:text-mustard">Sign Up</Link></p></div>
            </div>
        </AuthLayout>
    );
}
