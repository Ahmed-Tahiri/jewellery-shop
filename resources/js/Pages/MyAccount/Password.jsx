import { Link, useForm } from "@inertiajs/react";
import { PasswordField } from './../../Shared/PasswordField';
import { useState } from "react";
export default function Password() {

    let { data, setData, errors, processing, put } = useForm({
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
    });
    let [isSuccessful, setIsSuccessful] = useState(false);
    let inputChangeHandler = (e) => { setData(e.target.name, e.target.value); }

    let formSubmitHandler = (e) => {
        e.preventDefault();
        put('/myaccount/password', {
            onSuccess: () => {
                setData({
                    current_password: '',
                    new_password: '',
                    new_password_confirmation: ''
                });
                setIsSuccessful(true);
            },
        }
        );
    }
    return (
        <div className="lg:w-6/8 md:w-5/7 w-10/12 flex flex-col items-start gap-y-7">
            <form onSubmit={formSubmitHandler} className="w-full flex flex-col items-start gap-y-4">
                <div className="flex flex-col items-start w-full gap-y-3">
                    <PasswordField label={'Current Password'} data={data.current_password} inputChangeHandler={inputChangeHandler} name="current_password" id="currentPassword" placeholder="Enter Current Password" error={errors.current_password} />

                    <div className="w-full flex justify-end">
                        <Link href={'/myaccount/password/forgot'} className="font-poppins -mt-1.5 sm:mt-0 text-xs md:text-sm font-semibold text-zinc underline hover:text-zinc-dark active:text-mustard">Forgot Password?</Link>
                    </div>
                    <div className={`${isSuccessful ? 'block' : 'hidden'}`}>
                        <span className="text-green-700 font-poppins text-sm">Password Updated Successfully</span>
                    </div>
                </div>
                <PasswordField label={'New Password'} data={data.new_password} inputChangeHandler={inputChangeHandler} name="new_password" id="newPassword" placeholder="Enter New Password" error={errors.new_password} />
                <PasswordField label={'Confirm New Password'} data={data.new_password_confirmation} inputChangeHandler={inputChangeHandler} name="new_password_confirmation" id="newPasswordConfirmation" placeholder="Re-enter New Password" error={errors.new_password_confirmation} />
                <div>
                    <button type="submit" disabled={processing} className={`font-poppins md:text-base text-sm w-40 md:w-50 shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer py-2  px-3 text-center ${processing ? 'opacity-50' : 'opacity-100'}`}>
                        {processing ? 'Updating Password...' : 'Update Password'}
                    </button>
                </div>
            </form>
        </div>
    );
}